package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()

	// Match everything.
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain; charset=utf-8")
		_, _ = fmt.Fprintln(w, "Hello World")
	})

	addr := ":8080"
	log.Printf("listening on http://127.0.0.1%s (and http://localhost%s)\n", addr, addr)
	log.Fatal(http.ListenAndServe(addr, mux))
}

