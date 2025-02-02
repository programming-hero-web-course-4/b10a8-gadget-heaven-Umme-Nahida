

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
    alert('the data is already exist')
   }
   else{
    storedList.push(id)
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('cart-list',storedListStr)
   }
}
export {addToStoredCartList,getStoredCartList}