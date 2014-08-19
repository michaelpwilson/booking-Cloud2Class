angular.module('booking', ['ui.bootstrap']);

var DatepickerDemoCtrl = function ($scope) {
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
    formatYear: 'yy',
    startingDay: 1
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
     {name:'5-session'},
     {name:'12-session'},
  ];
  $scope.mySession = '';

};
