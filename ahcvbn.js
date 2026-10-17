外链999!wailian999！

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163cduzajmr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163pipjplqr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ntvenmhz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163jpysmtdy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qmrebmvy.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163cqycxalu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163balgkrwi.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163lweuougu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163vxizklgg.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pxmsuija.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163uuvtbdhm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vuzkcjgx.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jwcrzjpp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tdqfsgei.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163krqsffnp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nhthqokt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163wnthqekt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163itsdjspb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163zatzybrd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xsisgaqa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163esfhpbbo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163soltappx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163qqwlzapr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163azqeamat.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jmrookux.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163tndxppym.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163yrontbyf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zilxplev.html

================================================================================
来源：http://www.xuanzx.com/163vfkadctw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163lyhufomz.html

================================================================================
来源：http://www.xuanzx.com/163jxefgqxh.html

[Q01] 创建表
来源：http://www.sxryk.cn/163bfirxaqu.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wuytljoe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xgwjpili.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zchxjpsh.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ccckswru.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ydtqrxtm.html

);
来源：http://www.aibaodan.cn/163ydhopkkg.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163penszpat.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163hfwovjwr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163artvumqx.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163uoaysjtr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163yrsewcpx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163kvqbizjs.html

);
来源：http://www.xuanzx.com/163svivfsfm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163rwiukllg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163eiirldic.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163bopodwkf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ibzpakoc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163tvkzgxck.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ghdpybmb.html

[Q06] 删除列
来源：http://www.sxryk.cn/163psqjnftx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nerqzqiq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163jhhnegpt.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qfmitwvx.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163gqhbccyl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163paxzhgwm.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163hlnxcfte.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163awratato.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163swgiessm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163balvvdiw.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jrzebiuq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163cnmrbfcp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163rawsdexu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jwiwpicp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ukjwewkr.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163bxkbxotl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rqndzvsr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163otjcrgcm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163dvlhhmfs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163clotepld.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163fitzujxs.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163zskxeozs.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bwmnukan.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qhnvbycw.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163axjbthbv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qnshkgsp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163kewhgarx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ezsqhidd.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163vpmxlwtu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ehsipnqc.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163witjnevp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163sngjcizd.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163kigrtldi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163xisnaeuw.html

[Q22] 排序
来源：http://www.sxryk.cn/163pqwxestm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jithiocz.html

[Q23] 分页
来源：http://www.xuanzx.com/163nqfwjoap.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163gaudlnzs.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lnkzngqf.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163uhyljnyh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163clehgahw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163iqppwnyc.html

[Q26] 计数
来源：http://www.aibaodan.cn/163oysgrrag.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dxixylpb.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163mdvhwuna.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163iwfrygio.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163uhpgolmx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163yawatlqg.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163apbufflm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163qksfqgnv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163kmmdfxoc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tgnpptdy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163joncbcat.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163lzppwivd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nnwwuyrq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ggddqipo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mecsnpuv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163yjrinlty.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163mghzfgvm.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ebededse.html

SELECT * FROM (
来源：http://www.xuanzx.com/163rqwqjbvk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163gussdqsx.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163uzlcmkco.html

[Q35] 内连接
来源：http://www.sxryk.cn/163txvoklpr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wnwjkqmd.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ipkyeqip.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163aikrimfb.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pqplzejf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163udxdjkbn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163zfjhvhgr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163dxjfrnyg.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lbpapyhk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163nggckyfr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163twpunsbl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163bztperug.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163pifuplii.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hdopoibn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ttvaxkqk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163wavnvmet.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163jsvifsct.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163xqttiken.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163motsxwef.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xdppxjtp.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163upmqhvps.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ffhyeeba.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163aymqsieb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163gfejuvlk.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dopnaogj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ngnmjfip.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163bkuzaipu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dccvmavt.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163flvuxxgu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nfmueiyo.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163pnskexmp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163yiveplob.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163shfpkrct.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ognelxay.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163pjynrpfl.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163owzqtiss.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163yamjthte.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163tqksgeub.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xctbklzz.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163etattnrk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163wwmvkmlm.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163rxzcklyl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163zrvrpqax.html

[Q54] 清空表
来源：http://www.sxryk.cn/163zdddmplo.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zxoqnmbu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163alplajqv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163odwueibi.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qzehguwd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kayojcwj.html

[Q57] 行号
来源：http://www.xuanzx.com/163bwzgggvb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163kddcxmgu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163glljpabq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163sovvjwwk.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163oqgqzddk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163tmkioavt.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163wkmrjnes.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163zrzkrnyc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163giwezfuu.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ykawrckw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163bktwrgqp.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163igvclhbq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nchdrkkf.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163bidvtcin.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ckurvcdf.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163jwnplcnl.html

COMMIT;
来源：http://www.xuanzx.com/163ctlkuubl.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mswsoott.html

ROLLBACK;
来源：http://www.sxryk.cn/163axawdtmt.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163dksgpxnf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163cdlloezn.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pxorjmaq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163cvlmhwio.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tjixkyxk.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ngwzscsy.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ffenbwyt.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163aqcspowa.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hdidiofg.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163csxqglhk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tdeoidop.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163zabijwvb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163sakceeeo.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163kjxizejo.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163vyfmdavl.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163nhdftttm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163dsddedlo.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163yiyigqvi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163unceggtn.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163hkeifdam.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163tvcifcai.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ivbfgppz.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163tvoqtnii.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rkqjgdjn.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qfccfexz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163uplspgpd.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163gzaxwlby.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cjfmtwwn.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163aoeqyvfz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163umsddyhq.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163akfbiixt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vhsmahoe.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163wsofgusv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163edgyjqvm.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pcmfssvk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163dwfrohgu.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163eyxncybd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163hkkwrsux.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163okjdcjjr.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163yzcsnewu.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jgiqirjp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163iexmeyla.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163zvafiwgd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fwrgdmta.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ppkzlrfl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mkyxsoow.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163cmpgtwsa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163pbxvfgbs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163mylaufgr.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163bvepdiay.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163hbomvvrs.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163mjwgcmsm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163aoihwymg.html

================================================================================
来源：http://www.sxryk.cn/163nmuaofrg.html

R. Bash 专题
来源：http://www.xuanzx.com/163tdttibaj.html

================================================================================
来源：http://www.sxryk.cn/163zapdwyba.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163fcetljge.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163asktvrmr.html

set -euo pipefail
来源：http://www.sxryk.cn/163otmqkvqr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kwayrcpl.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xxdbmujz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ivmmvzht.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ywtcdwor.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163xxzcjhhe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qblxhxha.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163obfzvjyo.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xoljclwi.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hwhjjfjn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163tcyoeter.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vryfmkta.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hokyipnh.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xqubxtvd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163fhteikry.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163pslkppii.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163kxvavfdl.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163vctsylac.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163doyeafqq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163cwxuqlyy.html

case "$1" in
来源：http://www.aibaodan.cn/163dsfkxgmx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163uihpwvwc.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163vmhzhqxs.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qjhyyvyd.html

esac
来源：http://www.xuanzx.com/163mprflrbv.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163pmomjwai.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163twjwanpg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mpxvvgxk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163oqwiizbf.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fegapubj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163xizdmmfh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qzysoncc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163cpqetlcc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ksxdabuv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163vnrdtabf.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163zjphceao.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ajsobbbe.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163klgzxvzl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163neleewfu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163errnhpvs.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163dttvjpwa.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163uqqacbjf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163tlyfoicv.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163tsaxsnrb.html

echo "${#s}"
来源：http://www.sxryk.cn/163sphvmquf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ovmcopjl.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163vjvhawov.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163khuscmzz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163yvjxjlzw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163smmrlgaj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163kzkmyefz.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163bsifguzx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qydtvado.html

[R26] 命令替换
来源：http://www.xuanzx.com/163dkqdbvaq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163igudkmds.html

[R27] 算术展开
来源：http://www.xuanzx.com/163farssnjy.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xqrykavz.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qmpjfudx.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163qgpoelya.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163muxaktic.html


<!-- 参考信息 -->