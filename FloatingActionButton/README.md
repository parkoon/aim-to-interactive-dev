1. 로컬 변수 활용
2. 각 요소에 아래와 같은 transform

```
transform: rotate(calc(-1 * var(--angle)))
    translateY(calc(-1 * var(--radius) * var(--factor))) rotate(var(--angle));
```

3. transition delay
