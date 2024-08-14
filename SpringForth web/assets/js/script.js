// -----------menu click js----------

$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu-hamburger").toggleClass("active");
    $(".menu").toggleClass("active");
  });
});

// ****header scroll function****

$(() => {
  //On Scroll Functionality
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 50
      ? $("header").addClass("og-hf")
      : $("header").removeClass("og-hf");
  });
});

// ********PAGE SLIDER JS*******

// const printBtn = document.querySelector(".printing-btn");
// const instituteBtn = document.querySelector(".institute-btn");
// const btnContainer = document.querySelector(".btn-container");

// // Add Event Listeners
// printBtn.addEventListener("click", () => {
//   // Add the active class button
//   printBtn.classList.add("active");
//   // Display the printing services content
//   contentContainer.innerHTML = fetch("PrintingServices.html");
// });

// instituteBtn.addEventListener("click", () => {
//   // Add the active class to the button
//   instituteBtn.classList.add("active");
//   // Display the Institute content
//   contentContainer.innerHTML = fetch("index.html");
// });
// -----------Owl js----------

$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// -----------counting js----------

$(".counting").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 3000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});

// REVIEW SLIDE

const moreReviewsBtn = document.querySelectorAll(".more-review-btn");

moreReviewsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const originalReviews = btn.previousElementSibling;
    const additionalReviews = btn.nextElementSibling;

    originalReviews.classList.toggle("hide");
    additionalReviews.classList.toggle("show");

    // additionalReviews.computedStyleMap.position = "absolute";
    // additionalReviews.computedStyleMap.top = `${originalReviews.offsetTop}px`;
    // additionalReviews.style.left = `${originalReviews.offsetLeft}px`;
    // additionalReviews.style.width = `${originalReviews.offsetWidth}px`;
  });
});
