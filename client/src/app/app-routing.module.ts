import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';
import { DatabaseComponent } from './components/database/database.component';


const routes: Routes =
    [
        { path: 'database', component: DatabaseComponent },
        { path: 'collection', component: CollectionComponent },
        { path: '', pathMatch: 'full', redirectTo: 'database' },
        { path: '**', pathMatch: 'full', redirectTo: 'database' }
    ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}