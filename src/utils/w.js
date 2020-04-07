let inst = null;

function w() {
  if (!inst) inst = new W();
  return inst;
}

class W {
  h;
  w;

  static instance() {
    if (this._instance) return this._instance;
    return (this._instance = new this());
  }

  constructor() {
    this.tick();
    window.addEventListener("resize", this.tick);
  }

  tick = () => {
    this.h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    this.w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  };
}

export { W, w };
