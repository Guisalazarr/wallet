import moment from "moment";


export function toFormatDate(date: Date) {

    const dateFormated = moment(date).format('DD/MM/YYYY');
    return dateFormated
}
