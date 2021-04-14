## YAMDE

![yamde_logo_light](https://user-images.githubusercontent.com/69169115/114769765-86de3f00-9d62-11eb-9b28-c691f62f0e86.png)

Y.A.M.D.E - yet another markdown editor.

### 🌱 Features

- Responsive
- Light/dark mode support
- Lightweight: _@todo add bundlephobia link_

### 🔧 Installation

`npm install yamde`

### 💻 Usage

Example implementation:

```jsx
import React, { useState } from 'react'
import Yamde from 'yamde'

export const App = () => {
  const [text, setText] = useState('')

  return <Yamde value={text} handler={setText} theme="light">
}
```

### 🎨 Themes

There are two available themes: `light` and `dark`.

This can be controlled via the `theme` prop (defaults to `light` if non specified).

```jsx
  <Yamde value={text} handler={setText} theme="light">
```

```jsx
  <Yamde value={text} handler={setText} theme="dark">
```
