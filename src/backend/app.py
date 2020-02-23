from pathlib import Path
import uuid

from flask import Flask, jsonify, abort, request


UPLOAD_DIR = Path(__file__).parent / "upload"

app = Flask(__name__)


def get_file_path(file_id: str) -> Path:
    return (UPLOAD_DIR / file_id).with_suffix(".md")


@app.route("/file/<string:file_id>")
def get_file(file_id: str):
    file_path = get_file_path(file_id)
    if file_path.is_file():
        with file_path.open("r", encoding="utf8") as f:
            content = f.read()
            return jsonify({"content": content})
    return abort(404)


@app.route("/upload", methods=["POST"])
def upload_content_as_file():
    content = request.json.get("content")
    if content is not None:
        file_id = uuid.uuid4().hex
        file_path = get_file_path(file_id)
        with file_path.open("w", encoding="utf8") as f:
            f.write(content)
        return jsonify({"fileId": file_id})
    abort(400)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--serve", action="store_true")
    parser.add_argument("-l", "--listen", default="127.0.0.1")
    parser.add_argument("-p", "--port", type=int, default=5000)

    args = parser.parse_args()
    if args.serve:
        app.run(host=args.listen, port=args.port)
    else:
        parser.print_usage()
