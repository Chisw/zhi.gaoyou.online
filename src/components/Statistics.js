import React from 'react'
import { Line } from 'react-chartjs-2'
import { Interval, DateTime } from 'luxon'

const counts = [
  { date: '2019/07/28', count: 297 },
  { date: '2019/07/29', count: 307 },
  { date: '2019/07/30', count: 366 },
  { date: '2019/07/31', count: 498 },
  { date: '2019/08/01', count: 462 },
  { date: '2019/08/03', count: 850 },
  { date: '2019/08/04', count: 799 },
  { date: '2019/08/05', count: 621 },
  { date: '2019/08/07', count: 425 },
  { date: '2019/08/08', count: 447 },
  { date: '2019/08/13', count: 561 },
  { date: '2019/08/15', count: 800 },
  { date: '2019/08/19', count: 545 },
  { date: '2019/08/23', count: 360 },
  { date: '2019/08/27', count: 677 },
  { date: '2019/08/30', count: 377 },
  { date: '2019/08/31', count: 228 },
  { date: '2019/09/01', count: 542 },
  { date: '2019/09/02', count: 816 },
  { date: '2019/09/03', count: 346 },
  { date: '2019/09/09', count: 333 },
  { date: '2019/09/11', count: 507 },
  { date: '2019/09/15', count: 353 },
  { date: '2019/10/05', count: 837 },
  { date: '2019/10/07', count: 531 },
  { date: '2019/10/11', count: 698 },
  { date: '2019/10/12', count: 562 },
  { date: '2019/10/13', count: 632 },
  { date: '2019/10/14', count: 533 },
  { date: '2019/10/15', count: 191 },
  { date: '2019/10/16', count: 1094 },
  { date: '2019/10/18', count: 1052 },
  { date: '2019/10/19', count: 557 },
  { date: '2019/10/21', count: 272 },
  { date: '2019/10/23', count: 862 },
  { date: '2019/10/25', count: 272 },
  { date: '2019/10/27', count: 941 },
  { date: '2019/10/28', count: 291 },
  { date: '2019/10/29', count: 704 },
  { date: '2019/10/30', count: 665 },
  { date: '2019/10/31', count: 1167 },
  { date: '2019/11/02', count: 1295 },
  { date: '2019/11/04', count: 715 },
  { date: '2019/11/05', count: 662 },
  { date: '2019/11/06', count: 382 },
  { date: '2019/11/10', count: 560 },
  { date: '2019/11/11', count: 539 },
  { date: '2019/11/13', count: 906 },
  { date: '2019/11/14', count: 1264 },
  { date: '2019/11/15', count: 1306 },
  { date: '2019/11/17', count: 1698 },
  { date: '2019/11/18', count: 202 },
  { date: '2019/11/27', count: 488 },
  { date: '2019/11/30', count: 1061 },
  { date: '2019/12/03', count: 787 },
  { date: '2019/12/04', count: 136 },
  { date: '2019/12/05', count: 397 },
  { date: '2019/12/06', count: 924 },
  { date: '2019/12/07', count: 806 },
  { date: '2019/12/08', count: 445 },
  { date: '2019/12/09', count: 698 },
  { date: '2019/12/10', count: 962 },
  { date: '2019/12/11', count: 661 },
  { date: '2019/12/12', count: 541 },
  { date: '2019/12/16', count: 711 },
  { date: '2019/12/18', count: 794 },
  { date: '2019/12/19', count: 522 },
  { date: '2019/12/31', count: 670 },
  { date: '2020/01/01', count: 379 },
  { date: '2020/01/04', count: 533 },
  { date: '2020/01/05', count: 762 },
  { date: '2020/02/04', count: 619 },
  { date: '2020/02/17', count: 446 },
  { date: '2020/05/21', count: 447 },
  { date: '2020/05/22', count: 363 },
  { date: '2020/05/23', count: 755 },
  { date: '2020/05/24', count: 473 },
  { date: '2020/05/27', count: 279 },
  { date: '2020/05/29', count: 394 },
  { date: '2020/06/02', count: 222 },
  { date: '2020/06/05', count: 299 },
  { date: '2020/06/06', count: 262 },
  { date: '2020/06/07', count: 376 },
  { date: '2020/06/08', count: 309 },
  { date: '2020/06/09', count: 251 },
  { date: '2020/06/11', count: 491 },
  { date: '2020/06/12', count: 425 },
  { date: '2020/06/14', count: 539 },
  { date: '2020/06/15', count: 334 },
  { date: '2020/06/16', count: 285 },
  { date: '2020/06/18', count: 386 },
  { date: '2020/06/21', count: 816 },
  { date: '2020/06/22', count: 381 },
  { date: '2020/06/23', count: 336 },
  { date: '2020/06/25', count: 664 },
  { date: '2020/06/26', count: 771 },
  { date: '2020/06/28', count: 532 },
  { date: '2020/07/10', count: 623 },
  { date: '2020/07/12', count: 595 },
  { date: '2020/07/14', count: 552 },
  { date: '2020/07/19', count: 424 },
  { date: '2020/07/28', count: 611 },
  { date: '2020/07/29', count: 408 },
  { date: '2020/08/01', count: 458 },
  { date: '2020/08/02', count: 547 },
  { date: '2020/08/08', count: 460 },
  { date: '2020/08/23', count: 465 },
  { date: '2020/10/12', count: 192 },
]

const allCounts = Interval
  .fromDateTimes(
    DateTime.fromFormat('2019/07/28', 'yyyy/MM/dd'),
    DateTime.local()
  )
  .splitBy({ days: 1 })
  .map(d => {
    const date = d.start.toFormat('yyyy/MM/dd')
    const exist = counts.find(i => i.date === date)
    const count = exist ? exist.count : 0
    return {
      date,
      count,
    }
  })

const data = {
  labels: allCounts.map(d => d.date),
  datasets: [
    {
      label: '整理字数',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
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

export default function Statistics() {
  return (
    <div>
      <Line
        data={data}
        width={3}
        height={1}
        options={{
          tooltips: {
            intersect: false,
          },
          scales: {
            xAxes: [{
              ticks: {
                maxTicksLimit: 5,
                maxRotation: 0,
                callback: label => label ? label.substring(0, 7) : label
              }
            }],
          },
        }}
      />
    </div>
  )
}
