
// ---------- Rain ----------
function createStars({ starCount = 250, maxTime = 30 } = {}) {
  const universe = document.getElementById('universe');
  const e = document.documentElement;
  const g = document.getElementsByTagName("body")[0];
  const width = window.innerWidth || e.clientWidth || g.clientWidth;
  const height = window.innerHeight || e.clientHeight || g.clientHeight;
  for (let i = 0; i < starCount; ++i) {
    const xpos = Math.round(Math.random() * width);
    const star = document.createElement("div");
    const speed = 1000 * (Math.random() * maxTime + 1);
    star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 20)));
    universe.appendChild(star);
    star.animate(
      [
        { transform: `translate3d(${xpos}px, -${Math.random() * 256}px, 0)` },
        { transform: `translate3d(${xpos}px, ${height}px, 0)` }
      ],
      {
        delay: Math.random() * -speed,
        duration: speed,
        iterations: Infinity
      }
    );
  }
}
// ---------- Header ----------
function toggleTheme() {
  $('#theme-btn').find("i").toggleClass("ri-contrast-2-line ri-contrast-2-fill");
  $("html").toggleClass("light");
  $('.shape').toggleClass("cancel");
}
function toggleHamburger() {
  const btn = $('.hamburger-btn');
  btn.toggleClass("active")
      .html(btn.hasClass("active")
        ? `<i class="ri-close-large-line ri-2x"></i>`
        : `<i class="ri-menu-line ri-2x"></i>`);

  $('.mobile-nav').toggleClass("show");
  $('.toggles').toggleClass("hide");
}
function updateHeader(selectedLang) {
    $(".mobile-nav .nav-btn").each(function () {
        const key = $(this).attr("href").substring(1);
        $(this).text(headerText[selectedLang][key]);
    });
}
// ---------- Intro ----------
function updateIntro(selectedLang) {
  const texts = introTexts[selectedLang];

  const introDiv = document.querySelector(".intro");
  introDiv.dir = selectedLang === "fa" ? "rtl" : "ltr";

  const textDiv = introDiv.querySelector(".text");
  textDiv.querySelector("p").innerHTML = `${texts.openToWork} <span class="dot"></span>`;
  textDiv.querySelector(".name").innerHTML = selectedLang === "fa"
    ? `${texts.hiName} <br><span>${texts.name}</span> هستم`
    : `${texts.hiName} <br><span>${texts.name}</span>`;
  textDiv.querySelectorAll("p")[1].textContent = texts.description;
  textDiv.querySelector("a").innerHTML = `${texts.location} <i class="ri-global-line"></i>`;

  const socialLinks = introDiv.querySelectorAll(".socials a");
  socialLinks[0].querySelector("span").textContent = texts.resumeText;
  socialLinks[1].querySelector("span").textContent = texts.linkedin;
  socialLinks[2].querySelector("span").textContent = texts.github;
  socialLinks[3].querySelector("span").textContent = texts.email;
  socialLinks[4].querySelector("span").textContent = texts.telegram;
}
// ---------- Tech ----------
function populateTechCarousels() {
  const $webCarousel = $(".web-carousel .carousel");
  const $dataCarousel = $(".data-carousel .carousel");
  webTechs.forEach(tech => {
    const $a = $(`
      <a href="${tech.url}" target="_blank">
        <img src="${tech.icon}" alt="${tech.name}" title="${tech.name}">
        <p>${tech.name}</p>
      </a>
    `);
    $webCarousel.append($a);
  });
  dataTechs.forEach(tech => {
    const $a = $(`
      <a href="${tech.url}" target="_blank">
        <img src="${tech.icon}" alt="${tech.name}" title="${tech.name}">
        <p>${tech.name}</p>
      </a>
    `);
    $dataCarousel.append($a);
  });
  $webCarousel.append($webCarousel.children().clone());
  $dataCarousel.append($dataCarousel.children().clone());
}
function updateTechs(selectedLang) {
  const $webInfo = $(".web-info");
  $webInfo.find("h1").text(techTexts[selectedLang].web.title);
  $webInfo.find("p").first().text(techTexts[selectedLang].web.description);

  const $webTopics = $webInfo.find(".topics").empty();
  $.each(techTexts[selectedLang].web.topics, function(_, topic) {
    $webTopics.append($(`<a>`)
      .attr("href", `https://www.google.com/search?q=${encodeURIComponent(topic)}`)
      .attr("target", "_blank")
      .text(topic)
    );
  });
  const $dataInfo = $(".data-info");
  $dataInfo.find("h1").text(techTexts[selectedLang].data.title);
  $dataInfo.find("p").first().text(techTexts[selectedLang].data.description);

  const $dataTopics = $dataInfo.find(".topics").empty();
  $.each(techTexts[selectedLang].data.topics, function(_, topic) {
    $dataTopics.append($(`<a>`)
      .attr("href", `https://www.google.com/search?q=${encodeURIComponent(topic)}`)
      .attr("target", "_blank")
      .text(topic)
    );
  });
}
// ---------- Projects ----------
function populateProjects() {
  const $projectsContainer = $(".projects");
  $projectsContainer.empty(); 
  projectsData.forEach(p => {
    const $techs = p.techs.map(tech => `
      <span class="tech-tag">
        <img src="${tech.logo}" alt="${tech.name}" class="tech-logo">
      </span>
    `).join("");
    const $contentDiv = $(`
      <div class="project-content">
        <div class="project-header">
          <h1>${p.title}</h1>
          <a href="${p.link}" target="_blank" class="style btn-type-2">
            <i class="ri-image-circle-fill ri-2x"></i>
          </a>
        </div>
        <p>${p.description}</p>
        <div class="project-techs">
          ${$techs}
          <button class="see-more-btn style btn-type-2">See More</button>
        </div>
      </div>
    `);
    const $slider = $('<div class="project-slider" style="display:none;"></div>');
    const $img = $(`<img src="${p.images[0]}" alt="${p.title}">`);
    $slider.append($img);
    let index = 0;
    const intervalId = setInterval(() => {
      if ($slider.is(":visible")) {
        index = (index + 1) % p.images.length;
        $img.addClass("fade-out");
        setTimeout(() => {
          $img.attr("src", p.images[index]);
          $img.removeClass("fade-out");
        }, 500);
      }
    }, 4000);
    $contentDiv.find(".see-more-btn").on("click", function () {
      $slider.slideToggle();
    });
    const $card = $('<div class="project-card style"></div>');
    $card.append($contentDiv, $slider);
    $projectsContainer.append($card);
  });
}
// ---------- Educations ----------
function updateEdu(selectedLang) {
  const texts = eduTexts[selectedLang];
  const $uni = $(".uni");
  $uni.children().eq(0).find("h2").text(texts.ceMajor);
  $uni.children().eq(0).find("i").attr("title", texts.ceMajor);

  $uni.children().eq(1).find("h2").text(texts.degree);
  $uni.children().eq(1).find("p").text(texts.ceValue);

  $uni.children().eq(2).find("h2").text(texts.institute);
  $uni.children().eq(2).find("p").text(texts.instituteValue);

  $uni.children().eq(3).find("h2").text(texts.duration);
  $uni.children().eq(3).find("p").text(texts.durationValue);
  const $lng = $(".lng");
  $lng.children().eq(0).find("h2").text(texts.languages);
  $lng.children().eq(0).find("i").attr("title", texts.languages);

  $lng.children().eq(1).find("h2").text(texts.persian);
  $lng.children().eq(1).find("p").text(texts.persianLevel);

  $lng.children().eq(2).find("h2").text(texts.english);
  $lng.children().eq(2).find("p").text(texts.englishLevel);

  $lng.children().eq(3).find("h2").text(texts.german);
  $lng.children().eq(3).find("p").text(texts.germanLevel);
}
function populateCerts(lang = "en") {
  const $certsList = $(".certs-list");
  $certsList.empty(); 
  
  certs[lang].forEach(c => {
    const $techs = c.techs.map(t => `<p class="style btn">${t}</p>`).join("");
    const $row1 = $(`
      <div class="row-1">
        <div class="titles">
          <div><h2>${c.name}</h2></div>
          <div><h3>${c.place}</h3></div>
          <div><h4>${c.date}</h4></div>
        </div>
        <button class="see-more-btn style btn-type-2">See More</button>
      </div>
    `);
    const $row2 = $(`
      <div class="row-2 techs" style="display:none;">
        <button class="style btn-type-2">
          <i class="ri-image-circle-fill ri-2x"></i>
        </button>
        ${$techs}
      </div>
    `);
    $row1.find(".see-more-btn").on("click", function () {
      $row2.stop(true, true).slideToggle(400);
      $(this).text($row2.is(":visible") ? "See Less" : "See More");
    });
    const $certCard = $('<div class="style cert"></div>');
    $certCard.append($row1, $row2);
    $certsList.append($certCard);
  });
}

function updateCerts(selectedLang) {
  const $certsList = $(".certs-list");
  $certsList.empty(); 
  populateCerts(selectedLang)
}
// ---------- Footer ----------
function updateFooter(selectedLang) {
    $("#footer-txt").text(footerText[selectedLang]);
}
// ---------- Language ----------
function switchLanguage() {
    const languages = ["en", "de", "fa"];
    const currentIndex = languages.indexOf(selectedLang);
    selectedLang = languages[(currentIndex + 1) % languages.length];
    $("#lang-btn span").text(selectedLang.toUpperCase());
    // Update sections
    updateHeader(selectedLang);
    updateIntro(selectedLang);
    updateTechs(selectedLang);
    updateEdu(selectedLang)
    updateFooter(selectedLang);
    updateCerts(selectedLang)
}
// ---------- Main ----------
let selectedLang = 'en';
$(function () {
  let selectedWidth = window.innerWidth;
  createStars({ starCount: 100, maxTime: 100 });

  $("#theme-btn").on("click", toggleTheme);

  $(".hamburger-btn").on("click", toggleHamburger);

  $("#lang-btn").on("click", switchLanguage);
  populateTechCarousels()
  populateProjects()
  populateCerts("en")
});
