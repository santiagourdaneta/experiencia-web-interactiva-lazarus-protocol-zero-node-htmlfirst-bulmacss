package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	mux := http.NewServeMux()
	fs := http.FileServer(http.Dir("./"))

	// Middleware de seguridad básico
	secureFs := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-XSS-Protection", "1; mode=block")
		w.Header().Set("X-Frame-Options", "SAMEORIGIN")
		fmt.Printf("[%s] %s %s\n", time.Now().Format("15:04:05"), r.Method, r.URL.Path)
		fs.ServeHTTP(w, r)
	})

	mux.Handle("/", secureFs)

	fmt.Println("💀 Servidor de Horror ejecutándose en http://localhost:8080")
	if err := http.ListenAndServe(":8080", mux); err != nil {
		fmt.Printf("Error: %v\n", err)
	}
}
