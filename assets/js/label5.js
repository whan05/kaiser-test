// self-invoked anonymous functions 

(() => {

    'use strict';

    const body = document.body;

    const article5 = {
        heading: 'Tab Label 5',
        info : 'Maui is not nearly as large as the Big Island, nor is it as small as Lanai, as bustling as Oahu or as quiet as Kauai. For many Hawaii vacationers, Maui is just right – offering a taste of just about everything the Aloha State has to offer, from impressive wildlife to intriguing history and culture. While on a visit here, you can shimmy alongside professional hula dancers, golf along coastal fairways, sail down a zip line, snorkel alongside five different types of sea turtles or simply lounge along some of Hawaiis most notable beaches..'
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
        createArticle(article5.heading, article5.info);
    }
    
    initArticle()

})();