import React from 'react';
import Scroll from './Scroll';

const Card = ({name, origin, rare, hypoallergenic, hairless, description, life_span, weight, temperament , energy_level, vocalisation, intelligence, adaptability, affection_level, dog_friendly, child_friendly, stranger_friendly, grooming, shedding_level, health_issues, social_needs, image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7w8fTi5OnFydO+ws3f4ee6v8vY2+H29/jy9Pbu7/LJztbCx9HR1ty/NMEIAAAC8ElEQVR4nO3b67ZrMBiFYaSh1HHd/8XuFap1SFolXb7s8T4/18EwOyNCiSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACryrezAy2kulR+lVl6dqip7Jr412Zyeizj7yjODjYqvhRQTMQm/1rC/OxsvapIht3xehDeN1lIOBSrtt+ZW+t1Kh02GrciEvaDNLl4Ph1e+hqvEk4Z94SZ580WchJGJNyHhH/JlrDR+uC+iU6Yqf7c2JXNga0KTlj/xOP5ujuwdpabML0mz1VXUu7eqtyEP5OAvysdvXerYhMWs4C/a+e9uyg1YXVdXh7sXTtLTagXFcaJ2rlVqQmXgzSOu5f76J5shSasylXC/NVJUbknW6kJLx8lNPNu6WhRaMKPRmmtzB+7WpSasNk+09TjmdPeotSEVbfs0HW7LFXjh2FvUWrC1Z1F1yCt1aRtW4tiE0ZqPk4dp4NUzYaypUW5CaNuGtExjdSLz8HSouCEjRqvnuLcceE/b9D+UQhOGFWZys093e7S2IfoqkFbi5ITRv1NDN24ds7SoKVF4QlfsTa4bjHchOmPI+AiYrgJXQ0uB2qoCWt3g4sWQ034qsF5i4EkbBY3ol43OGsxjIT6luvp7NG+DfhsMYSElc7jpHteAL85BhcthpBQ38zPny1uadD8x3C9JT+habD/RXdfu21rsP822fy5/IR9g/GjxXpjg+ZSKoiEY4OPFrc2GEzCR4O9XL87D4aWcNrgEHFzvkASzhv8UAAJVw3+dwkPNRhAwoMNBpDwYIPiEx5uUHzCww1KT1htX7qEmnD9/SEJSXhutgEJSUjC8/lOKPs+jfla7ajh/qPUhP6Q8C+RcJdKUML7W0HK75vA9+/hrmenM8bHgr/y7pqS8O7a43nEb7x/6Pvo3iddPa3njYx3SKMoO37rwu4mo8LIPJB4fLG2lggZoz3d5l6PQuPWahHTzEgXF79KQQUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAp/gHLTI30QIHnooAAAAASUVORK5CYII='}) => {
    let tags = [];
    if (rare===1) tags.push('Rare breed ');
    if (hypoallergenic===1) tags.push('Hypoallergenic');
    if (hairless===1) tags.push('Hairless');
    return ( 
        <div className='tc bg-light-gray o-90 dib br3 pa3 ma2 grow bw2 shadow-5 mw5'>
            <small className='fr'>{origin}</small>
            <h3>{name}</h3>
            
            <img className='fit' alt={name} src={image} height="150" width="200" />
            <Scroll>
                <div className='h5 pa2'>
                    <p></p>
                    <p>{tags}</p>
                    <hr/>
                    <p>{description}</p>
                    <hr/>
                    <h4>Description</h4>
                    <p>Life span: {life_span}(yr) avg.</p>
                    <p>Weight: {weight}(kg) avg.</p>
                    <hr/>
                    <h4>Behaviour</h4>
                    <p>{temperament}</p>
                    <p>energy level: {energy_level}/5</p>
                    <p>vocalisation: {vocalisation}/5</p>
                    <p>intelligence: {intelligence}/5</p>
                    <p>adaptability: {adaptability}/5</p>
                    <p>affection level: {affection_level}/5</p>
                    <hr/>
                    <h4>Friendly to...</h4>
                    <p>dogs: {dog_friendly}/5</p>
                    <p>children: {child_friendly}/5</p>
                    <p>Strangers: {stranger_friendly}/5</p>
                    <hr/>
                    <h4>Care</h4>
                    <p>grooming: {grooming}/5</p>
                    <p>shedding level: {shedding_level}/5</p>
                    <p>Health issues: {health_issues}/5</p>
                    <p>social needs: {social_needs}/5</p>
                </div> 
            </Scroll>
        </div>
    );
}

export default Card;