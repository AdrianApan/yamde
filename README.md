## YAMDE

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

  return <Yamde value={text} handler={setText}>
}
```
