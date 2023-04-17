import { getViewHistoryData, getCurrentBidsData } from '../model/viewHistoryModel.js';

export const getViewHistory = async (req, res) => {
    console.log('getViewHistory called with username:', req.params.username);
    try {
      const data = await getViewHistoryData(req.params.username);
      res.status(200).json(data);
    } catch (error) {
      console.error('Error in getViewHistory:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  export const getCurrentBids = async (req, res) => {
    console.log('getCurrentBids called with username:', req.params.username);
    try {
      const data = await getCurrentBidsData(req.params.username);
      res.status(200).json(data);
    } catch (error) {
      console.error('Error in getCurrentBids:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
