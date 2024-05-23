// const cookies = document.cookie; // Get all the cookies as a string
// console.log(cookies);

// function getCookie(name) {
//     const cookies = document.cookie.split(";"); // Split the string into individual cookies
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim(); // Remove leading/trailing whitespaces
//       if (cookie.startsWith(name + "=")) {
//         return cookie.substring(name.length + 1); // Extract and return the cookie value
//       }
//     }
//     return null; // Cookie not found
//   }
  
//   const username = getCookie("username");
//   console.log(username); // Output: "JohnDoe"



  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }