import {Entity, World} from 'modules/world.js';

import {Input} from 'components/input.js';
import {Position} from 'components/position.js';
import {Score} from 'components/score.js';
import {Button} from 'components/button.js';

function start() {

    console.log('start splashScreen scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.camera = {
      'x' :0,
      'y':0
    };

    this.world = new World();

    this.world.add(new Entity('home', [
        new Button("CHICKEN  SPACE"),
        new Position(this.size.width/2-90,this.size.height/2-100)
    ]));

    this.world.add(new Entity('button', [
        new Button("Press Space to Play"),
        new Position(this.size.width/2-90,this.size.height/2+10),
        new Input(['KEY_SPACE'])
    ]));


}

export {start};
