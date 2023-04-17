import Sequelize from 'sequelize';
import db from '../config/database.js';

async function getViewHistoryData(userID) {
  const currentDate = new Date().toISOString().slice(0, 10);

  const query = `
    SELECT i.*, b.*, t.*
    FROM item i
    INNER JOIN bid b ON i.itemID = b.itemID
    LEFT JOIN transaction t ON b.bidID = t.bidID
    WHERE b.username = ? AND t.transactionID IS NOT NULL
    ORDER BY b.bidEndDate DESC
  `;

  const data = await db.query(query, {
    replacements: [userID],
    type: Sequelize.QueryTypes.SELECT,
  });

  return data;
}

async function getCurrentBidsData(userID) {
  const currentDate = new Date().toISOString().slice(0, 10);

  const query = `
    SELECT i.*, b.*
    FROM item i
    INNER JOIN bid b ON i.itemID = b.itemID
    WHERE b.username = ? AND b.bidEndDate >= ?
    ORDER BY b.bidEndDate DESC
  `;

  const data = await db.query(query, {
    replacements: [userID, currentDate],
    type: Sequelize.QueryTypes.SELECT,
  });

  return data;
}

export { getViewHistoryData, getCurrentBidsData };
