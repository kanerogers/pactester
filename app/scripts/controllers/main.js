'use strict';

angular.module('pacTesterApp')
  .controller('MainCtrl', function ($scope, $http) {
    var check = function() {
      var pac, domain, sourceip, data;

      data = {
        'pac': pac,
        'domain': domain,
        'source-ip' : sourceip
      };

      $http.post('/check', data).success(processResult(data));
    };

    var processResult = function(data) {
      console.log(data);
    };
  });
