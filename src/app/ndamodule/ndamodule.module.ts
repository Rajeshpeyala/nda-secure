
import { DistrubutersBranchesComponent } from "./usermanagement/distrubuters/distrubuters-branches/distrubuters-branches.component";
import { ProfileComponent } from "./profile/profile.component";

import { CompanyDetailsComponent } from "./company-management/approved-companies/company-details/company-details.component";
import { ApprovedCompaniesComponent } from "./company-management/approved-companies/approved-companies.component";
import { RequestsComponent } from "./company-management/requests/requests.component";
import { UnapprovedComponent } from "./company-management/unapproved-companies/unapproved.component";
import { TrackingComponent } from "./tracking/tracking.component";
import { NonassignedconsignmentComponent } from "./tracking/nonassignedconsignment/nonassignedconsignment.component";
import { AssignedconsigmentComponent } from "./tracking/assignedconsigment/assignedconsigment.component";
import { ScanmanagementComponent } from "./scanmanagement/scanmanagement.component";
import { NoBarCodeScansComponent } from "./scanmanagement/no-bar-code-scans/no-bar-code-scans.component";
import { MismatchedScansComponent } from "./scanmanagement/mismatched-scans/mismatched-scans.component";
import { SuccefulscansComponent } from "./scanmanagement/succefulscans/succefulscans.component";
import { UserComponent } from "./usermanagement/user.component";


import { DasboardComponent } from "./dasboard/dasboard.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PieChartComponent } from './pie-charts/pie-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  AddInspectorDialogComponent,
  InspectorsComponent
} from "./usermanagement/inspectors/inspectors.component";
import {
  AddDistrubuterDialogComponent,
  DistrubutersComponent
} from "./usermanagement/distrubuters/distrubuters.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatTabsModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatAutocompleteModule,
  MatInputModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { MenuListItemComponent } from "./main-nav/menu-list-item/menu-list-item.component";
import { ProductManagementComponent } from "./product-management/product-management.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InspectorscanmanagementComponent } from './inspectorscanmanagement/inspectorscanmanagement.component';
import { ToolbarComponent } from "../../toolbar/toolbar.component";
import { RegisteredcompaniesComponent } from "./dasboard/registeredcompanies/registeredcompanies.component";
import { TotalproductsComponent } from "./dasboard/totalproducts/totalproducts.component";
import { ProductdetailsComponent } from "./dasboard/totalproducts/productdetails/productdetails.component";
import { ScaninfoComponent } from "./dasboard/scaninfo/scaninfo.component";
import { FailedscansComponent } from "./dasboard/failedscans/failedscans.component";
import { CompanydetailsComponent } from "./dasboard/registeredcompanies/companydetails/companydetails.component";
import { ViewProductComponent } from "./product-management/view-product/view-product.component";
import { EmailComponent } from "./messaging/email/email.component";
import { SmsComponent } from "./messaging/sms/sms.component";
import {NgxPaginationModule} from 'ngx-pagination';



const routes: Routes = [
  {
    path: "", component: MainNavComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DasboardComponent
      },
      {
        path: "productManagement",
        component: ProductManagementComponent
      },
      {
        path: "productManagement/proddet/:id/:userName",
        component: ViewProductComponent
      },
      {
        path: "dashboard/registered",
        component: RegisteredcompaniesComponent
      },
      {
        path: "dashboard/totalprod",
        component: TotalproductsComponent
      },
      {
        path: "dashboard/totalprod/proddet/:id/:userName",
        component: ProductdetailsComponent
      },
      {
        path: "dashboard/scaninfo",
        component: ScaninfoComponent
      },
      {
        path: "dashboard/failedscan",
        component: FailedscansComponent
      },
      {
        path: "users/distrubuters/:id/:userName/branches",
        component: DistrubutersBranchesComponent
      },
      {
        path: "inspectors", component: InspectorsComponent
      },
      { path: "distributors", component: DistrubutersComponent },

      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "dashboard/registered/:id/:userName",
        component: CompanydetailsComponent
      },
      {
        path: "companymanagement/approvedcomp",
        component: ApprovedCompaniesComponent,

      },
      {
        path: "companymanagement/requests",
        component: RequestsComponent,

      },
      {
        path: "companymanagement/unapproved",
        component: UnapprovedComponent,

      },
      {
        path: "companymanagement/approvedcomp/:id/:userName",
        component: CompanyDetailsComponent
      },
      {
        path: "tracking/assigned",
        component: AssignedconsigmentComponent,
      },
      {
        path: "tracking/notassigned",
        component: NonassignedconsignmentComponent,
      },
      {
        path: "insscanmgmt",
        component: InspectorscanmanagementComponent,
      },
      {
        path: "messaging/sms",
        component: SmsComponent,
      },
      {
        path: "messaging/email",
        component: EmailComponent,
      },
      {
        path: "scanmngmt",
        component: ScanmanagementComponent,

      }]
  },
  {
    path: "",
    redirectTo: 'dashboard',
  },
  {
    path: "**",
    redirectTo: 'dashboard',
  },
];




@NgModule({
  entryComponents: [AddDistrubuterDialogComponent, AddInspectorDialogComponent],


  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgxPaginationModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    DasboardComponent,
    MainNavComponent,
    UserComponent,
    ProfileComponent,
    RegisteredcompaniesComponent,
    TotalproductsComponent,
    CompanydetailsComponent,
    ProductdetailsComponent,
    ScaninfoComponent,
    FailedscansComponent,
    FailedscansComponent,
    InspectorsComponent,
    DistrubutersComponent,
    DistrubutersBranchesComponent,
    AddDistrubuterDialogComponent,
    ScanmanagementComponent,
    SuccefulscansComponent,
    MismatchedScansComponent,
    NoBarCodeScansComponent,
    AddInspectorDialogComponent,
    UnapprovedComponent,
    ApprovedCompaniesComponent,
    RequestsComponent,
    CompanyDetailsComponent,
    TrackingComponent,
    NonassignedconsignmentComponent,
    AssignedconsigmentComponent,
    PieChartComponent
    , MenuListItemComponent,
    ProductManagementComponent,
    InspectorscanmanagementComponent,
    ToolbarComponent,
    ViewProductComponent,
    SmsComponent,
    EmailComponent,
  ]

})

export class NDAmoduleModule { }
