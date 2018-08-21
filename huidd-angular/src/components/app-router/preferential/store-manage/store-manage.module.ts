import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// 公共模块
import { ButtonLoadingModule } from 'src/components/common/button-loading/button-loading.module';
import { AppPaginationModule } from 'src/components/common/app-pagination/app-pagination.module';
import { CheckbxAllModule } from 'src/components/common/checkbox-all/checkbox-all.module';

// directive
import { DomEllipsisModule } from 'src/directives/dom-ellipsis/auto-visible.module';

// 页面
import { StoreManageComponent } from './store-manage.component';
import { AddComponent } from './add/add.component';
import { AddModule } from './add/add.module';
import { DetailComponent } from './detail/detail.component';
import { DetailModule } from './detail/detail.module';
/*import { ListQueryModule } from './list/list.module'; */

const delayingRortes: Routes = [
    { path: '', component: StoreManageComponent },
    { path: 'add', component: AddComponent },
    { path: 'detail/:id', component: DetailComponent },
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(delayingRortes),
        TooltipModule.forRoot(),
        ButtonLoadingModule,
        AppPaginationModule,
        DomEllipsisModule,
        CheckbxAllModule,
        AddModule,
        DetailModule,
        /* ListQueryModule */
    ],
    declarations: [
        StoreManageComponent
    ]
})
export class StoreManageModule { }
