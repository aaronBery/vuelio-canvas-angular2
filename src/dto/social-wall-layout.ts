export class SocialWallLayout {
    name: string;
    imageSource: string;
    deleted: boolean;
    id: number;
    
    constructor(
        name: string = "",
        imageSource: string = "",
        deleted: boolean = false,
        id: number = 0
    ) {
        this.name = name;
        this.imageSource = imageSource;
        this.deleted = deleted;
        this.id = id;
    }
} 