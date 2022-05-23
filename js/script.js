window.onload = function () {
  //위로가기
  let gotop = $(".gotop");

  gotop.click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    if (temp > 110) {
      gotop.addClass("gotop-active");
    } else {
      gotop.removeClass("gotop-active");
    }
  });

  // 헤더
  let header = $(".header");
  let text_position = $(".text-box").offset().top;

  let window_h = $(window).scrollTop();
  window_h = $(window).scrollTop();
  if (window_h > text_position) {
    header.addClass("header-active");
  } else {
    header.removeClass("header-active");
  }

  // 스크롤했을 때
  $(window).scroll(function () {
    window_h = $(window).scrollTop();
    if (window_h > text_position) {
      header.addClass("header-active");
    } else {
      header.removeClass("header-active");
    }
  });

  // 메뉴 이동
  let gnb_a = $(".gnb > li > a");
  let menu = ["#aboutme", "#portfolio", "#experiences", "#contact"];
  let menu_position = [];

  $.each(gnb_a, function (index, item) {
    $(this).click(function (event) {
      event.preventDefault();
      link = $(this).attr("href");
      let link_position = Math.ceil($(link).offset().top);
      $("html").animate(
        {
          scrollTop: link_position,
        },
        1000
      );
    });
  });

  // 비주얼
  const text1 = "Hi, I'm Lee Minjae,";
  const text2 =
    " a front-end developer who loves learning & challenging myself.";

  const text1_space = document.querySelector(".text-words > h1");
  const text2_space = document.querySelector(".text-words > p");

  let i = 0;
  let j = 0;
  let upper_timer;
  let lower_timer;
  let totalUpper = "";
  let totalLower = "";
  let delay;

  function typingUpper() {
    let upper = text1[i++];
    totalUpper += upper;
    text1_space.innerHTML = totalUpper + '<span class="blink"></span>';

    if (i > text1.length - 1) {
      clearInterval(upper_timer);
      text1_space.innerHTML = totalUpper;
      lower_timer = setInterval(typingLower, 150);
    }
  }

  upper_timer = setInterval(typingUpper, 150);

  function typingLower() {
    let lower = text2[j++];
    totalLower += lower;
    text2_space.innerHTML = totalLower + '<span class="blink"></span>';

    if (j > text2.length - 1) {
      text1_space.innerHTML = "";
      text2_space.innerHTML = "";
      i = 0;
      j = 0;
      totalLower = "";
      totalUpper = "";
      clearInterval(lower_timer);
      upper_timer = setInterval(typingUpper, 150);
    }
  }

  // 포트폴리오
  let portfolio_arr = [];
  let portfolio_left = $(".left");
  let portfolio_right = $(".right");
  let portfolio_html_left = "";
  let portfolio_html_right = "";
  let json_total = 2;
  let json_count = 0;

  function showMore() {
    portfolio_left.html(portfolio_html_left);
    portfolio_right.html(portfolio_html_right);
  }

  function showMoreJson(_url) {
    json_count++;
    if (json_count == json_total) {
      $(".more").hide();
    }

    fetch(_url)
      .then((res) => res.json())
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          portfolio_arr[i] = result[i];
          let temp = portfolio_arr[i];

          if (!(i % 2)) {
            portfolio_html_left += `
            <div class="description">
              <h2>${temp.title}</h2>
              <span>${temp.category}</span>
              <p>${temp.period}</p>
  
              <div class="skills">
              <div class="skill-box">
                <i class="fab fa-html5"></i>
                <span>${temp.toolkit[0]}</span>
              </div>

              <div class="skill-box">
                <i class="fab fa-css3"></i>
                <span>${temp.toolkit[1]}</span>
              </div>

              <div class="skill-box">
                <i class="fab fa-js"></i>
                <span>${temp.toolkit[2]}</span>
              </div>`;

            if (temp.vue === "1") {
              portfolio_html_left += `
                <div class="skill-box">
                <i class="fab fa-vuejs"></i>
                <span>${temp.toolkit[3]}</span>
              </div>`;
            }

            portfolio_html_left += `
            </div>
  
            <div class="site">
              <a href="${temp.wlink}" target="_blank"><img src="${temp.thumbnail}"
                  alt="${temp.alt}"></a>
            </div>
  
            <div class="link">
              <ul class="link-wrap clearfix">`;

            if (temp.clone === "1") {
              portfolio_html_left += `
              <li>
                <a href="${temp.wlink}" target="_blank" class="underline">
                  Work 
                <i class="far fa-caret-square-right"></i>
                </a>
              </li>`;
            }

            if (temp.res === "1") {
              portfolio_html_left += `
                  <li>
                    <a href="${temp.rlink}" target="_blank" class="underline">Responsive <i class="fas fa-tablet-alt"></i></a>
                  </li>`;
            }

            if (temp.vue === "1") {
              portfolio_html_left += `
                <li>
                  <a href="${temp.vlink}" target="_blank" class="underline">Vue<i class="fab fa-vuejs"></i></a>
                </li>`;
            }

            portfolio_html_left += `
                  <li>
                    <a href="${temp.glink}" target="_blank" class="underline">Github <i class="fab fa-git-square"></i></a>
                  </li>`;

            if (temp.clone === "1") {
              portfolio_html_left += `
                  <li>
                    <a href="${temp.olink}" target="_blank" class="underline">Original <i class="fas fa-external-link-alt"></i></a>
                  </li>`;
            }

            portfolio_html_left += `
                </ul>
              </div>
            </div>
          
            <div class="line-s"></div>`;
          } else {
            portfolio_html_right += `
            <div class="description">
              <h2>${temp.title}</h2>
              <span>${temp.category}</span>
              <p>${temp.period}</p>
  
              <div class="skills">
              <div class="skill-box">
                <i class="fab fa-html5"></i>
                <span>${temp.toolkit[0]}</span>
              </div>

              <div class="skill-box">
                <i class="fab fa-css3"></i>
                <span>${temp.toolkit[1]}</span>
              </div>

              <div class="skill-box">
                <i class="fab fa-js"></i>
                <span>${temp.toolkit[2]}</span>
              </div>`;

            if (temp.vue === "1") {
              portfolio_html_right += `
                <div class="skill-box">
                <i class="fab fa-vuejs"></i>
                <span>${temp.toolkit[3]}</span>
              </div>`;
            }

            portfolio_html_right += `
            </div>
  
            <div class="site">
              <a href="${temp.wlink}" target="_blank"><img src="${temp.thumbnail}"
                  alt="${temp.alt}"></a>
            </div>
  
            <div class="link">
              <ul class="link-wrap clearfix">`;

            if (temp.clone === "1") {
              portfolio_html_right += `
              <li>
                <a href="${temp.wlink}" target="_blank" class="underline">
                  Work 
                <i class="far fa-caret-square-right"></i>
                </a>
              </li>`;
            }

            if (temp.res === "1") {
              portfolio_html_right += `
                  <li>
                    <a href="${temp.rlink}" target="_blank" class="underline">Responsive <i class="fas fa-tablet-alt"></i></a>
                  </li>`;
            }

            if (temp.vue === "1") {
              portfolio_html_right += `
                <li>
                  <a href="${temp.vlink}" target="_blank" class="underline">Vue<i class="fab fa-vuejs"></i></a>
                </li>`;
            }

            portfolio_html_right += `
                  <li>
                    <a href="${temp.glink}" target="_blank" class="underline">Github <i class="fab fa-git-square"></i></a>
                  </li>`;

            if (temp.clone === "1") {
              portfolio_html_right += `
                  <li>
                    <a href="${temp.olink}" target="_blank" class="underline">Original <i class="fas fa-external-link-alt"></i></a>
                  </li>`;
            }

            portfolio_html_right += `
                </ul>
              </div>
            </div>
          
            <div class="line-s"></div>`;
          }
        }
        showMore();
      });
  }

  $(".more").click(function () {
    showMoreJson("portfolio2.json");
  });

  showMoreJson("portfolio1.json");
};
