angular.module('booking', ['ui.bootstrap']);

var DatepickerDemoCtrl = function ($scope, $http) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();
  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
  $scope.dateOptions = {
    formatYear: 'yy'
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.titles = [
     {name:'Mr'},
     {name:'Ms'},
     {name:'Miss'},
     {name:'Mrs'},
  ];
  $scope.myTitle = '';
  $scope.foreName = '';
  $scope.surName = '';
  $scope.institution = '';
  $scope.addressOne = '';
  $scope.addressTwo = '';
  $scope.addressThree = '';
  $scope.postCode = '';
  $scope.phoneNumber = '';
  $scope.emailAddress = '';
  $scope.sessions = [
     {id:'five', name:'5-session'},
     {id:'twelve', name:'12-session'},
  ];
  $scope.mySession = '';
  $scope.fiveSession = [
     {ref:'osfwr', name:'Operating System fundamentals with Raspbian'},
     {ref:'pcposb', name:'Project-coding: Python or Scratch basics'},
     {ref:'fon', name:'Fundamentals of networking'}
  ];
  $scope.twelveSession = [
     {ref:'ntiatc', name:'Networking, The Internet, and The Cloud'},
     {ref:'pcpos', name:'Project-coding: Python or Scratch'},
     {ref:'tlos', name:'The Linux Operating System'}
  ];
  $scope.myCourse = '';
  $scope.audience = '';
  $scope.numOfPeople = '';
  
  // process the form
  $scope.processForm = function() {
  formData = [
     {'title': $scope.myTitle},
     {'forename': $scope.foreName},
     {'surname': $scope.surName},
     {'addlineone': $scope.addressOne},
     {'addlinetwo': $scope.addressTwo},
     {'addlinethree': $scope.addressThree},
     {'postcode': $scope.postCode},
     {'phonenumber': $scope.phoneNumber},
     {'emailAddress': $scope.emailAddress},
     {'sessionduration': $scope.mySession},
  ];
	$http({
        method  : 'POST',
        url     : '/cpd/mail.php',
        data    : formData,
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        }).success(function(data) {
          console.log(data);
            if (!data.success) {
           	// if not successful, bind errors to error variables
                $scope.errorName = data.errors.name;
                $scope.errorSuperhero = data.errors.superheroAlias;
            } else {
            	// if successful, bind success message to message
                $scope.message = data.message;
            }
        });
    };
};
