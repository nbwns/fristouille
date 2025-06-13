//necessary to add tailwind classes to prismic rich text elements
export default function (type, element, content, children) {
  // If element is a list item,
  //console.log(type);

  if (type === "list-item") {
    // return some customized HTML.
    return `<li>${children.join("")}</li>`;
  }

  if (type === "paragraph") {
    // return some customized HTML.
    return `<p>${children.join("")}</p>`;
  }

  if (type === "heading2") {
    return `<h2 class='title-paragraph'>${children.join("")}</h2>`;
  }

  if (type === "hyperlink") {
    //element.data.link_type can be either Document or Web
    let link = `<a class="${element.data.url.startsWith("http") ? "inline-flex items-center gap-1" : ""} text-orange-300 dark:text-purple-300 hover:cursor-pointer underline focus:text-orange-200 dark:focus:text-purple-200 " 
					href="${element.data.url}"`;

	//add svg external link
	if(element.data.url.startsWith("http")){
		link += `target="_blank">${children.join("")}<svg viewBox="0 0 24 24" class="w-4 h-4 stroke-orange-300 dark:stroke-purple-300" fill="none" xmlns="http://www.w3.org/2000/svg"><title>nouvel onglet</title><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>

</a>`;
	}
	else{
		link += `target="_self">${children.join("")}</a>`;
	}
	return link;

	return `<a class="inline-flex items-center gap-2 text-base font-anonymous text-orange-300 dark:text-purple-300 hover:cursor-pointer hover:underline focus:text-orange-200 dark:focus:text-purple-200 " href="${
      element.data.url
    }" target="${
      element.data.url.startsWith("http") ? "_blank" : "_self"
    }">${children.join("")}<svg class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></a>`;
  }
  // Otherwise, return null.
  return null;
}

//prismic version
// import prismicDOM from 'prismic-dom'
// import linkResolver from './link-resolver' // Update the path to your Link Resolver

// const Elements = prismicDOM.RichText.Elements

// export default function(type, element, content, children) {
//   const url = prismicDOM.Link.url(element.linkTo, linkResolver)
//   console.log(url);

//   	if (type === "list-item") {
// 		// return some customized HTML.
// 		return `<li>${children.join("")}</li>`;
// 	}

// 	if (type === "group-list-item") {
// 		// return some customized HTML.
// 		return `<ul class="list-disc list-inside">${children.join("")}</ul>`;
// 		}

// 	if (type === "paragraph") {
// 		// return some customized HTML.
// 		return `<p class="">${children.join("")}</p>`;
// 		}

//   // Generate links to Prismic Documents as <router-link> components
//   if (type === Elements.hyperlink) {
//     if (element.data.link_type === 'Document') {
//       return `<a href="${url}" class="underline decoration-inherit decoration-dashed text-yellow-600 cursor-pointer">${children.join('')}</a>`
//     }
// 	else if (element.data.link_type === 'Web'){
// 		return `<a class="underline decoration-inherit decoration-dashed text-yellow-600 cursor-pointer" href="${element.data.url}" target="${element.data.target}">${children.join("")}</a>`;
// 	}
//   }

//   // If the image is also a link to a Prismic Document, it will return a <router-link> component
//   if (type === Elements.image) {
//     if (element.linkTo) {
//       if (element.linkTo.link_type === 'Document') {
//         return `<img src="${element.url}" alt="${element.alt ||
//           ''}" copyright="${element.copyright || ''}">`
//       }
//     }
//   }

//   // Return null to stick with the default behavior for everything else
//   return null
// }
