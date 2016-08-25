(function () {

    angular.module('operadores',[])
        .component('sumador',{
            template : '<span ng-click="$ctrl.sumar()">sumador  : {{ $ctrl.sumar() }} </span>',
            bindings:{
                numero1: '@',
                numero2: '@'
            },
            controller : function(){
                var vm = this;
                this.sumar = function(){
                    vm.resultado = vm.numero1 * 1 + vm.numero2 * 1;
                    return vm.resultado;
                }   
            }
        })


}())