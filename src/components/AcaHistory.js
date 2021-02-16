import marist from '../img/marist.png';
import wsu from '../img/wsu.jpg';
import cqu from '../img/cqu.jpeg';
import ca from '../img/ca.jpg';

const leftStyles = {
  display: "inline-block",
  paddingLeft: 100,
  width: 1000
};

const rightStyles = {
  textAlign: "right",
  paddingRight: 100
};

const leftImageStyles = {
  display: "inline-block",
  height: 262,
  float: "left"
};

const rightImageStyles = {
  display: "inline-block",
  height: 262,
  float: "right"
};

function AcaHistory() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Academic History</h1>

        <div style={leftStyles}>
        <h3>Parramatta Marist High (2013-2018)</h3>
        <img src={marist} alt="marist logo" style={leftImageStyles}/>
        <p>I started Parramatta Marist High in 2013 and finished</p>
        <p>in 2018. Generally my subjects were quite static</p>
        <p>until 2016 where the introduction of electives</p>
        <p>occured. This allowed me to try a range of subjects</p>
        <p>ranging from hospitality based subjects, to science</p>
        <p>based subjects to even tech based subjects. The science</p>
        <p>and hospitality based subjects were the ones that stuck.</p>
        </div>

        <div style={rightStyles}>
        <h3>Western Sydney University (2019-2020)</h3>
        <img src={wsu} alt="western sydney logo" style={rightImageStyles}/>
        <p>I started studying at WSU in 2019 and finished in 2020.</p>
        <p>I was studying a B of Medical Science which I deffered</p>
        <p>in order to fast track my medical qualifications at</p>
        <p>a different university. During my year at WSU I mainly</p>
        <p>studied medical fundamental units ranging from</p>
        <p>biology to chemistry. Eventually my drive within</p>
        <p>the course diminished because I was not studying what</p>
        <p>I needed for the future, hence the look to fast track.</p>
        </div>

        <div style={leftStyles}>
        <h3>Central Queendsland University (2020-2021)</h3>
        <img src={cqu} alt="central queensland logo" style={leftImageStyles}/>
        <p>I started stuyding at CQU in 2020 to mid 2021.</p>
        <p>Currently I am stuyding a Bachelor of Cardiac</p>
        <p>Physiology and Echocardiography. This was a niche</p>
        <p>which previously I was excited to start studying</p>
        <p>however the more I learned, the less I liked the</p>
        <p>course. I realised that this is not what I wanted</p>
        <p>to study which led me to find Coder Academy.</p>
        </div>

        <div style={rightStyles}>
        <h3>Coder Academy (2020-2021)</h3>
        <img src={ca} alt="coder academy logo" style={rightImageStyles}/>
        <p>I started studying at Coder Academey towards the</p>
        <p>end of 2020 and have graduated in early 2021.</p>
        <p>Coding has always been an interest of mine since I</p>
        <p>was young but I never had really explored it.</p>
        <p>While at Coder Academy I learned how to be a</p>
        <p>proficient full stack developer as well as also</p>
        <p>truely knowing what it means to be a programmer</p>
        <p>while making a career of this new knowledge.</p>
        </div>

      </div>
    );
  }
  
  export default AcaHistory;