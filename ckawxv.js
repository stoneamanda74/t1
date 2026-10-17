外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163fagpucby.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zpqybqvo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xbvkbxkt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bbiapzwe.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163nqzbbjqs.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163mvycjils.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wdoeqvdy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jeuyifzn.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163xvdxeikh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ortvwtxo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xdlvfcof.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163mnecdjws.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jclobrqr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163bwdhgqvs.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jhpdudln.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zesiolyi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ibpexqhl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163illwoejr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ktntxplp.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ytzfvxjo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163miarqals.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163myeirswm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lpypgvpq.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gemtiyox.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163otxbbmra.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163mbygrbew.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163doyceupl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wzahbotn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163zflunruf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bykekunf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163envnqgam.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xbeidwvh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hkzmwmwa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163waxbkefw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nvkfmpbc.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163qhefxefu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pxqnhpxp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163espqfhjc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163btplulzt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163fjddvoer.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163emshewch.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163bzsjbavv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163gzlhiemi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163wnmnbrjj.html

================================================================================
来源：http://www.xuanzx.com/163chdfwmlp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163cphzkzoi.html

================================================================================
来源：http://www.aibaodan.cn/163mfclsigv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163eviqxmhq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163xzvxazyj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fqtmakqh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163szaoekhz.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163uuarywxi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163hxnvdjfz.html

);
来源：http://www.sxryk.cn/163rrpqszjt.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163mpszsoai.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163wjbjywiq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wxnxmwzt.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163pbrpuhaa.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163msuztdch.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ibgkrphl.html

);
来源：http://www.sxryk.cn/163nrwaahnl.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163jxiogvyn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qsqalpup.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rkmihpvm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163fupyhzeb.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163mpodmszs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163vheqrdtc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qfxdbohh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qsdwpqij.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dgfxayyb.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zaamvaop.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163expejqmm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163oijxxgak.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163labuthui.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lzchblpx.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163oubmjnrv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163pqyvdyze.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163mcauepnu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163swismnca.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vpoutihm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163eweghgly.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163tepewguc.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qqybdcgg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163anesnhfv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163tnsjkuoe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163pokepbky.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163duihhchb.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163matesoki.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163drgaeott.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163swzuntax.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163bfgoubxf.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163kehoyfpv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hmhtdfgo.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163qafkixww.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ajrhtqtt.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163hcyyiiwm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163klbezeti.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ekzxqivt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ppgyifmu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163kbjsoqfm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tgtbukyh.html

[Q22] 排序
来源：http://www.sxryk.cn/163osaekzvr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163rrdwyzlt.html

[Q23] 分页
来源：http://www.sxryk.cn/163qhsondxa.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163wgigzcnj.html

[Q24] 去重
来源：http://www.sxryk.cn/163ggwcyjtf.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rjtnhnot.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163vuwdhmle.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163keozjene.html

[Q26] 计数
来源：http://www.sxryk.cn/163vcifxwlf.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163kvfmowoh.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163cbiprdqa.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163sfespiva.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163uhaeofag.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163zgtjhsxo.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163hbnfvykx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163vtizwptn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ibimwekh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gmopkmzb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163rknbpbsb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163igmpfogc.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163zwskwlzh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zvypwnoj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163vulecwnm.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163vbhqlhsd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163pamffjpu.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163xmcdjkyn.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ejpmfqmy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wmjfmeot.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vuhbqirm.html

[Q35] 内连接
来源：http://www.xuanzx.com/163aysecvww.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tlxzbigi.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wuxksmid.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163eyhfeaey.html

[Q37] 右连接
来源：http://www.sxryk.cn/163isctpids.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163rmhpnwbp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kcbuiwif.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163hmokigcm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163sjauctnp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163lzpakfrp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163diyulnev.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ehptcxyt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lyfhwrlv.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ymjywjfq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163xeqqwrrp.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qgavhyzt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xqixufro.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qsjbgjdk.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163hrdrhkky.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163qtvrnghe.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163iuojctrv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163mdcbbyrj.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163vwtbeunw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163besocrzk.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zulvlnal.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163uzldlqgx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163cvyvcwmr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tepqgjph.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ghuhilwo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163rzgjuxuo.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163tgxtmbxh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ddblwjxf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wucgzygx.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163yowoxsge.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rhaycopt.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163cffehgcn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163tcnofhdx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163dnmxmshp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ozbjpwvj.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163aakwxrvm.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hmfxieck.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tbjztgwf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163afvkzyfw.html

[Q54] 清空表
来源：http://www.xuanzx.com/163phwqdjjt.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ymorwcdr.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ealfvgaf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gigurfuf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163pjitdttd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163jgdynvob.html

[Q57] 行号
来源：http://www.xuanzx.com/163dfyjegka.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ytrqnbwz.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hrfcfqjt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ivegbkez.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163xxlysylb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163wkfxwczs.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jcclmfxd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bfxqkqgj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jhxbbdrc.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163omeslvzq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lewwwryo.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jifiujdw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fdnazsax.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163lpnjjpyd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qzzqkldy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163qwzcddri.html

COMMIT;
来源：http://www.xuanzx.com/163ntyifcko.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vxibzvnx.html

ROLLBACK;
来源：http://www.aibaodan.cn/163azkodpik.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163hwqhlpql.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mhstjbxj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163fgsvqsuk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fmqngkdi.html

[Q68] 保存点
来源：http://www.xuanzx.com/163juandfqd.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163kdsvkazh.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163mzfzlllt.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163pbfmpsys.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hzurpisn.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163uxsmrunv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163upwqcpdc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163eqlggbgh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163spbeafmp.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163qnljbukg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163cgnybgem.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163oklbpzhc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163tkanubgv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163sktnbuvy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163rcnpeesj.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163aeydnyoh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163hwcxrmxz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163quyfmlto.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163kypggfek.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vofwaaja.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163oofcecyw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163uxdovwql.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163lfvoqtwh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163krafwxnr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163kopidwqv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rpdnifen.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163elelctwu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jkdinpxd.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163uupoucon.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163uacqlukl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163cmwesbwm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163iicfspmc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163yjeqksje.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163rmbiwnpi.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ydfsjbml.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163piylglbd.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zpconvos.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163qzfijlya.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zuiftxbq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163cvpddmeg.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163lzguobrq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163gbgkphcw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163enylylbd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163uuyzjdoa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163jlqpamyk.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163irphyifa.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163fvqmwzro.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163nkqjspua.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163kcbswqhg.html

================================================================================
来源：http://www.aibaodan.cn/163glkbucxl.html

R. Bash 专题
来源：http://www.sxryk.cn/163tptgfkdi.html

================================================================================
来源：http://www.xuanzx.com/163hktbvuze.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163zktunuwz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163cwnitrpc.html

set -euo pipefail
来源：http://www.sxryk.cn/163ewwzibsb.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163bwfkmlbp.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163udejggmy.html

[R03] 只读变量
来源：http://www.sxryk.cn/163eswkaofn.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mfxynozx.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gzngnekm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163noqnxods.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ccbnynjb.html

name="${1:-default}"
来源：http://www.sxryk.cn/163dceounya.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163egwkaqpa.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163yvmnxohj.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163nrwkayhb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vynjufbc.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163zcxhezzt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163bvkqngeh.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163bywfxqct.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163dicyfdee.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163naqlubak.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pcqatszn.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hgjljnav.html

case "$1" in
来源：http://www.sxryk.cn/163avwjwntp.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mbguhzgn.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163aibjctub.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163sqyhoptn.html

esac
来源：http://www.aibaodan.cn/163durlyqaq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ketzxnil.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zopjppxf.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qyfwmjlz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163sshpzvfx.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163noxroeox.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163kcqyanyv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tewdxbyd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163fjwqlxvh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rgadjjst.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163dikikynj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163juuhvpsh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163jsfvpdkr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vxwnjfvv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lrdcxjec.html

[R19] 数组长度
来源：http://www.xuanzx.com/163raysjbsi.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qwifrull.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163dwtwkwga.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163axnpdhsk.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163okmshcri.html


<!-- 参考信息 -->