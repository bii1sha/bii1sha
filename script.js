window.onload = function () {
  if (!sessionStorage.getItem("visited")) {
    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("main-content").classList.remove("hidden");
      sessionStorage.setItem("visited", "true");
    }, 2000); // adjust loading time here
  } else {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }
};
