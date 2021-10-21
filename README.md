# paint-room-challenge

This microservice is responsible for calculating the amount of paint cans to paint a 4-wall room.

(crd-verify-request)

## Installation

`yarn` is used to install and execute the micro-service

Dockerfile uses the `yarn.lock` file to install all the modules in production

### Installation:

```
yarn
```

### Execution:

Make sure you have created and started all instances of the required services. Otherwise, you can simply run the tests, this will force you to create all of them.

```
yarn start:dev
```

### Test:

```
yarn test

```

### Build:

```
yarn build

```

<br/>
<br/>

# Documentation

# ROUTE

```

METHOD.: POST
URL.: http://localhost/paint

```

## INPUT example - General all fields

<br/>

```json
{
  "wall": [
    {
      "heigth": 2,
      "width": 8
    },
    {
      "heigth": 2,
      "width": 8
    },
    {
      "heigth": 2,
      "width": 8,
      "door": 1
    },
    {
      "heigth": 2,
      "width": 8,
      "window": 1
    }
  ]
}
```
