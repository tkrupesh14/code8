// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Learn from "../../models/Learn"
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if(req.method === 'GET'){
        let courses = await Learn.find()
        res.status(200).json({ courses })
    }else{
        res.status(400).json({success: false})
    }
      }
      
export default connectDB(handler);

  