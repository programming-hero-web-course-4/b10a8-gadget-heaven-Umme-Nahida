
const getStoreWishlist =()=>{
   const storeList = localStorage.getItem('wish-list')
   if(storeList){
     const storedListStr = JSON.parse(storeList)
     return storedListStr;
   }else{
    return []
   }
}


// add item in the local storege
const addWishList =(id)=>{
    const storeList = getStoreWishlist();
    if(storeList.includes(id)){
        alert('this item already exits')
    }else{
        storeList.push(id)
        const storedListStr = JSON.stringify(storeList)
        localStorage.setItem('wish-list',storedListStr)
    }
}

export {addWishList,getStoreWishlist}














