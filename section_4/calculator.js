"use strict";
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "initial Amount should be at least zero";
    }
    if (duration <= 0) {
        return "Duration should be at least a year";
    }
    if (expectedReturn < 0) {
        return "Expected return must be atleast zero";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    let annualResult = [];
    for (let i = 0; i < duration; i++) {
        total *= (1 + expectedReturn);
        totalInterestEarned = total - initialAmount - totalContributions;
        totalContributions += annualContribution;
        total += totalContributions;
        annualResult.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResult;
}
function printResult(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total Amount : ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Interest Earned : ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log(`Total Contributions Earned : ${yearEndResult.totalContributions.toFixed(0)}`);
    }
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.1,
    duration: 10
};
const result = calculateInvestment(investmentData);
printResult(result);
