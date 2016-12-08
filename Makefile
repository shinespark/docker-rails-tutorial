up:
	rm -rf ./rails/tmp/
	docker-compose build && docker-compose up

crean:
	rm -rf ./rails/tmp/

db_clean:
	rm -rf ./data/mysql/*
