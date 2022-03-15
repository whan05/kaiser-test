const body = document.body;

const article7 = {
    heading: 'Tab Label 7',
    info : 'Cool, cosmopolitan, crowded, constantly evolving … the Big Apple blends big city splendor with small-town charm. Amid Gothams iconic landmarks and towering skyscrapers, you will experience a vibrant culture permeating each of the citys distinctive neighborhoods and boroughs. Follow trendsetters to the East Village and Brooklyn to check out indie boutiques, iconic bakeries and trendy coffee shops. Afterward, peruse the racks of the sleek shops lining Fifth Avenue, admire the cutting-edge art collections at the MoMA and the Met, catch a memorable show on Broadway or sit down for a meal at the latest "it" restaurant.'
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
    createArticle(article7.heading, article7.info);
}

initArticle()