function render() {

    // console.log('render loading scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

      this.context.fillStyle = '#99b6e9';
    this.context.fillRect(0, 0, this.size.width, this.size.height);
}

export {render};
