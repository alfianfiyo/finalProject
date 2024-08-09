import { View, Text } from 'react-native'
import React from 'react'

export default function formatNumber(stringNumber) {
    const numberValue = parseFloat(stringNumber);
    const formattedNumber = Number(numberValue).toLocaleString('en');
    return formattedNumber;
}