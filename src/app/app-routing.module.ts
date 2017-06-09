import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';

const routes: Routes = [
    { path: 'collection', component: CollectionComponent },
   // { path: '', pathMatch: 'full', redirectTo: 'collection' }
    //{ path: '**', pathMatch: 'full', redirectTo: 'collection'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

