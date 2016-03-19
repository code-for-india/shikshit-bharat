myApp.controller('homeCtrl', ['$scope', '$rootScope', 'callApi', function ($scope, $rootScope, callApi) {
    $scope.datas = $rootScope.data;
    var attendanceStudent = [];
    var absentStudent = [];
    $scope.attendanceSession = false;
    $scope.count = 0;

    $scope.takeAttendanceData = function() {
        $scope.teacher = $scope.period.teacher;
        $scope.student = $scope.period.student;
    };

    $scope.takeAttendance = function() {
        if($scope.id === $scope.teacher.id) {
            $scope.attendanceSession = !$scope.attendanceSession;
            if($scope.attendanceSession === false) {
                $scope.validateAttendance();
            }
        } else {
            if($scope.attendanceSession === true) {
                attendanceStudent.push($scope.id);
                $scope.count++;
            }
        }
        $scope.id = "";
    };

    $scope.validateAttendance = function() {
        for(var i = 0; i < $scope.student.length; i++) {
            if(attendanceStudent.indexOf($scope.student[i].roll) > -1) {
                $scope.student[i].attendance = 'P';
            } else {
                $scope.student[i].attendance = 'A';
            }
        }
        localStorage.setItem('data', JSON.stringify($scope.datas));
        $scope.triggerNotification();
    };

    $scope.triggerNotification = function() {
         for(var i = 0; i < $scope.student.length; i++) {
             if($scope.student[i].attendance === 'A') {
                 absentStudent.push($scope.student[i].name);
             }
         }

        //Call notification api.
        callApi.callApi('/message/sms.php', 'GET', '?absentee=9886731643');
    };
}]);