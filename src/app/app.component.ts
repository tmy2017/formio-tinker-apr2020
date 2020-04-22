import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormioResources } from "angular-formio/resource";
import { FormioAuthService } from "angular-formio/auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "eventmanager";
  constructor(
    // zzDI! zzIntrst ((ℹ️ zzpp._16._y20.0418-1603 ))
    public auth: FormioAuthService,
    private router: Router,
    public resources: FormioResources
  ) {
    // so zzauth is zzobservable (=zzeventemitter?), and it zzsubscribes an zzobserver (=zzrouter)
    // so when observable emits an zzevent of "zzonLogin" (zzAngular), then zzrouter (zzobserver) will zznavigate to that zzpath ((zzlanguage.to.zzmodel.zzconcept-zzDDD ((❇️ zzppp._16._y20.0418-1556 ))))
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(["/"]);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(["/auth/login"]);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(["/"]);
    });
  }
}
