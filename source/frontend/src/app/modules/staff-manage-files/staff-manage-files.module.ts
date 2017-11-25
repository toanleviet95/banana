import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StaffManageFilesContentComponent } from './components/staff-manage-files-content/staff-manage-files-content.component';
import { LeftSideBarComponent } from '../../shared/components/left-side-bar/left-side-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LeftSideBarComponent,
        StaffManageFilesContentComponent
    ],
    providers: []
})

export class StaffManageFilesModule { }
