import { environments } from "eslint-plugin-prettier";
import { result_page_size } from "./consts";
import { change_password, check_and_rename_user, save_file, get_results} from "./APIfunctions";

export async function find_results(title, tags, set_results) {
    var results = await get_results(tags, title);
    set_results(results);
}
  
export function add_tags(new_tags, tags, set_tags) {
    const combined_tags = new Set(tags);
    new_tags.forEach(tag => {
        combined_tags.add(tag);
    });
    set_tags(combined_tags);
}

export function remove_tag(tag, tags, set_tags) {
    const new_tags = new Set(tags);
    new_tags.delete(tag);
    set_tags(new_tags);
}

export function next_result(index, set_index, max_size) {
    if (index + result_page_size < max_size) {
        set_index(index + result_page_size);
    }
}
export function prev_result(index, set_index) {
    if (index >= result_page_size) {
        set_index(index - result_page_size);
    }
}

export function get_name() {
    return window.localStorage.getItem("username");
}

export function handle_file(event, set_file) {
    set_file(event.target.files[0]);
}

export async function handle_saving_file(title, file, image, tags, set_text, set_is_modal_opened) {
    let success = [false];
    var result = await save_file(title, file, image, tags, success);
    if (success[0]) {
        set_text("Файл успешно сохранён");
    } else {
        set_text("Ошибка сохранения файла");
    }
    set_is_modal_opened(true);
}

export function logout() {
    window.localStorage.removeItem("access");
    window.localStorage.removeItem("refresh");
    window.location.href = "/";
    console.log(window.localStorage.getItem("access"));
}

export async function handle_change_password(password, set_text, set_is_modal_opened) {
    let success = [false];
    await change_password(password, success);
    if (success[0]) {
        set_text("Пароль успешно изменён")
    } else {
        set_text("Ошибка изменения пароля")
    }
    set_is_modal_opened(true);
}

export async function handle_change_login(login, set_text, set_is_modal_opened) {
    let success = [false];
    await check_and_rename_user(login, success);
    if (success[0]) {
        set_text("Логин успешно изменён");
    } else {
        set_text("Ошибка изменения логина");
    }
     set_is_modal_opened(true);
}

export function download_file(file_url, file_name) {
    const link = document.createElement('a');
    link.href = file_url;
    link.download = file_name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}