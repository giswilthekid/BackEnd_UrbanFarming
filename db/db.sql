CREATE TABLE pengguna (
	id_pengguna SERIAL PRIMARY KEY,
	nama_pengguna VARCHAR,
	email VARCHAR,
	password VARCHAR,
	role VARCHAR,
	no_telepon INTEGER,
	created_at TIMESTAMP,
);

CREATE TABLE tanaman (
	id_tanaman	SERIAL PRIMARY KEY,
	id_pengguna INTEGER	
	nama_tanaman	VARCHAR,
	nama_pot	VARCHAR,
	deskripsi	TEXT,
	tanggal_penanaman TIMESTAMP,
	CONSTRAINT user_fkey FOREIGN KEY (id_user)
    REFERENCES user (id_user) MATCH SIMPLE
    ON UPDATE NO ACTION ON DELETE NO ACTION
);



CREATE TABLE data_sensor (
	id_sensor SERIAL PRIMARY KEY,
	id_tanaman INTEGER,	
	suhu INTEGER,
	kelembaban_tanah INTEGER,
	intensitas_cahaya INTEGER,
	waktu TIMESTAMP,
	CONSTRAINT tanaman_fkey FOREIGN KEY (id_tanaman)
    REFERENCES tanaman (id_tanaman) MATCH SIMPLE
    ON UPDATE NO ACTION ON DELETE NO ACTION
);