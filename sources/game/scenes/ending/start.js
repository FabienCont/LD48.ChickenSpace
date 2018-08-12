import {Entity, World} from 'modules/world.js';

import {Input} from 'components/input.js';
import {Position} from 'components/position.js';
import {Score} from 'components/score.js';
import {Button} from 'components/button.js';
import {EndStuff} from 'components/endStuff.js'

function start() {

    console.log('start ending scene');

    this.world.add(new Entity('final score', [
        new Score(this.score),
        new Position(this.size.width/2-40,this.size.height/2-100),
        new EndStuff()
    ]));

    this.world.add(new Entity('button', [
        new Button("Press Space to Retry"),
        new Position(this.size.width/2-100,this.size.height/2+10),
        new Input(['KEY_SPACE']),
        new EndStuff()
    ]));


}

export {start};
