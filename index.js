

const sum = (a, b) => a + b;

test('it sums two numbers', () => {
    const result = sum (5, 5)
    const expected = 10;
    expect(result).toBe(expected);
})

test('it not sums two numbers', () => {
    const result = sum (5, 5)
    const expected = 5;
    expect(result).toBe(expected);
})

function test(title, callback) {
    try {
        callback()
        console.log(`✅ ${title}`)
    } catch (error) {
        console.error(`❌ ${title}`)
        console.error(error)
    }
}

function expect(current) {
    return {
        toBe(expected) {
            if (current !== expected) {
                throw new Error(`${current} is not equal to ${expected}`)
            }
        }
    }
}
