CREATE TABLE tanaman (
	id_tanaman	serial NOT NULL PRIMARY KEY,
	nama_tanaman	VARCHAR NOT NULL,
	nama_pot	VARCHAR NOT NULL,
	jenis_tanaman	VARCHAR NOT NULL,
	jenis_pot	VARCHAR NOT NULL,
	tanggal_penanaman TIMESTAMP	NOT NULL
);


