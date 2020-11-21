# Interactive Developer Course

## Clone

> https://www.bbc.com/korean/resources/idt-48d3c9a7-4063-4289-9726-611b5ea9d7b5

## Demo

> https://parkoon.github.io/aim-to-interactive-dev/BBClone/

## Note

```css
img {
  /* 이미지는 반응형으로 동작 할 수 있게, 컨테이너가 줄어들었을 때 이미지도 같이 줄어들게 처리 */
  max-width: 100%;
}
```

```css
 {
  /* 기본 폰트 사이즈 16px 이므로 1rem = 16px */
  padding: 0 1rem;
}
```

```css
.sticky {
  /* 스크롤 도중 화면 끝에 걸리면 이미지는 멈추고 스크롤만 동작하는 효과를 준다. */
  position: sticky;
  top: 0;

  /* sticky를 사용하면 높이가 없어지므로 높이를 따로 지정해줘야 한다. */
  height: 100vh;
}
```

```css
.img-wrapper {
  /* 이미지를 하나로 곂치기 위해 absolute 를 사용한다. */
  position: absolute;
  left: 0;
  top: 0;
}
```

```css
.text {
  /* static 이 아니면 z-index를 가지고 있어서 z-index 값에 따라 위치가 지정되고, 지정이 되어있지 않으면 아래 있는 영역이 위로 올라온다. */
  position: relative;
}
```

```css
.animation {
  /* translate 에 %를 사용하면 내 크기를 의미한다. */
  transform: translateX(-100%);

  /* `0.5초` 이후에 `일정한 속도`로 이동한다. */
  transition: 1.5s 0.5s linear;
}
```

```css
/* data-index 의 값이 5인 bird class */
[data-index="5"] .bird {
}
```
