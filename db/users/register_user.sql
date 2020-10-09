INSERT INTO helo_users
(username, password, profile_pic)
VALUES
(${username}, ${hash}, ${profilePic})

returning user_id, username, profile_pic;