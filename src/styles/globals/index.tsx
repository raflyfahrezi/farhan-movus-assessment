import React from 'react'
import { Global as GlobalProvider, css } from '@emotion/react'

const sGlobal = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Open Sans';
    }
`

const Global = () => {
    return <GlobalProvider styles={sGlobal} />
}

export default Global
