import BigNumber from 'bignumber.js';
import { TransactionCategory, TransactionEvent } from 'types';
import { ITransactionResponse } from './types';

const formatTransaction = ({
  amount,
  createdAt,
  updatedAt,
  category,
  event,
  ...rest
}: ITransactionResponse) => ({
  ...rest,
  amount: new BigNumber(amount),
  createdAt: new Date(createdAt),
  updatedAt: new Date(updatedAt),
  category: category as TransactionCategory,
  event: event as TransactionEvent,
});
export default formatTransaction;
