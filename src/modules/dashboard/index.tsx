/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'

import { Wrapper } from '@/components'

import { sDashboard } from './styles'

import Counter from './counter'
import MakerChart from './makerChart'

const Dashboard = () => {
    return (
        <Wrapper>
            <div className={sDashboard}>
                <Counter />
                <MakerChart />
            </div>
        </Wrapper>
    )
}

export default Dashboard
