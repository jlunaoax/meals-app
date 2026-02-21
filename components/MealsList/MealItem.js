import { View, Pressable, Text, StyleSheet, Image, Platform } from "react-native";
import MealDetails from "../MealDetails";
import { useNavigation } from "@react-navigation/native";

function MealItem({ selectedMeal }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        console.log("Selected meal ID:", selectedMeal.id);
        navigation.navigate('MealDetails', {
        mealId: selectedMeal.id,
        });
    }

    return (
    <View style={styles.mealItem}>
        <Pressable android_ripple={{color: '#ccc'}} 
                    style={({pressed}) => [styles.button, pressed ? styles.mealItemPressed : null]}
                    onPress={selectMealItemHandler}>
            <View>
                <View>
                    <Image source={{uri: selectedMeal.imageUrl}} style={styles.mealItemImage} />
                    <Text style={styles.mealItemTitle}>{selectedMeal.title}</Text>
                </View>
                <MealDetails selectedMeal={selectedMeal} />
            </View>
        </Pressable>
    </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
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
    mealItemPressed: {
        opacity: 0.7,
    },
    mealItemImage: {
        width: '100%',
        height: 200,
    },
    mealItemTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});