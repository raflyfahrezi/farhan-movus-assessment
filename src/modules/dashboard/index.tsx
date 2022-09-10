/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'

import { Wrapper } from '@/components'
import { TVehicleMake } from '@/models'

import { sDashboard } from './styles'
import { fetchVehicleMakeData } from './helpers'

import Counter from './counter'

const Dashboard = () => {
    const [vehicleMakeList, setVehicleMakeList] = useState<TVehicleMake[]>([])

    const fetchData = async () => {
        const vehicleMakeDataResponse = await fetchVehicleMakeData()

        setVehicleMakeList(vehicleMakeDataResponse)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Wrapper>
            <div className={sDashboard}>
                <Counter vehicleMakesTotal={vehicleMakeList.length} />
            </div>
        </Wrapper>
    )
}

export default Dashboard
