export const formatPrice = (price: number, type: 'rent' | 'sale'): string => {
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  if (type === 'rent') {
    return `${formatter.format(price)} pcm`;
  }

  return formatter.format(price);
};