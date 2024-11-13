import React, { createContext, useState, useContext } from "react";

interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
}

interface RecipeContextType {
  savedRecipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (recipeId: number) => void;
  recipeSearch: (recipeId: number) => boolean;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  const addRecipe = (recipe: Recipe) => {
    setSavedRecipes((prev) => [...prev, recipe]);
  };

  const removeRecipe = (recipeId: number) => {
    setSavedRecipes((prev) => prev.filter((recipe) => recipe.id !== recipeId));
  };

  const recipeSearch = (recipeId: number) => {
    let save = false;
    const isSaved = savedRecipes.find((saved) => saved.id === recipeId);
    if (isSaved) save = true;
    return save;
  };

  return (
    <RecipeContext.Provider
      value={{ savedRecipes, addRecipe, removeRecipe, recipeSearch }}
    >
      {children}
    </RecipeContext.Provider>
  );
};