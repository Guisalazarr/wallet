export interface Transaction {
    title: string;
    value: number;
    type: TransactionType;
    date: Date;
}

export enum TransactionType {
    Income = 'I',
    Outcome = 'O',
}