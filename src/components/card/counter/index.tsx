import React from 'react'

import { Paragraph } from '@/typography'

import { sCounterCard } from './styles'
import { TCounterCardProps } from './types'

const CounterCard = ({ title, value }: TCounterCardProps) => {
    return (
        <div className={sCounterCard}>
            <Paragraph>{title}</Paragraph>
            <Paragraph variant='xl' weight='bold'>
                {value}
            </Paragraph>
        </div>
    )
}

export default CounterCard
