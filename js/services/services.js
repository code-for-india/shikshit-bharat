myApp.factory('callApi', ['$http', function ($http) {
    var _callApi = function (url, method, data) {
        var response, finalData;
        if (data) {
            finalData = data;
            url = url + finalData;
        }
        if (method === 'GET') {
            response = $http.get(url);
        } else if (method === 'POST') {
            response = $http.post(url);
        }

        return response;
    };

    return {
        callApi: _callApi
    }
}]);