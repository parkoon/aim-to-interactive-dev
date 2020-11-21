# Interactive Developer Course

## Clone

> https://www.bbc.com/korean/resources/idt-48d3c9a7-4063-4289-9726-611b5ea9d7b5

## Demo

> https://parkoon.github.io/aim-to-interactive-dev/BBClone/

## Note (About CSS)

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

## Note (About JS)

```javascript
// 1. TIP 💡각 HTML 에 일일히 data-index 속성을 노가다로 부여 할 수 있지만, 페이지가 로드 되었을 때 태그 를 찾아 for 문으로 data-index 를 삽입 할 수 있다.

// 2. TIP 💡 data-action 에 함수명을 부여하고 그 태그 시점에서 data-action 에 접근하여 함수를 실행한다.

// 3. `getBoundingClientRect` 메소드를 통해 현재 나의 위치, 크기 등등을 찾을 수 있다. 스크롤 + 위치에 따른 이벤트 처리 시 아주 유용하게 쓰일 수 있겠다.

// 4. 스크롤 이벤트가 동작 할 때 처리가 필요한 모든 태그를 돌아 조건에 맞는 태그를 찾는다.

// 5. 4번의 경우 태그가 몇 개 없다면 성능상 문제가 되지 않겠지만 한 두개가 아니라면 성능 이슈가 생길 수 있다. 이 때 `IntersectionObserver` 를 사용한다. `IntersectionObserver` 는 관찰 할 객체를 지정하고 그 객체가 사라지거나 보여질 때 특정 동작을 할 수 있다.
```
