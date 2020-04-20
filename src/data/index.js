export const data = {
  global: {
    socials: [
      {
        content: "Vimeo",
        url: ""
      },
      {
        content: "Linkedin",
        url: ""
      },
      {
        content: "Mail",
        url: ""
      }
    ]
  },
  about: {
    title: "About",
    job: ["Motion Designer", "2D/3D based in Paris "],
    content: [
      "<p>Matthieu Tourdes, graduated from HETIC and after one year at 17 Mars I’m now art director motion as freelancer</p><p>During my profesionnal experience, I had the privilege to work for famous brands like</p><p>Mc Donald’s, Bugatti, Citroën...</p>"
    ]
  },
  projects: [
    {
      name: "Eclipse",
      slug: "eclipse",
      tags: ["short", "design", "CGI"],
      description:
        "Eclipse is a short film that explores an alternate dark reality inspired by my personnal thoughts and imaginary. It has a personnal narrative which plays around the stunning ability of the human nature to recover and survive.",
      mainVideo: require("images/eclipse_home.mp4"),
      mainImage: require("images/eclipse_main.png"),
      slideshow: [
        require("images/eclipse_slideshow1.png"),
        require("images/eclipse_slideshow2.png"),
        require("images/eclipse_slideshow3.png"),
        require("images/eclipse_slideshow1.png"),
        require("images/eclipse_slideshow2.png"),
        require("images/eclipse_slideshow3.png")
      ],
      sections: [
        {
          type: "content",
          theme: "red",
          content:
            "Eclipse is a short film that explores an alternate dark reality inspired by my personnal thoughts and imaginary. It has a personnal narrative which plays around the stunning ability of the human nature to recover and survive."
        },

        {
          type: "video",
          image: require("images/eclipse_main.png"),
          video: "57399324"
        },
        {
          type: "content-title",
          title: "FINAL FRAMES",
          content:
            "Endless hours of work were poured into Eclipse. It was a special project that would allow me some fun to explore and learn more about the craft and CGI. Eclipse proved to be a giant ground of exploration and provided me a chance to connect with my imaginary as never before. It was an intense year of work full with moments of doubts and joy but I feel now how the many challenges, iterations and attention to details were vital to the final film."
        },

        {
          type: "slider",
          isFullPage: false,
          images: [
            require("images/eclipse_main.png"),
            require("images/eclipse_main.png"),
            require("images/eclipse_main.png"),
            require("images/eclipse_main.png"),
            require("images/eclipse_main.png")
          ]
        },
        {
          type: "paralax",
          title: "WHERE HUMANS NEED TO RECOVER",
          images: [
            require("images/01.png"),
            require("images/02.png"),
            require("images/03.png"),
            require("images/04.png"),
            require("images/05.png")
          ]
        },

        {
          type: "content",
          content:
            "The concept of the whole production of Eclipse has been challenging  as I was constantly progressing, analysing and evolving my skillsets while developping the imagery. The narrative started with a first vivid thought of a women asleep inside a tube. From there I imagined other key visuals to further shape and understand the world of Eclipse.",
          image: ""
        },
        {
          type: "slider",
          isFullPage: true,
          images: [
            require("images/eclipse_main.png"),
            require("images/eclipse_main.png"),
            require("images/eclipse_main.png"),
            require("images/eclipse_main.png"),
            require("images/eclipse_main.png")
          ]
        },
        // {
        //   type: "image",
        //   image: require("images/eclipse_main.png")
        // },
        {
          type: "content-title",
          title: "SPECIAL THANKS",
          theme: "small",
          content:
            "Endless hours of work were poured into Eclipse. It was a special project that would allow me some fun to explore and learn more about the craft and CGI. Eclipse proved to be a giant ground of exploration and provided me a chance to connect with my imaginary as never before. It was an intense year of work full with moments of doubts and joy but I feel now how the many challenges, iterations and attention to details were vital to the final film."
        },
        {
          type: "content-title",
          title: "FINAL FRAMES",
          theme: "light",
          content: [
            {
              field: "Film",
              value: "Matthieu Tourdes"
            },
            {
              field: "Score",
              value: "Echoic audio",
              url: "http://google.fr"
            },
            {
              field: "Edit",
              value: "Fredoch",
              url: "http://google.fr"
            }
          ]
        }
      ]
    },
    {
      name: "Syfy",
      slug: "syfy",
      tags: ["short", "design", "CGI"],
      mainVideo: require("images/eclipse_home.mp4"),
      mainImage: require("images/syfy_main.png"),
      slideshow: [
        require("images/eclipse_slideshow2.png"),
        require("images/eclipse_slideshow3.png"),
        require("images/eclipse_slideshow1.png"),
        require("images/eclipse_slideshow2.png"),
        require("images/eclipse_slideshow3.png"),
        require("images/eclipse_slideshow1.png")
      ],
      sections: [
        {
          type: "content",
          theme: "red",
          content:
            "Eclipse is a short film that explores an alternate dark reality inspired by my personnal thoughts and imaginary. It has a personnal narrative which plays around the stunning ability of the human nature to recover and survive."
        },
        {
          type: "content-title",
          title: "FINAL FRAMES",
          content:
            "Endless hours of work were poured into Eclipse. It was a special project that would allow me some fun to explore and learn more about the craft and CGI. Eclipse proved to be a giant ground of exploration and provided me a chance to connect with my imaginary as never before. It was an intense year of work full with moments of doubts and joy but I feel now how the many challenges, iterations and attention to details were vital to the final film."
        },
        {
          type: "image",
          images: require("images/syfy_main.png")
        },
        {
          type: "slider",
          isFullPage: false,
          images: [
            require("images/syfy_main.png"),
            require("images/syfy_main.png"),
            require("images/syfy_main.png"),
            require("images/syfy_main.png"),
            require("images/syfy_main.png")
          ]
        },
        {
          type: "paralax",
          title: "WHERE HUMANS NEED TO RECOVER",
          images: [
            require("images/01.png"),
            require("images/02.png"),
            require("images/03.png"),
            require("images/04.png"),
            require("images/05.png")
          ]
        },
        {
          type: "video",
          image: require("images/syfy_main.png"),
          video: "57399324"
        },
        {
          type: "content",
          theme: "black",
          content:
            "The concept of the whole production of Eclipse has been challenging  as I was constantly progressing, analysing and evolving my skillsets while developping the imagery. The narrative started with a first vivid thought of a women asleep inside a tube. From there I imagined other key visuals to further shape and understand the world of Eclipse.",
          image: ""
        },
        {
          type: "content-title",
          title: "SPECIAL THANKS",
          theme: "small",
          content:
            "Endless hours of work were poured into Eclipse. It was a special project that would allow me some fun to explore and learn more about the craft and CGI. Eclipse proved to be a giant ground of exploration and provided me a chance to connect with my imaginary as never before. It was an intense year of work full with moments of doubts and joy but I feel now how the many challenges, iterations and attention to details were vital to the final film."
        },
        {
          type: "content-title",
          title: "FINAL FRAMES",
          theme: "light",
          content: [
            {
              field: "Film",
              value: "Matthieu Tourdes"
            },
            {
              field: "Score",
              value: "Echoic audio",
              url: "http://google.fr"
            },
            {
              field: "Edit",
              value: "Fredoch",
              url: "http://google.fr"
            }
          ]
        }
      ]
    }
  ]
};
