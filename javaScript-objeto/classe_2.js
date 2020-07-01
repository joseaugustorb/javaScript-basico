class Grandfather {
    constructor(surname = 'Ribeiro', profession = 'English Teacher') {
        this.surname = surname
        this.profession = profession
    }
}

class Father extends Grandfather {
    constructor(surname, profession = 'Chemistry Teacher') {
        super(surname)
        this.profession = profession
    }
}

class Mom {
    constructor(surname = 'Silva', profession = 'Developer') {
        this.surname = surname
        this.profession = profession       
    }
}

class Son extends Mom {
    constructor(surname) {
        super(surname,'Computer Engineer')        
    }
}

const grandfather = new Grandfather
console.log(grandfather)

const father = new Father
console.log(father)

const mom = new Mom
console.log(mom)

const son = new Son
console.log(son)











