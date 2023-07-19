window.addEventListener("load", function() {
    const fetchPromise = this.fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then( function(response) {
        const jsonPromise = response.json();
        jsonPromise.then( function(json) {
            let astronautCount = 0;
            //TODO
            //To sort by num hours, iterate through array once and extract num hours and id. sort greatest to least
            //iterate through astronaut array again and use boolean logic to go through the array of hours in correct order
            const div = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
            astronautCount++;
            let activeTrue = '';
            if (json[i].active === true) {
                activeTrue = 'style="color:green"';
            }
            div.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li ${activeTrue}>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>`;
            }
            document.getElementById("count").innerHTML = `Total Number of Astronauts: ${astronautCount}`;
        });
    });
})