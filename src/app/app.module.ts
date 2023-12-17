import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MoreProyectsComponent } from './components/more-proyects/more-proyects.component';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { ArticleComponent } from './components/list-articles/article/article.component';
import { ContactComponent } from './shared/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProyectsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    MoreProyectsComponent,
    ListArticlesComponent,
    ArticleComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
