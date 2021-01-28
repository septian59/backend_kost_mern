var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  "mongodb+srv://septian:upilmumu@cluster0.juhdo.mongodb.net/db_kostme?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      "./models/Category",
      "./models/Bank",
      "./models/Item",
      "./models/Feature",
      "./models/Activity",
      "./models/Member",
      "./models/Image",
      "./models/Member",
      "./models/Booking",
      "./models/Users",
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        "Category",
        "Bank",
        "Item",
        "Member",
        "Item",
        "Feature",
        "Image",
        "Booking",
        "Users",
      ],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  {
    model: "Category",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901111"),
        name: "Kost Kamar Mandi dalam",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901112"),
        name: "Kost Kamar Mandi luar",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902233") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901113"),
        name: "Kontrakan",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902230") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902231") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902232") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229") },
        ],
      },
    ],
  },
  // end category
  // start item
  {
    model: "Item",
    documents: [
      // Tabby Town
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
        title: "Wisma aster",
        price: 400000,
        sumBooking: 1,
        country: "Indonesia",
        city: "Amikom",
        isPopular: false,
        description:
          "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        unit: "bulan",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },
      // Seattle Rain
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
        title: "Pondok Risma",
        price: 300000,
        sumBooking: 2,
        country: "Indonesia",
        city: "Unsoed",
        isPopular: false,
        description: "jalan kenanga, gang pepaya, deket masjid alfalah",
        unit: "bulan",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6") },
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Wodden Pit
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
        title: "Kost Salsabila",
        price: 380000,
        sumBooking: 3,
        country: "Indonesia",
        city: "Unsoed",
        isPopular: false,
        description: "jl gunung putri, sebrang poppies unsoed",
        unit: "bulan",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa14") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa15") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa16") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa17") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Anggana
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
        title: "Anggana",
        price: 500000,
        sumBooking: 4,
        country: "Indonesia",
        city: "IAIN",
        isPopular: false,
        description:
          "Terima kost bulanan di Jln Kalibener gang 3 (dekat Moro) berukuran 5x5 dan 4x3, fasilitas kamar mandi dalam, dapur, kasur bantal, lemari, meja, parkiran luas, lingkungan nyaman dekat masjid. harga per kamar 500rb.",
        unit: "bulan",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12") },
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa18") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa19") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa20") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Green Park
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
        title: "Kost Banu",
        price: 500000,
        sumBooking: 5,
        country: "Indonesia",
        city: "Unsoed",
        isPopular: false,
        description:
          "semua dah free WiFi internet unlimited/bln + kebersihan free biaya/bln.area univ.UNSOED (keperawatan,kedokteran,peternakan,pertanian,bhs Inggris),Deket kampus LP3i,kampus BSI purwokerto-jateng.khusus mahasiswi/wanita,karyawan wanita single.lokasi dijaln kenanga,gang Kacer Rt.02 / Rw.02 Purwokerto utara.",
        unit: "bulan",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15") },
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Podo Wae
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
        title: "Kost Al Royan",
        price: 400000,
        sumBooking: 6,
        country: "Indonesia",
        city: "UMP",
        isPopular: false,
        description: "Lingkungan aman, nyaman, bebas jam malam tp sopan",
        unit: "Bulan",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18") },
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa24") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa25") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa26") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Silver Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
        title: "Kost baitur Rijal",
        price: 300000,
        sumBooking: 7,
        country: "Indonesia",
        city: "Unsoed",
        isPopular: false,
        description: "Kost baitur rijal jalan cendrawasih",
        unit: "Bulan",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21") },
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa27") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa28") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa29") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Cashville
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
        title: "Kontrakan Aster",
        price: 20000000,
        sumBooking: 8,
        country: "Indonesia",
        city: "SMK Citra Mandiri",
        isPopular: false,
        description: "20 juta per th karang pucung wa 083108480900",
        unit: "tahun",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24") },
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa30") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa31") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa32") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa33") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // PS Wood
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
        title: "Puri Kencana",
        price: 5000000,
        sumBooking: 9,
        country: "Indonesia",
        city: "Blok B18 cibeberem sumbang",
        isPopular: false,
        description:
          "Dikontrakan rumah di perumahan puri kencana Blok B18 cibeberem sumbang 5 jt per tahun minat hub nohp. 08122708275 ",
        unit: "tahun",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27") },
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa39") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa40") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa41") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa42") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // One Five
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
        title: "Kontrakan Rama",
        price: 12000000,
        sumBooking: 11,
        country: "Indonesia",
        city: "SMKN 2 Purwokerto",
        isPopular: false,
        description: "Alamat desa kedung malang rt3/1kec sumbang",
        unit: "tahun",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30") },
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa43") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa44") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa45") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa46") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // Minimal
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
        title: "Kontrakan Yusuf",
        price: 10000000,
        sumBooking: 13,
        country: "Indonesia",
        city: "Amikom",
        isPopular: false,
        description: "Jalan Bobosan wa 0813-4332-5198",
        unit: "tahun",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33") },
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa47") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa48") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa49") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa50") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa51") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // Stays Home
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
        title: "Baba",
        price: 300000,
        sumBooking: 14,
        country: "Indonesia",
        city: "SMKN 2 Purwokerto",
        isPopular: false,
        description:
          "Jalan Sekolah Teknik Gang 2 Belakang SMKN 2 Purwokerto (pusat kota kemana mana deket yah ) Akses mobil tapi parkiran garasi hanya untuk motor saja , Untuk mobil tidak bisa parkir menginap di kost ... Keterangan lebih lanjut bisa WA yah 085842519720",
        unit: "bulan",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35") },
          // done
        ],
        featureId: [
          // done

          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa34") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa35") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa36") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa37") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa38") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },
    ],
  },
  // end item
  // start image
  {
    model: "Image",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1"),
        imageUrl: "images/image-mostpicked-1-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
        imageUrl: "images/image-mostpicked-2-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
        imageUrl: "images/image-mostpicked-3-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
        imageUrl: "images/image-mostpicked-4-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
        imageUrl: "images/item-1.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
        imageUrl: "images/image-mostpicked-5-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
        imageUrl: "images/image-mostpicked-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8"),
        imageUrl: "images/image-mostpicked-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9"),
        imageUrl: "images/image-mostpicked-9-min.jpg",
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
        imageUrl: "images/image-mostpicked-10-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
        imageUrl: "images/image-mostpicked-11-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
        imageUrl: "images/image-mostpicked-12-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
        imageUrl: "images/image-mostpicked-13-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
        imageUrl: "images/image-mostpicked-14-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
        imageUrl: "images/image-mostpicked-15-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
        imageUrl: "images/image-category-1-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17"),
        imageUrl: "images/image-category-2-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18"),
        imageUrl: "images/image-category-3-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19"),
        imageUrl: "images/image-category-4-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20"),
        imageUrl: "images/image-category-5-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21"),
        imageUrl: "images/image-category-6-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22"),
        imageUrl: "images/image-category-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23"),
        imageUrl: "images/image-category-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24"),
        imageUrl: "images/image-category-9-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25"),
        imageUrl: "images/image-category-71-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26"),
        imageUrl: "images/image-category-81-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27"),
        imageUrl: "images/image-category-91-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28"),
        imageUrl: "images/image-category-10-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29"),
        imageUrl: "images/image-category-11-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30"),
        imageUrl: "images/image-category-12-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31"),
        imageUrl: "images/image-category-13-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32"),
        imageUrl: "images/image-category-14-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33"),
        imageUrl: "images/image-category-15-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34"),
        imageUrl: "images/image-category-16-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35"),
        imageUrl: "images/image-category-17-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36"),
        imageUrl: "images/image-category-18-min.jpg",
      },
    ],
  },
  // end image
  // start feature
  {
    model: "Feature",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01"),
        name: "kamar kost",
        qty: 10,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03"),
        name: "dapur",
        qty: 1,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04"),
        name: "kamar mandi",
        qty: 1,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05"),
        name: "mbp/s",
        qty: 100,
        imageUrl: "images/feature-5.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },

      // Pondok risma
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08"),
        name: "kamar kost",
        qty: 4,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09"),
        name: "kamar mandi",
        qty: 1,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10"),
        name: "dapur",
        qty: 1,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11"),
        name: "televisi",
        qty: 1,
        imageUrl: "images/feature-8.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      //kost salsa bila
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13"),
        name: "kamar kost",
        qty: 4,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa14"),
        name: "mbps",
        qty: 100,
        imageUrl: "images/feature-5.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa15"),
        name: "dapur",
        qty: 5,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa16"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa17"),
        name: "kamar mandi",
        qty: 1,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
      },
      //anggana
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa18"),
        name: "kamar mandi",
        qty: 1,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa19"),
        name: "dapur",
        qty: 1,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa20"),
        name: "kamar kost",
        qty: 5,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
      },
      // kost banu
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa21"),
        name: "kamar kost",
        qty: 4,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa22"),
        name: "mbps",
        qty: 100,
        imageUrl: "images/feature-5.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa23"),
        name: "kamar mandi",
        qty: 2,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
      },
      //kost al royan
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa24"),
        name: "kamar kost",
        qty: 8,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa25"),
        name: "kamar mandi",
        qty: 3,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa26"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
      },
      // kost baitur rijal
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa27"),
        name: "kamar kost",
        qty: 8,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa28"),
        name: "kamar mandi",
        qty: 2,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa29"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
      },
      //kontrakan aster
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa30"),
        name: "kamar tidur",
        qty: 4,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa31"),
        name: "kamar mandi",
        qty: 2,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa32"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa33"),
        name: "dapur",
        qty: 1,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
      },
      // kost baba
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa34"),
        name: "kamar mandi",
        qty: 2,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa35"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa36"),
        name: "kulkas",
        qty: 1,
        imageUrl: "images/feature-7.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa37"),
        name: "dapur",
        qty: 1,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa38"),
        name: "kamar kost",
        qty: 6,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
      },
      // puri kencana
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa39"),
        name: "kamar tidur",
        qty: 3,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa40"),
        name: "dapur",
        qty: 1,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa41"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa42"),
        name: "kamar mandi",
        qty: 1,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
      },
      //kontrakan rama
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa43"),
        name: "kamar tidur",
        qty: 3,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa44"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa45"),
        name: "kamar mandi",
        qty: 1,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa46"),
        name: "dapur",
        qty: 1,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
      },
      //kontrakan yusuf
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa47"),
        name: "kamar tidur",
        qty: 3,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa48"),
        name: "ruang tamu",
        qty: 1,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa49"),
        name: "kamar mandi",
        qty: 1,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa50"),
        name: "dapur",
        qty: 1,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa51"),
        name: "kulkas",
        qty: 1,
        imageUrl: "images/feature-7.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
      },
    ],
  },
  // end feature
  // start activity
  {
    model: "Activity",
    documents: [
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
    ],
  },
  // end activity

  // start booking
  {
    model: "Booking",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cee1"),
        bookingStartDate: "12-12-2020",
        bookingEndDate: "12-12-2020",
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
          title: "Village Angga",
          price: 6,
          duration: 2,
        },
        total: 12,
        memberId: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        bankId: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        payments: {
          proofPayment: "images/bukti.jpeg",
          bankFrom: "BCA",
          status: "Proses",
          accountHolder: "ang",
        },
      },
    ],
  },
  // end booking

  // member
  {
    model: "Member",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        firstName: "Elfin",
        lastName: "Sanjaya",
        email: "elfinsanjaya12@gmail.com",
        phoneNumber: "082377954008",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903334"),
        firstName: "Yein",
        lastName: "Narayana",
        email: "elfinsanjaya1207@gmail.com",
        phoneNumber: "082377954008",
      },
    ],
  },
  {
    model: "Bank",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903322"),
        nameBank: "Mandiri",
        nomorRekening: "089898",
        name: "elfin",
        imageUrl: "images/logo bca.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        nameBank: "BCA",
        nomorRekening: "878678",
        name: "elfin",
        imageUrl: "images/logo mandiri.png",
      },
    ],
  },
  {
    model: "Users",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "admin",
        password: "rahasia",
      },
    ],
  },
];
