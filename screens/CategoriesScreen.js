import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { View, Text, FlatList } from "react-native";


function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {

        function pressHandler() {
            console.log("Pressed category:", itemData.item.title);
            navigation.navigate('MealsOverview', { categoryId: itemData.item.id });
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#3f2f25' }}>
            <FlatList 
                data={CATEGORIES} 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    renderCategoryItem({ item })
                )}
                numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen;