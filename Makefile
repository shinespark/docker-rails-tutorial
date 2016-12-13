up:
	rm -rf ./sample_app/tmp/
	docker-compose build && docker-compose up

clean:
	rm -rf ./sample_app/tmp/

db_clean:
	rm -rf ./data/mysql/*
