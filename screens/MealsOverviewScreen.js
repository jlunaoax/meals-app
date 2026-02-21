import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({route, navigation}) {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));
  
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId)?.title;
    navigation.setOptions({
      title: categoryTitle
    });
  }, [categoryId, navigation]);

  return (
    <MealsList displayedMeals={displayedMeals} navigation={navigation} />
  );
  
}

export default MealsOverviewScreen;
