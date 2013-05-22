angular.module('CourseEditor').factory('$exceptionHandler',
    ['$injector', '$log',
        function ($injector, $log) {
            return function (exception, cause) {
                var http = $injector.get('$http');
                http.post('/api/error/', { name: exception.name, message: exception.message, cause: cause, trace: exception.stack });
                $log.error(exception);
            };
        }
    ]
);
