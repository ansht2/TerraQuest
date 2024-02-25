import Phaser from 'phaser';
import * as web3 from '@solana/web3.js';
import anchor, { AnchorProvider, Program, BN } from "@project-serum/anchor";
const { Wallet } = require("@project-serum/anchor");
import IDL from "./idl.json";



async function  login() {
    const anchor = require('@project-serum/anchor');
    const programId = new anchor.web3.PublicKey('3yRJ1uQKVVyveRjZ3caBwLysSxhgLsVe73N2HCCAZSwE'); // Your program's public key
    const network = 'https://api.devnet.solana.com';
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'));

    const wallet = new Wallet(web3.Keypair.fromSecretKey(new Uint8Array([169, 58, 135, 185, 188, 9, 19, 85, 74, 20, 214, 241, 249, 6, 191, 169, 45, 232, 233, 212, 190, 125, 50, 41, 171, 118, 158, 228, 104, 190, 12, 221, 230, 179, 46, 202, 92, 190, 227, 97, 54, 94, 246, 193, 131, 105, 172, 151, 9, 25, 71, 99, 124, 60, 120, 215, 237, 48, 29, 64, 208, 153, 222, 246])));
    const provider = new AnchorProvider(connection, wallet, {
        commitment: "confirmed",
    });
    const a = JSON.stringify(IDL)
    const b = JSON.parse(a)
    const program = new Program(b, programId, provider);
    // const keypair = anchor.web3.Keypair.fromSecretKey(new Uint8Array([118, 151, 213, 57, 2, 200, 134, 51, 190, 176, 38, 24, 112, 108, 161, 201, 130, 63, 203, 250, 166, 88, 184, 44, 159, 140, 76, 53, 41, 117, 85, 205, 28, 241, 6, 118, 84, 207, 55, 251, 253, 165, 198, 90, 61, 129, 18, 36, 101, 8, 139, 122, 211, 1, 223, 203, 0, 137, 7, 143, 110, 166, 213, 67])); // Your wallet's secret key

    const gameAccount = anchor.web3.Keypair.generate();
    const playerAccount = anchor.web3.Keypair.generate();
    const userAccount = web3.Keypair.fromSecretKey(new Uint8Array([106, 178, 47, 145, 213, 19, 57, 179, 123, 99, 134, 86, 30, 49, 143, 243, 190, 25, 228, 1, 102, 115, 174, 42, 143, 9, 234, 206, 9, 110, 22, 200, 175, 23, 178, 82, 192, 145, 122, 205, 152, 101, 221, 240, 154, 1, 135, 83, 156, 173, 92, 111, 131, 58, 176, 148, 105, 103, 20, 119, 228, 14, 100, 16]));

    const username = "PlayerName";
    const playerPublicKey = wallet.publicKey; // Your wallet must have this public key
    const coords = {lat: 38.897957, lng: -77.03656}; // Example coordinates, change these as necessary
    //const plr = publickey; //this should aim at game account initializer
    try {
        const tx = await program.methods.chooseCountry(username, coords).accounts({
            "game": gameAccount,
            "user": playerAccount,
            "systemProgram": programId
        }).signers([playerAccount]).rpc();

        console.log("TX::::!!!")
        console.log(tx);
        //
        //   // "player" is the account to be transformed based on your program structurek
        //   // adjust the arguments here to align with your Rust program's expectations
        //   accounts: {
        //     game: gameAccountPubkey,
        //     user: playerPublicKey,
        //     systemProgram: SystemProgram.programId,
        //   },
        // });

        //
        //   const transaction = new web3.Transaction();
        //
        // const data = Buffer.from(/* Your serialized data */);
        // const keys = [
        //   // {pubkey: new web3.PublicKey(/* account address */), isSigner: false, isWritable: true/false},
        //   // Include all necessary accounts as per the `ChooseCountry` context
        // ];
        //
        // const instruction = new web3.TransactionInstruction({
        //   keys,
        //   programId,
        //   data,
        // });
        //
        //
        //
        // await program?.methods.initializeGame(new anchor.BN(42)).accounts({
        //   game: gameAccount.publicKey,
        //   user: pg.wallet.publicKey,
        //   systemProgram: web3.SystemProgram.programId,
        // }).signers([gameAccount]).rpc();
    }
    finally {
        console.log("LOGGED IN!!!!!")
    }
}

login().finally(()=>(console.log("okasd")))