
# Hack4Change 2024

## Antique Store

We are  building an e-commerce platform dedicated to preserving and promoting rich heritage. We're creating a virtual marketplace for antiques, collectibles, handlooms and handicrafts.

Our primary goal is to empower local artisans, self-employed individuals, and small-scale manufacturers by providing them with a platform to reach a global audience. By connecting these talented creators directly with customers, we aim to revitalize traditional crafts and support sustainable livelihoods.


## Demo

https://youtu.be/uF06CSslETs


## Architecture

![image](https://github.com/user-attachments/assets/43987cf0-beb4-4298-a550-e5dde1202150)


## Test Credentials

| Email (Normal User) | Password | Email (Admin)     | Password  |
| ------------------- | -------- | ----------------- | --------- |
| demo@gmail.com     | demo@123 | admin@gmail.com   | admin@123 |


## Tech Stack


![MongoDB](https://img.shields.io/badge/-MongoDB-green) ![Express](https://img.shields.io/badge/-Express-blue) ![React](https://img.shields.io/badge/-React-blue) ![Node.js](https://img.shields.io/badge/-Node.js-green) ![Material-UI](https://img.shields.io/badge/-Material--UI-blue) ![Stripe](https://img.shields.io/badge/-Stripe-blue) ![Mongoose](https://img.shields.io/badge/-Mongoose-green) ![Redux](https://img.shields.io/badge/-Redux-purple) ![CSS3](https://img.shields.io/badge/-CSS3-blue)



## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/sasikiran20/Hack2Skill.git
    cd Hack2Skill
    ```
2.  Install dependencies:
    ```bash
    npm install
    cd frorntend
    npm install
    cd ..
    ```
3.  Create a `config` folder inside the backend directory of the project and then create a `.env` file inside the `config` folder and add the following:

    ````bash
    PORT = 5000
    DB_LINK ="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
    NODE_ENV = production
    JWT_SECRET = <jwt-secret-key>
    JWT_EXPIRE = 5d
    COOKIE_EXPIRE = 5
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=465
    SMTP_SERVICE = gmail
    SMTP_MAIL = <smtp-email>
    SMTP_PASSWORD = <smtp-password>
    SMTP_PASS = <smtp-password>
    CLOUDINARY_NAME = <cloudinary-name>
    API_KEY = <api-key>
    API_SECRET = <api-secret>
    CLOUDINARY_URL=cloudinary://<api-key>:<api-secret>@<cloudinary-name>
    FRONTEND_URL = http://localhost:3000
    STRIPE_API_KEY = <stripe-api-key>
    STRIPE_SECRET_KEY = <stripe-secret-key>


    ````
4.  Run the app:

    ```bash
    cd backend && npm start
    ```


## Features

### Normal User Mode

| Feature             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| User Authentication | OAuth with JWT for secure user login and registration        |
| Profile Management  | Update user profile details (email, name, password, picture) |
| Shopping Cart       | Add items to the cart and apply coupon codes                 |
| Product Review      | Logged-in users can review products                          |
| Shipping Options    | Specify shipping area for product delivery                   |
| Order Tracking      | Track the status of orders                                   |
| Payment Gateway     | Secure payment processing via Stripe                         |
| Contact Form        | Contact form for user assistance                             |
| Saved Addresses     | Save multiple shipping addresses                             |
| Advanced Search     | Filter products by price range, category, and rating         |

### Admin Mode

| Feature                 | Description                                        |
| ----------------------- | -------------------------------------------------- |
| Admin Dashboard         | Access to an admin-only dashboard                  |
| User Management         | View and manage users (delete, promote to admin)   |
| Product Management      | Edit and create products, manage stock levels      |
| Review Management       | View and delete product reviews                    |
| Order Management        | View all orders, and can manage them               |
| Role-Based Permissions  | Restrict admin features based on roles             |
| Order Approval Workflow | Set up approval process for Update status of order |

## Upcoming Features

### Normal User Mode

| Feature                 | Description                                 |
| ----------------------- | ------------------------------------------- |
| Wishlist                | Create and manage wishlists for products    |
| Product Recommendations | Receive suggestions for related products    |
| Product Comparisons     | Compare product specifications side by side |
| Social Sharing          | Share favorite products on social media     |

### Admin Mode

| Feature             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| Sales Analytics     | Gain insights into sales trends and popular products      |
| Dynamic Coupons     | Create and manage targeted coupons                        |
| User Analytics      | Track user engagement and activity                        |
| Bulk Product Upload | Upload and update multiple products using CSV             |
| Automated Emails    | Send automated emails for order confirmation and updates  |
| Notification Center | Receive alerts for new orders, low stock, and more        |
| Data Export         | Export data sets (e.g., orders, products) to CSV or Excel |
| Product Bundles     | Create and manage product bundles                         |



## Contributions

| Contributor                                           |
| ----------------------------------------------------- |
| [Nirmal Ganesh](https://github.com/nirmalganesh11)             |
| [Asish Tony](https://github.com/Asish-15) |
| [Dharani Mahesh](https://github.com/DharaniMahesh) |
