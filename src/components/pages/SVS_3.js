import Chapter from '../display/Chapter';
import verses from '../../content/svs/svs_3';
import SVSLinks from '../utility/SVSLinks';

function SVS_3() {
    return (
        <>
          <SVSLinks />
          <br />
        <Chapter verses={verses}/>
        </>
      );
  }
  
  export default SVS_3;