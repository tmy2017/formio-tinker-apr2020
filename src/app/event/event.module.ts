import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from "angular-formio/resource";
import { RegisterModule } from "./register/register.module";
import { ResourceComponent } from "./resource/resource.component";
import { ViewComponent } from "./view/view.component";
// zzDiff from zzTutorial! here zzconfig the zzresource.routes zzformio! to zzcustomize more? zzQQQ ((ℹ️ zzpp._16._y20.0418-1626))
const eventRoutes: Routes = FormioResourceRoutes({
  resource: ResourceComponent,
  /* 
    zzMentalModel-zzFrontSeat-zzIntuition.of.zzConcept so if u do not give zzroutes then will just use the zzformio basic, but u can zzextend it with your own zzview zzComponent! 
    >> but that "view" should be zzapi - by zzformio! ((❇️ zzppp._16._y20.0418-1656 
    zzHowTo zzcore-zzconcept zzPowerful zzformioresourceservice zzrouterModule (not even zzprovider needed! zzgotcha-zzgosh-zzdev-zzcareful
  */
  view: ViewComponent
});

/*and the zzview.zzComponent is really zzindent zzunder the zzresource zzMakeSense! ((ℹ️ zzpp._16._y20.0418-2351 zzfinally-zzconclude
  >> so view is zzchildren of zzresource! for the zzroutemodule zzTmy 
  resource the zzsyntax zzMentalModel-zzFrontSeat-zzIntuition.of.zzConcept zzhierarchy ((❇️ zzppp._16._y20.0418-2356 */
eventRoutes[2].children.push({
  path: "registrations",
  loadChildren: () => RegisterModule
});

@NgModule({
  declarations: [ResourceComponent, ViewComponent],
  // in tutorial just "FormioResourceRoutes()" ((⚪️ zzp._16._y20.0418-1627))
  imports: [CommonModule, FormioResource, RouterModule.forChild(eventRoutes)],
  providers: [
    FormioResourceService,
    {
      // 🚨 zzcore-zzconcept ((ℹ️ zzpp._16._y20.0418-1821 zznested.zzresource))
      provide: FormioResourceConfig,
      useValue: {
        name: "event",
        form: "event"
      }
    }
  ]
})
export class EventModule {}
