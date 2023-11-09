<h1 align="center">React SQL Editor</h1>

This React application is built using ReactJS and Bootstrap. It offers an intuitive interface for writing and executing queries, with real-time results displayed.

![image](https://github.com/skh1203/SQL-Query-Editor/assets/76679739/d1c1afe0-bd6f-42e5-bf57-d2ef2bc61bb3)

## Components

- **Code Editor:** This section allows users to write their SQL queries.
- **Output Section:** This section displays the output of the user query.
- **Table Names Section:** This section displays tables and their schemas. Clicking on a table displays its data.
- **Available Queries Section:** Lists both custom and user-saved queries for quick and easy access.

## Features

- **Run:** To execute the queries
- **Clear:** To clear the text in the editor.
- **Save:** To save the queries.



_Note : For now only SELECT FROM queries on the tables are supported._


## Predefined Queries
1. ```SELECT * FROM Customers```
2. ```SELECT * FROM Employees;```
3. ```Select supplierID, companyName FROM Suppliers;```


<br>

## Dependencies Installed
- ace-builds: ```^1.31.1``` - Editor to write queries
- papaparse: ```^5.4.1``` - To parse CSV files
- react-ace: ```^10.1.0``` - Code editor component
- react-bootstrap: ```^2.9.1``` - React Bootstrap for UI components
- react-modal: ```^3.16.1``` - Modal dialogs


<br>

## Performance metrics
Page Load time of this website in desktop is around 0.45s. Performance metrics are calculated using GTmetrix.
![image](https://github.com/skh1203/SQL-Query-Editor/assets/76679739/62f6c4ce-a6ac-40a8-884b-8fca965af10e)
![image](https://github.com/skh1203/SQL-Query-Editor/assets/76679739/f8147b95-ce06-4faa-a5ad-af0230f03295)

