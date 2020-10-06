angular.module('app').controller('storeController', function ($scope, $http) {
    const contextPath = 'http://localhost:8189/market';

    $scope.fillTable = function () {
        console.log('fill');
        $http.get(contextPath + '/api/v1/products')
            .then(function (response) {
                $scope.Products = response.data;
                if($scope.productFilter != null){
                    $scope.productFilter.title = null;
                    $scope.productFilter.price = null;
                }
            });
    };

     $scope.applyFilter = function () {
         $http({
             url: contextPath + '/api/v1/products',
             method: 'GET'
         }).then(function (response) {
            var filter_title = $scope.productFilter != null ? $scope.productFilter.title.toLowerCase() : '';
            var filter_price = $scope.productFilter != null ? $scope.productFilter.price : 0;
            if((filter_title.trim().length > 0) && (filter_price > 0)){
                $scope.Products = [];
                angular.forEach(response.data, function(value, key){
                    if((value.title.toLowerCase().indexOf(filter_title) != -1) && (value.price == filter_price))
                        $scope.Products.push(value);
                });
            }
         });
     };

    $scope.submitCreateNewProduct = function () {
        $http.post(contextPath + '/api/v1/products', $scope.newProduct)
            .then(function (response) {
                // $scope.Products.push(response.data);
                $scope.newProduct = null;
                $scope.fillTable();
            });
    };

    $scope.fillTable();
});