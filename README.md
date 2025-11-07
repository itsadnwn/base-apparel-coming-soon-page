# 📚 Frontend Mentor Challenge - Base Apparel Coming Soon Page

A responsive page for [Base Apparel Coming Soon Page on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

![screenshot of art gallery website](/images/screenshot.png)

# 🔗 Links

+ **Solution URL:** [github.com/itsadnwn/base-apparel-coming-soon-page](https://github.com/itsadnwn/base-apparel-coming-soon-page/)
+ **Live Site URL:** [itsadnwn-base-apparel-coming-soon-page.vercel.app](https://itsadnwn-base-apparel-coming-soon-page.vercel.app/)

# 🛠️ Technologies Used

This project was built with:
+ HTML5
+ CSS3
+ JavaScript
+ Media Queries for responsive design

# 🎯 What I learned & Practiced

## JavaScript Concepts
### ⭐ JavaScript Email Validation
+ `e.preventDefault()` stops the default form submission so it can be validated first
+ `form.setAttribute('novalidate', '')` disables browser's built-in validation popup
+ Event flow: Prevent first, validate, then manually submit if valid
```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop submission
    
    if (invalid) {
        // Show custom error
    } else {
        form.submit(); // Manually submit when valid
    }
});
```

## CSS Concepts
### ⭐ `object-fit`
Controls how images/videos fit inside their container without distortion. This helped with the desktop version for the image. 

### ⭐ `input::placeholder`
Allows to style the placeholder text. Note that it's to use double colon instead of single colon.


# ✨ Key Features

+ **Fully Responsive Design:** Optimized layout that adapts to different screen sizes
+ **Email Validation:** Enter an invalid email to see the error message
+ **Adaptive UI Behavior**: Different interactions for mobile and desktop

# 📁 File Structure

+ **index.html**: Main HTML markup and content structure
+ **styles.css**: Component styling and responsive layouts
+ **index.js**: Interactive behavior
+ **assets**: Images and other assets

# 🔧 Development Notes

+ Built with semantic HTML5 for accessibility
+ CSS organized with custom properties and maintainability 
+ Mobile-first approach ensures optimal performance on all devices
+ Tested across multiple browsers and device sizes