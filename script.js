
// slides
let slides = document.querySelectorAll('.slides'); 

// arrows
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');

// will use counter to keep track of what slide to show next/previous
let count = 0;

 //slide buttons underneath slidecontainer turned into a real array
let slideButtons = Array.prototype.slice.call( document.getElementById('slide-nav').children );

/* This function gives the first slide-button at bottom of slides class 'active' 
which will make slide button appear bigger to let user know that they viewing that slide, but it will be called from inside startSlide()*/

let initDot = function(){
let firstSlideButton =  document.querySelector('.slide-buttons')//selects first dot
firstSlideButton.classList.add('active')


};

/*this function will be used on each function to wipe our slide wrapper clean before displaying next slide
and also remove class 'active' from the slide button that is being viewed*/
let reset = function(){
	for(let i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
		slideButtons[i].classList.remove('active');
	}
}

//makes only the first slide visible upon load
let startSlide = function(){
	reset();
	slides[0].style.display = 'block';
	initDot();
};

startSlide();

//left arrow to show previous slide
let slideLeft = function(){
	reset();

	if(count === 0){
		count = slides.length;
		slides[count - 1].style.display = 'block';
		slideButtons[count-1].classList.add('active');
	}

	else{slides[count - 1].style.display = 'block';
		slideButtons[count-1].classList.add('active')
}
--count;
}

//right arrow show next slide
let slideRight = function(){
	reset();
	if(count === slides.length-1){
		count = -1;
		slides[count + 1].style.display = 'block';
		slideButtons[count+1].classList.add('active');
	}

	else{
		slides[count + 1].style.display = 'block';
		slideButtons[count+1].classList.add('active');
	}
		++count;
	}

//keypad functionality for left', 'right'
let checkKey = function(e) {

    e = e || window.event;

    if(e.keyCode == '37' ) {
       // left arrowa
  return slideLeft();
    }
    else if (e.keyCode == '39') {
       // right arrow
       return slideRight();
    }
}

// giving slidebuttons underneath slides ability to listen for click
let addEvent = function(index){
	slideButtons[index].addEventListener('click', function(){
	reset();
	slideButtons[index].classList.add('active');
slides[index].style.display = 'block';;
count=index;});
}

// EventListeners

// keypad eventlistener
document.addEventListener('keydown', checkKey);

// eventlistener on arrows to navigate through slides
leftArrow.addEventListener('click', slideLeft);
rightArrow.addEventListener('click', slideRight);

// iterate through slidebuttons to fire add event function
slideButtons.forEach(function(slideButton){
    addEvent(slideButtons.indexOf(slideButton));
});


