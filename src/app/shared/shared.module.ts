import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PartnerComponent } from './components/partner/partner.component';

const components = [
  HeaderComponent,
  FooterComponent,
  NotFoundComponent,
  PartnerComponent,
];

@NgModule({
  declarations: [...components, PartnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class SharedModule {}
