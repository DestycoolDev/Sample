var spanElement = document.getElementById('header');

  if (spanElement.nextElementSibling) {
    var h1Element = spanElement.nextElementSibling;
    
    // Set the ID for the h1 element
    h1Element.id = 'more';

  }

// Get the first h1 element on the page
const element = document.getElementById('more');

// Define the arrays of texts to match
const searchTexts = ['Faded', 'Alone', 'Darkside', 'Sing me to sleep', 'Lost Control','Lily','Different World', 'All Falls Down','Diamond Heart', 'Do It All For you', 'Intro','I dont wanna go','interlude','lonely']; // Add more texts as needed
const otherText = ['', 'Happy'];
const thirdText = ['Dreamer', 'example2'];
const fourthText = ['text4a', 'text4b'];
const fifthText = ['text5a', 'text5b'];
const sixthText = ['text6a', 'text6b'];
const seventhText = ['text7a', 'text7b'];
const eighthText = ['text8a', 'text8b'];
const ninthText = ['text9a', 'text9b'];

// Function to create navigation elements and links
function createNavigationLinks(albumLinkText, artistLinkText, albumLinkHref, artistLinkHref) {
    const nav = document.createElement('nav');
    
    const albumLink = document.createElement('a');
    albumLink.textContent = albumLinkText;
    albumLink.href = albumLinkHref;

    const artistLink = document.createElement('a');
    artistLink.textContent = artistLinkText;
    artistLink.href = artistLinkHref;

    nav.appendChild(albumLink);
    nav.appendChild(artistLink);

    return nav;
}

// Check if the text of the h1 element matches any in the arrays
if (element) {
    if (searchTexts.some(text => element.textContent.includes(text)) || otherText.some(text => element.textContent.includes(text))) {
        let albumLinkText, artistLinkText, albumLinkHref, artistLinkHref;

        if (searchTexts.some(text => element.textContent.includes(text))) {
            albumLinkText = 'More in Album';
            artistLinkText = 'More from Artist';
            albumLinkHref = 'different world album.html';
            artistLinkHref = 'alone.html';
        } else if (otherText.some(text => element.textContent.includes(text))) {
            albumLinkText = 'New Album';
            artistLinkText = 'New Artist';
            albumLinkHref = 'new_album.html';
            artistLinkHref = 'new_artist.html';
        }

        const nav = createNavigationLinks(albumLinkText, artistLinkText, albumLinkHref, artistLinkHref);

        const nextElement = element.nextElementSibling;
        nextElement.parentNode.insertBefore(nav, nextElement);
    } else if (thirdText.some(text => element.textContent.includes(text))) {
        // Create something similar with the first and second conditions
        let albumLinkText = 'Third Album';
        let artistLinkText = 'Third Artist';
        let albumLinkHref = 'third_album.html';
        let artistLinkHref = 'third_artist.html';

        const nav = createNavigationLinks(albumLinkText, artistLinkText, albumLinkHref, artistLinkHref);

        const nextElement = element.nextElementSibling;
        nextElement.parentNode.insertBefore(nav, nextElement);
    } else if (fourthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the fourth set of actions if the condition is met
    } else if (fifthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the fifth set of actions if the condition is met
    } else if (sixthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the sixth set of actions if the condition is met
    } else if (seventhText.some(text => element.textContent.includes(text))) {
        // Add your code here for the seventh set of actions if the condition is met
    } else if (eighthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the eighth set of actions if the condition is met
    } else if (ninthText.some(text => element.textContent.includes(text))) {
        // Add your code here for the ninth set of actions if the condition is met
    }
}



// Create the navigation bar HTML structure using template literals
const navBarHTML = `

  <div class="nav" >
<i class="fa fa-bars hamburger icon" style="float: left;font-size:30px;position:absolute;top:25px;" autocapitalize=" " for="menu-toggle" alt="Icon" id="icon" onclick="toggleNavbar()"></i>
  
      <h1 style="margin-top:22px;margin-right:10px;font-size:35px;">NETDOT.COM</h1>
 
 <a style="overflow:hidden;" href="sample.html"><i id="search" style="color:white"; class="fa fa-search" ></i></a>
  </div>

  <div class="navbar" style="display:none;">
 <header>
 

  <div class="nav" style="position:relative;bottom:1px;margin-bottom:20px;overflow:hidden;border:solid 1px auto;height:100px;">
<i style="color:white;position:absolute;left:10px;top:35px;"  class="fa fa-arrow-left" autocapitalize=" " for="menu-toggle" alt="Icon" id="icon" onclick="toggleNavbar()"></i>
    <h1 style="font-size:30px;position:absolute;right:80px;bottom:30px;">NETDOT.COM</h1>
 <a style="overflow:hidden;height:1px;width:1px;" href="music search.html">
<i style="position:absolute;right:3px;top:35px;" class="fa fa-search" ></i>
  </a>
  </div>
<a style="height:10px;width:10px;position:absolute;top:10px;" href=" "> </a>
</header>

    <a class="active" href="index.html">
      <i class="fa fa-fw fa-home" style="float: left; margin-right: 10px;"></i>
      <span class="text">Home</span>
    </a>
    <a class="active" href="Movies.html">
      <i class="fa fa-film" style="float: left; margin-right: 10px;"></i>
      <span class="text">Movie</span>
    </a>
    <a class="active" href="music.html">
      <i class="fa fa-music" style="float: left; margin-right: 10px;"></i>
      <span class="text">Music</span>
    </a>
    <a class="active" href="news.html">
      <i class="fa fa-newspaper-o" style="float: left; margin-right: 10px;"></i>
      <span class="text">News</span>
    </a>
  <br>
    
    <a class="active" href="https://api.whatsapp.com/send?phone=your-phone-number">
      <i class="fa fa-whatsapp" style="float: left; margin-right: 10px;"></i>
      <span class="text">WhatsApp Page</span>
    </a>
    <a class="active" href=" ">
      <i class="fa fa-facebook" style="float: left; margin-right: 10px;"></i>
      <span class="text">Facebook Page</span>
    </a>
    <a class="active" href="https://t.me/your-telegram-username">
      <i class="fa fa-telegram" style="float: left; margin-right: 10px;"></i>
      <span class="text">Telegram Channel</span>
    </a>
    <a class="active" href="https://www.instagram.com/your-channel-url">
      <i class="fa fa-instagram" style="float: left; margin-right: 10px;"></i>
      <span class="text">Instagram Channel</span>
    </a>
    <a class="active" href="https://twitter.com/your-twitter-handle">
      <i class="fa fa-twitter" style="float: left; margin-right: 10px;"></i>
      <span class="text">Twitter Page</span>
    </a>
    <a class="active" href="https://www.youtube.com/your-channel-url">
      <i class="fa fa-youtube-play" style="float: left; margin-right: 10px;"></i>
      <span class="text">YouTube Channel</span>
    </a>
  
  </div>

    <header id="me">
        <div class="container">
            <div class="content">
                <h1>Get the <span class="highlight">App</span></h1>
                <p>Your ultimate experience awaits!</p>
                <a href="#" class="button">Download Now</a>
            </div>
        </div>
    </header>





 
  
`;
document.body.style.backgroundColor = '';

const header = document.getElementById('header');

// Insert the navigation bar HTML structure into the header
header.innerHTML = navBarHTML;



const message = document.getElementById("subscribe-message");

    function showSubscribeMessage() {
      message.style.display = "block";

      // Automatically hide the message after 5 seconds (5000 milliseconds)
      setTimeout(() => {
        message.style.display = "none";
      }, 5000);
    }


  // Store the original body content
const originalBodyContent = document.body.innerHTML;

function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    var body = document.body;

    if (navbar.style.display === 'none' || navbar.style.display === '') {
        // Show the navbar and replace the body content with the navbar
        navbar.style.display = 'block';
        body.innerHTML = '';
        body.appendChild(navbar);
    } else {
        // Hide the navbar and restore the original body content
        navbar.style.display = 'none';
        body.innerHTML = originalBodyContent;
    }
}




// CSS code
    var cssCode = `
body {
    
    width:100vr;
    
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: black;
    text-align : center;
}

.big {
    height:200px;
}

#audio,h2{
    
     text-align:center;
 }
#me {
    margin:0px;
    background-color: #3498db;
    color: #fff;
    padding: 0px;
    text-align: center;
}

.container {
    margin:10px;
    display: grid;
    grid-template-columns: 1fr;
}

.content {
    margin:0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
pre {
    color:white;
}

h1 {
    margin:0px;
    color:white;
    font-size: 30px;
}

.highlight {
    color: #ffcc29;
}



.button {
    display: inline-block;
    padding: 10px 20px;
    margin;-10px;
    background-color: #ffcc29;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.button:hover {
    
    background-color: #e0b522;
} 


   img {
       
      width:100%;
      display: block;
      
   }

  #audio{
  }


    p {
        
      margin-left: 10px;
      font-size: 14px;
      line-height: 1.5;
      text-align: center;
      color:white;
    }
  pre {
          font-family: 'Poppins', sans-serif;
      margin: 0px;
      font-size: 14px;
      line-height: 1.5;
      text-align: center;
      color:white;
    }

   

    h2 {
      color: white;
      text-align: center;
      margin-top: 20px;
    }

    audio {
      colour:#151B54;
      width: 100%;
      max-width: 400px;
      display: block;
    }

    .download-button {
      display: block;
      height: 10px;
      width: 200px;
      margin: 10px ;
      padding: 10px;
      background-color:#D1D0CE;
      color:#151B54;
      text-align: center;
      text-decoration: none;
      border-radius: 5px;
    }

    .download-button:hover {
      background-color: #D1D0CE;
    }
  #subscribe-button{
       display: inline-block;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #ffcc29;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    background-color:#D1D0CE;
    
  }

#subscribe-message {
  
  z-index:2;
  display: none;
  background-color:red;
  color: white;
  padding: 10px;
  position: fixed;
  border-radius: 50px;
  bottom:300px;
  left: 30px;
  right: 30px;
  text-align: center;
}

ul {
    display:flex;
 }

.li{
    position:relative;
    margin-left:40px;
}


        .navbar {
            background-color: none;
            position: relative;
            height: 100vh;
            overflow: auto;
        }

        /* Navbar links */
        .navbar a {
            background-color: none;
            text-align: left;
            padding: 20px;
            color: white;
            text-decoration: none;
            font-size: 20px;
            display: block;
        }

        /* Navbar links on mouse-over */
        .navbar a:hover {}

        /* Current/active navbar link */
        .active {
            position: relative;
            right: 20px;
            width: 100%;
            background-color: #333;
        }

        /* Style for icon images */
        .navbar i {
            display: block;
            text-align: center;
            margin-left:10px;
            margin-bottom: 5px;
            font-size: 24px;
        }

        /* Hamburger icon style */
        .hamburger {
            color: white;
            font-size: 34px;
            position: relative;
            top: 20px;
            left: 14px;
        }

        /* Navigation header style */
        .nav {
            margin-bottom: 0px;
            border: solid 1px auto;
        }

        #search {
            font-size: 30px;
            position: absolute;
            right: 20px;
            top: 25px;
        }



.top{
      background-color: /* Add your desired background color */;
      padding: 0;
      margin:20px;
      width: 400px;
      position: relative;
      right: 30px;
      text-align: left;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: flex;
      margin-left: 0px;
    }

   li a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 16px;
      border: solid 1px;
      border-radius: 30px;
      padding: 10px;
      cursor: pointer; /* Add this line to make the cursor change on hover */
    }




   .background-section {
      background-image: url(' '); /* Replace 'your-image.jpg' with the path to your image */
      background-size: cover;
      background-position: center;
      height: 300px; /* Adjust the height as needed */
      position: relative;
    }

    /* Add text over the background image */
    .text-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white; /* Adjust text color as needed */
      font-size: 24px; /* Adjust font size as needed */
    }



nav {
    display:flex;
            text-align: center;
            margin: 2px;
    margin-bottom:10px;
    padding:0px;
        }

      nav  a {
            display: inline-block;
            padding: 10px 20px;
            margin: 0 10px;
            text-decoration: none;
            color: #fff;
            background-color: #3498db;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

nav {
            text-align: center;
            margin-top: 20px;
        }

      nav  a {
            display: inline-block;
            padding: 10px 20px;
            margin: 0 10px;
            text-decoration: none;
            color: #fff;
            background-color: #3498db;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }



  .related {
    overflow-x: auto;
  display: flex;
}

  a {
     transition: background-color 1.3s ease-in-out;
    text-decoration:none;
    color:white;
  }
.image {
  
  text-decoration:none;
  display: block;
  text-align: center;
  margin-right: 10px; /* Adjust the margin as needed */
}

.text {
  font-size:15px;
  display:block;
  margin-top: 5px; /* Adjust the margin as needed */
}
  
  
 .related img {
      transition: background-color 1.3s ease-in-out;  width: 100px; /* Adjust the width as needed */
  height: 120px; /* Maintain aspect ratio */
  border: 2px solid #333; /* Add a border */
  border-radius:20px;
  margin: 10px; /* Add margin for spacing */
}
  .related img:hover{
      transform: scale(1.2);
    background-color: red; 
  }



  #left{
      margin-top:60px;
      margin-left:20px;
      text-align:left;
  }
    `;

    // Create a style element
    var styleElement = document.createElement('style');

    // Set the content of the style element to the CSS code
    styleElement.innerHTML = cssCode;

    // Append the style element to the head of the document
    document.head.appendChild(styleElement);

// CSS code
var cssCode = `
    /* Your other CSS styles can go here */

    /* Font Awesome link */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
`;

// Create a style element
var styleElement = document.createElement('style');

// Set the content of the style element to the CSS code
styleElement.innerHTML = cssCode;

// Append the style element to the head of the document
document.head.appendChild(styleElement);


// Create a span element
var spanElement = document.createElement('span');

// Set the id attribute to "header"
spanElement.id = 'header';

// Append the span element to the body
document.body.appendChild(spanElement);

	

function handleClick() {
    var navbar = document.querySelector('.no');
    var body = document.body;

    if (navbar.style.display === 'none' || navbar.style.display === '') {
        // Show the navbar and replace the body content with the navbar
        navbar.style.display = 'block';
        body.innerHTML = '';
        body.appendChild(navbar);
    } else {
        // Hide the navbar and restore the original body content
        navbar.style.display = 'none';
        body.innerHTML = originalBodyContent;
    }
}




function click() {
    var navbar = document.querySelector('.no');
    var body = document.body;

    if (navbar.style.display === 'none' || navbar.style.display === '') {
        // Show the navbar and replace the body content with the navbar
        navbar.style.display = 'block';
        body.innerHTML = '';
        body.appendChild(navbar);
    } else {
        // Hide the navbar and restore the original body content
        navbar.style.display = 'none';
        body.innerHTML = originalBodyContent;
    }
}




// Create an h1 element with the class "resultContainer"
        const resultContainer = document.createElement('h1');
        resultContainer.id = 'resultContainer';
       resultContainer.style.fontSize = "30px";

        // Create an image element
        const image = document.createElement('img');
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho-DJIh8SCKcHgYrHoAnMgHD8Vq1fhWd1_Q&usqp=CAU'; // Set your image source
        image.style.display = "none";
        // Get the reference to the parent element (e.g., body)
        const parentElement = document.querySelector('.show');
// Append the h1 element to the parent element
        parentElement.appendChild(resultContainer);

        // Append the image element to the parent element
        parentElement.appendChild(image);
        // Append the h1 element before the image
        
        const keywordArrays = [
            { keywords: ['Faded', 'keywo', 'update', 'text'], text: ' Different World' },
            { keywords: ['another', 'array', 'of', 'keywords'], text: 'Updated Text with Another Array' },
            { keywords: ['third', ' gjk', 'of', 'words'], text: 'Updated Text with Third Array' },
            { keywords: ['fourth', 'collection', 'of', 'terms'], text: 'Updated Text with Fourth Array' },
            { keywords: ['fifth', 'list', 'of', 'items'], text: 'Updated Text with Fifth Array' }
        ];

        function checkAndUpdateText() {
            const h1Element = document.querySelector('.show');
            const resultContainer = document.getElementById('resultContainer');

            if (h1Element && resultContainer) {
                const h1Content = h1Element.textContent.trim().toLowerCase();
                let matchingArrayIndex = -1;

                // Check for matches in each array
                for (let i = 0; i < keywordArrays.length; i++) {
                    const index = keywordArrays[i].keywords.findIndex(item => h1Content.includes(item.toLowerCase()));

                    if (index !== -1) {
                        matchingArrayIndex = i;
                        break; // Break out of the loop if a match is found
                    }
                }

                if (matchingArrayIndex !== -1) {
                    resultContainer.textContent = ` Album : ${keywordArrays[matchingArrayIndex].text}`;
                } else {
                    resultContainer.textContent = 'No matching keyword found';
                }
            }
        }

        // Simulate changing the text dynamically after a delay (e.g., user interaction)
        setTimeout(() => {
            document.querySelector('.show').textContent = ' ';
            checkAndUpdateText(); // Call the function after changing the text
        }, 20000000); // Delay in milliseconds (2 seconds)

        window.addEventListener('DOMContentLoaded', checkAndUpdateText);



