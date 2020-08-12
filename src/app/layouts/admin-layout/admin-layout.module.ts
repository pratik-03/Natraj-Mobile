import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsTableComponent } from 'app/pages/Mobile_Product/products-table/products-table.component';
import { HttpClientModule} from '@angular/common/http';
import { LoadingSpinnerModule } from 'app/shared/loading-spinner/LoadingSpinner.Module';
import { EditProductComponent } from 'app/pages/Mobile_Product/edit-product/edit-product.component';
import { PopupComponent } from 'app/pages/popup/popup.component';
import { AddProductComponent } from 'app/pages/Mobile_Product/add-product/add-product.component';
import { SlidingComponent } from 'app/pages/sliding/sliding.component';
import { AgmCoreModule } from '@agm/core';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AddProductCompanyComponent } from 'app/pages/Company/add-product-company/add-product-company.component';
import { AddProductCategoryComponent } from 'app/pages/Category/add-product-category/add-product-category.component';
import { CompanyComponent } from 'app/pages/Company/add-product-company/company/company.component';
import { FlxUiDatatableModule, FlxUiDataTable} from 'flx-ui-datatable';

// Scroll
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { EditCompanyComponent } from 'app/pages/Company/add-product-company/edit-company/edit-company.component';
import { EditCategoryComponent } from 'app/pages/Category/edit-category/edit-category.component';
import { CategoryComponent } from 'app/pages/Category/category/category.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from "ngx-pagination";
import { ShortenPipe } from 'app/pages/Mobile_Product/shorten.pipe';
import { PurchaseComponent } from 'app/pages/purchase/purchase.component';
import { CreatePurchaseComponent } from 'app/pages/purchase/create-purchase/create-purchase.component';
import { VendorComponent } from 'app/pages/vendor/vendor.component';






const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    LoadingSpinnerModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCOiUajllfrO5dU70rCKxThGrL4cwjls9Q'
    }),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    }),
    FlxUiDatatableModule,
    PerfectScrollbarModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    MapsComponent,
    ProductsTableComponent,
    EditProductComponent,
    PopupComponent,
    AddProductComponent,
    AddProductCategoryComponent,
    AddProductCompanyComponent,
    SlidingComponent,
    CompanyComponent,
    EditCompanyComponent,
    EditCategoryComponent,
    CategoryComponent,
    ShortenPipe,
    PurchaseComponent,
    CreatePurchaseComponent,
    VendorComponent
  ],
  providers:[
    FlxUiDataTable,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
 })

export class AdminLayoutModule {}
