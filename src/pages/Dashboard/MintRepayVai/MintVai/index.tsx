/** @jsxImportSource @emotion/react */
import React, { useContext, useMemo, useCallback } from 'react';
import BigNumber from 'bignumber.js';
import type { TransactionReceipt } from 'web3-core';

import { AuthContext } from 'context/AuthContext';
import useSuccessfulTransactionModal from 'hooks/useSuccessfulTransactionModal';
import { convertCoinsToWei, convertWeiToCoins } from 'utilities/common';
import { VError, formatVErrorToReadableString } from 'errors';
import { AmountForm, IAmountFormProps } from 'containers/AmountForm';
import {
  FormikSubmitButton,
  EnableToken,
  LabeledInlineContent,
  FormikTokenTextField,
  ConnectWallet,
  toast,
} from 'components';
import { useVaiUser } from 'hooks/useVaiUser';
import { useGetVaiTreasuryPercentage, useMintVai } from 'clients/api';
import { useTranslation } from 'translation';
import { TokenId } from 'types';
import PLACEHOLDER_KEY from 'constants/placeholderKey';
import useConvertToReadableCoinString from 'hooks/useConvertToReadableCoinString';
import { VAI_ID } from '../constants';
import { useStyles } from '../styles';
import getReadableFeeVai from './getReadableFeeVai';

export interface IMintVaiUiProps {
  disabled: boolean;
  isMintVaiLoading: boolean;
  mintVai: (value: BigNumber) => Promise<TransactionReceipt | undefined>;
  limitWei?: BigNumber;
  mintFeePercentage?: number;
}

export const MintVaiUi: React.FC<IMintVaiUiProps> = ({
  disabled,
  limitWei,
  mintFeePercentage,
  isMintVaiLoading,
  mintVai,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { openSuccessfulTransactionModal } = useSuccessfulTransactionModal();

  const limitTokens = useMemo(
    () => (limitWei ? convertWeiToCoins({ valueWei: limitWei, tokenId: VAI_ID }).toFixed() : '0'),
    [limitWei?.toFixed()],
  );

  // Convert limit into VAI
  const readableVaiLimit = useConvertToReadableCoinString({
    valueWei: limitWei,
    tokenId: VAI_ID,
  });

  const hasMintableVai = limitWei?.isGreaterThan(0) || false;

  const getReadableMintFee = useCallback(
    (valueWei: string) => {
      if (!mintFeePercentage) {
        return PLACEHOLDER_KEY;
      }

      const readableFeeVai = getReadableFeeVai({
        valueWei: new BigNumber(valueWei || 0),
        mintFeePercentage,
      });
      return `${readableFeeVai} (${mintFeePercentage}%)`;
    },
    [mintFeePercentage],
  );

  const onSubmit: IAmountFormProps['onSubmit'] = async amountTokens => {
    const amountWei = convertCoinsToWei({
      value: new BigNumber(amountTokens),
      tokenId: VAI_ID,
    });

    try {
      // Send request to repay VAI
      const res = await mintVai(amountWei);

      // Display successful transaction modal
      if (res) {
        openSuccessfulTransactionModal({
          title: t('mintRepayVai.mintVai.successfulTransactionModal.title'),
          content: t('mintRepayVai.mintVai.successfulTransactionModal.message'),
          amount: {
            valueWei: amountWei,
            tokenId: 'xvs' as TokenId,
          },
          transactionHash: res.transactionHash,
        });
      }
    } catch (error) {
      let { message } = error as Error;
      if (error instanceof VError) {
        message = formatVErrorToReadableString(error);
      }
      toast.error({
        message,
      });
    }
  };

  return (
    <ConnectWallet message={t('mintRepayVai.mintVai.connectWallet')}>
      <EnableToken title={t('mintRepayVai.mintVai.enableToken')} vTokenId={VAI_ID}>
        <AmountForm onSubmit={onSubmit} css={styles.tabContentContainer}>
          {({ values }) => (
            <>
              <div css={styles.ctaContainer}>
                <FormikTokenTextField
                  name="amount"
                  css={styles.textField}
                  tokenId={VAI_ID}
                  max={limitTokens}
                  disabled={disabled || isMintVaiLoading || !hasMintableVai}
                  rightMaxButton={{
                    label: t('mintRepayVai.mintVai.rightMaxButtonLabel'),
                    valueOnClick: limitTokens,
                  }}
                />

                <LabeledInlineContent
                  css={styles.getRow({ isLast: false })}
                  iconName={VAI_ID}
                  label={t('mintRepayVai.mintVai.vaiLimitLabel')}
                >
                  {readableVaiLimit}
                </LabeledInlineContent>

                <LabeledInlineContent
                  css={styles.getRow({ isLast: true })}
                  iconName="fee"
                  label={t('mintRepayVai.mintVai.mintFeeLabel')}
                >
                  {getReadableMintFee(values.amount)}
                </LabeledInlineContent>
              </div>

              <FormikSubmitButton
                loading={isMintVaiLoading}
                disabled={disabled}
                fullWidth
                variant="secondary"
                enabledLabel={t('mintRepayVai.mintVai.btnMintVai')}
              />
            </>
          )}
        </AmountForm>
      </EnableToken>
    </ConnectWallet>
  );
};

const MintVai: React.FC = () => {
  const { account } = useContext(AuthContext);
  const { mintableVai } = useVaiUser();

  const { data: vaiTreasuryPercentage, isLoading: isGetVaiTreasuryPercentageLoading } =
    useGetVaiTreasuryPercentage();

  const { mutateAsync: contractMintVai, isLoading: isMintVaiLoading } = useMintVai();

  // Convert limit into wei of VAI
  const limitWei = React.useMemo(
    () => convertCoinsToWei({ value: mintableVai, tokenId: VAI_ID }),
    [mintableVai.toFixed()],
  );

  const mintVai: IMintVaiUiProps['mintVai'] = async amountWei => {
    if (!account) {
      // This error should never happen, since the form inside the UI component
      // is disabled if there's no logged in account
      throw new VError({ type: 'unexpected', code: 'undefinedAccountErrorMessage' });
    }
    return contractMintVai({
      fromAccountAddress: account.address,
      amountWei,
    });
  };

  return (
    <MintVaiUi
      disabled={!account || isGetVaiTreasuryPercentageLoading}
      limitWei={limitWei}
      mintFeePercentage={vaiTreasuryPercentage}
      isMintVaiLoading={isMintVaiLoading}
      mintVai={mintVai}
    />
  );
};

export default MintVai;
