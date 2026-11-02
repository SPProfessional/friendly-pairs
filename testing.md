# Friendly Pairs - Testing

## Testing Approach

Friendly Pairs was manually tested during development to check that the game's functionality, accessibility features and responsive layout work as intended.

Testing was carried out using the local development preview and will be repeated against the deployed version before submission.

---

## Manual and Automated Testing

Testing can be divided into two main approaches;

Manual testing and automated testing. Both approaches help identify problems and improve the reliability, usability and quality of a web application.

### Manual Testing

Manual testing involves a person interacting directly with an application and checking whether its features behave as expected.

For Friendly Pairs, manual testing was used to:
- Start and restart games using different themes and difficulty settings.
- Check that cards reveal correctly and matching pairs are recognised.
- Confirm that incorrect pairs are hidden again.
- Check that the move counter and completion messages update correctly.
- Navigate the application using a keyboard.
- Check visible focus indicators and accessibility features.
- Inspect the layout at desktop, tablet and mobile screen sizes.
- Check that the application is understandable and straightforward to use.

**Advantages of manual testing:**
- Allows a person to assess usability and the overall user experience.
- Helps identify visual and layout problems that automated tools may not recognise.
- Supports exploratory testing, where a tester can try different interactions and identify unexpected behaviour.
- Allows accessibility and ease of use to be considered from a real user's perspective.

**Disadvantages of manual testing:**
- Can take longer than automated testing, particularly when tests need to be repeated.
- Results can vary depending on the person carrying out the testing.
- Repeated checks can be time-consuming.
- Human error may result in an issue being overlooked.

Manual testing is particularly useful when assessing interactive features, accessibility, visual presentation and usability.

### Automated Testing

Automated testing uses software tools or scripts to carry out predefined checks and report potential errors or problems.

For Friendly Pairs, automated validation tools were used to check the quality of the code:
- The W3C HTML Validator checked the HTML document for markup errors.
- The W3C CSS Validator checked the stylesheet for CSS errors.
- JSHint checked the JavaScript code for potential issues, using an ES6 configuration to support the JavaScript syntax used in the project.

**Advantages of automated testing:**
- Checks can be repeated quickly and consistently.
- Helps identify syntax errors and potential code-quality problems.
- Reduces the amount of repetitive manual checking required.
- Is useful when making changes, as checks can be run again to identify potential regressions.

**Disadvantages of automated testing:**
- Tools can only identify issues within the checks they are designed to perform.
- They cannot fully judge whether an application is easy or enjoyable to use.
- Some tools require configuration to recognise the technologies and syntax used.
- More advanced automated testing can require additional setup and maintenance.

Automated testing is particularly useful for repeatable technical checks, code validation and larger projects where frequent changes need to be tested consistently.

### Why Both Approaches Were Used

A combination of manual and automated testing was selected for Friendly Pairs because the project relies on both functional interaction and a clear, accessible user experience.

Manual testing was important for checking the actual gameplay, including card selection, matching, difficulty settings, game completion, keyboard navigation and responsive behaviour. These features require interaction and observation to determine whether they work correctly and provide a suitable experience for the intended audience.

Automated validation complemented this process by checking the underlying HTML, CSS and JavaScript. The W3C validators and JSHint helped identify technical issues that might not be obvious during normal gameplay.

A dedicated automated gameplay testing framework was not introduced because of the relatively small scale of the application. For this project, manual functional and usability testing, supported by automated code validation, provided an appropriate balance.

Neither approach replaces the other. Automated checks help identify technical problems consistently, while manual testing helps establish whether the finished application works well for its users.

---

## Functional Testing

| Test               | Expected Result                                 | Result |
| ------------------ | ----------------------------------------------- | ------ |
| Start Game         | A new game board is generated                   | Pass   |
| Easy difficulty    | 8 cards are displayed                           | Pass   |
| Medium difficulty  | 12 cards are displayed                          | Pass   |
| Hard difficulty    | 16 cards are displayed                          | Pass   |
| Animals theme      | Animal pairs are generated                      | Pass   |
| Numbers theme      | Number pairs are generated                      | Pass   |
| Colours theme      | Colour emoji pairs are generated                | Pass   |
| Cards are shuffled | Card positions change between games             | Pass   |
| Select first card  | Card value is revealed                          | Pass   |
| Select second card | Second card value is revealed                   | Pass   |
| Matching pair      | Cards remain revealed and are marked as matched | Pass   |
| Incorrect pair     | Cards are hidden again after a short delay      | Pass   |
| Move counter       | Counter increases after each pair attempt       | Pass   |
| New game           | Board and move counter reset                    | Pass   |
| Complete game      | Completion message is displayed                 | Pass   |
| Completed cards    | Matched cards cannot be selected again          | Pass   |

---

## Accessibility Testing

| Test                      | Expected Result                                              | Result |
| ------------------------- | ------------------------------------------------------------ | ------ |
| Keyboard navigation       | Interactive elements can be reached using Tab                | Pass   |
| Keyboard card selection   | Cards can be activated using keyboard controls               | Pass   |
| Visible focus             | Keyboard focus is clearly visible                            | Pass   |
| Screen-reader card labels | Cards provide meaningful labels                              | Pass   |
| Game messages             | Important game messages can be announced                     | Pass   |
| Move counter              | Move updates can be announced                                | Pass   |
| Colours theme             | Colour emoji provide visual recognition of different colours | Pass   |
| Reduced motion            | Reduced-motion preference removes card movement/transition   | Pass   |

---

## Responsive Testing

The layout was tested at different screen sizes to ensure that content remains usable.

| Screen Size  | Expected Result                                                | Result |
| ------------ | -------------------------------------------------------------- | ------ |
| Desktop      | Full layout displays correctly                                 | Pass   |
| Tablet       | Content and game board remain usable                           | Pass   |
| Mobile       | Controls stack and cards display in two columns                | Pass   |
| Small mobile | Text and controls remain readable without horizontal scrolling | Pass   |

---

## Browser Testing

The project should be checked in current versions of commonly used browsers.

| Browser        | Result |
| -------------- | ------ |
| Google Chrome  | Pass   |
| Microsoft Edge | Pass   |
| Opera          | Pass   |

---

## Issues Found During Development

During development, an issue was identified where the difficulty selector was missing the required `id` and numeric `value` attributes.

The JavaScript expected:

```javascript
document.getElementById("difficulty")
```

The HTML was updated to provide the matching ID and values for 8, 12 and 16 cards.

The issue was retested after the correction and the difficulty system worked as expected.

---

## Final Testing

Final testing will be completed against the deployed GitHub Pages version before submission to confirm that the deployed project behaves the same as the local development version.

## Code Validation

The HTML, CSS and JavaScript files were checked using appropriate validation tools to identify errors and potential issues.

HTML Validation

![HTML Validation](screenshots/html-validation.png)

The HTML document was checked using the W3C HTML Validator.

Result: Passed with zero errors.


CSS Validation

![CSS Validation](screenshots/css-validation.png)

The stylesheet was checked using the W3C CSS Validator.

Result: Passed with zero errors.


JavaScript Validation

![JavaScript JSHint Results](screenshots/javascript-jshint.png)

The JavaScript file was checked using JSHint. The configuration was set to ECMAScript 6 (ES6) to recognise the modern JavaScript syntax used throughout the application.

Result: No warnings reported after configuring the correct JavaScript version.


## User Story Evidence

The following evidence demonstrates how the completed Friendly Pairs application meets its user stories. Each section explains the user requirement, identifies the relevant functionality and provides a screenshot of the finished application.

The application is deployed and can be accessed here: [Friendly Pairs – Live Application](https://spprofessional.github.io/friendly-pairs/).

### US1 – Clear Homepage and Navigation

As a player, I want a clear homepage and navigation so that I can easily find the game and its instructions.

The [Friendly Pairs homepage](https://spprofessional.github.io/friendly-pairs/) presents the game title, navigation links and game controls in a clear, structured layout. The navigation allows players to access the Play, How To Play and About sections.

![Homepage and Navigation](https://raw.githubusercontent.com/SPProfessional/friendly-pairs/main/docs/screenshots/homepage-navigation.png)

### US2 – Theme Selection

As a player, I want to choose a theme so that I can play with content I enjoy.

Players can select from three available themes: Animals, Numbers and Colours. The selected theme determines the content displayed on the game cards, providing variety and allowing players to choose content that interests them.

The theme selection functionality can be tested in the [live application](https://spprofessional.github.io/friendly-pairs/).

![Theme Selection](https://raw.githubusercontent.com/SPProfessional/friendly-pairs/main/docs/screenshots/theme-selection.png)

### US3 – Difficulty Selection

As a player, I want to choose a difficulty so that I can select an appropriate challenge.

The application provides three difficulty settings:
- Easy – 8 cards (4 pairs).
- Medium – 12 cards (6 pairs).
- Hard – 16 cards (8 pairs).

Changing the difficulty adjusts the number of cards generated for the game.

This functionality can be tested in the [live application](https://spprofessional.github.io/friendly-pairs/).

![Difficulty Selection](https://raw.githubusercontent.com/SPProfessional/friendly-pairs/main/docs/screenshots/difficulty-selection.png)

### US4 – Finding Matching Pairs

As a player, I want to reveal cards and find matching pairs so that I can play the memory game.

Players interact with the cards to reveal their contents. When two cards are selected, the application checks whether they match. Correct pairs remain revealed, while incorrect pairs are hidden again, allowing the player to continue.

The matching functionality can be tested in the [live application](https://spprofessional.github.io/friendly-pairs/).

![Game in Progress](https://raw.githubusercontent.com/SPProfessional/friendly-pairs/main/docs/screenshots/game-in-progress.png)

### US5 – Progress Feedback

As a player, I want feedback and a move counter so that I can follow my progress and know when I have completed the game.

The move counter updates as players make selections. The application also provides positive feedback when all matching pairs have been found, clearly indicating that the game has been completed.

This functionality can be tested in the [live application](https://spprofessional.github.io/friendly-pairs/).

![Game in Progress](https://raw.githubusercontent.com/SPProfessional/friendly-pairs/main/docs/screenshots/game-in-progress.png)

![Game Complete](https://raw.githubusercontent.com/SPProfessional/friendly-pairs/main/docs/screenshots/game-complete.png)

### US6 – Keyboard Accessibility

As a player who uses a keyboard, I want accessible controls and visible focus indicators so that I can navigate and interact with the game without relying on a mouse.

Interactive elements can be accessed using keyboard navigation, with visible focus indicators helping players identify which element is currently selected.

Keyboard accessibility can be tested in the [live application](https://spprofessional.github.io/friendly-pairs/).

![Keyboard Focus](https://raw.githubusercontent.com/SPProfessional/friendly-pairs/main/docs/screenshots/keyboard-focus.png)

### US7 – Responsive Mobile Layout

As a mobile user, I want the game to adapt to my screen so that I can use it on different devices.

The responsive layout adjusts the navigation, game controls and card grid to suit smaller screen sizes, helping maintain usability across desktop, tablet and mobile devices.

The responsive design can be viewed in the [live application](https://spprofessional.github.io/friendly-pairs/).

![Mobile Layout](https://raw.githubusercontent.com/SPProfessional/friendly-pairs/main/docs/screenshots/mobile-layout.png)