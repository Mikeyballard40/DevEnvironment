async function loadScores() {

  let userCounts = {};

  const tableBody = document.querySelector('#record');

      // try{
        const response = await fetch('/api/scores');
  
        userCounts = await response.json();
        localStorage.setItem('scores', JSON.stringify(userCounts));
      
      // }catch{
        //store in local storage if error occures
        // additionalFunction(userCounts, score) //*************commented out to test for functionality
      // }
    

    const uniqueUsers = Object.keys(userCounts);
    uniqueUsers.sort((a, b) => userCounts[b] - userCounts[a]);

    tableBody.innerHTML = '';

    for (const [i, user] of uniqueUsers.entries()) {
      const place = document.createElement('td');
      const nameUser = document.createElement('td');
      const count = document.createElement('td');

      place.textContent = i + 1;
      nameUser.textContent = user;
      count.textContent = userCounts[user];

      const row = document.createElement('tr');
      row.appendChild(place);
      row.appendChild(nameUser);
      row.appendChild(count);

      tableBody.appendChild(row);
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


