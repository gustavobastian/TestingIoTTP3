module.exports = class Lista{
    constructor(){        
        this.listaLocal=[]
    }

    add(keyP,valueP){            
        let element={key:keyP,value:valueP}

        if(keyP==null || valueP==null){
            return false;
        }

        if(keyP=="" || valueP==""){
            return false;
        }
    
        let elementLocalS=this.find(keyP)
        
        
        if((elementLocalS!=null)){
            return false;
        }
        else
        { 
            this.listaLocal.push(element);
        }
    }

    count(){
        return this.listaLocal.length;
    }

    find(keyP){
        let keyLocal={key:keyP}        
        let localValue=null
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