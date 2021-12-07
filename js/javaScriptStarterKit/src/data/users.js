
export const users=[
    {id:1,
    firstName:"Adem",
    lastName:"Erbas",
    city:"Skien",
    age:35,
    creditCardNumber:123456,
    type:"customer"
    },
    {id:2,
        firstName:"Zehra",
        lastName:"Erbas",
       city:"Istanbul",
       age:25,
        creditCardNumber:654321,
        type:"customer"
        },{id:6,
            firstName:"Joe",
            lastName:"John",
            city:"Larvik",
            age:33,
            creditCardNumber:134856,
            type:"customer"
            },
        {id:3,
            firstName:"Zeynep",
            lastName:"Erbas",
            city:"Skien",
            age:20,
            creditCardNumber:874341,
            salary:7000,
            type:"employee"
            },
            {id:4,
                firstName:"Kamil",
                lastName:"Kara",
                city:"Ski",
                age:32,
                salary:27000,
                type:"employee"
                },
                {id:5,
                    firstName:"Sercan",
                    lastName:"Sari",
                    city:"Stavenger",
                    age:34,
                    salary:33000,
                    type:"employee"//yanlis girilmis olsun burasi ve error verecegini varsayalim
                    }
]

//Javascriptte farkli farkli model lerimiz yani C# da enitties lerimiz kendilerine has ozellikleri de var yani ortak base, super class lari User dir ama ayrica kendilerina has ozellikleri de iste onlari birbirinden ayirtedebilmek icin biz kendimiz type propertysi ekledik herbirisine

//Biz bunlari type lar uzerinden ayrit edecegiz bunlar verilerimiz old icin biz verilerimizi servislerimiz icerisindeki fonksiyon veya methodlar a parametre olarak vererek kullanacagiz...
