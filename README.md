
## Table of contents
* [Project description](#project-description)
* [Technologies](#technologies)

## Project description
An AWS Cloud-based solution that uses services such as S3, Lambda, API
Gateway and  DynamoDB to build a system for automated object-detection tagging
and query handling.
The backend allows end users to upload their images into an S3 bucket. After that, a lambda function is automatically
triggered to  run the Yolo object detection function and detects the list of objects in the image and stores
the list of detected objects along with the URL of the image (S3 URL) in DynamoDB. Futhermore, the end-user can queries images by tags, API endpoint using API Gateway to search tagged images and return links.

## Technologies
Project is created with:
 * Python 3.6
 * OpenCV
 * YOLO tiny
 
## AWS components
  1) S3
  2) Lambda 
  3) API Gateway 
  4) DynamoDB
