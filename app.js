myApp.config(
    ['$httpProvider', 
        function ($httpProvider) {
            var interceptor = ['$injector',
                function ($injector) {

                function success(response) {
                    return response;
                }

                function error(response) {
                    var httpExceptionHandler = $injector.get('HttpExceptionHandler');
                    httpExceptionHandler.LogError(response);
                }

                return function(promise) {
                    return promise.then(success, error);
                };

            }];
            $httpProvider.responseInterceptors.push(interceptor);
        }
    ]
);
