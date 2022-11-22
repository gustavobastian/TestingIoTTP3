module.exports = class Lista
{
    constructor()
    {        
        this.Elementos=[]
    }

     add(clave,valor)
     {            
        console.log("clave:",clave)
        let element={"clave":clave,"valor":valor}           
        this.Elementos.push(element);
        return true;
    }

    count()
    {
        return this.Elementos.length;
    }

    find(clave)
    {   
        console.log(clave);
        let output=null;
        let index=this.getIndexOf(clave);
        if  (index!=null)
        {
            output=this.Elementos[index];
            return output;
        }
        else
        {
            return output;
        }     
       
    }
    
    getList()
    {
        let output=[]
        this.localList.forEach(element => 
        {
            output.push({'clave':element.clave})
        });        
        return   output;        
    }   
 
    getIndexOf(clave)
    {
        let index=null;
        for (let i=0; i<this.Elementos.length; i++)
        {
            if(this.Elementos[i].clave==clave)
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