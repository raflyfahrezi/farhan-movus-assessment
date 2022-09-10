import { HTMLAttributes } from 'react'

export type ParagraphVariant = 'xl' | 'l' | 'm' | 's' | 'xs'
export type ParagraphWeight = 'light' | 'normal' | 'semibold' | 'bold'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    weight?: ParagraphWeight
    variant?: ParagraphVariant
}
