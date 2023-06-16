# Text Editing Website

Welcome to the Text Editing Website! This website provides various functions to help you manipulate and edit your text. Whether you want to convert text to uppercase or lowercase, copy text, clear text, or remove extra spaces, this website has got you covered.

## Features

1. Convert to Uppercase: This function allows you to transform your text to uppercase. It is useful when you want to emphasize certain parts of your text or create headings.

2. Convert to Lowercase: Similar to the previous feature, this function converts your text to lowercase. It can be handy when you want to make your text more casual or ensure consistent capitalization.

3. Copy Text: With this function, you can easily copy your text to the clipboard. This feature is particularly useful when you want to share your text or use it in other applications.

4. Clear Text: If you want to start with a clean slate, the clear text function removes all the content from the text area. It helps you quickly delete the existing text without any hassle.

5. Remove Extra Spaces: This function eliminates extra spaces between words in your text. It ensures that your text appears neat and eliminates any unintended gaps between words.

## How to Use

1. Open the Text Editing Website in your preferred web browser.

2. Type or paste your text into the provided text area.

3. Select the desired function from the available options:
   - To convert your text to uppercase, click on the "Convert to Uppercase" button.
   - To convert your text to lowercase, click on the "Convert to Lowercase" button.
   - To copy your text to the clipboard, click on the "Copy Text" button.
   - To clear the text area, click on the "Clear Text" button.
   - To remove extra spaces from your text, click on the "Remove Extra Spaces" button.

4. View the updated text in the text area or the copied text in your clipboard.

5. Repeat the above steps for any further editing or manipulation needs.

## Development

If you are interested in contributing to the development of this website or have any suggestions or bug reports, please feel free to reach out to us. We appreciate your feedback and would love to make this website even better.

We hope you find the Text Editing Website helpful for your text manipulation needs. Enjoy editing your text effortlessly with our user-friendly interface.

import requests

def get_contributors(owner, repo):
    url = f"https://api.github.com/repos/{owner}/{repo}/contributors"
    response = requests.get(url)
    contributors = response.json()
    return contributors

def generate_contributors_section(contributors):
    section = "## Contributors\n\n"
    for contributor in contributors:
        username = contributor['login']
        avatar_url = contributor['avatar_url']
        profile_url = contributor['html_url']
        section += f"[![{username}]({avatar_url}|width=100px)]({profile_url}) "
    return section

# Specify the owner and repository name
owner = "YourGitHubUsername"
repo = "YourRepositoryName"

# Get the contributors
contributors = get_contributors(owner, repo)

# Generate the contributors section
contributors_section = generate_contributors_section(contributors)

# Read the existing README file
with open("README.md", "r") as readme_file:
    readme_content = readme_file.read()

# Insert the contributors section into the README content
updated_readme = readme_content.replace("<!-- CONTRIBUTORS -->", contributors_section)

# Write the updated README content back to the file
with open("README.md", "w") as readme_file:
    readme_file.write(updated_readme)

