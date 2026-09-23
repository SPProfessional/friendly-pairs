# Friendly Pairs - Testing

## Testing Approach

Friendly Pairs was manually tested during development to check that the game's functionality, accessibility features and responsive layout work as intended.

Testing was carried out using the local development preview and will be repeated against the deployed version before submission.

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