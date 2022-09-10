import React from 'react'

import { TWrapperProps } from './types'
import { sWrapper } from './styles'

const Wrapper = ({ children }: TWrapperProps) => {
    return <div className={sWrapper}>{children}</div>
}

export default Wrapper
