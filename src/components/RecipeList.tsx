import React from 'react';
import RecipeCard from './RecipeCard';

interface RecipeListProps {
  recipes: { id: number; name: string; description: string }[];
  searchKeyword: string;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, searchKeyword }) => {
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      {filteredRecipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} searchKeyword={searchKeyword} />
      ))}
    </div>
  );
};

export default RecipeList;