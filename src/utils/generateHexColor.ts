export function generateHEXRandomColor(){

    const hexValues = ['A', 'B', 'C', 'D', 'E', 'F']
    const numbersValues = [1,2,3,4,5,6,7,8,9,0]
    const randomHex1 = hexValues[Math.floor(Math.random() * hexValues.length)]
    const randomNumber1 = String(numbersValues[Math.floor(Math.random() * numbersValues.length)])
    const randomHex2 = hexValues[Math.floor(Math.random() * hexValues.length)]
    const randomNumber2 = String(numbersValues[Math.floor(Math.random() * numbersValues.length)])
    const randomHex3 = hexValues[Math.floor(Math.random() * hexValues.length)]
    const randomNumber3 = String(numbersValues[Math.floor(Math.random() * numbersValues.length)])

     const hexColor = "#" +
        randomHex1 + randomNumber1 + 
        randomHex2 + randomNumber2 + 
        randomHex3 + randomNumber3 
    return	hexColor

}