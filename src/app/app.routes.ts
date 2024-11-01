import { Routes } from '@angular/router';
import { PaiOuMaeComponent } from '@components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';
import { ContentWrapperComponent } from '@components/content/content-wrapper/content-wrapper.component';
import { ReactiveFormsComponent } from '@components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from '@components/forms/template-driven-forms/template-driven-forms.component';
import { HomeComponent } from '@components/home/home.component';
import { HostElementsComponent } from '@components/host-elements/host-elements.component';
import { LifeCycleWrapperComponent } from '@components/life-cycle/life-cycle-wrapper/life-cycle-wrapper.component';
import { NewComponentComponent } from '@components/new-component/new-component.component';
import { AngularPipesComponent } from '@components/pipes/angular-pipes/angular-pipes.component';
import { SignalsComponent } from '@components/signals/signals/signals.component';
import { TemplateBindingComponent } from '@components/template/template-binding/template-binding.component';
import { TemplateDeferrableViewsComponent } from '@components/template/template-deferrable-views/template-deferrable-views.component';
import { TemplateVariablesComponent } from '@components/template/template-variables/template-variables.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'app-new-component',
        component: NewComponentComponent
    },
    {
        path: 'app-template-binding',
        component: TemplateBindingComponent
    },
    {
        path: 'app-template-variables',
        component: TemplateVariablesComponent
    },
    {
        path: 'app-template-deferrable-views',
        component: TemplateDeferrableViewsComponent
    },
    {
        path: 'app-signals',
        component: SignalsComponent
    },
    {
        path: 'app-pai-ou-mae',
        component: PaiOuMaeComponent
    },
    {
        path: 'app-angular-pipes',
        component: AngularPipesComponent
    },
    {
        path: 'app-template-driven-forms',
        component: TemplateDrivenFormsComponent
    },
    {
        path: 'app-rective-forms',
        component: ReactiveFormsComponent
    },
    {
        path: 'app-content-wrapper',
        component: ContentWrapperComponent
    },
    {
        path: 'app-host-elements',
        component: HostElementsComponent
    },
    {
        path: 'app-life-cycle-wrapper',
        component: LifeCycleWrapperComponent
    },
    {
        path: 'app-consume-service',
        component: ConsumeServiceComponent
    },
];
