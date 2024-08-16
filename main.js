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

// const accordionTitle =  document.querySelectorAll('.accordion-title');



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


let scrollingGrid = document.querySelector('.flow-grid');

scrollingGrid.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollingGrid.scrollBy({
      left: event.deltaY < 0 ? -200 : 200,
    });


});
  




window.onload = function() {

    




    let flowGridRowInner = document.querySelectorAll('.flow-grid-row-inner');
    let item = document.querySelectorAll('.item');

    flowGridRowInner.forEach(child => {
        let flowGridRowInnerChildren = child.children;
        

        for(let i = 0; i < flowGridRowInnerChildren.length; i++) {
            let itemWidth = flowGridRowInnerChildren[i].clientWidth;
            item.forEach(div => {
                let itemChild = div.children;
                
            })
            flowGridRowInnerChildren[i].style.width = itemWidth + 'px';
        }
    })
}

// let item = document.querySelectorAll('.item');
// let itemIn = document.querySelectorAll('.item-in');
// item.forEach(item => {
//     item.addEventListener('mouseover', () => {

//     })
// })


// innerNodes.forEach(innerNode => {
//     let innerNodesChildren = innerNode.children;
    
//     for(let i = 0; i < innerNodesChildren.length; i++) {
//         innerNodesChildren[0].style.transform = `translateX(${nodesWidth}px)`;
//     }
// })