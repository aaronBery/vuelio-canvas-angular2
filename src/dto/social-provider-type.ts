export class SocialProviderType {
    name: string;
    deleted: boolean;
    id: number;
    constructor(
        name: string = "",
        deleted: boolean = false,
        id: number = 0
    ) {
        this.name = name;
        this.deleted = deleted;
        this.id = id;
    }
}