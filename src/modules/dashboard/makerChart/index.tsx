import { Select, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import React, { useState, useEffect, ChangeEvent } from 'react'

import { getCarMaker } from '@/utils'
import { BarChart } from '@/components'

import { sMakerChartCheckbox } from './styles'
import {
    fetchVehicleModelDataByMake,
    handleSelectOnChangeGetWithYear,
} from './helpers'

const MakerChart = () => {
    const [vehicleModelList, setVehicleModelList] = useState<number[]>([])
    const [vehicleModelLabels, setVehicleModelLabels] = useState<string[]>([])
    const [selectYear] = useState<null[]>(
        Array.from(Array(new Date().getFullYear() - 1995 + 1))
    )
    const [vehicleModelListBase, setVehicleModelListBase] = useState<number[]>(
        []
    )

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
        setVehicleModelListBase(fixedVehicleModelList)
    }

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target

        if (!checked) {
            const indexOfLabels = vehicleModelLabels.indexOf(name)

            const cleanedVehicleModelList = vehicleModelList.filter(
                (_, index) => index !== indexOfLabels
            )

            const cleanedVehicleModelLabels = vehicleModelLabels.filter(
                (item) => item !== name
            )

            setVehicleModelList(cleanedVehicleModelList)
            setVehicleModelLabels(cleanedVehicleModelLabels)

            return
        }

        const convertedGetCarMaker = getCarMaker().map((item) => item.Make_Name)

        const indexOfLabels = convertedGetCarMaker.indexOf(name)

        setVehicleModelLabels([...vehicleModelLabels, name])
        setVehicleModelList([
            ...vehicleModelList,
            vehicleModelListBase[indexOfLabels],
        ])
    }

    const handleSelectChange = async (
        event: ChangeEvent<HTMLSelectElement>
    ) => {
        const { value } = event.target

        if (value === 'all') {
            await fetchData()

            return
        }

        const vehicleModelListTemp = await handleSelectOnChangeGetWithYear(
            value
        )

        const fixedVehicleModelList = vehicleModelListTemp.map((item) => {
            return item.length
        })

        const vehicleModelLabelsTemp = getCarMaker().map((item) => {
            return item.Make_Name
        })

        setVehicleModelLabels(vehicleModelLabelsTemp)
        setVehicleModelList(fixedVehicleModelList)
        setVehicleModelListBase(fixedVehicleModelList)
    }

    useEffect(() => {
        try {
            fetchData()
        } catch {
            //
        }
    }, [])

    return (
        <div>
            <div className={sMakerChartCheckbox}>
                <CheckboxGroup>
                    {getCarMaker().map((item) => {
                        return (
                            <Checkbox
                                key={item.Make_ID}
                                name={item.Make_Name}
                                onChange={handleCheckboxChange}
                                isChecked={vehicleModelLabels.includes(
                                    item.Make_Name
                                )}
                                defaultChecked
                            >
                                {item.Make_Name}
                            </Checkbox>
                        )
                    })}
                </CheckboxGroup>
            </div>

            <div>
                <Select onChange={handleSelectChange}>
                    <option value='all'>All</option>
                    {selectYear.map((_, index) => {
                        return (
                            <option key={index} value={1995 + index}>
                                {1995 + index}
                            </option>
                        )
                    })}
                </Select>
            </div>

            <div>
                <BarChart
                    label='Vehicle Model Count'
                    labels={vehicleModelLabels}
                    datasets={vehicleModelList}
                />
            </div>
        </div>
    )
}

export default MakerChart
