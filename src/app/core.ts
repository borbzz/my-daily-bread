import { Injectable } from '@angular/core';

@Injectable()
export class BookReader
{
    constructor(books: any) {
        this.books = books;
        this.state = new ReaderState();
    }

    private books: any;
    private state: ReaderState;

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

    nextBook() : void {
        if(++this.state.bookIndex > this.books.length) {
            this.state.bookIndex = 0;
        }
        this.state.partIndex = 0;
    }

    nextPart() : void {
        if(++this.state.partIndex > this.currentBook.Parts.length) {
            this.nextBook();
        }
        this.state.chapterIndex = 0;
    }

    nextChapter() : void {
        if(++this.state.chapterIndex > this.currentPart.Chapters.length) {
            this.nextPart();
        }
    }
}

class ReaderState
{
    bookIndex: number = 0;
    partIndex: number = 0;
    chapterIndex: number = 0;
}