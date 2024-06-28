import React from 'react'

type RandomNumberBase = {
    value: number;
}

type NegativeRandomNumber = RandomNumberBase & {
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
}

type PositiveRandomNumber = RandomNumberBase & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
}

type ZeroRandomNumber = RandomNumberBase & {
    isZero: boolean;
    isNegative?: never;
    isPositive?: never;
}


type RandomValueProps = NegativeRandomNumber | PositiveRandomNumber | ZeroRandomNumber
export default function RandomValue({value, isNegative, isPositive, isZero}: RandomValueProps) {
  return (
    <div>
        {value}
        {isPositive && 'positive'}
        {isNegative && 'negative'}
        {isZero && 'Zero'}
    </div>
  )
}
