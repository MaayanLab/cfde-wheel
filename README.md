# CFDE Navigation Wheel

The **CFDE Navigation Wheel** is a reusable UI component that renders an interactive navigation wheel for the *Common Fund Data Ecosystem (CFDE)*, allowing users to visually explore CFDE portal links and resources.

This package adds the CFDE Navigation Wheel to your site:
![alt text](img/wheel2.png)

## Features

- Embeddable React/JavaScript component  
- Designed to integrate seamlessly into modern web apps  
- Provides visual navigation consistent with CFDE branding  
- Includes Storybook for local development and preview

---

## Installation

### Prerequisites

Before installing, ensure you have:

- **Node.js ≥ 14**
- **npm** or **yarn**
- A project that supports npm modules (e.g. React, Next.js)

---

### Install from GitHub

This package is **not published to npm**. Install it directly from GitHub.

Using SSH:

```bash
npm install git+ssh://github.com/MaayanLab/cfde-wheel.git
```

Using HTTPS:

```bash
npm install https://github.com/MaayanLab/cfde-wheel.git
```

>  This package is written in TypeScript. Make sure your build setup supports TypeScript dependencies.

---

## Usage

### React / Next.js

```jsx
import CFDEWheel from "cfde-wheel";

export default function MyApp() {
  return <CFDEWheel />;
}
```

### Next.js (App Router) Notes

If you are using **Next.js with the App Router**, mark the component as a client component:

```jsx
'use client';

import CFDEWheel from "cfde-wheel";

export default function Home() {
  return <CFDEWheel />;
}
```

This component relies on browser APIs and must be rendered on the client.

---

## Development

To work on the component locally:

### Install Dependencies

```bash
npm install
```

### Run Storybook

Storybook is included for local development and UI preview:

```bash
npm run storybook
```

This will start Storybook (usually at `http://localhost:6006`) where you can view and interact with the navigation wheel in isolation.

---

## Build

To build the component:

```bash
npm run build
```

This will generate the production build output (typically in a `dist/` directory).

---

## Alternative: Browser Embed

If you need a **browser-ready, non-React embed**, see the related repository:

- https://github.com/TACC/cfde-wheel-embed

That project provides a bundled version of the wheel that can be embedded via a `<script>` tag.

---

## Example Layout Usage

```jsx
function Sidebar() {
  return (
    <aside>
      <CFDEWheel />
    </aside>
  );
}
```
