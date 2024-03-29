# practice-css

A repository to commit my CSS practice projects.

## Amazon-clone

A clone of the Amazon product page.

## slack-clone

A clone of the Slack web app. A lot of minute details were not added along along with the mobile verison.

# 50 projects in 50 days

Take aways / Differences between my approach and instructor.

### form wave animation (project 8)

1. Use javascript to create span for each letter.
2. Use sibling combinator ( + ) to select letters instead of toggling class on the parent element.
3. Use translateY for transition instead of top (better performance).
4. Using :valid (input:valid) psuedo selector to prevent labels to overlap non-empty text input.
5. Use scale(0.98) easily add button hover affect (I used opacity).

# Dad Jokes (project 10)

1. Understand the difference between ":active" and ":hover" state. How do you want the button to behave on "hover" i.e. ":hover" state vs "active" i.e. on button press.
   One way could be do nothing on "hover" and scale down on press i.e. ".btn:active {transform: scale(0.98)}.
2. **Accept vs Content-type**: To specify what response should server send use "Accept". To specify the body content type either in request (in POST/PUT request) or server response use "Content-Type" header.
3.

# Event keyCodes (project 11)

1. Used `keydown` instead of `keyup`.
2. For a absolute positioned element use width 100% and `text-align: center` to align a heading in center and above a relatively positioned element.

# FAQ Collapse (project 12)

1. For font-awesome you can use "unicode" to add icon dynamically using ::before/::after pseudo selectors. E.g.

```CSS
   .faq.active::before {
      content: '\f075',
      font-family: 'Font Awesome 5 free';
   }
```

2. For the open/close buttons, the instructor wrapped both the icons in a button and used CSS to show/hide the icons depending upon the parent active class.

# Random Choice Picker (project 13)

1. Instead of using variable to track and call `clearInterval`, the instructor used `setTimeout` that after given time cleared the interval.
2. Also, I thought `Math.random()` returns max value of 1. But that is not the case. So to pick random value from an array we can use: `Math.floor(Math.random() * array.length)`.
3. I had added transition for animation but wasn't really required.

# Movie App (project 17)

1. I used `nav` instead of `header`. `header` makes more sense as I don't have any navigation related content in the `nav` tab.
2. I used `keyup` event to detect `Enter` press on search input. Wrapping `input` in a `form` tag and then handling `submit` event makes more sense and is relatively easy to handle.

# Background Slider (project 18)

1. Using z-index to create different layers and `overflow: hidden` to hide overflowing content.
2. Just setting transition to `transition: background 1s` animates background as it's resized automatically by the browser.

# Theme Clock (project 19)

1. Using css variables to change colors by overriding `:root` scope with `html.dark` scope. Nice way to not hard-code colors.
2. Using multiple classes to better target and style similar components. Specifically for clocks hands I used `second-hand`, `minute-hand`, and `hour-hand` classes. Whereas the instructor used `needle second`, `needle minute`, and `needle hour` classes. Now for the similar style use `needle` class.
3. Use `display: inline-flex;` to vertically and horizontally align text in an inline elment.

# Button Ripple Effect (project 20)

1. I used `getBoundingClientRect` instead of `event.target.offsetTop`. This can have a slight performance. The `offsetTop` is calculated from beginning of your top most relative containre. The `getBoundingClientRect` is relative to the current view port.

# Drag n Drop (project 21)

1. I didn't knew there is a `draggable` HTML attribute.
2. Also, there based on that there are these drag related events: `dragstart`, `dragend`, `dragover`, `dragenter`, `dragleave`, `drop`.
3. This makes it very easy to handle the drag event.

# Drawing App (project 22)

1. Didn't knew there is a color-picker element in HTML.

# Content Placeholder (project 24)

1. `object-fit` give more control to position an image inside a div. Similar to background but for content.
2. To show _shining_ animation used `linear-gradient` to create a `background` with little shine and used `background-position` property to move the background to create the shining effect.

# Sticky Navbar (project 25)

1. I didn't use `negative` `z-index` to place the overlay between the image background and the text. Instead I set the text position to absolute and placed it on top. The `z-index` `negative` was easier.

# Github Profiles (project 28)

1. Wrapping input with form makes it easy to detect submit. I listened to keyup event for enter press. The instructor version is cleaner way.

# Good Cheap Fast (project 32)

1. Use `checkbox` with `visibility: hidden` and sibling selector to toggle the button. I used javascript to achieve the same. This was cleaner, easy and less code.

# Notes App (project 33)

1. Use `element.addEventListener` instead of passing id in the callback like `<button class="note-btn" onclick="deleteNote('${id}')">`. While creating the DOM element I can access all it's children right there and attach event listeners. No need to play with the noteId.

# Animated Countdown (project 34)

1. I was trying to synchronize `setTimeout` to `animation-time` which I don't think is a good idea. Instead the instructor used `setTimeout` to add/remove css classes for each countdown number span. Which requires little more markup but will not have synchronization issues.
2. Use `animationend` event. In this case to display next number or finish the animation once countdown reaches zero.
