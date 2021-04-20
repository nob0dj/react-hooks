# @shqkel/use-title

## Installation

### yarn

`yarn add @shqkel/use-title`

### npm

`npm i @shqkel/use-title`

## Usage

```js
import React from "react";
import useTitle from "@shqkel/use-title";

function App() {
  cosnt initValue = "hello world";
  const {title, setTitle} = useTitle(initValue); // pass init value
  return <h1 contentEditable onInput={({target:{textContent}})=>{setTitle(textContent)}}>{initValue}</h1>;
}
```

> use returned variable `title` by `useTitle` function as read only!

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| initValue    | string | The title you want to use on your document at first | yes      |


