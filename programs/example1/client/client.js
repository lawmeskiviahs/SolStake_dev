const assert = require("assert");
const anchor = require("@project-serum/anchor");
// import { SystemProgram } from '@solana/web3.js';
// const SystemProgram = require("@solana/web3.js")
const { SystemProgram } = anchor.web3;
const provider = anchor.Provider.env();
const program = anchor.workspace.Example1;
const programId = new anchor.web3.PublicKey("4Y8PGKfY7q5hxDA17h6UHk5eACo6k9idy1chiHb7HKsp");
// async function main (){}
async function deposit() {
    const userPubKey = "5wbnW6cAoT2Rdwk5ecdgpCzoCp3g9rV7Vr5jNFAJBbCY";
    const referrerPubKey = "";
    const remainingAccounts=[];
    const idl = await anchor.Program.fetchIdl(programId, provider);
  const program = new anchor.Program(idl, programId, provider);
  let amount = 2;
    // const instructions = [
    //     await program.instruction.deposit(amount,{
    //         accounts: {
    //             fromWallet: userPubKey,
    //             payer: userPubKey,
    //             referrer: referrerPubKey,
    //             systemProgram: SystemProgram.programId,
    //             rent: anchor.web3.SYSVAR_RENT_PUBKEY,
    //             clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
    //             recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
    //             instructionSysvarAccount: anchor.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
    //         },
    //         remainingAccounts:
    //           remainingAccounts.length > 0 ? remainingAccounts : undefined,
    //       }),
    //   ];
    
    await program.rpc.deposit({
      accounts: {
          fromWallet: userPubKey,
          payer: userPubKey,
          referrer: referrerPubKey,
          systemProgram: SystemProgram.programId,
          // rent: anchor.web3.SYSVAR_RENT_PUBKEY,
          // clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
          // recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
          // instructionSysvarAccount: anchor.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
      },
      remainingAccounts:
        remainingAccounts.length > 0 ? remainingAccounts : undefined,
    }, amount);
}
deposit();
console.log('deposit function called.')