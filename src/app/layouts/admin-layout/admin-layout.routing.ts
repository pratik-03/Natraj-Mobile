import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { ProductsTableComponent } from 'app/pages/Mobile_Product/products-table/products-table.component';
import { EditProductComponent } from 'app/pages/Mobile_Product/edit-product/edit-product.component';
import { AddProductComponent } from 'app/pages/Mobile_Product/add-product/add-product.component';
import { AddProductCategoryComponent } from 'app/pages/Category/add-product-category/add-product-category.component';
import { AddProductCompanyComponent } from 'app/pages/Company/add-product-company/add-product-company.component';
import { CompanyComponent } from 'app/pages/Company/add-product-company/company/company.component';
import { EditCompanyComponent } from 'app/pages/Company/add-product-company/edit-company/edit-company.component';
import { CategoryComponent } from 'app/pages/Category/category/category.component';
import { EditCategoryComponent } from 'app/pages/Category/edit-category/edit-category.component';
import { ProductDetailsComponent } from 'app/pages/Mobile_Product/product-details/product-details.component';
import { PurchaseComponent } from 'app/pages/purchase/purchase.component';
import { CreatePurchaseComponent } from 'app/pages/purchase/create-purchase/create-purchase.component';
import { VendorComponent } from 'app/pages/vendor/vendor.component';
import { SellComponent } from 'app/pages/sell/sell.component';
import { SellTableComponent } from 'app/pages/sell/sell-table/sell-table.component';
import { SellDetailsComponent } from 'app/pages/sell/sell-details/sell-details.component';
import { ProfitComponent } from 'app/pages/profit/profit.component';
import { LoginComponent } from 'app/pages/user/login/login.component';
import { AuthGuard } from 'app/pages/user/auth.guard';
import { ContactComponent } from 'app/pages/contact/contact.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',             component: DashboardComponent },
    { path: 'user',                  component: UserComponent },
    { path: 'location',              component: MapsComponent },

    { path: 'products',              component: ProductsTableComponent,       canActivate:[AuthGuard]},
    { path: 'products/edit/:id',     component: EditProductComponent,         canActivate:[AuthGuard]},
    { path: 'products/create',       component: AddProductComponent,          canActivate:[AuthGuard]},
    { path: 'products/detail/:id',   component: ProductDetailsComponent,      canActivate:[AuthGuard]},

    { path: 'category',              component: CategoryComponent,            canActivate:[AuthGuard]},
    { path: 'category/edit/:id',     component: EditCategoryComponent,        canActivate:[AuthGuard]},
    { path: 'category/create',       component: AddProductCategoryComponent,  canActivate:[AuthGuard]},

    { path: 'company',               component:CompanyComponent,              canActivate:[AuthGuard]},
    { path: 'company/edit/:id',      component: EditCompanyComponent,         canActivate:[AuthGuard]},
    { path: 'company/create',        component: AddProductCompanyComponent,   canActivate:[AuthGuard]},

    { path: 'purchase',              component: PurchaseComponent,            canActivate:[AuthGuard]},
    { path: 'purchase/create/:id',   component: CreatePurchaseComponent,      canActivate:[AuthGuard] },

    { path: 'vendor',                component: VendorComponent,              canActivate:[AuthGuard]},

    { path: 'sell/create/:id',       component: SellComponent,                canActivate:[AuthGuard]},
    { path: 'sell-table',            component: SellTableComponent,           canActivate:[AuthGuard]},
    { path: 'sell/details/:id',      component: SellDetailsComponent,         canActivate:[AuthGuard]},

    { path: 'profit',                component:ProfitComponent},
    { path: 'login',                 component:LoginComponent},
    { path: 'contact',               component:ContactComponent}

];
