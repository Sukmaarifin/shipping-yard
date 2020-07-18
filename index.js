class Ship {
    constructor(){
        this.plan = ''
    }

    getPlan() {
        return this.plan
    }

    setPlan() {}
}

class PerahuMotor extends Ship {
    setPlan(){
        this.plan = 'Plan - perahu motor'
    }
}

class PerahuLayar extends Ship {
    setPlan(){
        this.plan = 'Plan - perahu layar'
    }
}

class KapalPesiar extends Ship {
    setPlan() {
        this.plan = 'Plan - kapal pesiar'
    }
}

const perahuMotor = new PerahuMotor();
const perahuLayar = new PerahuLayar();
const kapalPesiar = new KapalPesiar();

perahuMotor.setPlan();
perahuLayar.setPlan();
kapalPesiar.setPlan();

console.log(perahuMotor.getPlan());
console.log(perahuLayar.getPlan());
console.log(kapalPesiar.getPlan());