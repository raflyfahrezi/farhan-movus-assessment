import React from 'react'

import { Paragraph } from '@/typography'

import { sHeader } from './styles'

const Header = () => {
    return (
        <div className={sHeader}>
            <Paragraph variant='xl' weight='bold'>
                Admin Dashboard
            </Paragraph>
        </div>
    )
}

export default Header
