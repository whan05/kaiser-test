const body = document.body;

const article6 = {
    heading: 'Tab Label 6',
    info : 'Named for the remnants of glaciers from the ice age, Glacier National Park is located on the border of Canada and Montana. It is often called the "Crown of the Continent," because of its dizzying array of natural beauty. A favorite spot among hikers, the park features a variety of trails for all skill levels, ranging from the easy Trail of the Cedars (home to towering and beautiful cedars) to the challenging Grinnell Glacier (which offers sweeping views). Whats more, the park boasts more than 700 lakes, numerous waterfalls and two mountain ranges, spread across more than 1 million acres that shelter a variety of wildlife.'
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
    createArticle(article6.heading, article6.info);
}

initArticle()