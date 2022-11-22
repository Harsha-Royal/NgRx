import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./state/auth.selector";
import { AuthReducer } from "./state/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth.effects";
import { SignupComponent } from "./sign-up/sign-up.component";

const routes : Routes =[
    {
        path:'',
        children:[
            {path:'',redirectTo:'login',pathMatch:'full'},
            {path:'login',component:LoginComponent},
            {path:'signUp',component:SignupComponent}
        ]
    }
]

@NgModule({

    declarations:[LoginComponent],
    imports: [CommonModule,ReactiveFormsModule,RouterModule.forChild(routes),StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),EffectsModule.forFeature([AuthEffects]),FormsModule],
})

export class AuthModule{}