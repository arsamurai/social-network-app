export const required = (value) => {
    if(value) return undefined
    return 'Field is required!'
}

export const maxLength = (number) => (value) => {
    if(value.length > number) return `Max length is ${number} sumbols!`
    return undefined
}