import { axiosGet, getCarMaker } from '@/utils'

const fetchVehicleModelDataByMake = async (make: string) => {
    const { data } = await axiosGet(
        `/GetModelsForMake/${make.toLowerCase()}?format=json`,
        {}
    )

    return data.Results
}

const fetchVehicleModelDataByMakeWithYear = async (
    make: string,
    year: string
) => {
    const { data } = await axiosGet(
        `/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`,
        {}
    )

    return data.Results
}

const handleSelectOnChangeGetWithYear = async (year: string) => {
    const vehicleModelListTemp = getCarMaker().map(async (item) => {
        const vehicleModelDataResponse =
            await fetchVehicleModelDataByMakeWithYear(item.Make_Name, year)

        return await vehicleModelDataResponse
    })

    const solvedVehicleModelList = await Promise.all(vehicleModelListTemp)

    return solvedVehicleModelList
}

export {
    fetchVehicleModelDataByMake,
    handleSelectOnChangeGetWithYear,
    fetchVehicleModelDataByMakeWithYear,
}
