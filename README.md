# Pet Adoption Platform

A user-friendly pet adoption platform designed to provide detailed information about pets available for adoption. The project showcases dynamic data fetching and rendering using JavaScript and ES6, while implementing a smooth and engaging user interface using Tailwind CSS and DaisyUI.

## Key Features
1. **Dynamic Data Fetching**: Pets data is fetched from an API, and details are dynamically rendered on the website.
2. **Spinner for Loading State**: A spinner is displayed during data fetching to enhance user experience.
3. **Sort by Price**: Users can sort the available pets by price in descending order.
4. **Category-based Filters**: Filter pets by categories, and display related videos.
5. **Adoption Modal**: After clicking the "Adopt" button, users are shown a congratulatory message and a smooth countdown animation for adoption confirmation.

## ES6 Features Used
- **Arrow Functions**: Used to define concise function expressions, e.g., `const hideSpinner = () => {}`.
- **Template Literals**: Used for dynamic HTML generation, such as pet cards and modal contents.
- **Destructuring**: Simplifies extracting properties from objects for use in various parts of the project.
- **Promises**: Used with `fetch` API to handle asynchronous requests.
- **Default Parameters**: For fallback values, such as handling missing data in pet details (e.g., `element.price || 'N/A'`).

## Live Link
[Pet Adoption Platform](https://peddyadop.netlify.app/)

