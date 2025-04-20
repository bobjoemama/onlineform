# Printer Order Webpage (Node.js)


# Online link
https://online-form-submission-to-database.onrender.com


## Overview

This repository contains the source code for a web application designed to facilitate printer orders. Built using Node.js, this application provides a user-friendly interface for customers to submit their printer order details. The submitted information is then securely stored in an online database for efficient order management.

## Key Features

* **User-Friendly Order Form:** A clear and intuitive HTML form using bootstrap allows users to easily input their personal and order details. The form includes fields for:
    * Name
    * Email Address
    * Phone Number
    * Address
    * Printer Model
    * Quantity
* **Node.js Backend:** A robust Node.js backend handles the submission of the order form data.
* **Online Database Integration:** Upon form submission, the backend securely transmits and stores the collected data into a designated online database. This ensures persistent storage and facilitates efficient retrieval for order processing.
* **Data Persistence:** All submitted order information, including customer details and the specifics of the printer order, is reliably stored in the online database.

## Technologies Used

* **Node.js:** A JavaScript runtime environment used for building the server-side logic.
* **HTML:** Used for structuring the webpage and creating the order form.
* **CSS:** (Potentially) Used for styling the webpage and enhancing the user interface.
* **Online Database (Specify Database Here):** The application is designed to integrate with sql3.freesqldatabase.com	
* **Libraries:** Express, mysql2, body-parser, path, nodemon

## Setup and Installation

Detailed instructions on how to set up and run the application **locally**:

1.  **Prerequisites:**
    * Node.js and npm (Node Package Manager) installed on your system.
    * Access to the specified online database.
2.  **Cloning the Repository:**
    ```bash
    git clone https://github.com/bobjoemama/onlineform.git
    cd [repository directory]
    ```
3.  **Installing Dependencies:**
    ```bash
    npm install
    ```
4.  **Configuration:** Instructions on how to configure the database connection details (e.g., connection URI, credentials) within the application's configuration files (e.g., `.env` file).
5.  **Running the Application:**
    ```bash
    nodemon app.js start
    ```

## Usage

use "nodemon app.js start" in the command line and go to http://localhost:5000/
