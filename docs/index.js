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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keynames_js__ = __webpack_require__(50);


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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
function Animation(image, frames, offset,scale) {

    if(!offset){
      this.offset = 0;
    }else {
      this.offset = offset;
    }

    if(!scale){
      this.scale = 1;
    }else {
      this.scale = scale;
    }
    this.name = 'animation';

    this.image = image;
    this.framerate = 24;
    this.frames = frames;

    this.frame = 0;
    this.current = this.frames[this.frame];
    this.elapsed = 0;
}




/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hitbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_shape_js__ = __webpack_require__(17);


var Hitbox=function(x,y,width,height,pushable,destructible){


  this.rectangle=new __WEBPACK_IMPORTED_MODULE_0_modules_shape_js__["b" /* Rectangle */](x,y,width,height);
  this.pushable= pushable;
  this.name = 'hitbox';
  this.destructible = destructible?destructible:false;

}




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
function Input(inputs) {

    this.name = 'input';

    this.inputs = inputs;
}




/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
function Direction(direction) {

    this.name = 'direction';

    this.direction = direction;
}




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Run; });
function Run() {

    this.name = 'run';
}




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spritesheet; });
function Spritesheet(image, animations) {

    this.name = 'spritesheet';

    this.image = image;
    this.animations = animations;
}




/***/ }),
/* 15 */
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
        positionComponent.x -this.camera.x , positionComponent.y-this.camera.y - animationComponent.offset, animationComponent.current.width*  animationComponent.scale , animationComponent.current.height* animationComponent.scale

    );

}




/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_run_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_hitbox__ = __webpack_require__(7);




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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collision; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_collide_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_collideDistance_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_touchGround_js__ = __webpack_require__(20);




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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchGround; });
function TouchGround() {

    this.name = 'touchGround';
}




/***/ }),
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateBlock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_random_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_animation_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_velocity_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_hitbox_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_real_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_block_js__ = __webpack_require__(25);










function updateBlock(entity) {

    const positionComponent = entity.get('position');

    if(positionComponent.y > this.world.limitY+this.size.height ){
      this.world.remove(entity);

      var oversize =Math.ceil((this.world.boxCount-19)/10);
      var boxSize = 40 + 2 *(oversize);
      var scale = boxSize/300;
      var distanceY = this.world.limitY+ (-2*this.size.height) ;
      this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('box', [
          new __WEBPACK_IMPORTED_MODULE_3_components_position_js__["a" /* Position */](Object(__WEBPACK_IMPORTED_MODULE_1_modules_random_js__["a" /* random */])(450),distanceY),
          new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['box'], [{'x': 0, 'y': 0, 'width': 300, 'height': 300}],0,scale),
          new __WEBPACK_IMPORTED_MODULE_5_components_hitbox_js__["a" /* Hitbox */](20000, 20000,boxSize,boxSize,false),
          new __WEBPACK_IMPORTED_MODULE_4_components_velocity_js__["a" /* Velocity */](0,0,-1.2,1.2),
          new __WEBPACK_IMPORTED_MODULE_6_components_real_js__["a" /* Real */](),
          new __WEBPACK_IMPORTED_MODULE_7_components_block_js__["a" /* Block */]()
      ]));


    }
}




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Real; });
function Real() {

    this.name = 'real';
}




/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
function Block() {

    this.name = 'block';
}




/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
function Button(text) {

    this.name = 'button';
    this.text = text;
}




/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__ = __webpack_require__(28);


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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theatre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_loop_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_preload_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_index_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__ = __webpack_require__(39);








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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_index_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sounds_index_js__ = __webpack_require__(38);



function typing(asset, type) {

    asset.type = type

    return asset;
}

const assets = []
.concat(__WEBPACK_IMPORTED_MODULE_0__images_index_js__["a" /* images */].map((asset) => typing(asset, 'image')))
.concat(__WEBPACK_IMPORTED_MODULE_1__sounds_index_js__["a" /* sounds */].map((asset) => typing(asset, 'sound')));




/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return images; });
const images = [

    {
        'name': 'mainChar',
        'source': __webpack_require__(80)
    },
    {
        'name': 'floor',
        'source': __webpack_require__(35)
    },
    {
      'name' : 'box',
      'source' : __webpack_require__ (36)
    },
    {
      'name' : 'nuage',
      'source' : __webpack_require__ (37)
    }
];




/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAYAAAD9yHLdAAAABmJLR0QAfAB8AHzBORqSAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4ggMCQIA0Bm9XQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAANASURBVHja7d1LcsIwEEBB4+L+V4aNFyygKEpmPJ/uA4REIXoemcC2AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEXcLAHwq8fh9A3pYIUFBBCG/2xcQiMggFAIi4AAgiEoAgIIhqAgICAcCImAAIIhKAICCIeQCAggGIIiIIBwICQCAsKBkAgICAdCIiCAcAhJF7unAAAmEDB5YBIREBAOhCQ3R1gAmEDA5IFJREBAOBCS5BxhAWACAZMHJhETCAAmEDB5QMdJ5O5Xio27/x86CAgEXeF/+vrCAi9/D5YAwThvUnF0xaQJ1010hKPx9wcmEBvimCsdGzImEAERCE9k4QABYeKGF/UEFw4ERECEwhPfusKwkHgZr41taX28rBUGB9CGKBiRV1TWG0wggoEJBUwgwgFgAjGBCAZAkHb/iS4cAAIiHAACIhwAAiIcAFQMiHAA5OBdWgGiN16fByIcAJP5QCkAegXE5AEgIMIB0FCamzjCAbTfcJu9uah7IADUDIjJA0BAAHij6+fiXBYQkweAgAAwaPIQEADWAhn9gI6uAJOHCQSAgeEQEADWghn1QI6uAJOHCQSAweEQEADWAhr1QI6wAJOJgAgHgLAICICgCAiAoARyEx0giWoX3AICICQCAiAkAgJA8pAICICQCAiAkAgIAMkJCIBJREAAhKRRQKa/3TFAVyYQAAQEYLLooywBASB3QNwLARAQABKLOsoSEABqBMRRFoCAACAgAFAkII6yAAQEAAExiQBgAgFgQkBMIgC1pN2ws36IPED6jT3ognyfvgAANAsIAMknnSrfqCMtgC8bevDJzW5hAGgdECEBSLYfV/8BHG0B4zfyiy6s21zJCwkgHLF2CwnA6AnERAKYPAREUAASh2NcQIQEEA4BERRAOAREUACqhUNABAUQDgERFkAwBERYAMEQEAQGhAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKp6AvQJmGzMD9WvAAAAAElFTkSuQmCC"

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sounds; });
const sounds = [];




/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_index_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level_index_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splashScreen_index_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ending_index_js__ = __webpack_require__(68);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "level", function() { return __WEBPACK_IMPORTED_MODULE_1__level_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ending", function() { return __WEBPACK_IMPORTED_MODULE_3__ending_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "splashScreen", function() { return __WEBPACK_IMPORTED_MODULE_2__splashScreen_index_js__; });











/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy loading scene' + ((this.preloaded === false) ? ' -> assets are loaded' : ''));

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    console.log('-------');
}




/***/ }),
/* 42 */
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
function setup() {

    console.log('setup loading scene');
}




/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
function start() {

    console.log('start loading scene' + ((this.preloaded === false) ? ' -> loading assets...' : ''));
}




/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
function update(delta) {

    // console.log('update loading scene');
}




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_level_animate_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_level_input_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_level_render_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systems_level_movement_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systems_level_gravity_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_systems_level_collision_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_systems_level_hitboxUpdate_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_systems_level_renderText_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_systems_level_renderDecor_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_systems_level_updateBlock_js__ = __webpack_require__(23);















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
/* 50 */
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_animation_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_direction_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_run_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_spritesheet_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_velocity_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_jump_js__ = __webpack_require__(52);








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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jump; });
function Jump() {

    this.name = 'jump';
}




/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape_js__ = __webpack_require__(17);


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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_random_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_animation_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_direction_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_input_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_spritesheet_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_velocity_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_hitbox_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_score_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_components_decor_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_components_real_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_components_touchGround_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_components_block_js__ = __webpack_require__(25);
















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

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('floor', [
        new __WEBPACK_IMPORTED_MODULE_5_components_position_js__["a" /* Position */](0, this.size.height-30),
        new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['floor'], [{'x': 0, 'y': 0, 'width': 650, 'height': 40}],10),
        new __WEBPACK_IMPORTED_MODULE_8_components_hitbox_js__["a" /* Hitbox */](0, this.size.height-40,450,20,false),
        new __WEBPACK_IMPORTED_MODULE_11_components_real_js__["a" /* Real */](),
        new __WEBPACK_IMPORTED_MODULE_12_components_touchGround_js__["a" /* TouchGround */](),
    ]));


          var startHeightSize =52;
          var startWidthSize=64;


    var xSprite =64;
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
        new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['mainChar'],
        [{'x': 0, 'y': 0, 'width': startWidthSize, 'height': startHeightSize},
        {'x': xSprite*1, 'y': 0, 'width': startWidthSize, 'height': startHeightSize},
        {'x': xSprite*2, 'y': 0, 'width': startWidthSize, 'height': startHeightSize},
        {'x': xSprite*3, 'y': 0, 'width': startWidthSize, 'height': startHeightSize},
        {'x': xSprite*4, 'y': 0, 'width': startWidthSize, 'height': startHeightSize}]),
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

    var boxSize=40;
    var scale = 40/300;

    for (var i = 0; i< 30; i++ ){
        this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('box', [
            new __WEBPACK_IMPORTED_MODULE_5_components_position_js__["a" /* Position */](Object(__WEBPACK_IMPORTED_MODULE_1_modules_random_js__["a" /* random */])(450), (-180*(i+1))),
            new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['box'], [{'x': 0, 'y': 0, 'width': 300, 'height': 300}],0,scale),
            new __WEBPACK_IMPORTED_MODULE_8_components_hitbox_js__["a" /* Hitbox */](50, -1000,boxSize,boxSize,false),
            new __WEBPACK_IMPORTED_MODULE_7_components_velocity_js__["a" /* Velocity */](0,0,-1.2,1.2),
            new __WEBPACK_IMPORTED_MODULE_11_components_real_js__["a" /* Real */](),
            new __WEBPACK_IMPORTED_MODULE_13_components_block_js__["a" /* Block */]()
        ]));
        this.world.boxCount++;
    }

}




/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Decor; });
function Decor() {

    this.name = 'decor';
}




/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(10);



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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 60 */
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
/* 61 */
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
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_splashScreen_input_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_splashScreen_render_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_splashScreen_renderButton_js__ = __webpack_require__(65);








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
/* 63 */
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
/* 64 */
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
/* 65 */
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
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_input_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_score_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_button_js__ = __webpack_require__(26);







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
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(10);



function update(delta) {

    // console.log('update splashScreen scene');
    this.delta = delta;

    this.systems.input.update.call(this, this.world.entities);

    this.inputs.length = 0;
}




/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 69 */
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
/* 70 */
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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_ending_input_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_ending_render_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_ending_renderText_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systems_ending_renderButton_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systems_level_animate_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_systems_level_render_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_systems_level_movement_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_systems_level_gravity_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_systems_level_renderDecor_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_systems_level_collision_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_systems_level_hitboxUpdate_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_systems_level_updateBlock_js__ = __webpack_require__(23);


















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
        'collisionGame' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['hitbox','velocity'],__WEBPACK_IMPORTED_MODULE_12_systems_level_collision_js__["a" /* collision */].bind(this)),
        'updateBlock' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['hitbox','velocity','real','block'],__WEBPACK_IMPORTED_MODULE_14_systems_level_updateBlock_js__["a" /* updateBlock */].bind(this))
    };
}




/***/ }),
/* 72 */
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
/* 73 */
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
/* 74 */
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
/* 75 */
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
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_input_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_position_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_score_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_button_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_endStuff_js__ = __webpack_require__(77);








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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndStuff; });
function EndStuff() {

    this.name = 'endStuff';
}




/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(10);



function update(delta) {

    //console.log('update ending scene');
    this.delta = delta;

    this.systems.input.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);
    this.systems.movement.update.call(this,this.world.entities);
    this.systems.gravity.update.call(this,this.world.entities);
    this.systems.hitboxUpdate.update.call(this,this.world.entities);
    this.systems.collisionGame.update.call(this,this.world.entities);
    this.systems.updateBlock.update.call(this,this.world.entities);

    this.inputs.length = 0;
}




/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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QgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCyP9vDw4JAAAAAAT9f+0NAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJwEgoU5A7qGLMwAAAAASUVORK5CYII="

/***/ })
/******/ ]);