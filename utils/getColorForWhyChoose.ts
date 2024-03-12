export const getColorForWhyChoose = (index: number) => {
  switch (index%4) {
    case 0:
      return ['#0CFF00', '#000']
    case 1:
      return ['#0E0E0E', '#fff']
    case 2:
      return ['#079800', '#fff']
    case 3:
      return ['#1F7D1B', '#fff']
    default:
      return ['#0E0E0E', '#fff']
  }
} 