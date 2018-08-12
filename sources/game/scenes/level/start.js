import {Entity, World} from 'modules/world.js';
import {random} from 'modules/random.js';

import {Animation} from 'components/animation.js';
import {Direction} from 'components/direction.js';
import {Input} from 'components/input.js';
import {Position} from 'components/position.js';
import {Spritesheet} from 'components/spritesheet.js';
import {Velocity} from 'components/velocity.js';
import {Hitbox} from 'components/hitbox.js';
import {Score} from 'components/score.js';
import {Decor} from 'components/decor.js';
import {Real} from 'components/real.js';
import {TouchGround} from 'components/touchGround.js';
import {Block} from 'components/block.js';

function start() {

    console.log('start level scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.camera = {
      'x' :0,
      'y':0
    };


    this.world = new World();
    this.world.limitY= 0;

      var startHeightSize =80;
      var startWidthSize=40;
    this.world.add(new Entity('hero', [
        new Direction('DOWN'),
        new Input(['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        //new Position(80, this.size.height-150),
        new Position(80, this.size.height-150),
        new Real(),
        new Score(),
      //  new Hitbox(80, this.size.height-150,80, 120,true,true),
        new Hitbox(80, this.size.height-150,startWidthSize, startHeightSize,true,true),
        new Velocity(0,0,-10,7),
      //  new Animation(this.assets.images['mainChar'], [{'x': 0, 'y': 0, 'width': 80, 'height': 120}]),
        new Animation(this.assets.images['mainChar'], [{'x': 0, 'y': 0, 'width': startWidthSize, 'height': startHeightSize}]),
        new Spritesheet(
            this.assets.images['mainChar'],
             {
               'IDLE_UP': [{'x': 96, 'y': 0, 'width': 32, 'height': 32}],
               'IDLE_RIGHT': [{'x': 96, 'y': 32, 'width': 32, 'height': 32}],
               'IDLE_DOWN': [{'x': 96, 'y': 64, 'width': 32, 'height': 32}],
               'IDLE_LEFT': [{'x': 96, 'y': 96, 'width': 32, 'height': 32}],

               'RUN_UP': [{'x': 0, 'y': 0, 'width': 32, 'height': 32}, {'x': 32, 'y': 0, 'width': 32, 'height': 32}, {'x': 64, 'y': 0, 'width': 32, 'height': 32}, {'x': 96, 'y': 0, 'width': 32, 'height': 32}],
               'RUN_RIGHT': [{'x': 0, 'y': 32, 'width': 32, 'height': 32}, {'x': 32, 'y': 32, 'width': 32, 'height': 32}, {'x': 64, 'y': 32, 'width': 32, 'height': 32}, {'x': 96, 'y': 32, 'width': 32, 'height': 32}],
               'RUN_DOWN': [{'x': 0, 'y': 64, 'width': 32, 'height': 32}, {'x': 32, 'y': 64, 'width': 32, 'height': 32}, {'x': 64, 'y': 64, 'width': 32, 'height': 32}, {'x': 96, 'y': 64, 'width': 32, 'height': 32}],
               'RUN_LEFT': [{'x': 0, 'y': 96, 'width': 32, 'height': 32}, {'x': 32, 'y': 96, 'width': 32, 'height': 32}, {'x': 64, 'y': 96, 'width': 32, 'height': 32}, {'x': 96, 'y': 96, 'width': 32, 'height': 32}]

            }
        )
    ]));

    this.world.add(new Entity('floor', [
        new Position(0, this.size.height-40),
        new Animation(this.assets.images['floor'], [{'x': 0, 'y': 0, 'width': 650, 'height': 40}]),
        new Hitbox(0, this.size.height-40,450,40,false),
        new Real(),
        new TouchGround(),
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

    this.world.boxCount=0;
    for (var i = 0; i< 30; i++ ){
        this.world.add(new Entity('box', [
            new Position(random(450), (-180*(i+1))),
            new Animation(this.assets.images['box'], [{'x': 0, 'y': 0, 'width': 40, 'height': 40}]),
            new Hitbox(50, -1000,40,40,false),
            new Velocity(0,0,-1.2,1.2),
            new Real(),
            new Block()
        ]));
        this.world.boxCount++;
    }

}

export {start};
