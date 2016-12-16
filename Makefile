up:
	rm -rfv ./sample_app/tmp/
	docker-compose build && docker-compose up

clean:
	rm -rfv ./sample_app/tmp/

db_clean:
	rm -rfv ./data/mysql/*
