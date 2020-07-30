import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import videoList from '../../data/videolist.json';

function Home() {
    return (
        <div style={{ background: "#141414" }}>
            <Menu />
            <BannerMain 
                videoTitle={videoList.categorias[0].videos[0].titulo}
                url={videoList.categorias[0].videos [0].url}
                videoDescription={"O que é Front-end? Trabalhando na área os temos HTML, CSS e Javascript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem afinal? Descubra com a Vanessa."}
            />

            <Carousel 
                ignoreFirstVideo
                category={videoList.categorias[0]}
            />

            <Footer />
        </div>
    );
}

export default Home;