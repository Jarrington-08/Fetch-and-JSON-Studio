window.addEventListener("load", function() {
    const fetchPromise = this.fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then( function(response) {
        const jsonPromise = response.json();
        jsonPromise.then( function(json) {
            let numHours = [];
            let astronautCount = 0;
            for (let i = 0; i < json.length; i++) {
                numHours.push(json[i].hoursInSpace);
            }
            numHours = numHours.sort(function(a,b){return b-a});
            console.log(numHours);
            const div = document.getElementById("container");
            for (let i = 0; i < numHours.length; i++) {
                for (let j = 0; j < json.length; j++) {
                    if (json[j].hoursInSpace === numHours[i]) {
                        astronautCount++;
                        let activeTrue = '';
                        if (json[j].active === true) {
                            activeTrue = 'style="color:green"';
                        }
                        div.innerHTML += `
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${json[j].firstName} ${json[j].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[j].hoursInSpace}</li>
                                    <li ${activeTrue}>Active: ${json[j].active}</li>
                                    <li>Skills: ${json[j].skills.join(', ')}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[j].picture}">
                        </div>`;
                    }
                
                }
            } 
            document.getElementById("count").innerHTML = `Total Number of Astronauts: ${astronautCount}`;
        });
    });
})