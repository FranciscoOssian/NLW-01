# ♻️ECOLETA

<div>
    <img src="https://i.imgur.com/IEbqe4C.png">
</div>

## Result of Code

<div>
    <img src="https://i.imgur.com/DQK2Crb.gifv">
    <img src="https://i.imgur.com/AIkjozi.gifv">
</div>

This projet was created during Next Level Week, organized by RocketSeat. With some modifications proposed by teacher/presenter

## 🚀Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### ⬇ Installing

#### 💻Clone this project to your local machine
```
$ git clone *this repo link*
```

### ⚙️Configuring

#### 📁Open the file server/src/config/ip.config.ts
And set the local ip with the same IP in expo start in LAN mode

#### 📁Open the server folder:
##### 📊Create a DataBase
```
$ npm run knex:migrate
$ npm run knex:seed
```
##### 🏃‍♂️Runing the backend
```
$ npm run dev
```

#### 📁Open the web folder
##### 🏃‍♂️Running front-end
```
$ npm start
```
#### 📁Open the mobile folder
##### 🏃‍♂️Running expo project
```
$ npm start
```

## Built With

* [React Native](https://reactnative.dev/) [React JS](https://reactjs.org/) for front-end