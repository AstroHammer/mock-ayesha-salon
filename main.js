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
        accordionButton.classList.toggle('active');
        const accordionItemBody = accordionButton.parentElement.nextElementSibling;
        if (accordionButton.classList.contains('active')) {
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
      left: event.deltaY < 0 ? -200 : 200,
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
        div.addEventListener('click', () => {
            console.log('show thyself!');
            itemChilds.style.transition = 'transform .8s .5s cubic-bezier(.6,0,.3,1)';
            itemChilds.style.transform = `translateX(${-itemWidth + itemWidth}px)`;
        })
    }

    function activateTranslate(itemChilds, div, itemWidth) {
        div.addEventListener('click', () => {
            if (itemChilds.classList.contains('pre-slide-bg')) {
                activateFirstSlide(itemChilds, itemWidth);
                console.log("ran IF");
            } else {
                activateSecondSlide(itemChilds, itemWidth);
                console.log("then ran ELSE");
            }
        })
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