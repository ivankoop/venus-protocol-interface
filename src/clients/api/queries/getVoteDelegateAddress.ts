import { NULL_ADDRESS } from 'constants/address';
import { XvsVault } from 'types/contracts';

export interface IGetVoteDelegatesInput {
  xvsVaultContract: XvsVault;
  accountAddress: string;
}

export type GetVoteDelegatesOutput = string | undefined;

/**
 *
 * @param address string (valid Ethereum address)
 * @returns Delegated address, if no delegation returns undefined
 */
const getVoteDelegates = async ({
  xvsVaultContract,
  accountAddress,
}: IGetVoteDelegatesInput): Promise<GetVoteDelegatesOutput> => {
  const resp = await xvsVaultContract.methods.delegates(accountAddress).call();
  return resp !== NULL_ADDRESS ? resp : undefined;
};

export default getVoteDelegates;
