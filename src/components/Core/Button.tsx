import React from 'react';
import { Button as RNButton, TouchableOpacity } from 'react-native'

interface ButtonProps {
    children: any,
    onPress: Function,
}

export const Button: React.FC<ButtonProps> = ({
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