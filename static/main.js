document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.getElementById("generate-button");
  const userInput = document.getElementById("input-text");
  const gptOutput = document.getElementById("gpt-output");

  generateButton.addEventListener("click", async () => {
    console.log("Generate Text button clicked");
    const response = await fetch("/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_input: userInput.value }),
    });

    if (response.ok) {
      const data = await response.json();
      gptOutput.innerHTML = data.gpt_output;
    } else {
      console.error("Error:", response.statusText);
    }
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//   const generateButton = document.getElementById("generate-button");
//   const userInput = document.getElementById("user-input");
//   const gptOutput = document.getElementById("gpt-output");

//   generateButton.addEventListener("click", async () => {
//     console.log("Generate Text button clicked");
//     const response = await fetch("/generate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ user_input: userInput.value }),
//     });
    
//     if (response.ok) {
//       const data = await response.json();
//       gptOutput.innerHTML = data.gpt_output;
//     } else {
//       console.error("Error:", response.statusText);
//     }
//   });
// });



// document.addEventListener("DOMContentLoaded", () => {
//   const generateButton = document.getElementById("generate-button");
//   const userInput = document.getElementById("user-input");
//   const gptOutput = document.getElementById("gpt-output");

//   generateButton.addEventListener("click", async () => {
//     console.log("Generate Text button clicked");
//     const response = await fetch("/generate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ user_input: userInput.value }),
//     });
    
//     if (response.ok) {
//     const data = await response.json();
//     gptOutput.innerHTML = data.gpt_output;
//   } else {
//     console.error("Error:", response.statusText);
//   }

// });
