window.addEventListener("load", function() {
    const fetchPromise = this.fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then( function(response) {
        const jsonPromise = response.json();
        jsonPromise.then( function(json) {
            let sortedJson = json.sort((a, b) => b.hoursInSpace - a.hoursInSpace );
            let astronautCount = 0;
            const div = document.getElementById("container");
                for (let j = 0; j < sortedJson.length; j++) {
                    astronautCount++;
                    let activeTrue = '';
                    if (sortedJson[j].active) {
                        activeTrue = 'style="color:green"';
                    }
                    div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${sortedJson[j].firstName} ${sortedJson[j].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${sortedJson[j].hoursInSpace}</li>
                                <li ${activeTrue}>Active: ${sortedJson[j].active}</li>
                                <li>Skills: ${sortedJson[j].skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${sortedJson[j].picture}">
                    </div>`;
                }
            });
        }); 
        document.getElementById("count").innerHTML = `Total Number of Astronauts: ${astronautCount}`;
    });