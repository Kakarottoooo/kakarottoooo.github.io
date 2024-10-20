document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle visibility for courses based on clicked article
    function toggleCourses(entryId, coursesId) {
        var entry = document.getElementById(entryId);
        var courses = document.getElementById(coursesId);

        entry.addEventListener('click', function(event) {
            console.log(entryId + ' clicked');
            courses.classList.toggle('hidden-courses');
        });
    }

    // Toggle courses for Vanderbilt and Dickinson
    toggleCourses('vanderbiltEntry', 'vanderbiltCourses');
    toggleCourses('dickinsonEntry', 'dickinsonCourses');
});
