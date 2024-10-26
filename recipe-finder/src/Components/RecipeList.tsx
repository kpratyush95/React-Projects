import { Container, Header, Grid, GridColumn } from "semantic-ui-react";
import RecipeListItem from "./RecepieListItem";

function RecipeList({recipes, searchedQuery}) {
    return (
        <Container>
            <Header
                size="huge"
                content={`Recipe list for ${searchedQuery}`}
                textAlign="center"
            />
            <Grid columns={4} doubling>
                {   
                    recipes && recipes.map((recipe: any) => (
                    <GridColumn>
                        <RecipeListItem recipe={recipe}/>
                    </GridColumn>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default RecipeList;