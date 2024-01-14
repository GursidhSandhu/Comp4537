class Button {

    constructor(id, color){
        this.id = id;
        this.color = color;
        id++;
    }

    display(){
        console.log(`button # ${this.id} of color ${this.color} is on screen.`);
    }
}

