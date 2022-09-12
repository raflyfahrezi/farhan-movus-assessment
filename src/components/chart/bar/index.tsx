import React from 'react'
import { Bar } from 'react-chartjs-2'

import { sBarChart } from './styles'
import { TBarChartProps } from './types'

const BarChart = ({ label, labels, datasets }: TBarChartProps) => {
    return (
        <Bar
            className={sBarChart}
            data={{
                labels: labels,
                datasets: [
                    {
                        label,
                        data: datasets,
                        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    },
                ],
            }}
        />
    )
}

export default BarChart
