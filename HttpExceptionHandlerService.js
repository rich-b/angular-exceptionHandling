angular.module('CourseEditor').factory('HttpExceptionHandler',
    ['$http',
        function ($http) {
            return {
                LogError: function (response) {

                    var errorObject = {
                        status: response.status,
                        url: response.config.url,
                        verb: response.config.method,
                        data: response.config.data,
                        headers: response.headers()
                    };
                    
                    $http.post('/api/httperror/', errorObject);
                }
            };
        }
    ]
);
