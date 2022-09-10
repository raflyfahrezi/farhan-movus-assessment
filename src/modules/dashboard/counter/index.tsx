import React from 'react'

import { CounterCard } from '@/components'

import { TCounterProps } from './types'

const Counter = ({ vehicleMakesTotal }: TCounterProps) => {
    return (
        <div>
            <CounterCard
                title='Vehicle Makes Total'
                value={vehicleMakesTotal}
            />
        </div>
    )
}

export default Counter
