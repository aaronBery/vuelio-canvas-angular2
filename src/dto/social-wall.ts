import { Ibo } from "../base/ibo";
import { SocialWallItem } from "./social-wall-item";
import { SocialWallLayout } from "./social-wall-layout";
 
export class SocialWall {
    deleted: boolean;
    name: string;
    socialWallLayout: any;
    socialWallItems: any[];
    publishedDate: string;
    imageSource: string;
    isPublic: boolean;
    id: number;
    visibility: string;
    visibilityUserId: number;
    visibilityClientId: number;
    editable: boolean;
    slug: string;
    path: string;
    iboItems: Ibo<any>;

    constructor(
        deleted: boolean = false,
        name: string = '',
        socialWallLayout: any = new SocialWallLayout(),
        socialWallItems: any[] = [],
        publishedDate: string = new Date().toLocaleDateString(),
        imageSource: string = "",
        isPublic: boolean = false,
        id: number = 1,
        visibility: string = "None",
        visibilityUserId: number = 0,
        visibilityClientId: number = 0,
        editable: boolean = true,
        slug: string = "",
        path: string = ""
        ) {
        this.deleted = deleted;
        this.name = name;
        this.socialWallLayout = socialWallLayout;
        this.socialWallItems = socialWallItems;
        this.publishedDate = publishedDate;
        this.imageSource = imageSource;
        this.isPublic = isPublic;
        this.id = id;
        this.visibility = visibility;
        this.visibilityClientId = visibilityClientId;
        this.editable = editable;
        this.slug = slug;
        this.path = path;
        this.iboItems = new Ibo(this.convertToItems(socialWallItems));
    }
    getWallItemsArray() {
        return this.iboItems.toArray();
    }
    getNewItemId() {
        return this.iboItems.resultCount();    
    }
    convertToItems(items: any[] = []) {
        let newItems = [];
        items.forEach(element => {
            newItems.push(new SocialWallItem(element));
        });
        return newItems;
    }
}
