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
                liberarNiveis: "=?liberarNiveis"
            },
            link(scope, tElement, tAttrs, transclude, ngModel) {

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


                scope.processando = true;                
                scope.showItems = [];

                scope.showHide = function (ulId) {
                    var hideThis = document.getElementById(ulId);
                    var showHide = angular.element(hideThis).attr('class');
                    angular.element(hideThis).attr('class', (showHide === 'show' ? 'hide' : 'show'));

                    if (showHide != 'show') {   
                        scope.liberarNiveis = true;                     
                    }
                }                
            
                scope.showIcon = function (node) {
                    if (!angular.isUndefined(node.children)) return true;
                }

                scope.checkIfChildren = function (node) {
                    if (!angular.isUndefined(node.children)) return true;
                }

                scope.verClassesCSS = function (n) {
                    if (n.transaction) {
                        return '';
                    } else {
                        if (n.open) {
                            return 'fa fa-minus-square-o';
                        } else {
                            return 'fa fa-plus-square-o';
                        }
                    }
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