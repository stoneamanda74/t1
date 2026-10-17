外链999!wailian999！

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163yijybmln.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jmzfitpv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163aphgvsdh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qipiukgk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jzqsljkq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zfdyfalw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163typkyhit.html

[P04] 求长度
来源：http://www.xuanzx.com/163bldssrll.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ltmlrckm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xjbwyujf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zjgsbnyu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163talwvujf.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163cnpeinhj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163krlrfufr.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163aizttxir.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ykqdjgsd.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163vhagpnkp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163daiawwlt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163mahpugkc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163elqyrhnk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fyeozwkf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ehevaopr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163tgpjaufv.html

Ruby: a == b
来源：http://www.xuanzx.com/163gnzbhvve.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ejqicxsw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163thohucpg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163yiqocwng.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163kmkvuyjh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cppidvps.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jflvdqml.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163sudliffz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163udeclrxt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fmlzzamn.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163jmbyluva.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ldzzixom.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163tjwljpzl.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ntjqaafa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mcdjkpct.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wpehtowj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ezkcemlp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ekvfifom.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163funxaotc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163hzcucwgi.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163gvvplwgj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163macsxmsu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pxsdqwrf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wylpqzjp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ibjlfrti.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zyapebim.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vsvnktjh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ushtgigz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163biirkhfb.html

================================================================================
来源：http://www.xuanzx.com/163vkrhojry.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163xhbuxjvn.html

================================================================================
来源：http://www.sxryk.cn/163ymioyucd.html

[Q01] 创建表
来源：http://www.sxryk.cn/163syamzetn.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163cyzxqteo.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ybwbeqdx.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163kmdiibnh.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qbwfpanp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163xjtrikjn.html

);
来源：http://www.xuanzx.com/163ymfcxhbk.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163hwphszaq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163efwekikc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163luqoovgn.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163oltsgaaq.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rqegbenz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163wqvglbkf.html

);
来源：http://www.aibaodan.cn/163wxhrkoyv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163rfbfzizn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163dtgobbkx.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xofcpblt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163tbbplfoh.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163jeceiynu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hwdnxgjp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wchfteiq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163znmixegv.html

[Q07] 删除表
来源：http://www.sxryk.cn/163uyvktzft.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163svejejhn.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163zvoqfziz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163skkosjhg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gidsgpmt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163tjxooaax.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xvdwnxqm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163zjrtjohe.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163whyyziqy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163xduspwjc.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163lzmybvri.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ryhkmlbo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rjdsgwqr.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163hrjxesgm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163coyykdmz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163pnyqvhib.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163liuqkwtk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163yrjcnmwe.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163zxjwsmlb.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hgsvagrt.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163dmybzsgc.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163albwcyfw.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163vibhffil.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163uzefkfld.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163fvtmvnwa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163tsjndgag.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wboujrux.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qputhyas.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ruwwfjep.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dgsfiprj.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ttdlnlqp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163xdlidqrr.html

[Q22] 排序
来源：http://www.sxryk.cn/163cfmahmqi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gjrubhua.html

[Q23] 分页
来源：http://www.sxryk.cn/163wgxsdqxb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163bwcybsrs.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ggxfhobp.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163aapqcswj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163apuxdpmz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jsospfhe.html

[Q26] 计数
来源：http://www.xuanzx.com/163ftlfkiix.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163xlwyrahl.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ptzpdrzo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163flglewkq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nwjuwpth.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163wqlskpux.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163sfbqczkd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163shmkghop.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163bowsyskr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ytvbpzno.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163vrsxlhrv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163tmyrqjfs.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gcurunxq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163otcszjml.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xnvdtebo.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163zsopbdqs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163nhugegxx.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lzpxqxus.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163hffzkpay.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163mvqewllb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163qbpmpqwj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zamtzuwq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ycqucurf.html

[Q36] 左连接
来源：http://www.xuanzx.com/163qkinehxh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ipmrcqpe.html

[Q37] 右连接
来源：http://www.xuanzx.com/163enwmtejz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163vijztwjv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163znequplm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ofwnywey.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163vbwdrqbv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163glqfdtoe.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ebfvcwvq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163tewqiukt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163bpjaivjr.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163xmenlnci.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163njsswyct.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163vlktaglf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163kewuomau.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163jotbnkcm.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163opkbgnsw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163hqxvtfyf.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163kzsfdmpm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ddwendhf.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163odqylspm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163arzcwckw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xymmxawx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163crfbizec.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wkhrtded.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vtcirkvc.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ggbcbkgt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cjrryxvb.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163sbpsgsec.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tecdfxll.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qrrqkpsj.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163mcttopyu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163eoiwajzp.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163zmhfbiun.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163sumjdvlh.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163iurlaidr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ezfulpzq.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163fzcoguhp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163okxkboys.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163rckynvyf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163dsibwelr.html

[Q54] 清空表
来源：http://www.sxryk.cn/163sdnfkeui.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163aswkqbqa.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cpsisuri.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wbeicpoo.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163bhmixbrv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163jjqiuabk.html

[Q57] 行号
来源：http://www.aibaodan.cn/163emgyvkxa.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163znyxkard.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163rvuahaaz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163eajjviob.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163mzrjvmwz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163szhuuafa.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163kugedleu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163tdajhhzk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163vnulcyjj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163lbhwdkky.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163umrsfoth.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fsungtzk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ffkcoyoj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163nqgazeco.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163tyvpsqqx.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163mhdmaorl.html

COMMIT;
来源：http://www.xuanzx.com/163fclaqbex.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163emfeayji.html

ROLLBACK;
来源：http://www.sxryk.cn/163mtugcwhe.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163dklrcgvz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kpwjcpxy.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163tqcuqlrx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dunzipoy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163zbqmytvo.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163siktreun.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163pocexflh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163cukzjwws.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163nkauczfg.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163olmmgxbw.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163qyoxunpe.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163yrnlttnt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ptgiiumr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163futiyroz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163muthlwky.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wswgggbw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163iuxfpkhl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163hqerbbda.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ilbcvciy.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163twlgeyae.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163cohxkjir.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zgumegla.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163oceioxqc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163yyrtxltl.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163flzwrxsh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163wrcavook.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163shalvmxl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163efxlmbsp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163qhptutvu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163itfxjidu.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163gceyemdx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163izrquqcr.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163olhhlsfu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163cemuzaau.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163glbwgxwl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163tavpqsqv.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163zlydurbr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163oktpovsx.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mxgqovov.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163entwkcqi.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kxayyfoq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163naexgzer.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163msrkgwro.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163qqqnmdrk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163lauxsxci.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163bhwafsab.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163utewktev.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163nwdceqzj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wzoieraf.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163wpfownan.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163xiyxvmpz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163gochgqpo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zuqanner.html

================================================================================
来源：http://www.xuanzx.com/163qewcfiqq.html

R. Bash 专题
来源：http://www.xuanzx.com/163sjnwrtdc.html

================================================================================
来源：http://www.sxryk.cn/163powimypp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vcxokqxt.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163khpkllcq.html

set -euo pipefail
来源：http://www.xuanzx.com/163hdhomnkx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163vfyluuzc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163bwpvzscq.html

[R03] 只读变量
来源：http://www.xuanzx.com/163rucxvckh.html

readonly PI=3.14
来源：http://www.sxryk.cn/163idmmxstx.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163lmrzuzlr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ygddsmxf.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163xgmpdxii.html

name="${1:-default}"
来源：http://www.sxryk.cn/163zrtfdwau.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163zpsnxfhp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163bguddkcb.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163jpwhwiwm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kqrmpaws.html

[R08] 数值比较
来源：http://www.xuanzx.com/163aicdwamb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xfsxfwht.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163okapwznj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163adqvxnps.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163odjewqim.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kdoqrfdv.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163eglnmbvi.html

case "$1" in
来源：http://www.xuanzx.com/163axlceova.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163xaganbgg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fcffkrdo.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ibumtgkf.html

esac
来源：http://www.xuanzx.com/163goheizkz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163xmbqfoti.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rzexhzkq.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163nztvxlmf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gtphysvp.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163iwdnyfjp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ycwbvyzf.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ynyqdecx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163frxmxuaw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tomzeyhp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163odgouqce.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163cpztvtnn.html


<!-- 参考信息 -->