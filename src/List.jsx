

function List (){
    const fruits = [
        {id:1, name:'apple', calories: 95, fat: 0.3, carbs: 25, protein: 0.5},
        {id:2, name:'banana', calories: 105, fat: 0.4, carbs: 27, protein: 1.3}, 
        {id:3, name:'cherry', calories: 5, fat: 0.2, carbs: 1, protein: 0.1}, 
        {id:4, name:'date', calories: 20, fat: 0.1, carbs: 5, protein: 0.2}, 
        {id:5, name:'fig', calories: 30, fat: 0.2, carbs: 8, protein: 0.3}, 
        {id:6, name:'grape', calories: 2, fat: 0.1, carbs: 0.6, protein: 0.1},
    ]

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name} - {fruit.calories} - {fruit.fat} - {fruit.carbs} - {fruit.protein}
                                          </li>);

    return (

        <ol>
            {listItems}
        </ol>
    );
}

export default List