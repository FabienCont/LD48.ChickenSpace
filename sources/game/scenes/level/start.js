import {Entity, World} from 'modules/world.js';

import {Animation} from 'components/animation.js';
import {Direction} from 'components/direction.js';
import {Input} from 'components/input.js';
import {Position} from 'components/position.js';
import {Spritesheet} from 'components/spritesheet.js';
import {Velocity} from 'components/velocity.js';
import {Hitbox} from 'components/hitbox.js';
import {Score} from 'components/Score.js';

function start() {

    console.log('start demo scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.camera = {
      'x' :0,
      'y':0
    };
    this.world = new World();

    this.world.add(new Entity('hero', [
        new Direction('DOWN'),
        new Input(['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        new Position(this.size.width/2, this.size.height-150),
        new Score(),
        new Hitbox(this.size.width/2, this.size.height-150,80, 120,true,true),
        new Velocity(0,0,-8,6),
        new Animation(this.assets.images['mainChar'], [{'x': 0, 'y': 0, 'width': 80, 'height': 120}]),
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
        new Hitbox(0, this.size.height-40,450,40,false)
    ]));

    for (var i = 0; i< 30; i++ ){
        this.world.add(new Entity('box', [
            new Position(Math.floor(Math.random() * Math.floor(600)), (-600+(-100*(i+1)))),
            new Animation(this.assets.images['box'], [{'x': 0, 'y': 0, 'width': 40, 'height': 40}]),
            new Hitbox(50, -1000,40,40,false),
            new Velocity(0,0,-1.2,1.2)
        ]));
    }

}

export {start};
