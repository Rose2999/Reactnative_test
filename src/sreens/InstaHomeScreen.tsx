import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import { View } from "react-native";
import StoryComponent from "../component/StoryComponent";

const InstaHomeScreen=()=>{
    return (
        <View>
        <HeaderComponent/>
        <StoryComponent/>
     
        </View>
    );
};
export default InstaHomeScreen;