This project generates a running ticker for new blocks being produced on Ethereum. Data is provided via a websocket subscription that enables new blocks to be updated in the app as they are mined on chain.  

To run the project:

Clone the repository
npm install
Create a project in Infura
Infura creates an websocket endpoint for the main network. Paste this as the argument for the WebsocketProvider() in web3.js.
npm start
