import React from 'react';
import Buttons from '../comps/Buttons';

export default {
    title: 'Buttons',
    component: Buttons,
};

export const Default = () => <Buttons text = "Button"></Buttons>
export const AddToList = () => <Buttons text = "Add To List"></Buttons>
export const Save = () => <Buttons text = "Save"></Buttons>