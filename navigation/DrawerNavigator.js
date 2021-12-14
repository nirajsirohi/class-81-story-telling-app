import React from "react";
import {createDrawerNavigator}from "@react-navigator/frawer";
import TabNavigator from "./TabNavigator";
import profile from "../screens/profile";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "home" component = {TabNavigator}/>
            <Drawer.Screen name = "profile" component = {profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;

