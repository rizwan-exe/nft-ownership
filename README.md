# NFT Ownership Tracker

## Overview

The NFT Ownership Tracker is a Node.js script designed to simplify the process of retrieving all non-fungible tokens (NFTs) owned by a specific wallet address on the Ethereum blockchain. This project leverages the Alchemy NFT API to efficiently gather NFT ownership data, eliminating the need for manual blockchain parsing.

## Features

- Retrieves top 100 NFTs owned by a wallet address on Ethereum.
- Utilizes Alchemy's NFT API for seamless data retrieval.
- Parses API output to display relevant NFT metadata.
- Supports pagination for fetching additional NFTs if necessary.

## Prerequisites

Before running the script, ensure you have the following:

- Node.js and npm installed on your local machine.
- A free Alchemy account with an API key.

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/rxzwxn/nft-ownership
cd nft-ownership
```

2. Install dependencies:

```bash
npm install
```

3. Replace `<ALCHEMY_API_KEY>` in `main.js` with your Alchemy API key.

4. Run the script:

```bash
node main.js
```

## Output

The script outputs metadata about the NFTs owned by the specified wallet address, including title, description, token URI, media links, and more.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.


## Acknowledgements

- This project relies on the Alchemy NFT API for accessing blockchain data.
- Special thanks to the Alchemy team for providing comprehensive documentation and support.
