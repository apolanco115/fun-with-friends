CREATE SEQUENCE users_id_seq;
CREATE TABLE users (
    id BIGINT DEFAULT NEXTVAL('users_id_seq') UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    game_room_id BIGINT
);

CREATE SEQUENCE game_rooms_id_seq;
CREATE TABLE game_rooms (
    id BIGINT DEFAULT NEXTVAL('game_rooms_id_seq') UNIQUE NOT NULL,
    room_name VARCHAR(255) UNIQUE,
    user_count integer UNIQUE
);

ALTER TABLE user ADD CONSTRAINT fk_game_room_id FOREIGN KEY (game_room_id) REFERENCES game_rooms(id); 

