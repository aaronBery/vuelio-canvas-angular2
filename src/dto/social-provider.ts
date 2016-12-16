export class SocialProvider {
    name: string;
    imageSource: string;
    fontAwesomeClass: string;
    useFontAwesome: boolean;
    contentSource: string;
    contentPlaceHolder: string;
    deleted: boolean;
    id: number;

    constructor(
        name: string = "",
        imageSource: string = "",
        fontAwesomeClass: string = "",
        useFontAwesome: boolean = false,
        contentSource: string = "",
        contentPlaceHolder: string = "",
        deleted: boolean = false,
        id: number = 0
    ) {
        this.name = name;
        this.imageSource = imageSource;
        this.fontAwesomeClass = fontAwesomeClass;
        this.useFontAwesome = useFontAwesome;
        this.contentSource = contentSource;
        this.contentPlaceHolder = contentPlaceHolder;
        this.deleted = deleted;
        this.id = id;
    }
}