async function loadScores() {

  let userCounts = {};

  const tableBody = document.querySelector('#record');
  const thisUser = localStorage.getItem("record")
  console.log(thisUser);

      // try{
        const response = await fetch(`/api/loadScores`);
        // console.log(response);
        userCounts = await response.json();
        console.log(userCounts); //user accounts in a list of objects
        localStorage.setItem('scores', JSON.stringify(userCounts));
      
      // }catch{
        //store in local storage if error occures
        // additionalFunction(userCounts, score) //*************commented out to test for functionality
      // }
    

    // const uniqueUsers = Object.keys(userCounts);
    // uniqueUsers.sort((a, b) => userCounts[b] - userCounts[a]);

    tableBody.innerHTML = '';
    let counter = 1;

   userCounts.sort((a, b) => b.score - a.score);

    for (const i of userCounts) {
      const place = document.createElement('td');
      const nameUser = document.createElement('td');
      const count = document.createElement('td');

      place.textContent = counter;
      nameUser.textContent = i.name;
      count.textContent = i.score;

      const row = document.createElement('tr');
      row.appendChild(place);
      row.appendChild(nameUser);
      row.appendChild(count);

      tableBody.appendChild(row);

      counter = counter + 1;
     
    }

 
}

function additionalFunction(userCounts, score){
  if (userCounts[score.name]) {
    userCounts[score.name] += 1;
  } else {
    userCounts[score.name] = 1;
  }
  return userCounts;
}

loadScores();


