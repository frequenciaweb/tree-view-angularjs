var app = angular.module('app',[]);


app.controller("AppController",['$scope', ($scope) => {
  
    $scope.message = "Angular Rodando";
    $scope.nodes = [];

     var contadorGeral = 0;

    var random = function obterArbitrarioAleatorio(min, max) {
        return Math.random() * (max - min) + min;
      }

    $scope.nivelFake = function(nivel, total, limite)  {
        var contador = 0;
        
        var listaNivel = [];
        if (nivel <= total){
            for (let a = 0; a <  random(1,limite); a++) {        
                contador++;
                contadorGeral ++;
                var subNiveis = $scope.nivelFake(nivel +1, total, limite);
                listaNivel.push({
                    id: `N${contadorGeral}`,
                    name: `Item ${contador} Nivel ${nivel} `,
                    open: false,
                    checked: true,                        
                    transaction: subNiveis.length > 0 ? false : true,
                    children: subNiveis
                });              
            }
        }
        return listaNivel;
    }

    $scope.montarDadosFake = function(){
 
      contadorGeral = 0;
      var niveis = 5;
      var limiteItensPorNivel = 5;
      $scope.nodes = $scope.nivelFake(1, niveis, limiteItensPorNivel);
       
    }

    $scope.montarDadosFake();

}]);