export default function MainRoute($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('404');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home-page></home-page>'
        })
        .state('404', {
            url: '/404',
            template: '<default-page></default-page>'
        })
    ;
};