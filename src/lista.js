module.exports = class Lista
{
    constructor()
    {        
        this.Elementos=[]
    }

    add(clave,valor)
    {       
        let index=null;     
        if (clave==null || valor==null)
        {
            return false;            
        }
        else
        {
            index=this.getIndexOf(clave);  
            if (index!=null)
            {
                return false;
            }
            else 
            {
                let element={"clave":clave,"valor":valor}           
                this.Elementos.push(element);
                return true;
            }
        }            
    }

    count()
    {
        return this.Elementos.length;
    }

    find(clave)
    {          
        let output=null;
        let index=this.getIndexOf(clave);
        if  (index!=null)
        {
            output=this.Elementos[index].valor;
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
        this.Elementos.forEach(element => 
        {
            output.push(element.clave)
        });        
        output.sort();        
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
        let resultado= this.getIndexOf(clave);                        
        if (resultado==null)
        {            
            return false;
        }
        else
        {            
            this.Elementos.splice(resultado,1)
            return true;
        }
    }
    
    update(clave,valor)
    {
        let indice=this.getIndexOf(clave)
        if (indice!=null)
        {   
            this.Elementos[indice].valor=valor;
            return true;
        }
        else
        {            
            return false;
        }
    }
}