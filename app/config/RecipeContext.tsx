import React, { createContext, useState, useContext, useEffect } from "react";
import storage from './utils/storage';

interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
}

interface DayRecipe {
  day: string;
  recipe: Recipe;
}

interface RecipeContextType {
  savedRecipes: Recipe[];
  dayRecipes: DayRecipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (recipeId: number) => void;
  recipeSearch: (recipeId: number) => boolean;
  addRecipeToDay: (day: string, recipe: Recipe) => void;
  removeRecipeFromDay: (day: string) => void;
  getRecipeForDay: (day: string) => Recipe | undefined;
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
  const [dayRecipes, setDayRecipes] = useState<DayRecipe[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedRecipesJson = await storage.getItem('savedRecipes');
        const dayRecipesJson = await storage.getItem('dayRecipes');
        if (savedRecipesJson) {
          setSavedRecipes(JSON.parse(savedRecipesJson));
        }
        if (dayRecipesJson) {
          setDayRecipes(JSON.parse(dayRecipesJson));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  const addRecipe = async (recipe: Recipe) => {
    const updatedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(updatedRecipes);
    try {
      await storage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
    } catch (error) {
      console.error('Error saving recipe:', error);
    }
  };

  const removeRecipe = async (recipeId: number) => {
    const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== recipeId);
    setSavedRecipes(updatedRecipes);
    try {
      await storage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
    } catch (error) {
      console.error('Error removing recipe:', error);
    }
  };

  const recipeSearch = (recipeId: number) => {
    return savedRecipes.some((saved) => saved.id === recipeId);
  };

  const addRecipeToDay = async (day: string, recipe: Recipe) => {
    const updatedDayRecipes = dayRecipes.filter((dr) => dr.day !== day);
    updatedDayRecipes.push({ day, recipe });
    setDayRecipes(updatedDayRecipes);
    try {
      await storage.setItem('dayRecipes', JSON.stringify(updatedDayRecipes));
    } catch (error) {
      console.error('Error adding recipe to day:', error);
    }
  };

  const removeRecipeFromDay = async (day: string) => {
    const updatedDayRecipes = dayRecipes.filter((dr) => dr.day !== day);
    setDayRecipes(updatedDayRecipes);
    try {
      await storage.setItem('dayRecipes', JSON.stringify(updatedDayRecipes));
    } catch (error) {
      console.error('Error removing recipe from day:', error);
    }
  };

  const getRecipeForDay = (day: string) => {
    const dayRecipe = dayRecipes.find((dr) => dr.day === day);
    return dayRecipe ? dayRecipe.recipe : undefined;
  };

  return (
    <RecipeContext.Provider
      value={{
        savedRecipes,
        dayRecipes,
        addRecipe,
        removeRecipe,
        recipeSearch,
        addRecipeToDay,
        removeRecipeFromDay,
        getRecipeForDay,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

