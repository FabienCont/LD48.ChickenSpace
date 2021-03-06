import {Keyboard} from 'modules/keyboard.js';
import {SPACE} from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import {input} from 'systems/splashScreen/input.js';
import {render} from 'systems/splashScreen/render.js';
import {renderButton} from 'systems/splashScreen/renderButton.js';
import {renderTextHint} from 'systems/splashScreen/renderTextHint.js';

import {renderDecor} from 'systems/level/renderDecor.js';

function setup() {

    console.log('setup splashScreen scene');

    this.inputs = [];

    this.keyboard = new Keyboard([SPACE], this.inputs);

    this.systems = {


        'render': new System(['position', 'animation','real'], render.bind(this)),
        'renderButton' : new System (['position','button'],renderButton.bind(this)),
        'input': new System(['input'], input.bind(this)),
        'renderDecor' : new System(['decor','position'],renderDecor.bind(this)),
        'renderTextHint' : new System(['hint','position'],renderTextHint.bind(this))

    };
}

export {setup};
