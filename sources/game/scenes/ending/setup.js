import {Keyboard} from 'modules/keyboard.js';
import {SPACE} from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import {input} from 'systems/ending/input.js';
import {render} from 'systems/ending/render.js';
import {renderText} from 'systems/ending/renderText.js';
import {renderButton} from 'systems/ending/renderButton.js';

function setup() {

    console.log('setup ending scene');

    this.inputs = [];

    this.keyboard = new Keyboard([SPACE], this.inputs);

    this.systems = {


        'render': new System(['position', 'animation'], render.bind(this)),
        'renderText' : new System(['score','position'], renderText.bind(this)),
        'renderButton' : new System (['position','button'], renderButton.bind(this)),
        'input': new System(['input'], input.bind(this)),

    };
}

export {setup};
