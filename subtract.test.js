const subtract = require ('./subtract');

test("Properly subtract two numbers", () => {
    expect
    (subtract(10,2))
    .toBe(8)
})