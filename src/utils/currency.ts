export const priceToNumber = (priceString: string): number => {
  return Number(priceString.replace('R$ ', '').replace(',', '.'))
}

export const priceToStringBr = (priceNumber: number): string => {
  return priceNumber.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  })
}
