import { post } from "src/models/PostsModel";
import { createAction,props } from "@ngrx/store";

export const ADD_POST_ACTION = '[Posts Page] add post';

export const UPDATE_POST_ACTION = '[Posts Page] update post';
export const DELETE_POST_ACTION = '[Posts Page] delete post';

export const addPost = createAction(ADD_POST_ACTION,props<{post:post}>())

export const updatePost = createAction(UPDATE_POST_ACTION,props<{post:post}>())

export const deletePost = createAction(DELETE_POST_ACTION,props<{id : string}>())

