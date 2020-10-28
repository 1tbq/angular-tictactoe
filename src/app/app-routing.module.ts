import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ShopComponent } from './components/shop/shop.component';
import { CategoriesComponent } from './components/shop/categories/categories.component';
import { PostProductComponent } from './components/shop/post-product/post-product.component';
import { ProfileComponent } from './components/shop/profile/profile.component';
import { SettingsComponent } from './components/shop/settings/settings.component';
import { AddressComponent } from './components/shop/address/address.component';
import { CategoryComponent } from './components/shop/category/category.component';
import { MyProductsComponent } from './components/shop/my-products/my-products.component';
import { ProductComponent } from './components/shop/product/product.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SearchComponent } from './components/shop/search/search.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { MyOrdersComponent } from './components/shop/my-orders/my-orders.component';
import { MyOrderComponent } from './components/shop/my-order/my-order.component';
import { MoneyTrackerComponent } from './components/money-tracker/money-tracker.component';
import { IncomeComponent } from './components/money-tracker/income.component';
import { ExpensesComponent } from './components/money-tracker/expenses.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';
import { SnakeComponent } from './components/snake/snake.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

const appRoutes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'projects', component: ProjectsComponent },



  //tictactoe
  { path: 'tictactoe', component: TictactoeComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


