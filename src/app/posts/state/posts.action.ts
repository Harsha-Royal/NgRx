import { post } from "src/models/PostsModel";
import { createAction,props } from "@ngrx/store";

export const ADD_POST_ACTION = '[Posts Page] add post';

export const UPDATE_POST_ACTION = '[Posts Page] update post';

export const addPost = createAction(ADD_POST_ACTION,props<{post:post}>())


export const updatePost = createAction(UPDATE_POST_ACTION,props<{post:post}>())


