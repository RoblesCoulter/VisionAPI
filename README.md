# VisionAPI

This is a quick implementation of the [ Google Cloud Vision API ](https://cloud.google.com/vision/) using Node.js and Express.js

## Quickstart

### Before you begin

1.  Select or create a Cloud Platform project. [Go to the projects page](https://console.cloud.google.com/cloud-resource-manager)

2.  Enable the Google Cloud Vision API API. [Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com)

3.  [Set up authentication with a service account](https://cloud.google.com/docs/authentication/getting-started) so you can access the API from your local workstation. You should be able to get a JSON file containing the key data. You can find an examples in [`config/vision-keyfile.json.example`](https://github.com/RoblesCoulter/VisionAPI/blob/master/config/vision-keyfile.json.example)

4. Once you have the Auth File you can add it to the `config` folder

### Installing the project

1. Build the Docker image with the following command
    
    `docker build --rm --force-rm -t <username>/node-vision-api:1.0.0 .`

2. Start the Docker container

    `docker run -p 8080:8080 --rm -it -w /app <username>/node-vision-api:1.0.0`

### Routes

Some basic routes to extract features from the image.

1. `/labels` Identifies labels from the image

    Result
        
    ```json
    ["clothing","t shirt","shoulder","sleeve","outerwear","professional","top","product","socialite","joint"]```

2. `/faces` Provides facial detection and provides sentiment analysis on each face

   Result

   ```json
   {"1": {"joy":"POSSIBLE","anger":"VERY_UNLIKELY","sorrow":"VERY_UNLIKELY","surprise":"VERY_UNLIKELY"},"2": {"joy":"VERY_LIKELY","anger":"VERY_UNLIKELY","sorrow":"VERY_UNLIKELY","surprise":"VERY_UNLIKELY"}}```

3. `/colors` Extracts dominant colors from the image

    Result

    ```json
    [{"color": {"red":249,"green":30,"blue":135,"alpha":null},"score":0.2696053385734558,"pixelFraction":0.09240055084228516},{"color":{"red":242,"green":242,"blue":243,"alpha":null},"score":0.13387846946716309,"pixelFraction":0.3712482750415802},{"color":{"red":23,"green":23,"blue":41,"alpha":null},"score":0.07050492614507675,"pixelFraction":0.06255143880844116}]
    ```

4. `/cropHints` Returns the coordinates of the dominant object or face in the image.

    Result

    ```json
    {"1":[{"x":0,"y":0},{"x":599,"y":0},{"x":599,"y":599},{"x":0,"y":599}]}
    ```
### Notes

For demonstration purposes we are using an example image in the `images/` folder called `example.png`. This can be changed by receiving an image from the HTTP Request and encoding it in a **Base 64** Format