import requests
import re
import os.path
from bs4 import BeautifulSoup
from pprint import pprint


def download_from_url_list(url_list, base_directory="C:\\Users\\Lazarus\\OneDrive\\Chess"):
    success = 0
    fail = 0
    for page_url in url_list:
        resp = requests.get(page_url)
        m = re.search('https:.*?mp4', resp.text)
        if m is None:
            print(f'No mp4 url found on page "{page_url}"')
        vid_url = m.group(0)
        filename = vid_url.split('/')[-1]
        course_folder = page_url.split('/')[-2]
        directory = os.path.join(base_directory, course_folder)
        full_path = os.path.join(base_directory, course_folder, filename)
        if not os.path.exists(directory):
            os.makedirs(directory)
        try:
            print(f"Downloading video from {vid_url}...")
            vid = requests.get(vid_url)
            try:
                open(full_path, 'wb').write(vid.content)
                success += 1
            except Exception:
                print(f"Error when saving file downloaded from {vid_url}")
                print(Exception)
                fail += 1
        except Exception:
            print(f"Error when downloading from {vid_url}")
            print(Exception)
            fail += 1
    print(f"Attempted to download {len(url_list)} files from course [{course_url.split('/')[-1]}]. Successful: {success}; Failed: {fail}")


if __name__ == '__main__':
    path_input = ""
    while not os.path.exists(path_input):
        print("Set a directory where you want all files to be saved: ")
        path_input = os.path.join(input())
    print(f"Got it. Base directory is {path_input}")
    while True:
        print("Give me a Chess.com course URL or [Q] to quit: ")
        course_url = input()
        if course_url.upper() == 'Q':
            break
        m = requests.get(course_url)
        soup = BeautifulSoup(m.text, 'html.parser')
        title_divs = soup.find_all('h3', class_="lesson-title")
        url_list = []
        for div in title_divs:
            url = div.find('a')['href']
            url_list.append(url)
        print("Video URLs found on this page: ")
        pprint(url_list)
        value = input("Press Enter to start downloading...")
        download_from_url_list(url_list, base_directory=path_input)