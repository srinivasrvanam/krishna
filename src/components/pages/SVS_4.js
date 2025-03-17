import Chapter from '../display/Chapter';
import verses from '../../content/svs/svs_4';
import SVSLinks from '../utility/SVSLinks';

function SVS_4() {
    return (
        <>
          <SVSLinks />
          <br />
        <Chapter verses={verses}/>
        </>
      );
  }
  
  export default SVS_4;