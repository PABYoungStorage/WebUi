import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ReactMessage(props) {
  console.log('props', props)

  useEffect(() => {
    if (props.type) {
      toast.success(props.data, { autoClose: 2000 });

    } else {
      toast.error(props.data, { autoClose: 2000 });

    }
  }, [props])

  return (
    <div>
      <ToastContainer />
    </div>
  );
}



// export default function ReactMessager(props){ 
//   return (<p>Hi</p>)
// }