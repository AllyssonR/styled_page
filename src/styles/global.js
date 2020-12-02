import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;

}
body{
  font-family:Arial, Helvetica, sans-serif;
  background-color:#B7B3A1;
  
}
:root{
  --header-color:#426B69;
  --footer-color:#D1CA98;
  --content-color:#F7F06D;
  --text-arround-color:#FFB140;

}
`;