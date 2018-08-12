import {Keyboard} from 'modules/keyboard.js';
import {SPACE} from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import {input} from 'systems/ending/input.js';
import {render} from 'systems/ending/render.js';
import {renderText} from 'systems/ending/renderText.js';
import {renderButton} from 'systems/ending/renderButton.js';

import {animate as animateGame}  from 'systems/level/animate.js';
import {render as renderGame }from 'systems/level/render.js';
import {movement} from 'systems/level/movement.js';
import {gravity} from 'systems/level/gravity.js';
import {renderDecor} from 'systems/level/renderDecor.js';
import {collision as collisionGame} from 'systems/level/collision.js';
import {hitboxUpdate} from 'systems/level/hitboxUpdate.js';
import {updateBlock} from 'systems/level/updateBlock.js';

function setup() {

    console.log('setup ending scene');

    this.inputs = [];

    this.keyboard = new Keyboard([SPACE], this.inputs);

    this.systems = {

        'render': new System(['position', 'animation','endStuff'], render.bind(this)),
        'renderText' : new System(['score','position','endStuff'], renderText.bind(this)),
        'renderButton' : new System (['position','button','endStuff'], renderButton.bind(this)),
        'input': new System(['input'], input.bind(this)),
        'renderGame': new System(['position', 'animation','real'], renderGame.bind(this)),
        'animate': new System(['animation', 'spritesheet'], animateGame.bind(this)),
        'movement' : new System(['position','direction','hitbox'],movement.bind(this)),
        'gravity' : new System(['position','velocity'],gravity.bind(this)),
        'renderDecor' : new System(['decor','position'],renderDecor.bind(this)),
        'hitboxUpdate' :new System(['hitbox'],hitboxUpdate.bind(this)),
        'collisionGame' : new System(['hitbox','velocity'],collisionGame.bind(this)),
        'updateBlock' : new System(['hitbox','velocity','real','block'],updateBlock.bind(this))
    };
}

export {setup};
