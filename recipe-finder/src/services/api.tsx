
import axios from 'axios';
import { API_URL } from '../constants/constants';

export const searchRecipes = async (searchedQuery: string): Promise<any> =>{
    try{
       let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
       return response.data;
    } catch(error:unknown) {
        if (error instanceof Error) {
            console.log('Error while calling the API', error.message);
        } else {
            console.log('Unknown error', error);
        }
    }
}

export const getRecipeForId = async (recipeId: string): Promise<any> =>{
    try{
       let response = await axios.get(`${API_URL}/get?rId=${recipeId}`);
       return response.data;
    } catch(error:unknown) {
        if (error instanceof Error) {
            console.log('Error while calling the API', error.message);
        } else {
            console.log('Unknown error', error);
        }
    }
}