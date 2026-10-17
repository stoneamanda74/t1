外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163wxpuhupx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163jhcaenyh.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163hpkobuzm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163fvltauiq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hmmqgpcg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xzszlvsu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kiipthlf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163coyohwhk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qrolqjlr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163jycefdpr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163phruhxml.html

Ruby: a == b
来源：http://www.sxryk.cn/163brirahxh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163rlmigxdz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163yfxergdq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163mrzuuyhj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163trbanyqq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163honzsqge.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163inkjmtzv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163hqaovpmf.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163frqocaqm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yeehbaou.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163oihyhfqa.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zvmftrad.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163puhndxnx.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163tssirtts.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ltvmuwzk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sjobgqra.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163pgecpxql.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ljrfbfae.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163eunnqpwt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163yrveiiun.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ffkgyvlv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163edjnfhsm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163eilnsdba.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mytuyngr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163isirdikq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zxwouxfg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163pnlijgjo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163vffrvseb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163zkhalwll.html

================================================================================
来源：http://www.aibaodan.cn/163dznlevnc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163bnymlloc.html

================================================================================
来源：http://www.xuanzx.com/163oycsuggl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163gpspdscj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163sojrvmcs.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wgzmxdkd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163biniqofj.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163auursaut.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163chyajspk.html

);
来源：http://www.xuanzx.com/163pchgnurf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163rrdksege.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vcrgvlgy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163peqfynyf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163mxbhlvtu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163gdxiqxdc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gcxdtpwb.html

);
来源：http://www.sxryk.cn/163xkowflvn.html

[Q03] 增加列
来源：http://www.xuanzx.com/163zcksopub.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163opwdhkyp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zafcjppf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163mlppdeqy.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163sywxiwqm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ekukhany.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vzpixsrp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163csowxkcm.html

[Q07] 删除表
来源：http://www.sxryk.cn/163cyfldxlr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163lrsdmuvp.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163djctjhec.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163snipylhs.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163twxutslc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163zouwtaum.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163uasdnrhu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qdoeaiti.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163sylrbaol.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ecphblxw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163nctumwbj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163iqlqiwnw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163akpfojom.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163eubnobaj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163urtcdxze.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163fxoyptvl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qujsogua.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ldbelvpi.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163tynemzne.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163zemkrved.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163wodciceb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163fiyzhatd.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zcjdwfro.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163crqoapta.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kekqqwrg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163lynhkzmp.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mcxtewbt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163awlfivbk.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163yugvtkmr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jxzosoyn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163xiwwvsev.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163hifbbpyt.html

[Q22] 排序
来源：http://www.aibaodan.cn/163iaatsodn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163urlubhpp.html

[Q23] 分页
来源：http://www.sxryk.cn/163mkkrxylr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163dcizxnwh.html

[Q24] 去重
来源：http://www.aibaodan.cn/163gtxifecu.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163yaqwqksc.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163amgyttem.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163faovmjhq.html

[Q26] 计数
来源：http://www.aibaodan.cn/163vbszlgwa.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163dsnjxuzo.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wjzspmdu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mcmprmqi.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163pkwungjk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163zjrppinf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ocrriibj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163afkcwnae.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vmpwzdjz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163blycmlho.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163zbkalxzm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ppxgcehk.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163bqecyceo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cjlpjaiq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163siatjqdc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163waxwrlfs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163gsqazvfo.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163njugkduz.html

SELECT * FROM (
来源：http://www.xuanzx.com/163gnlglwkf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163mytttopl.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163fdiznebx.html

[Q35] 内连接
来源：http://www.xuanzx.com/163rwprxidp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pqmoohwy.html

[Q36] 左连接
来源：http://www.xuanzx.com/163luhovlxn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jdhxfebx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163kxzfktlp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163smsmgarb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163dkzntzof.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163epcawcql.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wbdgeefw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163sfyognpp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ndwyuaek.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vpjnkrss.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163olsbxpdl.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vzcleugw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163qiabdrbx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163cfcwirfh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163percdnwt.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qzjauwuq.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163lmwfuqvd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163qnwowzro.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zwqxbrrw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163dfnzdugf.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163josgakll.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dhkkgyic.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lsrpnupn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163uqvsrgbx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xhhfpziq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rfqspsju.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163cequghug.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163sxkluscx.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163musdnwcc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163zyvspjjh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163uocqcfdr.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jtonfcyw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163djbuvuie.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163engxjxbl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163webitnjr.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163uztnlcub.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ecemgbmt.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163svqnzzko.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163wnixxnmv.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163lwzdtqxk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163lxojnapa.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163eqwqpwpp.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163tqpxoniw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163xvifrvuq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163rlxeffda.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163qemhrhop.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ueyepcfq.html

[Q57] 行号
来源：http://www.aibaodan.cn/163jdlyyfln.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pxfchtwm.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163tlypwnns.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ikaedotp.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163fvwfppuf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163volktymh.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163zwhfnbcm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163exjqtrki.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jrwwwxbi.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163fsyfnbma.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163bngyybxo.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163qehhogbn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ruokvezz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163gtjigwlb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163qlvabzag.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ckqbqhvk.html

COMMIT;
来源：http://www.aibaodan.cn/163dwbqxkqw.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163sxlcbhud.html

ROLLBACK;
来源：http://www.sxryk.cn/163frheeasg.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ncodpcch.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ujibdqad.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163hhvnrvuu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163tyudcyen.html

[Q68] 保存点
来源：http://www.xuanzx.com/163prpigcns.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ekypqnbo.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163pkymhmds.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163xljngvyv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163phfyylmk.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163aouodris.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163epblqzoc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163bezyzsyz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xinxmaoq.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163lawjidhq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163yfzvotuj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163cojselfr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163jnzhnxtd.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163uerttvzp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163mmxvftmf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bywexdli.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163hhssojwh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163wbjkfleu.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163jtuyxqhn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163myxyxtub.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163udqlqtji.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mdzzgnzv.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163lxtcgays.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rfobzxdf.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163fgvplmdt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163dgwxdcud.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163vcalfdwr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163yvttclfl.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163uggkhbib.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163oxqkvlts.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163qlojrzly.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163dculyrlo.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hcyzukae.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lwafcwpu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163fwjlobpj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163afuwxdet.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163umzrvjxd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163lciytytp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ojahidzk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163eiojumqj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163uugztfom.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163rwscsqtc.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163upjvgmci.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163lzxmycdg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163wkayvpob.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163advytmze.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jtmknufw.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163hnstnupk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rrdjwbam.html

================================================================================
来源：http://www.aibaodan.cn/163izzjkwew.html

R. Bash 专题
来源：http://www.xuanzx.com/163whbbmzqh.html

================================================================================
来源：http://www.xuanzx.com/163kmhckwvt.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163tnpwtyqd.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ppwcrnqi.html

set -euo pipefail
来源：http://www.xuanzx.com/163pglztyvy.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163xtggmhre.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163abkfsver.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ibthcygu.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163avlczpjq.html

[R04] 位置参数
来源：http://www.sxryk.cn/163bpxggnvq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163bjmbvnbe.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ftzlcsdw.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zjfjmcml.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163bvwmdqks.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fvcsomoh.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163qxgtayjy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163iihjjkmt.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ichibbog.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163bansmqgy.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163viptafgz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163sfainqhc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163hgabfalh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kqgiuztl.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jrmfuuhy.html

case "$1" in
来源：http://www.xuanzx.com/163wfkdkdmv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163gqbjfipu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163frppgedb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163wltkviwq.html

esac
来源：http://www.aibaodan.cn/163qkvubwaa.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163uzgkworx.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163fekmsloz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163amfkewqe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163aahtaywo.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163rqqjtwpq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163vixxlwju.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163xqxzxkln.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163eotwuzig.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kjcqzuln.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163subpwykm.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163spzmtktg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vbpabnqy.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163xamdjijv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163uktyfagk.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163slnajjtn.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163hyjkceod.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ofvxjlxy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163aqyflame.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163anujfvay.html

echo "${#s}"
来源：http://www.xuanzx.com/163oczenzap.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ilioeyye.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qfufdkbp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163enakmkos.html


<!-- 参考信息 -->