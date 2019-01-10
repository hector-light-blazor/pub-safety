import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'lv', loadChildren: './department/lv/lv.module#LvPageModule' },
  { path: 'gis', loadChildren: './department/gis/gis.module#GisPageModule' },
  { path: 'system', loadChildren: './department/system/system.module#SystemPageModule' },
  { path: 'pubed', loadChildren: './department/pubed/pubed.module#PubedPageModule' },
  { path: 'training', loadChildren: './department/training/training.module#TrainingPageModule' },
  { path: 'db', loadChildren: './department/db/db.module#DbPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
