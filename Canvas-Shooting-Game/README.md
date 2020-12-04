# Interactive Developer Course #6

## Demo

> https://parkoon.github.io/aim-to-interactive-dev/Canvas-Shooting-Game/

## Note (About CSS)

## Note (About JS)

## Operation Principle

1. **내가 클릭 한 각도**로 공이 생긴다
   > 우리는 x와 y의 증가량을 알기위해 우선 각도를 구하고 그 각도를 이용해 x와 y의 값을 각각 구한다.

```javascript
const angle = Math.atan2(
  e.clientY - canvas.height / 2, // from 캔버스의 중심점에서
  e.clientX - canvas.width / 2 // from 캔버스의 중심점에서
);

const velocity = {
  x: Math.cos(angle),
  y: Math.sin(angle),
};
```

```javascript
function animate() {
  requestAnimationFrame(animate); // 반복해서 실행한다

  ctx.clearRect(0, 0, canvas.width, canvas.height); // 그 전에 그려진 것을 지우기 위해 clearRect 메소드를 이용해 캔버스의 모든 드로잉을 지운다.
  player.draw(); // 플레이어는 남아 있어야 하기 때문에 clearRect 뒤에 넣어준다.

  projectiles.forEach((projectile) => {
    projectile.update(); // update 내부에서 draw 함수가 실행된다.
  });
}
```

2. 삼각함수

- **sin** : @도인 산을 올라갔을 때 얼마큼 올라갔을까에 대한 값으로 특정 각도에 대해 y 의 값을 구할 수 있다.
- **cos** : 코각(90-@)도의 사인 값이라고 생각하면 된다. x 의 값을 구할 수 있다.
- **각** : sin(2) 의 의미는 무엇일까? 2도? 아니다. 우리가 알고 있던 각 180도 90도는 모두 의미 없는 각이다. 각을 표현하는 것은 길이이다. 아크를 그렸을 때 매번 길이가 다르지만, 반지름이 길이가 1인 원을 기준으로 아크를 그렸을때의 길이를 각의 값이라고 한다. 여기서 **파이** 가 **3.14...** **180도** 가 나올 수 있는 이유는 반원의 길이를 그리면 1 + 1 + 1.14... 이 나오게 된다.
- **atan**: 탄젠트의 x, y의 값을 통해 각을 알 수 있다.
