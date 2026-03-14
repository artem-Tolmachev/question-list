export type Rages = '1-3' | '4-6' | '7-8' | '9-10';
export interface ComplexityRange {
    id: number;
    label: Rages,
    range: number[]
}

