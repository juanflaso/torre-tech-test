import React, { useState, useEffect } from 'react';
import OpportunityCard from '../../components/cards/opportunity/OpportunityCard.jsx';
import PersonCard from '../../components/cards/person/PersonCard.jsx';
import OrganizationCard from '../../components/cards/organization/OrganizationCard.jsx';
import CardsCarousel from '../../components/cards/carousel/CardsCarousel.jsx';
import axios from 'axios';

const HomeFeed = () => {
    const [results, setResults] = useState([]);

    useEffect( () => {

        const request_dict = {
            and: [{"skill/role": {text: "machine learning", experience: "1-plus-year"}}],
        }

        axios.post("https://search.torre.co/opportunities/_search?currency=USD%24&page=0&periodicity=hourly&lang=es&size=20&aggregate=false&offset=0", request_dict)
        .then(res => {

            console.log(res);
            setResults(res.data.results)
            
        })
    }, [])

    useEffect( () => {
        console.log(results)
    }, [results])

    return (
        <div>
            <CardsCarousel>
                <PersonCard/>
                <PersonCard/>
                <PersonCard/>
            </CardsCarousel>
            {(results.map( (result) => 
                <OpportunityCard key={(result.id)} opportunity={(result)}/>
            
            ))}
            <CardsCarousel>
                <OrganizationCard/>
                <OrganizationCard/>
                <OrganizationCard/>
                <OrganizationCard/>
            </CardsCarousel>

            
        </div>
    );
}

export default HomeFeed;