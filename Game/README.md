## Operation Principle

1. **내가 클릭 한 각도**로 공이 생긴다

```javascript
// Q. 사실 잘 이해하지 못했음. 동료에게 문의
const angle = Math.atan2(
  e.clientY - canvas.height / 2,
  e.clientX - canvas.width / 2
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
