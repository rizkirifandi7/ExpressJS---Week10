# ExpressJS-Week10

Nama : Rizki Rifani (FSWD 5A)

Program ini merupakan projek Restfull API yang terdiri dari GET, POST, DELETE, dan PUT. Pada program ini ada beberapa endpoint utama yang digunakan untuk menjalan program yaitu sebagai berikut:

Untuk akses Users data :
- All Data : `http://localhost:3000/users/all`
- Create Data : `http://localhost:3000/users/add`
- Delete Data : `http://localhost:3000/users/delete/:id`
- Update Data : `http://localhost:3000/users/edit/:id`

</br>

Untuk akses Movies data :
- All Data : `http://localhost:3000/movies/all`
- Create Data : `http://localhost:3000/movies/add`
- Delete Data : `http://localhost:3000/movies/delete/:id`
- Update Data : `http://localhost:3000/movies/edit/:id`

</br>
Pada program ini terdiri dari beberap folder dan file :
</br>

1.	src: Ini adalah folder utama yang berisi sebagian besar kode program
•	models: Folder yang berisi file userModel dan movieModel yang berhubungan langsung dengan basis data. Isi : userModel.js dan userModel.js
•	controllers: Folder yang berisi file untuk menangani logika bisnis, mengatur aliran permintaan HTTP, dan memanggil layanan. Isi : movieController.js dan userController.js
•	routes: Folder yang berisi file yang mendefinisikan rute atau endpoint HTTP dan mengarahkannya ke metode kontrol yang sesuai. Isi : userRoutes.js, movieRoutes.js, dan index.js
•	uploads: Folder yang berisi untuk menyimpan berkas yang diunggah.
•	db: folder berisi file untuk koneksi ke basis data. Isi : database.js
•	utils: folder ini berisi file utilitas atau fungsi bantuan yang digunakan di seluruh program. Isi : multer.js dan flash.js
•	repositories: Folder yang digunakan untuk mengisolasi akses langsung ke basis data dari controllers. Isi : userRepository.js dan movieRepository.js
•	views: Folder Ini adalah file untuk tampilan, seperti berkas EJS atau file HTML.
•	public: Folder ini berisi aset publik yang dapat diakses langsung, yang berisi file CSS, dan JavaScript.
2.	node_modules: Ini adalah Folder di mana semua modul Node.js eksternal diinstal.
3.	index.js: File adalah file utama dari program. Ini adalah file untuk menyiapkan server, mengonfigurasi middleware, dan mendefinisikan rute.



## Persyaratan

Sebelum dapat menjalankan aplikasi, pastikan telah memenuhi persyaratan berikut:

- Node.js
- PostgreSQL
- Browser
- Postman

## Instalasi

1. Clone repositori ini ke komputer:

   ```bash
   git clone https://github.com/rizkirifandi7/HW-Express-Week9.git

2. Pindah ke direktori projek

   ```bash
   cd HW-Express-Week9

3. Install package module

   ```bash
   npm install
   
4. Buatlah file baru dengan nama `.env` kemudian atur dan sesuaikan dengan program 

5. Import sample data `movies-database.sql` ke database PostgreSQL

6. Proses selesai


## Demo Program
1. Pastikan semua program sudah benar dan terhubung ke database, kemudian jalankan program dengan terminal menggunakan command berikut : 

   ```bash
   npm run start

2. Untuk memudahkan cara penggunaan program, gunakanlah endpoint yang menggunakan Swagger dan masukan endpoint tersebut ke browser :

     ```bash
   http://localhost:3000/api-docs/

  Maka akan muncul seperti berikut:

  ![Start](./public/assets/1.jpeg)
     
3. Untuk pertama cobalah untuk melakukan registrasi user dengan mengakses menu registrasi, isi setiap data nya :

  ![Regis](./public/assets/regis1.jpeg)

  </br>
  Maka akan menghasilkan output dan menghasilkan token yang nantinya dapat digunakan untuk melakukan CRUD data movie:

  ![Regis](./public/assets/regis2.jpeg)

4. Kemudian cobalah melakukan login 

  ![Login](./public/assets/login1.jpeg)
 
  </br>
   Maka akan menghasilkan output dan menghasilkan token yang nantinya dapat digunakan untuk melakukan CRUD data movie:

  ![Login](./public/assets/login2.jpeg)

5. Kemudian cobalah melakukan CRUD database movie namun sebelum melakukan itu masukan terlebih dahulu token yang didapatkan dari hasil registrasi ataupun login, setelah itu masukan ke Authorize 

  ![Auth](./public/assets/auth2.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut dan pengguna sudah dapat melakukan CRUD untuk data movie:

  ![Auth](./public/assets/auth1.jpeg)

6. Kemudian cobalah melakukan CRUD database movie dengan mencoba pagination

  ![Pagi](./public/assets/pagi1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![Auth](./public/assets/pagi2.jpeg)

7. Kemudian cobalah melakukan CRUD database movie dengan mencoba membuat data movie baru

  ![create](./public/assets/create1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![create](./public/assets/create2.jpeg)

8. Kemudian cobalah melakukan CRUD database movie dengan mencoba mendapatkan data berdasarkan id

  ![getid](./public/assets/getid1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![getid](./public/assets/getid2.jpeg)

9. Kemudian cobalah melakukan CRUD database movie dengan melakukan update data

  ![update](./public/assets/update1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![update](./public/assets/update2.jpeg)

10. Kemudian cobalah melakukan CRUD database movie dengan melakukan hapus data

  ![del](./public/assets/del1.jpeg)
 
  </br>
   Maka akan menghasilkan output sebagai berikut:

  ![del](./public/assets/del2.jpeg)
