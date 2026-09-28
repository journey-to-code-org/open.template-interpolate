# open.template-interpolate

Small dependency-free placeholder interpolation with nested object paths and configurable missing-value behavior.

## Install

```bash
npm install @journey-to-code/open-template-interpolate
```

## Usage

```js
interpolate("Hello {user.name}", { user: { name: "Ada" } });
// "Hello Ada"
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
