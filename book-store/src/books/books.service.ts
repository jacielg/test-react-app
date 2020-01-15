  
import { Injectable, NotFoundException } from '@nestjs/common';

import { Book } from './books.model';

@Injectable()
export class BookService {
    private books: Book[] = [];

    insertBook(title: string, auth: string, gen: string) {
        const bookId = Math.random().toString();
        const newBook = new Book(bookId, title, auth, gen);
        this.books.push(newBook);
        return bookId;
    }
    
    getBooks() {
        return [...this.books];
    }

    getSingleBook(bookId: string) {
        const book = this.findBook(bookId)[0];
        return { ...book };
    }

    private findBook(id: string): [Book, number] {
        const bookIndex = this.books.findIndex(boo => boo.id === id);
        const book = this.books[bookIndex];
        if (!book) {
          throw new NotFoundException('Could not find product.');
        }
        return [book, bookIndex];
    }
}