export class SocialStatisticsItems {
    name: string;
    statisticsValue: string;
    numericalValue: number;
    percentageValue: number;
    useFontAwesome: boolean;
    fontAwesomeClass: string;
    displayColor: string;
    deleted: boolean;
    id: number;

    constructor(
        name: string = "",
        statisticsValue: string = "",
        numericalValue: number = 0,
        percentageValue: number = 0,
        useFontAwesome: boolean = false,
        fontAwesomeClass: string = "",
        displayColor: string = "",
        deleted: boolean = false,
        id: number = 0
    ) {
        this.name = name;
        this.statisticsValue = statisticsValue;
        this.numericalValue = numericalValue;
        this.percentageValue = percentageValue;
        this.useFontAwesome = useFontAwesome;
        this.fontAwesomeClass = fontAwesomeClass;
        this.displayColor = displayColor;
        this.deleted = deleted;
        this.id = id;
    }
}