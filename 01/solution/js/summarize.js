const goodNumber = num => Number.isInteger(num) || typeof num == 'bigint'
const bigNumber = num => typeof num == 'bigint' || !Number.isSafeInteger(num)

const summarize = (...numbers) => 
    numbers.reduce( (prev, curr) => 
        !goodNumber(curr) ? prev : ((bigNumber(prev)||bigNumber(curr)) ? BigInt(prev) + BigInt(curr) : prev + curr) )

export default summarize;
