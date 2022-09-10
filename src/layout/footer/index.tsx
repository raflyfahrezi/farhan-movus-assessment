import React from 'react'

import { Paragraph } from '@/typography'

import { sFooter } from './styles'

const Footer = () => {
    return (
        <div className={sFooter}>
            <Paragraph variant='xs'>
                Created by Farhan Rafly Fahrezi Saepulloh @ 2022
            </Paragraph>
        </div>
    )
}

export default Footer
