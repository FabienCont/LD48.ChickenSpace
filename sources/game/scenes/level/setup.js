import {Keyboard} from 'modules/keyboard.js';
import {DOWN, LEFT, RIGHT, UP} from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import {animate} from 'systems/level/animate.js';
import {input} from 'systems/level/input.js';
import {render} from 'systems/level/render.js';
import {movement} from 'systems/level/movement.js';
import {gravity} from 'systems/level/gravity.js';
import {collision} from 'systems/level/collision.js';
import {hitboxUpdate} from 'systems/level/hitboxUpdate.js';

function setup() {

    console.log('setup demo scene');

    this.inputs = [];

    this.keyboard = new Keyboard([RIGHT, LEFT, UP], this.inputs);

    this.systems = {

        'animate': new System(['animation', 'spritesheet'], animate.bind(this)),
        'input': new System(['input'], input.bind(this)),
        'render': new System(['position', 'animation'], render.bind(this)),
        'movement' : new System(['position','direction'],movement.bind(this)),
        'gravity' : new System(['position','velocity'],gravity.bind(this)),
        'hitboxUpdate' :new System(['hitbox'],hitboxUpdate.bind(this)),
        'collision' : new System(['hitbox','velocity'],collision.bind(this))

    };
}

export {setup};
