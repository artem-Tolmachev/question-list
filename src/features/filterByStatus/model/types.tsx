type Statuses = 'learned' | 'unlearned' | 'all';

export interface StatusItem {
    id: number;
    status: Statuses;
    label: string; 
}
 