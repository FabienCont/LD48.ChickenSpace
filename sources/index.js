import {Theatre} from 'core/theatre.js';

new Theatre({

    'container': document.body,
    'debug': true,
    'framerate': 60,
    'loading': 'loading',
    'opening': 'demo',
    'size': {
        'width': 450 ,
        'height': 600
    }
});