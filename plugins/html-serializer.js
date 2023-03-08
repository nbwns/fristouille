//necessary to add tailwind classes to prismic rich text elements
export default function(type, element, content, children) {
	// If element is a list item,
	if (type === "list-item") {
	  // return some customized HTML.
	  return `<li>${children.join("")}</li>`;
	}

	if (type === "group-list-item") {
		// return some customized HTML.
		return `<ul class="list-disc list-inside">${children.join("")}</ul>`;
	}

	if (type === "paragraph") {
		// return some customized HTML.
		return `<p class="py-1">${children.join("")}</p>`;
	}

	if(type === "heading2"){
		return `<h2 class='title-paragraph'>${children.join("")}</h2>`;
	}

	if (type === "hyperlink") {
		//replace by nuxt-link
		//element.data.link_type can be either Document or Web
		return `<a class="text-base font-inter text-coral-200 hover:cursor-pointer hover:underline focus:text-coral-300"" href="${element.data.url}" target="${element.data.target}">${children.join("")}</a>`;
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