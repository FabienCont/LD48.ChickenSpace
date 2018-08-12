
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

export {input};
