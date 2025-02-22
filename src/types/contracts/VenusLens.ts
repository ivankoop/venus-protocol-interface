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

export interface VenusLens extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VenusLens;
  clone(): VenusLens;
  methods: {
    BLOCKS_PER_DAY(): NonPayableTransactionObject<string>;

    getAccountLimits(
      comptroller: string,
      account: string
    ): NonPayableTransactionObject<[string[], string, string]>;

    getGovProposals(
      governor: string,
      proposalIds: (number | string | BN)[]
    ): NonPayableTransactionObject<
      [
        string,
        string,
        string,
        string[],
        string[],
        string[],
        string[],
        string,
        string,
        string,
        string,
        boolean,
        boolean
      ][]
    >;

    getGovReceipts(
      governor: string,
      voter: string,
      proposalIds: (number | string | BN)[]
    ): NonPayableTransactionObject<[string, boolean, boolean, string][]>;

    getVenusVotes(
      xvs: string,
      account: string,
      blockNumbers: (number | string | BN)[]
    ): NonPayableTransactionObject<[string, string][]>;

    getXVSBalanceMetadata(
      xvs: string,
      account: string
    ): NonPayableTransactionObject<[string, string, string]>;

    getXVSBalanceMetadataExt(
      xvs: string,
      comptroller: string,
      account: string
    ): NonPayableTransactionObject<[string, string, string, string]>;

    pendingVenus(
      holder: string,
      comptroller: string
    ): NonPayableTransactionObject<string>;

    vTokenBalances(
      vToken: string,
      account: string
    ): NonPayableTransactionObject<
      [string, string, string, string, string, string]
    >;

    vTokenBalancesAll(
      vTokens: string[],
      account: string
    ): NonPayableTransactionObject<
      [string, string, string, string, string, string][]
    >;

    vTokenMetadata(
      vToken: string
    ): NonPayableTransactionObject<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    >;

    vTokenMetadataAll(
      vTokens: string[]
    ): NonPayableTransactionObject<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ][]
    >;

    vTokenUnderlyingPrice(
      vToken: string
    ): NonPayableTransactionObject<[string, string]>;

    vTokenUnderlyingPriceAll(
      vTokens: string[]
    ): NonPayableTransactionObject<[string, string][]>;

    vXvsTokenAddress(): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
