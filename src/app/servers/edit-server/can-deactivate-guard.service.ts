import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { componentFactoryName } from "@angular/compiler";

export interface canComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class canDeactivateGuard implements CanDeactivate<canComponentDeactivate> {
    canDeactivate(component: canComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate();
        }
}