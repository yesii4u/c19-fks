type DataType = {
  日付: Date
  小計: number
}

export type GraphDataType = {
  label: string
  transition: number
  cumulative: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const graphData: GraphDataType[] = []
  const today = new Date()
  let patSum = 0
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const date = new Date(d['日付'])
      const subTotal = d['小計']
      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          // label: `${date.getMonth() + 1}/${date.getDate()}`,    //yesii
          label: `${date.getFullYear()}/${('00' + (date.getMonth() + 1)).slice(
            -2
          )}/${('00' + date.getDate()).slice(-2)}`,
          transition: subTotal,
          cumulative: patSum
        })
      }
    })
  return graphData
}
