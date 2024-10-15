# Color Management System

A simple color management system that allows users to manage a list of colors. Users can add, edit, duplicate and delete colors. The project uses React and incorporates drag-and-drop functionality for sorting colors.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display a static list of colors.
- Sort colors using drag-and-drop functionality.
- Add new colors to the list.
- Edit existing colors.
- Duplicate colors with an appended "Copy" to the title.
- Delete colors from the list.
- Drawer for adding and editing colors.
- Design following Figma specifications.

## Technologies Used

- **React**: For building the user interface.
- **dnd-kit**: For enabling drag-and-drop sorting of colors.
- **react-color**: For color picker widget component.
- **CSS**: For styling the application.
  
## Installation

To get started locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/noushinpervez/Kodezen.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Kodezen
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to view the app.

## Usage

- Click the "Add Color" button to add a new color.
- Hover over any color to reveal the three-dot menu:
  - **Edit**: Modify the color title and value.
  - **Duplicate**: Create a copy of the selected color.
  - **Delete**: Remove the color from the list.
- Drag and drop colors to reorder them.