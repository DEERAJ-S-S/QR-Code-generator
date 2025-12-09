import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type your URL here:",
      name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;

    // Generate QR Code Image
    const qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr_image.png"));

    // Save URL to a text file
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("QR code image and URL.txt have been saved successfully!");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// import inquirer from 'inquirer';
// import qr from "qr-image";
// import fs from "fs";

// // your code here...


// inquirer
//   .prompt([
//     {message: "Type your URL here:", 
//     name: "URL"}
//   ])
//   .then((answers) => {
//     const url = answers.URL;
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });