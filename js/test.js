function show_hide() {
  var click = document.getElementById("drop-down");
  if (click.style.display === "none") {
    click.style.display = "block";
    document.getElementById("image").src = "../images/image6/1.png";
  } else {
    click.style.display = "none";
    document.getElementById("image").src = "../images/image6/2.png";
  }
  document.getElementById("drop-down_first").style.display = "none";
  document.getElementById("drop-down_second").style.display = "none";
  document.getElementById("drop-down_third").style.display = "none";

  document.getElementById("image1").src = "../images/image6/2.png";
  document.getElementById("image2").src = "../images/image6/2.png";
  document.getElementById("image3").src = "../images/image6/2.png";
}

function show_hide_first() {
  var click = document.getElementById("drop-down_first");
  if (click.style.display === "none") {
    click.style.display = "block";
    document.getElementById("image1").src = "../images/image6/1.png";
  } else {
    click.style.display = "none";
    document.getElementById("image1").src = "../images/image6/2.png";
  }
  document.getElementById("drop-down").style.display = "none";
  document.getElementById("drop-down_second").style.display = "none";
  document.getElementById("drop-down_third").style.display = "none";

  document.getElementById("image").src = "../images/image6/2.png";
  document.getElementById("image2").src = "../images/image6/2.png";
  document.getElementById("image3").src = "../images/image6/2.png";
}

function show_hide_second() {
  var click = document.getElementById("drop-down_second");
  if (click.style.display === "none") {
    click.style.display = "block";
    document.getElementById("image2").src = "../images/image6/1.png";
  } else {
    click.style.display = "none";
    document.getElementById("image2").src = "../images/image6/2.png";
  }
  document.getElementById("drop-down").style.display = "none";
  document.getElementById("drop-down_first").style.display = "none";
  document.getElementById("drop-down_third").style.display = "none";

  document.getElementById("image").src = "../images/image6/2.png";
  document.getElementById("image1").src = "../images/image6/2.png";
  document.getElementById("image3").src = "../images/image6/2.png";
}

function show_hide_third() {
  var click = document.getElementById("drop-down_third");
  if (click.style.display === "none") {
    click.style.display = "block";
    document.getElementById("image3").src = "../images/image6/1.png";
  } else {
    click.style.display = "none";
    document.getElementById("image3").src = "../images/image6/2.png";
  }
  document.getElementById("drop-down").style.display = "none";
  document.getElementById("drop-down_first").style.display = "none";
  document.getElementById("drop-down_second").style.display = "none";

  document.getElementById("image").src = "../images/image6/2.png";
  document.getElementById("image1").src = "../images/image6/2.png";
  document.getElementById("image2").src = "../images/image6/2.png";
}
