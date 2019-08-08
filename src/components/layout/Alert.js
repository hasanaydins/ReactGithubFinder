import React from 'react';
import styled from 'styled-components';

const Alert = ({alert}) => {
    return (
        <Uyari>
              {alert !== null  && 
            (
                <div className="uyari">
                        <div className={`alert alert-${alert.type}  mt-2`}>
                      {alert.msg}
                          </div>
                  </div>
                
            )
            }   
        </Uyari>
        
    );
};

const Uyari = styled.div`

  .uyari {
    margin: auto;
    width:97%;
    height: 40px;
 }
`;

export default Alert;
