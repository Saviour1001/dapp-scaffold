// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { useNativeAccount } from "../contexts/accounts";
// import { sendTransaction, useConnection } from "../contexts/connection";
// import * as borsh from "borsh";
// import { WalletAdapter } from "@solana/wallet-adapter-base";
// import {
//   sendAndConfirmRawTransaction,
//   Transaction,
//   TransactionInstruction,
// } from "@solana/web3.js";
// import { useWallet } from "@solana/wallet-adapter-react";
// import { useUserAccounts } from "../hooks";

import { useNativeAccount } from "../contexts/accounts";
import { useConnection } from "../contexts/connection";
import { useUserAccounts, useUserBalance } from "../hooks";

// import { useWalletModal } from "@solana/wallet-adapter-ant-design";

// const programID = "8FNJE7trwMCvqeuzXVUyRP2Ef8xJzbdwNTnugQmNsBSu";
// class GreetingAccount {
//   txt = "";
//   constructor(fields: { txt: string } | undefined = undefined) {
//     if (fields) {
//       this.txt = fields.txt;
//     }
//   }
// }
// const GreetingSchema = new Map([
//   [GreetingAccount, { kind: "struct", fields: [["txt", "String"]] }],
// ]);

// const account = useUserAccounts();
// console.log(account);
// const husband = "Chandler";
// const wife = "Monica";
// const date = "2020-01-01";
// const obj = {
//   husband: husband,
//   wife: wife,
//   date: date,
// };
// let msg = JSON.stringify(obj);
// if (msg.length > 100) {
//   throw new Error("Message must be less than 30 characters");
// }
// if (msg.length < 100) {
//   msg = msg + "^".repeat(100 - msg.length);
// }
// const messageAccount = new GreetingAccount({ txt: msg });
// const instruction = new TransactionInstruction({
//   keys: [{ pubkey: account, isSigner: true, isWritable: true }],
//   programId: programID,
//   data: Buffer.from(borsh.serialize(GreetingSchema, messageAccount)),
// });

// sendTransaction(useConnection(), useWallet(), instruction, keypair);
