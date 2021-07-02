# Simple-Movies_App_Version_2.0

## Framework dan Package
- express js
- ejs
- nodemon
- pg
- sequelize
- sequelize-cli
- html => Custom Bootsrap 5

## Task
Buatlah Movies App V2 dengan require sebagai berikut :

- Release 0:
    - Buatlah tabel database ProductionHouse dengan Field :
        - nama production house : string
        - headquarters : string
    - Buatlah tabel database Movie dengan Field :
        - nama : string
        - release year : integer
        - genre : string
        - rating : string
    - Buatlah tabel database Cast dengan Field :
        - first name : string
        - last name : string
        - phone number : string
        - birth year : integer
        - gender : string

- Release 1:
    - Buatlah Hubungan Asosiasi / Relasi antar setiap table, tentukan juga Primary Key dan Foreign Key nya dengan ketentuan :
        - Tabel Cast dan Movie memiliki hubungan `Many to Many`, sehingga terbentuk tabel baru bernama `MovieCast`
        - Tabel Production House dan Movie memiliki hubungan `One to Many`
        - Tentukan Primary Key dan Foreign Key nya di dalam folder models di setiap masing - masing file

- Release 2:
    - Buatlah route dengan ketentuan :
        - Pada halaman Home :    
            - Menampilkan Web Page Selamat Datang
        - Pada halaman Production House :
            - Menampilkan List data Production House dari database
        - Pada halaman Movie :
            - Menampilkan List data Movie dari database
            - Memiliki fitur Add Movie
            - Memiliki fitur Edit Movie
            - Memiliki Fitur Delete Movie
            - Memiliki Fitur Add Cast
                - note => Add Cast digunakan untuk menambahkan Para pemain casting ke dalam Film tersebut
        - Pada halaman Cast :
            - Menampilkan List data Movie dari database
            - Memiliki fitur Add Cast
            - Memiliki fitur Edit Cast
            - Memiliki Fitur Delete Cast
            - Memiliki Fitur See Movies
                note => See Movies di gunakan untuk melihat si Pemain / Casting bermain di Film apa saja

# Getting Started
Hal yang perlu dilakukan untuk memulai Aplikasi Web :

- Pastikan di komputer kamu telah terinstal Postgres
- clone this repository
- cd Simple-Movies_App_Version_2.0
- npm install
- Masuk ke folder config, lalu ubah settingan sesuai dengan di laptop / komputer kamu
    ```JavaScript
        "development": {
            "username": "postgres",
            "password": "postgres",
            "database": "git_movie_app_V2",
            "host": "localhost",
            "dialect": "postgres"
        },
    ```
- npx sequelize db:create
- npx sequelize db:migrate
- npx sequelize db:seed:all 
- git checkout -b yourbranch
- npx nodemon app.js
- you can see web apps in http://localhost:3000/

# Feature in routes
- HOME
    - http://localhost:3000
- Production House
    - LIST : http://localhost:3000/productionhouse
- Movie
    - LIST : http://localhost:3000/movies
    - ADD : http://localhost:3000/movies/add
    - EDIT : http://localhost:3000/movies/:id/edit
        - notes : `:id` akan secara otomatis terganti saat memilih link edit di setiap data
    - DELETE : http://localhost:3000/movies/:id/delete
        - notes : `:id` akan secara otomatis terganti saat memilih link delete di setiap data
- Cast
    - LIST : http://localhost:3000/casts
    - ADD : http://localhost:3000/casts/add
    - EDIT : http://localhost:3000/casts/:id/edit
        - notes : `:id` akan secara otomatis terganti saat memilih link edit di setiap data
    - DELETE : http://localhost:3000/casts/:id/delete
        - notes : `:id` akan secara otomatis terganti saat memilih link delete di setiap data

    