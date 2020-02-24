import React, {useContext, useEffect} from "react";
import { SynonimsContext } from '../../context/synonims-context';

const Synonims = () => {
  const synonims = useContext(SynonimsContext);
  const selectSynonim = (synonim) => {
    document.execCommand('insertText', false, synonim);
  };
  
  return (
    <div className="synonims-wr">
      { synonims && synonims.map(syn => (<h4 onClick={selectSynonim(syn)}>{ syn }</h4>)) }
    </div>
  );
};


export default Synonims;
