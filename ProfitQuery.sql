SELECT item.category, transaction.transactDate, COUNT(transaction.transactionID), SUM(bid.bidPrice)
FROM item,bid,transaction
WHERE bid.bidID = transaction.bidID AND bid.itemID = item.itemID
GROUP BY item.category, transaction.transactDate;

category,date,profit
Electronics,2022-12-02,153
Electronics,2022-12-05,944.25
Electronics,2022-12-18,127.5
Electronics,2022-12-20,1288.5
Hobbies,2022-12-02,76.5
Hobbies,2022-12-05,230   
Hobbies,2022-12-18,102
Hobbies,2022-12-20,326.75
Home Improvement,2022-12-02,25.5  
Home Improvement,2022-12-05,115  
Home Improvement,2022-12-18,25.5
Home Improvement,2022-12-20,152.25
Men's Clothing,2022-11-20,37    
Men's Clothing,2022-12-01,37   
Men's Clothing,2022-12-02,139node 
Men's Clothing,2022-12-05,383
Men's Clothing,2022-12-18,76.5  
Men's Clothing,2022-12-20,463.75
Women's Clothing,2022-12-05,220.5
Women's Clothing,2022-12-18,105.5 
Women's Clothing,2022-12-20,282.25
