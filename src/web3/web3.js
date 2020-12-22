import Web3 from 'web3';

export const web3 = new Web3('https://mainnet.infura.io/v3/d0ccbf276f91405cb3898aaa3e760eb7');
export const web3ws = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/d0ccbf276f91405cb3898aaa3e760eb7'));
