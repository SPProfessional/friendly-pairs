# Friendly Pairs

Friendly Pairs is a child-friendly memory matching game created using HTML, CSS and JavaScript.

The project is designed with children, including SEND learners, in mind. It provides a simple and predictable game experience that encourages memory, visual recognition and concentration without time pressure.

Players can choose from three themes and three difficulty levels, allowing them to enjoy the game at a level that suits their confidence and ability. Clear instructions, positive feedback and accessible controls help create an inclusive and enjoyable experience.

The aim is to provide a fun, straightforward activity that supports learning through play while allowing users to progress at their own pace.

## Features

* Three game themes:

  * Animals
  * Numbers
  * Colours
* Three difficulty levels:

  * Easy - 8 cards
  * Medium - 12 cards
  * Hard - 16 cards
* Randomly shuffled cards
* Matching pair detection
* Move counter
* Positive feedback messages
* Game completion message
* Start Game button to begin a new game
* Responsive layout for desktop, tablet and mobile
* Keyboard-accessible game cards
* Visible keyboard focus indicators
* Screen-reader friendly card labels and game messages
* Reduced-motion support

## Design

The interface uses a calm and neutral colour palette with clear controls, large interactive elements and a predictable layout.

The game does not use a countdown timer or time pressure. This allows players to concentrate on finding matching pairs at their own pace.

The Colours theme uses colour emoji as the visual representations of the different colours.

- [UX Design Process](docs/design.md) – Design principles, reconstructed wireframe and explanation of the final user experience.

## Accessibility

Accessibility was considered throughout the design and development process.

The project includes:

* Semantic HTML elements
* Keyboard-accessible buttons
* Visible focus indicators
* ARIA labels for game cards
* Live regions for game messages and the move counter
* Reduced-motion support
* Responsive layouts
* Clear and consistent controls
* No reliance on a countdown timer
* Visual feedback for matched cards

These features are intended to support an inclusive and easy-to-understand experience. The project should not be considered a replacement for formal accessibility testing.

## Technologies

The project was built using:

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

No JavaScript frameworks or libraries are required for the game.

## Project Structure

```text
friendly-pairs/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── sounds/
│   └── icons/
└── docs/
    └── testing.md
```

## Testing

Manual testing has been carried out throughout development to check the game's functionality, accessibility features and responsive layout.

Testing includes:

- Game start and reset functionality
- Difficulty levels
- Theme selection
- Card matching
- Incorrect pair handling
- Move counter
- Game completion
- Keyboard interaction
- Focus indicators
- Responsive layouts
- Browser compatibility

The application was also tested after deployment using GitHub Pages to confirm that the live version functions as expected.

HTML and CSS validation was completed using the W3C validators, with both reporting zero errors. JavaScript was checked using JSHint configured for ECMAScript 6 (ES6), with no warnings reported.

Screenshots of the validation results, user story evidence and further testing information are available in the [testing documentation](docs/testing.md).

## Version Control

Git and GitHub were used throughout development.

The project was developed using incremental commits to record changes to the HTML, CSS and JavaScript functionality.

## Deployment

The project is deployed using **GitHub Pages** and is publicly accessible at:

[https://spprofessional.github.io/friendly-pairs/](https://spprofessional.github.io/friendly-pairs/)

GitHub Pages is configured to deploy the project from the `main` branch.

The deployed application was tested outside the local development environment to confirm that the game loads and functions correctly. The custom 404 error page was also tested to ensure that users can return to the main application if they visit an invalid URL.

## Attribution

The project code was written specifically for Friendly Pairs using HTML, CSS and vanilla JavaScript.

No external JavaScript libraries or frameworks are required.

The visual design and game functionality were developed as part of this project. Any external assets used within the application are acknowledged and credited appropriately. Where no external assets are used, the visual elements are created using the project's own code and styling.

## Future Improvements

Possible future improvements could include additional themes, sound feedback and further accessibility testing with users.

The project may also benefit from a style change but that would require indepth research into best complementary colour palletes for SEND and developing children.

These features are not required for the current version of the project.