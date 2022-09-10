import { axiosGet } from '@/utils'

const fetchVehicleMakeData = async () => {
    const { data } = await axiosGet('getallmakes?format=json', {})

    return data.Results
}

const fetchVehicleModelData = async () => {
    const { data } = await axiosGet('getallmodels?format=json', {})

    return data.Results
}

export { fetchVehicleMakeData, fetchVehicleModelData }
