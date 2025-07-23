use std::cell::RefCell;
use ic_cdk::query;
use ic_cdk::update;
use ic_cdk_macros::{query as ic_query, update as ic_update};

// Thread-local storage for name
thread_local! {
    static NAME: RefCell<String> = RefCell::new(String::from("World"));
}

// Exported query function (greet)
#[ic_query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

// Exported update function (set_name)
#[ic_update]
fn set_name(name: String) {
    NAME.with(|n| *n.borrow_mut() = name);
}

// Exported query function (get_name)
#[ic_query]
fn get_name() -> String {
    NAME.with(|n| n.borrow().clone())
}

