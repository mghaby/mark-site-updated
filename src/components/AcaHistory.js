import marist from '../img/marist.png';
import wsu from '../img/wsu.jpg';
import cqu from '../img/cqu.jpeg';
import ca from '../img/ca.jpg';
import MediaQuery from 'react-responsive';

const leftStyles = {
  display: "inline-block",
  paddingLeft: 100,
  width: 1000
};

const rightStyles = {
  textAlign: "right",
  paddingRight: 100,
};

const leftImageStyles = {
  display: "inline-block",
  height: 262,
  float: "left",
};

const rightImageStyles = {
  display: "inline-block",
  height: 262,
  float: "right"
};

const imageMob = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
  marginBottom: 10
};

const offWall = {
  marginLeft: 5
};


function AcaHistory() {
    return (
      <div id="acahistory">
        <h1 style={{textAlign: "center"}}>Academic History</h1>

        {/* laptop */}
        <MediaQuery minWidth={1224}>
        <div style={leftStyles}>
        <h3>Parramatta Marist High (2013-2018)</h3>
        <img src={marist} alt="marist logo" style={leftImageStyles}/>
        <p>I started Parramatta Marist High in 2013 and finished</p>
        <p>in 2018. Generally my subjects were quite static</p>
        <p>until 2016 where the introduction of electives</p>
        <p>occurred. This allowed me to try a range of subjects</p>
        <p>ranging from hospitality based subjects, to science</p>
        <p>based subjects to even tech based subjects. The science</p>
        <p>and hospitality based subjects were the ones that stuck.</p>
        </div>

        <div style={rightStyles}>
        <h3>Western Sydney University (2019-2020)</h3>
        <img src={wsu} alt="western sydney logo" style={rightImageStyles}/>
        <div style={{marginRight: 275}}>
        <p>I started studying at WSU in 2019 and finished in 2020.</p>
        <p>I was studying a B of Medical Science which I deferred</p>
        <p>in order to fast track my medical qualifications at</p>
        <p>a different university. During my year at WSU I mainly</p>
        <p>studied medical fundamental units ranging from</p>
        <p>biology to chemistry. Eventually my drive within</p>
        <p>the course diminished because I was not studying what</p>
        <p>I needed for the future, hence the look to fast track.</p>
        </div>
        </div>

        <div style={leftStyles}>
        <h3>Central Queendsland University (2020-2021)</h3>
        <img src={cqu} alt="central queensland logo" style={leftImageStyles}/>
        <div style={{marginLeft: 275}}>
        <p>I started studying at CQU in 2020 to mid 2021.</p>
        <p>Currently I am studying a Bachelor of Cardiac</p>
        <p>Physiology and Echocardiography. This was a niche</p>
        <p>which previously I was excited to start studying</p>
        <p>however the more I learned, the less I liked the</p>
        <p>course. I realised that this is not what I wanted</p>
        <p>to study which led me to find Coder Academy.</p>
        </div>
        </div>

        <div style={rightStyles}>
        <h3>Coder Academy (2020-2021)</h3>
        <img src={ca} alt="coder academy logo" style={rightImageStyles}/>
        <div style={{marginRight: 275}}>
        <p>I started studying at Coder Academy towards the</p>
        <p>end of 2020 and have graduated in early 2021.</p>
        <p>Coding has always been an interest of mine since I</p>
        <p style={{marginRight: 15}}>was young but I never had really explored it.</p>
        <p style={{marginRight: 15}}> While at Coder Academy I learned how to be a</p>
        <p>proficient full stack developer as well as also</p>
        <p>truely knowing what it means to be a programmer</p>
        <p>while making a career of this new knowledge.</p>
        </div>
        </div>
        <br />

        </MediaQuery>


        {/* mobile */}
        <MediaQuery maxWidth={375}>

        <div>
        <h3 style={offWall}>Parramatta Marist High (2013-2018)</h3>
        <img src={marist} alt="marist logo" style={imageMob}/>
        <p style={offWall}>I started Parramatta Marist High in 2013 and finished in 2018. Generally my subjects were quite static until 2016 where the introduction of electives occurred. This allowed me to try a range of subjects ranging from hospitality based subjects, to science based subjects to even tech based subjects. The science and hospitality based subjects were the ones that stuck.</p>
        </div>
        <br />

        <div>
        <h3 style={offWall}>Western Sydney University (2019-2020)</h3>
        <img src={wsu} alt="wsu logo" style={imageMob}/>
        <p style={offWall}>I started studying at WSU in 2019 and finished in 2020. I was studying a B of Medical Science which I deferred in order to fast track my medical qualifications at a different university. During my year at WSU I mainly studied medical fundamental units ranging from biology to chemistry. Eventually my drive within the course diminished because I was not studying what I needed for the future, hence the look to fast track.</p>
        </div>
        <br />

        <div>
        <h3 style={{marginLeft: 3}}>Central Queendsland University (2020-2021)</h3>
        <img src={cqu} alt="cqu logo" style={imageMob}/>
        <p style={offWall}>I started studying at CQU in 2020 to mid 2021. Currently I am studying a Bachelor of Cardiac Physiology and Echocardiography. This was a niche which previously I was excited to start studying however the more I learned, the less I liked the course. I realised that this is not what I wanted to study which led me to find Coder Academy.</p>
        </div>
        <br />

        <div>
        <h3 style={offWall}>Coder Academy (2020-2021)</h3>
        <img src={ca} alt="ca logo" style={imageMob}/>
        <p style={offWall}>I started studying at Coder Academy towards the end of 2020 and have graduated in early 2021. Coding has always been an interest of mine since I was young but I never had really explored it. While at Coder Academy I learned how to be a proficient full stack developer as well as also truely knowing what it means to be a programmer while making a career of this new knowledge.</p>
        </div>
        <br />
        </MediaQuery>

        <h1 style={{textAlign: "center"}}>{";"}</h1>
        <br/>
      </div>
    );
  }
  
  export default AcaHistory;