const body = document.body;

const article4 = {
    heading: 'Tab Label 4',
    info : 'With dramatic peaks and pristine lakes, Yellowstone National Park is an outdoor enthusiasts paradise. Multicolored pools swirl around hot springs; verdant forests weave past expansive meadows; and volatile geysers launch streams of steaming water toward the sky. With so much unspoiled natural beauty, its no wonder why everyone suspected John Colter (a scout for explorers Lewis and Clark) was embellishing when he first described Yellowstones geothermal curiosities in 1807. Nowadays, theres no doubt that the park is indeed extraordinary. While you traverse its 3,000-plus square miles of mountains, canyons, geysers and waterfalls, be prepared to share the trails with permanent residents like buffalo, elk and sometimes even grizzlies.'
}



const createArticle = (heading, info) => {

    
    
    let article = `
            <h3 class="article--heading">${heading}</h3>
            <p class="article--info">${info}</p>
            `;
            const divArticle = document.createElement('div');
            divArticle.innerHTML = article
            divArticle.classList.add('.article')
            body.append(divArticle);


};

const initArticle = () => {
    createArticle(article4.heading, article4.info);
}

initArticle()