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

//click events on option elements don't work on mobile
//take click events off option elements first
//use onchange event for select element, that when there is change in option selection, to re-evaluate what the selected option was
//apply attribue to that selected option, store that option, and send it out


//on change of select element, if the changed selected option's parent element contains class menu entered....
// then iterate through options to remove selected, then add selected to the selected option
// i need to find out what the select option has been on change event from selected element

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
    console.log(testEl);
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
                let targetFlexEnd = flexEnd[j];
                determinePrice(targetFlexEnd, selectedOptionValue);
            }
        }
    }
}


//apply html to the element with class 'flex-end' if
//the clicked option within the previously clicked menu value is X
//determining the increase of the price based on level here
function determinePrice(targetFlexEnd, selectedOptionValue) {
    if (selectedOptionValue == "Level 1") {
        determineOptionPrices(targetFlexEnd);

        let returnValue = determineOptionPrices(targetFlexEnd);
        
        if (targetFlexEnd.classList.contains('two-price')) {
            let fullPrice = returnValue[0] * 1;
            let partialPrice = returnValue[1] * 1;
            if (targetFlexEnd.classList.contains('minimum-price')) {
                let price = '$' + `${fullPrice}` + '+' + ' ' + '/' + ' ' + '$' + `${partialPrice}` + '+';
                applyPrices(price, targetFlexEnd);
            } else {
                let price = '$' + `${fullPrice}` + ' ' + '/' + ' ' + '$' + `${partialPrice}`;
                applyPrices(price, targetFlexEnd);
            }
        } else {
            if (targetFlexEnd.classList.contains('minimum-price')) {
                returnValue = '$' + `${returnValue * 1}` + '+';
                applyPrices(returnValue, targetFlexEnd);
            } else {
                returnValue = '$' + `${returnValue * 1}`;
                applyPrices(returnValue, targetFlexEnd);
            }
        }
    } else if (selectedOptionValue == "Level 2") {
        determineOptionPrices(targetFlexEnd);

        let returnValue = determineOptionPrices(targetFlexEnd);

        if (targetFlexEnd.classList.contains('two-price')) {
            let fullPrice = returnValue[0] * 2;
            let partialPrice = returnValue[1] * 2;
            if (targetFlexEnd.classList.contains('minimum-price')) {
                let price = '$' + `${fullPrice}` + '+' + ' ' + '/' + ' ' + '$' + `${partialPrice}` + '+';
                applyPrices(price, targetFlexEnd);
            } else {
                let price = '$' + `${fullPrice}` + ' ' + '/' + ' ' + '$' + `${partialPrice}`;
                applyPrices(price, targetFlexEnd);
            }
        } else {
            if (targetFlexEnd.classList.contains('minimum-price')) {
                returnValue = '$' + `${returnValue * 2}` + '+';
                applyPrices(returnValue, targetFlexEnd);
            } else {
                returnValue = '$' + `${returnValue * 2}`;
                applyPrices(returnValue, targetFlexEnd);
            }
        }
    } else if (selectedOptionValue == "Level 3") {
        determineOptionPrices(targetFlexEnd);

        let returnValue = determineOptionPrices(targetFlexEnd);

        if (targetFlexEnd.classList.contains('two-price')) {
            let fullPrice = returnValue[0] * 3;
            let partialPrice = returnValue[1] * 3;
            if (targetFlexEnd.classList.contains('minimum-price')) {
                let price = '$' + `${fullPrice}` + '+' + ' ' + '/' + ' ' + '$' + `${partialPrice}` + '+';
                applyPrices(price, targetFlexEnd);
            } else {
                let price = '$' + `${fullPrice}` + ' ' + '/' + ' ' + '$' + `${partialPrice}`;
                applyPrices(price, targetFlexEnd);
            }
        } else {
            if (targetFlexEnd.classList.contains('minimum-price')) {
                returnValue = '$' + `${returnValue * 3}` + '+';
                applyPrices(returnValue, targetFlexEnd);
            } else {
                returnValue = '$' + `${returnValue * 3}`;
                applyPrices(returnValue, targetFlexEnd);
            }
        }
    } else if (selectedOptionValue == "Level 4") {
        determineOptionPrices(targetFlexEnd);

        let returnValue = determineOptionPrices(targetFlexEnd);

        if (targetFlexEnd.classList.contains('two-price')) {
            let fullPrice = returnValue[0] * 4;
            let partialPrice = returnValue[1] * 4;
            if (targetFlexEnd.classList.contains('minimum-price')) {
                let price = '$' + `${fullPrice}` + '+' + ' ' + '/' + ' ' + '$' + `${partialPrice}` + '+';
                applyPrices(price, targetFlexEnd);
            } else {
                let price = '$' + `${fullPrice}` + ' ' + '/' + ' ' + '$' + `${partialPrice}`;
                applyPrices(price, targetFlexEnd);
            }
        } else {
            if (targetFlexEnd.classList.contains('minimum-price')) {
                returnValue = '$' + `${returnValue * 4}` + '+';
                applyPrices(returnValue, targetFlexEnd);
            } else {
                returnValue = '$' + `${returnValue * 4}`;
                applyPrices(returnValue, targetFlexEnd);
            }
        }
    } else if (selectedOptionValue == "Level 5") {
        determineOptionPrices(targetFlexEnd);

        let returnValue = determineOptionPrices(targetFlexEnd);

        if (targetFlexEnd.classList.contains('two-price')) {
            let fullPrice = returnValue[0] * 5;
            let partialPrice = returnValue[1] * 5;
            if (targetFlexEnd.classList.contains('minimum-price')) {
                let price = '$' + `${fullPrice}` + '+' + ' ' + '/' + ' ' + '$' + `${partialPrice}` + '+';
                applyPrices(price, targetFlexEnd);
            } else {
                let price = '$' + `${fullPrice}` + ' ' + '/' + ' ' + '$' + `${partialPrice}`;
                applyPrices(price, targetFlexEnd);
            }
        } else {
            if (targetFlexEnd.classList.contains('minimum-price')) {
                returnValue = '$' + `${returnValue * 5}` + '+';
                applyPrices(returnValue, targetFlexEnd);
            } else {
                returnValue = '$' + `${returnValue * 5}`;
                applyPrices(returnValue, targetFlexEnd);
            }
        }
    } else if (selectedOptionValue == "Level 6") {
        determineOptionPrices(targetFlexEnd);

        let returnValue = determineOptionPrices(targetFlexEnd);

        if (targetFlexEnd.classList.contains('two-price')) {
            let fullPrice = returnValue[0] * 6;
            let partialPrice = returnValue[1] * 6;
            if (targetFlexEnd.classList.contains('minimum-price')) {
                let price = '$' + `${fullPrice}` + '+' + ' ' + '/' + ' ' + '$' + `${partialPrice}` + '+';
                applyPrices(price, targetFlexEnd);
            } else {
                let price = '$' + `${fullPrice}` + ' ' + '/' + ' ' + '$' + `${partialPrice}`;
                applyPrices(price, targetFlexEnd);
            }
        } else {
            if (targetFlexEnd.classList.contains('minimum-price')) {
                returnValue = '$' + `${returnValue * 6}` + '+';
                applyPrices(returnValue, targetFlexEnd);
            } else {
                returnValue = '$' + `${returnValue * 6}`;
                applyPrices(returnValue, targetFlexEnd);
            }
        }
    } else if (selectedOptionValue == "Level 7") {
        determineOptionPrices(targetFlexEnd);

        let returnValue = determineOptionPrices(targetFlexEnd);

        if (targetFlexEnd.classList.contains('two-price')) {
            let fullPrice = returnValue[0] * 7;
            let partialPrice = returnValue[1] * 7;
            if (targetFlexEnd.classList.contains('minimum-price')) {
                let price = '$' + `${fullPrice}` + '+' + ' ' + '/' + ' ' + '$' + `${partialPrice}` + '+';
                applyPrices(price, targetFlexEnd);
            } else {
                let price = '$' + `${fullPrice}` + ' ' + '/' + ' ' + '$' + `${partialPrice}`;
                applyPrices(price, targetFlexEnd);
            }
        } else {
            if (targetFlexEnd.classList.contains('minimum-price')) {
                returnValue = '$' + `${returnValue * 7}` + '+';
                applyPrices(returnValue, targetFlexEnd);
            } else {
                returnValue = '$' + `${returnValue * 7}`;
                applyPrices(returnValue, targetFlexEnd);
            }
        }
    } else if (selectedOptionValue == "Level 8") {
        determineOptionPrices(targetFlexEnd);

        let returnValue = determineOptionPrices(targetFlexEnd);

        if (targetFlexEnd.classList.contains('two-price')) {
            let fullPrice = returnValue[0] * 8;
            let partialPrice = returnValue[1] * 8;
            if (targetFlexEnd.classList.contains('minimum-price')) {
                let price = '$' + `${fullPrice}` + '+' + ' ' + '/' + ' ' + '$' + `${partialPrice}` + '+';
                applyPrices(price, targetFlexEnd);
            } else {
                let price = '$' + `${fullPrice}` + ' ' + '/' + ' ' + '$' + `${partialPrice}`;
                applyPrices(price, targetFlexEnd);
            }
        } else {
            if (targetFlexEnd.classList.contains('minimum-price')) {
                returnValue = '$' + `${returnValue * 8}` + '+';
                applyPrices(returnValue, targetFlexEnd);
            } else {
                returnValue = '$' + `${returnValue * 8}`;
                applyPrices(returnValue, targetFlexEnd);
            }
        }
    }
}

//determining base price here
function determineOptionPrices(targetFlexEnd) {
    if (targetFlexEnd.classList.contains('highlight-price')) {
        let fullPrice = 4;
        let partialPrice = 2;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('balayage-price')) {
        let fullPrice = 2;
        let partialPrice = 1;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('foil-price')) {
        let fullPrice = 3;
        let partialPrice = 1.50;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('roots-price')) {
        let fullPrice = 5;
        let partialPrice = 2.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('gray-price')) {
        let price = 1;
        return price;
    } else if (targetFlexEnd.classList.contains('unicorn-price')) {
        let fullPrice = 3;
        let partialPrice = 1.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('mermaid-price')) {
        let fullPrice = 7;
        let partialPrice = 3.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('custom-price')) {
        let fullPrice = 5;
        let partialPrice = 2.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('lace-price')) {
        let fullPrice = 9;
        let partialPrice = 4.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('seamless-price')) {
        let fullPrice = 8;
        let partialPrice = 4;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('halos-price')) {
        let fullPrice = 4;
        let partialPrice = 2;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('pony-price')) {
        let fullPrice = 11;
        let partialPrice = 5.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('bangs-price')) {
        let fullPrice = 3;
        let partialPrice = 1.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('lace-wig-price')) {
        let price = 10;
        return price;
    } else if (targetFlexEnd.classList.contains('mono-wig-price')) {
        let price = 8;
        return price;
    } else if (targetFlexEnd.classList.contains('combo-wig-price')) {
        let price = 11;
        return price;
    } else if (targetFlexEnd.classList.contains('capless-wig-price')) {
        let price = 12;
        return price;
    } else if (targetFlexEnd.classList.contains('trad-weave-price')) {
        let fullPrice = 9;
        let partialPrice = 4.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('full-weave-price')) {
        let price = 13;
        return price;
    } else if (targetFlexEnd.classList.contains('part-weave-price')) {
        let price = 7;
        return price;
    } else if (targetFlexEnd.classList.contains('vixen-weave-price')) {
        let fullPrice = 9;
        let partialPrice = 4.5;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('versa-weave-price')) {
        let fullPrice = 2;
        let partialPrice = 1;
        return new Array(fullPrice, partialPrice);
    } else if (targetFlexEnd.classList.contains('0-deg-price')) {
        let price = 3;
        return price;
    } else if (targetFlexEnd.classList.contains('45-deg-price')) {
        let price = 3;
        return price;
    } else if (targetFlexEnd.classList.contains('90-deg-price')) {
        let price = 3;
        return price;
    } else if (targetFlexEnd.classList.contains('180-deg-price')) {
        let price = 3;
        return price;
    } else if (targetFlexEnd.classList.contains('trim-price')) {
        let price = 1;
        return price;
    } else if (targetFlexEnd.classList.contains('volume-price')) {
        let price = 7;
        return price;
    } else if (targetFlexEnd.classList.contains('straight-price')) {
        let price = 4;
        return price;
    } else if (targetFlexEnd.classList.contains('curls-price')) {
        let price = 6;
        return price;
    } else if (targetFlexEnd.classList.contains('braid-price')) {
        let price = 11;
        return price;
    } else if (targetFlexEnd.classList.contains('education-price')) {
        let price = 7;
        return price;
    } else if (targetFlexEnd.classList.contains('bridal-price')) {
        let price = 14;
        return price;
    } else if (targetFlexEnd.classList.contains('bach-price')) {
        let price = 11;
        return price;
    } else if (targetFlexEnd.classList.contains('fx-price')) {
        let price = 16;
        return price;
    }
}


// actually implementing the pricing innerHTML here
function applyPrices(returnValue, targetFlexEnd) {
    targetFlexEnd.innerHTML = returnValue;
}
