/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type AdminTransferred = ContractEventLog<{
  oldAdmin: string;
  newAdmin: string;
  0: string;
  1: string;
}>;
export type OwnerTransferred = ContractEventLog<{
  oldOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface XvsVaultStore extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): XvsVaultStore;
  clone(): XvsVaultStore;
  methods: {
    admin(): NonPayableTransactionObject<string>;

    emergencyRewardWithdraw(
      _tokenAddress: string,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    owner(): NonPayableTransactionObject<string>;

    rewardTokens(arg0: string): NonPayableTransactionObject<boolean>;

    safeRewardTransfer(
      token: string,
      _to: string,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    setNewAdmin(_admin: string): NonPayableTransactionObject<void>;

    setNewOwner(_owner: string): NonPayableTransactionObject<void>;

    setRewardToken(
      _tokenAddress: string,
      status: boolean
    ): NonPayableTransactionObject<void>;
  };
  events: {
    AdminTransferred(cb?: Callback<AdminTransferred>): EventEmitter;
    AdminTransferred(
      options?: EventOptions,
      cb?: Callback<AdminTransferred>
    ): EventEmitter;

    OwnerTransferred(cb?: Callback<OwnerTransferred>): EventEmitter;
    OwnerTransferred(
      options?: EventOptions,
      cb?: Callback<OwnerTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AdminTransferred", cb: Callback<AdminTransferred>): void;
  once(
    event: "AdminTransferred",
    options: EventOptions,
    cb: Callback<AdminTransferred>
  ): void;

  once(event: "OwnerTransferred", cb: Callback<OwnerTransferred>): void;
  once(
    event: "OwnerTransferred",
    options: EventOptions,
    cb: Callback<OwnerTransferred>
  ): void;
}
