//Services Accordion Boxes

const accordionButtons = document.querySelectorAll('.accordion-item-btn');

accordionButtons.forEach(accordionButton => {
    accordionButton.addEventListener('click', event => {
        accordionButton.classList.toggle('active');
        const accordionItemBody = accordionButton.parentElement.nextElementSibling;
        if (accordionButton.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
            if (accordionItemBody.style.maxHeight > "500px") {
                accordionItemBody.style.transitionDuration = ".4s";
            }
            
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

//Single Item Accordions for FAQ

const smallAccordionButtons = document.querySelectorAll('.single-cordion-item-btn');

smallAccordionButtons.forEach(accordionButton => {
    accordionButton.addEventListener('click', event => {
        accordionButton.classList.toggle('active-2');
        const accordionItemBody = accordionButton.parentElement.nextElementSibling;
        if (accordionButton.classList.contains('active-2')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

//Logo carousel in Footer

const scrollers = document.querySelectorAll('.carousel');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const innerScroller = scroller.querySelector('.inner-scroller');
        const scrollerContent = Array.from(innerScroller.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            innerScroller.appendChild(duplicatedItem);
        })
    })
}


//Script for Image Collage


let scrollingGrid = document.querySelector('.flow-grid');

scrollingGrid.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollingGrid.scrollBy({
      left: event.deltaY < 0 ? -80 : 80,
    });


});
  

window.onload = function() {

    let item = document.querySelectorAll('.item');
    item.forEach(div => {
        let itemChilds = div.children;
        

        for (let i = 0; i < itemChilds.length; i++) {

            let ogWidth = itemChilds[i].getBoundingClientRect().width;
            let itemWidth = Math.ceil(ogWidth);
            
            setSlidePosition(itemChilds[i], itemWidth);
            activateTranslate(itemChilds[i], div, itemWidth);
        }
    })

    function setSlidePosition(itemChilds, itemWidth) {
        itemChilds.style.transform = `translateX(${itemWidth}px)`;
    }

    function activateTranslate(itemChilds, div, itemWidth) {
        createObserver();
        function createObserver() {
            let observer;
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: .1,
            };
            observer = new IntersectionObserver(handleTranslate, options);
            observer.observe(div);
        }
        function handleTranslate(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (itemChilds.classList.contains('pre-slide-bg')) {
                        activateFirstSlide(itemChilds, itemWidth);
                        observer.unobserve(div);
                    } else {
                        activateSecondSlide(itemChilds, itemWidth);
                        observer.unobserve(div);
                    }
                }
            })
        }
    }

    function activateFirstSlide(itemChilds, itemWidth) {
        itemChilds.style.transition = 'transform .8s cubic-bezier(.6,0,.3,1)';
        itemChilds.style.transform = `translateX(${-itemWidth + itemWidth}px)`;
    }
    function activateSecondSlide(itemChilds, itemWidth) {
        itemChilds.style.transition = 'transform .8s .8s cubic-bezier(.6,0,.3,1)';
        itemChilds.style.transform = `translateX(${-itemWidth + itemWidth}px)`;
    }

}


//Script for Service Cost Alterator



let testing = document.querySelectorAll('.skill-level-menu');
// add eventlisteners to all select elements
// when clicked remove class from all and then add class to element clicked
// then identify all the options from that menu clicked
testing.forEach(menu => {
    menu.addEventListener('click', () => {
        for (i = 0; i < testing.length; i++) {
            testing[i].classList.remove('menu-entered');
        }
        menu.classList.add('menu-entered');
    })
    let testEl = menu.children;
    for (i = 0; i < testEl.length; i++) {
        testOption = testEl[i];
        identifyMenuOptionSelected(testOption, testEl, menu);
    }
})
//add event listeners to all option elements that were inside the previously clicked menu
//remove class from all other options elements within that menu
//add class to option selected within that menu
//store which option in that menu is selected and it's text value
function identifyMenuOptionSelected(testOption, testEl, menu) {
    testOption.addEventListener('click', () => {
        if (testOption.parentElement.classList.contains('menu-entered')) {
            for (i = 0; i < testEl.length; i++) {
                testEl[i].removeAttribute('selected');
            }
            testOption.setAttribute('selected', '');
            selectedOptionValue = menu.options[menu.selectedIndex].text;
            targetTotalDivs(selectedOptionValue, menu);
        }
    })
}
//use previously clicked menu's parent to traverse to another container within the same parent
//store the children of that container
//iterate through each of those childrens' children and store each one
//iterate through each of those children looking for the children that contain the class 'flex-end'
//store each element with that class in a variable
//send that variable out to run a function with it
function targetTotalDivs(selectedOptionValue, menu) {
    let boopie = menu.parentElement.nextElementSibling.children;

    for (i = 0; i < boopie.length; i++) {
        let flexEnd = boopie[i].children;
        for (j = 0; j < flexEnd.length; j++) {
            if (flexEnd[j].classList.contains('flex-end')) {
                targetFlexEnd = flexEnd[j];
                changeTotal(targetFlexEnd, selectedOptionValue);
            }
        }
    }
}
//apply styling to the element with class 'flex-end' if
//the clicked option within the previously clicked menu value is X
function changeTotal(targetFlexEnd, selectedOptionValue) {
    

    // let price = ;
    // let partialPrice = ;
    // let fullPrice = ;
    if (selectedOptionValue == "Level 1") {


        // targetFlexEnd.style.color = 'red';
    } else if (selectedOptionValue == "Level 2") {


        // targetFlexEnd.style.color = 'blue';
    } else if (selectedOptionValue == "Level 3") {


        // targetFlexEnd.style.color = 'green';
    } else if (selectedOptionValue == "Level 4") {


        // targetFlexEnd.style.color = 'yellow';
    } else if (selectedOptionValue == "Level 5") {


        // targetFlexEnd.style.color = 'orange';
    } else if (selectedOptionValue == "Level 6") {


        // targetFlexEnd.style.color = 'teal';
    } else if (selectedOptionValue == "Level 7") {


        // targetFlexEnd.style.color = 'purple';
    } else if (selectedOptionValue == "Level 8") {


        // targetFlexEnd.style.color = 'pink';
    }
}

// if selectedOptionValue of the previously click menu is Level 1
// AND if that targetFlexEnd[i] contains an ID of X
// go to specific function
// else, do next iteration


function highLight_Prices() {

}
function balayage_Prices() {

}
function foil_Prices() {

}
function roots_Prices() {

}
function grayCoverage_Prices() {

}
function unicord_Prices() {

}
function mermaid_Prices() {

}
function custom_Prices() {

}
function lace_Clip_Prices() {

}
function seamless_Clip_Prices() {

}
function halos_Clip_Prices() {

}
function ponytails_Clip_Prices() {

}
function bangs_Clip_Prices() {

}
function lace_Wig_Prices() {

}
function mono_Wig_Prices() {

}
function combo_Wig_Prices() {

}
function capless_Wig_Prices() {

}
function traditional_Sew_Prices() {

}
function full_Sew_Prices() {

}
function partial_Sew_Prices() {

}
function vixen_Sew_Prices() {

}
function versatile_Sew_Prices() {

}
function deg_0() {

}
function deg_45() {

}
function deg_90() {

}
function deg_180() {

}
function trim() {

}
function volume_Style() {

}
function straight_Style() {

}
function curls_Style() {

}
function braid_Style() {

}
function educate_Style() {

}
function bridal_MakeUp() {

}
function bach_MakeUp() {

}
function fx_MakeUp() {
    
}