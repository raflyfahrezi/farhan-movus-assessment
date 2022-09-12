import React, { useState, useEffect } from 'react'

import { getCarMaker } from '@/utils'
import { BarChart } from '@/components'

import { fetchVehicleModelDataByMake } from './helpers'

const MakerChart = () => {
    const [vehicleModelList, setVehicleModelList] = useState<number[]>([])
    const [vehicleModelLabels, setVehicleModelLabels] = useState<string[]>([])

    const fetchData = async () => {
        const vehicleModelListTemp = getCarMaker().map(async (item) => {
            const vehicleModelDataResponse = await fetchVehicleModelDataByMake(
                item.Make_Name
            )

            return await vehicleModelDataResponse
        })

        const solvedVehicleModelList = await Promise.all(vehicleModelListTemp)

        const fixedVehicleModelList = solvedVehicleModelList.map((item) => {
            return item.length
        })

        const vehicleModelLabelsTemp = getCarMaker().map((item) => {
            return item.Make_Name
        })

        setVehicleModelList(fixedVehicleModelList)
        setVehicleModelLabels(vehicleModelLabelsTemp)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <BarChart
                label='Vehicle Model Count'
                labels={vehicleModelLabels}
                datasets={vehicleModelList}
            />
        </div>
    )
}

export default MakerChart
