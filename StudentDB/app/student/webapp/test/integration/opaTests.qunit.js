sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'student/test/integration/FirstJourney',
		'student/test/integration/pages/StudentList',
		'student/test/integration/pages/StudentObjectPage',
		'student/test/integration/pages/Student_LanguagesObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentList, StudentObjectPage, Student_LanguagesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('student') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentList: StudentList,
					onTheStudentObjectPage: StudentObjectPage,
					onTheStudent_LanguagesObjectPage: Student_LanguagesObjectPage
                }
            },
            opaJourney.run
        );
    }
);