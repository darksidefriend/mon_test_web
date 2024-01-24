export interface PlayingCard{
    id : number;
    name : string;
    type : 'property' | 'action' | 'money';
    color : 'brown' | 'light-blue' | 'pink' | 'orange' | 'red' | 'yellow' | 'green' | 'blue' | 'station' | 'utility' | 'multicolor' | '1m' | '2m' | '3m' | '4m' | '5m' | '10m' | null;
    secondaryColor : 'brown' | 'light-blue' | 'pink' | 'orange' | 'red' | 'yellow' | 'green' | 'blue' | 'station' | 'utility' | null;
    value : number;
    rent : number | null;
}