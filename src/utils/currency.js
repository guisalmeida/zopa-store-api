export const priceToNumber = priceString => {
  return Number(priceString.replace('R$ ', '').replace(',', '.'))
}

export const priceToStringBr = priceNumber => {
  return priceNumber.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  })
}
