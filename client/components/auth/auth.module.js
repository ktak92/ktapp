'use strict';

angular.module('ktappApp.auth', [
  'ktappApp.constants',
  'ktappApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
