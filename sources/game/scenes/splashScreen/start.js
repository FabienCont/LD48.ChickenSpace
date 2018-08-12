import {Entity, World} from 'modules/world.js';
import {random} from 'modules/random.js';

import {Input} from 'components/input.js';
import {Position} from 'components/position.js';
import {Score} from 'components/score.js';
import {Button} from 'components/button.js';

import {Animation} from 'components/animation.js';
import {Hitbox} from 'components/hitbox.js';
import {Real} from 'components/real.js';
import {TouchGround} from 'components/touchGround.js';

import {Direction} from 'components/direction.js';
import {Decor} from 'components/decor.js';
import {Hint} from 'components/hint.js';
function start() {

    this.firstParty=true;

    console.log('start splashScreen scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.camera = {
      'x' :0,
      'y':0
    };

    this.world = new World();

    this.world.add(new Entity('floor', [
        new Position(0, this.size.height-30),
        new Animation(this.assets.images['floor'], [{'x': 0, 'y': 0, 'width': 650, 'height': 40}],10),
        new Hitbox(0, this.size.height-40,450,20,false),
        new Real(),
        new TouchGround()
    ]));


        this.world.nuageCount=0;
        for (var i = 0; i< 200; i++ ){
          var direction = "LEFT";
          if (i%2==0) direction ="RIGHT";

          this.world.add(new Entity('nuage', [
              new Direction(direction),
              new Decor(),
              new Position(random(350), 200 -(300*(i))),
              new Animation(this.assets.images['nuage'], [{'x': 0, 'y': 0, 'width': 200, 'height': 200}])
          ]));
          this.world.nuageCount++;

        }


    this.world.add(new Entity('home', [
        new Button("CHICKEN  SPACE"),
        new Position(this.size.width/2-110,110)
    ]));



    this.world.add(new Entity('button', [
        new Button("Press Space to Play"),
        new Position(this.size.width/2-120,this.size.height/2-130),
        new Input(['KEY_SPACE'])
    ]));


    this.world.add(new Entity('hint', [
        new Hint ("Go the highest you can jumping on boxes!"),
        new Position(this.size.width/2-160,this.size.height/2+80)
    ]));


    this.world.add(new Entity('keyboard', [
        new Decor(),
        new Position(this.size.width/2-120, (this.size.height/2)+100),
        new Animation(this.assets.images['keyboard'], [{'x': 0, 'y': 0, 'width': 335, 'height': 250}],0,0.5)
    ]));


}

export {start};
