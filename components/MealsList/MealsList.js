import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

function MealsList({ displayedMeals }) {

  function renderMealItem(itemData) {
    const item = itemData.item;
    console.log("Rendering meal item:", itemData);
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    };
    return (
      <MealItem selectedMeal={mealItemProps} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});