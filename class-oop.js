class staff {
    constructor (name = 'shafeq', age = 29, zeny =100) {
        this.name = name;
        this.age = age;
        this.zeny = zeny;
    }
    goEat() {
        this.zeny -= 10
    }
    goWork() {
        this.zeny += 10
    }
}

class kakitangan extends staff{
    constructor (name, age, zeny) {
        super(name, age, zeny)
        this.name = name;
        this.age = age;
        this.zeny = zeny;
    }
    
}

function boss() {
    boss = new kakitangan("ahmad", 21, 150);
    boss.goEat();
    return boss;
}


class kereta {
    constructor (brand, model, color, engineCC) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.engineCC = engineCC;
    }
    modified() {
        this.engineCC += 100;
    }
}

function protonSaga() {
    protonSaga = new kereta ("proton", "saga", "hitam", 1300);
    protonSaga.modified();
    return protonSaga
}

console.log(protonSaga())

class van extends kereta {
    constructor (brand, model, color,engineCC) {
        super(brand, model, color, engineCC);
    }
    changeColor() {
        this.color = 'black';
    }
}

function kembara() {
    kembara = new van('perodua', 'kembara', 'red', 2000);
    kembara.changeColor();
    return kembara
}

console.log(kembara())

class lori extends kereta {
    constructor(brand, model, color, engineCC) {
        super(brand, model, engineCC)
    }
}

function vannette() {
    vannette = new lori("toyota", "hilux", "white", 1800);
}

console.log(vannette())