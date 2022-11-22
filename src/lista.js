module.exports = class Lista{
    constructor(){        
        this.Elementos=[]
    }

     add(keyP,valueP){            
        let element={"clave":keyP,"valor":valueP}        
        this.Elementos.push(element);
        return true;
    }

    count(){
        return 1;
    }

    find(keyP){
       
    }
    
    getList(){
        let output=[]
        this.localList.forEach(element => 
        {
            output.push({'clave':element.clave})
        });        
        return   output;        
    }   
 
    getIndexOf(clave){

        let index=null;
        for (let i=0; i<this.localList.length; i++)
        {
            if(this.localList[i].clave==clave)
            {
                index=i;
            }
        }
        return index;
    }
    
    delete(clave)
    {       
       return 1;
    }
    
    update(clave,valor)
    {
       return 1; 
    }
}