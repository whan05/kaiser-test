const body = document.body;

const article3 = {
    heading: 'Tab Label 3',
    info : 'One of Californias most formidable natural landscapes, Yosemite National Park features nearly 1,200 square miles of sheer awe: towering waterfalls, millennia-old sequoia trees, striking, daunting cliff faces and some of the most unique rock formations in the United States. But despite its enormous size, most of the tourist activity takes place within the 8-square-mile area of Yosemite Valley. Here you will find the parks most famous landmarks – Half Dome and El Capitan – as well as excellent hiking trails through the natural monuments.'
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
    createArticle(article3.heading, article3.info);
}

initArticle()