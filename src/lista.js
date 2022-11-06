module.exports = class Lista{
    constructor(){        
        this.listaLocal=[]
    }

    add(keyP,valueP){            
        let element={key:keyP,value:valueP}
        this.listaLocal.push(element);
    }
    count(){
        return this.listaLocal.length;
    }

    find(keyP){
        let keyLocal={key:keyP}        
        let localValue={}
        this.listaLocal.forEach(element => {            
            
            if((element.key)==keyLocal.key)
                {
                    
                    localValue="\""+element.value+"\"";
                }
        });
        return localValue;
    }

    list(){
        return this.listaLocal;
    }
}