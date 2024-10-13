import {menu_img, result_page_size} from "./consts.js";
import { ApiService } from "./services/ApiService.js";
import { get_name } from "./functions.js";

export async function change_password(password, success) {
    return false;
}

export async function check_and_rename_user(new_login, success) {
    return false;
}

async function add_tags(tags, success) {
    const response = await ApiService("tags", { headers: {}}, success);
    const all_tags = response.map(value => (value.text));
    const new_tags =  Array.from(tags).filter(tag => !all_tags.includes(tag.toLowerCase()));
    new_tags.forEach(async (tag) => {
        const formData = new FormData();
        formData.append("text", tag.toLowerCase());
        await ApiService("tags/", {
            headers: {},
            method: "POST",
            body: formData,
        }, 
        success);
    })
}

export async function get_results(tags, title) {
    let success = [false];
    await add_tags(tags, success);
    let url;
    if (tags.size === 0) {
        if (!title) {
            url = "publications";
        } else {
            url = `get_publications_with_tags/${title}`;
        }
    } else {
        url = `get_publications_with_tags/${title}/${Array.from(tags).join('/')}`;
    }
    const posts = await ApiService(url, {headers: {}}, success);
    return posts;
}

export const save_file = async (title, file, img, tags, success) => {
    await add_tags(tags, success);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image_url", img);
    formData.append("main_file_url", file);
    Array.from(tags).forEach((tag) => {
        formData.append("other_tags",  tag);
    })
    var result = await ApiService("publications/", {
        headers: {},
        method: "POST",
        body: formData,
    }, 
    success);
    return result;
  };
