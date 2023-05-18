    - Disney dolls (Disney princes, frozen dolls, animation characters, donald duck, etc.),

## **Main Requirements**

2. Make sure to keep the navbar and footer on all the pages **except on the 404-page**.

<br/>

3. Your website should have a navbar with the **Website logo, Website name, Home, All Toys, My Toys, Add A Toy, Blogs,** and **User profile picture**.
   > **Note:** The **User profile picture, Add A Toy** and **My Toys** on the navbar are conditional based on login. If the user is logged in, the navbar will show the profile picture; otherwise, it will show the **Login button**. If the username is available, the user's name will be visible when the mouse hovers over the profile picture.

<br/>

4. **`Login & Registration systems:`** On the Registration and Login pages, display relevant error messages when necessary.

   > **Login Page:** When a user clicks on the login button, they will be redirected to the login page having the following:

   - Email/Password
   - Google Sign-in
   - A link that will redirect to the registration page

   <br/>

   > **Registration Page:** The Registration page will have the Email/Password form having the following fields:

   - Name
   - Email
   - Password
   - Photo URL

   <br/>

   > **Note:** Do not enforce the email verification method, as it will inconvenience the examiner. If you want, you can add email verification after receiving the assignment result.

<br/>

5. **` Home page:`**

   - **Banner section** -A slider/banner/ a meaningful section.

   - **Gallery Section** - Show relevant pictures. Try to make it attractive.
   - **Shop by category**- Implement a tab system for **Shop by category** section. Explore [React-tabs](https://www.npmjs.com/package/react-tabs), or you can implement this using custom CSS. There will be 3 tabs, each containing sub-categories of the category you have chosen.
     <br/>

   > For example, if the website is based on **Educational and learning toys**, the sub-categories for the **3** tabs can be **Math Toys, Language Toys, engineering toys, and Science Toys, etc.**. You need at least 3 sub-categories.
   > <br/>

   > Each tab will have minimum 2 toys, and each toy will have the following information:

   - Picture,
   - Name,
   - Price,
   - Rating and
   - View Details button.

   <br/>
           
   > **Note:** When a user is not logged in and if he/ she clicks on the View Details button, notify the user with a message **“You have to log in first to view details”** by using a toast/ notification/ anything. Also, redirect him/ her to the login page. Without a login, you can not visit the single toy details page.

   - **Extra Section:** Add two relevant sections. Try to make them attractive.

<br/>

6. **` Blogs`** page: Create a Blog where you will have to answer the following questions:

   - What is an access token and refresh token? How do they work and where should we store them on the client-side?
   - Compare SQL and NoSQL databases?
   - What is express js? What is Nest JS (google it)?
   - What is MongoDB aggregate and how does it work (google it)?

   <br/>

<br/>

7. **` All Toys`** page: Create an All Toys page where you will see the toys all the users have added in the tabular form. Each row of the All Toys table/list will have the following information:

   - Seller: (if available) show the name of the person who posted the toy
   - Toy Name
   - Sub-category
   - Price
   - Available Quantity
   - View Details button
     <br/>

   > Show 20 results by default by using `limit`
   >
   > Implement a ch system on this page, based on the **Toy name.** > <br/>

   Without logging in, if a user clicks on the **View Details** button, they will be redirected to the Login Page. Make sure to take the user to the Details Page after the user successfully logs in.

<br/>

8. **`Single toy details route will be a private route:`**

   > After clicking on the **View Details** button, he/ she will be redirected to the **Toys Details** route **( /toy/:id )** containing the information **( picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)**
   >
   > (optional) If possible, display the view details in a modal

<br/>

9. **` Add A Toy page will be a private route:`**
   <br/>

   > Create an **Add A Toy** page where there will be a form having the following fields:

   - Picture URL of the toy,
   - Name,
   - seller name (if available from the logged in user)
   - seller email (info from the logged in user)
   - Sub-category ( For example: if the website is based on Educational and learning toys, the sub-categories can be Math Toys, Language Toys, and Science Toys.)
   - Price,
   - Rating,
   - Available quantity
   - Detail description

<br/>

10. **`My Toys page will be private routes:`** If a user logs in, they will see the My Toys page, which it will show all the toys information they have added from the Add A Toy page in a tabular form. Each row will have an update and delete button.
    <br/>

    - **Update Action** - If they click the `update` button, they can update the Toy information (Price, available quantity, Detail description) <br/><br/>
      > **Note:** you can show the update form in a modal or another route.

    <br/>

    - **Delete Action** - If they click the delete button, the Toy will be removed from the list. Before the delete, ask for a delete confirmation.
      <br/>
      <br/> > **Note:** If a user logs in they will only see the toys they have added. The user cannot see the toys other users added.
      <br/>

<br/>

11. For all the CRUD operations, show relevant toast/ notification/ anything with a meaningful message

<br/>

12. **`404 page:`**

    > Create a 404 page. Add any interesting jpg/ gif on the 404 page. **Do not add header & footer on this page.** Just add a jpg/ gif & a **Back to home** button. The**Back to home** button will redirect the user to the home page.

<br/>

13. Use the Environment variable to hide the Firebase config keys and Mongodb credentials.

<hr/>
<br/>

## **Bonus Requirements**

1. **Commits & readme:**

   - Minimum 18 meaningful git commits on the client-side repository.
   - Minimum 8 meaningful commits on the server-side repository.
   - Create a readme for client-side and write about your project (at least 5 bullet points). ** Remember to add your client-side live link to your website here.**

<br/>

2. **Reload:** If you reload the protected/private routes (after login), this page will not redirect the user to the login page. Instead, it will keep the logged-in user on the protected route.

3. Make Home page of your website mobile & desktop responsive (tablet responsive is optional)

<br/>

4. Use the [AOS Package](https://www.npmjs.com/package/aos) in the home page. At least in one place on the home page. Using AOS on other pages is optional.

<br/>

5. On the **My Toys** page, you must implement a sorting system to sort the toys in **descending** and **ascending** orders based on the **price**. (Explore MongoDB sorting operation & implement it on the backend). The design of the sorting system depends on you.

<br/>

6. Give your website name. The website title will be changed according to the route you are clicking. Suppose your website name is PHero. Then, on the **‘about’** route, your website title will be **‘PHero | About us’**.

7. Make the component name, folder structure, and route name meaningful. If needed, add comments.

<br/>

---

<br/>

## **Optional (But Highly Recommended):**

1. Implement a JWT token in your routes.

<br/>

2. Add a spinner when the data is in a loading state. You can add a gif/jpg, use any package or customize it using CSS.

<br/>

3. **Interesting part:**

   > Each blog will contain a question, an answer, and a pin icon. You can display them however you want. When a user clicks on a pin icon, the pin icon will become blue (or any dark color), and the pinned blog will be shown on the homepage. However, if a user clicks on the already pinned blog, the blog will be unpinned, and that blog will not appear on the homepage. Make sure to make the pin icon white when the blog unpins.
   > <br/>
   > When a user is not logged in, the pin button is disabled.

<br/>

4. **Little Bit Advanced:** Add more toys for each sub-category. You can add pagination in your tab system.

<br/>

5. Add extra features of your own. This will help you in the future to differentiate your project from others.

<br/>
<hr/>
<br/>

### **Additional information:**

1. You can use a local or host image anywhere or use pictures from the internet. And it's ok if you have the image url, but the image link doesn't work.
2. You can use vanilla CSS or any CSS library (Bootstrap, tailwind) you want. If you wish, you can use both Bootstrap and react-bootstrap. Also, if you want, you can use any tailwind component library such as DaisyUI, etc.
3. Try to host your site on Firebase (Netlify hosting will need some extra configurations)
4. Host your server-side application on Vercel. If needed, you can host somewhere else as well.
5. Make Sure you deploy server-side and client-side on the first day. If you have any issues with hosting or GitHub push, please join the "Github and deploy" related support session.

<br/>
<hr/>
<br/>

### **What to submit:**

1. Your client-side code GitHub repository
2. Your server-side code GitHub repository
3. Your live website link

<br/>
<hr/>
<br/>

### **Some Guidelines:**

1. Do not waste much time on the website idea. Just spend 15-20 minutes deciding, find a sample website, and start working on it.
2. Do not waste much time finding the right image. You can always start with a simple idea. Make the website and then add different images.
3. Don't look at the overall task list. Just take one task at a time and do it. Once it's done, pick the next task. If you get stuck on a particular task, move on to the next task.
4. Stay calm, think before coding, and work sequentially. You will make it.
5. Be strategic about the electricity issue.
6. use `chatgpt` to generate JSON data. You can use chatGPT for Yother purposes as well.

<br/>
<hr/>
<br/>

### No Pain, No Gain:

`The most beautiful moments in life comes after going through hardships and challenges.`
