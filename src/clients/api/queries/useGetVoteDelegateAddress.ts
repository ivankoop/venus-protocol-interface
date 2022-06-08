import { useQuery, QueryObserverOptions } from 'react-query';

import { getVoteDelegateAddress, GetVoteDelegatesOutput } from 'clients/api';
import FunctionKey from 'constants/functionKey';
import { useXvsVaultProxyContract } from 'clients/contracts/hooks';

type Options = QueryObserverOptions<
  GetVoteDelegatesOutput,
  Error,
  GetVoteDelegatesOutput,
  GetVoteDelegatesOutput,
  [FunctionKey.GET_VOTE_DELEGATE_ADDRESS, string]
>;

const useGetVoteDelegateAddress = (
  { accountAddress }: { accountAddress: string },
  options?: Options,
) => {
  const xvsVaultContract = useXvsVaultProxyContract();

  return useQuery(
    [FunctionKey.GET_VOTE_DELEGATE_ADDRESS, accountAddress],
    () => getVoteDelegateAddress({ xvsVaultContract, accountAddress }),
    options,
  );
};

export default useGetVoteDelegateAddress;
