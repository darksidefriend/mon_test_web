export interface TutorialRule{
    id : number;
    mainHeader : string | null;
    mainText : string | null;
    mainImageSrc : string | null;
    mainRedText : {boxSymbol : string, actionText : string} | null;
    subText : string | null;
    subImageSrc : string | null;
}