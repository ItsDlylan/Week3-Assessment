class Questions{
    constructor(elem){
        this.elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    color(){
        alert('My Favorite Color is Red')
    }
    place(){
        alert('My Favorite Place is the Toast Truck')
    }
    ritual(){
        alert('I dont have a favorite Ritual')
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if(action){
            this[action]()
        }
    }
}

// sets the new questions to the container with the ID of questions
new Questions(questions)