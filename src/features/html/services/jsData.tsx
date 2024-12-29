import acodeData from '@common/services/acodeData';

import access_html_file from "@assets/images/html_images/access_html_file.jpg";

import creact_file_html from "@assets/images/html_images/creact_file_html.jpg";

import Show_htmkpage from "@assets/images/html_images/Show_htmkpage.jpg";


const anotherArray = [
  {src: access_html_file },
  {src: creact_file_html },
  {src: Show_htmkpage }
];



const jsData = [[...acodeData,...anotherArray]];

export default jsData;


//const mergedArray = [...acodeData, ...anotherArray];



