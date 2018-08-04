// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...

	var url = `https://reqres.in/api/users?page=${pageNum}`;
		
	// make an HTTP request object
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {
//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState == 4 && httpRequest.status == 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"

			populate(jsData);

	} else {
		console.log('There was a problem with the request.');
	}
}	

function populate(param) {
	
	// get the <tbody> element
	var tbodyElement = document.getElementById('data');

	// while there still a firstChild to the <tbody id="data">...remove them
	while (tbodyElement.firstChild) {
		tbodyElement.removeChild(tbodyElement.firstChild);
	}

	var data = param.data;

	// Populate with data
	for (var i = 0; i < data.length; i++) {
		
		// Create a <tr> element
		var trElement = document.createElement('tr');

		// Filling in ID
		var tdId = document.createElement('td');
		tdId.appendChild(document.createTextNode(data[i].id));

		// Filling in First Name
		var tdFirstName = document.createElement('td');
		tdFirstName.appendChild(document.createTextNode(data[i].first_name));

		// Filling in Last Name
		var tdLastName = document.createElement('td');
		tdLastName.appendChild(document.createTextNode(data[i].last_name));

		// Filling in Avatar
		var tdAvatar = document.createElement('td');
		var img = document.createElement('img');
		img.setAttribute('src', data[i].avatar);
		tdAvatar.appendChild(img);

		// Append the <td>s in <tr>
		trElement.appendChild(tdId);
		trElement.appendChild(tdFirstName);
		trElement.appendChild(tdLastName);
		trElement.appendChild(tdAvatar);

		// Append <tr> into <tbody>
		tbodyElement.appendChild(trElement);
	}
}

window.onload = function() {

	// Remove 'no data' first
	document.getElementById('nodata').remove();

	makeRequest(1);
}