'use strict';

class Player{
    constructor(id, color, startingCards, pawnsPositions, kingPosition){
        this.initialState = {
            id,
            color,
            startingCards,
            pawnsPositions,
            kingPosition,
            scrore: 0
        }

    }

    init = () =>{
        this.state = Object.assign({}, this.initialState);
    }

    getLegalMoves = () => {

    }

    move = () => {

    }
}

module.export = Player;