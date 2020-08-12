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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',             component: DashboardComponent },
    { path: 'user',                  component: UserComponent },
    { path: 'location',              component: MapsComponent },

    { path: 'products',              component: ProductsTableComponent },
    { path: 'products/edit/:id',     component: EditProductComponent},
    { path: 'products/create',       component: AddProductComponent},
    { path: 'products/detail/:id',   component: ProductDetailsComponent},

    { path: 'category',              component: CategoryComponent},
    { path: 'category/edit/:id',     component: EditCategoryComponent},
    { path: 'category/create',       component: AddProductCategoryComponent},

    { path: 'company',               component:CompanyComponent},
    { path: 'company/edit/:id',      component: EditCompanyComponent},
    { path: 'company/create',        component: AddProductCompanyComponent},

    { path: 'purchase',              component: PurchaseComponent},
    { path: 'purchase/create/:id',   component: CreatePurchaseComponent },

    { path: 'vendor',                component: VendorComponent}





];
