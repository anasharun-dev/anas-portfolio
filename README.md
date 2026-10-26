# Anas Harun — Software Engineering Portfolio

A responsive, single-page Bootstrap 5 portfolio for an AWS Amplify static hosting assignment.

## Includes
- Name, personal introduction, professional experience and education
- Four projects with original CSS/UI illustrations (images/graphics on the page)
- Skills, mobile navigation, contact section
- Bootstrap 5 CDN, original CSS, small JavaScript enhancements

## Customize before publishing
1. Open `assets/script.js` and replace blank `email`, `github`, and `linkedin` values with your actual information. The copy-email button is disabled until an email is provided.
2. Edit project descriptions and work history in `index.html` for accuracy. The mock project images are illustrations, not actual screenshots.
3. Replace placeholder source/demo links later with real working links. Project cards are deliberately not fake links.
4. Optional: add an actual photo by uploading it into `assets/` and inserting `<img src="assets/yourphoto.jpg" alt="Portrait of Anas Harun">` in `index.html`. The built-in graphical project mockups already satisfy an image/graphic requirement, but a literal `<img>` element may be preferred by some graders. For this reason the site includes `assets/portfolio-illustration.svg` and loads it as an actual image (see below).

## Publish to AWS Amplify via GitHub
1. Create a public or private GitHub repository and upload all files, preserving `assets/` folder.
2. In AWS Amplify console, select **Create new app** → **GitHub**, authorize GitHub if asked, choose the repo and branch.
3. For a plain HTML site, set the build output directory to `/` (repo root) if prompted. No build commands are needed.
4. Deploy and open your provided `https://...amplifyapp.com` URL.
5. Submit the deployed Amplify URL, not the GitHub repo URL.

Notes: The page needs internet connectivity to load Bootstrap and Google Fonts from CDNs. No npm dependencies, compilation or secret keys needed.
