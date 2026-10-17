外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163qwlzkkmr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163vyzsrlgl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163qqdqkalx.html

[P04] 求长度
来源：http://www.aibaodan.cn/163sciwusce.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vepoqema.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bwhoomov.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kfagnflb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mgdryzws.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ezjjasrj.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163bkvaahni.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vticwomq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163cgaptajd.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ajwxaala.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bweshwwa.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ccblugnv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163cpiuamev.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163krmogprs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163awukgfoy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163brbzgysm.html

Ruby: a == b
来源：http://www.sxryk.cn/163sdotksuy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xlimadhz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163fonpqzne.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163motigmya.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rzrzdrho.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163iybiffda.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rllkrlrn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163vlfmqtdm.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163lfxeglga.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163poxwenqj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163cbiewopd.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163qeqthwzk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dxuzvkdm.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ijcmlkbm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fmwtkcit.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uecnzywz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163njsrhvlw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163lkoxfgad.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163jhlrjkjt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163qeeeqinh.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163hjiywokb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163odvuiuuc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163oloypucy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163qvohsyad.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163tinzuilf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163niyboehq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163rdcpsehy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163rsrvnuvm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163pbnvthwa.html

================================================================================
来源：http://www.sxryk.cn/163ixynppfd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163uoymttlz.html

================================================================================
来源：http://www.aibaodan.cn/163ltttpklu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163eaqoxfrd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163mmvmooql.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xspmboqz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mjedoknh.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163iqsyclnn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163swkizgxz.html

);
来源：http://www.sxryk.cn/163sypswtec.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wpfryjrv.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163jdndzmgt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163babykauw.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163wticixcm.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163bbieajpy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163goskulsu.html

);
来源：http://www.xuanzx.com/163wmlernfb.html

[Q03] 增加列
来源：http://www.sxryk.cn/163vnqkahlf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163pevfcshm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163sjodtexq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zjhryizx.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163gyhsmbyc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163lvypjhui.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163edsjpmai.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lzcarkbf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163sdnkxxii.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163jasvbqsp.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fcstxivz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163iftrpbga.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163tyrakvmp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163atfrowjo.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ucjlltbg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163pbtflpbe.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163mthtwtbc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163bpjmkjzy.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163wokgcrzv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163wunynehy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ttsmvktq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hugjspte.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zrlrdofv.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163uswjmayf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ftdwuvov.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163usdmkfgd.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yzoltwcr.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163agbmtzgm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vjvjwbil.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xbtmpmgg.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163bvtbwxbh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163zgetxqnq.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163qwhgqguo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tynoopkx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163gwecnlvq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wisadpic.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gzuerzma.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163poiedjye.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163gwoeikda.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163cfpevhpg.html

[Q22] 排序
来源：http://www.aibaodan.cn/163lmegbzem.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163lybmzwze.html

[Q23] 分页
来源：http://www.aibaodan.cn/163eosfvkwv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163wahkuglk.html

[Q24] 去重
来源：http://www.sxryk.cn/163oaphbcrz.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lghmedaa.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163yaapeyhr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163xelcnbfr.html

[Q26] 计数
来源：http://www.sxryk.cn/163nytlfrgj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zeqeclfu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163hjcnmbil.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163yiekftmn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ijkajeci.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163zecrnjlz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163dlrfwkfs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163qbczihul.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xbdziqxp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gqlbggur.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163zvkeujei.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163eocuzymo.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ffyckjtg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163opkmbwxj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163pgonitdp.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hqikzxam.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163shygduem.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163yynjavju.html

SELECT * FROM (
来源：http://www.sxryk.cn/163vfhslxtt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163iqqfafuk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ogaiwhnw.html

[Q35] 内连接
来源：http://www.sxryk.cn/163uuxuzjhe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dyyydquj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163chbzxkai.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163glfdyglx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163uvwkuanm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hdzvdedb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163znnpsxtv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163hevshcts.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163hcjomzxb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163qfumwaln.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163txxcvaly.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163zzgaihwl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163nwheufmv.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163muibhvev.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163aedasonl.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163lhtmrafq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163uozwqbju.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hduxsvuy.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163uvujrqbd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163rlfgbvot.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mkqtvuml.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163zzuvlrsy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163noirfrtr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zmsnnwcf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ldfjhtpv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iedhqcic.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hyyudmyw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ajjfdtdk.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163uaoforgs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163pukskqlm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163juqdgyew.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163sqqtyboj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163jkcrssyc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163dcxeeexn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163icnsbicy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163mpicbxvi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163usrtyjgl.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163vaubujhx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jpgtvmpf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163bezdtcci.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163szgzwjal.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163lffnmimq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163niwurtss.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wlivcohh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163gzecowqh.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qtcehosc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163nzuentwt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ufsemxuk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163jcezxvfl.html

[Q57] 行号
来源：http://www.xuanzx.com/163hvuabprg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163eylmahfi.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163yldzlprz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163fvevocbw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163eqcwantk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163bwflhujh.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163oargftbs.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163kuoywwel.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163beybofpm.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163dswdlllq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163kibzxgud.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lhbfaehf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dbbiefqz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163zuootqer.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163snqwugyh.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ddpgjzxm.html

COMMIT;
来源：http://www.xuanzx.com/163qzlmsvkh.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163lawphsoy.html

ROLLBACK;
来源：http://www.xuanzx.com/163xulkciya.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wcetzsxv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163xkluvdnq.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dhzsorjr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163kbjrqcep.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vdumddeo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163jujbcgfz.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163hlwcwsue.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163qtdjcvvr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163pnffwacu.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163aqlhwtic.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163eoaalhka.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bbnwpmhn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163toxlrkiz.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163halnshtp.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hbpgxumb.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163jzxwqesr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163pvcmskgr.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163yxuyasyk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vjziqyxf.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163edbllutn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ptltjche.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163sdgkpvjt.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zmmzuuxn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cufjuwks.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nzfgnftb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163toicstwc.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163cwhplpdr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163nqkchsgl.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163sosrtfkw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163grjbwehy.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163mgzgvlxj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163pwdinnfd.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163gnwenumr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163tpnhgqfc.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163txrzuomf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163taimgsbu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163nfbxztdt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qfgeyjpl.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163iwxpeakt.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rbqlvlln.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bfsahjab.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dmeuqinj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gypdkzym.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jwjfvxxa.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163zdoxabep.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ckplwjwr.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ptybkpno.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163lxkflifh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163efdwgpyb.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163haghauco.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163xiujmelg.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163pdjuhnnf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zmxgbykk.html

================================================================================
来源：http://www.aibaodan.cn/163tjfveewc.html

R. Bash 专题
来源：http://www.sxryk.cn/163ywnlxxoe.html

================================================================================
来源：http://www.sxryk.cn/163kjpboexg.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163hagaxbif.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163dxyrrvty.html

set -euo pipefail
来源：http://www.xuanzx.com/163zxzdgmbw.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bjwiecbk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163wsumihtv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ihwywnrk.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163sdtblpau.html

[R04] 位置参数
来源：http://www.xuanzx.com/163gfwkrcbk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qurmkyeo.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163bjypnduk.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163dgerbtsf.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163vuevxdhd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163jhwtpqha.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kqibsyku.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ljkngqrq.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ekpbfmfa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163msgtkqpb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163kplcfzmb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mhxmprju.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pnbrzbqq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fmjlytfk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163kabtqowg.html

case "$1" in
来源：http://www.sxryk.cn/163fidhxqft.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163bvsfsqpr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163lqxueeux.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ssfgqops.html

esac
来源：http://www.xuanzx.com/163yainxlab.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dxgruapp.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163gskidvgg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jbbcwrix.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ettzcymo.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tckbuxxf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163pwtislya.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ysotizcl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ypkeysjl.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nhmcvjpu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jhmkdxys.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163cojpcykq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163oovfwvhw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163yqdvbvzc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ouwcotws.html

[R19] 数组长度
来源：http://www.xuanzx.com/163uaykxute.html


<!-- 参考信息 -->