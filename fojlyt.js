外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dghdzwkf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hfjizxbk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ftqrfoap.html

[P04] 求长度
来源：http://www.xuanzx.com/163rbbcggti.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163goibzefi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wmbcywvo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163heqnxxeq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163iogtrlvo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163kzdwhstg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163sxtrumzw.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mqflbesi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163dnxewdpo.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163fjcgtlrn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163jgcjbyuw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qbugncwr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163sbzkubim.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xooaltgw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ocuwymus.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qvjvejzp.html

Ruby: a == b
来源：http://www.xuanzx.com/163uealamqs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163uongbcam.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163sbxwmrtw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163nohgdbhu.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163guctceld.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163hcaxlook.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vavloiju.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163jxbrsqix.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163oqhxbpyo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163iqwymvgr.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163hapbgdvf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vrebilwq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nbknisdt.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163hpfahbjp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qyqorwbe.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pwygjmlq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163kvitgvqu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163mlocmtiu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vhwwbbve.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ajkqwstp.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bzpintet.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163fvvktqvn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163cwtssszf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163lqqnrgyl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163xytfizog.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163lvgmzswr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163dupalwsu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163paqksugj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jfrdzzpu.html

================================================================================
来源：http://www.xuanzx.com/163goognxuk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163osexfwsc.html

================================================================================
来源：http://www.xuanzx.com/163scbdvumf.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163xjahmaih.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163hfvzcxzm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lxhqympp.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qqqjqlcc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fvthoria.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163iqqaolrh.html

);
来源：http://www.xuanzx.com/163doiedrfc.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163aznfliyf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ihanjvil.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nsmpvjjc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163tslwgtto.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wsmuiybn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163yxcuahaa.html

);
来源：http://www.sxryk.cn/163wleujhqf.html

[Q03] 增加列
来源：http://www.xuanzx.com/163djjedjmi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163twpcvsku.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163tjdoefnr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163kskiizhd.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zxoyryxg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xazyikel.html

[Q06] 删除列
来源：http://www.sxryk.cn/163mvgiwdkb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163lkngmqsv.html

[Q07] 删除表
来源：http://www.xuanzx.com/163sqvucqrb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dhonjlxm.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163gmlcqste.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163xabpkhgx.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hpkxklro.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163gphaxkhw.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163eclmftgz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ndapwwll.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zicykwic.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163uyplltfd.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163sxguzpkl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163oqpcsned.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163olqulqwa.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163dgmrugao.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fqicrfvz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163iszusjzq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163slcscskg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163sqhelrsl.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163bjnvlnjp.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163blbezcii.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163khpueokd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163dthresoi.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163gopwmihn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jejupwbl.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hlyqeomq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163edvgrrzq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163mcervqxw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163xqszzulz.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163vripfsua.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163iwjabghq.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163patfjsun.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163bmheqdpu.html

[Q22] 排序
来源：http://www.sxryk.cn/163rvqbctrg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pcgzvzlo.html

[Q23] 分页
来源：http://www.xuanzx.com/163kqsbtyil.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bkkwdcte.html

[Q24] 去重
来源：http://www.xuanzx.com/163tyhyroue.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xmjrfxwg.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tytgibor.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ubnivhpv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163lcagwsru.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163itwndqvn.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163sjxgdzlf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163uoaxyvdw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163fgmquuoj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163inhhueiq.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163mznjfziq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163mjdjjvsu.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163mjvxzojl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nnakpjrz.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163trsgsjxf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163rydkiaxi.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163cvfhrfrl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163etehdckl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163bovcdgaq.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163rizuyhxg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163kwtfadaj.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163bhpmsicn.html

SELECT * FROM (
来源：http://www.sxryk.cn/163kekaivee.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hiiqgtne.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163mohcnjkz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163yjbunurf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mhandfcx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163jhwzgkgr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jwxarreb.html

[Q37] 右连接
来源：http://www.xuanzx.com/163caaaxyzp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163scseruhg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163hjjzyuge.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zjqgkbsi.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163etgypxbo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163jmhgfkad.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163hwflbsbp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rqqbykbw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qtzhddos.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vppjoqpq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163qpwbuoik.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ersvxsth.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163fnehbfpo.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163vmkzbaqr.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163gfrvwywv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163trfzdgxt.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163xselmfrx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163yowipmmh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163mmnllnri.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163kzpdvjqz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163vcoaoefs.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cybenzev.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ajcuewtr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163imqkftve.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163hwulaxgw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pwbbgzae.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163eeesbnin.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vmdwnuhp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ezxazwog.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ctzvyujs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gfriaikq.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ranyvppz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163etsetyst.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ehnhlwxe.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163qntxvepp.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163yjvsmkvc.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163pxkzamid.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163jrvggshp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163vhpjphqs.html

[Q54] 清空表
来源：http://www.xuanzx.com/163uzdesfta.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163aldiueka.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163bqdajssw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163zspbkbgu.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163bujqorfa.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ghvubhrq.html

[Q57] 行号
来源：http://www.sxryk.cn/163gflsmxns.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163irdldgkz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hnymveqm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163fxnxuzoa.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vdsnggen.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163mpigydat.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163witgxekw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163dlkukspf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163nddsngqp.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163oensbyro.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jlqazsdm.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163bnyvqslg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qmzlrxgh.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163abkwezth.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163eglxygcg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163kjjpwekf.html

COMMIT;
来源：http://www.xuanzx.com/163fyhmolem.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163mgfzjloc.html

ROLLBACK;
来源：http://www.sxryk.cn/163nulfavrp.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tcirakqy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163sgzedjvr.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163comtmkkq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pmtjvatv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163haoxczpa.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163hphtefvo.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163alqsxolw.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vihleuli.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163gxbpfxvi.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lzktrknl.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163bymweepo.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163kzthjdid.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163sheefycu.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ikxpttmw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163expvcmsz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163pksjkvzx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163uxavcrml.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ymiiqwtp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163mvdfqtke.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ybnqghqy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163edsnmcso.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vfovxqru.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rgxuwzej.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ogqiszvs.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163rwfttcoq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163fofkkdss.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163dqzfoqed.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163bnbojaaw.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dkqkixzv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163albusetd.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163agyuewcl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ttsinsil.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hpfuyvqu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dxvdfbxt.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ldxwzqzm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163gpijnqse.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163qyxpnjmf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qnhekthk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jndyjonh.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163bbnjlbqa.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163rjwthkwi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163gsdqeesg.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163smytllrf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jxpsptau.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163kvelerou.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163qkwrchyq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163huozwanj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163scftjovz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163dswlzuzv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163pmdjhatx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163llqtmbga.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163lewzedng.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163giamspcz.html

================================================================================
来源：http://www.sxryk.cn/163aklrplxp.html

R. Bash 专题
来源：http://www.xuanzx.com/163rokiocyc.html

================================================================================
来源：http://www.xuanzx.com/163rwxztmvg.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163oelzaiyo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163otpjezca.html

set -euo pipefail
来源：http://www.sxryk.cn/163tcnukszt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163toqodeeu.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163duemvjuj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163mlxhwuur.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qgxdtjjn.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jiccxrqq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vleutwfp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163slfmpgqi.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163miwzhtfl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tnijzcpm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163pfagvduc.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163bommsjey.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163pvexxfsk.html

[R08] 数值比较
来源：http://www.sxryk.cn/163mzsltzij.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163oxzcevni.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163nljojbrg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163solcjtdp.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163kecivrdq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163clghclcd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xozrwmed.html

case "$1" in
来源：http://www.xuanzx.com/163rsqfowab.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hclfzrbu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lmfcqzhv.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163tsrovdta.html

esac
来源：http://www.aibaodan.cn/163mskygnuf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163oasnuard.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163akczvqhw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ntpewiwg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163fdklnrda.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163sbdryqyt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163eglciyhw.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xcapgmde.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163drsxyomp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163devhobpl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163udjkaxxh.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qxfqcxbs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163obdsajtw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163couxyyje.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zutkphdl.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ybcwtewn.html


<!-- 参考信息 -->