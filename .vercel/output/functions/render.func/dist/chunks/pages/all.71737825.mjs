/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent, _ as __astro_tag_component__ } from '../astro.e0fd045d.mjs';
import 'html-escaper';
/* empty css                           */import { Navbar, Dropdown, Breadcrumb as Breadcrumb$1, Carousel, Card, Avatar, Rating, Textarea, Button, Tabs } from 'flowbite-react';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
/* empty css                               */import { useState } from 'react';

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/home/icliniq/Documents/icliniq-pages/src/layouts/Layout.astro");

const $$Astro$4 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-DOHJNAO5">
	<a${addAttribute(href, "href")} class="astro-DOHJNAO5">
		<h2 class="astro-DOHJNAO5">
			${title}
			<span class="astro-DOHJNAO5">&rarr;</span>
		</h2>
		<p class="astro-DOHJNAO5">
			${body}
		</p>
	</a>
</li>`;
}, "/home/icliniq/Documents/icliniq-pages/src/components/Card.astro");

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main>
		<h1>Welcome to <span class="text-gradient">Astro</span></h1>
		<p class="instructions">
			To get started, open the directory <code>src/pages</code> in your project.<br>
			<strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>
		<ul role="list" class="link-card-grid">
			${renderComponent($$result2, "Card", $$Card, { "href": "https://docs.astro.build/", "title": "Documentation", "body": "Learn how Astro works and explore the official API docs." })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/integrations/", "title": "Integrations", "body": "Supercharge your project with new frameworks and libraries." })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/themes/", "title": "Themes", "body": "Explore a galaxy of community-built starter themes." })}
			${renderComponent($$result2, "Card", $$Card, { "href": "https://astro.build/chat/", "title": "Community", "body": "Come say hi to our amazing Discord community. \u2764\uFE0F" })}
		</ul>
	</main>` })}`;
}, "/home/icliniq/Documents/icliniq-pages/src/pages/index.astro");

const $$file$2 = "/home/icliniq/Documents/icliniq-pages/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const BANNER_MENU_OPTION = ["All", "Anxiety", "Depression", "Delayed Period", "Headache", "Stress"];
const NAV_MENU = ["Consult Doctor", "Choose a Doctor", {
  "More": ["Ask a Doctor Online", "Chat with Doctor", "Phone a Doctor"]
}];

function Header() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs(Navbar, {
      fluid: true,
      rounded: true,
      children: [/* @__PURE__ */ jsx(Navbar.Brand, {
        href: "#",
        children: /* @__PURE__ */ jsx("img", {
          src: "https://assets.icliniq.com/v2/assets/images/iCliniq-logo/ic-white-logo.svg",
          className: "mx-3 h-10 sm:h-9 my-2",
          alt: "iCliniq Logo"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "flex md:order-2",
        children: /* @__PURE__ */ jsx(Navbar.Toggle, {})
      }), /* @__PURE__ */ jsx(Navbar.Collapse, {
        className: "mr-4",
        children: NAV_MENU.map((options) => {
          return typeof options === "object" ? Object.keys(options).map((result) => {
            return /* @__PURE__ */ jsx(Fragment, {
              children: /* @__PURE__ */ jsx(Dropdown, {
                arrowIcon: false,
                inline: true,
                label: /* @__PURE__ */ jsx("div", {
                  className: "flex items-center",
                  children: /* @__PURE__ */ jsx(Navbar.Link, {
                    href: "#",
                    children: result
                  })
                }),
                children: options[result].map((hiddenMenu) => {
                  return /* @__PURE__ */ jsx(Dropdown.Item, {
                    children: hiddenMenu
                  });
                })
              })
            });
          }) : /* @__PURE__ */ jsx(Navbar.Link, {
            href: "#",
            children: options
          });
        })
      })]
    })
  });
}
__astro_tag_component__(Header, "@astrojs/react");

function Breadcrumb({
  content
}) {
  return /* @__PURE__ */ jsxs(Breadcrumb$1, {
    "aria-label": "Solid background breadcrumb example",
    className: "bg-cyan-50 py-3 px-5 dark:bg-gray-900",
    children: [/* @__PURE__ */ jsx(Breadcrumb$1.Item, {
      href: "#",
      children: "iCliniq"
    }), /* @__PURE__ */ jsx(Breadcrumb$1.Item, {
      children: content
    })]
  });
}
__astro_tag_component__(Breadcrumb, "@astrojs/react");

function DoctorCarousel(carouselProp) {
  console.log(carouselProp);
  return /* @__PURE__ */ jsx("div", {
    className: "h-32 ",
    children: /* @__PURE__ */ jsx(Carousel, {
      leftControl: /* @__PURE__ */ jsx("i", {
        "aria-hidden": true,
        className: "fa fa-arrow-left"
      }),
      rightControl: /* @__PURE__ */ jsx("i", {
        "aria-hidden": true,
        className: "fa fa-arrow-right"
      }),
      indicators: false,
      children: carouselProp["carouselProp"].map((res) => {
        return /* @__PURE__ */ jsx(Card, {
          className: "px-10 ",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex items-center",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-center justify-center flex-col",
              children: [/* @__PURE__ */ jsx("div", {
                className: "flex flex-wrap gap-2",
                children: /* @__PURE__ */ jsx(Avatar, {
                  img: res.img,
                  rounded: true
                })
              }), /* @__PURE__ */ jsx(Rating, {
                className: "mt-2",
                children: (() => {
                  const arr = [];
                  for (let i = 1; i <= 5; i++) {
                    if (i <= res.rating) {
                      arr.push(/* @__PURE__ */ jsx(Rating.Star, {}));
                    } else {
                      arr.push(/* @__PURE__ */ jsx(Rating.Star, {
                        filled: false
                      }));
                    }
                  }
                  return /* @__PURE__ */ jsx(Fragment, {
                    children: arr
                  });
                })()
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: " pl-5 flex flex-col",
              children: [/* @__PURE__ */ jsx("span", {
                className: "text-l	",
                children: res.drName
              }), /* @__PURE__ */ jsx("span", {
                className: "text-slate-400	text-sm	",
                children: res.expertIn
              })]
            })]
          })
        });
      })
    })
  });
}
function DoctorsOnline({
  doctorsDetails
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex justify-center flex-col mt-10 lg:mt-0",
    children: [/* @__PURE__ */ jsx("img", {
      className: "w-100 object-contain h-64 w-100",
      src: "https://assets.icliniq.com/v2/assets/images/message.svg"
    }), /* @__PURE__ */ jsxs("span", {
      className: "text-xl text-center",
      children: [/* @__PURE__ */ jsx("span", {
        className: "font-semibold text-xl",
        children: "2233"
      }), " Doctors Online"]
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-10 lg:m-14 mb-1",
      children: /* @__PURE__ */ jsx(DoctorCarousel, {
        carouselProp: doctorsDetails
      })
    })]
  });
}
__astro_tag_component__(DoctorsOnline, "@astrojs/react");

function LiveSpecialist() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs(Card, {
      className: "p-6",
      children: [/* @__PURE__ */ jsx("h5", {
        className: "text-2xl my-5 font-bold tracking-tight text-gray-900 dark:text-white",
        children: "Ask a 'Liver Specialist' Online"
      }), /* @__PURE__ */ jsx("p", {
        className: " my-5 font-semibold text-gray-700 dark:text-gray-400",
        children: "ENTER YOUR HEALTH QUERY"
      }), /* @__PURE__ */ jsx(Textarea, {
        id: "comment",
        placeholder: "Leave a comment...",
        required: true,
        rows: 4
      }), /* @__PURE__ */ jsx(Button, {
        className: "mt-3",
        children: "Submit"
      })]
    })
  });
}
__astro_tag_component__(LiveSpecialist, "@astrojs/react");

function ParadeInside() {
  return /* @__PURE__ */ jsxs(Card, {
    className: "w-full lg:w-8/12 p-3 lg:p-6",
    children: [/* @__PURE__ */ jsx("p", {
      className: "mt-3 text-center",
      children: "Ask your Liver queries to our experienced medical gastroenterologists and receive instant medical advice and second opinion."
    }), /* @__PURE__ */ jsx("p", {
      className: "mt-3 text-center",
      children: "Our medical panel consists of over 50+ highly skilled medical gastroenterologists who specialized in Liver treatment."
    }), /* @__PURE__ */ jsx("hr", {
      className: "my-8"
    }), /* @__PURE__ */ jsxs(Tabs.Group, {
      className: "bg-white rounded-lg dark:bg-gray-800 dark:text-white",
      style: "pills",
      children: [/* @__PURE__ */ jsx(Tabs.Item, {
        active: true,
        title: "User Review",
        children: /* @__PURE__ */ jsxs(Card, {
          children: [/* @__PURE__ */ jsx("h5", {
            className: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: "Noteworthy technology acquisitions 2021"
          }), /* @__PURE__ */ jsx("p", {
            className: "font-normal text-gray-700 dark:text-gray-400",
            children: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          })]
        })
      }), /* @__PURE__ */ jsx(Tabs.Item, {
        title: "About",
        children: /* @__PURE__ */ jsxs(Card, {
          children: [/* @__PURE__ */ jsx("h5", {
            className: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
            children: "About Hair loss"
          }), /* @__PURE__ */ jsx("p", {
            className: "font-normal text-gray-700 dark:text-gray-400",
            children: "Hair loss can be due to hormonal changes, heredity, or due to other underlying health conditions, and can affect the hair on the scalp or the entire body. Signs of hair loss are thinning of hair on the top of the head, bald spots, and excessive hair fall."
          })]
        })
      }), /* @__PURE__ */ jsx(Tabs.Item, {
        title: "How it works",
        children: /* @__PURE__ */ jsx(Card, {
          children: /* @__PURE__ */ jsxs("ul", {
            className: "list-disc leading-10 m-5",
            children: [/* @__PURE__ */ jsx("li", {
              children: "Your health issue will be shared across with our hair loss specialist panel."
            }), /* @__PURE__ */ jsx("li", {
              children: "A hair loss specialist will pick your query and send medical advice to your health issue subsequently."
            }), /* @__PURE__ */ jsx("li", {
              children: "You can then follow up with the same hair loss specialist."
            })]
          })
        })
      })]
    })]
  });
}
__astro_tag_component__(ParadeInside, "@astrojs/react");

const $$Astro$2 = createAstro();
const $$AskDoctor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AskDoctor;
  const response = await fetch("https://api.npoint.io/aec0bf1f1d18c0d32311");
  const result = await response.json();
  return renderTemplate`${maybeRenderHead($$result)}<div class="container mx-auto w-4/5">
    <div class="flex justify-center flex-col">
        <span class="text-center text-2xl mt-10">Your first Query is FREE !</span>
        <div class="grid grid-cols-1 mt-8  lg:grid-cols-2">
           ${renderComponent($$result, "LiveSpecialist", LiveSpecialist, {})}
           ${renderComponent($$result, "DoctorsOnline", DoctorsOnline, { "doctorsDetails": result, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/icliniq/Documents/icliniq-pages/src/components/askDoctor/DoctorsOnline", "client:component-export": "default" })}
        </div>
    </div>
    <div class="flex justify-center flex-col">
        <span class="text-center text-2xl mt-10 tracking-wide	">iCliniq IS TOP RATED BY</span>
        <div class="flex w-100 items-center justify-center mt-6">
            <img class="h-12 w-100 mr-2" src="https://assets.icliniq.com/v2/img/Parade.svg" alt="">
            <img class="h-6 w-100 ml-2" src="https://assets.icliniq.com/v2/assets/images/insider-1-color.svg" alt="">
        </div>
        <div class="flex justify-center mt-8">
            ${renderComponent($$result, "ParadeInside", ParadeInside, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/icliniq/Documents/icliniq-pages/src/components/askDoctor/ParadeInside", "client:component-export": "default" })}
        </div>
    </div>
</div>`;
}, "/home/icliniq/Documents/icliniq-pages/src/components/common/AskDoctor.astro");

function Footer() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Card, {
      className: "rounded-none mt-20 footer pb-10",
      children: /* @__PURE__ */ jsxs("div", {
        className: " mx-auto px-0 lg:px-5 w-4/5  container",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex justify-between items-center  mb-10 ",
          children: [/* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx("img", {
              src: "/assets/images/ic-white-logo.svg",
              className: "w-32 bg-white p-3 py-2 rounded"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex items-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "bg-violet-400		h-8 w-8 text-center mr-3 pt-1 cursor-pointer rounded-full",
              children: /* @__PURE__ */ jsx("i", {
                className: "	fa fa-headphones text-l cursor-pointer  text-white"
              })
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "24 / 7 Support"
            })]
          })]
        }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex flex-col leading-8",
            children: [/* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Ask a Doctor Online"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col leading-8",
            children: [/* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Ask a Doctor Online"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col leading-8 mt-5 lg:mt-0 md:mt-0",
            children: [/* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Ask a Doctor Online"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col leading-8 mt-5 lg:mt-0 md:mt-0",
            children: [/* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Ask a Doctor Online"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            }), /* @__PURE__ */ jsx("span", {
              className: "text-white",
              children: "Phone a Doctor"
            })]
          })]
        }), /* @__PURE__ */ jsx("p", {
          className: "mt-10 text-white text-2xl",
          children: "SPECIALTIES WE COVER"
        }), /* @__PURE__ */ jsxs("div", {
          className: "mt-8 text-slate-300 flex flex-wrap",
          children: [/* @__PURE__ */ jsx("h5", {
            className: "text-slate-300 pr-4",
            children: "Obstetrics and Gynecology"
          }), /* @__PURE__ */ jsx("h5", {
            className: "text-slate-300 pr-4",
            children: " Dermatology"
          }), /* @__PURE__ */ jsx("h5", {
            className: "text-slate-300 pr-4",
            children: "Internal Medicine "
          }), /* @__PURE__ */ jsx("h5", {
            className: "text-slate-300 pr-4",
            children: "Endocrinology  "
          }), /* @__PURE__ */ jsx("h5", {
            className: "text-slate-300 pr-4",
            children: "Nephrology"
          }), /* @__PURE__ */ jsx("h5", {
            className: "text-slate-300 pr-4",
            children: "Diabetology"
          }), /* @__PURE__ */ jsx("h5", {
            className: "text-slate-300 pr-4",
            children: "Allergy Specialist"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 lg:grid-cols-2  gap-4 mt-10",
          children: /* @__PURE__ */ jsxs(Card, {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "mb-2 text-3xl font-bold text-center text-gray-900 dark:text-white",
              children: "Get us through the app"
            }), /* @__PURE__ */ jsxs("div", {
              className: "items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4",
              children: [/* @__PURE__ */ jsxs("a", {
                href: "#",
                className: "inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto",
                children: [/* @__PURE__ */ jsx("svg", {
                  className: "mr-3 h-7 w-7",
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fab",
                  "data-icon": "apple",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 384 512",
                  children: /* @__PURE__ */ jsx("path", {
                    fill: "currentColor",
                    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "text-left",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "mb-1 text-xs",
                    children: "Download on the"
                  }), /* @__PURE__ */ jsx("div", {
                    className: "-mt-1 font-sans text-sm font-semibold",
                    children: "Mac App Store"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("a", {
                href: "#",
                className: "inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto",
                children: [/* @__PURE__ */ jsx("svg", {
                  className: "mr-3 h-7 w-7",
                  "aria-hidden": "true",
                  focusable: "false",
                  "data-prefix": "fab",
                  "data-icon": "google-play",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  children: /* @__PURE__ */ jsx("path", {
                    fill: "currentColor",
                    d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "text-left",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "mb-1 text-xs",
                    children: "Get in on"
                  }), /* @__PURE__ */ jsx("div", {
                    className: "-mt-1 font-sans text-sm font-semibold",
                    children: "Google Play"
                  })]
                })]
              })]
            })]
          })
        }), /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsxs("p", {
            className: "text-white mt-8 tracking-wide	",
            children: [/* @__PURE__ */ jsx("b", {
              children: "Disclaimer:"
            }), "  No content published on this website is intended to be a substitute for professional medical diagnosis, advice or treatment by a trained physician. Seek advice from your physician or other qualified healthcare providers with questions you may have regarding your symptoms and medical condition for a complete medical diagnosis. Do not delay or disregard seeking professional medical advice because of something you have read on this website. Read our Editorial Process to know how we create content for health articles and queries."]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 gap-4 lg:grid-cols-2  mt-10",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("h5", {
              className: "text-white text-2xl",
              children: "PAYMENTS ACCEPTED"
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex mt-5 items-center",
              children: [/* @__PURE__ */ jsx("i", {
                className: "fa fa-cc-mastercard text-4xl cursor-pointer mr-3 text-white"
              }), /* @__PURE__ */ jsx("i", {
                className: "fa fa-cc-amex text-4xl cursor-pointer mr-3 text-white"
              }), /* @__PURE__ */ jsx("i", {
                className: "fa fa-cc-visa text-4xl cursor-pointer mr-3 text-white"
              }), /* @__PURE__ */ jsx("i", {
                className: "fa fa-cc-discover text-4xl cursor-pointer mr-3 text-white"
              }), /* @__PURE__ */ jsx("i", {
                className: "fa fa-cc-paypal text-4xl cursor-pointer mr-3 text-white"
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-10 lg:mt-0",
            children: [/* @__PURE__ */ jsx("h5", {
              className: "text-white text-sm",
              children: "Follow Us"
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex mt-5 items-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "bg-blue-700	 text-center mr-2 pt-1  h-8 w-8 cursor-pointer rounded-full",
                children: /* @__PURE__ */ jsx("i", {
                  className: "fa fa-facebook-f text-m  text-white cursor-pointer"
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-violet-600	 text-center mr-2 pt-1  h-8 w-8 cursor-pointer rounded-full",
                children: /* @__PURE__ */ jsx("i", {
                  className: "fa fa-instagram text-m  text-white cursor-pointer"
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-cyan-400		 text-center mr-2 pt-1  h-8 w-8 cursor-pointer rounded-full",
                children: /* @__PURE__ */ jsx("i", {
                  className: "fa fa-twitter text-m  text-white cursor-pointer"
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "bg-pink-800		 text-center mr-2 pt-1  h-8 w-8 cursor-pointer rounded-full",
                children: /* @__PURE__ */ jsx("i", {
                  className: "fa fa-linkedin text-m  text-white cursor-pointer"
                })
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-10",
          children: /* @__PURE__ */ jsx("p", {
            className: "text-white  tracking-wide	text-center",
            children: "Copyright © 2023, iCliniq - All Rights Reserved"
          })
        })]
      })
    })
  });
}
__astro_tag_component__(Footer, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$HairLoss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HairLoss;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "iCliniq - Hair Loss" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", Header, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/icliniq/Documents/icliniq-pages/src/components/common/Header", "client:component-export": "default" })}${renderComponent($$result2, "Breadcrumb", Breadcrumb, { "content": "Ask a Doctor Online" })}${renderComponent($$result2, "AskDoctor", $$AskDoctor, {})}${renderComponent($$result2, "Footer", Footer, {})}` })}`;
}, "/home/icliniq/Documents/icliniq-pages/src/pages/ask-for-doctor/hair-loss.astro");

const $$file$1 = "/home/icliniq/Documents/icliniq-pages/src/pages/ask-for-doctor/hair-loss.astro";
const $$url$1 = "/ask-for-doctor/hair-loss";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$HairLoss,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const BannerMenu = () => {
  const menuOptions = BANNER_MENU_OPTION;
  const [bannerMenu, setBannerMenu] = useState(menuOptions[0]);
  const activeHandler = (options) => {
    setBannerMenu(options);
  };
  return /* @__PURE__ */ jsx("div", {
    className: "banner-menu hidden lg:flex flex-wrap",
    children: menuOptions.map((options) => {
      return /* @__PURE__ */ jsx("span", {
        className: `${bannerMenu === options ? "banner-menu-active" : ""}`,
        onClick: (event) => {
          activeHandler(options);
        },
        children: options
      }, options);
    })
  });
};
function Banner() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(BannerMenu, {}), /* @__PURE__ */ jsx("div", {
      className: "banner",
      children: /* @__PURE__ */ jsxs("div", {
        className: "banner-search block md:flex justify-around w-9/12 lg:w-7/12 items-center	",
        children: [/* @__PURE__ */ jsxs("select", {
          className: " w-full  md:w-2/5	h-10 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\n                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\n                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none\n                invalid:border-pink-500 invalid:text-pink-600\n                focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
          children: [/* @__PURE__ */ jsx("option", {
            selected: true,
            value: "",
            children: "Select an option ---"
          }), /* @__PURE__ */ jsx("option", {
            value: "saab",
            children: "Saab"
          }), /* @__PURE__ */ jsx("option", {
            value: "opel",
            children: "Opel"
          }), /* @__PURE__ */ jsx("option", {
            value: "audi",
            children: "Audi"
          })]
        }), /* @__PURE__ */ jsx("input", {
          className: " mt-3 md:mt-0 w-full  md:w-1/3	 h-10  block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\n                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\n                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none\n                invalid:border-pink-500 invalid:text-pink-600\n                focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
          type: "text",
          placeholder: "Search"
        }), /* @__PURE__ */ jsx("button", {
          className: "h-10 mt-3 md:mt-0 ",
          children: "Search"
        })]
      })
    })]
  });
}
__astro_tag_component__(Banner, "@astrojs/react");

const $$Astro = createAstro();
const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Articles;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "iCliniq - Article" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/icliniq/Documents/icliniq-pages/src/components/common/Header", "client:component-export": "default" })}${renderComponent($$result2, "Breadcrumb", Breadcrumb, { "content": "Articles" })}${renderComponent($$result2, "Banner", Banner, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/icliniq/Documents/icliniq-pages/src/components/common/Banner", "client:component-export": "default" })}` })}`;
}, "/home/icliniq/Documents/icliniq-pages/src/pages/articles.astro");

const $$file = "/home/icliniq/Documents/icliniq-pages/src/pages/articles.astro";
const $$url = "/articles";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Articles,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
