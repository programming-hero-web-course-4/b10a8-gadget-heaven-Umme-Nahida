import { toast } from "react-toastify"


const getStoredCartList = ()=>{
    const storedListStr = localStorage.getItem('cart-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }
}

const  addToStoredCartList =(id)=>{
   const storedList = getStoredCartList()
   if(storedList.includes(id)){
    toast('this item already exits')
   }
   else{
    storedList.push(id)
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('cart-list',storedListStr)
   }
}
export {addToStoredCartList,getStoredCartList}