# ngRoutesTrasition
Service for Trasition between Routes for Angular2, like page transitions in jQuery Mobile.

## For use the test app:
```
git clone https://github.com/ibuioli/ngRoutesTrasition
npm install
npm start
```
## For use in an existing proyect:

Copy from src/app folder the files ```routestrasitions.service.ts``` and ```trasitions.css``` into your app folder of your Angular 2 proyect (Angular-CLI recommended).

Import the service in your ```app.module.ts```:

```
import { RoutesTransition } from './routestransition.service';
```

Declare the service in your ```app.module.ts```:

```
providers: [RoutesTransition,]
```

Import in the components to use:

```
import { RoutesTransition } from './routestransition.service';
```

Include the ```transitions.css``` in your components:

```
styleUrls: [
  './app.component.css',
  './transitions.css'
],
```

Finally call it in the Constructor:

```constructor(public rtAni: RoutesTransition){}```

## How to use it

First you need to make sure import the Service and ```transition.css``` in your proyect and the components, and right configure of routes (check the example in this repository).
You need put the tag ```<router-outlet></router-outlet>``` into a ```<div></div>``` with id. Then you can call the transition's functions in any tag of your template.

## Transitions Functions

### Functions for Go to Component

```
(click)="rtAni.goFlow('idOfHome','idOfRouterOutlet')"
(click)="rtAni.goSlide('idOfHome','idOfRouterOutlet')"
(click)="rtAni.goSlideUp('idOfHome','idOfRouterOutlet')"
(click)="rtAni.goSlideDown('idOfHome','idOfRouterOutlet')"
(click)="rtAni.goSlideFade('idOfHome','idOfRouterOutlet')"
(click)="rtAni.goFade('idOfHome','idOfRouterOutlet')"
(click)="rtAni.goFlip('idOfHome','idOfRouterOutlet')"
(click)="rtAni.goTurn('idOfHome','idOfRouterOutlet')"
(click)="rtAni.goPop('idOfHome','idOfRouterOutlet')"
```

### Functions for back to Component

```
(click)="rtAni.backFlow('idOfRouterOutlet','idOfHome')"
(click)="rtAni.backSlide('idOfRouterOutlet','idOfHome')"
(click)="rtAni.backSlideFade('idOfRouterOutlet','idOfHome')"
(click)="rtAni.backPop('idOfRouterOutlet','idOfHome')"
```
