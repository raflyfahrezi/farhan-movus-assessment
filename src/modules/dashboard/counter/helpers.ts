import { axiosGet } from '@/utils'

const fetchVehicleMakeData = async () => {
    const { data } = await axiosGet('/getallmakes?format=json', {})

    return data.Results
}

const fetchVehicleManufactureData = async () => {
    const { data } = await axiosGet('/getallmanufacturers?format=json', {})

    return data.Results
}

export { fetchVehicleMakeData, fetchVehicleManufactureData }
