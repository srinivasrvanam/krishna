import Chapter from '../display/Chapter';
import verses from '../../content/svs/svs_1';
import SVSLinks from '../utility/SVSLinks';

function SVS_1() {
    return (
      <>
        <SVSLinks />
        <br />
      <Chapter verses={verses}/>
      </>
    );
  }
  
  export default SVS_1;