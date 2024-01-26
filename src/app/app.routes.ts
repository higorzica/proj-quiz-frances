import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { HeroisComponent } from './pages/quizz/herois/herois.component';
import { ParlefrancaisComponent } from './pages/quizz/parlefrancais/parlefrancais.component';

export const routes: Routes = [
    {'path': '', component: HomeComponent},
    {'path': 'categoria', component: CategoryComponent},
    {'path': 'quizz/herois', component: HeroisComponent},
    {'path': 'quizz/parlefrancais', component: ParlefrancaisComponent},

];
