import React from "react";
import { Application, Assets, Sprite } from "pixi.js";

//import image
import header_bg from "../../assets/images/showdown/header.png";
import base_img from "../../assets/images/showdown/showdown-off.png";
import vegas_img from "../../assets/images/showdown/vegas@2x.png";
import slots_img from "../../assets/images/showdown/slots@2x.png";
import s_img from "../../assets/images/showdown/s@2x.png";
import h_img from "../../assets/images/showdown/h@2x.png";
import o1_img from "../../assets/images/showdown/o-1@2x.png";
import w1_img from "../../assets/images/showdown/w-1@2x.png";
import d_img from "../../assets/images/showdown/d@2x.png";
import o2_img from "../../assets/images/showdown/o-2@2x.png";
import w2_img from "../../assets/images/showdown/w-2@2x.png";
import n_img from "../../assets/images/showdown/n@2x.png";
import bolt from "../../assets/images/showdown/bolt@2x.png";
import must_drop from "../../assets/images/showdown/must_drop.png";

const Showdown = () => {
  (async () => {
    const app = new Application();
    await app.init({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    document.body.appendChild(app.canvas);
    await Assets.load([
      header_bg,
      base_img,
      vegas_img,
      slots_img,
      s_img,
      h_img,
      o1_img,
      w1_img,
      d_img,
      o2_img,
      w2_img,
      n_img,
      bolt,
      must_drop,
    ]);
    app.stage.eventMode = "static";
    const sprites = {};

    function createAndAddSprite(image, x, y, scaleX, scaleY, alpha = 0) {
      const sprite = Sprite.from(image);
      sprite.anchor.set(0.5);
      sprite.x = x;
      sprite.y = y;
      sprite.scale.set(scaleX, scaleY);
      sprite.alpha = alpha;
      app.stage.addChild(sprite);
      return sprite;
    }

    function setAlphaWithDelay(sprite, alpha, delay) {
      setTimeout(() => {
        sprite.alpha = alpha;
      }, delay);
    }

    sprites.header = createAndAddSprite(
      header_bg,
      app.screen.width / 2,
      app.screen.height / 3,
      1.5,
      2,
      0.8
    );
    sprites.base = createAndAddSprite(
      base_img,
      app.screen.width / 2,
      app.screen.height / 3,
      1,
      1,
      1
    );
    sprites.vegas = createAndAddSprite(
      vegas_img,
      app.screen.width / 2.4,
      app.screen.height / 4.6,
      1,
      1,
      0
    );
    sprites.slots = createAndAddSprite(
      slots_img,
      app.screen.width / 1.65,
      app.screen.height / 4.6,
      1,
      1,
      0
    );
    sprites.s_image = createAndAddSprite(
      s_img,
      app.screen.width / 3.1,
      app.screen.height / 2.7,
      1,
      1,
      0
    );

    sprites.h_image = createAndAddSprite(
      h_img,
      app.screen.width / 2.65,
      app.screen.height / 2.7,
      1,
      1,
      0
    );
    sprites.o1_image = createAndAddSprite(
      o1_img,
      app.screen.width / 2.4,
      app.screen.height / 2.72,
      1,
      1,
      0
    );
    sprites.w1_image = createAndAddSprite(
      w1_img,
      app.screen.width / 2.12,
      app.screen.height / 2.82,
      1,
      1,
      0
    );
    sprites.d_image = createAndAddSprite(
      d_img,
      app.screen.width / 1.88,
      app.screen.height / 2.89,
      1,
      1,
      0
    );
    sprites.o2_image = createAndAddSprite(
      o2_img,
      app.screen.width / 1.74,
      app.screen.height / 2.85,
      1,
      1,
      0
    );
    sprites.w2_image = createAndAddSprite(
      w2_img,
      app.screen.width / 1.61,
      app.screen.height / 2.73,
      1,
      1,
      0
    );
    sprites.n_image = createAndAddSprite(
      n_img,
      app.screen.width / 1.475,
      app.screen.height / 2.7,
      1,
      1,
      0
    );
    sprites.bolt_image = createAndAddSprite(
      bolt,
      app.screen.width / 1.96,
      app.screen.height / 4.9,
      1,
      1,
      0
    );
    sprites.must_drop_image = createAndAddSprite(
      must_drop,
      app.screen.width / 2,
      app.screen.height / 2,
      0.75,
      0.75,
      0
    );

    const delay = 300; // Time in milliseconds
    setAlphaWithDelay(sprites.vegas, 1, 200);
    setAlphaWithDelay(sprites.slots, 1, 200);
    setAlphaWithDelay(sprites.must_drop_image, 1, 2500);
    for (let i = 0, alpha = 0; i < 4; i++, alpha = 1 - alpha) {
      setAlphaWithDelay(sprites.vegas, alpha, 700 + i * 100);
      setAlphaWithDelay(sprites.slots, alpha, 700 + i * 100);
      setAlphaWithDelay(sprites.must_drop_image, alpha, 3000 + i * 100);
    }
    setAlphaWithDelay(sprites.s_image, 1, 700);
    setAlphaWithDelay(sprites.h_image, 1, 900);
    setAlphaWithDelay(sprites.o1_image, 1, 1100);
    setAlphaWithDelay(sprites.w1_image, 1, 1300);
    setAlphaWithDelay(sprites.d_image, 1, 1500);
    setAlphaWithDelay(sprites.o2_image, 1, 1700);
    setAlphaWithDelay(sprites.w2_image, 1, 1900);
    setAlphaWithDelay(sprites.n_image, 1, 2100);

    for (let i = 0, alpha = 1; i < 7; i++, alpha = 1 - alpha) {
      setAlphaWithDelay(sprites.bolt_image, alpha, 1100 + i * 70);
    }

    setInterval(() => {
      for (let i = 0, alpha = 1; i < 7; i++, alpha = 1 - alpha) {
        setAlphaWithDelay(sprites.bolt_image, alpha, 1100 + i * 70);
      }
    }, 10000);
  })();
  return <></>;
};

export default Showdown;
