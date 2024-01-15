export function addComma(number: number){
    let str = number.toString()
    if(str.length > 4){
        str = `${str.slice(0, 0)},${str.slice(1, 3)}`
    }
    return str
}

export const afterThree = (number: number) => {
    let str = number.toString()
    let length = str.length
    if (str.length > 3){
        let start = str.length - 3
    }
    return str
}

