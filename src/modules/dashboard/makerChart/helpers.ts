import { axiosGet } from '@/utils'

const fetchVehicleModelDataByMake = async (make: string) => {
    const { data } = await axiosGet(
        `/GetModelsForMake/${make.toLowerCase()}?format=json`,
        {}
    )

    return data.Results
}

export { fetchVehicleModelDataByMake }
