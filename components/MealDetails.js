import { View, Text, StyleSheet} from "react-native";

function MealDetails({selectedMeal, style, textStyle}) {
    console.log(JSON.stringify(selectedMeal));
    return (
        <View style={[styles.mealItemDetails, style]}>
            <Text style={[styles.mealItemDetailText, textStyle]}>{selectedMeal.duration} min</Text>
            <Text style={[styles.mealItemDetailText, textStyle]}>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text style={[styles.mealItemDetailText, textStyle]}>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create ({
    mealItemDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    mealItemDetailText: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
