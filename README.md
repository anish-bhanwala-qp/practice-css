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

1. Use keydown instead of keyup.
2. For a absolute positioned element use width 100% and text-align center to align a heading in center and above a relatively positioned element.
