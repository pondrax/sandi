export const daftarKategori = [
  {
    kode:"1",
    tipe:'kategori',
    bagian:'Bagian I : Kategori Sistem Elektronik',
    judul:'Kategori Sistem Elektronik',
    deskripsi:'<p>Bagian ini mengevaluasi tingkat atau kategori sistem elektronik yang digunakan</p><p><b>[Kategori Sistem Elektronik]</b> Rendah; Tinggi; Strategis </p>'
  },
  {
    kode:"2",
    tipe:'tingkat',
    bagian:'Bagian II: Tata Kelola Keamanan Informasi',
    judul:'Tata Kelola Keamanan Informasi',
    deskripsi:'<p>Bagian ini mengevaluasi kesiapan bentuk tata kelola keamanan informasi beserta instansi/perusahaan/fungsi, tugas dan tanggung jawab pengelola keamanan informasi.</p><p><b>[Penilaian]</b> Tidak Dilakukan; Dalam Perencanaan; Dalam Penerapan atau Diterapkan Sebagian; Diterapkan Secara Menyeluruh</p>'
  },
  {
    kode:"3",
    tipe:'tingkat',
    bagian:'Bagian III: Pengelolaan Risiko Keamanan Informasi',
    judul:'Pengelolaan Risiko Keamanan Informasi',
    deskripsi:'<p>Bagian ini mengevaluasi kesiapan penerapan pengelolaan risiko keamanan informasi sebagai dasar penerapan strategi keamanan informasi.</p><p><b>[Penilaian]</b> Tidak Dilakukan; Dalam Perencanaan; Dalam Penerapan atau Diterapkan Sebagian; Diterapkan Secara Menyeluruh</p>'
  },
  {
    kode:"4",
    tipe:'tingkat',
    bagian:'Bagian IV: Kerangka Kerja Pengelolaan Keamanan Informasi',
    judul:'Kerangka Kerja Pengelolaan Keamanan Informasi',
    deskripsi:'<p>Bagian ini mengevaluasi kelengkapan dan kesiapan kerangka kerja (kebijakan & prosedur) pengelolaan keamanan informasi dan strategi penerapannya.</p><p><b>[Penilaian]</b> Tidak Dilakukan; Dalam Perencanaan; Dalam Penerapan atau Diterapkan Sebagian; Diterapkan Secara Menyeluruh</p>'
  },
  {
    kode:"5",
    tipe:'tingkat',
    bagian:'Bagian V: Pengelolaan Aset Informasi',
    judul:'Pengelolaan Aset Informasi',
    deskripsi:'<p>Bagian ini mengevaluasi kelengkapan pengamanan aset informasi, termasuk keseluruhan siklus penggunaan aset tersebut.</p><p><b>[Penilaian]</b> Tidak Dilakukan; Dalam Perencanaan; Dalam Penerapan atau Diterapkan Sebagian; Diterapkan Secara Menyeluruh</p>'
  },
  {
    kode:"6",
    tipe:'tingkat',
    bagian:'Bagian VI: Teknologi dan Keamanan Informasi',
    judul:'Teknologi dan Keamanan Informasi',
    deskripsi:'<p>Bagian ini mengevaluasi kelengkapan, konsistensi dan efektivitas penggunaan teknologi dalam pengamanan aset informasi.</p><p><b>[Penilaian]</b> Tidak Dilakukan; Dalam Perencanaan; Dalam Penerapan atau Diterapkan Sebagian; Diterapkan Secara Menyeluruh</p>'
  },
  {
    kode:"7.1",
    tipe:'persen',
    bagian:'Bagian VII : Suplemen',
    judul:'Pengamanan Keterlibatan Pihak Ketiga',
    deskripsi:'<p>Bagian ini mengevaluasi kelengkapan, konsistensi dan efektivitas penggunaan teknologi dalam pengamanan aset informasi.</p><p><b>[Penilaian]</b> Tidak Dilakukan; Dalam Perencanaan; Dalam Penerapan atau Diterapkan Sebagian; Diterapkan Secara Menyeluruh</p>'
  },
  {
    kode:"7.2",
    tipe:'persen',
    bagian:'Bagian VII : Suplemen',
    judul:'Pengamanan Layanan Infrastruktur Awan',
    deskripsi:'<p>Bagian ini mengevaluasi kelengkapan, konsistensi dan efektivitas penggunaan teknologi dalam pengamanan aset informasi.</p><p><b>[Penilaian]</b> Tidak Dilakukan; Dalam Perencanaan; Dalam Penerapan atau Diterapkan Sebagian; Diterapkan Secara Menyeluruh</p>'
  },
  {
    kode:"7.3",
    tipe:"persen",
    bagian:'Bagian VII : Suplemen',
    judul:'Perlindungan Data Pribadi',
    deskripsi:'<p>Bagian ini mengevaluasi kelengkapan, konsistensi dan efektivitas penggunaan teknologi dalam pengamanan aset informasi.</p><p><b>[Penilaian]</b> Tidak Dilakukan; Dalam Perencanaan; Dalam Penerapan atau Diterapkan Sebagian; Diterapkan Secara Menyeluruh</p>'
  },
];

export const daftarKriteria = [
  {
    kode: 'Rendah',
    minimal: 0,
    maksimal: 174,
    klasifikasi: 'Tidak Layak' 
  },
  {
    kode: 'Rendah',
    minimal: 175,
    maksimal: 312,
    klasifikasi: 'Pemenuhan Kerangka Kerja Dasar' 
  },
  {
    kode: 'Rendah',
    minimal: 313,
    maksimal: 535,
    klasifikasi: 'Cukup Baik' 
  },
  {
    kode: 'Rendah',
    minimal: 536,
    maksimal:645,
    klasifikasi: 'Baik' 
  },

  {
    kode: 'Tinggi',
    minimal: 0,
    maksimal: 272,
    klasifikasi: 'Tidak Layak' 
  },
  {
    kode: 'Tinggi',
    minimal: 273,
    maksimal: 455,
    klasifikasi: 'Pemenuhan Kerangka Kerja Dasar' 
  },
  {
    kode: 'Tinggi',
    minimal: 456,
    maksimal: 582,
    klasifikasi: 'Cukup Baik' 
  },
  {
    kode: 'Tinggi',
    minimal: 583,
    maksimal:645,
    klasifikasi: 'Baik' 
  },

  {
    kode: 'Strategis',
    minimal: 0,
    maksimal: 333,
    klasifikasi: 'Tidak Layak' 
  },
  {
    kode: 'Strategis',
    minimal: 334,
    maksimal: 535,
    klasifikasi: 'Pemenuhan Kerangka Kerja Dasar' 
  },
  {
    kode: 'Strategis',
    minimal: 536,
    maksimal: 609,
    klasifikasi: 'Cukup Baik' 
  },
  {
    kode: 'Strategis',
    minimal: 610,
    maksimal:645,
    klasifikasi: 'Baik' 
  },

  // {
  //   kode: 1,
  //   minimal: 0,
  //   klasifikasi: '#N/A' 
  // },
  {
    kode: 1,
    minimal: 0,
    klasifikasi: 'Rendah' 
  },
  {
    kode: 1,
    minimal: 16,
    klasifikasi: 'Tinggi' 
  },
  {
    kode: 1,
    minimal: 35,
    klasifikasi: 'Strategis' 
  },

  {
    kode: 2,
    tingkat:'II',
    minimal:{II:0},
    klasifikasi: 'Tk. I' 
  },
  {
    kode: 2,
    tingkat:'II',
    minimal:{II:12},
    klasifikasi: 'Tk. I+' 
  },
  {
    kode: 2,
    tingkat:'II',
    minimal:{II:36},
    klasifikasi: 'Tk. II' 
  },
  {
    kode: 2,
    minimal:{II:43.2,III:8},
    tingkat:'III',
    klasifikasi: 'Tk. II+' 
  },
  {
    kode: 2,
    minimal:{II:43.2,III:14},
    tingkat:'III',
    klasifikasi: 'Tk. III' 
  },
  {
    kode: 2,
    minimal:{III:16,IV:24},
    tingkat:'IV',
    klasifikasi: 'Tk. III+' 
  },
  {
    kode: 2,
    minimal:{III:16,IV:54},
    tingkat:'IV',
    klasifikasi: 'Tk. IV' 
  },

  {
    kode: 3,
    tingkat:'II',
    minimal:{II:0},
    klasifikasi: 'Tk. I' 
  },
  {
    kode: 3,
    tingkat:'II',
    minimal:{II:14},
    klasifikasi: 'Tk. I+' 
  },
  {
    kode: 3,
    tingkat:'II',
    minimal:{II:20},
    klasifikasi: 'Tk. II' 
  },
  {
    kode: 3,
    minimal:{III:4,II:24},
    tingkat:'III',
    klasifikasi: 'Tk. II+' 
  },
  {
    kode: 3,
    minimal:{III:8,II:24},
    tingkat:'III',
    klasifikasi: 'Tk. III' 
  },
  {
    kode: 3,
    minimal:{IV:8,III:10},
    tingkat:'IV',
    klasifikasi: 'Tk. III+' 
  },
  {
    kode: 3,
    minimal:{IV:12,III:10},
    tingkat:'IV',
    klasifikasi: 'Tk. IV' 
  },
  {
    kode: 3,
    minimal:{V:12,IV:12},
    tingkat:'V',
    klasifikasi: 'Tk. IV+' 
  },
  {
    kode: 3,
    minimal:{V:18,IV:12},
    tingkat:'V',
    klasifikasi: 'Tk. V' 
  },

  {
    kode: 4,
    tingkat:'II',
    minimal:{II:0},
    klasifikasi: 'Tk. I' 
  },
  {
    kode: 4,
    tingkat:'II',
    minimal:{II:15},
    klasifikasi: 'Tk. I+' 
  },
  {
    kode: 4,
    tingkat:'II',
    minimal:{II:24},
    klasifikasi: 'Tk. II' 
  },
  {
    kode: 4,
    minimal:{III:45,II:33.6},
    tingkat:'III',
    klasifikasi: 'Tk. II+' 
  },
  {
    kode: 4,
    minimal:{III:62,II:33.6},
    tingkat:'III',
    klasifikasi: 'Tk. III' 
  },
  {
    kode: 4,
    minimal:{IV:15,III:70},
    tingkat:'IV',
    klasifikasi: 'Tk. III+' 
  },
  {
    kode: 4,
    minimal:{IV:27,III:70},
    tingkat:'IV',
    klasifikasi: 'Tk. IV' 
  },
  {
    kode: 4,
    minimal:{V:12,IV:27},
    tingkat:'V',
    klasifikasi: 'Tk. IV+' 
  },
  {
    kode: 4,
    minimal:{V:18,IV:27},
    tingkat:'V',
    klasifikasi: 'Tk. V' 
  },

  {
    kode: 5,
    tingkat:'II',
    minimal:{II:0},
    klasifikasi: 'Tk. I' 
  },
  {
    kode: 5,
    tingkat:'II',
    minimal:{II:25},
    klasifikasi: 'Tk. I+' 
  },
  {
    kode: 5,
    tingkat:'II',
    minimal:{II:62},
    klasifikasi: 'Tk. II' 
  },
  {
    kode: 5,
    minimal:{III:35,II:84},
    tingkat:'III',
    klasifikasi: 'Tk. II+' 
  },
  {
    kode: 5,
    minimal:{III:50,II:84},
    tingkat:'III',
    klasifikasi: 'Tk. III' 
  },
  
  {
    kode: 6,
    tingkat:'II',
    minimal:{II:0},
    klasifikasi: 'Tk. I' 
  },
  {
    kode: 6,
    tingkat:'II',
    minimal:{II:18},
    klasifikasi: 'Tk. I+' 
  },
  {
    kode: 6,
    tingkat:'II',
    minimal:{II:28},
    klasifikasi: 'Tk. II' 
  },
  {
    kode: 6,
    minimal:{III:40,II:33.6},
    tingkat:'III',
    klasifikasi: 'Tk. II+' 
  },
  {
    kode: 6,
    minimal:{III:62,II:33.6},
    tingkat:'III',
    klasifikasi: 'Tk. III' 
  },
  {
    kode: 6,
    minimal:{IV:6,III:64},
    tingkat:'IV',
    klasifikasi: 'Tk. III+' 
  },
  {
    kode: 6,
    minimal:{IV:9,III:64},
    tingkat:'IV',
    klasifikasi: 'Tk. IV' 
  },

  {
    kode: 7.1,
    minimal:{total:81},
    klasifikasi: '%' 
  },
  {
    kode: 7.2,
    minimal:{total:30},
    klasifikasi: '%' 
  },
  {
    kode: 7.3,
    minimal:{total:48},
    klasifikasi: '%' 
  },

].reverse();

export const daftarTemplate = [
  {
    "kode": "1.0#",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Karakteristik Instansi/Perusahaan",
    "opsi": null
 },
  {
    "kode": "1.1",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Nilai investasi sistem elektronik yang terpasang",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Lebih dari Rp.30 Miliar"
       },
       {
          "value": 2,
          "label": "[B] Lebih dari Rp.3 Miliar s/d Rp.30 Miliar"
       },
       {
          "value": 1,
          "label": "[C] Kurang dari Rp.3 Miliar"
       }
    ]
 },
  {
    "kode": "1.2",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Total anggaran operasional tahunan yang dialokasikan untuk pengelolaan Sistem Elektronik",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Lebih dari Rp.10 Miliar"
       },
       {
          "value": 2,
          "label": "[B] Lebih dari Rp.1 Miliar s/d Rp.10 Miliar"
       },
       {
          "value": 1,
          "label": "[C] Kurang dari Rp.1 Miliar"
       }
    ]
 },
  {
    "kode": "1.3",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Memiliki kewajiban kepatuhan terhadap Peraturan atau Standar tertentu",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Peraturan atau Standar nasional dan internasional"
       },
       {
          "value": 2,
          "label": "[B] Peraturan atau Standar nasional"
       },
       {
          "value": 1,
          "label": "[C] Tidak ada Peraturan khusus"
       }
    ]
 },
  {
    "kode": "1.4",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Menggunakan teknik kriptografi khusus untuk keamanan informasi dalam Sistem Elektronik",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Teknik kriptografi khusus yang disertifikasi oleh Negara"
       },
       {
          "value": 2,
          "label": "[B] Teknik kriptografi sesuai standar industri, tersedia secara publik atau dikembangkan sendiri"
       },
       {
          "value": 1,
          "label": "[C] Tidak ada penggunaan teknik kriptografi"
       }
    ]
 },
  {
    "kode": "1.5",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Jumlah pengguna Sistem Elektronik",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Lebih dari 5.000 pengguna"
       },
       {
          "value": 2,
          "label": "[B] 1.000 sampai dengan 5.000 pengguna"
       },
       {
          "value": 1,
          "label": "[C] Kurang dari 1.000 pengguna"
       }
    ]
 },
  {
    "kode": "1.6",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Data pribadi yang dikelola Sistem Elektronik",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Data pribadi yang memiliki hubungan dengan Data Pribadi lainnya"
       },
       {
          "value": 2,
          "label": "[B] Data pribadi yang bersifat individu dan/atau data pribadi yang terkait dengan kepemilikan badan usaha"
       },
       {
          "value": 1,
          "label": "[C] Tidak ada data pribadi"
       }
    ]
 },
  {
    "kode": "1.7",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Tingkat klasifikasi/kekritisan Data yang ada dalam Sistem Elektronik, relatif terhadap ancaman upaya penyerangan atau penerobosan keamanan informasi",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Sangat Rahasia"
       },
       {
          "value": 2,
          "label": "[B] Rahasia dan/ atau Terbatas"
       },
       {
          "value": 1,
          "label": "[C] Biasa"
       }
    ]
 },
  {
    "kode": "1.8",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Tingkat kekritisan proses yang ada dalam Sistem Elektronik, relatif terhadap ancaman upaya penyerangan atau penerobosan keamanan informasi",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Proses yang berisiko mengganggu hajat hidup orang  banyak dan memberi dampak langsung pada layanan publik"
       },
       {
          "value": 2,
          "label": "[B] Proses yang berisiko mengganggu hajat hidup orang banyak dan memberi dampak tidak langsung"
       },
       {
          "value": 1,
          "label": "[C] Proses yang hanya berdampak pada bisnis perusahaan"
       }
    ]
 },
  {
    "kode": "1.9",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Dampak dari kegagalan Sistem Elektronik",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Tidak tersedianya layanan publik berskala nasional atau membahayakan pertahanan keamanan negara"
       },
       {
          "value": 2,
          "label": "[B] Tidak tersedianya layanan publik dalam 1 propinsi atau lebih"
       },
       {
          "value": 1,
          "label": "[C] Tidak tersedianya layanan publik dalam 1 kabupaten/kota atau lebih"
       }
    ]
 },
  {
    "kode": "1.10",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Potensi kerugian atau dampak negatif dari insiden ditembusnya keamanan informasi Sistem Elektronik (sabotase, terorisme)",
    "opsi": [
       {
          "value": 5,
          "label": "[A] Menimbulkan korban jiwa"
       },
       {
          "value": 2,
          "label": "[B] Terbatas pada kerugian finansial"
       },
       {
          "value": 1,
          "label": "[C] Mengakibatkan gangguan operasional sementara (tidak membahayakan dan mengakibatkan kerugian finansial)"
       }
    ]
 },
  {
    "kode": "2.0#",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Fungsi/Organisasi Keamanan Informasi",
    "opsi": null
 },
  {
    "kode": "2.1",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah pimpinan instansi/perusahaan anda secara prinsip dan resmi bertanggungjawab terhadap pelaksanaan program keamanan informasi (misal yang tercantum dalam ITSP), termasuk penetapan kebijakan terkait?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.2",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda memiliki fungsi atau bagian yang secara spesifik mempunyai tugas dan tanggungjawab mengelola keamanan informasi dan menjaga kepatuhannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.3",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah pejabat/petugas pelaksana pengamanan informasi mempunyai wewenang yang sesuai untuk menerapkan dan menjamin kepatuhan program keamanan informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.4",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah penanggungjawab pelaksanaan pengamanan informasi diberikan alokasi sumber daya yang sesuai untuk mengelola dan menjamin kepatuhan program keamanan informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.5",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah peran pelaksana pengamanan informasi yang mencakup semua keperluan dipetakan dengan lengkap, termasuk kebutuhan audit internal dan persyaratan segregasi kewenangan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.6",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah mendefinisikan persyaratan/standar kompetensi dan keahlian pelaksana pengelolaan keamanan informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.7",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah semua pelaksana pengamanan informasi di instansi/perusahaan anda memiliki kompetensi dan keahlian yang memadai sesuai persyaratan/standar yang berlaku?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.8",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah menerapkan program sosialisasi dan peningkatan pemahaman untuk keamanan informasi, termasuk kepentingan kepatuhannya bagi semua pihak yang terkait?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.9",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah instansi/perusahaan anda menerapkan program peningkatan kompetensi dan keahlian untuk pejabat dan petugas pelaksana pengelolaan keamanan informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.10",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah mengintegrasikan keperluan/persyaratan keamanan informasi dalam proses kerja yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.11",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah mengidentifikasikan data pribadi yang digunakan dalam proses kerja dan menerapkan pengamanan sesuai dengan peraturan perundangan yang berlaku?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.12",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah tanggungjawab pengelolaan keamanan informasi mencakup koordinasi dengan pihak pengelola/pengguna aset informasi internal dan eksternal maupun pihak lain yang berkepentingan, untuk mengidentifikasikan persyaratan/kebutuhan pengamanan (misal: pertukaran informasi atau kerjasama yang melibatkan informasi penting) dan menyelesaikan permasalahan yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.13",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah pengelola keamanan informasi secara proaktif berkoordinasi dengan satker terkait (SDM, Legal/Hukum, Umum, Keuangan dll) dan pihak eksternal yang berkepentingan (misal: regulator, aparat keamanan) untuk menerapkan dan menjamin kepatuhan pengamanan informasi terkait proses kerja yang melibatkan berbagai pihak?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.14",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah tanggungjawab untuk memutuskan, merancang, melaksanakan dan mengelola langkah kelangsungan layanan TIK (business continuity dan disaster recovery plans) sudah didefinisikan dan dialokasikan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.15",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah penanggungjawab pengelolaan keamanan informasi melaporkan kondisi, kinerja/efektifitas dan kepatuhan program keamanan informasi kepada pimpinan instansi/perusahaan secara rutin dan resmi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.16",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah kondisi dan permasalahan keamanan informasi di instansi/perusahaan anda menjadi konsiderans atau bagian dari proses pengambilan keputusan strategis di instansi/perusahaan anda?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.17",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apakah pimpinan satuan kerja di instansi/perusahaan anda menerapkan program khusus untuk mematuhi tujuan dan sasaran kepatuhan pengamanan informasi, khususnya yang mencakup aset informasi yang menjadi tanggungjawabnya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.18",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah mendefinisikan metrik, paramater dan proses pengukuran kinerja pengelolaan keamanan informasi yang mencakup mekanisme, waktu pengukuran, pelaksananya, pemantauannya dan eskalasi pelaporannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.19",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah menerapkan program penilaian kinerja pengelolaan keamanan informasi bagi individu (pejabat & petugas) pelaksananya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.20",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah menerapkan target dan sasaran pengelolaan keamanan informasi untuk berbagai area yang relevan, mengevaluasi pencapaiannya secara rutin, menerapkan langkah perbaikan untuk mencapai sasaran yang ada, termasuk pelaporan statusnya kepada pimpinan instansi/perusahaan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.21",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah mengidentifikasi legislasi, perangkat hukum dan standar lainnya terkait keamanan informasi yang harus dipatuhi dan menganalisa tingkat kepatuhannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "2.22",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah mendefinisikan kebijakan dan langkah penanggulangan insiden keamanan informasi yang menyangkut pelanggaran hukum (pidana dan perdata)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.0#",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Kajian Risiko Keamanan Informasi",
    "opsi": null
 },
  {
    "kode": "3.1",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda mempunyai program kerja pengelolaan risiko keamanan informasi yang terdokumentasi dan secara resmi digunakan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.2",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah menetapkan penanggung jawab manajemen risiko dan eskalasi pelaporan status pengelolaan risiko keamanan informasi sampai ke tingkat pimpinan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.3",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda mempunyai kerangka kerja pengelolaan risiko keamanan informasi yang terdokumentasi dan secara resmi digunakan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.4",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah kerangka kerja pengelolaan risiko ini mencakup definisi dan hubungan tingkat klasifikasi aset informasi, tingkat ancaman, kemungkinan terjadinya ancaman tersebut dan dampak kerugian terhadap instansi/perusahaan anda?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.5",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah menetapkan ambang batas tingkat risiko yang dapat diterima?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.6",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah mendefinisikan kepemilikan dan pihak pengelola (custodian) aset informasi yang ada, termasuk aset utama/penting dan proses kerja utama yang menggunakan aset tersebut?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.7",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah ancaman dan kelemahan yang terkait dengan aset informasi, terutama untuk setiap aset utama sudah teridentifikasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.8",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah dampak kerugian yang terkait dengan hilangnya/terganggunya fungsi aset utama sudah ditetapkan sesuai dengan definisi yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.9",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah menjalankan inisiatif analisa/kajian risiko keamanan informasi secara terstruktur terhadap aset informasi yang ada (untuk nantinya digunakan dalam mengidentifikasi langkah mitigasi atau penanggulangan yang menjadi bagian dari program pengelolaan keamanan informasi)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.10",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda sudah menyusun langkah mitigasi dan penanggulangan risiko yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.11",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah langkah mitigasi risiko disusun sesuai tingkat prioritas dengan target penyelesaiannya dan penanggungjawabnya, dengan memastikan efektifitas penggunaan sumber daya yang dapat menurunkan tingkat risiko ke ambang batas yang bisa diterima dengan meminimalisir dampak terhadap operasional layanan TIK?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.12",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah status penyelesaian langkah mitigasi risiko dipantau secara berkala, untuk memastikan penyelesaian atau kemajuan kerjanya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.13",
    "tingkat": "IV",
    "tahap": 2,
    "pertanyaan": "Apakah penyelesaian langkah mitigasi yang sudah diterapkan dievaluasi, melalui proses yang obyektif/terukur untuk memastikan konsistensi dan efektifitasnya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.14",
    "tingkat": "IV",
    "tahap": 2,
    "pertanyaan": "Apakah profil risiko berikut bentuk mitigasinya secara berkala dikaji ulang untuk memastikan akurasi dan validitasnya, termasuk merevisi profil terebut apabila ada perubahan kondisi yang signifikan atau keperluan penerapan bentuk pengamanan baru?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.15",
    "tingkat": "V",
    "tahap": 3,
    "pertanyaan": "Apakah kerangka kerja pengelolaan risiko secara berkala dikaji untuk memastikan/meningkatkan efektifitasnya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "3.16",
    "tingkat": "V",
    "tahap": 3,
    "pertanyaan": "Apakah pengelolaan risiko menjadi bagian dari kriteria proses penilaian obyektif kinerja efektifitas pengamanan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.0#",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Penyusunan dan Pengelolaan Kebijakan & Prosedur Keamanan Informasi",
    "opsi": null
 },
  {
    "kode": "4.1",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah kebijakan dan prosedur maupun dokumen lainnya yang diperlukan terkait keamanan informasi sudah disusun dan dituliskan dengan jelas, dengan mencantumkan peran dan tanggung jawab pihak-pihak yang diberikan wewenang untuk menerapkannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.2",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah kebijakan keamanan informasi sudah ditetapkan secara formal, dipublikasikan kepada semua staf/karyawan termasuk pihak terkait dan dengan mudah diakses oleh pihak yang membutuhkannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.3",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia mekanisme untuk mengelola dokumen kebijakan dan prosedur keamanan informasi, termasuk penggunaan daftar induk, distribusi, penarikan dari peredaran dan penyimpanannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.4",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia proses (mencakup pelaksana, mekanisme, jadwal, materi, dan sasarannya) untuk mengkomunikasikan kebijakan keamanan informasi (dan perubahannya) kepada semua pihak terkait, termasuk pihak ketiga?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.5",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah keseluruhan kebijakan dan prosedur keamanan informasi yang ada merefleksikan kebutuhan mitigasi dari hasil kajian risiko keamanan informasi, maupun sasaran/obyetif tertentu yang ditetapkan oleh pimpinan instansi/perusahaan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.6",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia proses untuk mengidentifikasi kondisi yang membahayakan keamanan infomasi dan menetapkannya sebagai insiden keamanan informasi untuk ditindak lanjuti sesuai prosedur yang diberlakukan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.7",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah aspek keamanan informasi yang mencakup pelaporan insiden, menjaga kerahasiaan, HAKI, tata tertib penggunaan dan pengamanan aset maupun layanan TIK tercantum dalam kontrak dengan pihak ketiga?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.8",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah konsekwensi dari pelanggaran kebijakan keamanan informasi sudah didefinisikan, dikomunikasikan dan ditegakkan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.9",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah tersedia prosedur resmi untuk mengelola suatu pengecualian terhadap penerapan keamanan informasi, termasuk proses untuk menindak lanjuti konsekwensi dari kondisi ini?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.10",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah organisasi anda sudah menerapkan kebijakan dan prosedur operasional untuk mengelola implementasi security patch, alokasi tanggung jawab untuk memonitor adanya rilis security patch baru, memastikan pemasangannya dan melaporkannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.11",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah organisasi anda sudah membahas aspek keamanan informasi dalam manajemen proyek yang terkait dengan ruang lingkup?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.12",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah organisasi anda sudah menerapkan proses untuk mengevaluasi risiko terkait rencana pembelian (atau implementasi) sistem baru dan menanggulangi permasalahan yang muncul?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.13",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah organisasi anda sudah menerapkan proses pengembangan sistem yang aman (Secure SDLC) dengan menggunakan prinsip atau metode sesuai standar platform teknologi yang digunakan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.14",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apabila penerapan suatu sistem mengakibatkan timbulnya risiko baru atau terjadinya ketidakpatuhan terhadap kebijakan yang ada, apakah ada proses untuk menanggulangi hal ini, termasuk penerapan pengamanan baru (compensating control) dan jadwal penyelesaiannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.15",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah tersedia kerangka kerja pengelolaan perencanaan kelangsungan layanan TIK (business continuity planning) yang mendefinisikan persyaratan/konsiderans keamanan informasi, termasuk penjadwalan uji cobanya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.16",
    "tingkat": "III",
    "tahap": 3,
    "pertanyaan": "Apakah perencanaan pemulihan bencana terhadap layanan TIK (disaster recovery plan) sudah mendefinisikan komposisi, peran, wewenang dan tanggungjawab tim yang ditunjuk?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.17",
    "tingkat": "III",
    "tahap": 3,
    "pertanyaan": "Apakah uji coba perencanaan pemulihan bencana terhadap layanan TIK (disaster recovery plan) sudah dilakukan sesuai jadwal?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.18",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apakah hasil dari perencanaan pemulihan bencana terhadap layanan TIK (disaster recovery plan) dievaluasi untuk menerapkan langkah perbaikan atau pembenahan yang diperlukan - misal, apabila hasil uji coba menunjukkan bahwa proses pemulihan tidak bisa (gagal) memenuhi persyaratan yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.19",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apakah seluruh kebijakan dan prosedur keamanan informasi dievaluasi kelayakannya secara berkala?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.19##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengelolaan Strategi dan Program Keamanan Informasi",
    "opsi": null
 },
  {
    "kode": "4.20",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah organisasi anda mempunyai strategi penerapan keamanan informasi sesuai hasil analisa risiko yang penerapannya dilakukan sebagai bagian dari rencana kerja organisasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.21",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah organisasi anda mempunyai strategi penggunaan teknologi keamanan informasi yang penerapan dan pemutakhirannya disesuaikan dengan kebutuhan dan perubahan profil risiko?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.22",
    "tingkat": "III",
    "tahap": 1,
    "pertanyaan": "Apakah strategi penerapan keamanan informasi direalisasikan sebagai bagian dari pelaksanaan program kerja organisasi anda?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.23",
    "tingkat": "III",
    "tahap": 1,
    "pertanyaan": "Apakah organisasi anda memiliki dan melaksanakan program audit internal yang dilakukan oleh pihak independen dengan cakupan keseluruhan aset informasi, kebijakan dan prosedur keamanan yang ada (atau sesuai dengan standar yang berlaku)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.24",
    "tingkat": "III",
    "tahap": 1,
    "pertanyaan": "Apakah audit internal tersebut mengevaluasi tingkat kepatuhan, konsistensi dan efektivitas penerapan keamanan informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.25",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah hasil audit internal tersebut dikaji/dievaluasi untuk mengidentifikasi langkah pembenahan dan pencegahan, ataupun inisiatif peningkatan kinerja keamanan informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.26",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah hasil audit internal dilaporkan kepada pimpinan organisasi untuk menetapkan langkah perbaikan atau program peningkatan kinerja keamanan informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.27",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apabila ada keperluan untuk merevisi kebijakan dan prosedur yang berlaku, apakah ada analisa untuk menilai  aspek finansial (dampak biaya dan keperluan anggaran) ataupun perubahan terhadap infrastruktur dan pengelolaan perubahannya, sebagai prasyarat untuk menerapkannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.28",
    "tingkat": "V",
    "tahap": 3,
    "pertanyaan": "Apakah organisasi anda secara periodik menguji dan mengevaluasi tingkat/status kepatuhan program keamanan informasi yang ada (mencakup pengecualian atau kondisi ketidakpatuhan lainnya) untuk memastikan bahwa keseluruhan inisiatif tersebut, termasuk langkah pembenahan yang diperlukan, telah diterapkan secara efektif?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "4.29",
    "tingkat": "V",
    "tahap": 3,
    "pertanyaan": "Apakah organisasi anda mempunyai rencana dan program peningkatan keamanan informasi untuk jangka menengah/panjang (1-3-5 tahun) yang direalisasikan secara konsisten?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.0#",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengelolaan Aset Informasi",
    "opsi": null
 },
  {
    "kode": "5.1",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia daftar inventaris aset informasi dan aset yang berhubungan dengan proses teknologi informasi secara lengkap, akurat dan terpelihara ? (termasuk kepemilikan aset )",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.2",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia definisi klasifikasi aset informasi yang sesuai dengan peraturan perundangan yang berlaku?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.3",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia proses yang mengevaluasi dan mengklasifikasi aset informasi sesuai tingkat kepentingan aset bagi instansi/perusahaan dan keperluan pengamanannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.4",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia definisi tingkatan akses yang berbeda dari setiap klasifikasi aset informasi dan matriks yang merekam alokasi akses tersebut",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.5",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia proses pengelolaan perubahan terhadap sistem, proses bisnis dan proses teknologi informasi (termasuk perubahan konfigurasi) yang diterapkan secara konsisten?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.6",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia proses pengelolaan konfigurasi yang diterapkan secara konsisten?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.7",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia proses untuk merilis suatu aset baru ke dalam lingkungan operasional dan memutakhirkan inventaris aset informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.7##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Apakah instansi/perusahaan anda memiliki dan menerapkan kontrol keamanan di bawah ini, sebagai kelanjutan dari proses penerapan mitigasi risiko?",
    "opsi": null
 },
  {
    "kode": "5.8",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Definisi tanggungjawab pengamanan informasi secara individual untuk semua personil di instansi/perusahaan anda",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.9",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Tata tertib penggunaan komputer, email, internet dan intranet",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.10",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Tata tertib pengamanan dan penggunaan aset instansi/perusahaan terkait HAKI",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.11",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Peraturan terkait instalasi piranti lunak di aset TI milik instansi/perusahaan",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.12",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Peraturan penggunaan data pribadi yang mensyaratkan pemberian ijin tertulis oleh pemilik data pribadi",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.13",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Pengelolaan identitas elektronik dan proses otentikasi (username & password) termasuk kebijakan terhadap pelanggarannya",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.14",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Persyaratan dan prosedur pengelolaan/pemberian akses, otentikasi dan otorisasi untuk menggunakan aset informasi",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.15",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Ketetapan terkait waktu penyimpanan untuk klasifikasi data yang ada dan syarat penghancuran data",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.16",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Ketetapan terkait pertukaran data dengan pihak eksternal dan pengamanannya",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.17",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Proses penyidikan/investigasi untuk menyelesaikan insiden terkait kegagalan keamanan informasi",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.18",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Prosedur back-up dan uji coba pengembalian data (restore) secara berkala",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.19",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Ketentuan pengamanan fisik yang disesuaikan dengan definisi zona dan klasifikasi aset yang ada di dalamnya",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.20",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Proses pengecekan latar belakang SDM",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.21",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Proses pelaporan insiden keamanan informasi kepada pihak eksternal ataupun pihak yang berwajib.",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.22",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Prosedur penghancuran data/aset yang sudah tidak diperlukan",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.23",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Prosedur kajian penggunaan akses (user access review) dan hak aksesnya (user access rights) berikut langkah pembenahan apabila terjadi ketidaksesuaian (non-conformity) terhadap kebijakan yang berlaku",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.24",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Prosedur untuk user yang mutasi/keluar atau tenaga kontrak/outsource yang habis masa kerjanya.",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.25",
    "tingkat": "III",
    "tahap": 3,
    "pertanyaan": "Apakah tersedia daftar data/informasi yang harus di-backup dan laporan analisa kepatuhan terhadap prosedur backup-nya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.26",
    "tingkat": "III",
    "tahap": 3,
    "pertanyaan": "Apakah tersedia daftar rekaman pelaksanaan keamanan informasi dan bentuk pengamanan yang sesuai dengan klasifikasinya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.27",
    "tingkat": "III",
    "tahap": 3,
    "pertanyaan": "Apakah tersedia prosedur penggunaan perangkat pengolah informasi milik pihak ketiga (termasuk perangkat milik pribadi dan mitra kerja/vendor) dengan memastikan aspek HAKI dan pengamanan akses yang digunakan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.27##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengamanan Fisik",
    "opsi": null
 },
  {
    "kode": "5.28",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah sudah diterapkan pengamanan fasilitas fisik (lokasi kerja) yang sesuai dengan kepentingan/klasifikasi aset informasi, secara berlapis dan dapat mencegah upaya akses oleh pihak yang tidak berwenang?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.29",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia proses untuk mengelola alokasi kunci masuk (fisik dan elektronik) ke fasilitas fisik?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.30",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah infrastruktur komputasi terlindungi dari dampak lingkungan atau api dan berada dalam kondisi dengan suhu dan kelembaban yang sesuai dengan prasyarat pabrikannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.31",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah infrastruktur komputasi yang terpasang terlindungi dari gangguan pasokan listrik atau dampak dari petir?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.32",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia peraturan pengamanan perangkat komputasi milik instansi/perusahaan anda apabila digunakan di luar lokasi kerja resmi (kantor)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.33",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia proses untuk memindahkan aset TIK (piranti lunak, perangkat keras, data/informasi dll) dari lokasi yang sudah ditetapkan (termasuk pemutakhiran lokasinya dalam daftar inventaris)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.34",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah konstruksi ruang penyimpanan perangkat pengolah informasi penting menggunakan rancangan dan material yang dapat menanggulangi risiko kebakaran dan dilengkapi dengan fasilitas pendukung (deteksi kebakaran/asap, pemadam api, pengatur suhu dan kelembaban) yang sesuai?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.35",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah tersedia proses untuk memeriksa (inspeksi) dan merawat: perangkat komputer, fasilitas pendukungnya dan kelayakan keamanan lokasi kerja untuk menempatkan aset informasi penting?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.36",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah tersedia mekanisme pengamanan dalam pengiriman aset informasi (perangkat dan dokumen) yang melibatkan pihak ketiga?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.37",
    "tingkat": "II",
    "tahap": 2,
    "pertanyaan": "Apakah tersedia peraturan untuk mengamankan lokasi kerja penting (ruang server, ruang arsip) dari risiko perangkat atau bahan yang dapat membahayakan aset informasi (termasuk fasilitas pengolah informasi) yang ada di dalamnya? (misal larangan penggunaan telpon genggam di dalam ruang server, menggunakan kamera dll)",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "5.38",
    "tingkat": "III",
    "tahap": 3,
    "pertanyaan": "Apakah tersedia proses untuk mengamankan lokasi kerja dari keberadaan/kehadiran pihak ketiga yang bekerja untuk kepentingan instansi/perusahaan anda?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.0#",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengamanan Teknologi",
    "opsi": null
 },
  {
    "kode": "6.1",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah layanan TIK (sistem komputer) yang menggunakan internet sudah dilindungi dengan lebih dari 1 lapis pengamanan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.2",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah jaringan komunikasi disegmentasi sesuai dengan kepentingannya (pembagian instansi/perusahaan, kebutuhan aplikasi, jalur akses khusus, dll)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.3",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah tersedia konfigurasi standar untuk keamanan sistem bagi keseluruhan aset jaringan, sistem dan aplikasi, yang dimutakhirkan sesuai perkembangan (standar industri yang berlaku) dan kebutuhan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.4",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda secara rutin menganalisa kepatuhan penerapan konfigurasi standar yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.5",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah jaringan, sistem dan aplikasi yang digunakan secara rutin dipindai untuk mengidentifikasi kemungkinan adanya celah kelemahan atau perubahan/keutuhan konfigurasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.6",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah keseluruhan infrastruktur jaringan, sistem dan aplikasi dirancang untuk memastikan ketersediaan (rancangan redundan) sesuai kebutuhan/persyaratan yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.7",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah keseluruhan infrastruktur jaringan, sistem dan aplikasi dimonitor untuk memastikan ketersediaan kapasitas yang cukup untuk kebutuhan yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.8",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah setiap perubahan dalam sistem informasi secara otomatis terekam di dalam log?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.9",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah upaya akses oleh yang tidak berhak secara otomatis terekam di dalam log?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.10",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah semua log dianalisa secara berkala untuk memastikan akurasi, validitas dan kelengkapan isinya (untuk kepentingan jejak audit dan forensik)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.11",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda menerapkan enkripsi untuk melindungi aset informasi penting sesuai kebijakan pengelolaan yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.12",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah instansi/perusahaan anda mempunyai standar dalam menggunakan enkripsi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.13",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah instansi/perusahaan anda menerapkan pengamanan untuk mengelola kunci enkripsi (termasuk sertifikat elektronik) yang digunakan, termasuk siklus penggunaannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.14",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah semua sistem dan aplikasi secara otomatis mendukung dan menerapkan penggantian password secara otomatis, termasuk menon-aktifkan password, mengatur kompleksitas/panjangnya dan penggunaan kembali password lama?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.15",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah akses yang digunakan untuk mengelola sistem (administrasi sistem) menggunakan bentuk pengamanan khusus yang berlapis?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.16",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah sistem dan aplikasi yang digunakan sudah menerapkan pembatasan waktu akses termasuk otomatisasi proses timeouts, lockout setelah kegagalan login,dan penarikan akses?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.17",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah instansi/perusahaan anda menerapkan pengamanan untuk mendeteksi dan mencegah penggunaan akses jaringan (termasuk jaringan nirkabel) yang tidak resmi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.18",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah instansi/perusahaan anda menerapkan bentuk pengamanan khusus untuk melindungi akses dari luar instansi/perusahaan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.19",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah sistem operasi untuk setiap perangkat desktop dan server dimutakhirkan dengan versi terkini?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.20",
    "tingkat": "II",
    "tahap": 1,
    "pertanyaan": "Apakah setiap desktop dan server dilindungi dari penyerangan virus (malware)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.21",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah ada rekaman dan hasil analisa (jejak audit - audit trail) yang mengkonfirmasi bahwa antivirus/antimalware telah dimutakhirkan secara rutin dan sistematis?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.22",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah adanya laporan penyerangan virus/malware yang gagal/sukses ditindaklanjuti dan diselesaikan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.23",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah keseluruhan jaringan, sistem dan aplikasi sudah menggunakan mekanisme sinkronisasi waktu yang akurat, sesuai dengan standar yang ada?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.24",
    "tingkat": "III",
    "tahap": 2,
    "pertanyaan": "Apakah setiap aplikasi yang ada memiliki spesifikasi dan fungsi keamanan yang diverifikasi/validasi pada saat proses pengembangan dan uji coba?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 2,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 4,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 6,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.25",
    "tingkat": "III",
    "tahap": 3,
    "pertanyaan": "Apakah instansi/perusahaan ada menerapkan lingkungan pengembangan dan uji coba yang sudah diamankan sesuai dengan standar platform teknologi yang ada dan digunakan untuk seluruh siklus hidup sistem yng dibangun?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "6.26",
    "tingkat": "IV",
    "tahap": 3,
    "pertanyaan": "Apakah instansi/perusahaan anda melibatkan pihak independen untuk mengkaji kehandalan keamanan informasi secara rutin?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
       {
          "value": 3,
          "label": "Dalam Perencanaan"
       },
       {
          "value": 6,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 9,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1#",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengamanan Keterlibatan Pihak Ketiga Penyedia Layanan",
    "opsi": null
 },
  {
    "kode": "7.1.1##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Manajemen Risiko dan Pengelolaan Keamanan pihak ketiga",
    "opsi": null
 },
  {
    "kode": "7.1.1.1",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan mengidentifikasi risiko keamanan informasi yang ada terkait dengan kerjasama dengan pihak ketiga atau karyawan kontrak?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.1.2",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan mengkomunikasikan dan mengklarifikasi risiko keamanan informasi yang ada pada pihak ketiga kepada mereka?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.1.3",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan mengklarifikasi persyaratan mitigasi risiko instansi/perusahaan dan ekspektasi mitigasi risiko yang harus dipatuhi oleh pihak ketiga?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.1.4",
    "tingkat": null,
    "pertanyaan": "Apakah rencana mitigasi terhadap risiko yang diidentifikasi tersebut disetujui oleh manajemen pihak ketiga atau karyawan kontrak?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.1.5",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan telah menerapkan kebijakan keamanan informasi bagi pihak ketiga secara memadai, mencakup persyaratan pengendalian akses, penghancuran informasi,  manajemen risiko penyediaan layanan pihak ketiga, dan NDA bagi karyawan pihak ketiga?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.1.6",
    "tingkat": null,
    "pertanyaan": "Apakah kebijakan tersebut (7.1.1.5) telah dikomunikasikan kepada pihak ketiga dan mereka menyatakan persetujuannya dalam dokumen kontrak, SLA atau dokumen sejenis lainnya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.1.7",
    "tingkat": null,
    "pertanyaan": "Apakah hak audit TI secara berkala ke pihak ketiga/pihak ketiga telah ditetapkan sebagai bagian dan persyaratan kontrak, dikomunikasikan dan disetujui pihak ketiga? \nTermasuk di dalamnya akses terhadap laporan audit internal / eksternal tentang kondisi kontrol keamanan informasi pihak ketiga/pihak ketiga?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.2##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengelolaan Sub-Kontraktor/Alih Daya pada Pihak Ketiga",
    "opsi": null
 },
  {
    "kode": "7.1.2.1",
    "tingkat": null,
    "pertanyaan": "Apakah pihak ketiga sudah mengidentifikasi risiko terkait alih daya, subkontraktor atau penyedia teknologi/infrastruktur yang digunakan dalam layanannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.2.2",
    "tingkat": null,
    "pertanyaan": "Apakah pihak ketiga sudah menerapkan pengendalian risikonya dalam perjanjian dengan mereka atau dokumen sejenis?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.2.3",
    "tingkat": null,
    "pertanyaan": "Apakah pihak ketiga melakukan pemantauan dan evaluasi terhadap kepatuhan alih daya, subkontraktor atau penyedia teknologi/infrastruktur terhadap persyaratan keamanan yang ditetapkan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.3##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengelolaan Layanan dan Keamanan Pihak Ketiga",
    "opsi": null
 },
  {
    "kode": "7.1.3.1",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan telah menetapkan proses, prosedur atau rencana terdokumentasi untuk mengelola dan memantau layanan dan aspek keamanan informasi (termasuk pengamanan aset informasi dan infrastruktur milik instanasi/perusahaan yang diakses) dalam hubungan kerjasama dengan pihak ketiga?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.3.2",
    "tingkat": null,
    "pertanyaan": "Apakah peran dan tanggung jawab pemantauan, evaluasi dan/atau audit aspek keamanan informasi pihak ketiga telah ditetapkan dan/atau ditugaskan dalam unit organisasi tertentu?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.3.3",
    "tingkat": null,
    "pertanyaan": "Apakah tersedia laporan berkala tentang pencapaian sasaran tingkat layanan (SLA) dan aspek keamanan yang disyaratkan dalam perjanjian komersil (kontrak)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.3.4",
    "tingkat": null,
    "pertanyaan": "Apakah ada rapat secara berkala untuk memantau dan mengevaluasi pencapaian sasaran tingkat layanan (SLA) dan aspek keamanan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.3.5",
    "tingkat": null,
    "pertanyaan": "Apakah hasil pemantauan dan evaluasi terhadap laporan atau pembahasan dalam rapat berkala tersebut didokumentasikan, dikomunikasikan dan ditindaklanjuti oleh pihak ketiga serta dilaporkan kemajuannya kepada instansi/perusahaan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.3.6",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan telah menetapkan rencana dan melakukan audit terhadap pemenuhan persyaratan keamanan informasi oleh pihak ketiga?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.3.7",
    "tingkat": null,
    "pertanyaan": "Apakah hasil audit tersebut ditindaklanjuti oleh pihak ketiga dengan melaporkan rencana perbaikan yang terukur dan bukti-bukti penerapan rencana tersebut?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.3.8",
    "tingkat": null,
    "pertanyaan": "Apakah kondisi terkait denda / penalti karena ketidakpatuhan pihak ketiga terhadap persyaratan dan / atau tingkat layanan telah didokumentasikan, dikomunikasikan, dipahami dan diterapkan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.4##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengelolaan Perubahan Layanan dan Kebijakan Pihak Ketiga",
    "opsi": null
 },
  {
    "kode": "7.1.4.1",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan mengelola perubahan yang terjadi dalam hubungan dengan pihak ketiga yang menyangkut antara lain?\n- Perubahan layanan pihak ketiga;\n- Perubahan kebijakan, prosedur, dan/atau \n- Kontrol risiko pihak ketiga?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.4.2",
    "tingkat": null,
    "pertanyaan": "Apakah risiko yang menyertai perubahan tersebut dikaji, didokumentasikan dan ditetapkan rencana mitigasi barunya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.5##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Penanganan Aset",
    "opsi": null
 },
  {
    "kode": "7.1.5.1",
    "tingkat": null,
    "pertanyaan": "Apakah pihak ketiga memiliki prosedur formal untuk menangani data selama dalam siklus hidupnya mulai dari pembuatan, pendaftaran, perubahan, dan penghapusan / penghancuran aset?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.5.2",
    "tingkat": null,
    "pertanyaan": "Apakah per untuk penghancuran (disposal) data secara aman telah disepakati bersama pihak ketiga (pihak ketiga)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.6##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengelolaan Insiden oleh Pihak Ketiga",
    "opsi": null
 },
  {
    "kode": "7.1.6.1",
    "tingkat": null,
    "pertanyaan": "Apakah pihak ketiga memiliki prosedur untuk pelaporan, pemantauan, penanganan, dan analisis insiden keamanan informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.6.2",
    "tingkat": null,
    "pertanyaan": "Apakah pihak ketiga memiliki bukti-bukti penerapan yang memadai dalam menangani insiden keamanan informasi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.7##",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Rencana Kelangsungan Layanan Pihak Ketiga",
    "opsi": null
 },
  {
    "kode": "7.1.7.1",
    "tingkat": null,
    "pertanyaan": "Apakah pihak ketiga memiliki kebijakan, prosedur atau rencana terdokumentasi untuk mengatasi kelangsungan layanan pihak ketiga dalam keadaan darurat/bencana?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.7.2",
    "tingkat": null,
    "pertanyaan": "Apakah kebijakan, prosedur atau rencana kelangsungan layanan tersebut telah diujicoba, didokumentasikan hasilnya dan dievaluasi efektivitasnya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.1.7.3",
    "tingkat": null,
    "pertanyaan": "Apakah pihak ketiga memiliki organisasi atau tim khusus yang ditugaskan untuk mengelola proses kelangsungan layanannya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2#",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Pengamanan Layanan Infrastruktur Awan (Cloud Service)",
    "opsi": null
 },
  {
    "kode": "7.2.1",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah melakukan kajian risiko terkait penggunaan layanan berbasis cloud dan menyesuaikan kebijakan keamanan informasi terkait layanan ini?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2.2",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menetapkan data apa saja yang akan disimpan/diolah/dipertukarkan melalui layanan berbasis cloud?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2.3",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menerapkan langkah pengamanan data pribadi yang disimpan/diolah/dipertukarkan melalui layanan cloud?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2.4",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah mengkaji, menetapkan kriteria dan memastikan aspek hukum (jurisdiksi, hak dan kewenangan) terkait penggunaan layanan berbasis cloud?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2.5",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah mengevaluasi penyelenggara layanan cloud terkait reputasi penyelenggaranya?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2.6",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menetapkan standar keamanan teknis penggunaan layanan cloud, termasuk aspek penggunaannya oleh pengguna di internal instansi/perusahaan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2.7",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah mengevaluasi kelaikan keamanan layanan cloud termasuk aspek ketersediaannya dan pemenuhan sertifikasi layanan berbasis ISO 27001?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2.8",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah memiliki kebijakan, strategi dan proses untuk mengganti layanan cloud atau menyediakan fasilitas pengganti apabila terjadi gangguan sementara pada layanan tersebut?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2.9",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah memiliki proses pelaporan insiden terkait layanan cloud?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.2.10",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah memiliki proses untuk menghentikan layanan cloud, termasuk proses pengamanan data yang ada (memindahkan dan menghapus data)?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3#",
    "tingkat": null,
    "tahap": null,
    "pertanyaan": "Perlindungan Data Pribadi",
    "opsi": null
 },
  {
    "kode": "7.3.1",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah mendokumentasikan jenis dan bentuk (dokumen kertas/elektronik) data pribadi yang disimpan, diolah dan dipertukarkan dengan pihak eksternal?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.2",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah memetakan alur pemrosesan data di internal dan pertukaran data dengan pihak eksternal, termasuk kapan dan dimana data pribadi tersebut diperoleh?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.3",
    "tingkat": null,
    "pertanyaan": "Apakah proses terkait penyimpanan, pengolahan dan pertukaran data pribadi di instansi/perusahaan sudah didokumentasikan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.4",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah memiliki kebijakan terkait Perlindungan Data Pribadi sesuai dengan Peraturan dan Perundangan yang berlaku?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.5",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menunjuk pejabat-pejabat (Data Protection Officer, Data Controller, Data Processor) yang bertanggung-jawab dan berwenang dalam penerapan kebijakan dan proses Perlindungan Data Pribadi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.6",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menganalisa dampak terkait terungkapnya data pribadi yang disimpan, diolah dan dipertukarkan secara ilegal atau karena insiden lain?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.7",
    "tingkat": null,
    "pertanyaan": "Apakah kajian risiko keamanan pada instansi/perusahaan sudah memasukkan aspek Perlindungan Data Pribadi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.8",
    "tingkat": null,
    "pertanyaan": "Apakah mekanisme perlindungan data pribadi sudah diterapkan sesuai keperluan mitigasi risiko dan peraturan perundangan yang berlaku?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.9",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menjalankan program peningkatan pemahaman/kepedulian kepada seluruh pegawai terkait Perlindungan Data Pribadi, termasuk hal-hal terkait Peraturan Perundangan yang berlaku?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.10",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah mendapatkan persetujuan dari pemilik data pribadi saat mengambil data tersebut, termasuk penjelasan hak pemilik data, apa saja yang akan diberlakukan pada data pribadi tersebut dan menyimpan catatan persetujuan tersebut ?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.11",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah memiliki proses untuk melaporkan insiden terkait terungkapnya data pribadi?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.12",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menerapkan proses yang menjamin hak pemilik data pribadi untuk mengakses data tersebut?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.13",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menerapkan proses yang terkait dapat memastikan data pribadi  tersebut akurat dan termutakhirkan?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.14",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menerapkan proses terkait periode penyimpanan data pribadi dan penghapusan/pemusnahannya sesuai dengan peraturan atau perjanjian dengan pemilik data?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.15",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menerapkan proses terkait penghapusan/pemusnahan data apabila sudah tidak ada keperluan yang sah untuk menyimpan/mengolahnya lebih lanjut atau atas permintaan pemilik data dan menyimpan catatan proses tersebut?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 },
  {
    "kode": "7.3.16",
    "tingkat": null,
    "pertanyaan": "Apakah instansi/perusahaan sudah menerapkan proses terkait pengungkapan data pribadi atas permintaan resmi aparat penegak hukum?",
    "opsi": [
        {
          "value": 0,
          "label": "Tidak Dilakukan"
        },
        {
          "value": 1,
          "label": "Dalam Perencanaan"
        },
       {
          "value": 2,
          "label": "Dalam Penerapan atau Diterapkan Sebagian"
       },
       {
          "value": 3,
          "label": "Diterapkan Secara Menyeluruh"
       }
    ]
 }
 ]