// Add Post

export function addPost (title, body) {
  return {
    type: 'ADD_POST',
    title,
    body
  }
}

// Edit Post 

export function editPost (id, title, body) {
  return {
    type: 'EDIT_POST',
    id,
    title,
    body
  }
}

// Delete Post 

export function deletePost (id) {
  return {
    type: 'DELETE_POST',
    id
  }
}

// Add Comment

export function addComment (postId, body) {
  return {
    type: 'ADD_COMMENT',
    postId,
    body
  }
}
