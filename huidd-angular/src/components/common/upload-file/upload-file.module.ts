import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UploadFileComponent } from './upload-file.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UploadFileComponent
    ],
    exports: [
        UploadFileComponent
    ]
})
export class UploadFileModule { }
