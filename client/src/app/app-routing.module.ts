import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';

const routes: Routes = [
    { path: 'collections', component: CollectionsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'collections' },
    { path: '**', pathMatch: 'full', redirectTo: 'collections' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
