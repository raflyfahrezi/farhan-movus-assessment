import { ParagraphVariant, ParagraphWeight } from './types'
import {
    // Variant
    sParagraphL,
    sParagraphS,
    sParagraphXL,
    sParagraphXS,
    // Weight
    sParagraphLight,
    sParagraphBold,
    sParagraphSemiBold,
} from './styles'

export const getVariantStyle = (
    variant: ParagraphVariant | undefined
): string => {
    switch (variant) {
        case 'xl':
            return sParagraphXL

        case 'l':
            return sParagraphL

        case 's':
            return sParagraphS

        case 'xs':
            return sParagraphXS

        default:
            return ''
    }
}

export const getParagraphWeight = (
    weight: ParagraphWeight | undefined
): string => {
    switch (weight) {
        case 'light':
            return sParagraphLight

        case 'semibold':
            return sParagraphSemiBold

        case 'bold':
            return sParagraphBold

        default:
            return ''
    }
}
