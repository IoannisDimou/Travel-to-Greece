function searchfunction(){
    var searchvalue = document.getElementById("type").value
    
    console.log(searchvalue)
    
}
fetch('/travel_recommendation_api.json')
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    console.log(data); // Log the retrieved data
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
