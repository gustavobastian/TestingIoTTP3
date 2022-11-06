module.exports = class Lista{
    constructor(){        
        this.localList=[]
    }

    async add(keyP,valueP){            
        let element={key:keyP,value:valueP}
        let result=false;
        let auxiliarArray=[];

        if(((keyP==null) || (valueP==null))||(typeof(keyP)!='string')||(typeof(valueP)!='string')||(valueP=="")||(keyP==""))
        {
            return false;
        }       
    
        let elementLocalS=await this.find(keyP)
        
        
        if((elementLocalS==null))
        {
            
            result=true;

        }
        else 
        {
            return false;
        }

        //special case first element
        if(this.count()==0){
            this.localList.push(element);
            return true;
        }
        //special case value higher than maximun
        else if(this.localList[this.count()-1].value<element.value)
        {

            this.localList.push(element);
            return true;
        }
        else{
            let index=0;                
                
            while ((parseInt(this.localList[index].value.toString())<parseInt(element.value.toString()))&&(index<this.localList.length-1)){                   
                auxiliarArray.push(this.localList[index])              
                index++;
            }
            
            auxiliarArray.push(element)
            
            while (index<this.localList.length){
                auxiliarArray.push(this.localList[index]);                
                index++;
            }
            

            this.localList=auxiliarArray;

        }


        return result;
    }

    count(){
        return this.localList.length;
    }

    find(keyP){
        let keyLocal={key:keyP}        
        let localValue=null
        this.localList.forEach(element => {            
            
            if((element.key)==keyLocal.key)
                {
                    
                    localValue="\""+element.value+"\"";
                }
        });
        return localValue;
    }

    list(){
        return this.localList;
    }

    getIndexOf(key){

        let index=null;
        for (let i=0; i<this.localList.length; i++)
        {
            if(this.localList[i].key==key)
            {
                index=i;
            }
        }
        return index;
    }

    async delete(key)
    {        
        let retorno= await this.find(key);
        if(retorno==null)
        {            
            return false;
        }
        else
        {
            let index=this.getIndexOf(key);            
            this.localList.splice(index,1);
            return true;
        }
        
    }
    async update(key,value)
    {
        if(((key==null) || (value==null))||(typeof(key)!='string')||(typeof(value)!='string')||(value=="")||(key==""))
        {
            return false;
        }       
        let retorno= await this.find(key);

        if(retorno==null)
        {           
            return false;
        }
        else
        {
            let index=this.getIndexOf(key);            
            this.localList[index].value=value;
            return true;
        }
    }
}