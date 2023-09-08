# Fitness Influencer Website

This project involves building a website for a fitness influencer who is also a programmer. The objective is to monetize their fitness-related video content by creating a website that allows users to search for fitness videos and view the results in an organized manner. The website includes the following features:

## Features

### Header

The header of the website is divided into three parts:

1. **Logo:** The website's logo is displayed.

2. **Search Bar:** Users can type in the search bar, and an API call is made on every keystroke to fetch relevant videos based on the search query.

3. **Profile Image:** A profile image of the fitness influencer is displayed on the right side of the header.

### Results

The search results are presented in cards, with each card containing the following details:

- **Video:** Users can watch the fitness video directly on the website.

- **Query Heading:** The heading or title of the fitness video as returned by the API.

- **Tags:** Tags associated with the video content, providing additional information about the video.

## API Integration

To retrieve fitness videos based on user queries, the website utilizes the following API:

- **GET:** `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos`

### Parameters

The API accepts the following parameters:

- `q` (string): The user's search query.

- `numResults` (string or number): The number of results to be displayed.

## Important Notes

1. The project is created using Create React App for ease of development.

2. The website is designed to be responsive, ensuring a seamless user experience on various devices and screen sizes.

3. The codebase is well-organized, modular, and follows best practices to maintain clean and maintainable code.

4. The deployed version of the website is accessible on Netlify, providing a live link for users to visit and interact with.

## Live Website

You can access the live website [here](#insert-live-website-link).

Feel free to explore the fitness influencer's video content and embark on a fitness journey!
