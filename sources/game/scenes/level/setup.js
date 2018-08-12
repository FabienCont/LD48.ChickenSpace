import {Keyboard} from 'modules/keyboard.js';
import {DOWN, LEFT, RIGHT, UP,SPACE} from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import {animate} from 'systems/level/animate.js';
import {input} from 'systems/level/input.js';
import {render} from 'systems/level/render.js';
import {movement} from 'systems/level/movement.js';
import {gravity} from 'systems/level/gravity.js';
import {collision} from 'systems/level/collision.js';
import {hitboxUpdate} from 'systems/level/hitboxUpdate.js';
import {renderText} from 'systems/level/renderText.js';
import {renderDecor} from 'systems/level/renderDecor.js';
import {updateBlock} from 'systems/level/updateBlock.js';

function setup() {

    console.log('setup level scene');

    this.inputs = [];

    this.keyboard = new Keyboard([RIGHT, LEFT, UP,SPACE], this.inputs);

    this.systems = {

        'animate': new System(['animation', 'spritesheet'], animate.bind(this)),
        'input': new System(['input'], input.bind(this)),
        'render': new System(['position', 'animation','real'], render.bind(this)),
        'renderText' : new System(['score','position'],renderText.bind(this)),
        'movement' : new System(['position','direction','hitbox'],movement.bind(this)),
        'gravity' : new System(['position','velocity'],gravity.bind(this)),
        'renderDecor' : new System(['decor','position'],renderDecor.bind(this)),
        'hitboxUpdate' :new System(['hitbox'],hitboxUpdate.bind(this)),
        'collision' : new System(['hitbox','velocity'],collision.bind(this)),
        'renderDecor' : new System(['decor','position'],renderDecor.bind(this)),
        'updateBlock' : new System(['hitbox','velocity','real','block'],updateBlock.bind(this))
    };
}

export {setup};
