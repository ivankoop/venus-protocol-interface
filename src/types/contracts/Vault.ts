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
export type Deposit = ContractEventLog<{
  user: string;
  rewardToken: string;
  pid: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type ExecutedWithdraw = ContractEventLog<{
  user: string;
  rewardToken: string;
  pid: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type ReqestedWithdrawal = ContractEventLog<{
  user: string;
  rewardToken: string;
  pid: string;
  amount: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;

export interface Vault extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Vault;
  clone(): Vault;
  methods: {
    ExecuteWithdrawal(
      _rewardToken: string,
      _pid: number | string | BN
    ): NonPayableTransactionObject<void>;

    RequestWithdrawal(
      _rewardToken: string,
      _pid: number | string | BN,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    _become(xvsVaultProxy: string): NonPayableTransactionObject<void>;

    add(
      _rewardToken: string,
      _allocPoint: number | string | BN,
      _token: string,
      _rewardPerBlock: number | string | BN,
      _withUpdate: boolean
    ): NonPayableTransactionObject<void>;

    admin(): NonPayableTransactionObject<string>;

    burnAdmin(): NonPayableTransactionObject<void>;

    deposit(
      _rewardToken: string,
      _pid: number | string | BN,
      _amount: number | string | BN
    ): NonPayableTransactionObject<void>;

    getAdmin(): NonPayableTransactionObject<string>;

    getEligibleWithdrawalAmount(
      _rewardToken: string,
      _pid: number | string | BN,
      _user: string
    ): NonPayableTransactionObject<string>;

    getPriorVotes(
      account: string,
      blockNumber: number | string | BN
    ): NonPayableTransactionObject<string>;

    getRequestedAmount(
      _rewardToken: string,
      _pid: number | string | BN,
      _user: string
    ): NonPayableTransactionObject<string>;

    getUserInfo(
      _rewardToken: string,
      _pid: number | string | BN,
      _user: string
    ): NonPayableTransactionObject<{
      amount: string;
      rewardDebt: string;
      0: string;
      1: string;
    }>;

    lockPeriod(): NonPayableTransactionObject<string>;

    massUpdatePools(_rewardToken: string): NonPayableTransactionObject<void>;

    pendingAdmin(): NonPayableTransactionObject<string>;

    pendingReward(
      _rewardToken: string,
      _pid: number | string | BN,
      _user: string
    ): NonPayableTransactionObject<string>;

    pendingXVSVaultImplementation(): NonPayableTransactionObject<string>;

    poolInfos(
      arg0: string,
      arg1: number | string | BN
    ): NonPayableTransactionObject<{
      token: string;
      allocPoint: string;
      lastRewardBlock: string;
      accRewardPerShare: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    poolLength(rewardToken: string): NonPayableTransactionObject<string>;

    rewardTokenAmountsPerBlock(
      arg0: string
    ): NonPayableTransactionObject<string>;

    set(
      _rewardToken: string,
      _pid: number | string | BN,
      _allocPoint: number | string | BN,
      _withUpdate: boolean
    ): NonPayableTransactionObject<void>;

    setNewAdmin(newAdmin: string): NonPayableTransactionObject<void>;

    setRewardAmountPerBlock(
      _rewardToken: string,
      _rewardAmount: number | string | BN
    ): NonPayableTransactionObject<void>;

    setWithdrawalLockingPeriod(
      _newPeriod: number | string | BN
    ): NonPayableTransactionObject<void>;

    setXvsStore(
      _xvs: string,
      _xvsStore: string
    ): NonPayableTransactionObject<void>;

    totalAllocPoints(arg0: string): NonPayableTransactionObject<string>;

    updatePool(
      _rewardToken: string,
      _pid: number | string | BN
    ): NonPayableTransactionObject<void>;

    xvsAddress(): NonPayableTransactionObject<string>;

    xvsStore(): NonPayableTransactionObject<string>;

    xvsVaultImplementation(): NonPayableTransactionObject<string>;
  };
  events: {
    AdminTransferred(cb?: Callback<AdminTransferred>): EventEmitter;
    AdminTransferred(
      options?: EventOptions,
      cb?: Callback<AdminTransferred>
    ): EventEmitter;

    Deposit(cb?: Callback<Deposit>): EventEmitter;
    Deposit(options?: EventOptions, cb?: Callback<Deposit>): EventEmitter;

    ExecutedWithdraw(cb?: Callback<ExecutedWithdraw>): EventEmitter;
    ExecutedWithdraw(
      options?: EventOptions,
      cb?: Callback<ExecutedWithdraw>
    ): EventEmitter;

    ReqestedWithdrawal(cb?: Callback<ReqestedWithdrawal>): EventEmitter;
    ReqestedWithdrawal(
      options?: EventOptions,
      cb?: Callback<ReqestedWithdrawal>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AdminTransferred", cb: Callback<AdminTransferred>): void;
  once(
    event: "AdminTransferred",
    options: EventOptions,
    cb: Callback<AdminTransferred>
  ): void;

  once(event: "Deposit", cb: Callback<Deposit>): void;
  once(event: "Deposit", options: EventOptions, cb: Callback<Deposit>): void;

  once(event: "ExecutedWithdraw", cb: Callback<ExecutedWithdraw>): void;
  once(
    event: "ExecutedWithdraw",
    options: EventOptions,
    cb: Callback<ExecutedWithdraw>
  ): void;

  once(event: "ReqestedWithdrawal", cb: Callback<ReqestedWithdrawal>): void;
  once(
    event: "ReqestedWithdrawal",
    options: EventOptions,
    cb: Callback<ReqestedWithdrawal>
  ): void;
}
