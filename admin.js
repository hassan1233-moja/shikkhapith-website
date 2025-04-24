// admin.js

document.addEventListener("DOMContentLoaded", function () {
    const navForm = document.querySelector("#nav form");
    const navTitle = navForm.querySelector("input[placeholder='নতুন লিংক টাইটেল']");
    const navId = navForm.querySelector("input[placeholder='লিংক আইডি (যেমন: course, home)']");
  
    navForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const newLink = {
        title: navTitle.value,
        id: navId.value,
      };
  
      // get existing links from localStorage or initialize as empty array
      let navLinks = JSON.parse(localStorage.getItem("navLinks")) || [];
      navLinks.push(newLink);
  
      localStorage.setItem("navLinks", JSON.stringify(navLinks));
      alert("নতুন লিংক সংযুক্ত হয়েছে!");
      navForm.reset();
    });
  });
  