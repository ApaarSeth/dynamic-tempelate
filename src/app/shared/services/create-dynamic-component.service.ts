import { TempelateComponent } from './../../features/demo-component/tempelate-component/tempelate.component';
import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreateDynamicComponentService {
    constructor(private componentFactoryResolver: ComponentFactoryResolver,) { }
    createComponent(data, container: ViewContainerRef) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TempelateComponent);
        const componentRef = container.createComponent<TempelateComponent>(componentFactory);
        componentRef.instance.data = data;
    }
}