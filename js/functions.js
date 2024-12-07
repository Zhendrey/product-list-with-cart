//!ACTIVATING A SPOILER!

//!PARENT METHOD
export function spoiler(buttonParent, buttonsClass, invisiblePartClass,  invisibleContentElement) {
    buttonParent.addEventListener("click", function(event){
        const targetElem = event.target;
        if(targetElem){
            const originalValue = event.target.textContent;
            const hiddenPart = event.target.closest(invisiblePartClass)
            invisibleContentElement.classList.toggtle("active");
            targetElem.classList.toggle("minus");
            if(targetElem.classList.contains("minus")){
                targetElem.textContent = '-';
            }else{
                targetElem.textContent = originalValue;
            }
        }
    })
}


export function renderContent(
    data, 
    options, 
    images,
    kinds, 
    titles, 
    prices
) {
    const tabletWidth = 768;
    const mobileWidth = 425;
    [...options].forEach((item, index)=>{
            const width = window.innerWidth;
            switch (true) {
                case width > tabletWidth:
                    [...images][index].src = data[index].image.desktop;
                    break;
                case width > mobileWidth:
                    [...images][index].src = data[index].image.tablet;
                    break;
                case width < mobileWidth:
                    [...images][index].src = data[index].image.mobile;
                    break;
            
                default:
                    break;
            }
        Array.from(kinds)[index].textContent = data[index].category;
        [...titles][index].textContent = data[index].name;
        [...prices][index].textContent = `$${data[index].price.toFixed(2)}`;
    })
}

export function generateOptionObj(parent){
    let optionsData = [];
    for (let i = 0; i < parent.length; i++) {
        optionsData.push(
            {
            id: i,
            qty: 0,
            clicks: 0,
        }
    )
}
return optionsData;
}