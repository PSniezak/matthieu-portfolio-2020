export const data = {
  global: {
    socials: [
      {
        content: "Instagram",
        url: "https://www.instagram.com/mtourdes/"
      },
      {
        content: "Behance",
        url: "https://www.behance.net/matthieutourdes"
      },
      {
        content: "Vimeo",
        url: "https://vimeo.com/user23739165"
      }
    ]
  },
  home: {
    easing: {
      global: "cubicBezier(0.33, 1, 0.68, 1)",
      titleSlider: "cubic-bezier(.37,0,.5,1)",
      progressCircle: "cubicBezier(0.37, 0, 0.63, 1)",
      backgroundSliderIntro: "cubicBezier(0.11, 0, 0.5, 0)"
    }
  },
  about: {
    title: "About",
    job: ["Motion Designer", "2D/3D based in Paris "],
    content: [
      "<p>Matthieu Tourdes is a freelance Designer and Concept Artist. His work spans multiple disciplines, from motion graphics, live visuals, and broadcast, to film and gaming. </p><br><br><p>Matthieu is available by contract in Paris and remotely, contact <a href='mailto:matthieu.tourdes@gmail.com' >matthieu.tourdes@gmail.com</a>.</p>"
    ]
  },
  projects: [
    {
      name: "Eclipse",
      slug: "eclipse",
      tags: ["short film", "design", "art direction"],
      description:
        "Eclipse is a short film that explores an alternate dark reality inspired by my thoughts and imaginary. It has a personnal narrative around the stunning ability of the human nature to recover and survive.",
      mainVideo: require("video/eclipse_home.mp4"),
      mainImage: require("images/eclipse/final_frames/eclipse_finalframe03.jpg"),
      slideshow: [
        require("images/eclipse/final_frames/eclipse_finalframe03.jpg"),
        require("images/eclipse/final_frames/eclipse_finalframe04.jpg"),
        require("images/eclipse/final_frames/eclipse_finalframe18.jpg"),
        require("images/eclipse/final_frames/eclipse_finalframe13.jpg"),
        require("images/eclipse/final_frames/eclipse_finalframe11.jpg"),
        require("images/eclipse/final_frames/eclipse_finalframe10.jpg")
      ],
      sections: [
        {
          type: "content",
          theme: "red",
          content:
            "Eclipse is a short film that explores an alternate dark reality inspired by my thoughts and imaginary. It has a personnal narrative around the stunning ability of the human nature to recover and survive."
        },

        {
          type: "video",
          image: require("images/eclipse/final_frames/eclipse_finalframe03.jpg"),
          video: "407898397"
        },
        {
          type: "content-title",
          title: "FINAL FRAMES",
          content:
            "Endless hours of work were poured into Eclipse. It was a special project that would allow me some fun to explore and learn more about the craft and CGI. Eclipse proved to be a giant ground of exploration and provided me a chance to connect with my imaginary as never before. It was an intense year of work full with moments of doubts and joy but I feel now how the many challenges, iterations and attention to details were vital to the final film."
        },

        {
          type: "slider",
          isFullPage: true,
          images: [
            require("images/eclipse/final_frames/eclipse_finalframe00.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe01.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe02.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe03.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe04.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe05.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe06.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe07.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe08.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe09.jpg")
          ]
        },

        {
          type: "paralax",
          title: "A VOYAGE TO A DARK REALITY.",
          title2: " WHERE HUMANS NEED TO RECOVER",
          images: [
            require("images/eclipse/parallax/eclipse_parallax05.jpg"),
            require("images/eclipse/parallax/eclipse_parallax06.jpg"),
            require("images/eclipse/parallax/eclipse_parallax07.jpg"),
            require("images/eclipse/parallax/eclipse_parallax08.jpg"),
            require("images/eclipse/parallax/eclipse_parallax09.jpg")
          ]
        },

        {
          type: "content",
          theme: "black",
          content:
            "The narrative started with a first vivid thought of a women asleep inside a tube. From there I imagined other key visuals to further shape and understand the world of Eclipse.",
          image: ""
        },

        {
          type: "slider",
          isFullPage: true,
          images: [
            require("images/eclipse/final_frames/eclipse_finalframe10.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe11.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe12.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe13.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe14.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe15.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe16.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe17.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe18.jpg"),
            require("images/eclipse/final_frames/eclipse_finalframe19.jpg")
          ]
        },

        {
          type: "content-title",
          title: "PROCESS",
          content:
            "The concept of the whole production of Eclipse has been challenging  as I was constantly progressing, analysing and evolving my skillsets while developping the imagery. The whole project was made with Cinema4D, Redshift, After Effects, Premiere and Houdini. I also used RDT Textures paired up with Megascans for textures and assets."
        },

        {
          type: "slider",
          isFullPage: false,
          images: [
            require("images/eclipse/production/eclipse_production00.jpg"),
            require("images/eclipse/production/eclipse_production01.jpg"),
            require("images/eclipse/production/eclipse_production02.jpg"),
            require("images/eclipse/production/eclipse_production03.jpg"),
            require("images/eclipse/production/eclipse_production04.jpg"),
            require("images/eclipse/production/eclipse_production05.jpg"),
            require("images/eclipse/production/eclipse_production06.jpg"),
            require("images/eclipse/production/eclipse_production07.jpg"),
            require("images/eclipse/production/eclipse_production08.jpg"),
            require("images/eclipse/production/eclipse_production09.jpg"),
            require("images/eclipse/production/eclipse_production10.jpg")
          ]
        },
        {
          type: "content-title",
          title: "SPECIAL THANKS",
          theme: "light",
          content:
            "I would like to personally thank Zing Audio for the beautiful score, really loved this collaboration. I would like to extend my sincere thanks to François Leroy for his continuous advices during the whole production of the film."
        },
        {
          type: "content-title",
          title: "CREDITS",
          theme: "light",
          content: [
            {
              field: "Film",
              value: "Matthieu Tourdes"
            },
            {
              field: "Score",
              value: "Zing Audio",
              url: "https://www.zing-audio.com/"
            },
            {
              field: "Edit",
              value: "Fréderic Krettly"
            }
          ]
        }
      ]
    },
    {
      name: "Syfy",
      slug: "syfy",
      tags: ["ident", "design", "art direction"],
      mainVideo: require("video/syfy_home.mp4"),
      description: "In 2018, 17MARS agency gave me the opportunity to design a jingle pub for the famous television channel SYFY. The theme was about magic and fantasy with a relation to differents SYFY series universe. Vimeo mdp: syfy",
      mainImage: require("images/syfy/final_frames/syfy_mainimage.jpg"),
      slideshow: [
        require("images/syfy/final_frames/syfy_mainimage.jpg"),
        require("images/syfy/final_frames/syfy_screenshot01.jpg"),
        require("images/syfy/final_frames/syfy_screenshot02.jpg"),
        require("images/syfy/final_frames/syfy_screenshot03.jpg"),
        require("images/syfy/final_frames/syfy_mainimage.jpg"),
        require("images/syfy/final_frames/syfy_screenshot01.jpg")
      ],
      sections: [
        {
          type: "content",
          theme: "red",
          content:
            "In 2018, 17MARS agency gave me the opportunity to design a jingle pub for the famous television channel SYFY. The theme was about magic and fantasy with a relation to differents SYFY series universe. Vimeo mdp: syfy"
        },

        {
          type: "image",
          image: require("images/syfy/final_frames/syfy_mainimage.jpg"),
          hint: "vimeo mdp: syfy"
        },

        {
          type: "video",
          image: require("images/syfy/final_frames/syfy_mainimage.jpg"),
          video: "422799831"
        },

        {
          type: "content-title",
          title: "EARLY PRODUCTION",
          content:
            "The first production phase of the jingle was about making 3 concepts with a quick block out in 3D and a compositing in photoshop. For each jingle, the narration had to follow a pattern with two close up slowly revealing the mood and an ending with a wideshot of the environment. The logo was added on top as if we had only a glimpse into the syfy universe."
        },

        {
          type: "slider",
          isFullPage: false,
          images: [
            require("images/syfy/production/syfy_production01.jpg"),
            require("images/syfy/production/syfy_production02.jpg"),
            require("images/syfy/production/syfy_production05.jpg")
          ]
        },
        {
          type: "paralax",
          title: "A GLIMPSE INTO THE SYFY UNIVERSE",
          images: [
            require("images/syfy/parallax/syfy_parallax00.jpg"),
            require("images/syfy/parallax/syfy_parallax01.jpg"),
            require("images/syfy/parallax/syfy_parallax02.jpg"),
            require("images/syfy/parallax/syfy_parallax03.jpg"),
            require("images/syfy/parallax/syfy_parallax04.jpg")
          ]
        },

        {
          type: "content-title",
          title: "STILL FRAMES",
          content:
            "The concepts were well received but SYFY asked to design another option for how the main magical element should be portrayed in the jingle. They wanted something more magical than fantasy. I created something we could see as a spell floating and flickering in the air but it has not made it to the final jingle."
        },
        {
          type: "slider",
          isFullPage: true,
          images: [
            require("images/syfy/final_frames/syfy_finalframe00.jpg"),
            require("images/syfy/final_frames/syfy_finalframe01.jpg"),
            require("images/syfy/final_frames/syfy_finalframe03.jpg")
          ]
        },
        {
          type: "content-title",
          title: "CREDITS",
          theme: "light",
          content: [
            {
              field: "Design",
              value: "Matthieu Tourdes"
            },
            {
              field: "Agency",
              value: "17MARS"
            }
          ]
        }
      ]
    },
    {
      name: "Dune",
      slug: "dune",
      tags: ["concept art", "design", "art direction"],
      description:
        "Moving on in my journey towards concept art, I've been trying out digital painting techniques lately and I love it. I recently watched a documentary about Jodorowsky's Dune and read the original book by Frank Herbert that inspired me this project.",
      mainVideo: false,
      mainImage: require("images/dune/final_frames/dune_arrakeen.jpg"),
      slideshow: [
        require("images/dune/final_frames/dune_arrakeen.jpg"),
        require("images/dune/final_frames/dune_breathingdust.jpg"),
        require("images/dune/final_frames/dune_arrakeen.jpg"),
        require("images/dune/final_frames/dune_breathingdust.jpg"),
        require("images/dune/final_frames/dune_arrakeen.jpg"),
        require("images/dune/final_frames/dune_breathingdust.jpg")
      ],
      sections: [
        {
          type: "content",
          theme: "red",
          content:
            "Moving on in my journey towards concept art, I've been trying out digital painting techniques lately and I love it. I recently watched a documentary about Jodorowsky's Dune and read the original book by Frank Herbert that inspired me this project."
        },

        {
          type: "slider",
          isFullPage: true,
          images: [require("images/dune/final_frames/dune_arrakeen.jpg")]
        },

        {
          type: "content",
          theme: "black",
          content:
            "For this project, I wanted to do a painting with characters. I had in mind a very dusty atmosphere where breathing seems difficult if not impossible without a mask filtering the hot air. The idea of the street with archs came messing around with the amazing kitbash3d kit Ancient Temples. The focus was on simplify/exagerate while keeping the focus and values fine.",
          image: ""
        },

        {
          type: "slider",
          isFullPage: true,
          images: [require("images/dune/final_frames/dune_breathingdust.jpg")]
        },

        {
          type: "content",
          theme: "black",
          content:
            "<p>As the prominent character of the book, Paul Atreides later known as Muad’dib is a charismatic leader with superhuman powers allowing him to see every futur possibilities. He soon became the prophet of the fremen, the fierce and strong people of Dune’s desert.</p><p>« Muad'Dib is wise in the ways of the desert. »</p><p>That’s why I portrayed him as a man moving through a desert storm as if he was the core of it.</p>",
          image: ""
        },

        {
          type: "slider",
          isFullPage: true,
          images: [require("images/dune/final_frames/dune_arrakeen.jpg")]
        },

        {
          type: "content-title",
          title: "CREDITS",
          theme: "light",
          content: [
            {
              field: "Concept Art",
              value: "Matthieu Tourdes"
            }
          ]
        }
      ]
    }
  ]
};
