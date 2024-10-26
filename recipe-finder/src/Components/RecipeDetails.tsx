import { useEffect, useState } from "react";
import {getRecipeForId} from '../services/api'
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";

function RecepieDetails() {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams<{ recipeId: string }>();  // Destructure and type recipeId as string

    useEffect(() => {
        const getRecipeForRecipeId = async () => {
            if (recipeId) {  // Check if recipeId exists
                let result = await getRecipeForId(recipeId);
                if (result && result.recipe) {
                    setRecipe(result.recipe);
                }
            }
        };
        getRecipeForRecipeId();  // Call the function inside useEffect
    }, [recipeId]);  // Add recipeId as a dependency


    return (
        Object.keys(recipe).length > 0 ?
            <Grid Container stackable columns={2} className="detailsPageContent">
                <Grid.Column>
                    <Button 
                        as={Link}
                        to={'/recipes'}
                        content="Back to Recipe List"
                        color="yellow"
                        style={{ marginBottom: 40}} 
                    />
                    <Image src={recipe.image_url} />
                </Grid.Column>
                <Grid.Column>
                    <Header size="medium">{recipe.title}</Header>
                    <p> Provided By: {recipe.publisher} </p>
                    <Button 
                        as={"a"}
                        href={recipe.publisher_url}
                        target="_blank"
                        content="Publisher Webpage"
                        color="blue"
                    />
                     <Button 
                        as={"a"}
                        href={recipe.source_url}
                        target="_blank"
                        content="Recipe URL"
                        color="green"
                    />
                    <Header size="large" content='Ingredients' />
                    <Segment.Group>
                        {
                            recipe && recipe.ingredients.map((data: any) => (
                                <Segment>
                                    <h5>{data}</h5>
                                </Segment>
                            ))
                        }
                    </Segment.Group>
                 </Grid.Column>   
            </Grid> : null
    )
}

export default RecepieDetails;