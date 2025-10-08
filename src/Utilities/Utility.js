const getDataFromLs = () => {
    const storedItems = JSON.parse(localStorage.getItem('installed'))
    if(storedItems) {
        return [...storedItems]
    }
    else {
        return []
    }
}

const addItemToLs = (data) => {
    const storedData = getDataFromLs()
    const isDuplicate = storedData.find(d => d.id === data.id)
    if (!isDuplicate) {
         storedData.push(data)
    }
    localStorage.setItem('installed', JSON.stringify(storedData))
} 


const removeItemFromLs = (id) => {
    const storedData = getDataFromLs()
    const filteredItems = storedData.filter(d => d.id !== id)
    localStorage.setItem('installed', JSON.stringify(filteredItems)) 
}

export {getDataFromLs, addItemToLs, removeItemFromLs}