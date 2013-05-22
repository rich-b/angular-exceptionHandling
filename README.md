angular-exceptionHandling
=========================

A generic way to handle and log exceptions in angularjs.

Creating a new '$exceptionHandler' service will overwrite the default implementation of $exceptionHandler.  
In this example, the exception is logged to a service residing at /api/error/.  It also uses $log.error() to provide the same behavior as in the default exceptionHandler.
