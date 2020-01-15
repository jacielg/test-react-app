import { Controller, Body, Post, Get, Param } from '@nestjs/common';

import { BookService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BookService) {}

    @Post()
    addBooks(
        @Body('title') bookTitle: string,
        @Body('author') bookAuthor: string,
        @Body('genre') bookGenre: string,

    ) {
        const generatedId = this.bookService.insertBook(
            bookTitle,
            bookAuthor,
            bookGenre,
        );
        return { id: generatedId }
    }

    @Get()
    getAllBooks(){
        return this.bookService.getBooks();
    }

    @Get(':id')
    getBook(@Param('id') bookId: string) {
        return this.bookService.getSingleBook(bookId);
    }
}