import easyocr
reader = easyocr.Reader(['en'], gpu=False)

def extract_text(image_path):
  result = reader.readtext(image_path)
  return result

def main():
  img_path = "assets/test/cvs.jpg"
  ocr_results = extract_text(img_path)
  for text, bbox, confidence in ocr_results:
    print(f"Text: {text}, Bounding Box: {bbox}, Confidence: {confidence}")

if __name__ == "__main__":
  main()