import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 class  Cards  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.sectionRef = React.createRef();
  }

  componentDidMount() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this value to control when the section becomes visible during scrolling
    };

    const observer = new IntersectionObserver(this.handleIntersection, observerOptions);
    if (this.sectionRef.current) {
      observer.observe(this.sectionRef.current);
    }
  }

  handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.setState({ isVisible: true });
      }
    });
  };

    render() {
      const { isVisible } = this.state;
        return (
   
        <section id="gallery" className={`gap-section fadeIn ${isVisible ? 'visible' : ''}`}  ref={this.sectionRef}>
          <div className="section-title-wrap section-header text-center">
            <h5 className="custom-primary">Harvesting Nature's Nourishment</h5>
            <h2 className="title">Explore our Dals and Pulses Collection!</h2>
          
        </div>
          <div class="container">
            <div class="row">
            <div class="col-lg-6 mb-4">
          <div class="card white alignments"  style={{minHeight:'400px'}}>
          <img src={process.env.PUBLIC_URL + "/assets/img/home/new-idly-ravva.png"}  style={{width:'500px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">idly Rava</h5>
               
                <Link to="/menu-item-v1/9"><a  className="btn-custom btn-sm">Read more</a></Link>
               
              </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
            <div class="card alignments" style={{minHeight:'400px'}}>
            <img src={process.env.PUBLIC_URL + "/assets/img/home/urad-gota.png"} style={{width:'500px'}} alt="urad gota" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Urad gota</h5>
               
                <Link to="/menu-item-v1/1"><a  className="btn-custom btn-sm">Read more</a></Link>
               
              </div>
             </div>
            </div>
          <div class="col-lg-6 mb-4">
          <div class="card black alignments"  style={{minHeight:'400px'}}>
          <img src={process.env.PUBLIC_URL + "/assets/img/home/toordall.png"} style={{width:'500px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Toor Dall</h5>
              
                <Link to="/menu-item-v1/6"><a href={""} className="btn-custom btn-sm">Read more</a></Link>
              
              </div>
              </div>
            </div>
            
            <div class="col-lg-6 mb-4 ">
            <div class="card yellow alignments"  style={{minHeight:'400px'}} >
            <img src={process.env.PUBLIC_URL + "/assets/img/home/moong-dall.png"}  style={{width:'500px'}} alt="" className='pt-5 ' />
              <div class="card-body">
                <h5 class="text-center">Moong Dal</h5>
               
                <Link to="/menu-item-v1/8"><a href={""} className="btn-custom btn-sm " >Read more</a></Link>
               
              </div>
             </div>
            </div>
          </div>
        </div>
        </section>
        
            
        );
    }
}

export default Cards;