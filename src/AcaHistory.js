
const leftStyles = {
  paddingLeft: 100
};

const rightStyles = {
  textAlign: "right",
  paddingRight: 100
};

function AcaHistory() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Academic History:</h1>

        <div style={leftStyles}>
        <h3>Parramatta Marist High (2013-2018)</h3>
        <p>text for marist here</p>
        </div>

        <div style={rightStyles}>
        <h3>Western Sydney University (2019-2020)</h3>
        <p>text for WSU here</p>
        </div>

        <div style={leftStyles}>
        <h3>Central Queendsland University (2020-2020)</h3>
        <p>text for CQU here</p>
        </div>

        <div style={rightStyles}>
        <h3>Coder Academy (2020-2021)</h3>
        <p>text for CA here</p>
        </div>

      </div>
    );
  }
  
  export default AcaHistory;