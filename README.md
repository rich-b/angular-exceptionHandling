angular-exceptionHandling
=========================

A generic way to handle and log exceptions in angularjs.

ExceptionHandlerService.js
--------------------------
This service will handle all angular related exceptions.  
Creating a new '$exceptionHandler' service will overwrite the default implementation of $exceptionHandler.  
In this example, the exception is logged to a service residing at /api/error/.  It also uses $log.error() to provide the same behavior as in the default exceptionHandler.


HttpExceptionHandlerService.js
------------------------------
This service handles any http related errors (404, 500, etc).  These errors will not be handled by ExceptionHandlerService.js because they are not true exceptions.


app.js
------
This is an example of how to tie the httpExceptionHandler in as a response interceptor
