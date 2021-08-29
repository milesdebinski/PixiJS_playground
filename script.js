let app;
let player;
let keys = {};
let keysDiv;

window.onload = () => {
  app = new PIXI.Application({
    width: 600,
    height: 400,
    backgroundColor: 0xaaaaaa,
  });

  document.body.appendChild(app.view);
  const stage = app.stage;

  // player object
  player = new PIXI.Sprite.from("img/player.png");
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;

  stage.addChild(player);
  // mouse interactions
  stage.interactive = true;
  // stage.on("pointermove", movePlayer);

  // keyboard event handlers
  window.addEventListener("keydown", keysDown);
  window.addEventListener("keyup", keysUp);

  app.ticker.add(gameLoop);
  keysDiv = document.querySelector("#keys");
};

const keysDown = (e) => {
  keys[e.keyCode] = true;
};
const keysUp = (e) => {
  keys[e.keyCode] = false;
};

const gameLoop = () => {
  keysDiv.innerHTML = JSON.stringify(keys);
  const speed = 5;
  if (keys[37]) {
    player.x -= speed;
  }
  if (keys[38]) {
    player.y -= speed;
  }
  if (keys[39]) {
    player.x += speed;
  }
  if (keys[40]) {
    player.y += speed;
  }
};

const movePlayer = (e) => {
  let position = e.data.global;
  player.x = position.x;
  player.y = position.y;
};
