import axios from "axios"
import crypto from 'crypto'
import fs from 'fs'
import formidable from "formidable"
import { NextApiRequest, NextApiResponse } from "next"

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseData = (req: any) => {
  const form = formidable({ multiples: true });

  const p = new Promise((resolve, reject) => {
    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) {
        reject("error");
      }
      resolve({ fields, files });
    });
  });

  return p
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const formData: any = await parseData(req)
  const credentials = JSON.parse(formData.fields.credentials)
  const file = JSON.parse(JSON.stringify(formData.files.image))[0]
  
  axios.post(
    credentials.apiUrl + '/b2api/v3/b2_get_upload_url',
    {
        bucketId: '5f5385ef0ecc60c38ab5071a'
    },
    { headers: { Authorization: credentials.authorizationToken } })
    .then(function (response) {
        var filePath = file.filepath
        var fileSize = file.size
        var uploadUrl = response.data.uploadUrl
    	  var uploadAuthorizationToken = response.data.authorizationToken
        var source = fs.readFileSync(filePath)
        var fileName = file.newFilename + '.' + file.mimetype.split('/')[1]

        var sha1 = crypto.createHash('sha1').update(source).digest("hex");
        console.log(uploadUrl)
        axios.post(
            uploadUrl,
            source,
            {
                headers: {
                    Authorization: uploadAuthorizationToken,
                    "X-Bz-File-Name": fileName,
                    "Content-Type": "b2/x-auto",
                    "Content-Length": Math.floor(fileSize/1024),
                    "X-Bz-Content-Sha1": sha1,
                    "X-Bz-Info-Author": "unknown"
                }
            }
        ).then(function (response) {
            res.status(200).json({fileName: response.data.fileName, fileId: response.data.fileId }); // successful response
        }).catch(function (err) {
            res.status(500).json(err); // an error occurred
        });

    })
    .catch(function (err) {
      res.status(500).json(err); // an error occurred
    });
}