import { useEffect, useState } from "react";
import RecipeList from "../Components/RecipeList";
import Search from "../Components/Search";
import { searchRecipes } from "../services/api";

function Recipes() {
    const [searchedQuery, setSearchedQuery] = useState('pizza');
    const [recipes, setRecipes] = useState([]);    
    
    useEffect(() =>{
        getSearchedResult();
    }, [searchedQuery]);
    
    const getSearchedResult = async () => {
       let result = await searchRecipes(searchedQuery);
       if(result && result.recipes) {
        setRecipes(result.recipes);
       }
    }

    return (
        <>
            <Search setSearchedQuery={setSearchedQuery}/>
            <RecipeList recipes={recipes} searchedQuery={searchedQuery}/>
        </>
    );
}

export default Recipes;