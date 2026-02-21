import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { Button, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import { store } from './store/redux/store';

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerActiveBackgroundColor: '#72798a',
        drawerActiveTintColor: 'white',
        drawerStyle: {
            backgroundColor: '#a99b9b', // Set your desired background color here
            width: 240, // Optional: adjust the width
            borderRadius: 10, // Optional: add rounded corners
          },
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: 'All categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options = {{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      { /* <FavoritesContextProvider> */ }
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' }, 
            }}
          >
            <Stack.Screen
              name="DrawerMealsCategories"
              component={DrawerNavigator}
              options={{
                title: 'All categories',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options = {{title: 'About the meal'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      { /* </FavoritesContextProvider> */ }
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});