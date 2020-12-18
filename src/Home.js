import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
            <Card
                src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB16isKs.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f"
                title="Service assuré"
                description="L'hygiène est notre priorité, c'est pourquoi nous vous assurons un service dans de bonnes conditions."
            />
            <Card
                src="https://cdn1.treatwell.net/images/view/v2.i1733517.w720.h480.x71929CC9/"
                title="Un endroit lumineux"
                description="L'hygiène est notre priorité, c'est pourquoi nous vous assurons un service dans de bonnes conditions."

            />
            <Card
                src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB16isKs.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f"
                title="Entire homes"
                description="L'hygiène est notre priorité, c'est pourquoi nous vous assurons un service dans de bonnes conditions."

            />
            </div>
            <div className='home__section'>
            <Card
                src="https://img.static-rmg.be/a/view/q100/w720/h480/2282171/leo2-gif.gif"
                title="Ombré"
                description="Technique d’éclaircissement progressif à trois teintes."
                price="250€ minimum"
            />
            <Card
                src="https://www.emilieestheticienne-11.fr/userfiles/14853/EMILIE%20ESTHETIQUE%20ET%20BIEN%20ETRE%20A3.jpeg"
                title="Extensions des cils"
                description="Les techniciennes prendront soins de vos cils pour un résultat satisfaisant. "
                price="90€ minimum"
            />
            <Card
                src="https://www.letribunaldunet.fr/wp-content/uploads/2020/04/deconfinement-coiffeur-720x480.jpg"
                title="Coupe Femme"
                description="Tout est dans le titre. Flemme d'écrire."
                price="40€ minimum"
            />
            </div>
        </div>
    )
}

export default Home
