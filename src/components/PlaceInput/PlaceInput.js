import React, { Component } from "react";
import DefaultInput from "../ui/DefaultInput/DefaultInput";

const placeInput = props => (
  <DefaultInput 
    placeholder="Place Name" 
    value={props.placeName} 
    onChangeText={props.onChangeText} />
);

export default placeInput;
