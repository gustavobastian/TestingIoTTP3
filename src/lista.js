module.exports = class Lista{
    constructor(){        
        this.listaLocal=[]
    }

    async add(keyP,valueP){            
        let element={key:keyP,value:valueP}

        if(((keyP==null) || (valueP==null))||(typeof(keyP)!='string')||(typeof(valueP)!='string')||(valueP=="")||(keyP=="")){
            return false;
        }       
    
        let elementLocalS=await this.find(keyP)
        
        
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

    getIndexOf(key){

        let index=null;
        for (let i=0; i<this.listaLocal.length; i++){
            if(this.listaLocal[i].key==key){
                index=i;
            }
        }
        return index;
    }

    async delete(key){        
        let retorno= await this.find(key);
        if(retorno==null){            
            return false;
        }
        else{
            let index=this.getIndexOf(key);            
            this.listaLocal.splice(index,1);
            return true;
        }
        
    }
    async update(key,value){
        if(((key==null) || (value==null))||(typeof(key)!='string')||(typeof(value)!='string')||(value=="")||(key=="")){
            return false;
        }       
        let retorno= await this.find(key);

        if(retorno==null){            
            return false;
        }
        else{
            let index=this.getIndexOf(key);            
            this.listaLocal[index].value=value;
            return true;
        }
    }
}