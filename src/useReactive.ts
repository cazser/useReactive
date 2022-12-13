const useReactive=( obj: object)=>{
    //console.log("called");//pass
    return new Proxy(obj,{
      
    })
}

export {useReactive}