import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import { View } from "react-native";
import StoryComponent from "../component/StoryComponent";
import MainComponent from "../component/MainComponent";

const InstaHomeScreen=()=>{
    return (
        <View>
        <HeaderComponent/>
        <StoryComponent/>
        <MainComponent/>
        </View>
    );
};
export default InstaHomeScreen;