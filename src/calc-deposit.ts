export function calc(
    initialMoney: number,
    percentPerYear: number,
    totalMonthsForOneDeposit: number,
    totalMonths: number
): Deposit[] {
    const percentPerMonth = percentPerYear / 12;
    const deposits: Deposit[] = []

    for (let month = 1; month <= totalMonths; month++) {
        const index = month - 1;

        let investment = initialMoney;
        let interests: number[] = [];
        for (let i = 1; i <= totalMonthsForOneDeposit; i++) {
            let interest = deposits[index - i]?.interest;
            if (interest) {
                investment += interest;
                interests.push(interest);
            }
        }

        let closedDeposit;
        if (month > totalMonthsForOneDeposit) {
            closedDeposit = deposits[index - totalMonthsForOneDeposit]?.investment || 0
            investment += closedDeposit;
        }

        investment = roundDownToTwoDecimals(investment);
        const interest = roundDownToTwoDecimals(investment * percentPerMonth / 100);
        const total = roundDownToTwoDecimals(investment + interest);

        deposits.push({
            month,
            investment,
            interest,
            total,
            closedDeposit,
            interests
        })
    }

    return deposits;
}

function roundDownToTwoDecimals(num: number) {
    let rounded = Number(num.toFixed(2));
    return rounded;
}

export interface Deposit {
    month: number;
    investment: number;
    interest: number;
    total: number;
    closedDeposit?: number;
    interests: number[];
}

