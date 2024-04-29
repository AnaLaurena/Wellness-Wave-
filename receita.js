const recipes = [
    {
        name: "Smoothie de Frutas",
        meal: "Café da Manhã",
        image: "smoothie.jpg",
        ingredients: ["Banana", "Morango", "Iogurte Natural", "Mel"],
        instructions: "Bata todos os ingredientes no liquidificador e sirva gelado."
    },
    { 
        name: "Mousse de Chocolate low carb",
        meal: "Sobremesa", 
        image: "mousse de chocolate.jpg",
        ingredients: ["1 garrafinha de leite de coco", "3 colheres (sopa) de cacau em pó", "coco ralado ou canela (opcional)", "1 lata de creme de leite", "1/2 sachê de adoçante à base de estévia"],
        instructions: "Deixe a garrafa de leite de coco e a lata de creme de leite por várias horas na geladeira. Coloque o leite de coco gelado em uma tigela e bata com um batedor ou com um garfo até ficar pastoso. Adicione mais da metade da lata de creme de leite sem soro e reserve o restante. Adicione o cacau e a estévia e continue batendo até a mousse ficar leve e fofa. Cubra com coco ralado ou uma colherada de canela em pó de acordo com sua preferência."
    },
    {
        name: "Bolo de Amêndoa e Limão Low carb",
        meal: "Sobremesa", 
        image: "bolo de amendoas e limão.jpg",
        ingredients: ["1 e 1/2 xícaras de farinha de amêndoa", "1/2 xícara de eritritol (ou adoçante de sua escolha)", "3 ovos", "Suco e raspas de 1 limão", "1/4 xícara de óleo de coco derretido", "Uma pitada de sal"],
        instructions: "Preaqueça o forno a 180°C e unte levemente uma forma para bolo. Em uma tigela grande, misture a farinha de amêndoa, o eritritol, o fermento em pó e o sal. Em outra tigela, bata os ovos até ficarem espumosos. Adicione o suco e as raspas de limão aos ovos batidos e misture bem. Despeje lentamente a mistura de ovos na tigela de ingredientes secos, mexendo delicadamente até que todos os ingredientes estejam bem combinados. Adicione o óleo de coco derretido à massa e mexa até incorporar completamente. Despeje a massa na forma preparada e leve ao forno preaquecido. Asse por 25-30 minutos, ou até que um palito inserido no centro do bolo saia limpo. Retire do forno e deixe esfriar antes de desenformar. Sirva fatias do bolo de amêndoa e limão com uma pitada de raspas de limão por cima, se desejar."
    }
];

const recipeContainer = document.getElementById("recipes");

recipes.forEach(recipe => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    const image = document.createElement("img");
    image.src = recipe.image;
    recipeDiv.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = recipe.name;
    recipeDiv.appendChild(name);

    const meal = document.createElement("p");
    meal.textContent = `Refeição: ${recipe.meal}`;
    recipeDiv.appendChild(meal);

    const ingredientsList = document.createElement("ul");
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    recipeDiv.appendChild(ingredientsList);

    const instructions = document.createElement("p");
    instructions.textContent = `Modo de Preparo: ${recipe.instructions}`;
    recipeDiv.appendChild(instructions);

    recipeContainer.appendChild(recipeDiv);
});
