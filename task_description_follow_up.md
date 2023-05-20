    - Disney dolls (Disney princes, frozen dolls, animation characters, donald duck, etc.),

## **Main Requirements**

3. **` Home page:`**

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

11. For all the CRUD operations, show relevant toast/ notification/ anything with a meaningful message

## **Bonus Requirements**

2. **Reload:** If you reload the protected/private routes (after login), this page will not redirect the user to the login page. Instead, it will keep the logged-in user on the protected route.

3. Make Home page of your website mobile & desktop responsive (tablet responsive is optional)

<br/>

4. Use the [AOS Package](https://www.npmjs.com/package/aos) in the home page. At least in one place on the home page. Using AOS on other pages is optional.

<br/>

5. On the **My Toys** page, you must implement a sorting system to sort the toys in **descending** and **ascending** orders based on the **price**. (Explore MongoDB sorting operation & implement it on the backend). The design of the sorting system depends on you.

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

### **What to submit:**

1. Your client-side code GitHub repository
2. Your server-side code GitHub repository
3. Your live website link
