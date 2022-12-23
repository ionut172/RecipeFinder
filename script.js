"use strict";
let searchButton = document.querySelector("#search");
const img = document.querySelector(".img-fluid");
const foodTitle = document.querySelector(".fTitle");
const foodCategory = document.querySelector(".fTitleCat");
const ingredients = document.querySelector(".p");
const instructiuni = document.querySelector(".pInstructiuni");
let ingrediente = [];
///////////////////////////////////////

const request = fetch("https://www.themealdb.com/api/json/v1/1/random.php");

const getMeal = function () {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const displayMeal = function () {
        img.innerHTML = `<img src=${data.meals[0].strMealThumb}>`;
        foodTitle.innerHTML = `<h1 class='font'>${data.meals[0].strMeal}</h1>`;
        img.appendChild(foodTitle);
        foodCategory.innerHTML = `<h3 class="category">Categorie: ${data.meals[0].strCategory}</h3>`;
        img.appendChild(foodCategory);
        instructiuni.innerHTML = `<p><b class='category'>Instructiuni de preparare:</b> </br> <br>${data.meals[0].strInstructions}</p>`;
        img.appendChild(instructiuni);
        ingrediente.push([
          data.meals[0].strIngredient1,
          data.meals[0].strIngredient2,
          data.meals[0].strIngredient3,
          data.meals[0].strIngredient4,
          data.meals[0].strIngredient5,
          data.meals[0].strIngredient6,
          data.meals[0].strIngredient7,
          data.meals[0].strIngredient8,
          data.meals[0].strIngredient9,
          data.meals[0].strIngredient10,
          data.meals[0].strIngredient11,
          data.meals[0].strIngredient12,
          data.meals[0].strIngredient13,
          data.meals[0].strIngredient14,
          data.meals[0].strIngredient15,
          data.meals[0].strIngredient16,
          data.meals[0].strIngredient17,
          data.meals[0].strIngredient18,
          data.meals[0].strIngredient19,
          data.meals[0].strIngredient20,
        ]);
        console.log(ingrediente);
        let cleanArray = ingrediente.filter(function () {
          return true;
        });
        ingredients.innerHTML =
          `<p class='p'><B>Ingrediente:</B>${JSON.stringify(cleanArray)
            .replace("[[", " ")
            .replace("]]", " ".replaceAll(`"`, " "))}</p>` +
          `Link de youtube la: <a href=${data.meals[0].strYoutube}>Click aici</a>`;
        img.appendChild(ingredients);
      };

      console.log(data.meals[0]);
      displayMeal();
    });
};
getMeal();

document.querySelector(".refresh").addEventListener("click", function (e) {
  e.preventDefault();
  ingrediente = [];
  getMeal();
});
