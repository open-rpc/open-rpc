# OpenRPC

[The OpenRPC Specification](https://spec.open-rpc.org/) defines a standard, programming language-agnostic interface description for JSON-RPC 2.0 APIs.

The specification emulates [OpenAPI](https://github.com/OAI/OpenAPI-Specification), the successful and widely adopted specification for REST APIs but simplified and adapted for JSON-RPC. Developers will save time from hand-writing code and will have better inter-organizational communication by removing guesswork on which services and capabilities are supported.

## Why JSON-RPC?

[JSON-RPC 2.0](https://www.jsonrpc.org/specification) was released 2010-03-26, it has been used in critical software like Bitcoin and Ethereum. It is protocol agnostic and allows bidrectional transports which is a great fit for blockchain and web applications. Also, [REST is pretty ambiguous](https://www.nurkiewicz.com/2015/07/restful-considered-harmful.html); there are probably no 2 developers that will produce the same REST API. JSON-RPC is a serious contender for services because it is simple, JSON based, and protocol agnostic. 

## Resources

## Specification

The specification for OpenRPC. A programming language and transport agnostic interface description for JSON-RPC 2.0 APIs.

https://spec.open-rpc.org/

https://github.com/open-rpc/spec

### `playground`

The OpenRPC playground a web IDE for developers to write their open-api based documents.

https://playground.open-rpc.org/

https://github.com/open-rpc/playground

### `examples`

This resource provides example open-rpc documents. Put one through the generator-client or playground!

https://github.com/open-rpc/examples

### `generator-client`

The generator client is a tool to build clients by simply passing an open-rpc document.

https://github.com/open-rpc/generator-client

### `mock-server`

Provides a mock JSON-RPC API with Service Discovery for a given OpenRPC document.

https://github.com/open-rpc/mock-server


### `meta-schema`

JSON Schema representation of the OpenRPC Specification.

https://github.com/open-rpc/meta-schema


### `server-js`

JSON-RPC 2.0 Server implementation that supports multiple transport protocols.

https://github.com/open-rpc/server-js

### `client-js`

A browser-compatible JSON-RPC client with multiple transports.

https://github.com/open-rpc/client-js

### `typings`

CLI and Javascript/Typescript methods for generating types for your OpenRPC API.

https://github.com/open-rpc/typings

### `schema-utils-js`

Javascript utils for OpenRPC.

https://github.com/open-rpc/schema-utils-js

### Share your OpenRPC implmentations

The OpenRPC developer community is looking for feedback and collaborative development around it's projects. We'd love to hear what you're working on or what you're excited about. Chat with us on Discord!

<img src="https://img.shields.io/badge/chat-on%20discord-informational.svg?link=https://discord.gg/Tf55C7d&amp;style=plastic">

### Resources

- [EDCON 2019 Talk](https://youtu.be/UgSPMZ9FQ4Q?t=379)
