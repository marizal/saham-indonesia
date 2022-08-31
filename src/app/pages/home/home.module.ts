import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { ServiceComponent } from './service/service.component';
import { HomeRoutingModule } from './home-routing.module';
import { OjkComponent } from './ojk/ojk.component';
import { PromoComponent } from './promo/promo.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, ServiceComponent, OjkComponent, PromoComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
