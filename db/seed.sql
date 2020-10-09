CREATE TABLE helo_users (
user_id SERIAL PRIMARY KEY,
username varchar(20),
password varchar(250),
profile_pic text
)

CREATE TABLE posts (
post_id SERIAL PRIMARY KEY,
title varchar(45),
img text,
content text,
author_id int references helo_users(user_id)
)