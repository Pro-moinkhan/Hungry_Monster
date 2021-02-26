// fetching data from search:
const search = async () => {
    const inputValue = document.getElementById('inputFood').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displaySearch(data.meals);
    }
    catch {
        displayError('Something went wrong. please try again later!');
    }
}

// showing food matched with search:
const displaySearch = search => {
    const foodContainer = document.getElementById('foodContainer');
    foodContainer.innerHTML = '';
    search.forEach(foodInformation => {
        const foods = document.createElement('div');
        foods.className = 'food col col-lg-3 col-md-4 col-sm-12';
        foods.innerHTML = `
            <div onclick="displayIngredient(${foodInformation.idMeal})" class="card" style="width: 18rem;">
                <img id="foodImg" class="card-img-top" src="${foodInformation.strMealThumb}" alt="Card image cap">
                <div class="card-body">
                    <h3 id="foodName">${foodInformation.strMeal}</h3>
                </div>
            </div>
        `;
        foodContainer.appendChild(foods);
    });
}


// fetching ingredients:
const displayIngredient = async idInfo => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idInfo}`
        const res = await fetch(url);
        const data = await res.json();
        displayIngredientDetail(data.meals);
}


// displaying ingredients:
const displayIngredientDetail = ingredients => {
    console.log(ingredients);
    const ingredientDis = document.getElementById('ingredientDisplay');
    ingredientDis.innerHTML = '';
    ingredients.forEach(ingredientsElement => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.className = 'ingredient';
        ingredientDiv.innerHTML = `
        <div class="card">
            <img id="ingredientImg" src="${ingredientsElement.strMealThumb}" alt="img_error">
            <div class="card-body">
            <h1> ${ingredientsElement.strMeal} </h1>
            <hr>
            <h2>Ingredients:</h2>
            <p>${ingredientsElement.strIngredient1}</p>
            <p>${ingredientsElement.strIngredient2}</p>
            <p>${ingredientsElement.strIngredient3}</p>
            <p>${ingredientsElement.strIngredient4}</p>
            <p>${ingredientsElement.strIngredient5}</p>
            <p>${ingredientsElement.strIngredient6}</p>
            <p>${ingredientsElement.strIngredient7}</p>
            <p>${ingredientsElement.strIngredient8}</p>
            <p>${ingredientsElement.strIngredient9}</p>
            <p>${ingredientsElement.strIngredient10}</p>
            <p>${ingredientsElement.strIngredient11}</p>
            <p>${ingredientsElement.strIngredient12}</p>
            <p>${ingredientsElement.strIngredient13}</p>
            <p>${ingredientsElement.strIngredient14}</p>
            <p>${ingredientsElement.strIngredient15}</p>
            </div>
        </div>
        `;
        ingredientDis.appendChild(ingredientDiv);
    })
}
// function addingNumber(value) {
//     let values = [];
//     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const add = value + element;
//         values.push(add);
//     }
//     return values;
// }
// const result = addingNumber('strIngredient');
// const array2 = ;

const displayError = error =>{
    const errorDiv = document.getElementById('errorDiv');
    errorDiv.innerText = error;
}