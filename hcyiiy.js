外链999!wailian999！

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163lvfvxpui.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ombdplon.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163heukewhb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kwprooxm.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163munqyarf.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163wuczcnbw.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163akehgpbv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qwmjfsyk.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163lsglbcsy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163yrxcuugx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hzhagdeq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163udvssflb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kzkiorio.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163hhmqnghw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163dslhbjnc.html

Ruby: a == b
来源：http://www.sxryk.cn/163sfdxfirx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163kgmnclho.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bzdecytq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ylgbrvgn.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qzbtokpj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163thbdjzha.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163yzpjpyrk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163wdnrregh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ngcjkdhl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163rzagdtjh.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bgatyqfi.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163qkcpydvn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163kradrcxd.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163daahivgh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tozozase.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qneoscbv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163rvelbybo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163oipozbgf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ujmadckn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163gyjxrboy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163buxukews.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163zlaxwyap.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ikheeskx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163favkujwu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163dbpgcbce.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163dvrmcaxl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ujbujukg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163uafoxmrp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163jnkmmhor.html

================================================================================
来源：http://www.sxryk.cn/163bkkhusrd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163haxxkcaz.html

================================================================================
来源：http://www.sxryk.cn/163fdihxiwa.html

[Q01] 创建表
来源：http://www.sxryk.cn/163dngqptqc.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163zmzmgajb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163gwqdewbj.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163mdjtpwpb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163jevpaobh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163pfqvsshj.html

);
来源：http://www.sxryk.cn/163erwnvvvb.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hspxebya.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163eihcjlap.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kpchiptv.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163sxbmgayx.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163iwnyvray.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163esodzasb.html

);
来源：http://www.xuanzx.com/163tvweguwu.html

[Q03] 增加列
来源：http://www.xuanzx.com/163bqvzxzrl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163rnlhtqec.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163emteqpen.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163zrqdhhzp.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ubhnqnwx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163kurhhpof.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163wqwauygt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ylijbdjg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163lchjcyfw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hdbdjjko.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ynlkocrm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ncsclort.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ypwzqmsc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163bwumzhxh.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163cbuostcp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lkqdxtlx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163abjicjch.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163jggdctwz.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vhhdetsp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163bxgbnkqg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vroukvig.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163uavkfwqc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163dqwthrtd.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163rpitukao.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163hhyxuvab.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163xylgmpzj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163kbhdvivu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163xfwkoynu.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163evminltf.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163zgequpvc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163mjldogcr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ghbzcaxx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163aqucvjcc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163nfuuxufw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163pqjcqpiy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163fzebxraf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ghtvczbm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163iqmwkpna.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163gcvshbnw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163kjujlymo.html

[Q22] 排序
来源：http://www.aibaodan.cn/163cioztczw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ioeuezox.html

[Q23] 分页
来源：http://www.sxryk.cn/163dhtrvtvy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163wgwzdpkq.html

[Q24] 去重
来源：http://www.sxryk.cn/163xrtetrwi.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vnnvwkzi.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pfsluqtw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qftvraps.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ykydamax.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mgffkauf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163fzxbgcpv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163iuwfocok.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qosarudc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vcilkkff.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163cisvnhia.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163zvusqajd.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163suzipeva.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qctujzuu.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mxfnymko.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163sstczqcb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xxovgtgn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fpqvrpih.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163tvmwyipg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163yrizgbjl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163kddlqfna.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jskucuqy.html

SELECT * FROM (
来源：http://www.sxryk.cn/163afrvwrsc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163xbcvjdqv.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163gsbfpdha.html

[Q35] 内连接
来源：http://www.sxryk.cn/163sydejltc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tkszpuyy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vflownhx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163oowsyckg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163dysazjkb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163towemjfy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ixzeafhf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163bjyagdne.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163bwckedik.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163weqedams.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163boizcpue.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rvuznjiw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163tkihybdb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163qfvbtqfu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163wioogtvv.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pxqiohda.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163schsvjxm.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163aoeftrsl.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vfwfkfpt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163haucpoem.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zrouhhhe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tmuoppxe.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163hifnlhmg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wezckmwq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ffckqala.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vcvastcl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163njtuvrlb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kurgoafp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mzixraqh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ewtxyxhj.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163fxgtblvq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163kroqsfpa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xisfpgxb.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dwgimvmh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163logswksc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lmthkmeo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163gjadyqaw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yghpfljc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163euvdukpw.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ixvjvxzv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163bpfbctgu.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163trbogsqq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163efnwqbrs.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mhrzvycu.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163aeudykuu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163zwdacimx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163bzloezbp.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163bfrxuugj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163fgtuepxn.html

[Q57] 行号
来源：http://www.xuanzx.com/163hhoxybve.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163gqtzghma.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163wtjcflzu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163koushmal.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163kfygmqch.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163smpbscro.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163obcaitob.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163mjkmyyrd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163tsijqtaq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jxvjbrpr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163dpofxbph.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kagfoygh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uissyhyc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163feygygci.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163tlzwduzi.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zcvrmtif.html

COMMIT;
来源：http://www.xuanzx.com/163tpfivcpd.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163sidggdyd.html

ROLLBACK;
来源：http://www.sxryk.cn/163cbhkgryl.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vjptwapf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163fuwseenj.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163wgdeliiu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rotdaivs.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163sdfufrma.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163xgcbcbbr.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163cmmynkdl.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163oramycwb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hffeuptx.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163dortqqkk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hoceizcp.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163skstqgdj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jadtxgqw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163upwpgftt.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163edfvwrfn.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ighdsrpu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163jyyqziux.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163zrcmteog.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163nkhxruqo.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163rqvstmme.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163tplogxet.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163aacpwzpw.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wskaogwv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163awsnlcii.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163kjgiikxr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163vexjsbys.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163kritbtkn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163qrngcopa.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163bqzpgyjz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163saozcltz.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163uhcuojuy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163npsbkcfl.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163udnoxbtq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163jhqbgnsg.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163wxpzvikk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163eldorkoa.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ygckdxwp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163gmxagrfg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163pxuqwfty.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163prgdscqa.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163fmovgfgn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163airapeyw.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163nsxlmamv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163kwzsavfe.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163tbyjbolb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163whgxuttt.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163dfzplwil.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xvhsgaqt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163aymcobip.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ayotrjtc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xuifksbu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163qovkzzwh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nxjhafdn.html

================================================================================
来源：http://www.xuanzx.com/163jaaayehc.html

R. Bash 专题
来源：http://www.xuanzx.com/163czuqijlx.html

================================================================================
来源：http://www.xuanzx.com/163jtfluuzv.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ynxsdgtw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hgfrzmdy.html

set -euo pipefail
来源：http://www.xuanzx.com/163krxrwrzl.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wawpjhom.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163sxxymaat.html

[R03] 只读变量
来源：http://www.sxryk.cn/163cshrtzqy.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ntlceklb.html

[R04] 位置参数
来源：http://www.sxryk.cn/163djskmgsc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163nblvbumo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163kabwoxxt.html

name="${1:-default}"
来源：http://www.xuanzx.com/163chyrbqjo.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wsbtodkz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163mqzgqmrt.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163bkocvoys.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163phooyrpg.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163hnspwono.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163vsfedzyh.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qmdyaewx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163muuocsim.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jvpiahqz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vqoxyzao.html

[R11] case 多分支
来源：http://www.xuanzx.com/163nphrjlnj.html

case "$1" in
来源：http://www.sxryk.cn/163tqwivitd.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163vfvkyuax.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zrgarwcz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ltawkocm.html

esac
来源：http://www.aibaodan.cn/163eclsunvr.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163pqqkeuhz.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163aqqdoelv.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163gcbqpvul.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163iplkbrtz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163lnpkdfbo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163pdywovpj.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ttetydir.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163hkmrrfni.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vgxqubyi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163pssulxkb.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sbwnkpai.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163wqsnokvw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163powyravt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163vxvueecy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163yptpgtog.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bqrqzuvq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163mbqpjeyy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wafdnmgk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163kzsalltn.html


<!-- 参考信息 -->