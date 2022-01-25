// This function makes the first letter of the word uppercase
function capitalizeFirstLetter(word)
{
  return word.charAt(0).toUpperCase() + word.slice(1);
}//function capitalizeFirstLetter(word)

/*****************************************************************************
* Function: createElementWithTextNode(parElement, parTextNode)              *
* Function Description:                                                     *
* This function creates an element with text node. example: <h1>Hello</h1>  *
*---------------------------------------------------------------------------*
* Parameter Description:                                                    *
* 1. parElement. Element in string format. e.g. "div"                       *
* 2. parTextNode. Text node in string format. e.g. "Hello"                  *
*****************************************************************************/
function createElementWithTextNode(parElement, parTextNode)
{
    const thisNewElement = document.createElement(parElement);
    const thisTitleTextNode = document.createTextNode(parTextNode);
    thisNewElement.appendChild(thisTitleTextNode);
    return thisNewElement;
}//function createElementWithTextNode(parElement, parTextNode)

function write_Column_Heading()
{
   let tableRowHeading = document.createElement("tr");

   //let columnName = xmlDoc.getElementsByTagName("Item_No")[0];
   let columnName = xmlDoc.querySelector("Item_No");
   let tableHeading = createElementWithTextNode("th", capitalizeFirstLetter(columnName.tagName));
   debugger;
   tableRowHeading.appendChild(tableHeading);

   columnName = xmlDoc.getElementsByTagName("ItemName")[0];
   tableHeading = createElementWithTextNode("th", capitalizeFirstLetter(columnName.tagName));
   tableRowHeading.appendChild(tableHeading);

   columnName = xmlDoc.getElementsByTagName("Price")[0];
   tableHeading = createElementWithTextNode("th", capitalizeFirstLetter(columnName.tagName));
   tableRowHeading.appendChild(tableHeading);

   columnName = xmlDoc.getElementsByTagName("qty")[0];
   tableHeading = createElementWithTextNode("th", capitalizeFirstLetter(columnName.tagName));
   tableRowHeading.appendChild(tableHeading);

   return tableRowHeading;
}//function write_Column_Heading()

function ajaxGetXMLDocument(xmlFile)
{
    if(window.XMLHttpRequest)
    {
       xmlhttp = new XMLHttpRequest();
    }
    else
    {
       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", xmlFile, false);
    xmlhttp.send();
    return xmlhttp.responseXML;
}//function ajaxGetXMLDocument(xmlFile)
