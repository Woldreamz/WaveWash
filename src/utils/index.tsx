export function addComma(number: number){
    let str = number.toString()
    if(str.length === 4){
        str = `${str.slice(0, 1)},${str.slice(1, 4)}`
    }else if(str.length === 5){
        str = `${str.slice(0, 1)},${str.slice(2, 4)}`
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

