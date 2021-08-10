var contador = 0;
app.directive('treeView',
        ($compile) => ({
            restrict: 'E',
            templateUrl: "public/js/treeview/tree.html",
            //require: 'ngModel',
            scope: {
                localNodes: '=model',
                localClick: '&click',
                max: '=?max',
                nivel: '=?nivel',
                liberarNiveis: "=?liberarNiveis",
                identity: "=?identity"
            },
            link(scope, tElement, tAttrs, transclude, ngModel) {  
                
                contador ++;
                scope.identity  = contador;                
                if (!tAttrs.id){
                    tElement[0].setAttribute("id",`N1C0`);                    
                }
                /* Controlando os níveis */
                if (!scope.nivel){
                    scope.nivel = 1;
                }else{
                    scope.nivel++;
                }

                /*  maximo de niveis 0 é sem limites */
                if (!scope.max){
                    scope.max = 0;
                }
                scope.liberarNiveis = true;
                if (scope.max > 0){
                    scope.liberarNiveis = scope.nivel < scope.max;
                }
                
                scope.identity = contador;
                scope.processando = true;                
                scope.showItems = [];
              
                scope.getInc = function(){
                    contador ++;
                    console.log(contador);
                    return contador;
                   
                }

                scope.showHide = function (ulId) {
                    scope.liberarNiveis = true;                    
                    setTimeout(() => {                        
                        var id = `N${scope.nivel+1}C${ulId}I${scope.identity}`;
                        var hideThis = document.getElementById(id);
                        if (hideThis){
                            var showHide = angular.element(hideThis).attr('class');
                            angular.element(hideThis).attr('class', (showHide === 'show' ? 'hide' : 'show'));                         
                        }
                    }, 250);
                }                
            
                scope.showIcon = function (node) {
                    if (!angular.isUndefined(node.children)) return true;
                }

                scope.checkIfChildren = function (node) {
                    if (!angular.isUndefined(node.children)) return true;
                }

                scope.verClassesCSS = function (n) {
                    var fim = !n.children || n.children.length == 0;
                    if (fim == true) {
                        return '';
                    } else {
                        if (n.open) {
                            return 'fa fa-minus-square-o';
                        } else {
                            return 'fa fa-plus-square-o';
                        }
                    }
                }                

                scope.getNodes = function(){                   
                    return scope.localNodes;
                }

                function parentCheckChange(item) {
                    for (var i in item.children) {
                        item.children[i].checked = item.checked;
                        if (item.children[i].children) {
                            parentCheckChange(item.children[i]);
                        }
                    }
                }

                scope.checkChange = function (node) {
                    if (node.children) {
                        parentCheckChange(node);
                    }
                }
              
                scope.processando = false;
            }
        })
    );