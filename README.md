# Possible TypeScript bug

## Reproduction

### Reproduce with nix

enter a nix shell

```
nix-shell
```

follow `Reproduce with global npm + node`

### Reproduce with global npm + node

```
npx tsc
```

## Outcome

TypeScript will tell you:

```
testcase.ts:3:39 - error TS7030: Not all code paths return a value.

3 export function f1(q: Q | undefined): string {
                                        ~~~~~~


Found 1 error.
```