import React from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./src/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

import Home from "./src/components/Home";
import Technology from "./src/components/Technology";
import Business from "./src/components/Business";

const navOptions = {
    headerStyle: {
        backgroundColor: "purple"
    },
    headerTintColor: "white"
};

const HomeStack = createStackNavigator(
    {
        Home: Home
    },
    {
        navigationOptions: navOptions
    }
);
const TechnologyStack = createStackNavigator(
    {
        Technology: Technology
    },
    {
        navigationOptions: navOptions
    }
);
const BusinessStack = createStackNavigator(
    {
        Business: Business
    },
    {
        navigationOptions: navOptions
    }
);

const MainStack = createBottomTabNavigator({
    Home: HomeStack,
    Technology: TechnologyStack,
    Business: BusinessStack
});

const App = () => (
    <Provider store={store}>
        <MainStack />
    </Provider>
);

export default App;
