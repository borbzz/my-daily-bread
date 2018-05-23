import { Routes } from '@angular/router';

import { ReaderStateResolver } from './reader/reader.component';
import { ChapterComponent } from './chapter/chapter.component';

let routes : Routes = [

    // chapter route
    {
        path: 'books/:bookId',
        //component: BookComponent,
        children: [{
            path: 'parts/:partId',
            // component: PartComponent,
            children: [{
                path: 'chapters/:chapterId',
                component: ChapterComponent,
                resolve: { readerState: ReaderStateResolver }
            }]
        }]
    }
];

export default routes;