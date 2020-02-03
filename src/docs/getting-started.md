---
title: OpenRPC Getting Started Guide | A guide through OpenRPC
---
# Getting Started

A guide through OpenRPC.

## Introduction
This field guide will help developers on their OpenRPC journey to code automation and tooling. It is meant to be a starting place for new users and a resource for existing users.

### What is JSON-RPC?
[JSON-RPC](https://www.jsonrpc.org/specification) is a light-weight remote procedure call (RPC) protocol.

It is transport agnostic in that the concepts can be used within the same process, over sockets, over http, websockets, or in many various message passing environments.

It uses the JSON data-interchange format. JSON is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language.

### A look at a JSON-RPC request

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "list_pets",
  "params": [
    1
  ]
}
```

### A look at a JSON-RPC response

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "uuid": 7,
      "name": "fluffy",
      "breed": "poodle"
    }
  ]
}
```

## Describing APIs

### What is OpenRPC?
[OpenRPC](https://open-rpc.org) is a standard, programming language-agnostic way to describe JSON-RPC 2.0 APIs.  Similar to what interface descriptions have done for lower-level programming, the OpenRPC Specification removes guesswork in calling a service.

### When to use OpenRPC
Use cases for machine-readable JSON-RPC API definition documents include, but are not limited to:

- interactive documentation
- code generation for documentation
- clients
- servers
- automation of test cases

These documents may either be produced and served statically or be generated dynamically from an application.

### Documentation Driven

The OpenRPC Specification does not require rewriting existing JSON-RPC APIs. It does not require binding any software to a service — the service being described may not even be owned by the creator of its description. It does, however, require the capabilities of the service be described in the structure of the OpenRPC Specification.

The OpenRPC Specification does not mandate a specific development process such as design-first or code-first. It does facilitate either technique by establishing clear interactions with a JSON-RPC API.

## Creating an OpenRPC Document

### How to describe JSON-RPC with OpenRPC

#### Petstore Example

```json
{
  "openrpc": "1.2.1",
  "info": {
    "version": "1.0.0",
    "title": "Demo Petstore"
  },
  "methods": [
    {
      "name": "listPets",
      "description": "List all pets",
      "params": [
        {
          "name": "limit",
          "description": "How many items to return at one time",
          "schema": {
            "type": "integer"
          }
        }
      ],
      "result": {
        "name": "pets",
        "description": "An array of pets",
        "schema": {
          "type": "array",
          "items": {
            "title": "Pet",
            "type": "object",
            "properties": {
              "uuid": {
                "type": "integer"
              },
              "name": {
                "type": "string"
              },
              "breed": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  ]
}
```

### Diving deeper with `ExamplePairings`
Adding `examples[]` to the `listPets` method will help users and machines get an idea of what an example request params/result data pairing will look like.

Here the example JSON-RPC request above is used to provide example data:

```json
    "examples": [
        {
          "name": "listPetExample",
          "description": "List pet example",
          "params": [
            {
              "name": "limit",
              "value": 1
            }
          ],
          "result": {
            "name": "listPetResultExample",
            "value": [
              {
                "uuid": 7,
                "name": "fluffy",
                "tag": "poodle"
              }
            ]
          }
        }
      ]
```

##### All Together now
```json
{
  "openrpc": "1.2.1",
  "info": {
    "version": "1.0.0",
    "title": "Demo Petstore"
  },
  "methods": [
    {
      "name": "listPets",
      "description": "List all pets",
      "params": [
        {
          "name": "limit",
          "description": "How many items to return at one time",
          "schema": {
            "type": "integer"
          }
        }
      ],
      "result": {
        "name": "pets",
        "description": "An array of pets",
        "schema": {
          "type": "array",
          "items": {
            "title": "Pet",
            "type": "object",
            "properties": {
              "uuid": {
                "type": "integer"
              },
              "name": {
                "type": "string"
              },
              "breed": {
                "type": "string"
              }
            }
          }
        }
      },
      "examples": [
        {
          "name": "listPetExample",
          "description": "List pet example",
          "params": [
            {
              "name": "limit",
              "value": 1
            }
          ],
          "result": {
            "name": "listPetResultExample",
            "value": [
              {
                "uuid": 7,
                "name": "fluffy",
                "tag": "poodle"
              }
            ]
          }
        }
      ]
    }
  ]
}
```

## OpenRPC Toolbox

After creating an OpenRPC Document, the following tools can be used to improve your new or existing JSON-RPC API by generating code, interactive documentation, clients and typings for various languages and more:

- Playground
- Inspector
- Code Generator
    - API Clients
    - Server Skeletons
- Typings

You can find these tools at [https://github.com/open-rpc](https://github.com/open-rpc) or find more information at [https://open-rpc.org/developers/](https://open-rpc.org/developers/).

## Improve your Developer Experience

The OpenRPC created in the previous example has provided a well documented API and clients for users to interact with, and a central document for multiple stakeholders to contribute to. This opens up not only API design but the entire developer experience to a much broader audience.

## Next Steps

- Read the specification. [spec.open-rpc.org](http://spec.open-rpc.org#introduction)
- Started using OpenRPC [open-rpc.org/use](/use/)
- Learn more about OpenRPC and its technology [open-rpc.org/learn](/learn/)
- Build on OpenRPC Tooling [open-rpc.org/developers](/developers/)
