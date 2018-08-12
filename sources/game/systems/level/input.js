import {Animation} from 'components/animation.js';
import {Direction} from 'components/direction.js';
import {Run} from 'components/run.js';
import {Spritesheet} from 'components/spritesheet.js';
import {Position} from 'components/position.js';
import {Velocity} from 'components/velocity.js';
import {Jump} from 'components/jump.js';

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
                      new Jump()
                  ]);

              break;

              case 'KEY_SPACE':
                  if(!entity.has(['jump'])){
                        velocityComponent.vy= velocityComponent.vyMin;
                  }
                  entity.add([
                      new Jump()
                  ]);

              break;


                case 'KEY_RIGHT':

                  entity.add([

                        new Direction('RIGHT'),
                        new Run()
                        //new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_RIGHT'])
                  ]);


                break;

                case 'KEY_LEFT':

                    entity.add([
                          new Direction('LEFT'),
                          new Run()
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

export {input};
