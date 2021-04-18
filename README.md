## YAMDE

![yamde_logo_light](https://user-images.githubusercontent.com/69169115/114769765-86de3f00-9d62-11eb-9b28-c691f62f0e86.png)

Y.A.M.D.E - yet another markdown editor.

**Demo:** [View on Codesandbox.io](https://codesandbox.io/s/modest-framework-6zmgb?file=/src/App.js)

### 🌱 Features

- Responsive
- Light/dark mode support
- Lightweight: [Bundlephobia](https://bundlephobia.com/result?p=yamde)

### 🔧 Installation

`npm install yamde`

### 💻 Usage

Example implementation:

```jsx
import React, { useState } from 'react'
import Yamde from 'yamde'

export const App = () => {
  const [text, setText] = useState('')

  return <Yamde value={text} handler={setText} theme="light" />
}
```

### 🎨 Themes

There are two available themes: `light` and `dark`.

This can be controlled via the `theme` prop (defaults to `light` if non specified).

```jsx
<Yamde value={text} handler={setText} theme="light" />
```

![CleanShot 2021-04-15 at 00 26 39](https://user-images.githubusercontent.com/69169115/114793141-a6d12b00-9d81-11eb-9005-828d5ed6c931.gif)

```jsx
<Yamde value={text} handler={setText} theme="dark" />
```

![CleanShot 2021-04-15 at 00 28 50](https://user-images.githubusercontent.com/69169115/114793167-b5b7dd80-9d81-11eb-9ca9-c8c2a90e27c0.gif)
