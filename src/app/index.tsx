import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

import { Dashboard } from '@/modules'
import { PageWrapper } from '@/layout'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const App = () => {
    return (
        <PageWrapper>
            <Dashboard />
        </PageWrapper>
    )
}

export default App
