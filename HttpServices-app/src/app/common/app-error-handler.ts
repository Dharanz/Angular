import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error){
        alert('Error occured!');
        console.log(error);
    }
}