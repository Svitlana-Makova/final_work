// (function($) {

// 	var tabs =  $(".tabs li a");
  
// 	tabs.click(function() {
// 		var content = this.hash.replace('/','');
// 		tabs.removeClass("active");
// 		$(this).addClass("active");
//     $("#content").find('p').hide();
//     $(content).fadeIn(200);
// 	});

// })(jQuery);

$(document).ready(function () {
  var tabs = $(".content"); // тут должны быть табы а не кнопки, сами табы у нас имеют класс content, его достаточно
  $(tabs[0]).show();
  $(".experience-name").click(function (e) {
    e.preventDefault(); // чтобы после нажатия на кнопку, экран не прыгал наверх
    // var content = this.hash.replace("/", ""); // не понял, зачем эта штука 
    
    tabs.removeClass("active"); // 
    $(this).addClass("active"); // в обоих этих строчках удаляем и добавляем класс, но он ни на
    // что не влияет, по скольку мы используем только JS без CSS.

    // Скрыть все элементы <li> с классом "content"
    $("li p.content").hide();
    // Найти соответствующий элемент <li> с помощью атрибута "data-target"
    var target = $(this).attr("data-target");
    $(target).fadeIn(200);
    // Отобразить найденный элемент <li> с классом "content"
    $(target).show();
  });
});

/*carousel*/
$(document).ready(function () {
  $(".carousel").slick({
      dots: true,
      arrows: false,
});
});

/*carousel*/
$(document).ready(function () {
  $(".carousel-achievements-mobile").slick({
      dots: true,
      arrows: false,
});
});

$(document).ready(function () {
  $(".carousel-achievements").slick({
      dots: true,
      arrows: false,
});
});



// Scroll
$.fn.scrollFun = function () {
	$(this).click(function (e) {
		var h = $(this).attr('href'),
			target;

		if (h.charAt(0) == '#' && h.length > 1 && (target = $(h)).length > 0) {
			var pos = Math.max(target.offset().top, 0);
			e.preventDefault();
			$('body,html').animate({
				scrollTop: pos
			}, 'slow', 'swing');
		}
	});
};
$('.scroll').scrollFun();

/*active*/
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('active');
    item.removeAttribute('style');
  });
  
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  
  

  el.classList.add('active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('active') && handleIndicator(item);
});

// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu-open");
};

