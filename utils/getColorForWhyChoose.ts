export const getColorForWhyChoose = (index: number) => {
  switch (index%4) {
    case 0:
      return ['#01EA88', '#00103C']
    case 1:
      return ['#006CFF', '#fff']
    case 2:
      return ['#FFCE00', '#00103C']
    case 3:
      return ['#FB8351', '#00103C']
    default:
      return ['#0E0E0E', '#fff']
  }
} 