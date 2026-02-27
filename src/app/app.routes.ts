import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { UserComponent } from './components/user/user.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dataBinding',
        pathMatch:'full'
    },
    {
        path:'admin',
        component: AdminComponent
    },
    {
        path:'dataBinding',
        component: DataBindingComponent
    },
    {
        path:'ng-class',
        component: NgClassComponent
    },
    {
        path:'ng-for',
        component: NgForComponent
    }
    ,
    {
        path:'ng-if',
        component: NgIfComponent
    },
    {
        path:'ng-style',
        component: NgStyleComponent
    },
    {
        path:'user',
        component: UserComponent
    },
    {
        path:'control',
        component: ControlStatementComponent
    },
    {
        path:'template-form',
        component: TemplateFormComponent
    },
    {
        path:'reactive-form',
        component: ReactiveFormComponent
    }
];
