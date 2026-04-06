# Web Development Project 5 - *The API Bake-Off*

Submitted by: **Chau Cao**

This web app: **is a responsive, interactive dashboard for bakers to discover, filter, and view baking recipes using real-time data from the Spoonacular API.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays at least 10 unique items, one per row (Implemented as a responsive grid displaying up to 20 items)
  - The dashboard includes at least two features in each row (Displays Prep Time and Vegetarian status)
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *Total Bakes (Dynamic count of currently filtered items)
    - *Average Prep Time (Calculated mean of readyInMinutes from displayed items)*
    - *Vegetarian Bakes (Calculated percentage of items where vegetarian === true)*
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously (Users can select a Diet Category AND type in the Search Bar at the same time)
- [x] Filters use different input types
  - Used text input and a custom dropdown select
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] Fully responsive CSS Grid layout that automatically adjusts columns for desktop, tablet, and mobile viewing.

* [x] Interactive hover states on recipe cards that lift the card and display a dark glass "View Recipe" overlay.

* [x] Click-through functionality where clicking a recipe image opens the original Spoonacular recipe instructions in a new tab.

* [x] Custom UI styling including a bouncy animated emoji logo, a stylized select dropdown, and a custom orange bakery-themed scrollbar. 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/SSOFqri.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
![The API Bake-Off](https://github.com/user-attachments/assets/a9fd9285-6d6d-43c5-8d26-cf89978eef5f)
GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

A few challenges encountered while building the app included:

* Ensuring that the text search and the category dropdown worked synchronously without overwriting each other required setting up a single useEffect dependency array watching both variables.
* Fixing the default operating system/browser styling on the <select> dropdown menu so that the text was visible and fit the custom theme.
* Writing robust .reduce() logic to ensure the Average Prep Time didn't try to divide by zero when the filtered list was empty.
## License

    Copyright [2026] [Chau Cao]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
