
class App extends React.Component {

  constructor() {
    super();
  }
  
  render() {
     var informationSlides = [
      { style: "slide1 flex-active-slide", fx1: "title1 captionDelay2 FromTop", 
        fx2: "title2 captionDelay4 FromTop", fx3: "title3 captionDelay6 FromTop", 
        fx4: "title4 captionDelay7 FromTop", title1: "Lyon", title2: "vacances été",
        title3: "2017", title4: "Vacance au calme dans une petite maison de campagne"},
      
      {style: "slide2", fx1: "title1 captionDelay6 FromLeft", 
        fx2: "title2 captionDelay4 FromLeft", fx3: "title3 captionDelay2 FromLeft", 
        fx4: "title4 captionDelay7 FromLeft", title1: "Bretagne", title2: "weekend de mai",
        title3: "2016", title4: "Un moment de detente en famille"},
        
      {style: "slide3", fx1: "title1 captionDelay1 FromBottom", 
        fx2: "title2 captionDelay2 FromBottom", fx3: "title3 captionDelay3 FromBottom", 
        fx4: "title4 captionDelay5 FromBottom", title1: "Biarritz", title2: "Anniversaire Théo",
        title3: "2016", title4: "Surf and fun entre amis"}
     ];
    
    
    var slides = [];
    for(var i =0; i<informationSlides.length; i++) {
      slides.push(<Slide data={informationSlides[i]} />);
    }
    
    var informationCarousel = [
      { target: "slide1", style: "flex-active-slide", src: "images/slider/slide1_bg.jpg"},
      { target: "slide2", style: "", src: "images/slider/slide2_bg.jpg"},
      { target: "slide3", style: "", src: "images/slider/slide3_bg.jpg"},
      { target: "slide3", style: "", src: "images/slider/slide3_bg.jpg"}
    ];
    var carousels = [];
    for(var  i=0; i<informationCarousel.length; i++){
      carousels.push(<Carousel data={informationCarousel[i]}/>);
    }
      
    
    
    return( 
     <div>
        <div id="page">
       
          <header>
            
            <div className="menu_block">

              <div className="container clearfix">

                <div className="logo pull-left">
                  <a href="index.html" ><span className="b1">w</span><span className="b2">h</span><span className="b3">i</span><span className="b4">t</span><span className="b5">e</span> <span className="b4">box</span></a>
                </div>
                
                
              </div>
            </div>
          </header>
          
          <section id="home" className="padbot0">
          
            <div className="flexslider top_slider">
              <ul className="slides">
                {slides}
              </ul>
            </div>
            
            <div id="carousel">
              <ul className="slides">
                {carousels}
              </ul>
            </div>
          </section>

        </div>
 
      </div>
    );
  }
}
   

class Slide extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    return (
    <li className={this.props.data.style}>
      <div className="flex_caption1">
        <p className={this.props.data.fx1}>{this.props.data.title1}</p>
        <p className={this.props.data.fx2}>{this.props.data.title2}</p>
        <p className={this.props.data.fx3}>{this.props.data.title3}</p>
        <p className={this.props.data.fx4}>{this.props.data.title4}</p>
      </div>
    </li>
    );
  }

}  
class Carousel extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    return(
      <li data-target={this.props.data.target} className={this.props.data.style}><img src={this.props.data.src} alt="" /></li>        
    );
  }

} 
   
ReactDOM.render(
  <App/>
  , 
  document.getElementById('container')
);