import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HelloBlogModule } from './blog/blog.module';
import { HelloEntryModule } from './entry/entry.module';
import { HelloTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        HelloBlogModule,
        HelloEntryModule,
        HelloTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelloEntityModule {}
