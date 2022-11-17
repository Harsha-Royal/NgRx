import { post } from "src/models/PostsModel";
import { createAction,props } from "@ngrx/store";

export const ADD_POST_ACTION = '[Posts Page] add post';

export const addPost = createAction(ADD_POST_ACTION,props<{post:post}>())