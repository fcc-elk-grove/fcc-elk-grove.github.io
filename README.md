# [fCC Elk Grove](https://www.meetup.com/freeCodeCamp-Greater-Sacramento-Area/)

This is the repo for the official freeCodeCamp Elk Grove website.

[Live Demo Concept](https://fcc-demo.netlify.com/)

# Preface 
We are still deciding on which tech-stack to use.
Possible choices:


- Plain HTML, CSS, JavaScript
- Static Site Generator
- GatsbyJS

The live demo is made with the following:

- HTML5
- CSS3, SASS/SCSS
- [BEM naming convention](https://en.bem.info/methodology/)
- Based on [SASS 7-1 Pattern](https://gist.github.com/rveitch/84cea9650092119527bc)

Both the BEM naming conventions and SASS 7-1 patterns are new to me (Eddie) as well. But, I think they are valuable methods to ensure our code is consistent across multiple contributors. Since collaboration is the purpose of this project.

Of course, we don't have to follow these methods. We are open to any suggestions or tech-stack recommendations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

What things you need to install the software and how to install them

- [npm](https://www.npmjs.com/get-npm)


### Installing

1. Clone or fork the repo

```
git clone https://github.com/fcc-elk-grove/fcc-elk-grove.github.io.git
```

2. Run npm install inside project root directory

```
npm install
```

3. Once the repository as finished installing navigate into the new directory.

4. We will have to re-compile the SASS files to CSS locally, since the CSS files are not committed to the remote repository

5. Run `npm run compile` to generate the css for your local development. Open the index.html file and your version of the project should be up.



## Contributors

* **Javier Alvarado** - *Project Manager* - 
* **Jeff Low** - *Design* - 
* **Eddie Chu** - *Initial work* - [eddiechu.dev](https://www.eddiechu.dev/)
