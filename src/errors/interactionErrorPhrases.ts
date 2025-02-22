import { t } from 'translation';

export const interactionErrorPhrases = {
  collateralRequired: t('markets.errors.collateralRequired'),
  collateralEnableError: (args: { assetName: string }) =>
    t('markets.errors.collateralEnableError', args),
  collateralDisableError: (args: { assetName: string }) =>
    t('markets.errors.collateralDisableError', args),
  accountError: t('markets.errors.accountError'),
};
