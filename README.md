# Welcome to CodeNesters's Repository

Visit our [website](https://codenesters.in) to experience amazing services

## Learn how to contribute to this respository

1. Fork the repository by clicking on the fork button in the top right corner of this page

2. Clone your forked repository onto your local machine using `git clone https://github.com/<your-username>/<repo_name>.git`

3. Navigate to the project directory using `cd CodeNesters`

4. Add the original repository as a remote called "upstream" using `git remote add upstream https://github.com/Yashcodes/CodeNesters-Frontend.git`

5. To pull the latest code from the main repository, use `git checkout master` and then `git pull upstream master`. This ensures that you are working off the most recent version of the project

6. Create a new branch for your feature or fix using `git checkout -b <branch_name>`. If you're fixing a bug, include fixes in the branch name (e.g., `fix-bug-x`)

7. Make your changes and commit them using `git add .` (to stage all changed files) and `git commit -m "Your detailed commit message"` (to make a commit with a descriptive message). It is important to provide a detailed message explaining your changes

8. Push your changes back to your forked repository using `git push origin <branch_name>`

9. Go to the GitHub website and click on the "New Pull Request" button. Select your branch from the dropdown menu next to "base:", and choose "master" from the dropdown menu next to "compare:". Click "Create Pull Request"

10. A member of the team will review your request and may ask for modifications. Once they approve your request, it will be merged into the main repository

## Learn how to run the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---