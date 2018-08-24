import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';


// 公共模块
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { GoBackModule } from 'src/components/common/go-back/go-back.module';
import { WrapFormModule } from 'src/components/common/wrap-form/wrap-form.module';

// 页面
import { EditComponent } from './edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ButtonLoadingModule,
        GoBackModule,
        WrapFormModule,
    ],
    declarations: [
        EditComponent
    ],
    exports: [
        EditComponent
    ]
})
export class EditModule { }