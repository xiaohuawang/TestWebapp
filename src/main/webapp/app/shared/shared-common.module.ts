import { NgModule } from '@angular/core';

import { HelloSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HelloSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HelloSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HelloSharedCommonModule {}
