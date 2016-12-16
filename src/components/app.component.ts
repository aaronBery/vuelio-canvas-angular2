import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Ibo } from "../base/ibo";
import { SocialWall } from "../dto/social-wall";
import { SocialWallItem } from "../dto/social-wall-item";
import { HttpModule, JsonpModule } from '@angular/http';
import { SocialWallSerivce } from "../services/social-wall-service";
import { EmitterService } from "../services/emitter-service";

let socialWallSerivce = SocialWallSerivce;
let wallObj: SocialWall = new SocialWall();
let title: string = "Vuelio Canvas";

@Component({
  selector: 'app-root',
  templateUrl: '../templates/social-wall-items-editor-dashboard.html',
  styleUrls: ['../css/app.component.css']
})

export class AppComponent implements OnInit, OnChanges{
  title: string = title;
  wallObj: SocialWall = wallObj;
  userToken: string = 
  "p0NgG2Y98RFhBY8ybP6qQ-MnWpnApsnpP87T3r15C2h1BmW0uU08kqY1j_UbseY3BYDBFO_f8p4tOWb4n3vr-_oQjajpNgiWMK7mwOePcvKJ_lTToERLF_GLI4N72JnVPkKkzVopdu_ycSvbhm5ljGhFxdFFmOLuBu6oJRdCDM_WCFGK8qWb_1TT-WCqz1cFSkotVDs8aLh2PhrtYMcSZX6QSv6uNg0Zn-EPtTZeQ46XGSed92jSFwPe2P3L4V9hBfBHQVy2H2Pw8cTqDMQe4RUQz6NCkmtsArPRL3tIqXMA7nfN0ZKZuJWPJ_hqe0Rya0RNVE0hjztUBXMfVx6uLRAeLHarT1v_7RtoketUp9toG5N4-ZOv-BvlZFNQuPV0jVYKBTLvYDbmP92YlL7Tusnk9WPzUBrOJ6Ji4u_iWUli6mZwJTBmeJWSPBrDD_SHgJ72_OBGEONDXMTXMugyj_pMm0k4YPsynsN9ssL28J2GWA_5NGQlUV6M72BaDU5QqAbY6j5XPFilOLROxuiHG6P6JU9B1axjGmqw21fQ--UsZJRU2neqBqY7IlSbkKKVmmx0cPAZabqMJhn54WMl8wM3qws2WQTrwpQVmmncryRVMZkf7XtKQKeE2sUWJ1RdL8twwZfvy-qHitPkSvhNOmehMjrJ5_Wjp-_EKQgBca91oG5ptMpB-DBy9tkZraDZlhZaSWP3E2RO4Tf4n4qc5F4awkq04zrkZXrGnDC6n2dLKegqfea66cgaVgC-u4rRM9gL9TAX3mf0w22J-POAkw";

  constructor(private socialWallSerivce: SocialWallSerivce) { }
  ngOnInit(): void {
    this.socialWallSerivce.getWall(this.userToken, 9)
      .subscribe(
          wall => this.updateSocialWall(wall),
        error => {
          console.log(error)
        }
      );
  }
  ngOnChanges(changes:any) {
    console.log(wallObj);
  }
  updateSocialWall(wall: any = {}) {
    this.wallObj = new SocialWall(
      wall.deleted,
      wall.name,
      wall.socialWallLayout,
      wall.socialWallItems,
      wall.publishedDate,
      wall.imageSource,
      wall.isPublic,
      wall.id,
      wall.visibility,
      wall.visibilityUserId,
      wall.visibilityClientId,
      wall.editable,
      wall.slug,
      wall.path
    );
  }
}
