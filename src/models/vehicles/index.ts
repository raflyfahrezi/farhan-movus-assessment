export type TVehicleMake = {
    Make_ID: number
    Make_Name: string
}

export type TVehicleModel = {
    Model_ID: number
    Model_Name: string
} & TVehicleMake
