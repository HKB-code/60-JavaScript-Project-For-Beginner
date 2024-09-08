const recipeList = document.getElementById("recipe-list");

const showRecipes = function (recipes) {
  recipeList.innerHTML = "";

  recipes.forEach((element) => {
    const recipeListLiEl = document.createElement("li");
    recipeListLiEl.classList.add("recipe-item");
    const recipeListImgEl = document.createElement("img");
    recipeListImgEl.classList.add("recipe-item-img");
    recipeListImgEl.src = element.image;

    const recipeListH2El = document.createElement("h2");
    recipeListH2El.textContent = element.title;
    const recipeListParaEl = document.createElement("p");
    recipeListParaEl.innerHTML = `<strong>Ingredients:</strong> ${element.extendedIngredients
      .map((e) => e.original)
      .join(", ")}`;
    if (recipeListParaEl.textContent.length > 50) {
      recipeListParaEl.classList.add("short-para");
    }

    const recipeListAnchor = document.createElement("a");
    recipeListAnchor.innerHTML = "View Recipe";
    recipeListAnchor.href = element.sourceUrl;

    recipeList.appendChild(recipeListLiEl);
    recipeListLiEl.appendChild(recipeListImgEl);
    recipeListLiEl.appendChild(recipeListH2El);
    recipeListLiEl.appendChild(recipeListParaEl);
    recipeListLiEl.appendChild(recipeListAnchor);
  });
};

const getRecipe = async function () {
  const apiKey = "0ea4ec310806447094c40dd189c16e43";
  const getUrl = `https://api.spoonacular.com/recipes/random?number=50&include-tags=vegetarian&apiKey=${apiKey}`;
  try {
    const response = await fetch(getUrl);
    const data = await response.json();
    showRecipes(data.recipes);
  } catch (err) {
    throw new Error(`Something went wrong ${err.message}`);
  }
};
getRecipe();
//
