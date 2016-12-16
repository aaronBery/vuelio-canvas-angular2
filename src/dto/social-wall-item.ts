import { SocialStatisticsItems } from "./social-statistics-items";
import { SocialProviderType } from "./social-provider-type";
import { SocialProvider } from "./social-provider";
import { Ibo } from "../base/ibo";


export class SocialWallItem {
    name: string;
    socialValue: string = "";
    socialValueSourceUrl: string;
    socialProvider: SocialProvider;
    socialProviderType: SocialProviderType;
    socialStatisticItems: SocialStatisticsItems;
    deleted: boolean;
    ordinality: number;
    id: number;
    isPublic: boolean;
    showName: boolean;
    isContactsWidget: boolean;
    isInfoColumnContent: boolean;
    isAboutUsWidget: boolean;

    constructor(dataObj: any = {}) {
        this.name = dataObj.name || ""; 
        if(dataObj.hasOwnProperty("socialValue"))
            this.socialValue = this.cleanSocialValue(dataObj.socialValue);

        this.socialValueSourceUrl = dataObj.socialValueSourceUrl || "";
        
        if(dataObj.hasOwnProperty("socialProvider"))
            this.socialProvider = new SocialProvider(dataObj.socialProvider);
        
        if(dataObj.hasOwnProperty("socialProviderType"))   
            this.socialProviderType = new SocialProviderType(dataObj.socialProviderType);

        if(dataObj.hasOwnProperty("socialStatisticItems"))
            this.socialStatisticItems = new SocialStatisticsItems(dataObj.socialStatisticItems);
  
        this.deleted = dataObj.deleted || false;
        this.ordinality = dataObj.ordinality || 0;
        this.id = dataObj.id || 0;
        this.isPublic = dataObj.isPublic || true;
        this.showName = dataObj.showName || true;
        this.isContactsWidget = dataObj.isContactsWidget || false;
        this.isInfoColumnContent = dataObj.isInfoColumnContent || false;
        this.isAboutUsWidget = dataObj.isAboutUsWidget || false;
    }
    cleanSocialValue(val: string = "") {
        return val.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, "");
    }
}