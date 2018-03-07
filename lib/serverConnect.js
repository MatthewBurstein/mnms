// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title></title>
//     <script type="text/javascript" src="it.js"></script>
//     <script type="text/javascript">
//       var request = new XMLHttpRequest();
//       request.open('GET', '/index.html', true);
//
//       request.onload = function() {
//         if (request.status >=200 && request.status < 400) {
//           // Success
//           console.log(request);
//           var data = JSON.parse(request.responseText);
//           console.log('No error', request.responseText);
//         } else {
//           console.log('We reached our target server, but it returned an error');
//         }
//       };
//       request.onerror = function() {
//         console.log('There was an error');
//       };
//       request.send();
//       console.log(request);
//     </script>
//   </head>
//   <body>
//     <h1>Muuuu</h1>
//   </body>
// </html>
