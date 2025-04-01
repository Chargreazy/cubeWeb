from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='.')  # Set current directory as the static folder

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')  # Serve index.html

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)  # Serve any other files

if __name__ == '__main__':
    app.run(debug=True)
