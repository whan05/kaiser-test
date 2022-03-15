// self-invoked anonymous functions 

(() => {

    'use strict';

    const body = document.body;

    const article2 = {
        heading: 'Tab Label 2',
        info : 'Grand" doesnt begin to do this canyon justice. Measuring approximately 277 river miles in length, up to 18 miles in width and a mile deep, this massive chasm in northern Arizona is truly a natural wonder. For 6 million years, the Grand Canyon has expanded with the help of the mighty Colorado River, and for centuries, people from all over the globe have traveled to gaze out over its red and orange grandeur. Managed by the National Park Service and officially designated as a UNESCO World Heritage Site, the Grand Canyon leaves its approximately 6 million visitors per year awestruck.'
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
        createArticle(article2.heading, article2.info);
    }

    initArticle()

}) ();
