import { Injectable } from '@angular/core';

@Injectable()
export class BookReader
{
    constructor(books: any, state: ReaderState) {
        this.books = books;
        this.state = state || new ReaderState();
    }

    private books: any;
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
        if(++this.state.bookIndex >= this.books.length) {
            this.state.bookIndex = 0;
        }
        this.state.partIndex = 0;
    }

    prevBook() : void {
        if(--this.state.bookIndex < 0) {
            this.state.bookIndex = this.books.length - 1;
        }
        this.state.partIndex = this.currentBook.Parts.length - 1;
    }

    nextPart() : void {
        if(++this.state.partIndex >= this.currentBook.Parts.length) {
            this.nextBook();
        }
        this.state.chapterIndex = 0;
    }

    prevPart() : void {
        if(--this.state.partIndex < 0) {
            this.prevBook();
        }
        this.state.chapterIndex = this.currentPart.Chapters.length - 1;
    }

    nextChapter() : void {
        if(++this.state.chapterIndex >= this.currentPart.Chapters.length) {
            this.nextPart();
        }
    }

    prevChapter() : void {
        if(--this.state.chapterIndex < 0) {
            this.prevPart();
        }
    }
}

export class ReaderState
{
    private _bookIndex: number;
    private _partIndex: number;
    private _chapterIndex: number;
    private _lastUpdated: Date;

    constructor() {
        this.reset();
    }

    get bookIndex() : number { 
        return this._bookIndex;
    }
    set bookIndex(index : number) {
        this._bookIndex = index;
        this.touch();
    }

    get partIndex() : number {
        return this._partIndex;
    }
    set partIndex(index : number) {
        this._bookIndex = index;
        this.touch();
    }

    get chapterIndex() : number {
        return this._chapterIndex;
    }
    set chapterIndex(index: number) {
        this._chapterIndex = index;
        this.touch();
    }

    get lastUpdated() : Date {
        return this._lastUpdated;
    }
    set lastUpdated(date: Date) {
        this._lastUpdated = date;
    }

    private touch() : void {
        this._lastUpdated = new Date();
    }

    private reset() : void {
        this._bookIndex = 0;
        this._partIndex = 0;
        this._chapterIndex = 0;
        this.touch();
    }
}