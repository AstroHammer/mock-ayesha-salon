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
                        console.log("ran IF");
                    } else {
                        activateSecondSlide(itemChilds, itemWidth);
                        observer.unobserve(div);
                        console.log("then ran ELSE");
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

const selectEl_Highlights = document.querySelector('.highlights');
const selectValue_Highlights = selectEl_Highlights.options;

const selectEl_TouchUp = document.querySelector('.touch-up');
const selectValue_TouchUp = selectEl_TouchUp.options;

const selectEl_Funky = document.querySelector('.funky');
const selectValue_Funky = selectEl_Funky.options;

const selectEl_ClipIns = document.querySelector('.clip-ins');
const selectValue_ClipIns = selectEl_ClipIns.options;

const selectEl_Wigs = document.querySelector('.wigs');
const selectValue_Wigs = selectEl_Wigs.options;

const selectEl_Weave = document.querySelector('.weave');
const selectValue_Weave = selectEl_Weave.options;

const selectEl_Cuts = document.querySelector('.cuts');
const selectValue_Cuts = selectEl_Cuts.options;

const selectEl_Styling = document.querySelector('.styling');
const selectValue_Styling = selectEl_Styling.options;

const selectEl_MakeUp = document.querySelector('.make-up');
const selectValue_MakeUp = selectEl_MakeUp.options;

const insertTotalHere = document.querySelector('.flex-end');



function selectedSkillLevel() {
    //will apply "selected" attribute to element chosen
    //will clear "selected" attribute from all other options
}

function changePrices() {
    //register which element has "selected" attribute
    //calculate a total price based off the element selected (skill level)
    //Total price for Full and divide by 2 for partial
}

