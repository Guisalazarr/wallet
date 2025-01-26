
export function toFormatReal(value: number) {
    const formated = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    return formated
}