'use strict';

module.exports = {
  getList(db) {
    let sql = `select i.an, i.hn, i.regdate, i.regtime, p.pname, p.fname, p.lname,
      w.name as ward_name, i.prediag
      from ipt as i 
      inner join patient as p on p.hn=i.hn
      left join ward as w on w.ward=i.ward
      where i.dchdate is null
      order by i.an desc
      limit 10`;
    
    return db.raw(sql, []);
  },
  getDrug(db, an) {
    let sql = `select o.icode, o.qty, o.unitprice, o.cost, o.sum_price, d.name as drug_name, du.name1, du.name2, du.name3 
      from opitemrece as o
      inner join drugitems as d on d.icode=o.icode
      left join drugusage as du on du.code=o.drugusage
      where o.an=?`;
    
    return db.raw(sql, [an]);
  }
}