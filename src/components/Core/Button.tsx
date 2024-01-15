import React from 'react';
import { Button as RNButton, TouchableOpacity } from 'react-native'

interface ButtonProps {
    title: string,
    children: any,
    onPress: Function,
}

export const Button: React.FC<ButtonProps> = ({
    title,
    children,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={() => onPress()} >
            {children}
        </TouchableOpacity>
    );
};

export default Button;