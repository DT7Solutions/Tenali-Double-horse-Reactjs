// import React, { Component } from 'react';

// class Messenger extends Component {
//   render() {
//     return (
//       <div className="womensdayawrap">
//         <div className="womendaycontent">
//           <p>
//             Heritage Foods was founded to create and share wealth ethically among the farming community in a structured manner<br /><br />
//             The farming community was fragmented with no guidance and voice<br /><br />
//             I am proud we have achieved our objective with our vision and mission for economic growth<br /><br />
//             I promise as trustees our moral compass will remain to true north always <br /><br />
//             <b>Smt. Bhuvaneswari Nara</b><br />
//             Vice Chairperson & Managing Director
//           </p>
//         </div>
//         <div className="womensdayawrapsec">
//           <span>
//           <img src={process.env.PUBLIC_URL + "/assets/img/bg/horses-icon2.png"}  className="img-responsive" alt="" />
//             {/* <img src="https://www.heritagefoods.in/static/images/team/bhuvaneshawari.png" className="img-responsive" alt="" /> */}
//           </span>
//           <span>
//             <h5 className="text-white mb-0" style={{fontWeight:'800'}}>
//               Exports Enquires ?
//             </h5>
//             {/* <p className="text-white mb-0"></p> */}
//           </span>
//           <div className="plusicon shake"></div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Messenger;
import React, { Component } from 'react';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: 0,
    };
  }

  handleAccordionClick = (index) => {
    this.setState((prevState) => ({
      openIndex: prevState.openIndex === index ? -1 : index,
    }));
  };

  render() {
    const accordionData = [
      {
        heading: "Exports Enquiries ?",
        content: "Content for Exports Enquiries goes here.",
      },
      // Add more accordion items as needed
    ];

    return (
      <div className="womensdayawrap">
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${index === this.state.openIndex ? 'open' : ''}`}
          >
            <div
              className="womensdayawrapsec"
              onClick={() => this.handleAccordionClick(index)}
            >
              <span>
                <img src={process.env.PUBLIC_URL + "/assets/img/bg/horses-icon2.png"}  className="img-responsive" alt="" />
              </span>
              <span>
                <h5 className="text-white mb-0" style={{ fontWeight: '700' }}>
                  {item.heading}
                </h5>
                {/* <p className="text-white mb-0"></p> */}
              </span>
              <div className={`plusicon ${index === this.state.openIndex ? 'shake' : ''}`}></div>
            </div>
            {index === this.state.openIndex && (
              <div className="accordion-content">
                <p className='bg-white p-3'>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default Messenger;
