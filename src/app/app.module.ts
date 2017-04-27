/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { EditorModule } from './editor/editor.module';
// import { ArticleModule } from './article/article.module';
import {
    ApiService,
      ArticlesService,
    AuthGuard,
    //   CommentsService,
    FooterComponent,
    HeaderComponent,
    JwtService,
    //   ProfilesService,
    SharedModule,
    //   TagsService,
    UserService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

/**
 * Top-level NgModule "container"
 */
@NgModule({
    /** Root App Component */
    bootstrap: [AppComponent],
    /** Our Components */
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
    ],
    imports: [
        /**
         * NOTE: Needs to be your first import (!)
         * NodeModule, NodeHttpModule, NodeJsonpModule are included
         */
        UniversalModule,
        FormsModule,
        AuthModule,
        rootRouting,
        SharedModule,
        HomeModule,
        EditorModule,
        /**
         * using routes
         */
        // RouterModule.forRoot(appRoutes)
    ],
    providers: [
        ApiService,
        AuthGuard,
        JwtService,
        UserService,
        ArticlesService,
    ]
})
export class AppModule {

}
