
describe("calculateMonthlyPayment", function() {
  it("calculates the monthly payment when given valid input values", function() {
    const values = {
      amount: 10000,
      years: 5,
      rate: 5
    };
    const expectedMonthlyPayment = "188.71";
    const result = calculateMonthlyPayment(values);
    expect(result).toEqual(expectedMonthlyPayment);
  });

  it("returns 0 when the amount is 0", function() {
    const values = {
      amount: 0,
      years: 5,
      rate: 5
    };
    const expectedMonthlyPayment = "0.00";
    const result = calculateMonthlyPayment(values);
    expect(result).toEqual(expectedMonthlyPayment);
  });

  it("returns 'NaN' when given an invalid input", function() {
    const values = {
      amount: 10000,
      years: 5,
      rate: "invalid"
    };
    const expectedMonthlyPayment = "NaN";
    const result = calculateMonthlyPayment(values);
    expect(result).toEqual(expectedMonthlyPayment);
  });

it("should have 2 decimals always", function() {
const values = {
  amount: 1000,
  years: 7,
  rate: 4.71
};
const expectedMonthlyPayment = "14.00"
const result = calculateMonthlyPayment(values);
expect(result).toEqual(expectedMonthlyPayment);
});
});