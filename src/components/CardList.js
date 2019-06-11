import React from 'react';
import Card from './Card';

const CardList = ({ breeds }) => {
    return (
        <div className='vh-75 pa2'>
            {
                breeds.map((cat, i) => {
                    return <Card 
                                key={i} 
                                id={breeds[i].id} 
                                name={breeds[i].name} 
                                origin = {breeds[i].origin}
                                rare = {breeds[i].rare}
                                image = {breeds[i].url}
                                hypoallergenic = {breeds[i].hypoallergenic}
                                hairless = {breeds[i].hairless}
                                description={breeds[i].description}
                                life_span = {breeds[i].life_span}
                                weight = {breeds[i].weight.metric}
                                temperament = {breeds[i].temperament}
                                energy_level = {breeds[i].energy_level}
                                vocalisation = {breeds[i].vocalisation}
                                intelligence = {breeds[i].intelligence}
                                adaptability = {breeds[i].adaptability}
                                affection_level = {breeds[i].affection_level}
                                dog_friendly = {breeds[i].dog_friendly}
                                child_friendly = {breeds[i].child_friendly}
                                stranger_friendly = {breeds[i].stranger_friendly}
                                grooming = {breeds[i].grooming}
                                shedding_level = {breeds[i].shedding_level}
                                health_issues = {breeds[i].health_issues}
                                social_needs = {breeds[i].social_needs}
                        />
                })
            }
        </div>
    );
}

export default CardList