import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';
import { CycleComponent } from './components/cycle/cycle.component';


const routes: Routes = [
    { path: '', component: HomeComponent, data: { message: 'Hola soy HomeComponent'} },
    { path: 'user/:id', component: UsuarioComponent, children: USUARIO_ROUTES},
    { path: 'cycle', component: CycleComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
