let app;
let player;

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
  stage.on("pointermove", movePlayer);
};

const movePlayer = (e) => {
  let position = e.data.global;

  player.x = position.x;
  player.y = position.y;
};
