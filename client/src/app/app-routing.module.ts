import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';
import { DatabaseComponent } from './components/database/database.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes =
    [
        { path: 'database', component: DatabaseComponent },
        { path: 'collection', component: CollectionComponent },
        { path: 'about', component: AboutComponent},
        { path: '', pathMatch: 'full', redirectTo: 'database' },
        { path: '**', pathMatch: 'full', redirectTo: 'database' }
    ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}