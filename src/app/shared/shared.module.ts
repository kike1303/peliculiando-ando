import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { FooterPageComponent } from '../components/footer-page/footer-page.component';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageCardComponent } from '../components/message-card/message-card.component';

@NgModule({
  declarations: [TopBarComponent, FooterPageComponent, MessageCardComponent],
  imports: [CommonModule, ButtonModule, SplitButtonModule],
  exports: [
    TopBarComponent,
    FooterPageComponent,
    ButtonModule,
    MessageCardComponent,
  ],
})
export class SharedModule {}
