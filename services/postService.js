import { supabase } from "../lib/supabase";
import { upLoadFile } from "./imageService";

export const createOrUpdatePost = async (post) => {
    try {
        if(post.file && typeof post.file == 'object'){
            let isImage = post?.file?.type == 'image';
            let folderName = isImage? 'postImages' : 'postVideos';
            let fileResult = await upLoadFile(folderName, post?.file?.uri, isImage);
            if(fileResult.success){
                post.file = fileResult.data;
            } else {
                return fileResult;
            }
        }

        const {data, error} = await supabase.from('posts').upsert(post).select().single();

        if(error){
            console.log('createPost error', error);
            return { success: false, msg: 'Could not create your post' };
        }

        return { success: true, data: data};

    } catch (error) {
        console.log('createPost error', error);
        return { success: false, msg: 'Could not create your post' };
    }
}