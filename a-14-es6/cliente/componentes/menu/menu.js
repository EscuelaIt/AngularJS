
angular.module('abMenu', ['ui.router', 'ngMaterial'])
    .controller('MenuCtrl', menuCtrl)
    .component('abMenuNavegacion', {
        templateUrl: './componentes/menu/tpl-menu-navegacion.html',
        controller: 'MenuCtrl'
    })

function menuCtrl($state) {
    this.soyElEstadoActivo = function (estado) {
        return $state.is(estado);
    }
}

