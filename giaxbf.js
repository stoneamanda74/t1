外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kfwrepan.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163asmawszq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lwzelsyl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163guhvebck.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ovkoeovh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xsmkyajz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qtugxypt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163zmezdaho.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163lgiuwfpn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163dqdueudh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163wqctuzzr.html

Ruby: a == b
来源：http://www.sxryk.cn/163kiogirtu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163yyrgutrc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163etoutxab.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163jytyuonk.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163pedvjsuv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vslozfrv.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jemhebzw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163avgrfygy.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ptibmoeu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fpynwnfm.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163uqzydsoz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163cfadykfh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rlkhttcy.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163wzgaydxe.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pntsreig.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xvbydizz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163tlrtcvzs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163blydivdc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163xmjertdb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163zdqszlhg.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163eqxcivhp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ptrmwttc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163cocywfxc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ejwgjxpf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xcxgiwhr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pdaxecqi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163rprqvhuf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163qsqfkdsj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ggjmhbcx.html

================================================================================
来源：http://www.xuanzx.com/163ufbqmhvi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163pgwcvdxc.html

================================================================================
来源：http://www.sxryk.cn/163tmxttwki.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163rrwuiogi.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163esdirzfx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ugdwirnr.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163fiidombv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ybpdgldo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163nwjkyncs.html

);
来源：http://www.aibaodan.cn/163zgpmywyk.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163aafubend.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163xqjaxwkh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sipysiqa.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163bpkafiqt.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163bvzlffri.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163pdcfgeyr.html

);
来源：http://www.sxryk.cn/163sxoaiasg.html

[Q03] 增加列
来源：http://www.sxryk.cn/163vdliilqd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163eomxkjmq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jgjycwof.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zfwnygjn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ekiyrvsw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163trgtqaqc.html

[Q06] 删除列
来源：http://www.sxryk.cn/163tixgnhbv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163wsbnubgs.html

[Q07] 删除表
来源：http://www.xuanzx.com/163zpzxusfe.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ykowjane.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163iftomdgy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163flusczuq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163xvhsafeg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163hlytwbdl.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163nxznhfzm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163wooizlqx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163jxrvivzq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163cnkihsoj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163rkfljqdv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163wfirghnt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163vxttsjxp.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bnkotbzb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163syarvnbw.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163jatspigc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163bnrkyklt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163hfhlqdfh.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163vgxzdrok.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ascfxybd.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ukymjwlg.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163noscpcyd.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163fdkgdfct.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163iinvcklz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163urkfytru.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ntfnhhxa.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vlooppeo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163tcufscmg.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163acdqfdea.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163axgcnkwr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163aplecgxl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163icaxvvjm.html

[Q22] 排序
来源：http://www.xuanzx.com/163fdmyjhis.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163swhponlj.html

[Q23] 分页
来源：http://www.xuanzx.com/163bexatzmv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kmvckudo.html

[Q24] 去重
来源：http://www.xuanzx.com/163cwrhuwin.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163zkgvhlhq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zdwyalfi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ojureans.html

[Q26] 计数
来源：http://www.xuanzx.com/163lswgrslo.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163qhocfnqm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163nmpxtain.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163pcmnnsqg.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163gqrobylp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163hykldugs.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163jpfkxdpf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163eqcvgutu.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163olpdeoqd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mzhqruud.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163lqprcato.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163sqixrtjf.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zdjxdlpj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hxlrsopr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163knnolpto.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rxszugtb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qxiayrpb.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163kpqiktcf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163cqzlefsk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163wcuntmgz.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163garzotca.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163icdyhqxq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zdxiifik.html

[Q36] 左连接
来源：http://www.xuanzx.com/163liqkysli.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163efhgcfos.html

[Q37] 右连接
来源：http://www.xuanzx.com/163xcefpmxp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163teiekhzr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163lhqsclwt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163xlvwtfak.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163dtufedhf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163qvuvpnsv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163gejoqnwh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163cdpmkfzq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163bzwiafnp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163zxamyisb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163yxoogqdh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xytlxrek.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163cqnwxqzc.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163lerxtowa.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163uabcqwqy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163mnfjxbzg.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ijrfrzsx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gqtyfhct.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ofemxyat.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ofywcafg.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163powzwtqj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163odenvbkz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163apvlpruz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163aqmfhcvh.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zzjdxotq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163kndjugnw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163lcacwnnu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163jwdcikvk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163jehmzhol.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163fuzrrols.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163tdjxxjpk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163brpiikhp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163uglhnmfn.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pcsbucxh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163msmkljmz.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163jyfukumh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ufezufkh.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163tpnwcpct.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uymjmpkq.html

[Q54] 清空表
来源：http://www.xuanzx.com/163paractme.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163dhcgjtdf.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163jinlwtms.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163qfpwmdnz.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163mviebzqr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163jjrjbzuf.html

[Q57] 行号
来源：http://www.xuanzx.com/163gwwpqxmu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163otvmgpug.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xvwxnfvb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163camhodyt.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163zkmbhqtj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163rnfwytqk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163owmiplex.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163pxusbuty.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163yxzlyvch.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163cevccinm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163yqqhgjtz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163rhvjaiqa.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xkmrjrvo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163llysltpc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163txsagtlt.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xbtitzns.html

COMMIT;
来源：http://www.aibaodan.cn/163azvolfxc.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ebmdvdwo.html

ROLLBACK;
来源：http://www.xuanzx.com/163aqebeepi.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163egbfmohx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163xuzkcueg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163jyhllcin.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163tsjrsdlf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163lpneqbag.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163kzdijyby.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ohjuabwf.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163cbigyiln.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163qzyviqii.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xrljmnlc.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163txvohqow.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163igsbpatu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163szdfmlxn.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rseveebq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jgbeeiww.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163kdvchvlo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ddqxuuvf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163syucpall.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ajxrhquy.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163wloynrad.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163sshlmyfu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163royljeoq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163xfutaezy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163sjkpozcu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dkyarbre.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ozpfjpxn.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163qnzwkqwi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163oadmhtad.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163siznfcsi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kqsymvcq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163urgepydm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163muqtncly.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hjipcaje.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163sttizbwe.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ajzkfdww.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ieasonaj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163rsignixm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xeismgwi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163opzircvj.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163kophdduv.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163grtlwzbc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ksfpasrm.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cbrmkpom.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163vvaohngj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wnaildww.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163guotztrf.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zoxwscec.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163raswyrco.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163idlzzlwc.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163yswnbafb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163looslrbh.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163kvebueip.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163lyfkqblo.html

================================================================================
来源：http://www.aibaodan.cn/163tmtfvcyb.html

R. Bash 专题
来源：http://www.aibaodan.cn/163xryqjgge.html

================================================================================
来源：http://www.aibaodan.cn/163ntyqkoea.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163mgdcufhb.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163lankjsng.html

set -euo pipefail
来源：http://www.sxryk.cn/163npxuodtu.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163yqmcvypb.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163bfhhmfzn.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tqzsuvqc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163uyqebpfl.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xvhbsivs.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ptoaipzq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163rbrxvzqk.html

name="${1:-default}"
来源：http://www.sxryk.cn/163efnoxabo.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163pilscvnq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163kwfljmkk.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wqoenpzj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wsddvupt.html

[R08] 数值比较
来源：http://www.xuanzx.com/163iatmsecx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xsijnopa.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163snddxtsx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163kvjbosjc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ckjzqcug.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163smjygyoq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163pprlbqon.html

case "$1" in
来源：http://www.aibaodan.cn/163taxcgzif.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hlvzohpx.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163fuxohhuh.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ebwmzffv.html

esac
来源：http://www.sxryk.cn/163olrghwjd.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wjyhprkw.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163lqwlgkjn.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163uvzedzwy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vjokvghq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mvvbvoyc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163cyiozgky.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163cshvxupx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163yyxesjpr.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xzydpxne.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ukdedner.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bqbbopjh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ugckvtof.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163rcvoiyfx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163bcdumqju.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163uqcgaztu.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cxjanmvq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ceulqkei.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rphkybey.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hxqbutgr.html

echo "${#s}"
来源：http://www.sxryk.cn/163ovemcgiy.html

[R22] 截取子串
来源：http://www.sxryk.cn/163bppvcvia.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163sehlbpee.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163mmuxrynf.html


<!-- 参考信息 -->