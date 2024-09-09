export class Boletim{
    private b1: number | null;
    private b2: number | null;
    private b3: number | null;
    private b4: number | null;
    private provaFinal: number | null;

    constructor(b1: number, b2: number, b3: number, b4: number){
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
        this.b4 = b4;
        this.provaFinal = null;
    }

calcularMediaParcial(){
    let mp = (this.b1 *2 + this.b2 * 2 + this.b3 *3 + this.b4 * 3)/10;
    return(mp);
}

avFinal(){
    if(this.calcularMediaParcial() < 60){
        return true;
    }
    return false;
}

registrarProvaFinal(pf: number){
    this.provaFinal = pf;
}

calcularMediaFinal(){
    let mf = (this.calcularMediaParcial() + this.provaFinal)/2;
    return mf;
}

situacao(){
    if(this.calcularMediaParcial() >= 60 || this.calcularMediaFinal() >= 60){
        return "Aprovado"
    }
    else if(this.calcularMediaParcial() >= 10 && this.calcularMediaParcial() < 60 && this.provaFinal == null){
        return "Avaliação Final"
    }
        return "Reprovado"
    }
}
