import Header  from "../Components/Header"
import Footer from "../Components/Footer"
import {Link} from 'react-router-dom'
const HomePage =( )=> {


const getStarted =() => {
    window.scrollTo({
        top:700,
        behavior:'smooth'
    });
}







    return (
    
    <>
    <Header/>

    <main class="main" id="main">
    <section class="section hero" style={{backgroundImage: 'url(./media/bg-image.png)'}}>
      {/* <section class="section hero" style={{backgroundImage:'url(./media/bg-image.png</main>)'}} > */}
        <h1 class="hero__title">
          Explore the World <br />
          just one Click
        </h1>

        <button onClick={getStarted} class="button button-hero">Get Started</button>
      </section>

      <section class="section tour container">
        <h3 class="section-title">Popular Tour</h3>

        <div class="tour__container">
          <div class="tour__card">
            <img src="./media/img-1.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Opera House</h5>
              <span class="tour__data-subtitle">Sidney</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-2.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Eiffel Tower</h5>
              <span class="tour__data-subtitle">Paris</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-3.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Colosseum</h5>
              <span class="tour__data-subtitle">Rome</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
        </div>
      </section>
    </main>
    
    <Footer/>
    </>
    
    
    
    
    )
}
export default HomePage