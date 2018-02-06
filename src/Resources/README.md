# Notes on resouces

## Syn - Standalone Synthentic Event Library

Syn is a synthetic event library used to simulate user behaviour in the browser.
Examples include typing, clicking, moving, and dragging.

Source: https://github.com/bitovi/syn
Version: v0.13.0

Build instructions:
```
git clone https://github.com/bitovi/syn
cd syn
git checkout v0.13.0
npm install
npm run build
cp dist/global/syn.js /path/to/mink/src/Resources/syn.js
```

A compatability layer is also included to handle behavioural changes between version 0.0.2 of the library which was historically used for a long time.
