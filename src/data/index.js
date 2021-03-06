export const data = {
  global: {
    socials: [
      {
        content: "Instagram",
        url: "https://www.instagram.com/mtourdes/",
      },
      {
        content: "Behance",
        url: "https://www.behance.net/matthieutourdes",
      },
      {
        content: "Vimeo",
        url: "https://vimeo.com/user23739165",
      },
    ],
  },
  home: {
    easing: {
      global: "cubicBezier(0.33, 1, 0.68, 1)",
      titleSlider: "cubic-bezier(.37,0,.5,1)",
      progressCircle: "cubicBezier(0.37, 0, 0.63, 1)",
      backgroundSliderIntro: "cubicBezier(0.11, 0, 0.5, 0)",
    },
  },
  about: {
    title: "About",
    job: ["Designer/Concept Artist", "based in Paris"],
    content: [
      "<p>Matthieu Tourdes is a freelance Designer and Concept Artist. His work spans multiple disciplines, from motion graphics, live visuals, and broadcast, to film and gaming. </p><br><br><p>Matthieu is available by contract in Paris and remotely, contact <a href='mailto:matthieu.tourdes@gmail.com' >matthieu.tourdes@gmail.com</a>.</p>",
    ],
  },
  projects: [
    {
      name: "Eclipse",
      slug: "eclipse",
      tags: ["short film", "design", "art direction"],
      description:
        "Eclipse is a short film that explores an alternate dark reality inspired by my thoughts and imaginary. It has a personnal narrative around the stunning ability of the human nature to recover and survive.",
      mainVideo: require("video/eclipse_home.mp4"),
      mainImage: require("images/eclipse/final_frames/eclipse_finalframe03.png"),
      slideshow: [
        require("images/eclipse/final_frames/eclipse_finalframe03.png"),
        require("images/eclipse/final_frames/eclipse_finalframe04.png"),
        require("images/eclipse/final_frames/eclipse_finalframe18.png"),
        require("images/eclipse/final_frames/eclipse_finalframe13.png"),
        require("images/eclipse/final_frames/eclipse_finalframe11.png"),
        require("images/eclipse/final_frames/eclipse_finalframe10.png"),
      ],
      sections: [
        {
          type: "content",
          theme: "red",
          content:
            "Eclipse is a short film that explores an alternate dark reality inspired by my thoughts and imaginary. It has a personnal narrative around the stunning ability of the human nature to recover and survive.",
        },

        {
          type: "video",
          image: require("images/eclipse/final_frames/eclipse_finalframe03.png"),
          video: "407898397",
        },
        {
          type: "content-title",
          title: "FINAL FRAMES",
          content:
            "Endless hours of work were poured into Eclipse. It was a special project that would allow me some fun to explore and learn more about the craft and CGI. Eclipse proved to be a giant ground of exploration and provided me a chance to connect with my imaginary as never before. It was an intense year of work full with moments of doubts and joy but I feel now how the many challenges, iterations and attention to details were vital to the final film.",
        },

        {
          type: "slider",
          isFullPage: true,
          images: [
            require("images/eclipse/final_frames/eclipse_finalframe00.png"),
            require("images/eclipse/final_frames/eclipse_finalframe01.png"),
            require("images/eclipse/final_frames/eclipse_finalframe02.png"),
            require("images/eclipse/final_frames/eclipse_finalframe03.png"),
            require("images/eclipse/final_frames/eclipse_finalframe04.png"),
            require("images/eclipse/final_frames/eclipse_finalframe05.png"),
            require("images/eclipse/final_frames/eclipse_finalframe06.png"),
            require("images/eclipse/final_frames/eclipse_finalframe07.png"),
            require("images/eclipse/final_frames/eclipse_finalframe08.png"),
            require("images/eclipse/final_frames/eclipse_finalframe09.png"),
          ],
        },

        {
          type: "paralax",
          title: "A VOYAGE TO A DARK REALITY",
          title2: "WHERE HUMANS NEED TO RECOVER",
          images: [
            require("images/eclipse/parallax/eclipse_parallax05.png"),
            require("images/eclipse/parallax/eclipse_parallax06.png"),
            require("images/eclipse/parallax/eclipse_parallax07.png"),
            require("images/eclipse/parallax/eclipse_parallax08.png"),
            require("images/eclipse/parallax/eclipse_parallax09.png"),
          ],
        },

        {
          type: "content",
          theme: "black",
          content:
            "The narrative started with a first vivid thought of a women asleep inside a tube. From there I imagined other key visuals to further shape and understand the world of Eclipse.",
          image: "",
        },

        {
          type: "slider",
          isFullPage: true,
          images: [
            require("images/eclipse/final_frames/eclipse_finalframe10.png"),
            require("images/eclipse/final_frames/eclipse_finalframe11.png"),
            require("images/eclipse/final_frames/eclipse_finalframe12.png"),
            require("images/eclipse/final_frames/eclipse_finalframe13.png"),
            require("images/eclipse/final_frames/eclipse_finalframe14.png"),
            require("images/eclipse/final_frames/eclipse_finalframe15.png"),
            require("images/eclipse/final_frames/eclipse_finalframe16.png"),
            require("images/eclipse/final_frames/eclipse_finalframe17.png"),
            require("images/eclipse/final_frames/eclipse_finalframe18.png"),
            require("images/eclipse/final_frames/eclipse_finalframe19.png"),
          ],
        },

        {
          type: "content-title",
          title: "PROCESS",
          content:
            "The concept of the whole production of Eclipse has been challenging  as I was constantly progressing, analysing and evolving my skillsets while developping the imagery. The whole project was made with Cinema4D, Redshift, After Effects, Premiere and Houdini. I also used RDT Textures paired up with Megascans for textures and assets.",
        },

        {
          type: "slider",
          isFullPage: false,
          images: [
            require("images/eclipse/production/eclipse_production00.PNG"),
            require("images/eclipse/production/eclipse_production01.PNG"),
            require("images/eclipse/production/eclipse_production02.PNG"),
            require("images/eclipse/production/eclipse_production03.PNG"),
            require("images/eclipse/production/eclipse_production04.PNG"),
            require("images/eclipse/production/eclipse_production05.PNG"),
            require("images/eclipse/production/eclipse_production06.PNG"),
            require("images/eclipse/production/eclipse_production07.PNG"),
            require("images/eclipse/production/eclipse_production08.PNG"),
            require("images/eclipse/production/eclipse_production09.PNG"),
            require("images/eclipse/production/eclipse_production10.PNG"),
          ],
        },
        {
          type: "content-title",
          title: "SPECIAL THANKS",
          theme: "light",
          content:
            "I would like to personally thank Zing Audio for the beautiful score, really loved this collaboration. I would like to extend my sincere thanks to François Leroy for his continuous advices during the whole production of the film.",
        },
        {
          type: "content-title",
          title: "CREDITS",
          theme: "light",
          content: [
            {
              field: "Film",
              value: "Matthieu Tourdes",
            },
            {
              field: "Score",
              value: "Zing Audio",
              url: "https://www.zing-audio.com/",
            },
            {
              field: "Edit",
              value: "Fréderic Krettly",
            },
          ],
        },
      ],
    },
    {
      name: "Syfy",
      slug: "syfy",
      tags: ["ident", "design", "art direction"],
      mainVideo: require("video/syfy_home.mp4"),
      description:
        "In 2018, 17MARS agency gave me the opportunity to design a jingle pub for the famous television channel SYFY. The theme was about magic and fantasy with a relation to differents SYFY series universe.",
      mainImage: require("images/syfy/final_frames/syfy_mainimage.png"),
      slideshow: [
        require("images/syfy/final_frames/syfy_mainimage.png"),
        require("images/syfy/final_frames/syfy_screenshot01.png"),
        require("images/syfy/final_frames/syfy_screenshot02.png"),
        require("images/syfy/final_frames/syfy_screenshot03.png"),
        require("images/syfy/final_frames/syfy_mainimage.png"),
        require("images/syfy/final_frames/syfy_screenshot01.png"),
      ],
      sections: [
        {
          type: "content",
          theme: "red",
          content:
            "In 2018, 17MARS agency gave me the opportunity to design a jingle pub for the famous television channel SYFY. The theme was about magic and fantasy with a relation to differents SYFY series universe. Vimeo mdp: syfy",
        },

        {
          type: "video",
          image: require("images/syfy/final_frames/syfy_mainimage.png"),
          video: "422799831",
        },

        {
          type: "content-title",
          title: "EARLY PRODUCTION",
          content:
            "I first made 3 concepts with a quick block out in 3D and a compositing in photoshop. For each jingle, the narration had to follow a pattern with two close up slowly revealing the mood and an ending with a wideshot of the environment. The logo was added on top as if we had only a glimpse into the syfy universe.",
        },

        {
          type: "slider",
          isFullPage: false,
          images: [
            require("images/syfy/production/syfy_production01.jpg"),
            require("images/syfy/production/syfy_production02.jpg"),
            require("images/syfy/production/syfy_production05.png"),
          ],
        },
        {
          type: "paralax",
          title: "A GLIMPSE INTO",
          title2: "THE SYFY UNIVERSE",
          images: [
            require("images/syfy/parallax/syfy_parallax00.png"),
            require("images/syfy/parallax/syfy_parallax01.png"),
            require("images/syfy/parallax/syfy_parallax02.png"),
            require("images/syfy/parallax/syfy_parallax03.png"),
            require("images/syfy/parallax/syfy_parallax04.png"),
          ],
        },

        {
          type: "content-title",
          title: "STILL FRAMES",
          content:
            "SYFY asked to design another option for how the main magical element should be portrayed in the jingle. They wanted something more magical than fantasy. I created something we could see as a spell floating and flickering in the air but it has not made it to the final jingle.",
        },
        {
          type: "slider",
          isFullPage: true,
          images: [
            require("images/syfy/final_frames/syfy_finalframe00.png"),
            require("images/syfy/final_frames/syfy_finalframe01.png"),
            require("images/syfy/final_frames/syfy_finalframe03.png"),
          ],
        },
        {
          type: "content-title",
          title: "CREDITS",
          theme: "light",
          content: [
            {
              field: "Design",
              value: "Matthieu Tourdes",
            },
            {
              field: "Agency",
              value: "17MARS",
            },
          ],
        },
      ],
    },
    {
      name: "Dune",
      slug: "dune",
      tags: ["concept art", "design", "art direction"],
      description:
        "Moving on in my journey towards concept art, I've been trying out digital painting techniques lately and I love it. I recently watched a documentary about Jodorowsky's Dune and read the original book by Frank Herbert that inspired me this project. The first image is about a sunset on the peculiar city of Arrakeen. Hope you like it.",
      mainVideo: false,
      mainImage: require("images/dune/final_frames/dune_arrakeen.png"),
      slideshow: [
        require("images/dune/final_frames/dune_arrakeen.png"),
        require("images/dune/final_frames/dune_breathingdust.png"),
        require("images/dune/final_frames/dune_arrakeen.png"),
        require("images/dune/final_frames/dune_breathingdust.png"),
        require("images/dune/final_frames/dune_arrakeen.png"),
        require("images/dune/final_frames/dune_breathingdust.png"),
      ],
      sections: [
        {
          type: "content",
          theme: "red",
          content:
            "Moving on in my journey towards concept art, I recently watched a documentary about Jodorowsky's Dune and read the original book by Frank Herbert that inspired me this project.",
        },

        {
          type: "slider",
          isFullPage: true,
          images: [require("images/dune/final_frames/dune_arrakeen.png")],
        },

        {
          type: "content",
          theme: "black",
          content:
            "For the next image, I wanted to do a painting with characters. I had in mind a very dusty atmosphere where breathing seems difficult if not impossible without a mask filtering the hot air. The idea of the street with archs came messing around with the amazing kitbash3d kit Ancient Temples.",
          image: "",
        },

        {
          type: "slider",
          isFullPage: true,
          images: [require("images/dune/final_frames/dune_breathingdust.png")],
        },

        {
          type: "content",
          theme: "black",
          content:
            "<p>As the prominent character of the book, Paul Atreides later known as Muad’dib is a charismatic leader with superhuman powers allowing him to see every futur possibilities. He soon became the prophet of the fremen, the fierce and strong people of Dune’s desert.</p><p>« Muad'Dib is wise in the ways of the desert. »</p><p>That’s why I portrayed him as a man moving through a desert storm as if he was the core of it.</p>",
          image: "",
        },

        {
          type: "slider",
          isFullPage: true,
          images: [require("images/dune/final_frames/dune_arrakeen.png")],
        },

        {
          type: "content-title",
          title: "CREDITS",
          theme: "light",
          content: [
            {
              field: "Concept Art",
              value: "Matthieu Tourdes",
            },
          ],
        },
      ],
    },
  ],
};
