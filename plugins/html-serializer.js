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
		return `<p class="">${children.join("")}</p>`;
	  }

	  if (type === "hyperlink") {
		// return some customized HTML.
		return `<a class="underline decoration-inherit decoration-dashed text-yellow-600 cursor-pointer">${children.join("")}</a>`;
	  }
	// Otherwise, return null.
	return null;
  }