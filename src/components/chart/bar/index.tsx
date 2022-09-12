import { Chart as ChartJS } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import React, { useRef, useEffect } from 'react'

import { sBarChart } from './styles'
import { TBarChartProps } from './types'

const BarChart = ({ label, labels, datasets }: TBarChartProps) => {
    const barChartRef = useRef<ChartJS<'bar', number[], string> | null>()

    useEffect(() => {
        barChartRef.current?.update()
    }, [label, labels, datasets])

    return (
        <Bar
            ref={barChartRef}
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
