// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdatePost: (data) => ({ typeUrl: "/fadeev.testchain.testchain.MsgUpdatePost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/fadeev.testchain.testchain.MsgDeletePost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/fadeev.testchain.testchain.MsgCreatePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
