// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePost } from "./types/testchain/tx";
import { MsgDeletePost } from "./types/testchain/tx";
import { MsgCreatePost } from "./types/testchain/tx";


const types = [
  ["/fadeev.testchain.testchain.MsgUpdatePost", MsgUpdatePost],
  ["/fadeev.testchain.testchain.MsgDeletePost", MsgDeletePost],
  ["/fadeev.testchain.testchain.MsgCreatePost", MsgCreatePost],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdatePost: (data: MsgUpdatePost): EncodeObject => ({ typeUrl: "/fadeev.testchain.testchain.MsgUpdatePost", value: data }),
    msgDeletePost: (data: MsgDeletePost): EncodeObject => ({ typeUrl: "/fadeev.testchain.testchain.MsgDeletePost", value: data }),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/fadeev.testchain.testchain.MsgCreatePost", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
