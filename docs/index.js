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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
function Direction(direction) {

    this.name = 'direction';

    this.direction = direction;
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spritesheet; });
function Spritesheet(image, animations) {

    this.name = 'spritesheet';

    this.image = image;
    this.animations = animations;
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__ = __webpack_require__(5);


new __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__["a" /* Theatre */]({

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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theatre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_loop_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_preload_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__ = __webpack_require__(13);








function Theatre(config) {

    const {container, loading, opening, size} = config;

    const debug = config.debug || false;
    const framerate = config.framerate || 60;

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

        loop.update((timeframe) => this.scene.update.call(this, timeframe));
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

        this.scene.destroy.call(this);
        this.scene = this.scenes[scene];
        this.scene.setup.call(this);
        this.scene.start.call(this);
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sounds_index_js__ = __webpack_require__(12);



function typing(asset, type) {

    asset.type = type

    return asset;
}

const assets = []
.concat(__WEBPACK_IMPORTED_MODULE_0__images_index_js__["a" /* images */].map((asset) => typing(asset, 'image')))
.concat(__WEBPACK_IMPORTED_MODULE_1__sounds_index_js__["a" /* sounds */].map((asset) => typing(asset, 'sound')));




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return images; });
const images = [

    {
        'name': 'mainChar',
        'source': __webpack_require__(11)
    }
];




/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAB4CAIAAAAFTomfAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAADeJJREFUeF7tnHtQVNcdx3+wLKy8WXAF5aWJD6yIPEwdNWqSKo9ojM9ijM9qlERAjdWZ1jH9o5pxGtQCiomoFa06jg+IESyVmBiNWBNQ0RCxVkVRHgIqIA9ht9+750pNFLh79+xmOrufwXPP+d2zu/d7z+v3O3tXG51ORxaGrXi0JKyaLQOrZsvAqtkysGq2DKyaLQOrZsvAqtkysGq2DKyaLQOrZsvAqtkysGq2DKyaLQOrZsvAqtkysGq2DKyaLQNzP09y6NChhw8f2traNjY2vvfeewqFQjxhTqDZ1Fy7di06KtJJ+eI+9asB/fLy8sSqZsG07VxeXh4RGlJWXikU+oTTb+ZQeAw5uuBOk9KBvt5HZSV09K+48zi/d+/eGTNmCDVNjAk1J8THp6SmCrm4NBo7nxRKam6gJ82k0+rPEylVgtFZRefzaGs8lRUPGjjw+8JCe3t7sYJpMJXmsNDQwgsXaOR0StwplJvqhbbtCIh3caOsZNqWiFJLS4tSqWRnTIFJNIeFhRUWFtLyPfTGTKqp+l/Ddo6TOzU8oNneyLa2tppueuO/VqFLi4JHxVJ1hVTBAILtVZRRjqybsxOzmQLOms+dOyeM4eFThRZ+dF+0SqeliRwcKflSQ1PzsGHDRCNvOPdtGxsb6tmPtl+lqgrRJAMXTzq0nvasLioqGjRokGjkB892XrFihXBYc4xqa/QGudRV09w/4hgcHMwMfOGpOSkpiXqHUq+XqfWJaJLN/Uf0+/04FhcXMwNHuGk+cOCAcEhIp7pavcE4MLBHTsNxWUI8M3CEm+aUTRuFQ+8h1NqiNxiJjtra6NXYf5zIEw384Kb59Nl8Co0yYGXqEjhtMXE4zpw5kxl4wXM8k29/ajN6JLeD22cnOKHww1NSUpiNC3w0Z2dnC4fIhdTSqDfwABNhMJZo4QoTEhI2bdrEzMbDR3O3bt2EA0fBjFb8065aSvNn0bJly6qrq5nZSLj2bdNQUUnbMwhBh5eXV1VVlWg1Aj6am5qahANCYr4IUYZto773tOhXA41GU1ZWJuSMgI/m6Oho4ZCfSXb8ZCvs6N9F6Nszf0vUhmmcdG1ka0O+vv5iBblw7dtlJWTHL+6F644/Inu8JWICfTsXnUOi7dHDRyjIhZvmMa+OoDOZpOS3xYEAKzsNx8jJRGxybKCBQ+nKv6iyslyt9tKb5MBNc9SbE+hJPZXfEPokFxBL5+zu30csidQJsr//hmprq+PjE0SjgXDTvGrVKuGQ8Qdhu8N4lCoqyCVd3aa/6Afzs9RR2EhavoRSU1OwgIlGQ+A5nufOnk3f7BciQVujt3Xc3GjbhzhGtXfsZ6mjpBRKfJ/gqHz4oVDNIHhqTtm8WThsiSMP+YNNQOVM547Tnctr9F1HvxH8HHW0aTNNn0QbNmwoKCgQjdLgvE+SmJiYnJxMyzKEHc+GB6LVIBRKUigo1r1fH7p6XT9dN4tnfg7ay4k81VRTS1euXBk4cKBo7wr++56BAf63Sm9T8iXy7iNs8RoEBoWLmt7VCAOEqLsXFZwWIhfC27zwMjGGHKmHhiqrqLGxUaVSifZOMcler7ArBlKvkHdvevxIb5MA3Dhnd4pVU0PtmXXpP969+bvUP8Mc+QYdPwFfj4jFbFiusTLgE56ZNPCBdnb2T5501CV+An/NTk5Ojx8/VthQG974Tzn0SpSwPdZ5jIlLdu1OpVdo5XBqrLuQtCck9NfCnoGz6/Y9mxdsXosqujoiZ6HunatUco3qG2j3fnJ3pR27SftUQb9+/a5evSoWOoanZswl4eHhyKSnp48YMSI6KvLmrVLq2Z/WHCXfvvS4XthCaUWs9PQThaFrRyonQfPmRZSbDtuDPXlu3r706EGbVpv+z6xAjc/W44cyz59ir/gpGNDaCRMmu7u7KhQ28+fPCw4OdnfveqXkppkJdnNzy83NtbOzQ9Th6emZkZGxbt064TSUv/k+BY2g3oMFZxKfiZ559QJV/IeOf0qFufr3IH+1xtFB9eO9UlZk2Nkre3TXPHz4sL6+PiwsbMeOHR4eHvb29t7ewjceMuCj+dKlSyEhIS4uLvn5+Y8ePWoVGlMA/Rz6d+36W3LSBikbKGER4Xh5TFS0s7MzJoW33noL9w5NB4UI0UeNGlVaWnry5MkxY8aIL5AFH824PgcHh4sXL9bU1LRhHD4DTuFyoaG2thZ94dO0LReLLr8SEY5e4NldgyGAwY/WCwgIeKIHL2lpadFqtbgwZFBEnr2Pj48PAriSkhIjr5mDZvSxioqKzMxMXBO7yhdia2urVCqhHym0QQlgIlmRVesEhUKBBo+IiEDemMs21g87cuQIBG/cuDEwMLATwQCqmpubHzx4UFVVhRR9GOMTFiBFMEAPglS2kR4XJ2yJysPYdkaX8/f3z87ORtcVTSbGy8trxYoVx44dk33lRrUzmhcpPN6GhgZmMQO4ueyLsYQEmbGkUe2MRu7bt+8XX3xRWal/YsRcqNXqJUuWYAKXd/Hy2zknJwfpnDlzMDKZxWzgE1lTp6UJGymGIl8zRhTS2bNni5ueZgTrP9xMZI4ePcosBiFf88GDB4OCgszfyAys6mPHjmV9zVBkasbqgiVq+vTp5m9kBla4yZMnI3Pz5k1mkY5MzVhakcK7MHKpkw1uOrxaZC5cuMAs0pGpee/evUjRuzr3Q0wHXLdx48Yh89133zGLdGRqZjsSv5RgBvt0GU/PyZ/D/n+RqRlTCFKTPqHYJexBwfa4VToyNU+YMAHpmTNnfinZiNJu3bqFzIABA5hFOjI1I2xEyp4+ZxYzg3t9+fJlZEaOHMks0pF5xfC03d3d4Wk7OPD+zlkaCKRzc4UdpYCAAGaRjvxWevvttwsKCpycTPgwaic4OjoixvD19RXLhiBf8/jx45GePXvW/EMas9eNGzfgF8n4sgoYG0sOHTo0IyPj/n3DH+E1Agyrjz766PDhw+aOJcHatWvPnz9fWlrK3EDzgFkTAQYEL1iwQDQZCIe9oeDg4H379pltb8jDw2PNmjXQDD9M3rAydqVZuXJlUVERnF5MKqLJlGC6vnv3LgRPmjRJ9jzCYa8X1wGP/6uvvsK6JcMrkg56Ne5saGgo8sZctrHtDOrq6pBOmTLFy8sLXZ0ZTYFGo0lMFH6YY+STcRw0o3lPnDhRXV0dExMD/8xEsuF7zJo169SpUxs3bsTNFa2y4NC3GfDJ4IT7+/vjsu7du8exk2M1xq2cMWNGfn5+cnJyfLyxT7Fz0wyysrLgnGHU5eXlqdVqLltl8PO0Wu24ceNqamq2bdsme316Fg59u52JEydiDsclvvbaa9u3bw8MDBSf95UFpmW4lnCqIyIiIHj58uWjR48WzxkHz3ZuZ/jw4fBJkVm9evU777yDYLuxsfFn31d2BHqySqWC4GvXrs2bNw+hm3jiKS4uLuhNuKe/5Fr1QtDggwcPZvkPPvgAzvlLL70E/4lt6LAth3aw2mHmQ4p+cfv27ezs7LS0NNwmnMK8hQh5/vz5eAnu2s6dO7/99tsvv/wSp0JCQmRsAAJTaWYIv3yOjr5+/TrymGyFBy6iozHOY2Nj22VD6ueffw7vFUqgp/1R5aSkJPRnln+ehIQE9oOFiooKrGHMKBVoNjVbtmwJCgoSP08CGMDiKzuF7TeDO3fuiCZpmLCdJ0+ZcuTwYbHwDL8eNuyN11/H/FRZWYlPRx9etGgR+nbv3r2RhoeHG7R9i1GNddEwFYJw3qDrsjcfb69K9tA0+PWt9n0ZKfITu+kfeCJavHixWPspUVFRsIsFyZw8eRKvWrdunViWAH/NA/TdeLGTa7NfX51//ya/vrW+L7M/5GGBHWdRBzXF1+gx9NLbYWuYWJAAz/UZIAD4sbh4t6d3mlfPxzpdjbatQSf8zIz9IQ8L7DiLOqgZFhbGXpieLjwcJs/HWrJkCVKE8azYJTw1Hzx4EIvHPk+fd53catpaO3pGBHacRR3ULCwsRGAI4+nTp5E6O4s93yCmTp2KdNeuXazYJTw1T5s2zY9sYp3d0ZiiqWNQBzUDbBQIyFD84YcfevbsyU7JQ6LPA7hpZs11sIdfQ5vU6AI1D2h6IQOnzc/Pz0j/XPq3wtw0X9H/UHmwvcOTFz91/AJaSPeKg/Bd39/37587d277emsobG2Do8qKXcJNc+bRoz2IVLa2HQ3j59HfG5vuRBeLiiIjI1FgM5mhfPzxx0j79+/Pil3CTTPCKf1egcEbBrgC+KHwQL29vRcuXChaJYMujWFl0H9gw01z3IIF5UT1ba3S3xG3p1WnrRB+m/Uqiswth0+mPykVRBpI2TMAEuGmmX0/mNv0WCV5bwg1UR+ZSRMnInV0dETk8Nlnn0l/2A1ufElJSVZWlliWBk9/u1dAwN3SUl3gwBppP+9X2yk1N4ur9C6UaNK7JampqT4+Pjk5OawNXwjOxsTEIJOZmTlRf8ukw62dwe6dwn8tFHe/TC3hp3SoE3f/LgSz58zaQYSIpevevXtDhgxBM2JWKy8X/mcaBsLy9evXu7q6MsEIyA0VLKD3QLnB9mIXOrnpAoMafIXQ4vk/2HEWdVBz6dKl4iufY+vWrR19uY2Y7JNPPhHrGQ7/WJJ1ziAb27TuvUZ3c27TtjU/XbEdyEZhq/i6sT6uqqxYp0Vb/ayRnwexcXFxMYInTOyYohGxIeR0cxPul3yYdL4cOXLEtTvWXXKwsVns7IZwIl3dAynysMCOs6gj1jYzOt1/AbqA9mLsy4PpAAAAAElFTkSuQmCC"

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sounds; });
const sounds = [];




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_index_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_index_js__ = __webpack_require__(20);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return __WEBPACK_IMPORTED_MODULE_1__demo_index_js__; });







/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy loading scene' + ((this.preloaded === false) ? ' -> assets are loaded' : ''));

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    console.log('-------');
}




/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render loading scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.size.width, this.size.height);
}




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
function setup() {

    console.log('setup loading scene');
}




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
function start() {

    console.log('start loading scene' + ((this.preloaded === false) ? ' -> loading assets...' : ''));
}




/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
function update(delta) {

    // console.log('update loading scene');
}




/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy demo scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);
    this.keyboard.destroy();

    delete this.delta;
    delete this.inputs;
    delete this.world;

    delete this.keyboard;
    delete this.systems;

    console.log('-------');
}




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render demo scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#e0f0e8';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.render.update.call(this, this.world.entities);
}




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_demo_animate_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_demo_input_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_demo_render_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systems_demo_movement_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systems_demo_gravity_js__ = __webpack_require__(39);










function setup() {

    console.log('setup demo scene');

    this.inputs = [];

    this.keyboard = new __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__["a" /* Keyboard */]([__WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["b" /* RIGHT */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["a" /* LEFT */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["c" /* UP */]], this.inputs);

    this.systems = {

        'animate': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['animation', 'spritesheet'], __WEBPACK_IMPORTED_MODULE_3_systems_demo_animate_js__["a" /* animate */].bind(this)),
        'input': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['input'], __WEBPACK_IMPORTED_MODULE_4_systems_demo_input_js__["a" /* input */].bind(this)),
        'render': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position', 'animation', 'spritesheet'], __WEBPACK_IMPORTED_MODULE_5_systems_demo_render_js__["a" /* render */].bind(this)),
        'movement' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position','direction'],__WEBPACK_IMPORTED_MODULE_6_systems_demo_movement_js__["a" /* movement */].bind(this)),
        'gravity' : new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position','velocity'],__WEBPACK_IMPORTED_MODULE_7_systems_demo_gravity_js__["a" /* gravity */].bind(this))
    };
}




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keynames_js__ = __webpack_require__(25);


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
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TAB */
/* unused harmony export ENTER */
/* unused harmony export SHIFT */
/* unused harmony export CTRL */
/* unused harmony export ALT */
/* unused harmony export ESC */
/* unused harmony export SPACE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UP; });
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
/* 27 */
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_animation_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_direction_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_run_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_spritesheet_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_position_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_velocity_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_jump_js__ = __webpack_require__(40);








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
              
                  entity.add([
                      new __WEBPACK_IMPORTED_MODULE_5_components_velocity_js__["a" /* Velocity */](0,-1.2),
                      new __WEBPACK_IMPORTED_MODULE_6_components_jump_js__["a" /* Jump */]()
                      //new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_RIGHT'])
                  ]);

              break;

                case 'KEY_RIGHT':

                    entity.add([

                        new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('RIGHT'),
                        new __WEBPACK_IMPORTED_MODULE_2_components_run_js__["a" /* Run */](),
                        new __WEBPACK_IMPORTED_MODULE_4_components_position_js__["a" /* Position */](positionComponent.x + 5,positionComponent.y),
                        //new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_RIGHT'])
                    ]);

                break;

                case 'KEY_LEFT':

                    entity.add([

                        new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('LEFT'),
                        new __WEBPACK_IMPORTED_MODULE_2_components_run_js__["a" /* Run */](),
                        new __WEBPACK_IMPORTED_MODULE_4_components_position_js__["a" /* Position */](positionComponent.x-5,positionComponent.y),
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Run; });
function Run() {

    this.name = 'run';
}




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x - animationComponent.current.width / 2, positionComponent.y - animationComponent.current.height / 2, animationComponent.current.width, animationComponent.current.height
    );
}




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_animation_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_direction_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_input_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_position_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_spritesheet_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_velocity_js__ = __webpack_require__(38);









function start() {

    console.log('start demo scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.world = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["c" /* World */]();

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('hero', [

        new __WEBPACK_IMPORTED_MODULE_2_components_direction_js__["a" /* Direction */]('DOWN'),
        new __WEBPACK_IMPORTED_MODULE_3_components_input_js__["a" /* Input */](['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        new __WEBPACK_IMPORTED_MODULE_4_components_position_js__["a" /* Position */](this.size.width/2, this.size.height-60),
        new __WEBPACK_IMPORTED_MODULE_6_components_velocity_js__["a" /* Velocity */](0,0),
        new __WEBPACK_IMPORTED_MODULE_1_components_animation_js__["a" /* Animation */](this.assets.images['mainChar'], [{'x': 0, 'y': 0, 'width': 80, 'height': 120}]),
        new __WEBPACK_IMPORTED_MODULE_5_components_spritesheet_js__["a" /* Spritesheet */](
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

            //     'IDLE_UP': [{'x': 96, 'y': 0, 'width': 32, 'height': 32}],
            //     'IDLE_RIGHT': [{'x': 96, 'y': 32, 'width': 32, 'height': 32}],
            //     'IDLE_DOWN': [{'x': 96, 'y': 64, 'width': 32, 'height': 32}],
            //     'IDLE_LEFT': [{'x': 96, 'y': 96, 'width': 32, 'height': 32}],
            //
            //     'RUN_UP': [{'x': 0, 'y': 0, 'width': 32, 'height': 32}, {'x': 32, 'y': 0, 'width': 32, 'height': 32}, {'x': 64, 'y': 0, 'width': 32, 'height': 32}, {'x': 96, 'y': 0, 'width': 32, 'height': 32}],
            //     'RUN_RIGHT': [{'x': 0, 'y': 32, 'width': 32, 'height': 32}, {'x': 32, 'y': 32, 'width': 32, 'height': 32}, {'x': 64, 'y': 32, 'width': 32, 'height': 32}, {'x': 96, 'y': 32, 'width': 32, 'height': 32}],
            //     'RUN_DOWN': [{'x': 0, 'y': 64, 'width': 32, 'height': 32}, {'x': 32, 'y': 64, 'width': 32, 'height': 32}, {'x': 64, 'y': 64, 'width': 32, 'height': 32}, {'x': 96, 'y': 64, 'width': 32, 'height': 32}],
            //     'RUN_LEFT': [{'x': 0, 'y': 96, 'width': 32, 'height': 32}, {'x': 32, 'y': 96, 'width': 32, 'height': 32}, {'x': 64, 'y': 96, 'width': 32, 'height': 32}, {'x': 96, 'y': 96, 'width': 32, 'height': 32}]
            }
        )
    ]));
}




/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
function Input(inputs) {

    this.name = 'input';

    this.inputs = inputs;
}




/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
function Position(x, y) {

    this.name = 'position';

    this.x = x;
    this.y = y;
}




/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(36);



function update(delta) {

    // console.log('update demo scene');

    this.delta = delta;

    this.systems.input.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);
    this.systems.movement.update.call(this,this.world.entities);
    this.systems.gravity.update.call(this,this.world.entities);
    
    this.inputs.length = 0;
}




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export random */
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
/* 36 */
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_position_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_run_js__ = __webpack_require__(29);



function movement(entity) {

  const directionComponent = entity.get('direction');
  const inputComponent = entity.get('input');
  const positionComponent = entity.get('position');

  if ( entity.has(['run']) && directionComponent.direction === 'LEFT') {
    positionComponent.x -= 4;
  }else if( entity.has(['run']) && directionComponent.direction === 'RIGHT'){
    positionComponent.x += 4;
  }

}



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Velocity; });
function Velocity(vx, vy) {

    this.name = 'velocity';

    this.vx = vx;
    this.vy = vy;
}




/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gravity; });
function gravity(entity) {

  const positionComponent = entity.get('position');
  const velocityComponent = entity.get('velocity');

  positionComponent.y = (positionComponent.y +(2*velocityComponent.vy));

  if(velocityComponent.vy<=1){
    velocityComponent.vy+=0.02;
  }

}



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jump; });
function Jump() {

    this.name = 'jump';
}




/***/ })
/******/ ]);