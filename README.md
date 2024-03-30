# API Cipher Vault

## Overview

The API Cipher Vault is a secure encryption platform that provides a set of services for encrypting and managing sensitive information. It offers multiple encryption methods using the AES (Advanced Encryption Standard) algorithm to ensure robust security for messages. Additionally, it includes features for managing API keys and messages, with options for creating, updating, and deleting resources as needed.

## Access the application in: https://api-cipher-vault.jpcortesg.online/api-docs/

<img style="ali" src="https://github.com/jpcortesg1/cipher-vault/assets/60229777/3ea90db8-e891-464f-9026-a43f6936b564" />


## Features

- **Text Encryption**: Utilizes AES encryption to secure text messages.
- **API Key Management**:
  - Create new API keys.
  - Refresh existing API keys.
  - Delete API keys.
- **Message Handling**:
  - Create encrypted messages.
  - Decrypt encrypted messages.
  - Delete expired messages.

## Technologies Used

- **Backend**:
  - Node.js
  - Express
  - TypeScript
  - MongoDB
- **Containerization**:
  - Docker
  - Docker Compose
- **Web Server**:
  - Nginx
- **Security**:
  - HTTPS (configured with Certbot)
- **Deployment**:
  - AWS EC2 (with assigned domain)
- **Documentation**:
  - Swagger
- **Scheduled Tasks**:
  - node-cron
- **Dependency Management**:
  - pnpm
- **Testing**:
  - [Add details about testing frameworks and methodologies]

## Installation

Run:
```
$ git clone https://github.com/jpcortesg1/cipher-vault.git
cd cipher-vault
```

Create file .env like .env_example
```
PORT=PORT
URI_DB_MONGO=URI_DB_MONGO
KEY_CIPHER_STR=KEY_CIPHER
IV_CIPHER_STR=IV_CIPHER
```

## Usage

For use run:
```
$ docker compose up --build
```
