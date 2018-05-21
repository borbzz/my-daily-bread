import { Injectable } from '@angular/core';

@Injectable()
export class BookReader
{
    constructor(books: any, state: ReaderState) {
        this.books = books;
        this.state = state || new ReaderState();
    }

    public books: any;
    public state: ReaderState;

    get currentChapter() {
        return this.currentPart
            .Chapters[this.state.chapterIndex];
    }

    get currentPart() {
        return this.currentBook
            .Parts[this.state.partIndex];
    }

    get currentBook() {
        return this.books[this.state.bookIndex];
    }

    get lastRead() : Date {
        return this.state.lastUpdated;
    }

    nextBook() : void {
        this.state.touch();
        if(++this.state.bookIndex >= this.books.length) {
            this.state.bookIndex = 0;
        }
        this.state.partIndex = 0;
    }

    prevBook() : void {
        this.state.touch();
        if(--this.state.bookIndex < 0) {
            this.state.bookIndex = this.books.length - 1;
        }
        this.state.partIndex = this.currentBook.Parts.length - 1;
    }

    nextPart() : void {
        this.state.touch();
        if(++this.state.partIndex >= this.currentBook.Parts.length) {
            this.nextBook();
        }
        this.state.chapterIndex = 0;
    }

    prevPart() : void {
        this.state.touch();
        if(--this.state.partIndex < 0) {
            this.prevBook();
        }
        this.state.chapterIndex = this.currentPart.Chapters.length - 1;
    }

    nextChapter() : void {
        this.state.touch();
        if(++this.state.chapterIndex >= this.currentPart.Chapters.length) {
            this.nextPart();
        }
    }

    prevChapter() : void {
        this.state.touch();
        if(--this.state.chapterIndex < 0) {
            this.prevPart();
        }
    }
}

export class ReaderState
{
    public bookIndex: number;
    public partIndex: number;
    public chapterIndex: number;
    public lastUpdated: Date;
    public readChapters: any;

    constructor(anyObject : any = null) {
        if (anyObject) {
            this.bookIndex = anyObject.bookIndex || 0;
            this.chapterIndex = anyObject.chapterIndex || 0;
            this.partIndex = anyObject.partIndex || 0;
            this.lastUpdated = anyObject.lastUpdated || new Date();
            this.readChapters = anyObject.readChapters || {};
        }
        else { 
            this.reset();
        }
    }

    public isRead() : boolean {
        return !!this.readChapters[this.getKey()];
    }

    public touch() : void {
        this.lastUpdated = new Date();
        this.readChapters[this.getKey()] = true;
    }

    public unread() : void {
        this.readChapters[this.getKey()] = false;
    }

    private reset() : void {
        this.bookIndex = 0;
        this.partIndex = 0;
        this.chapterIndex = 0;
        this.readChapters = {};
        this.touch();
    }

    private getKey() : string {
        return ReaderState.getKey(this.bookIndex, this.partIndex, this.chapterIndex);
    }

    private static getKey(bookIndex, partIndex, chapterIndex) : string {
        return `${bookIndex}:${partIndex}:${chapterIndex}`;
    }
}