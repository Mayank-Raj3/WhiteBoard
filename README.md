# Whiteboard Application

## Overview

This project is a whiteboard application developed using **React** and **HTML5 Canvas**. It allows users to draw, erase, and add text to a canvas with tools like freehand drawing, shapes (lines, rectangles, ellipses, arrows), and a text tool. The project was an opportunity to deepen my understanding of JavaScript, particularly in React, while also improving my skills in state management and UI design with **TailwindCSS**.

## Features

- **Freehand Drawing**: Draw freely on the canvas by tracking the movement of the mouse and rendering the path accordingly.
- **Shape Tools**: Draw shapes such as lines, rectangles, ellipses, and arrows by clicking and dragging.
- **Text Tool**: Add text to the canvas by clicking on a point and typing. The text is rendered on the canvas when the textarea loses focus.
- **Erase Tool**: Erase elements by detecting the proximity of the mouse to drawn shapes and removing them from the canvas.
- **Undo/Redo**: Navigate through the canvas states to undo or redo actions, maintaining a history of states.

## Challenges Faced

- **State Management**: Managing application states, especially for undo/redo functionality, was challenging due to the high frequency of state changes.
- **Text Tool Implementation**: Implementing the text tool required a different approach compared to other tools, involving conditional rendering and focus management.
- **Erasing Elements**: Implementing the erase tool involved complex mathematical logic to detect and remove elements based on their proximity to the mouse pointer.

## Lessons Learned

- **Deep Dive into JavaScript & React**: The project enhanced my knowledge of React, particularly in managing complex state scenarios.
- **Problem-Solving**: The challenges encountered pushed me to find creative and efficient solutions, improving my problem-solving skills.
- **TailwindCSS**: I learned to use TailwindCSS for styling, which streamlined the process of designing UI components.

## Areas for Improvement

- **State Management**: While React's Context API was used for state management, **Redux** might have been a better choice due to the high frequency of state changes.
- **Element Manipulation**: Currently, the application lacks the ability to select and manipulate existing elements, such as deleting or moving them after they've been drawn. This is a feature I plan to implement in the future.

## Implementation Details

### Undo/Redo Functionality

Undo and redo were conceptualized as navigating through a sequence of canvas states. Two states were used:

- **history**: Stores each state of the canvas.
- **index**: Indicates the current position in the history.

Every time a new element is added, it’s pushed into the history array, updating the sequence of states. Undoing an action involves setting the current canvas elements to `history[index]` and decrementing the index. Redoing is achieved by incrementing the index.

### Erasing Functionality

Erasing was implemented by detecting the proximity of the mouse pointer to drawn elements. The proximity was determined using the coordinates of the drawn elements, stored immediately after they are drawn. When the mouse pointer is detected within a certain range, the respective element is identified and removed.

### Text Tool

The text tool allows users to click on the canvas and immediately start typing. A textarea appears at the clicked position, and once the text input loses focus, it is rendered onto the canvas using HTML5 Canvas methods.

### Freehand Drawing and Shapes

- **Freehand Drawing**: Tracks the entire movement of the mouse, capturing a series of coordinates to create a path, which is then drawn onto the canvas.
- **Shapes**: For shapes like lines and rectangles, two key points are recorded (mousedown and mouseup events), and the respective shapes are drawn using these coordinates.

## Project Structure

```bash
.
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Board/
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   │   ├── Toolbar/
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   │   ├── Toolbox/
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   ├── store/
│   │   ├── board-context.js
│   │   ├── BoardProvider.js
│   │   ├── toolbox-context.js
│   │   └── ToolboxProvider.js
│   ├── utils/
│   │   ├── element.js
│   │   └── maths.js
│   ├── App.js
│   ├── constants.js
│   ├── index.css
│   ├── index.js
│   └── App.css
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mayank-Raj3/WhiteBoard.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the application**:
   ```bash
   npm start
   ```

## Future Plans

- **Implementing Redux**: Consider switching to Redux for better state management.
- **Element Manipulation**: Add features to select, move, and delete existing elements on the canvas.
- **Performance Optimization**: Optimize the application for better performance with large canvases and complex drawings.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Any suggestions for improving the application are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Drawing!** 🎨
