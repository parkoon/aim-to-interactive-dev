class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    // 가변적인 스크린 사이즈 대응을 위해 리사이즈 이벤트를 처리해주는 것이 좋다.
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageWidth * 2;

    this.ctx.scale(2, 2);
  }
}

window.onload = () => {
  new App();
};
