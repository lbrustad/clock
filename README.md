# Clock

Consider this a very basic hobby project, not built as optimized as it could've been. Bad implementations exists, because of simplicity during development.

### About

A simple web clock with minor customizations.

- Click the background to change theme
- Click the day to switch between languages
- Click the time to toggle seconds
- Click the date to switch between date formats
- Rightclick/contextmenu will do the same for all click events, in reverse order

### Languages

As I personally don't need multiple languages, but wanted basic support for it, I created this to have Norwegian and English. I may accept PR's for improvements.

Language selection does need a better solution to toggle date formats, because different languages does have different date format standards, which I've not made easy to add, due to over-simplification during the development.

### Themes

The theme selection works well. Just add themes to the CSS file, and the script will auto-load the new themes. A theme requires a name starting with `theme-` to work, for loading safety.

Themes available:

- Amoled
- Orange
- Dark
- Red
- Illustration
- Bright

Some colors were copied from [Adobe Color](https://color.adobe.com/), as that's a good tool to find colors that works well together.
