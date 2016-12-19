up:
	rm -rfv ./sample_app/tmp/
	docker-compose build && docker-compose up

clean:
	rm -rfv ./sample_app/tmp/

db_migrate:
	docker-compose exec rails rake db:migrate

db_reset:
	docker-compose exec rails rake db:migrate:reset
