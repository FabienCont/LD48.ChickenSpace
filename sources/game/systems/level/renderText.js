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

export {renderText};
