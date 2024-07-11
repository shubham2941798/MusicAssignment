
import { apiCall } from "./api-call.js";
// let flag = false;
function loadMusic() {
    let text = document.getElementById("searchBox").value;
    const URL = https://itunes.apple.com/search?term=${text}&limit=50;
    const promise = apiCall(URL);
    // Pending
    promise.then(function(response){
        const pr = response.json();
        pr.then(function (data) {
            console.log(data)
           
            // document.getElementById('showBtn').addEventListener("click", function () {
                // flag = !flag;
                // if (flag) { 
                    printTracks(data.results);
                // } else {
                //     const div = document.getElementById('dropdown-menu');
                //     div.innerHTML = '';
                // }
            // });
            // console.log('Data ', data);
        }).catch(function(err){
            console.log('Invalid JSON ', err);
        })
    }).catch(function(err){
        console.log('Unable to make API Call ', err);
    });
}
// loadMusic();

function printTracks(results) {
    const div = document.getElementById('dropdown-menu');
    div.innerHTML = '';
    for (var i = 0; i <results.length; i++){
        printTrack(results[i]);
    }
}
function printTrack(track){
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerText = track.trackName;
    li.addEventListener('click', function () {
        const musicPlayer = document.getElementById('play');
        musicPlayer.src = track.previewUrl;
    })
    ul.appendChild(li);
    const div = document.getElementById('dropdown-menu');
    div.appendChild(ul);

}


document.getElementById("showBtn").addEventListener("click", loadMusic)