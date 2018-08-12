/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return World; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return System; });
function Entity(name, components) {

    function add(components) {

        components.forEach((component) => {

            this.components[component.name] = component;
        });
    }

    function get(component) {

        return this.components[component];
    }

    function has(components) {

        for (let iterator = 0, length = components.length; iterator < components.length; iterator += 1) {

            const component = components[iterator];

            if (this.components.hasOwnProperty(component) === false) {

                return false;
            }
        }

        return true;
    }

    function remove(components) {

        for (let iterator = 0, length = components.length; iterator < components.length; iterator += 1) {

            const component = components[iterator];

            if (this.components.hasOwnProperty(component) === true) {

                delete this.components[component];
            }
        }
    }

    this.components = {};
    this.name = name;

    this.add = add;
    this.get = get;
    this.has = has;
    this.remove = remove;

    this.add(components)
}

function System(components, handler) {

    function update(entities) {

        entities.forEach((entity) => {

            if (entity.has(components) === true) {

                handler(entity);
            }
        });
    }

    this.update = update;
}

function World() {

    function add(entity) {

        this.entities.push(entity);
    }

    function remove(entity) {

        this.entities.splice(this.entities.indexOf(entity), 1);
    }

    this.entities = [];

    this.add = add;
    this.remove = remove;
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
function Position(x, y) {

    this.name = 'position';

    this.x = x;
    this.y = y;
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keynames_js__ = __webpack_require__(38);


function Keyboard(codes, inputs) {

    const names = [];
    const states = {};

    function blur() {

        for (let state in states) {

            if (states.hasOwnProperty(state)
            && states[state] === true) {

                states[state] = false;

                inputs.push({

                    'type': 'KEYBOARD',
                    'action': state,
                    'state': 'UP'
                });
            }
        }
    }

    function destroy() {

        removeEventListener('blur', blur);
        removeEventListener('keydown', keydown);
        removeEventListener('keyup', keyup);
    }

    function keydown(event) {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        if (index !== -1
        && states[names[index]] === false) {

            event.preventDefault();

            states[names[index]] = true;

            inputs.push({

                'type': 'KEYBOARD',
                'action': names[index],
                'state': 'DOWN'
            });
        }
    }

    function keyup(event) {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        if (index !== -1
        && states[names[index]] === true) {

            event.preventDefault();

            states[names[index]] = false;

            inputs.push({

                'type': 'KEYBOARD',
                'action': names[index],
                'state': 'UP'
            });
        }
    }

    function setup() {

        addEventListener('blur', blur);
        addEventListener('keydown', keydown);
        addEventListener('keyup', keyup);
    }

    codes.forEach((code) => {

        if (typeof __WEBPACK_IMPORTED_MODULE_0__keynames_js__["a" /* keynames */][code] !== 'undefined') {

            const name = 'KEY_' + __WEBPACK_IMPORTED_MODULE_0__keynames_js__["a" /* keynames */][code];

            codes.push(code);
            names.push(name);

            states[name] = false;
        }
    });

    setup.call(this);

    this.destroy = destroy;
    this.setup = setup;
}

// exports current module as an object



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TAB */
/* unused harmony export ENTER */
/* unused harmony export SHIFT */
/* unused harmony export CTRL */
/* unused harmony export ALT */
/* unused harmony export ESC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RIGHT; });
/* unused harmony export DOWN */
/* unused harmony export ZERO */
/* unused harmony export ONE */
/* unused harmony export TWO */
/* unused harmony export THREE */
/* unused harmony export FOUR */
/* unused harmony export FIVE */
/* unused harmony export SIX */
/* unused harmony export SEVEN */
/* unused harmony export EIGHT */
/* unused harmony export NINE */
/* unused harmony export A */
/* unused harmony export B */
/* unused harmony export C */
/* unused harmony export D */
/* unused harmony export E */
/* unused harmony export F */
/* unused harmony export G */
/* unused harmony export H */
/* unused harmony export I */
/* unused harmony export J */
/* unused harmony export K */
/* unused harmony export L */
/* unused harmony export M */
/* unused harmony export N */
/* unused harmony export O */
/* unused harmony export P */
/* unused harmony export Q */
/* unused harmony export R */
/* unused harmony export S */
/* unused harmony export T */
/* unused harmony export U */
/* unused harmony export V */
/* unused harmony export W */
/* unused harmony export X */
/* unused harmony export Y */
/* unused harmony export Z */
const TAB = 9;
const ENTER = 13;
const SHIFT = 16;
const CTRL = 17;
const ALT = 18;
const ESC = 27;
const SPACE = 32;

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;

const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
function Input(inputs) {

    this.name = 'input';

    this.inputs = inputs;
}




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Score; });
function Score(score) {

    this.name = 'score';
    if(score==undefined){
      this.total = 0;
    } else{
      this.total=score;
    }

}




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return random; });
function random(items) {

    if (typeof items === 'number'
    && items % 1 === 0
    && items > 0) {

        return Math.floor(items * Math.random()) + 1;
    }

    if (Array.isArray(items)
    && items.length > 0) {

        return items[Math.floor(items.length * Math.random())];
    }

    return null;
}

// exports current module as a function



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shuffle */
function shuffle(array) {

    const length = array.length;

    // Fisher-Yates shuffle
    for (let iterator = 0; iterator < length; iterator += 1) {

        // define target randomized index from given array
        const target = Math.floor(Math.random() * (iterator + 1));

        // if target index is different of current iterator then switch values
        if (target !== iterator) {

            const temporary = array[iterator];

            // switch values
            array[iterator] = array[target];
            array[target] = temporary;
        }
    }

    // returns given array with mutation
    return array;
}

// exports current module as a function



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
function Animation(image, frames) {

    this.name = 'animation';

    this.image = image;
    this.framerate = 8;
    this.frames = frames;

    this.frame = 0;
    this.current = this.frames[this.frame];
    this.elapsed = 0;
}




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
function Direction(direction) {

    this.name = 'direction';

    this.direction = direction;
}




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Run; });
function Run() {

    this.name = 'run';
}




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spritesheet; });
function Spritesheet(image, animations) {

    this.name = 'spritesheet';

    this.image = image;
    this.animations = animations;
}




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Velocity; });
function Velocity(vx, vy,vyMin,vyMax) {

    this.name = 'velocity';

    this.vx = vx;
    this.vy = vy;

    this.vyMin= vyMin;
    this.vyMax= vyMax;
}




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hitbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_shape_js__ = __webpack_require__(14);


var Hitbox=function(x,y,width,height,pushable,destructible){


  this.rectangle=new __WEBPACK_IMPORTED_MODULE_0_modules_shape_js__["b" /* Rectangle */](x,y,width,height);
  this.pushable= pushable;
  this.name = 'hitbox';
  this.destructible = destructible?destructible:false;

}




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Circle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Rectangle; });
/* unused harmony export Segment */
function Circle(x, y, radius) {

    this.radius = radius;
    this.x = x;
    this.y = y;
}

function Point(x, y) {

    this.x = x;
    this.y = y;
}

function Rectangle(x, y, width, height) {

    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
}

function Segment(xa, ya, xb, yb) {

    this.xa = xa;
    this.xb = xb;
    this.ya = ya;
    this.yb = yb;
}

// exports current module as objects



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
function Button(text) {

    this.name = 'button';
    this.text = text;
}




/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__ = __webpack_require__(17);


new __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__["a" /* Theatre */]({

    'container': document.body,
    'debug': true,
    'framerate': 60,
    'loading': 'loading',
    'opening': 'splashScreen',
    'size': {
        'width': 450 ,
        'height': 600
    }
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theatre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_loop_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_preload_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__ = __webpack_require__(27);








function Theatre(config) {

    const {container, loading, opening, size} = config;

    const debug = config.debug || false;
    const framerate = config.framerate || 60;

    let next = null;

    function initialize() {

        const canvas = new __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__["a" /* Canvas */]('2d', 'theatre', size.width, size.height);

        this.container = canvas.element;
        this.context = canvas.context;
        container.appendChild(canvas.element);

        const loop = new __WEBPACK_IMPORTED_MODULE_1_core_loop_js__["a" /* Loop */](framerate);

        this.assets = {};
        this.scene = this.scenes[loading];

        this.scene.setup.call(this);
        this.scene.start.call(this);

        loop.update((timeframe) =>{
          this.scene.update.call(this, timeframe);
          if(next !=null){
            this.scene.destroy.call(this);
            this.scene = this.scenes[next];
            this.scene.setup.call(this);
            this.scene.start.call(this);
            next=null;
          }
        });
        loop.render(() => this.scene.render.call(this));

        Object(__WEBPACK_IMPORTED_MODULE_2_core_preload_js__["a" /* preload */])(__WEBPACK_IMPORTED_MODULE_3_assets_index_js__["a" /* assets */], (assets) => {

            assets.forEach((asset) => {

                if (typeof this.assets[asset.type + 's'] === 'undefined') {

                    this.assets[asset.type + 's'] = [];
                }

                this.assets[asset.type + 's'][asset.name] = asset.content;
            });

            this.scene.destroy.call(this);

            this.preloaded = true;

            this.scene = this.scenes[opening];
            this.scene.setup.call(this);
            this.scene.start.call(this);
        });
    }

    function load(scene) {
      next =scene;

    }

    function restart() {

        this.scene.start.call(this);
    }

    this.preloaded = false;
    this.scenes = __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__;
    this.size = size;

    this.load = load;
    this.restart = restart;

    initialize.call(this, config);

    if (debug === true) {

        window.theatre = this;
    }
}

// exports current module as an object



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
function Canvas(type, identifier, width, height) {

    const element = document.createElement('canvas');

    element.setAttribute('id', identifier);
    element.setAttribute('height', height);
    element.setAttribute('width', width);

    const context = element.getContext(type);

    this.context = context;
    this.element = element;
}

// exports current module as an object



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loop; });
function Loop(framerate) {

    const timeframe = 1000 / framerate;

    let elapsedTime = 0;
    let framed = false;
    let lastUpdate = null;

    function render(handler) {

        if (framed !== false) {

            handler();
        }

        framed = true;

        // call user's render handler on each available frame
        requestAnimationFrame(this.render.bind(this, handler));
    }

    function update(handler) {

        const currentUpdate = Date.now();

        if (lastUpdate !== null) {

            // define elapsed time since last update
            elapsedTime += currentUpdate - lastUpdate;
        }

        // call user's update handler matching timeframe and fixing browser time handling
        while (elapsedTime >= timeframe) {

            // define elapsed time since last user's update handler matching timeframe
            elapsedTime -= timeframe;

            handler(timeframe);
        }

        lastUpdate = currentUpdate;

        // call user's update handler matching timeframe
        setTimeout(this.update.bind(this, handler), timeframe);
    }

    this.render = render;
    this.update = update;
}

// exports current module as an object



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return preload; });
function preload(assets, handler) {

    let promises = [];

    // preloads each asset
    assets.forEach(function (asset) {

        // creates a promise for current asset preloading
        const promise = new Promise(function (resolve, reject) {

            // if current asset is an image then preload it
            if (asset.type === 'image') {

                var image = new Image();

                image.src = asset.source;

                // when current image is loaded then resolve current promise
                image.onload = function () {

                    asset.content = image;

                    resolve(asset);
                };
            }

            // if current asset is a sound then preload it
            else if (asset.type === 'sound') {

                var sound = new Audio(asset.source);

                // when current sound is loaded then resolve current promise
                sound.oncanplaythrough = function () {

                    asset.content = sound;

                    resolve(asset);
                };
            }
        });

        promises.push(promise);
    });

    // call user's success handler when all assets are preloaded
    Promise.all(promises).then(handler);
}

// exports current module as a function



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_index_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sounds_index_js__ = __webpack_require__(26);



function typing(asset, type) {

    asset.type = type

    return asset;
}

const assets = []
.concat(__WEBPACK_IMPORTED_MODULE_0__images_index_js__["a" /* images */].map((asset) => typing(asset, 'image')))
.concat(__WEBPACK_IMPORTED_MODULE_1__sounds_index_js__["a" /* sounds */].map((asset) => typing(asset, 'sound')));




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return images; });
const images = [

    {
        'name': 'mainChar',
        'source': __webpack_require__(23)
    },
    {
        'name': 'floor',
        'source': __webpack_require__(24)
    },
    {
      'name' : 'box',
      'source' : __webpack_require__ (25)
    },
    {
      'name' : 'nuage',
      'source' : __webpack_require__ (71)
    }
];




/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAB4CAIAAAAFTomfAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAADeJJREFUeF7tnHtQVNcdx3+wLKy8WXAF5aWJD6yIPEwdNWqSKo9ojM9ijM9qlERAjdWZ1jH9o5pxGtQCiomoFa06jg+IESyVmBiNWBNQ0RCxVkVRHgIqIA9ht9+750pNFLh79+xmOrufwXPP+d2zu/d7z+v3O3tXG51ORxaGrXi0JKyaLQOrZsvAqtkysGq2DKyaLQOrZsvAqtkysGq2DKyaLQOrZsvAqtkysGq2DKyaLQOrZsvAqtkysGq2DKyaLQNzP09y6NChhw8f2traNjY2vvfeewqFQjxhTqDZ1Fy7di06KtJJ+eI+9asB/fLy8sSqZsG07VxeXh4RGlJWXikU+oTTb+ZQeAw5uuBOk9KBvt5HZSV09K+48zi/d+/eGTNmCDVNjAk1J8THp6SmCrm4NBo7nxRKam6gJ82k0+rPEylVgtFZRefzaGs8lRUPGjjw+8JCe3t7sYJpMJXmsNDQwgsXaOR0StwplJvqhbbtCIh3caOsZNqWiFJLS4tSqWRnTIFJNIeFhRUWFtLyPfTGTKqp+l/Ddo6TOzU8oNneyLa2tppueuO/VqFLi4JHxVJ1hVTBAILtVZRRjqybsxOzmQLOms+dOyeM4eFThRZ+dF+0SqeliRwcKflSQ1PzsGHDRCNvOPdtGxsb6tmPtl+lqgrRJAMXTzq0nvasLioqGjRokGjkB892XrFihXBYc4xqa/QGudRV09w/4hgcHMwMfOGpOSkpiXqHUq+XqfWJaJLN/Uf0+/04FhcXMwNHuGk+cOCAcEhIp7pavcE4MLBHTsNxWUI8M3CEm+aUTRuFQ+8h1NqiNxiJjtra6NXYf5zIEw384Kb59Nl8Co0yYGXqEjhtMXE4zpw5kxl4wXM8k29/ajN6JLeD22cnOKHww1NSUpiNC3w0Z2dnC4fIhdTSqDfwABNhMJZo4QoTEhI2bdrEzMbDR3O3bt2EA0fBjFb8065aSvNn0bJly6qrq5nZSLj2bdNQUUnbMwhBh5eXV1VVlWg1Aj6am5qahANCYr4IUYZto773tOhXA41GU1ZWJuSMgI/m6Oho4ZCfSXb8ZCvs6N9F6Nszf0vUhmmcdG1ka0O+vv5iBblw7dtlJWTHL+6F644/Inu8JWICfTsXnUOi7dHDRyjIhZvmMa+OoDOZpOS3xYEAKzsNx8jJRGxybKCBQ+nKv6iyslyt9tKb5MBNc9SbE+hJPZXfEPokFxBL5+zu30csidQJsr//hmprq+PjE0SjgXDTvGrVKuGQ8Qdhu8N4lCoqyCVd3aa/6Afzs9RR2EhavoRSU1OwgIlGQ+A5nufOnk3f7BciQVujt3Xc3GjbhzhGtXfsZ6mjpBRKfJ/gqHz4oVDNIHhqTtm8WThsiSMP+YNNQOVM547Tnctr9F1HvxH8HHW0aTNNn0QbNmwoKCgQjdLgvE+SmJiYnJxMyzKEHc+GB6LVIBRKUigo1r1fH7p6XT9dN4tnfg7ay4k81VRTS1euXBk4cKBo7wr++56BAf63Sm9T8iXy7iNs8RoEBoWLmt7VCAOEqLsXFZwWIhfC27zwMjGGHKmHhiqrqLGxUaVSifZOMcler7ArBlKvkHdvevxIb5MA3Dhnd4pVU0PtmXXpP969+bvUP8Mc+QYdPwFfj4jFbFiusTLgE56ZNPCBdnb2T5501CV+An/NTk5Ojx8/VthQG974Tzn0SpSwPdZ5jIlLdu1OpVdo5XBqrLuQtCck9NfCnoGz6/Y9mxdsXosqujoiZ6HunatUco3qG2j3fnJ3pR27SftUQb9+/a5evSoWOoanZswl4eHhyKSnp48YMSI6KvLmrVLq2Z/WHCXfvvS4XthCaUWs9PQThaFrRyonQfPmRZSbDtuDPXlu3r706EGbVpv+z6xAjc/W44cyz59ir/gpGNDaCRMmu7u7KhQ28+fPCw4OdnfveqXkppkJdnNzy83NtbOzQ9Th6emZkZGxbt064TSUv/k+BY2g3oMFZxKfiZ559QJV/IeOf0qFufr3IH+1xtFB9eO9UlZk2Nkre3TXPHz4sL6+PiwsbMeOHR4eHvb29t7ewjceMuCj+dKlSyEhIS4uLvn5+Y8ePWoVGlMA/Rz6d+36W3LSBikbKGER4Xh5TFS0s7MzJoW33noL9w5NB4UI0UeNGlVaWnry5MkxY8aIL5AFH824PgcHh4sXL9bU1LRhHD4DTuFyoaG2thZ94dO0LReLLr8SEY5e4NldgyGAwY/WCwgIeKIHL2lpadFqtbgwZFBEnr2Pj48PAriSkhIjr5mDZvSxioqKzMxMXBO7yhdia2urVCqhHym0QQlgIlmRVesEhUKBBo+IiEDemMs21g87cuQIBG/cuDEwMLATwQCqmpubHzx4UFVVhRR9GOMTFiBFMEAPglS2kR4XJ2yJysPYdkaX8/f3z87ORtcVTSbGy8trxYoVx44dk33lRrUzmhcpPN6GhgZmMQO4ueyLsYQEmbGkUe2MRu7bt+8XX3xRWal/YsRcqNXqJUuWYAKXd/Hy2zknJwfpnDlzMDKZxWzgE1lTp6UJGymGIl8zRhTS2bNni5ueZgTrP9xMZI4ePcosBiFf88GDB4OCgszfyAys6mPHjmV9zVBkasbqgiVq+vTp5m9kBla4yZMnI3Pz5k1mkY5MzVhakcK7MHKpkw1uOrxaZC5cuMAs0pGpee/evUjRuzr3Q0wHXLdx48Yh89133zGLdGRqZjsSv5RgBvt0GU/PyZ/D/n+RqRlTCFKTPqHYJexBwfa4VToyNU+YMAHpmTNnfinZiNJu3bqFzIABA5hFOjI1I2xEyp4+ZxYzg3t9+fJlZEaOHMks0pF5xfC03d3d4Wk7OPD+zlkaCKRzc4UdpYCAAGaRjvxWevvttwsKCpycTPgwaic4OjoixvD19RXLhiBf8/jx45GePXvW/EMas9eNGzfgF8n4sgoYG0sOHTo0IyPj/n3DH+E1Agyrjz766PDhw+aOJcHatWvPnz9fWlrK3EDzgFkTAQYEL1iwQDQZCIe9oeDg4H379pltb8jDw2PNmjXQDD9M3rAydqVZuXJlUVERnF5MKqLJlGC6vnv3LgRPmjRJ9jzCYa8X1wGP/6uvvsK6JcMrkg56Ne5saGgo8sZctrHtDOrq6pBOmTLFy8sLXZ0ZTYFGo0lMFH6YY+STcRw0o3lPnDhRXV0dExMD/8xEsuF7zJo169SpUxs3bsTNFa2y4NC3GfDJ4IT7+/vjsu7du8exk2M1xq2cMWNGfn5+cnJyfLyxT7Fz0wyysrLgnGHU5eXlqdVqLltl8PO0Wu24ceNqamq2bdsme316Fg59u52JEydiDsclvvbaa9u3bw8MDBSf95UFpmW4lnCqIyIiIHj58uWjR48WzxkHz3ZuZ/jw4fBJkVm9evU777yDYLuxsfFn31d2BHqySqWC4GvXrs2bNw+hm3jiKS4uLuhNuKe/5Fr1QtDggwcPZvkPPvgAzvlLL70E/4lt6LAth3aw2mHmQ4p+cfv27ezs7LS0NNwmnMK8hQh5/vz5eAnu2s6dO7/99tsvv/wSp0JCQmRsAAJTaWYIv3yOjr5+/TrymGyFBy6iozHOY2Nj22VD6ueffw7vFUqgp/1R5aSkJPRnln+ehIQE9oOFiooKrGHMKBVoNjVbtmwJCgoSP08CGMDiKzuF7TeDO3fuiCZpmLCdJ0+ZcuTwYbHwDL8eNuyN11/H/FRZWYlPRx9etGgR+nbv3r2RhoeHG7R9i1GNddEwFYJw3qDrsjcfb69K9tA0+PWt9n0ZKfITu+kfeCJavHixWPspUVFRsIsFyZw8eRKvWrdunViWAH/NA/TdeLGTa7NfX51//ya/vrW+L7M/5GGBHWdRBzXF1+gx9NLbYWuYWJAAz/UZIAD4sbh4t6d3mlfPxzpdjbatQSf8zIz9IQ8L7DiLOqgZFhbGXpieLjwcJs/HWrJkCVKE8azYJTw1Hzx4EIvHPk+fd53catpaO3pGBHacRR3ULCwsRGAI4+nTp5E6O4s93yCmTp2KdNeuXazYJTw1T5s2zY9sYp3d0ZiiqWNQBzUDbBQIyFD84YcfevbsyU7JQ6LPA7hpZs11sIdfQ5vU6AI1D2h6IQOnzc/Pz0j/XPq3wtw0X9H/UHmwvcOTFz91/AJaSPeKg/Bd39/37587d277emsobG2Do8qKXcJNc+bRoz2IVLa2HQ3j59HfG5vuRBeLiiIjI1FgM5mhfPzxx0j79+/Pil3CTTPCKf1egcEbBrgC+KHwQL29vRcuXChaJYMujWFl0H9gw01z3IIF5UT1ba3S3xG3p1WnrRB+m/Uqiswth0+mPykVRBpI2TMAEuGmmX0/mNv0WCV5bwg1UR+ZSRMnInV0dETk8Nlnn0l/2A1ufElJSVZWlliWBk9/u1dAwN3SUl3gwBppP+9X2yk1N4ur9C6UaNK7JampqT4+Pjk5OawNXwjOxsTEIJOZmTlRf8ukw62dwe6dwn8tFHe/TC3hp3SoE3f/LgSz58zaQYSIpevevXtDhgxBM2JWKy8X/mcaBsLy9evXu7q6MsEIyA0VLKD3QLnB9mIXOrnpAoMafIXQ4vk/2HEWdVBz6dKl4iufY+vWrR19uY2Y7JNPPhHrGQ7/WJJ1ziAb27TuvUZ3c27TtjU/XbEdyEZhq/i6sT6uqqxYp0Vb/ayRnwexcXFxMYInTOyYohGxIeR0cxPul3yYdL4cOXLEtTvWXXKwsVns7IZwIl3dAynysMCOs6gj1jYzOt1/AbqA9mLsy4PpAAAAAElFTkSuQmCC"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAAoEAIAAACyUZvZAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4ggLCjkZF1F8RQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHja7Z1ZjxzZld9jj8iIyIzcs7L2nWQXySKbZJtNqpuyJAhu94x6Rt2taVj2y9gYW7ANwzIMj/2iD2BgPsLAxrzoSbA9hiAIEMaCmpBa3aTY3MmqYu257xEZ++KHf6eYgj5CnftQSGRG3rj3nN+th/zH+R/2r//6G99YXJyfX1xcWIjjOI7j//f/Pv3017/+2tfeffdrX/v3//4//sf/8B8Gg9HIslzX9z3P98MwirrdbrfbjSLfjyKO4ziOY5gwjCJRFEVRzGR03TDEr4YsC0IQBEEQ8DzP83y/3+/3+7Isy7Lsuq7rurqu67qOuyuKoijKs2fPnj17hu8bhmEYRqvVarVaSZIkSVIsFovFYhgmSRjGMc/HcaVSrZbLuL7dbrfbbdu2rPFY0zRN01IpWZZlz/M8z+v1Op1uF+/reiqlqpZlWZZVLheLpZLjOI7jmKZpmmaz2WrV6+fPb26eO5dOp9O6fv/+/fu/+93JycnJycm5c+fOXbgwNzc3NzcnCIIgCMPhcDgcYqcMwzDxV0MQRJFlHzx48ODBA8/zvPF4cXFxcXFxe3t7++rVdFrXi8XBoN+3LNM0zeEwDMMwDLFTvI7jJAlDxBnvZDKZTCbD8zzPspP4MwzDILa2bdvjsa5ns5kM8pbPF4vF4q9/fffu3buNxvHx6enKytzcwoKiCIIoXrt29er1641GrVavIwJBEEVhePfup5/++tem6bq2PTe3tLS4KAiyLEm27Xmet7+/v//q1T/5J9/+9re+JQgcx7L4bqfT6XQ6jcarV4eHxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVdnhyt+Y0NVXbfZbLWaTd8PwzD0PN933T/7sz//8+9+d25uYWF+vtfr9weD8di2bbtQyOcLBYZhWZblOJblOIQvCDzP8xBiTVNVTUOaOY7nWRbbBjR4nUqlUqkU0oAZbNu2bfvg4ODg4ADvqKqqqmo6nU6n07g+mRqqquuq2u8Ph/3+aGSawyEQSZIoimOEG1cKAs/zPPBlWYZhWVwZBJ7n+wCO41iWZUej0Wg0wjvjsW1bVrPZaDSb1Wq1Wq2KoihKEsuyLMuapmlaFq7HbNN77HQ6nXYbgW632+1mE0cRIKZSqZSilEqlUrk8HA4GljUY4PBalmlinmmMTNM0RyNAg/kRN1VV1VQK7/i+7/s+Yp7NZrPZLGYABLlcPp/Pr60tL6+sSJIgiGKjcXpaq716tbu7u4uYJEkcJwli/vnnX3zx+eenp/V6vf61r7377jvvfPe7H3304YdXr1679uabFy9eunTp0je+8Y1v/ON/3Om0262W49j2eHx8fHx8fPzixYsXL16YZq/X7xNXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcnR2uhL/+6//23/7rfz08PDw8PDw6Ojk5OcnlCoV8HlqBIGSz2WylkiQs6zie57q1Wq1Wr2NjSRLHLBtMDWwM6YyiKIoihCgIgsDzWJZlk8TzPM9xoiiKggDaBa4EWFAnZmZmZmZmJEmSJClJcB+WTRLXdV3bBnaGkc9nMjgIHMdxkpRKybKiGEY6nU4jPePxeDweWxbA6/cHA0nieUHodlutdjud1jT9qxFFYRiGvV632+1Ckzk6Ojo6OCiXy+VyGbMhYVjV8+fPn798iSuPj4+OTk+x9yAIQ88bDAaDXg+7SBKGmWgv6+vr6+vrrVar1WjUarVaoxFFYchxnue6URTHcTzRcDCmDyG0LwCEiGUymYyu40ocBhxCAFerNRr1+tra2tra2suXu7u7u8ViNpvLFYv5fKFQLN64kc22WnNz9frx8eHhyQkUmFar0Wg2M5ls1jA++uijjz766K23bt16++1UStc1rdsdDPr911qcJC0sLCwsLDBMHM/Pr6+vr29uvvPOO+/cuVMs6rquE1fEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVydHa4EaAuiKMuyfHh4fHx8jCX++Mc//vGPf/yf//PKytKSYRhGPj8YDAaDAZQWqAfptK4bBscxzESrmUYEcKXThqHr0CjiOI6TZDAYDPp9qCL9fr/f6/E8z6O8wvfn5+fnFxYymUwmnZZlWVYUoIEUhmEYBoEkSZIsA2WstlAoFnM5w9A0XYc+g6IMKCGWNRyORtPFFygTWFpaWlpaymTS6XQaWAAyXMOyLMvzq6urq6ur2G+r1Wq12yi7yOVyuVwOaT442N8/Ojo9PT09PYXOw/OCMNGLeJ7nOU5RUilJwi4kSZIUBSu8dOnixTffbDYbjW4XwGHNgAn3dV3Ps20ckkaj0Wg0UHyB1WINUI3wXURyuqDDNIfD4XBmplgslbBCVdU0TWNZnuf5wWA4HA4B/Ycffvjhhx/i8Kyvnz9/4QI+3dnZ2dnZyWYLhXx+WimKIt8PAlmWJNwPSleSFAqapmnEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV2eHK/6DD/7RPzp3znVd1/PwF/rBl18+fPjw4crK2trq6sLCwsLSUr3eaNTrURSGUaSqqVQqpWmapqqiKEmCEMdRFMfAi2UZJkkmD/NLkiDYtuNYVhgGQRgiTDzPcTzv+0HguoqiKFBhRBHve57vO046revpNJLUbrfbnQ7LclySGIZhZLPj8Xg8GqGAQZJEURTjOAjCEG5E/X6v1+sBMjj6yLIkyfLW1htvbG0ZRiaTyUBs4HkUU4xGptlqNZvNZqfTbrfbz58/e/bs2fXrN25cv44jsbOzs7O35ziO47qtVrPZ6URRGMZxo9FoANtmE8UU1Wq1OjPDMAyTJIVCoZDPcxzHsSwiBnUoDMMwiqACPXz45ZePHz969OjRw4dfef3wPM/z0KxqtVrt9BT+TTi0gEBRFEWWe71er9dD5KchQ7lEvz8YDIeyrCiyXC6XSqXS8fHh4dERimUePvzd7x48MM3h0DQ//vjjjz/+2PeDIAhQ6KEoqqqqoqgosux5QeD7pmlZltVsttvtNg52LpfN5nIAkeNYdrLm/f29vVeviCviirgirogr4oq4Iq6IK+KKuCKuiCviirgirogr4oq4Iq7ODlcC9IHRyLJMk+dFURCiCP4+kiSK/+f//K//9b//98rK8vLaGh7+hwKD7U0wYlmWxe/4eAcP+eNxf2g7uCaVUlVJ4jieNwxcA9t7qBbC1PC+Gr7vOLhXp9PttlrYALQUPMBfKmWz+TzPJwnLQlOCzb/rOs7ku9BD8vl8fqJHASZBYFmOsyzfnzgWYUDJQVMCuAghYQh3vV6v1+u7uzs7r14h/a7ruvAJkuUf/OAHP/i3/3Zzc3Nzfb1ebzRQUsHzgAYIOo7jeB6QGgz6/fGY53keaposwy0IK8d6hsPRqN/HGmZnZ2dnZ6ECPXr06NHRETK4vb29vb2NnQJEaDilUqlUKqHdQb1+cnJ6iuvTaehAmQxULFkGjogqmgDEcZIkCVaCvff7pjkaFQqlUqm0urq+vrY2HHY6vV4Y+n4UYVW4F3FFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8TVWeNK0PV02jB8f1LUMBhkMtlsLre1tbV16dKjR48ePXqEUL755vvvv/9+p/Po0aNHpjkYDAbQNCa/4jMMyg1YVpIkSRCgzpjmeDwaoTstusaipAKORfAqQgkEihcAFkKMT7ElXCMIgsBxcCyC6lMs5vOl0rSnD4LrebLsOByXJJMWAWHoeWHoOJblOFEUBGFoWaPReNzvQ+0YDofD/f29vYMDFCBgJb/85S9/+ctfFoulUqmE9E9chzY3z51DX+DV1ZWVtTVV1bRUCv5EWGcQQK1JkjCUJEWR5fn5hYWFBbQa2Nw8d+7ChV6v2zXNarVanZsrFAqFXA4wQc9BRorFcrlQWF1NkiSZNFhgWZa1LNsej4MAxRJRFIbptCxLkqal07o+2QXLcpyiiKIkeR7DOE6lUqlUKijFQGQuXrx48eLFJOE4lmUYnuc4NIWAVjMaOc54jFKLTCafz+U0LZ1Op5GXXq/V6naZPxgcx/PEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV2eNK8GyHMe2S6VKpVzu9QaDfn9lZWVlZQVJ+uyzzz777LOf/exnP/vZz2Azj/Rj0QgB3gFSk868QRAEgiCKkwfpcT00AWgF+C78fVJTAx1dL1y4cOHCBaQQ34WCAeAQDl1XVU1j2SRJEqzB923bcdrtZrPZhC4BpQVrQ1GD46DLrmVZFtaG0oNprQalDW+8sbGxtXXz5u3bN2+KoiRJUhzH8aRPrm3btvvV0HVNS6eB5uHhwcHRUb8/GPR6OBi6ruuqCqv/TCaTyWY9z/OCAHrU/Pz8/Pw8lK9pNQkAAVMcy9c+ROjDq6qGkc2m04gnSjegohSLxWKhAOhZluNEETtl2SRhGBxexBn4vvfee++9/z5wfPr0+fNnz0qlanVmBooTy/I8x6lqJpNO4zVUOvhEIR5R9LpBBOIDDY64Iq6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuCKuiCvi6uxwxf+7f/e97337251Or9frzc7Ozc3NNZswqa/XGw3btm3H2dvb29vd3dzc2NjYWF1dWVlZ4XmO47ijo6Ojw0P0Z83n8/lcrtfr9brdSqVSKZcByqef3r376aedTqfTbiMECFmhUCgUCrCZBxboJAvDfqhDuAaKCuBA8jBzkiDRcZwkvu+6ngevItf1PM9D6QTHwaqf43g+CHw/CKA1QJtCcGG3j5VcuXLlypUry8vLy8vLX/vaO++8806/PxyORkEQRVEEm324Jvm+72PGIGi3O51udzQyzdEIPXVRliAIoohSEYBo25NDyPMsC4emVqvd7nZ93/fDkGE4jmG63V6v2xVFSRLFVEpVVbXZbLUaDY7jeZ4PwygKQ5blOJYtFIrFQgGHrTY1JElRJKlcrlQqFUWRpFTKskzTsuAwhUMFBAuFUqlY3NjY3Dx37uDg8PDwEOvHP5pMxjCyWXQs9v0wDAK87nS63V4Pc0RREEQR1iZJ6NCLv4IgCMQVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXZ4crAeoNkooUov+sYaTTmQwe3Q+CMPT9n//85z//+c8nmonv+z58cJB+dKeFMrC7u7u7u3t4eHi4v5/LFQr5PK7Ad+FeBHSQANwdCsa0KT4gmO66i3eggSiKJMlyq3Vy0mgEget6Hlx4oK5wnChOPI+g4bTb7Xa7DcUDa4AidO3atWvXrn3rW9/61re+ZRi5XDY7GPR6/f6kNKDX6/UUJZXStNe+Sxz3GneeR+9eJBjrRx9hFE5EURSFIfyAFEVRVBUlJFBmoMmgtQIGooqDhPhjDigkULdw92k9Cv15oUFBq/rJT37yk5/8ZG1teXljI5fLZrNZrA3Rxr6QNXRYPjmp1U5Pz507d+7cORR62LbjOE4csyzDAKxMhuMMA4cQ/yAOD3d3Dw7YPxrEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV2eNK/4HP/j4429/u1QqlyuVwWA4HI10XdN0XZYlSRQR+uXlxcWlpcGg3x8MDg8PDg4OVDWVUlWe5ziGuXTp4sWLF3/zm88++/WvgyAIfL9er9drNWxgcXFpaWmpVCqVymVoF+hsi/TgL97heZ4XhPF4PLbtIAiCMOQ4juP54XA4HI2gKcEdKZVKpSbJqNWOj2u18diyxmMkEkkdj23bcZ48efLk6dOjo6Oj42Pc3fN8PwiuXbt+/caNy5e3t69cuXr1zTevXcOcx8e1Wq0G1yXX9f0g6HS63W43SRgGhSFJggQDEVEUBFlGF1q0TUiSOGYYVdU0lEu87lDMsgyDLr26ruuaJkmSpCimaZqWhTjwvCBwHJoSTBebpNPptK7jvlCxcNgQZ2CH93HkcH2/P9FbEJkwdKYGYAKgqZSqahqw29zc3NzcRKlIrzccDoeu6/ueh38lOK6IPO7Y7/d63S7DsOykPQNecxzPiyJxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfE1dnhSlhYWFpaXMSik6TVYpjxGB41jjMew+9mYWF+fn4ev9+3WvV6vT4a9fuDwePHDx8+eICH8BG+S5e2ty9fxm/5AAvaAtQV2x6PXXfyWz/D8Dy0CIZJEo7L5fJ5w2g06vVWC2lUFFlGemBcLwhhGIbjcbvdanW76LWbz+t6JuM4ljUeQ6UZfjUsyzSh5GxsbGxsbNy8+fbbb78N/QHJg/LjOL7vecNho2Ga0LWSJIrieDg0zdFI03Q9nZ7WlKDeCALPo+xEEKClYJ2T9giiqChBIIpoEBCG2C/0HCg5AAIzZLOGkc+jNzHWjMhA7yqVSqVi8fDw8PDwEFhIUwNqDCKMCMzPLyzMzUGhqtVOThqNk5PDw6MjfLfRaLdbLdwXq0OzAnTm5ThB4HnPC8Mg8LwgmMAE03/g5Xmu6/uISRjGcRRN/KBe55a4Iq6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuCKuiCvi6qxxxf+X//Kv//Vf/IVpjsfjsa6rqqqiny3cbaIoDKOIZRkmSdDXtVwulYpF+PvAE+jTT+/evXv3e9/7i7/46CPDMIxMBmG3LMsaj9HD1fM8z/dd13U9TxB4XhBUFeoBnHw4jucVRZYVZaLhsCzHoaxCFAVBFLPZbBbFF5IEo/1Wq9VqNhkmiuJ4PLYsy+r1hsPBAA/5w/Po9u3bt2/fvnjx0qVLlwA6tI52u9frdnElAEoShkkSlAUgqY7juq5bLBaLpVIUMUySuK7nBQHLchzH6Xo6ncmIoixLUhjG8USzwX7g6eN5vu95OKTD4Wg0HPK8KPK8aY7Hpjkcjkaj0cLC4uLSEmYLwzhG9944xt2hAEmSLEtSrdZo1OtwYgIE8CpKpw0jk+n3B4PBoNFotZrNKEqSKIJbUy6n69ksykBOTk5OTk729l69evUKMCEy6+vr6xsbqZSqplLjses6DjyYoJ4piqqmUhOMZVmWgaMkiaIkmeZoNBy+VnImelQ2WyhUKsQVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXZ4err37LN03LsqxqdWamXEaqMI3r2rbjwIGoUMhmczmGSZI41nVN07QoiuMgQG9bLB1qDxQPKBVQGCYY8bwgQE947Tqk60hkp9PpdLvQjvAOvI2gOeTz+Xw+D28jKDXtdrPZap2cHB+fno5Gg0G/Pz+/tLS4+O6777777rvocos0wJenXm+1mk2szXE8z3XRBADQoHEBogFVZmFhYWFhAaUSLBuG6PubJFg5NzVQdIDXQRAEEx8iRID//RAE3/e8MLRtx7EsROb8+XPnNA0lEtBJpl2c8D7WDy8keBthJXAy2tnZ2dnZQcTgG4W42bZpWhbPhyHHlcvFYqmEcgm4HeGY4eChSKTZ7HTabfgpJQnKYnie4yZuS9CdXrtN+X4Y+j66HU/2Jwgch7sTV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXJ01rjiG4Ti48MQxEoZSCDwCj4vgSoNH9NWpgW1jM3fv3r17924mk81mswjZYDAaDYeCgMVMSgYEAbb8ruu60HZ8H+/gU57neXgksSySjL8oWMA8r69JEtjY87woStLy8tLSysra2sbGuXNRFMdJUqvVavU6dCToQlCEFEWWUynTHI0mPkH4a1mO4ziCIMuy7LqA0PejKI6jiGEEQRAkCWsAXDhArz8VBOAFRPB9AIF04jWKIxBtqCtABzuaNDfguEmSAD3SichPNy44PT09PT3FvSZFELqu6zjkOMYAHXNiDVC0kGVkHHfHLnANrsfhnEYfs+G1/NVQFFFUlFRKkvCauCKuiCviirgirogr4oq4Iq6IK+KKuCKuiCviirgirogr4uqscSWwLMPEsSCIIsdBsZEkQeA4qBkMw3FJkkpJUiqFrqyjkWmaJszjoQMAypcvX7zY3X327MmTJ08QdOAoSamUoqA0Y3oDgDkIHMdx4B+EfrII08SKnmFYFspJFEFlQWdex3Fdy7Is267VGg2488zOrqxsbGxuuq7n+f7BwdHRyQm66KK44OXLly9fvpR/P1IpQAGFCrMNh51Op1OprK5WKiiFgFqCEENjQbLjGMjDqyeKkkQUGSaVkmVZnmgdGAg3ig/wDpye6vVGo17P5w0jm61UZmer1XxeVXX99LTRqNdlGQdSUWR5NOr3ez3XDQLfVxRRFIRut9ttt8+f39jY3MxmcznDkGWelyRN03VVffHi6dPDQ8QNsB8d7e0dHiIH7Xa73WyyLM8zzJdffvnll1/KciqlKJXK7Ozc3Hhs27b9utcwnIcYhuMYhuMURZIUhWWTBB2HRTGKJkrW5N8QBnFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8TVWeOK/8u//OCDd97heXRRZZgkEUWe53l0dFUUWZakIEBCwzAI8Ls+PHRarXa70wmCMIyiZrNWazQMI5PJZGzbtj0vnU6nM5lCoVIplxuNTqfVgouNquq6qsK7CN5ImUw6revwHkKBQqlULBYKURSGQYC+wNBvHGc8tqzhsNvtdkcj07Ss4+N6/fR0YWF5eWVla+vy5e1tw5iZmZmBQoJSA9d1HM87ODg4ODzMZnO5YhEKjCjyvCTBm8eyRiPH4XmOkyRZFsVUCsoP/IyShGWTRNN0XdPg6YPWBHBrYhiGiWPP8zzHURRJ4nkcV8exbcvyPNd13XK5VCoUkADLGo1MM46jKAhevdrbe/lyfn5+vlrl+YmqFoaHh/v7r14dHR0dHRxY1mg0Gs3Nzc3Nzjab9Xq9jq6+jUatVqs9f/78+dOn3W6n0+1ubW1tXbjwP/7H3/7t3/6tZZmmae7uvnr18mU+Xyhks7dvv/POrVsXLrzxxoULq6urq8vLL1++fPnihaIoiixXqzMzMzODQa83GGDmarVYrFREkWV5Poo8LwwNQ9czGUliWVEMwyAIQxSNoLRCliUJzkaa1uv1+70ecUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxNXZ4Yr/q7/67nfv3Jl47rDs5HF9uAQhrFBR4EUD9QL2//ARQiFAGPp+EGSzhpHLCQLH8Tys+qvV+fn5+ZOTer1Wg39PJmMYhoFiBQALreB1H1uUQ8iy59m247BsksB8nmHQsmA47Pf7/Xq90ajVoojjOO6NN7a3t7er1fn5uTng2G63Wp2OKEoSShV833Fc1/Py+VyuUMA7QeD7YYhOulgb1gEFCWoSywoCy+JQIUpQOaIoiuDHBG8jhBY6k+chekkSx2EYBL7vedBwTHM0Go3QBVhVU6lUan19fX11VRQFgeMcx3FsG25Qg8Fg0O/jYOu6rmuaJKFNgigKAoz/Z2dnZ6vVmZlKpVIpFovFQuHx40ePHj9eXV1dXV1dX19fX1//+te//vV33llcXFpaWND1dFrXkcHBYDAYDh3HcVwXatWjRw8ffvnl179+5843voF/EKY5Gplmv9/r9fuapqqaxnEsy/NJEsdxPDc3Ozs/3+/3ep0OIoHovfaochziirgirogr4oq4Iq6IK+KKuCKuiCviirgirogr4oq4Iq6Iq7PDFf9v/s3HH3/zmxOfHZadflyeYeCAwzBxnCQocOCnRjqt67rufzU8z/NQ+FAqlUqlEvDo90ej4bDb7fW6XV1PpVKpYrFQKBQkCeUauCfDMAzmgDLAMEmSJJjztfU+yzqO6zoONIpWq9PpdPDA/s2bt27dvJlOq6qut9utVqs1Ho/HliXLsixJlmWa4zEKJkRREHi+3+/3ez3bHo8nh2rawQd9gaFsSZKioIWC70/7N/m+5yG9joMoIWGe5ziOA58g6FQINLx+4E+EYpNCoVDI5yuVmZlKBd2N0b8YChhSnsvlcvl8uVwuVyqZTCZjGEieoihKKmUYhpHN4jWOyt///d///f/9v7du3bp1+/a5c+fObW4qiqKoKu6IbshwVsLKMTOO1qtXr169epVO67phrK1tbW1t+b5tOw4QXFtbW1tdResGQH9yUqsdHYGTOEYBjiAIQpIkSRzDwYm4Iq6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuCKuiCvi6uxw9Qc28AgfAoGLsKDp/rOTsPq+7/O8JPE8roGeAz+gO3fu3Llz5/Lla9euXm00Op12u1KpVEolx3Ecz3v+/NmzJ09Go+HQskqlQiGXq1ZnZubmJEkUeT4IPM/3fR9Js23HkSRZFoQ4DsMkMU3THA5hn4/P41iWRRG9euGChOR95ZjD8zzP43pcE0W+D7UFpQ6+P22HPzG6lyRFgYLFcbLMsp4XBJIEsAAQEgNNBjPgjpqmqpNEorQC2MG5aXqF+O7mZi63vm6aplksAj7DMAzDQHddrBJNANCcAZ86UwOf/upXv/rVr36FtgC4Eo0XcC+4LDFMkiCnDFMsFovlchRF0cRziWGShOP+4R/+4R9+8Yutra2trS1VVVVFEUVJEoRGo9ms1xEBRDWXy+Wy2Vqt2Ww0sHfcBZ8SV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXJ01rgSoNHEMi/soiiJ8Geb0cRwEYTgehyHM+C0LqsukEMA0TfPo6Ojo6Kheb7WaTbQCmJ9fWlpcNIy1tbW14dC2RyNBEEWGwT1833FsezDo9TqdKPI821YUSZLlUqlYzOfh5uM44zF8iUaj8diy4ti2TdO2bdtxLCuKggCtCuIYoKiqLMO0nmFEkecnrQnwOgw9z3V5nmGSRJZVVVE0TdNSqUlRBssmCTDDaww0RhDFPbEDtwAAGjhJREFUiXsTzyMyAAUQTPfbxUin0+l0Ggev1Wo2Gw1cMzMzMzMzg568nvcabCQVKEwSzDAMgx7H6MOL0gboY7hLu91ut9vY46NHjx49eoQj/cMf/vCHP/zh8vLy8vIy3gc6AB/lIVBmLl26dOnSJbR0GA4HA9MElE+fPn369Onf/d3f/d3//J9Y1fr6+vrmJiA7Pj4+Pj7G7uKYYZIEPZI9Lwh8H52dVTVJVBU5Ja6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuCKuiCviirg6O1wJ01oEAocSiVRKUVIpbBWhwXS5XDaLx/UVpd1uNluter1er9cB2fb29vb2tqqqqqqa5v7+3h4KHTADOsnCSUcUeV4Q8Lg+jPZdd2VlZaVcLhSKRUCM7rFYlWWNx6MRgl4sFov5fBxzHMu+enV6WqsBEQQaZQvQnabXD90DCUOJBJoDTOsz00dLkmRZklzX910Xs+HuiMOk066iKApSghhi5dBbkBhgMRqNRqMR5sH1KysrK0tLeB/lI8jFpCwlnU6nsVqsDUgBNcxcq9VqtdrDhw8fPnz43nvvvffee2++efv27dvN5sHBwcHrdg8cFwS+H0XwSer3e73hUNNUNZ2eqE+apmmYc2VlZWVlBaUc+/v7+/v7WFW5XC6Xy5qm66nU7Ozs7MwMeviORuOxbXe7vd5ggMOCOeFvRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXF1drgS0F+X5xWFZfH4P89jQQwDx6AkgVOQJL0uRkA42u1ut9MRBEkSRVXVdU27evXatTffDIIoCsNms9lsNjc21tbW17vdXq/dxmP8QYDCCNu2rFrt9PT4mGGgNrAsw7TbjUa9js3Axwghdl3Xte1J0wJJ4nlFURRJEgSe5zjXtW3L0nVVVZRMRtdVFQkOAs9zHJj/QwVKpz1PVaECieLkQX+eTxLXjSKW5bgkgWqDe3leGHqeIPA8GgJMxnT6kXJoO2gzAMjwKbDGtxBPHAAkstfr9zsdlFqkUqmUqkJFarfb7U4HM0ONOT4+Pj45QXkC3vniiy++uHdveXl5eWXlT//0T//0O9/xvMFgOKzX6/VGA/jy/MSHSZahE6XT6bRhdLvdbr+PNWFOrAorX1hYWFhYSKczGU1rTw3LsizTBIhLSysri4tJ0mp1u8gsmDGMTEbXe71Wq9cjrogr4oq4Iq6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuDo7XH2l3kwrFQgEQgANYfr3fqQcj9ADHXgAQb1ZXFxcXFzE4lAscHBwcHBwgIRNJwZbxXdt2zStr8bjx48fP36MuxcK+Xw+j6BP2+pjVY1Gp9PtwjvHNE1zNMpmDSOTQcq9qQH7euwLvkVQY9Bbd3rXmF8QBGE0CoIo8n1JSqUkiWXRsuD1wB6h5Ey0JsuyrPn5arVahWrU7XY6rRauX1paWlpawq47nU6n09nd3d3d3QWOPC8IEw0NaYZKA/gQeRxmRPWnP/3pT3/60/v379//8su/+Zu/+Zv//t+Ro2fPnj179gylE1BsEAFVVVVdR+EGVttsNpvtNuKs67qeyaB1Au7Y7w8G3S7UM8CE4hqsCuUVk1YJkqQo2Hsmo2m6jpz2++12v09cEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxdXa44v/Tf/oX/+L991H4MDtbrVar6HULXyFoEUhVq9VqtVrTxvb1eqPRaMRxkiTJJ5988sknn7iu53leq9Vut9uCIEmCcHx8dHR4KAiiyPO2bVnj8d7e7u7eHuZZX19fX1/f3r569cqVanVubnY2m81kDOPKlStXrlyZnZ2bm5vDnEgk/HpYluNY1vN8Pwja7U6n211f39hYW6tWK5VK5fS0VqvVYNI/HA6Hg0EURVEYokgE/XkFQRB4HmsAlJqmaaoqSZIkiugnaxi5nGHwvCAIgqbpuq4DaOwdRQk4JIAVh9M0R6PRCOk8Pj4+Pjp699133333XRR07O3t7e3toWfxixcvXjx/nvlqGMbE4QgFC7jXpIzltfIDT6Jf/OIXv/jFL77//e9//5/9swsXLly4cAFzIkpoFyDLkqQoSZIkHMfzHCcIKA5BSQgKOrBTHANECXsxDMNAR2DHAdbAZXFxcXF+HoU0UJba7Var07Es07Ssa9euXn3zzV6v2+12UylZTqWIK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuCKuiCviirgirs4OVwLccHAbqArYEpaIrXa73W63C08cKAkwnk8ShmGYW7du3bp1CwhCnYDmoOvptKpiWZjf913X8zADNI1J2QK2z3EcVy5XqzMz8PoRRY7j+XQ6mzUMlFeg+YDvO47rZjL5fK/XbHY67fZoNBgMh9ATBIHjWLbZrNcbDdx3Woma7i+cJEkSRdNFIgAF1yCsJye1Wq3G86IoCIgPrsnncznDgH41KegArgzDMPD6QU9b4IvZkP5KpVKpVJB+fBfzYH5E8o/LNE5OTk5OTr744osvvvji2rVr165d++Y3v/nNb34T8yNHOHh4J53WdcPADH+4xyCYtIKAaoTISJIkCQKyAJUG6k2SJIkgoJUBQEdhBfr57u3t7Ozvt1rNZqfzu9/du3f/Pg7A5ub58xcuEFfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVydHa6Eev30tFaL4zCMIhj2w2jfNIfD0ajbbbc7Hcuy7fEYy7p37/79+/ebzVar1UKhBG52fFyrnZ4Wi5VKuYxuvAyDIgff9zzLMk3bxgwLCwsL1SrUCRQRmKZpWhZQm5mpVufmJsDFcRxnMujlC9UhSZIE3j+4LxLz5MmjR19+ybJJEkUzM3Nzs7OWZVmjkaalUpNiBKRWUVRV0xBoluU4dBYOAsfxPNvGQZqUUTBMFAEXx3Fd18UMgAD6y3RbAOxoNOr3+33Mjx1hhTiKuB4rn52dnZ2dxdqSJI5ZdjQaDi0L1/O8KGLXDINPj44OD09OTk9PTur1f/Wv/uW//Ku/guW/aY5G43EqpSia1u12Ov3+3Nzs7MKC53leEIiiKMJlShQ9z/dd17YdZzye6FGvAULBDBQbhmHZOMa3sFr398P38a8HnMzNzcxUKjjqh4f7+3t71WqlcvMmcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxNVZ40qA+wy0CxRQ4JbQW6DJPH/+8uWLF3hofzQyTdO8fPny5cuXb968efPmTTy6b5q2PR7jN34oCc+fP3++v89xDBPHHCcIPC/LoqgoUZQkuNd4PB47jm3zPM+Loqal07ouy6kUrP3hkgPlJAgYhmE4Lghg9+84nuf7nud5UIugkCDZwJ1hJnb7qRQwhdahKIqiqlBmJuHmec+DsoGQ4QCwrCDwfLGYy2Wzg8FoNBxiHigVqAxAYnA9MAKa0x1+x1Njc3Nzc3MT16CYAnhCwwmmBoDDCqHhoHMx1Bs4H33++eeff/457g4NBwcVyoxpmmarBR8inhcEjsMeMT/QB8LYM/oWYyWyrCiiqOu6nk7ncrlcNov1Y+XIL1S7XC6dNowo8jzfHw673V7PsgaD4dBxomjiLUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxdRa4Evb2Xr7c2UEyBgPT7PWOjo6Ojo7wYD++fHpar9dq0Cs++OCDDz74YHt7e3t7e25ucXFhIZutVCoVlj0+Pj7e2dnZ2dnZ3X31am8Pv/Rjk+l0NpvLiSLLimKvNxyORkkSBEmiaYZhGNmsrmezgqAoguA4nhcEpgm9wbZdVxBEkeNQmsBxopgkohjHHIegF4vFYrEIJSKd1nUUMvC8bdu2ZeE7UCdQygE00QoBZQLC7wfKHibpxMyDQb8/Gk3jgk+RTmgb02UIwAVFHMAaMcGRA2rx1Ji0aOj3+30UTeAwT5cwoGEC8PrRj370ox/9CK9x/bSHFNSher1er9cBOnYKRc33fR+eSgyj67quqjgkcFbCp/jnkkqparGI9UPzchzHcV3sUVVVVdOg9VnWcGhZYej7QQAlcG9vZ2d313HCMEmIK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuCKuiCviirgirs4OVwIWNK1jYFmvXh0eHhzA6+fmzVu33n77zp07d+7cyWQMwzCgJIzHrus4R0c7Ozs7uBKKCn71X11dXV1dBV7ZrGFks5MNDAYTL6RcLpstFPBwfq83GPT7k4f5oaRIkihOFyB4XhjyPMdFkePA8L9aRfdb25708331am9vbw+NCFCqgHDoeiqlquOx43jeHzsTsVMD7/i+70+unO5WjG8h/dg18EJKqtVyuVzG9dBVpufE+68N+A0Dygkig0OI+bFyFGu02+12uz3ttYQIIzLQlHB3zIMjgWzijlBv8CnWg/df5933sTuoYaqaSul6EISh5yGnz58/f/78OUBEPOEeBRWOYeI4SbJZTUunUYzDsoqiqsQVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXZ4cr/i//8r333n4bS282m81mE7/4p1Kqqqookfj+9//5P//+99fXNzc3N3d3d3Z2dvAbfxhGURTBlAYLRfrT6Uxm0sM3jpOEYVCmgM62sqwoimIY2Ww2i+YBcAdCX1z0noUnEZoPYAYAgCtd13U9Lww9Lwjy+UwmnXZdlFmMx+MxfJRQLKBpqppKaZqm6TrSidkmpSKWNRohtJqm6+k0go4IoMQDpRbo/4uBsEL5mbj3+L7vY7+YG4lH11qUS6BwA3GbLnZAv+DpZGPgsCGp0NagBUFzwzXTDQGABTDFHQE9z/M8UHYc9B1mWZZlmPF4PLas6Q680y0UgGC/3++jaMQ0G416vdkUBJ4XxSSJY4YJAs/zfUliWZ5vter1RsPzXNd1O512u9PZ3Nza2toirogr4oq4Iq6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuDo7XPF/8ifXr6+twdq/UimVyuWVlfX1tTXcZnZ2fn5u7saNW7du3Wo0arVabX5+fn5+fqJ1BEEQAEpsDOpBLpfP53KYAdghlIaRTmcyMzPVarWaz2ezuRzDsCzLQk+QZUkSRUHgeUGAIX4YBkEQhGEQ+H4YxnEUISgIlijyPMsqiixLEr4rirIsSVgPoETKJUmSZDmKGAaNBcIQgbOs8RjlFYJQKpXLlQrCir1IkiCIommOx5YFW/0wRFOCVEqSslnDMAxcD/UDCXYcz3NdNFV4442LF994Y3a2Wq1WMSdAARwAEQ5BUGOAxbRehKIJFFYsLy8vLy9fv379+vXrmAdRlaYG/J5wwGzbdR0HR9RxXBelKLYtCKI4aXfAcTzPcXinWCwUCgXgiH8xUKtyuWwWuzUMrBzHAw0lNC2VUtV2u9lstcIwiqCPhaGmZbPZLHFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8TV2eGK/6f/9MaNtbWPPvre9z7+eG5ufn5+Hob9v/nNZ5/95jfnz58/f/782try8vIyloLH9fv90Wg4hJIAHQC/+HMcz/P85NF6hmEY3BiP50eR7/s+NIpMRtM0DQoJFICJV85waJqqqqqybNvjsWUBJs9zHNs2zeFwOMzns9lsVhQ5jmXT6XRa06DzIKxzcwsLCwtRFMcM0253u91uu93tdjqWNR6Px+l0JmMY9XqjUa9fvXr16rVrly9fvry9reuapmlwaJq2/FcUWZZltCKAmoOmBP3+cNjvK0oqpSi6nk7req/X7/d6uVw+n88j9M1mvQ5dqd2WZVlWlGw2k8lmx2PLsm0cm2632+100mld13XgDqRwPHDNkydPnjx5cuvWrVu3bs3MzM5Wq0DBNC3LNF+rXkmSz5dKxeLkQCZJHPO8JIlipzMY9PvILA4YVsiyPM9xspxKYSeKcnp6cnJ6ihIJnuc4jkulJAlXKIplmaZpyjLPi6Lj2LbjOA4KP8IwDAcD07Ss5893dl6+nJtbXl5aIq6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuCKuiCviirg6O1wJ58+/8caFC1Ak7t27d+/ePWgveFAfD+Fjgr29vb29vXK5Wp2ZgYcONoQlSpKiyDLmATq4Jgw9z/dR+sCyksSyHJckDAP3HCTJ913XtoPAdT0vnda0VMrzbNtxJInnOQ56AtQXTVMUWXbd8diyVFVVJ/b2cCmCHz2wRpEBjgp0DzQ6ODw8PDw+vn379u3bt9fX33rrrbcYZjQajSyrVqvVoD5N3IW83w+sWRBkWRRxYFzX9xHOMBRFRZFlJFWWBUEULYvnOQ46EmZQFOhNKLtgWShRPG+ao9F4DKcheBtNFzKgRMJxHCcI0HZgurAC0cacQRDHUYSYo4jE84LA98fjfr/Xw2rRCAF/gRT2gjmnCzomTkae5/uTPryui38Ak9Uhg48fP3ny9Cn6KsM36uLF7e0rV4gr4oq4Iq6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuCKuzhpXAh7IRwjgiYOEQcNBd1c8cj+tb2DbePgfpQdJwrKT3rvQIpBs/OqPb2EGLA1b8qcGPsWcCJCqqqqiTIcSwcVWsc7Dw4OD42PAPTc3O5vJ4OH/brfb7fcR9FKpVKpU4Dp07969e7/73dHR0dHJyeHh/fsPHqBsoVyen19ctO3x2HGOj4+PJ3PW6/X60RH63qL7MF73+8PhYDDtEIQ1G4aup9PTDQdetxrwfYCIY8MwLBvH5XK5XC7jjpgZ/XkPDw8PDw+RvGw2m9V1qEyILWICVW0SMdv2PEQGmAZBFIXhxAFKURQFrk2TRgdxHMfTZRrTu0AMWRZ6GMMwDM+z7OSoPHv27NmzZ9DxbNu2Xff69bfeunEDnZpxPARBUVIp4oq4Iq6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuCKuiKszxBWWBa0Dgbh58+bNmzexPdwM21tbW1tbW4NiMNFhXo84ZpjkqzEdykzGMHT9tVYQxwAOM+OOgiCKHIdEYpMIBJCFExDexyanLfwnugoaBnie52Ft+C7mwfXQLKALwXEJSd3f39/f33ecFy9evECCMRu0rLm5ubm5uen7Ag7cfdKrVxQFAa9bLbQm4Hmen3Y+QnHCdMQ8z/cdJ58vFotFXAPEEXn4E2E2ADRpWRBFUYR7YSWINvaO+2L9iAP6GOMQTjSfIAgCzINeyejU6zhhOB7ruqpqWr/f6/V6UG4Qn+Gw3x8MJj2RPc/zJrrN5cuXLuHIIea93nDY61Wrmra4SFwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXF1drgSkHI442ADeOb9D4sRZFmWsZTx2LbH4/CPBnrXYtGTcHMcx2ERr3vrJgkCNN29F7b+gADXQ7EZDAaDXg+fY2aY1iNMCH2pVCiUy1itKIqiIJTL5fLMDHQKKBuTXsONRquF7rz9fq83GCBFs7Ozs/PzOzs7Ozs7jx8/fvz0KcoHvvOd73zn6tWTk1rt5AT3gsrxGtPJUUIicVSSJAyjCIcBxQ2ID4LO85OevVBJdB2FKlDMsPd6vV6v17EGlHtg7zDmRzQQQ7w/jTsgQ6bwjqrquqbxPDSl14ciSaIojpEFlHcghi9ePHv2/Pnh4cHBwQH2gu+sr6+urq3duHHjxo0buq7rul4olErFIsPwPMfdv//gwb17v/3tb3/729+eO3fhwuYmcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxNVZ4+qrH9yxICwUD97jNvjtHwvFJlU1ndZ1XD9dQIFOtfgWwj1dQIF5ZHnSNXfiwoNwT5cYTKcN3wVGf2jYryiKMq2KvC6RKJWgn9Tr9XqzCSDQcXZjY2NjY+Pp06dPnz5FsLBflAmgbOGTTz755JNPcMdOp9Pp9dDXFvpPKhXHUTTtx4S7O47neR6ugT8SrgkC23bdSSGD63oeji52LUk8LwijkWVZFubBMUAcUJiAgwTHqOlCFVwznbtkakwXoeCd6eONLrq4ZjpHg0Gv1+8DS0Ccy2UyhgE3qLW1lZXV1ZmZmZmZGawKBRRxzLJxDB8rzPMnf7Kx8f77vu95KM8grogr4oq4Iq6IK+KKuCKuiCviirgirogr4oq4Iq6IK+KKuDobXAnQDaZ1CWwSoQEE6GOL5E0byWOTeAf28wjNJHCAieNEEQGVJEmaIDUdArxGmrESKEjTugQSieKCadUCMw8Gg8Fo1Gg0Gq2WYRiGYTBMkrBsNmsYudzEbYfnef769evX33qrXq/XG42Tk5OTk5PV1dXV1VUUXeC+KLKYboCA164bBJNijTCM4yjCnKmUrmsaCjH4qYHSCqwTise0QxNKJyqVSqVSOTw8Otrfn2628ODBgwcPHkAd+vDDjz766CMAOr2qievQ69xN52VaO2KnBs8LwqSAAoeq3W42Wy14DGWzhmEYKJ9ZWpqfX1jAGgBTq9XptNvptKbpOjKyv39ycnAQRUkSRbKcSslyrzcY9HqmORh4HnFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8TV2eGKm344H0mCVw48eiYP+jMMw2xtbW1tbWG5zNSYBmVaaYGugsABCDxyPz3D9LeQANwRQcQ8uBLfgsZSmxoIDYoXJkUcURRFk3S+TiRUHbgUAamHDx8+fPgQkgO+CyixTmgpaJgA4LA2aD5IP+7iTg18C+vHvjBbsVgsFouIA/Yy6VaMAgdVVVV7agACRAC5wDxYCe71x4cTA+vEdzGzrqdSqorGBRhYg21b1ngMpOCLtL29vb29vbS0tLS0hLhBn8E6p//17O/v7+/tIftoXICV4IARV8QVcUVcEVfEFXFFXBFXxBVxRVwRV8QVcUVcEVfEFXFFXJ01rv4/gGfo/AgoK6EAAAAASUVORK5CYII="

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sounds; });
const sounds = [];




/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_index_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level_index_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splashScreen_index_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ending_index_js__ = __webpack_require__(61);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "level", function() { return __WEBPACK_IMPORTED_MODULE_1__level_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ending", function() { return __WEBPACK_IMPORTED_MODULE_3__ending_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "splashScreen", function() { return __WEBPACK_IMPORTED_MODULE_2__splashScreen_index_js__; });











/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy loading scene' + ((this.preloaded === false) ? ' -> assets are loaded' : ''));

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    console.log('-------');
}




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render loading scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

      this.context.fillStyle = '#99b6e9';
    this.context.fillRect(0, 0, this.size.width, this.size.height);
}




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
function setup() {

    console.log('setup loading scene');
}




/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
function start() {

    console.log('start loading scene' + ((this.preloaded === false) ? ' -> loading assets...' : ''));
}




/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
function update(delta) {

    // console.log('update loading scene');
}




/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy level scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);
    this.keyboard.destroy();

    //delete this.inputs;
    //delete this.world;
    //delete this.camera;

    delete this.keyboard;
    delete this.systems;

    console.log('-------');
}




/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    //console.log('render level scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#99b6e9';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.renderDecor.update.call(this, this.world.entities);
    this.systems.render.update.call(this, this.world.entities);
    this.systems.renderText.update.call(this,this.world.entities);

}




/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_level_animate_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_level_input_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_level_render_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systems_level_movement_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systems_level_gravity_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_systems_level_collision_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_systems_level_hitboxUpdate_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_systems_level_renderText_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_systems_level_renderDecor_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_systems_level_updateBlock_js__ = __webpack_require__(78);















function setup() {

    console.log('setup level scene');

    this.inputs = [];

    this.keyboard = new __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__["a" /* Keyboard */]([__WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["b" /* RIGHT */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["a" /* LEFT */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["d" /* UP */]], this.inputs);

    this.systems = {

        'animate': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['animation', 'spritesheet'], __WEBPACK_IMPORTED_MODULE_3_systems_level_animate_js__["a" /* animate */].bind(this)),
        'input': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['input'], __WEBPACK_IMPORTED_MODULE_4_systems_level_input_js__["a" /* input */].bind(this)),
        'render': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position', 'animation','real'], __WEBPACK_IMPORTED_MODULE_5_systems_level_render_js__["a" /* render */].bind(this)),
        'renderText' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['score','position'],__WEBPACK_IMPORTED_MODULE_10_systems_level_renderText_js__["a" /* renderText */].bind(this)),
        'movement' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position','direction','hitbox'],__WEBPACK_IMPORTED_MODULE_6_systems_level_movement_js__["a" /* movement */].bind(this)),
        'gravity' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position','velocity'],__WEBPACK_IMPORTED_MODULE_7_systems_level_gravity_js__["a" /* gravity */].bind(this)),
        'renderDecor' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['decor','position'],__WEBPACK_IMPORTED_MODULE_11_systems_level_renderDecor_js__["a" /* renderDecor */].bind(this)),
        'hitboxUpdate' :new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['hitbox'],__WEBPACK_IMPORTED_MODULE_9_systems_level_hitboxUpdate_js__["a" /* hitboxUpdate */].bind(this)),
        'collision' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['hitbox','velocity'],__WEBPACK_IMPORTED_MODULE_8_systems_level_collision_js__["a" /* collision */].bind(this)),
        'renderDecor' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['decor','position'],__WEBPACK_IMPORTED_MODULE_11_systems_level_renderDecor_js__["a" /* renderDecor */].bind(this)),
        'updateBlock' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['hitbox','velocity','real','block'],__WEBPACK_IMPORTED_MODULE_12_systems_level_updateBlock_js__["a" /* updateBlock */].bind(this))
    };
}




/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keynames; });
const keynames = [];

keynames[9] = 'TAB';
keynames[13] = 'ENTER';
keynames[16] = 'SHIFT';
keynames[17] = 'CTRL';
keynames[18] = 'ALT';
keynames[27] = 'ESC';
keynames[32] = 'SPACE';

keynames[37] = 'LEFT';
keynames[38] = 'UP';
keynames[39] = 'RIGHT';
keynames[40] = 'DOWN';

keynames[48] = 'ZERO';
keynames[49] = 'ONE';
keynames[50] = 'TWO';
keynames[51] = 'THREE';
keynames[52] = 'FOUR';
keynames[53] = 'FIVE';
keynames[54] = 'SIX';
keynames[55] = 'SEVEN';
keynames[56] = 'EIGHT';
keynames[57] = 'NINE';

keynames[65] = 'A';
keynames[66] = 'B';
keynames[67] = 'C';
keynames[68] = 'D';
keynames[69] = 'E';
keynames[70] = 'F';
keynames[71] = 'G';
keynames[72] = 'H';
keynames[73] = 'I';
keynames[74] = 'J';
keynames[75] = 'K';
keynames[76] = 'L';
keynames[77] = 'M';
keynames[78] = 'N';
keynames[79] = 'O';
keynames[80] = 'P';
keynames[81] = 'Q';
keynames[82] = 'R';
keynames[83] = 'S';
keynames[84] = 'T';
keynames[85] = 'U';
keynames[86] = 'V';
keynames[87] = 'W';
keynames[88] = 'X';
keynames[89] = 'Y';
keynames[90] = 'Z';

// exports current module as an array



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animate; });
function animate(entity) {

    const animationComponent = entity.get('animation');

    if (animationComponent.frames.length > 1) {

        animationComponent.elapsed += this.delta;

        const duration = 1000 / animationComponent.framerate;

        while (animationComponent.elapsed >= duration) {

            animationComponent.elapsed -= duration;
            animationComponent.frame = (animationComponent.frame === animationComponent.frames.length - 1) ? 0 : animationComponent.frame + 1;
            animationComponent.current = animationComponent.frames[animationComponent.frame];
        }
    }
}




/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_animation_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_direction_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_run_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_spritesheet_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_velocity_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_jump_js__ = __webpack_require__(41);








function input(entity) {

    this.inputs.forEach((input) => {

        const directionComponent = entity.get('direction');
        const inputComponent = entity.get('input');
        const spritesheetComponent = entity.get('spritesheet');
        const positionComponent = entity.get('position');
        const velocityComponent = entity.get('velocity');

        if (inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            switch (input.action) {
              case 'KEY_UP':
                  if(!entity.has(['jump'])){
                        velocityComponent.vy= velocityComponent.vyMin;
                  }
                  entity.add([
                      new __WEBPACK_IMPORTED_MODULE_6_components_jump_js__["a" /* Jump */]()
                  ]);

              break;

                case 'KEY_RIGHT':

                  entity.add([

                        new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('RIGHT'),
                        new __WEBPACK_IMPORTED_MODULE_2_components_run_js__["a" /* Run */]()
                        //new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_RIGHT'])
                  ]);


                break;

                case 'KEY_LEFT':

                    entity.add([
                          new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('LEFT'),
                          new __WEBPACK_IMPORTED_MODULE_2_components_run_js__["a" /* Run */]()
                          //new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_LEFT'])
                    ]);


                break;
            }
        }

        else if (entity.has(['run']) === true
        && inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'UP') {

            switch (input.action) {

                case 'KEY_RIGHT':

                    if (directionComponent.direction === 'RIGHT') {

                        entity.remove(['run']);
                        //entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_RIGHT'])]);
                    }

                break;

                case 'KEY_LEFT':

                    if (directionComponent.direction === 'LEFT') {

                        entity.remove(['run']);
                        //entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_LEFT'])]);
                    }

                break;
            }
        }
    });
}




/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jump; });
function Jump() {

    this.name = 'jump';
}




/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    if(entity.name=="hero"){

      if(positionComponent.y<this.size.height/2 || this.world.limitY< -this.size.height/2){

        this.camera.y = positionComponent.y - (this.size.height/2);

        if(positionComponent.y< this.world.limitY ){
          this.world.limitY=positionComponent.y;
        }

        if(this.camera.y >this.world.limitY){
          this.camera.y=this.world.limitY;
        }
      }else{
        this.camera.y=0;
      }
    }

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x -this.camera.x , positionComponent.y-this.camera.y, animationComponent.current.width, animationComponent.current.height

    );

}




/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_run_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_hitbox__ = __webpack_require__(13);




function movement(entity) {

  const directionComponent = entity.get('direction');
  const inputComponent = entity.get('input');
  const positionComponent = entity.get('position');
  const hitboxComponent = entity.get('hitbox');

  if ( entity.has(['run']) && directionComponent.direction === 'LEFT') {

    var defaultMovement =5;
    if(positionComponent.x -5< 0){
      defaultMovement=(positionComponent.x +5);
    }
    positionComponent.x =positionComponent.x-defaultMovement,positionComponent.y;

  }else if( entity.has(['run']) && directionComponent.direction === 'RIGHT'){

    var defaultMovement =5;
    if(positionComponent.x +5+hitboxComponent.rectangle.width > this.size.width){
      defaultMovement=this.size.width -(positionComponent.x + hitboxComponent.rectangle.width) ;
    }
    positionComponent.x =positionComponent.x + defaultMovement;

  }

}



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gravity; });
function gravity(entity) {

  const positionComponent = entity.get('position');
  const velocityComponent = entity.get('velocity');

  positionComponent.y = (positionComponent.y +(2*velocityComponent.vy));

  if(velocityComponent.vy<=velocityComponent.vyMax){
    velocityComponent.vy+=(0.3);
    }

  }
  


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collision; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_collide_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_collideDistance_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_touchGround_js__ = __webpack_require__(75);




function collision(entity) {

  var BreakException = {};

  try {

    var positionComponent = entity.get('position');
    var hitboxComponent =entity.get('hitbox');

    if(entity.name=="hero" &&  positionComponent.y> (this.world.limitY+this.size.height )){
          entity.remove(['hitbox']);
          this.load('ending');
    }

    this.world.entities.forEach((otherEntity)=>{

      if(entity!==otherEntity){
        if(otherEntity.has(['hitbox'])){
          if(Object(__WEBPACK_IMPORTED_MODULE_0_modules_collide_js__["a" /* collide */])(hitboxComponent.rectangle,otherEntity.components.hitbox.rectangle)){
            var distance = Object(__WEBPACK_IMPORTED_MODULE_1_modules_collideDistance_js__["a" /* collideDistance */])(hitboxComponent.rectangle,otherEntity.components.hitbox.rectangle);

            positionComponent.y+= distance.y;
            hitboxComponent.rectangle.y=positionComponent.y;

            if(hitboxComponent.pushable){
              positionComponent.x+= distance.x;
              hitboxComponent.rectangle.x=positionComponent.x;
            }


            if(entity.has(['jump']) && distance.y<0 ){
              entity.remove(['jump']);
            }else if(otherEntity.has(['touchGround']) && distance.y<0 && entity.name!='hero'){
              entity.add([new __WEBPACK_IMPORTED_MODULE_2_components_touchGround_js__["a" /* TouchGround */]()]);
              entity.remove(['velocity']);
            }

            if(!hitboxComponent.destructible && distance.y<0){
              throw BreakException;
            }else if(hitboxComponent.destructible && distance.y>0){
              entity.remove(['hitbox']);
              this.load('ending');
            }
          }
        }
      }

    });

    } catch (e) {
      if (e !== BreakException) throw e;
    }

}




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape_js__ = __webpack_require__(14);


const caller = {

    'collidePointPoint': collidePointPoint,
    'collidePointRectangle': collidePointRectangle,
    'collideRectangleRectangle': collideRectangleRectangle
};

function collide(A, B) {

    const parameters = [];

    let name = 'collide';

    if (A instanceof __WEBPACK_IMPORTED_MODULE_0__shape_js__["a" /* Point */] === true) {

        parameters.push(A);

        name += 'Point';
    }

    if (B instanceof __WEBPACK_IMPORTED_MODULE_0__shape_js__["a" /* Point */] === true) {

        parameters.push(B);

        name += 'Point';
    }

    if (parameters.indexOf(A) === -1
    && A instanceof __WEBPACK_IMPORTED_MODULE_0__shape_js__["b" /* Rectangle */] === true) {

        parameters.push(A);

        name += 'Rectangle';
    }

    if (parameters.indexOf(B) === -1
    && B instanceof __WEBPACK_IMPORTED_MODULE_0__shape_js__["b" /* Rectangle */] === true) {

        parameters.push(B);

        name += 'Rectangle';
    }

    return caller[name].apply(null, parameters);
}

function collidePointPoint(A, B) {

    if (A.x !== B.x
    || A.y !== B.y) {

        return false;
    }

    return true;
}

function collidePointRectangle(A, BCDE) {

    if (A.x < BCDE.x
    || A.x > BCDE.x + BCDE.width
    || A.y < BCDE.y
    || A.y > BCDE.y + BCDE.height) {

        return false;
    }

    return true;
}

function collideRectangleRectangle(ABCD, EFGH) {

    if (ABCD.x + ABCD.width < EFGH.x
    || ABCD.x > EFGH.x + EFGH.width
    || ABCD.y + ABCD.height < EFGH.y
    || ABCD.y > EFGH.y + EFGH.height) {

        return false;
    }

    return true;
}

// exports current module as a function



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collideDistance; });
function collideDistance(rectangle, otherRectangle) {

  var collision= {x:0 , y:0} ;

      var deltaX = ( rectangle.x + ( rectangle.width / 2 ) ) - ( otherRectangle.x + ( otherRectangle.width / 2 ) );
  		var deltaY = ( rectangle.y + ( rectangle.height / 2 ) ) - ( otherRectangle.y + ( otherRectangle.height / 2 ) );

  		var middleCenterDistanceX = ( rectangle.width / 2 ) + ( otherRectangle.width / 2 );
  		var middleCenterDistanceY = ( rectangle.height / 2 ) + ( otherRectangle.height / 2 );
  		var colDir = null;

  		if( Math.abs( deltaX ) < middleCenterDistanceX && Math.abs( deltaY ) < middleCenterDistanceY ) {

  			if( collision.active === false )
  				collision.active = true;

  			var oX = middleCenterDistanceX - Math.abs( deltaX ),
  				oY = middleCenterDistanceY - Math.abs( deltaY );
  			if( oX >= oY ) {
  				if( deltaY > 0 ) {
  				      collision.y=oY;
  				} else {
  	          collision.y=-oY;
  				}
  			}
  			else {
  				if ( deltaX > 0 ) {
  	          collision.x=oX;
  				}
  				else {
  	          collision.x=-oX;
  				}
  			}
  		}

    return collision;
};




/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hitboxUpdate; });
function hitboxUpdate(entity) {

  const positionComponent = entity.get('position');
  const hitboxComponent = entity.get('hitbox');

  hitboxComponent.rectangle.x=positionComponent.x;
  hitboxComponent.rectangle.y=positionComponent.y;

}



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderText; });
function renderText(entity) {

     const scoreComponent = entity.get('score');
     const positionComponent = entity.get ('position');

     if(-positionComponent.y>scoreComponent.total  && -positionComponent.y > 0){
         scoreComponent.total=- positionComponent.y;
         this.score = scoreComponent.total= Math.floor(scoreComponent.total);
     }

     this.context.lineWidth = 2;
     this.context.font="20px Arial";
     this.context.strokeStyle = 'black';
     this.context.strokeText("Score : "+scoreComponent.total, this.size.width - 140, 50);


}




/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_random_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_animation_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_direction_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_input_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_spritesheet_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_velocity_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_hitbox_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_score_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_components_decor_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_components_real_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_components_touchGround_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_components_block_js__ = __webpack_require__(77);
















function start() {

    console.log('start level scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.camera = {
      'x' :0,
      'y':0
    };


    this.world = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["c" /* World */]();
    this.world.limitY= 0;

      var startHeightSize =80;
      var startWidthSize=40;
    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('hero', [
        new __WEBPACK_IMPORTED_MODULE_3_components_direction_js__["a" /* Direction */]('DOWN'),
        new __WEBPACK_IMPORTED_MODULE_4_components_input_js__["a" /* Input */](['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        //new Position(80, this.size.height-150),
        new __WEBPACK_IMPORTED_MODULE_5_components_position_js__["a" /* Position */](80, this.size.height-150),
        new __WEBPACK_IMPORTED_MODULE_11_components_real_js__["a" /* Real */](),
        new __WEBPACK_IMPORTED_MODULE_9_components_score_js__["a" /* Score */](),
      //  new Hitbox(80, this.size.height-150,80, 120,true,true),
        new __WEBPACK_IMPORTED_MODULE_8_components_hitbox_js__["a" /* Hitbox */](80, this.size.height-150,startWidthSize, startHeightSize,true,true),
        new __WEBPACK_IMPORTED_MODULE_7_components_velocity_js__["a" /* Velocity */](0,0,-10,7),
      //  new Animation(this.assets.images['mainChar'], [{'x': 0, 'y': 0, 'width': 80, 'height': 120}]),
        new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['mainChar'], [{'x': 0, 'y': 0, 'width': startWidthSize, 'height': startHeightSize}]),
        new __WEBPACK_IMPORTED_MODULE_6_components_spritesheet_js__["a" /* Spritesheet */](
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

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('floor', [
        new __WEBPACK_IMPORTED_MODULE_5_components_position_js__["a" /* Position */](0, this.size.height-40),
        new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['floor'], [{'x': 0, 'y': 0, 'width': 650, 'height': 40}]),
        new __WEBPACK_IMPORTED_MODULE_8_components_hitbox_js__["a" /* Hitbox */](0, this.size.height-40,450,40,false),
        new __WEBPACK_IMPORTED_MODULE_11_components_real_js__["a" /* Real */](),
        new __WEBPACK_IMPORTED_MODULE_12_components_touchGround_js__["a" /* TouchGround */](),
    ]));

    this.world.nuageCount=0;
    for (var i = 0; i< 200; i++ ){
      var direction = "LEFT";
      if (i%2==0) direction ="RIGHT";

      this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('nuage', [
          new __WEBPACK_IMPORTED_MODULE_3_components_direction_js__["a" /* Direction */](direction),
          new __WEBPACK_IMPORTED_MODULE_10_components_decor_js__["a" /* Decor */](),
          new __WEBPACK_IMPORTED_MODULE_5_components_position_js__["a" /* Position */](Object(__WEBPACK_IMPORTED_MODULE_1_modules_random_js__["a" /* random */])(350), 200 -(300*(i))),
          new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['nuage'], [{'x': 0, 'y': 0, 'width': 200, 'height': 200}])
      ]));
      this.world.nuageCount++;

    }

    this.world.boxCount=0;
    for (var i = 0; i< 30; i++ ){
        this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('box', [
            new __WEBPACK_IMPORTED_MODULE_5_components_position_js__["a" /* Position */](Object(__WEBPACK_IMPORTED_MODULE_1_modules_random_js__["a" /* random */])(450), (-180*(i+1))),
            new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['box'], [{'x': 0, 'y': 0, 'width': 40, 'height': 40}]),
            new __WEBPACK_IMPORTED_MODULE_8_components_hitbox_js__["a" /* Hitbox */](50, -1000,40,40,false),
            new __WEBPACK_IMPORTED_MODULE_7_components_velocity_js__["a" /* Velocity */](0,0,-1.2,1.2),
            new __WEBPACK_IMPORTED_MODULE_11_components_real_js__["a" /* Real */](),
            new __WEBPACK_IMPORTED_MODULE_13_components_block_js__["a" /* Block */]()
        ]));
        this.world.boxCount++;
    }

}




/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(7);



function update(delta) {

    //console.log('update level scene');
    this.delta = delta;

    this.systems.input.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);
    this.systems.movement.update.call(this,this.world.entities);
    this.systems.gravity.update.call(this,this.world.entities);
    this.systems.hitboxUpdate.update.call(this,this.world.entities);
    this.systems.collision.update.call(this,this.world.entities);
    this.systems.updateBlock.update.call(this,this.world.entities);
    this.systems.renderText.update.call(this,this.world.entities);


    this.inputs.length = 0;
}




/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy splashScreen scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);
    this.keyboard.destroy();

    delete this.delta;
    delete this.inputs;
    delete this.world;
    delete this.camera;

    delete this.keyboard;
    delete this.systems;

    console.log('-------');
}




/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render splashScreen scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#99b6e9';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.render.update.call(this, this.world.entities);
    this.systems.renderButton.update.call(this,this.world.entities);

}




/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_splashScreen_input_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_splashScreen_render_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_splashScreen_renderButton_js__ = __webpack_require__(58);








function setup() {

    console.log('setup splashScreen scene');

    this.inputs = [];

    this.keyboard = new __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__["a" /* Keyboard */]([__WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["c" /* SPACE */]], this.inputs);

    this.systems = {


        'render': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position', 'animation'], __WEBPACK_IMPORTED_MODULE_4_systems_splashScreen_render_js__["a" /* render */].bind(this)),
        'renderButton' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */] (['position','button'],__WEBPACK_IMPORTED_MODULE_5_systems_splashScreen_renderButton_js__["a" /* renderButton */].bind(this)),
        'input': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['input'], __WEBPACK_IMPORTED_MODULE_3_systems_splashScreen_input_js__["a" /* input */].bind(this)),

    };
}




/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });

function input(entity) {

    this.inputs.forEach((input) => {

        const inputComponent = entity.get('input');

        if (inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            switch (input.action) {
                case 'KEY_SPACE':

                this.load('level');

                break;

            }
        }
    });
}




/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x -this.camera.x , positionComponent.y-this.camera.y, animationComponent.current.width, animationComponent.current.height

    );

}




/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderButton; });
function renderButton(entity) {

     const buttonComponent = entity.get('button');
     const positionComponent = entity.get ('position');

     this.context.lineWidth = 2;
     this.context.font="20px Arial";
     this.context.strokeStyle = 'black';
     this.context.strokeText(buttonComponent.text,positionComponent.x,positionComponent.y);

}




/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_input_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_score_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_button_js__ = __webpack_require__(15);







function start() {

    console.log('start splashScreen scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.camera = {
      'x' :0,
      'y':0
    };

    this.world = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["c" /* World */]();

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('home', [
        new __WEBPACK_IMPORTED_MODULE_4_components_button_js__["a" /* Button */]("CHICKEN  SPACE"),
        new __WEBPACK_IMPORTED_MODULE_2_components_position_js__["a" /* Position */](this.size.width/2-90,this.size.height/2-100)
    ]));

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('button', [
        new __WEBPACK_IMPORTED_MODULE_4_components_button_js__["a" /* Button */]("Press Space to Play"),
        new __WEBPACK_IMPORTED_MODULE_2_components_position_js__["a" /* Position */](this.size.width/2-90,this.size.height/2+10),
        new __WEBPACK_IMPORTED_MODULE_1_components_input_js__["a" /* Input */](['KEY_SPACE'])
    ]));


}




/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(7);



function update(delta) {

    // console.log('update splashScreen scene');
    this.delta = delta;

    this.systems.input.update.call(this, this.world.entities);

    this.inputs.length = 0;
}




/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

      console.log('destroy ending scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);
    this.keyboard.destroy();

    delete this.delta;
    delete this.inputs;
    delete this.world;
    delete this.score;
    delete this.camera;

    delete this.keyboard;
    delete this.systems;

    console.log('-------');
}




/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    //console.log('render ending scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#99b6e9';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.renderDecor.update.call(this,this.world.entities);
    this.systems.renderGame.update.call(this,this.world.entities);
    this.systems.render.update.call(this, this.world.entities);
    this.systems.renderText.update.call(this,this.world.entities);
    this.systems.renderButton.update.call(this,this.world.entities);


}




/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_ending_input_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_ending_render_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_ending_renderText_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systems_ending_renderButton_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systems_level_animate_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_systems_level_render_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_systems_level_movement_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_systems_level_gravity_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_systems_level_renderDecor_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_systems_level_collision_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_systems_level_hitboxUpdate_js__ = __webpack_require__(48);

















function setup() {

    console.log('setup ending scene');

    this.inputs = [];

    this.keyboard = new __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__["a" /* Keyboard */]([__WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["c" /* SPACE */]], this.inputs);

    this.systems = {

        'render': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position', 'animation','endStuff'], __WEBPACK_IMPORTED_MODULE_4_systems_ending_render_js__["a" /* render */].bind(this)),
        'renderText' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['score','position','endStuff'], __WEBPACK_IMPORTED_MODULE_5_systems_ending_renderText_js__["a" /* renderText */].bind(this)),
        'renderButton' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */] (['position','button','endStuff'], __WEBPACK_IMPORTED_MODULE_6_systems_ending_renderButton_js__["a" /* renderButton */].bind(this)),
        'input': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['input'], __WEBPACK_IMPORTED_MODULE_3_systems_ending_input_js__["a" /* input */].bind(this)),
        'renderGame': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position', 'animation','real'], __WEBPACK_IMPORTED_MODULE_8_systems_level_render_js__["a" /* render */].bind(this)),
        'animate': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['animation', 'spritesheet'], __WEBPACK_IMPORTED_MODULE_7_systems_level_animate_js__["a" /* animate */].bind(this)),
        'movement' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position','direction','hitbox'],__WEBPACK_IMPORTED_MODULE_9_systems_level_movement_js__["a" /* movement */].bind(this)),
        'gravity' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position','velocity'],__WEBPACK_IMPORTED_MODULE_10_systems_level_gravity_js__["a" /* gravity */].bind(this)),
        'renderDecor' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['decor','position'],__WEBPACK_IMPORTED_MODULE_11_systems_level_renderDecor_js__["a" /* renderDecor */].bind(this)),
        'hitboxUpdate' :new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['hitbox'],__WEBPACK_IMPORTED_MODULE_13_systems_level_hitboxUpdate_js__["a" /* hitboxUpdate */].bind(this)),
        'collisionGame' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['hitbox','velocity'],__WEBPACK_IMPORTED_MODULE_12_systems_level_collision_js__["a" /* collision */].bind(this))
    };
}




/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });

function input(entity) {

    this.inputs.forEach((input) => {

        const inputComponent = entity.get('input');

        if (inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            switch (input.action) {
                case 'KEY_SPACE':

                this.load('level');

                break;

            }
        }
    });
}




/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x -this.camera.x , positionComponent.y-this.camera.y, animationComponent.current.width, animationComponent.current.height

    );

}




/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderText; });
function renderText(entity) {

     const scoreComponent = entity.get('score');
     const positionComponent = entity.get ('position');

     this.context.lineWidth = 2;
     this.context.font="20px Arial";
     this.context.strokeStyle = 'black';
     this.context.strokeText("Score : "+scoreComponent.total,positionComponent.x,positionComponent.y);

}




/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderButton; });
function renderButton(entity) {

     const buttonComponent = entity.get('button');
     const positionComponent = entity.get ('position');

     this.context.lineWidth = 2;
     this.context.font="20px Arial";
     this.context.strokeStyle = 'black';
     this.context.strokeText(buttonComponent.text,positionComponent.x,positionComponent.y);

}




/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_input_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_score_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_button_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_endStuff_js__ = __webpack_require__(76);








function start() {

    console.log('start ending scene');

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('final score', [
        new __WEBPACK_IMPORTED_MODULE_3_components_score_js__["a" /* Score */](this.score),
        new __WEBPACK_IMPORTED_MODULE_2_components_position_js__["a" /* Position */](this.size.width/2-45,this.size.height/2-100),
        new __WEBPACK_IMPORTED_MODULE_5_components_endStuff_js__["a" /* EndStuff */]()
    ]));

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('button', [
        new __WEBPACK_IMPORTED_MODULE_4_components_button_js__["a" /* Button */]("Press Space to Retry"),
        new __WEBPACK_IMPORTED_MODULE_2_components_position_js__["a" /* Position */](this.size.width/2-80,this.size.height/2+10),
        new __WEBPACK_IMPORTED_MODULE_1_components_input_js__["a" /* Input */](['KEY_SPACE']),
        new __WEBPACK_IMPORTED_MODULE_5_components_endStuff_js__["a" /* EndStuff */]()
    ]));


}




/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(7);



function update(delta) {

    //console.log('update ending scene');
    this.delta = delta;

    this.systems.input.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);
    this.systems.movement.update.call(this,this.world.entities);
    this.systems.gravity.update.call(this,this.world.entities);
    this.systems.hitboxUpdate.update.call(this,this.world.entities);
    this.systems.collisionGame.update.call(this,this.world.entities);

    this.inputs.length = 0;
}




/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAYAAAD9yHLdAAAABmJLR0QAfAB8AHzBORqSAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4ggMCQIA0Bm9XQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAANASURBVHja7d1LcsIwEEBB4+L+V4aNFyygKEpmPJ/uA4REIXoemcC2AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEXcLAHwq8fh9A3pYIUFBBCG/2xcQiMggFAIi4AAgiEoAgIIhqAgICAcCImAAIIhKAICCIeQCAggGIIiIIBwICQCAsKBkAgICAdCIiCAcAhJF7unAAAmEDB5YBIREBAOhCQ3R1gAmEDA5IFJREBAOBCS5BxhAWACAZMHJhETCAAmEDB5QMdJ5O5Xio27/x86CAgEXeF/+vrCAi9/D5YAwThvUnF0xaQJ1010hKPx9wcmEBvimCsdGzImEAERCE9k4QABYeKGF/UEFw4ERECEwhPfusKwkHgZr41taX28rBUGB9CGKBiRV1TWG0wggoEJBUwgwgFgAjGBCAZAkHb/iS4cAAIiHAACIhwAAiIcAFQMiHAA5OBdWgGiN16fByIcAJP5QCkAegXE5AEgIMIB0FCamzjCAbTfcJu9uah7IADUDIjJA0BAAHij6+fiXBYQkweAgAAwaPIQEADWAhn9gI6uAJOHCQSAgeEQEADWghn1QI6uAJOHCQSAweEQEADWAhr1QI6wAJOJgAgHgLAICICgCAiAoARyEx0giWoX3AICICQCAiAkAgJA8pAICICQCAiAkAgIAMkJCIBJREAAhKRRQKa/3TFAVyYQAAQEYLLooywBASB3QNwLARAQABKLOsoSEABqBMRRFoCAACAgAFAkII6yAAQEAAExiQBgAgFgQkBMIgC1pN2ws36IPED6jT3ognyfvgAANAsIAMknnSrfqCMtgC8bevDJzW5hAGgdECEBSLYfV/8BHG0B4zfyiy6s21zJCwkgHLF2CwnA6AnERAKYPAREUAASh2NcQIQEEA4BERRAOAREUACqhUNABAUQDgERFkAwBERYAMEQEAQGhAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKp6AvQJmGzMD9WvAAAAAElFTkSuQmCC"

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderDecor; });
function renderDecor(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x -this.camera.x , positionComponent.y-this.camera.y, (2*animationComponent.current.width)/3, (2*animationComponent.current.height)/3

    );

}




/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decor; });
function Decor() {

    this.name = 'decor';
}




/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Real; });
function Real() {

    this.name = 'real';
}




/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchGround; });
function TouchGround() {

    this.name = 'touchGround';
}




/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndStuff; });
function EndStuff() {

    this.name = 'endStuff';
}




/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
function Block() {

    this.name = 'block';
}




/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateBlock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_random_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_animation_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_velocity_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_hitbox_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_real_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_block_js__ = __webpack_require__(77);










function updateBlock(entity) {

    const positionComponent = entity.get('position');

    if(positionComponent.y > this.world.limitY+this.size.height ){
      this.world.remove(entity);

      var oversize =Math.ceil((this.world.boxCount-19)/10);
      var boxSize = 40 + 2 *(oversize);
      var distanceY = this.world.limitY+ (-2*this.size.height) ;
      this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('box', [
          new __WEBPACK_IMPORTED_MODULE_3_components_position_js__["a" /* Position */](Object(__WEBPACK_IMPORTED_MODULE_1_modules_random_js__["a" /* random */])(450),distanceY),
          new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['box'], [{'x': 0, 'y': 0, 'width': boxSize, 'height': boxSize}]),
          new __WEBPACK_IMPORTED_MODULE_5_components_hitbox_js__["a" /* Hitbox */](20000, 20000,boxSize,boxSize,false),
          new __WEBPACK_IMPORTED_MODULE_4_components_velocity_js__["a" /* Velocity */](0,0,-1.2,1.2),
          new __WEBPACK_IMPORTED_MODULE_6_components_real_js__["a" /* Real */](),
          new __WEBPACK_IMPORTED_MODULE_7_components_block_js__["a" /* Block */]()
      ]));


    }
}




/***/ })
/******/ ]);