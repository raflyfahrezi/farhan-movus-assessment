export interface ColorPrimary {
    brown: string
    darkBrown: string
    lightBrown: string
    mediumBrown: string
}

export interface ColorSecondary {
    red: string
    orange: string
}

export interface ColorTernary {
    white: string
}

export interface Color {
    primary: ColorPrimary
    secondary: ColorSecondary
    ternary: ColorTernary
}
