外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163lzpamzqv.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163fqroertj.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163cscgtngf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163acjqasen.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wxasxypf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163iduljbdg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nxrjryuq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163hnyvdaeb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cqmtnyie.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rfewibfk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jwuhxvkv.html

Ruby: a == b
来源：http://www.xuanzx.com/163cdjugmxm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ydwywwcj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163quwzspcx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163plzebhxg.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163mstzeici.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xvrwahpw.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163sxmkkkcr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163azqotaln.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163zlvnwbyu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163bpuhoirs.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ksapubht.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163fjzqqpnf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163kxrlctmj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163bghgqjdw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mdnyszxy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rkpilpzz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163aesxrklc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xrzsbjrh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163jhzehvhu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jfgbalka.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163myhmlusu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163pgbowxbw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163uijrkilg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163uvxbhhrn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hormejgd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163fbiodcxp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163xqiozpnc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163yfufkrcz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163xglgvvta.html

================================================================================
来源：http://www.aibaodan.cn/163pykvtxrb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163vpwvfoct.html

================================================================================
来源：http://www.sxryk.cn/163futztxjy.html

[Q01] 创建表
来源：http://www.sxryk.cn/163vkjexjnw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163kxilgmsh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nbaspzlf.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163irfmyrzx.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163axatinpb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163htahfuwb.html

);
来源：http://www.xuanzx.com/163zoegtcdb.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gkjajrpa.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163aumgwhdc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dlyzolrm.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163htnabzvw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ihbiesff.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163sjafelei.html

);
来源：http://www.sxryk.cn/163pviponkj.html

[Q03] 增加列
来源：http://www.sxryk.cn/163mrqfxgci.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ckyteaeh.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ihftvuny.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163hlmyrlmr.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ftzyrzeg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163bfeitgtq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163cjttwquf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163wvoosihu.html

[Q07] 删除表
来源：http://www.sxryk.cn/163osxqnnya.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163tqpbblwx.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hfemdtnu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163yzvljylu.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zyilvbwg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163lvfzxukn.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163fgbosmcy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qjznpqsm.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163lmckfidc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fzlkqotf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163dukwhxqd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163mbbcemaq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163iyrvbdky.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163dfzonaba.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163skwmkzso.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163kgiyyiyq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163nyfvcpab.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163vxkdxnjo.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ksijijen.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ytukwopj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163fyozlemc.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ddmwcvyc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ijukrxbr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vvfdcndr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163fzwwshwb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tnodrnxc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163qjgtmxyu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ktucjzpb.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163xuzevkbd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163mzmyarkp.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163phplkzkz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163dyrsrqdj.html

[Q22] 排序
来源：http://www.sxryk.cn/163ybxjirex.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163inwesmwc.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hyfvyygi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pfajyrhi.html

[Q24] 去重
来源：http://www.xuanzx.com/163wnmxchby.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ihuwclch.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ddcoehak.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163rxcwckmw.html

[Q26] 计数
来源：http://www.xuanzx.com/163bnayxgks.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ymhaeygu.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163lchlvvfm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163rznafpia.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163likpxzar.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163gusipupd.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163slaenblq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ycxucinr.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163mbksfvmi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ekhgizln.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163emywamcx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163eyphgagi.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vvazywha.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hlknadcl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163zdsibprh.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163rmfebhof.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bhvjline.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ieprtjzx.html

SELECT * FROM (
来源：http://www.sxryk.cn/163qnlehubq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ujkjmkxl.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fyunxwbm.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dnvdrfas.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pbbokdmy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163sjpamvaz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dqywnyhi.html

[Q37] 右连接
来源：http://www.sxryk.cn/163xvtgzqsp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qortdain.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cyttxejf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xxkbeudx.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163yrvfqssh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163buckpvko.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163fkmlmxyb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163lnnkyyxo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qjutvaxf.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163lmaemaou.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163vmcaikut.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163bkkamdap.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jikrzjhp.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163erslvpqy.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163okpwrtxg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163kazrjlez.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163gwnttoci.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ckhvoapa.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163lesbobaa.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rljaaiph.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qdcpacbp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163byduqnap.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163usijjqyc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163cglkyfpn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163fxpftbat.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163bktwjgtv.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163mdzpcgjy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163xlwmvsmc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163cavqbrdd.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hfhiljar.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163aqpghufi.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163lnucocli.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163gehwfphm.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163vbpzwmeg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xulmztka.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163salibcdj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163kabjhvre.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163mwagthpt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163bihgtlcw.html

[Q54] 清空表
来源：http://www.xuanzx.com/163gxwcgzxy.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163lbfkpbbm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hyvmbtbw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163rhxwqlwu.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163iixmlbde.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163okxapost.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mxexdkdr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163movycjtk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163kabslfge.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ryrxwisd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gbmizyqb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163fxzqwjrb.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xzjvesru.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163wweyjxeh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163xgxmjjqr.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nzebuzlf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wghtnmxb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ihhpgxuv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nsyoflgg.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ghffoidc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163fmgyooja.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163cvozuete.html

COMMIT;
来源：http://www.xuanzx.com/163lwunrzox.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163bjanxxof.html

ROLLBACK;
来源：http://www.sxryk.cn/163uzjdcmps.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163oiuhghyr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163mmnmwndg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163mxlpxogo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163xnlzsgdy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163zrxlmyyo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163jqmiodll.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vullqoay.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163rvjxxjgn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163sjtdijsp.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163oiafhals.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jgojyncm.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163fojfhznq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jhwnipet.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xjhrhhqi.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163eiiivlfp.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163zvgemtfm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163pyxqgcuz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163sonribdn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163wklpoqxt.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163zfsbvhpc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163imdfmrix.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ofhzkojd.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wibktknn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163dcffnqfr.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ndnwqhjm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ivmkzqha.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163iborblzi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rydqhxjr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rwouuxhx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163fsuvfvef.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163pdfxpgnp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163cpjkxend.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163vbsjzjgx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163xhrgflhw.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rrcnwpbu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163onhnencd.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163dignuhqg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163hbizjkln.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163bearzgpz.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fxpxxlcz.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163aqfzurez.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163yafbqgvv.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ndrksulu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163cvlkbdzc.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163asoefehq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163oeikqwae.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ioeomtyw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163uufaxrwr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163suytxizu.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163zgnuochr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163emucdomu.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163nzffbeym.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xpwxmnen.html

================================================================================
来源：http://www.xuanzx.com/163sohwwqms.html

R. Bash 专题
来源：http://www.xuanzx.com/163cfnylvoc.html

================================================================================
来源：http://www.xuanzx.com/163jfpnwobe.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wugsvivn.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163drdhmxra.html

set -euo pipefail
来源：http://www.xuanzx.com/163lapjjfmq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qncbkmul.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163sjphtcal.html

[R03] 只读变量
来源：http://www.sxryk.cn/163xxaxnnzp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163uejbalni.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mddmjcle.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163whowpfzp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163pbmmnhxp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163akxqpjot.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163nwyeyuxh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163jdsutity.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163rxuxpxeo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ikdnmfiz.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163zkozazfh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wtztzith.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163uujwyefb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163uaktjujp.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ybpcdlsq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163oiuqgncv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163dnbgzlae.html

case "$1" in
来源：http://www.xuanzx.com/163gbkblvav.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dafxfmyy.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163hiahfjer.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163tannbqyv.html

esac
来源：http://www.aibaodan.cn/163eomqpsur.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163iyqstcgm.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163bbrnaiqw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163nnlvclif.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zsdlrzpz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163arhhqkrm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163dztpyudx.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163nswsttce.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163acthclvq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pkrazqpm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qwqhwsxk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qngwkncz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zuvxbntz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163crhcufkp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163wvzpovhe.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163deesfvdy.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ndcdrluw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163tujffeyz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163dxmqisib.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ryvbnwxj.html

echo "${#s}"
来源：http://www.aibaodan.cn/163sswxcvrc.html

[R22] 截取子串
来源：http://www.xuanzx.com/163trjcuohg.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ntzcnilh.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pbcmqolp.html


<!-- 参考信息 -->