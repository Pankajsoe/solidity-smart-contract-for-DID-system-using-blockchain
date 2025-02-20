# Decentralized Identity Verification (DID)

This project is a blockchain-based identity verification system using smart contracts. It ensures secure, immutable, and transparent identity verification, eliminating the need for centralized authorities.

## Features

- Decentralized and secure identity management
- Smart contracts for automated verification
- Cryptographically secured and tamper-proof identities
- Privacy and control for users
- Interoperability across various platforms

## Getting Started

### Prerequisites

- Node.js
- Truffle
- Ganache
- MetaMask

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/did-verification.git
    cd did-verification
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Compile the smart contracts:
    ```sh
    truffle compile
    ```

4. Deploy the smart contracts:
    ```sh
    truffle migrate
    ```

### Running the Application

1. Start Ganache:
    ```sh
    ganache-cli
    ```

2. Run the application:
    ```sh
    npm start
    ```

3. Open your browser and go to `http://localhost:3000`

## Directory Structure

- `contracts/`: Contains the smart contracts for the project
- `migrations/`: Contains the migration scripts for deploying the smart contracts
- `src/`: Contains the frontend code for the application
- `test/`: Contains the test scripts for the smart contracts

## License

This project is licensed under the MIT License.
