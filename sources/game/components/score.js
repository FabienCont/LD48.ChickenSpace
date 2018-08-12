function Score(score) {

    this.name = 'score';
    if(score==undefined){
      this.total = 0;
    } else{
      this.total=score;
    }

}

export {Score};
