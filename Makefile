run:
	go run main.go

fmt:
	go fmt ./...

# Simulación de Linter para JS sin Node
lint:
	@echo "Revisando inyecciones XSS..."
	@grep -n "innerHTML" js/*.js || echo "✅ No se detectó innerHTML"

build-linux:
	GOOS=linux GOARCH=amd64 go build -o horror_server_linux main.go
