import React from 'react';

const Inventory = () => {
    
    const handleAddInventory = () => {
    
        // console.log('before post', allFoods.length);
        // fetch('http://localhost:4100/addFood', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(allFoods)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('post successful', data);
        //     })
    }
    return (
        <div>
            <h1>This is Manage Inventory</h1>
            <button onClick={handleAddInventory}>Add Inventor</button>
        </div>
    );
};

export default Inventory;