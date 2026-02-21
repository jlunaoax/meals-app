import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";


function MealDetailsScreen({route, navigation}) {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);
  const dispatch = useDispatch();
  
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      //favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    } else {
      //favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} color="white" onPress={changeFavoritesStatusHandler} />
      }
    });
  }, [navigation, mealIsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
          <Image source={{uri: selectedMeal.imageUrl}} style={styles.mealItemImage} />
          <Text style={styles.mealItemTitle}>{selectedMeal.title}</Text>
      </View>
      <MealDetails selectedMeal={selectedMeal} textStyle={styles.detailText} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data = {selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data = {selectedMeal.steps} />
      </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  mainDetail: {
        margin: 16,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        //overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    mealItemImage: {
        width: '100%',
        height: 250,
    },
    mealItemTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        color: 'white'
    },
    detailText: {
      color: 'white'
    },
    listContainer: {
      width: '80%'
    },
    listOuterContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    }
});
