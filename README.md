# CFDE Navigation Wheel

This package adds the CFDE Navigation Wheel to your site:
![alt text](img/wheel2.png)

## Installation
```
npm install git+ssh://github.com/MaayanLab/cfde-wheel
```

## Usage

```
import CFDEWheel from 'cfde-wheel'

export const MyComponent = () => {
	// Link opens to a new window
	return <CFDEWheel new_window={true}/>
}
```

Note for Next.js: This is a client component so you need to add `'use client'` in the file.

## Run Storybook

```
npm run storybook
```
This should open `http://localhost:6006/` where you can view the component.

## Notes

To get the most up-to-date DCC list, add raw.githubusercontent.com to your Content Security Policy. Otherwise, the wheel will default to the `dccs.json` at the time of install. 