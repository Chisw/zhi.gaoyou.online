import { useMemo, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Interval, DateTime } from 'luxon'
import { COUNT_MAP, line } from '@/utils'
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js'

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const years = [...new Set(Object.keys(COUNT_MAP).map(s => Number(s.substring(0, 4))))]

const getYearData = (year: number) => {
  const allCounts = Interval
    .fromDateTimes(
      DateTime.fromFormat(`${year}0101`, 'yyyyMMdd'),
      DateTime.fromFormat(`${year}1231`, 'yyyyMMdd'),
    )
    .splitBy({ days: 1 })
    .map(d => {
      const date = d.start!.toFormat('yyyyMMdd')
      const count = COUNT_MAP[date] || 0
      return {
        date,
        count,
      }
    })

  return {
    labels: allCounts.map(d => d.date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')),
    datasets: [
      {
        label: '整理字数',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt' as any,
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter' as any,
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        scaleSteps: 10,
        data: allCounts.map(d => d.count)
      }
    ]
  }
}

export default function Statistics() {
  const [activeYear, setActiveYear] = useState(years.at(-1)!)

  const data = useMemo(() => getYearData(activeYear), [activeYear])

  return (
    <div>
      <div className="flex-center-center select-none">
        {years.map((y) => {
          const isActive = y === activeYear
          return (
            <div
              key={y}
              className={line(`
                mx-2 px-5 py-2 rounded-md cursor-pointer
                ${isActive ? 'bg-zinc-700 text-white' : 'bg-zinc-100 text-zinc-800'}
              `)}
              onClick={() => setActiveYear(y)}
            >
              {y}
            </div>
          )
        })}
      </div>

      <div className="mt-4 lg:mt-6 h-56 lg:h-80">
        <Line
          data={data}
          width={3}
          height={1}
          options={{
            scales: {
              x: {
                ticks: {
                  maxTicksLimit: 5,
                  maxRotation: 0,
                }
              },
            },
          }}
        />
      </div>
    </div>
  )
}
