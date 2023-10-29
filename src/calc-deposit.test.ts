import { calc } from './calc-deposit';

test('calcDeposit', () => {
    const initialMoney = 5000;
    const percentPerYear = 10.8;
    const totalMonthsForOneDeposit = 3;
    const totalMonths = 12;

    expect(calc(initialMoney, percentPerYear, totalMonthsForOneDeposit, totalMonths)).toEqual([
        {
            interest: 45,
            interests: [],
            investment: 5000,
            month: 1,
            total: 5045
        },
        {
            interest: 45.41,
            interests: [
                45
            ],
            investment: 5045,
            month: 2,
            total: 5090.41
        },
        {
            interest: 45.81,
            interests: [
                45.41,
                45
            ],
            investment: 5090.41,
            month: 3,
            total: 5136.22
        },
        {
            closedDeposit: 5000,
            interest: 91.23,
            interests: [
                45.81,
                45.41,
                45
            ],
            investment: 10136.22,
            month: 4,
            total: 10227.45
        },
        {
            closedDeposit: 5045,
            interest: 92.05,
            interests: [
                91.23,
                45.81,
                45.41
            ],
            investment: 10227.45,
            month: 5,
            total: 10319.5
        },
        {
            closedDeposit: 5090.41,
            interest: 92.88,
            interests: [
                92.05,
                91.23,
                45.81
            ],
            investment: 10319.5,
            month: 6,
            total: 10412.38
        },
        {
            closedDeposit: 10136.22,
            interest: 138.71,
            interests: [
                92.88,
                92.05,
                91.23
            ],
            investment: 15412.38,
            month: 7,
            total: 15551.09
        },
        {
            closedDeposit: 10227.45,
            interest: 139.96,
            interests: [
                138.71,
                92.88,
                92.05
            ],
            investment: 15551.09,
            month: 8,
            total: 15691.05
        },
        {
            closedDeposit: 10319.5,
            interest: 141.22,
            interests: [
                139.96,
                138.71,
                92.88
            ],
            investment: 15691.05,
            month: 9,
            total: 15832.27
        },
        {
            closedDeposit: 15412.38,
            interest: 187.49,
            interests: [
                141.22,
                139.96,
                138.71
            ],
            investment: 20832.27,
            month: 10,
            total: 21019.76
        },
        {
            closedDeposit: 15551.09,
            interest: 189.18,
            interests: [
                187.49,
                141.22,
                139.96
            ],
            investment: 21019.76,
            month: 11,
            total: 21208.94
        },
        {
            closedDeposit: 15691.05,
            interest: 190.88,
            interests: [
                189.18,
                187.49,
                141.22
            ],
            investment: 21208.94,
            month: 12,
            total: 21399.82
        }
    ]);
});

export {};
