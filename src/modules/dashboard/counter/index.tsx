import React, { useState, useEffect } from 'react'

import { TVehicleMake } from '@/models'
import { CounterCard } from '@/components'

import { fetchVehicleMakeData } from './helpers'

const Counter = () => {
    const [vehicleMakeList, setVehicleMakeList] = useState<TVehicleMake[]>([])

    const fetchData = async () => {
        const vehicleMakeDataResponse = await fetchVehicleMakeData()

        setVehicleMakeList(vehicleMakeDataResponse)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <CounterCard
                title='Vehicle Makes Total'
                value={vehicleMakeList.length}
            />
        </div>
    )
}

export default Counter
