import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'prices',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../prices/prices.module').then(m => m.PricesPageModule)
          }
        ]
      },
      {
        path: 'shop-demo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shop-demo/shop-demo.module').then(m => m.ShopDemoPageModule)
          }
        ]
      },
      {
              path: 'settings',
              children: [
                {
                  path: '',
                  loadChildren: () =>
                    import('../settings/settings.module').then(m => m.SettingsPageModule)
                }
              ]
            },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
