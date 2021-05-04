Repro for https://github.com/betaboon/vite-web-test-runner-plugin/issues/4

```
yarn
yarn test:clean
# This fails, but should pass

yarn test
# This will pass until you clean again
```
