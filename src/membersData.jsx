const memberS = [
  {
    id: "rec1JZlfCIBOPdcT2",
    title: "Dade",
    surname: "Babalo",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376754/WhatsApp_Image_2023-05-06_at_14.34.16_wfjzni.jpg",
    amount: 0,
    active: "yes",
    branch: "Paarl",
    sealed: "yes",
    birthday: "1970-01-10",
    serviceYears: 10,
    homePlace: "Mozambigue",
    status: "null",
    attendance: [
      {
        date: "2023-05-14",
        church_branch_id: "branch1",
        pastor_id: "pastor3",
      },
    ],
    absent: [
      {
        date: "2023-05-21",
        church_branch_id: "branch1",
        pastor_id: "pastor1",
        apology: "at work",
      },
    ],
  },
  {
    id: "recB6qcHPxb62YJ75",
    title: "Dade",
    surname: "Maluleka",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824994/WhatsApp_Image_2023-05-11_at_18.47.16_10_pjttem.jpg",
    branch: "Capricon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1963-02-19",
    serviceYears: 10,
    homePlace: "Eastern Cape",
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recdRxBsE14Rr2VuJ",
    title: "Dade",
    surname: "Mzebetshane",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824994/WhatsApp_Image_2023-05-11_at_18.47.16_5_kqbsb5.jpg",
    branch: "Capricon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1972-12-10",
    serviceYears: 20,
    homePlace: "Eastern Cape",
    attendance: ["dummy"],
    absent: ["dummy"],
  },

  {
    id: "recwTo160XST3PIoW",
    title: "Mzalwane",
    surname: "Mafuyane",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376753/WhatsApp_Image_2023-05-06_at_14.34.18_mxpqsk.jpg",
    branch: "Dunoon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "2001-10-07",
    serviceYears: 10,
    homePlace: "Bayi",
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoX",
    title: "Dade",
    surname: "Nkosi",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824995/WhatsApp_Image_2023-05-11_at_18.47.16_3_wsv8mn.jpg",
    branch: "Paarl",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1987-09-12",
    serviceYears: 9,
    homePlace: "Bayi",
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoY",
    title: "Mzalwane",
    surname: "Mthembu",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376753/WhatsApp_Image_2023-05-06_at_14.34.17_1_wuqg2r.jpg",
    branch: "Mfuleni",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "2021-02-03",
    serviceYears: 8,
    homePlace: "Pretoria",
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoZ",
    title: "Dade",
    surname: "Khumalo",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824995/WhatsApp_Image_2023-05-11_at_18.47.16_1_hei4qx.jpg",
    branch: "Capricon",
    amount: 0,
    active: "no",
    status: "null",
    sealed: "no",
    birthday: "2012-04-10",
    homePlace: "Bayi",
    serviceYears: 3,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoA",
    title: "Mzalwane",
    surname: "Mlambo",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376753/WhatsApp_Image_2023-05-06_at_14.34.17_urxewv.jpg",
    branch: "Dunoon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "no",
    birthday: "1982-04-05",
    homePlace: "Bayi",
    serviceYears: 10,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoB",
    title: "Dade",
    surname: "Mkhize",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824994/WhatsApp_Image_2023-05-11_at_18.47.16_6_w7pnnv.jpg",
    branch: "Paarl",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "no",
    birthday: "1871-02-14",
    homePlace: "Bayi",
    serviceYears: 18,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoC",
    title: "Mzalwane",
    surname: "Ndlovu",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824994/WhatsApp_Image_2023-05-11_at_18.47.16_9_dnerob.jpg",
    branch: "Mfuleni",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "no",
    birthday: "1978-11-10",
    homePlace: "Bayi",
    serviceYears: 4,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoD",
    title: "Dade",
    surname: "Zulu",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824994/WhatsApp_Image_2023-05-11_at_18.47.16_7_unotqa.jpg",
    branch: "Capricon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1987-08-10",
    homePlace: "Bayi",
    serviceYears: 11,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoE",
    title: "Mzalwane",
    surname: "Sibanda",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824994/WhatsApp_Image_2023-05-11_at_18.47.16_10_pjttem.jpg",
    branch: "Dunoon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "2021-07-18",
    homePlace: "Bayi",
    serviceYears: 1,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoF",
    title: "Dade",
    surname: "Moyo",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824993/WhatsApp_Image_2023-05-11_at_18.47.16_8_f6du6y.jpg",
    branch: "Paarl",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "2011-06-24",
    homePlace: "Bayi",
    serviceYears: 10,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoG",
    title: "Mzalwane",
    surname: "Nkomo",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824994/WhatsApp_Image_2023-05-11_at_18.47.16_4_sodoii.jpg.jpg",
    branch: "Mfuleni",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "no",
    birthday: "2012-05-19",
    homePlace: "Bayi",
    serviceYears: 10,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoH",
    title: "Dade",
    surname: "Gumede",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376754/WhatsApp_Image_2023-05-06_at_14.34.19_jrucnm.jpg.jpg",
    branch: "Capricon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1989-04-05",
    homePlace: "Bayi",
    serviceYears: 5,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoI",
    title: "Mzalwane",
    surname: "Luthuli",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824994/WhatsApp_Image_2023-05-11_at_18.47.16_5_kqbsb5.jpg",
    branch: "Dunoon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1988-03-03",
    homePlace: "Bayi",
    serviceYears: 4,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoJ",
    title: "Dade",
    surname: "Mazibuko",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376754/WhatsApp_Image_2023-05-06_at_14.34.16_wfjzni.jpg",
    branch: "Paarl",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "no",
    birthday: "2001-02-01",
    homePlace: "Bayi",
    serviceYears: 2,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoK",
    title: "Mzalwane",
    surname: "Magwaza",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824994/WhatsApp_Image_2023-05-11_at_18.47.16_2_mbdztt.jpg",
    branch: "Mfuleni",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "2001-01-14",
    homePlace: "Bayi",
    serviceYears: 12,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoL",
    title: "Dade",
    surname: "Mthethwa",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376753/WhatsApp_Image_2023-05-06_at_14.34.16_1_dxvmp0.jpg",
    branch: "Capricon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1982-04-20",
    homePlace: "Bayi",
    serviceYears: 10,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoM",
    title: "Mzalwane",
    surname: "Mbatha",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824995/WhatsApp_Image_2023-05-11_at_18.47.16_3_wsv8mn.jpg",
    branch: "Dunoon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "2011-11-21",
    homePlace: "Bayi",
    serviceYears: 1,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoN",
    title: "Dade",
    surname: "Ntuli",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376753/WhatsApp_Image_2023-05-06_at_14.34.18_mxpqsk.jpg",
    branch: "Paarl",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "2001-12-10",
    homePlace: "Bayi",
    homePlace: "Bayi",
    serviceYears: 10,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoO",
    title: "Mzalwane",
    surname: "Cele",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824995/WhatsApp_Image_2023-05-11_at_18.47.16_mtptwt.jpg",
    branch: "Mfuleni",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1999-01-12",
    homePlace: "Bayi",
    serviceYears: 6,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoP",
    title: "Dade",
    surname: "Sithole",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376753/WhatsApp_Image_2023-05-06_at_14.34.17_1_wuqg2r.jpg",
    branch: "Capricon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1975-05-14",
    homePlace: "Bayi",
    serviceYears: 14,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoQ",
    title: "Mzalwane",
    surname: "Shabalala",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683824995/WhatsApp_Image_2023-05-11_at_18.47.16_1_hei4qx.jpg",
    branch: "Dunoon",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "1985-05-14",
    homePlace: "Bayi",
    serviceYears: 3,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
  {
    id: "recwTo160XST3PIoR",
    title: "Dade",
    surname: "Zungu",
    cell: "9876543210",
    idNumber: "9801011234567",
    img: "https://res.cloudinary.com/dkayrcyeb/image/upload/v1683376753/WhatsApp_Image_2023-05-06_at_14.34.17_urxewv.jpg",
    branch: "Paarl",
    amount: 0,
    active: "yes",
    status: "null",
    sealed: "yes",
    birthday: "2023-05-14",
    homePlace: "Bayi",
    serviceYears: 0,
    attendance: ["dummy"],
    absent: ["dummy"],
  },
];

export default memberS;
