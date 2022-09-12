import React, { useState, useEffect } from 'react'

import { TVehicleMake } from '@/models'
import { CounterCard } from '@/components'

import { sCounter } from './styles'
import { fetchVehicleMakeData, fetchVehicleManufactureData } from './helpers'

const Counter = () => {
    const [vehicleMakeList, setVehicleMakeList] = useState<TVehicleMake[]>([])
    const [vehicleManufactureList, setVehicleManufactureList] = useState<
        TVehicleMake[]
    >([])

    const fetchData = async () => {
        const vehicleMakeDataResponse = await fetchVehicleMakeData()
        const vehicleManufactureDataResponse =
            await fetchVehicleManufactureData()

        setVehicleMakeList(vehicleMakeDataResponse)
        setVehicleManufactureList(vehicleManufactureDataResponse)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={sCounter}>
            <CounterCard
                title='Vehicle Makes Total'
                value={vehicleMakeList.length}
            />
            <CounterCard
                title='Vehicle Manufacture Total'
                value={vehicleManufactureList.length}
            />
        </div>
    )
}

export default Counter
