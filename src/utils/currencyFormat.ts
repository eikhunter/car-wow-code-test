import * as currencyFormatter from 'currency-formatter';

export const currencyFormat = (price: number, currency: string): string => {
    const alteredValue = price;
    return currencyFormatter.format(alteredValue, { code: currency, precision: precision(alteredValue) });
};

const precision = (value: number): number | undefined => (value % 1 === 0 ? 0 : undefined);
