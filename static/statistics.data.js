const data = [
  { date: '2019/03/11', count: 1 },
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
]

const statistics = {}

data.forEach( item => {
  statistics[new Date(item.date).getTime() / 1000] = item.count
})

export default statistics
