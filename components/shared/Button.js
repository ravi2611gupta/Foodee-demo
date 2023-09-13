import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

export const ButtonType = {
    GHOST: 'GHOST',
    FILLED: 'FILLED',
}

const Button = ({
    type = ButtonType.FILLED,
    label = 'Button',
    ...props
}) => {
    return (
        <TouchableOpacity
            style={{
                borderWidth: type === ButtonType.GHOST ? 2 : 0,
                borderColor: type === ButtonType.GHOST ? COLORS.primary : COLORS.white,
                backgroundColor: type === ButtonType.GHOST ? COLORS.white : COLORS.primary,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                ...props
            }}
        >
            <Text style={{ color: type === ButtonType.GHOST ? COLORS.primary : COLORS.white }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button