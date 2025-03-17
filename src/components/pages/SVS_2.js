import Chapter from '../display/Chapter';
import verses from '../../content/svs/svs_2';
import SVSLinks from '../utility/SVSLinks';

function SVS_2() {
    return (
        <>
          <SVSLinks />
          <br />
        <Chapter verses={verses}/>
        </>
      );
  }
  
  export default SVS_2;