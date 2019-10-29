import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileService } from './upload/upload-file.service';

@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
