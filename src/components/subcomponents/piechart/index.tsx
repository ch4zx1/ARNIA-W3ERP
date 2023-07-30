import { ChartType } from '@/config/types'
import { PieChart, Pie } from 'recharts'

export default function Chart({ percentual }: ChartType) {
  const number = percentual
  const data = [
    {
      value: percentual,
      fill: '#000E4D;'
    },
    {
      value: 360 - percentual,
      fill: '#796CE0'
    }
  ]

  return (
    <PieChart width={120} height={130}>
      <Pie
        data={data}
        dataKey="value"
        cornerRadius={0}
        innerRadius={40}
        outerRadius={52}
        cx={63}
        cy={57}
        stroke="none"
      />
    </PieChart>
  )
}
