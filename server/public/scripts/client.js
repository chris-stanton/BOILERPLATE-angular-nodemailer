var myApp = angular.module('myApp', []);
//controller
myApp.controller('MailController', ['MailService', function(MailService){
    var self = this;

    self.submitForm = function(mailObject){
        MailService.sendEmail(mailObject);
          self.mailObject = {};
    };

}]);//end of myApp

//factory
myApp.factory('MailService', ['$http', function($http){

  var notyf = new Notyf();
    return {
      sendEmail: function(mailObject){
        $http.post('/mail', mailObject).then(function(response){
          console.log("Email has been sent: ", response.data);
            notyf.confirm('Email was send');
        });
      }//end of send email()
    };//end of return {}

}]);//end of myApp
