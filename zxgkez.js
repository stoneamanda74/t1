外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163hnnxzhsj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163qrtrfjml.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ifcphizw.html

[P04] 求长度
来源：http://www.xuanzx.com/163kdhotkgj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ewjspvwy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zufvatgp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163eddkvpur.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vuwjpdiv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163fkvkywfw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163isoajxab.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163egktaxzj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zplqfrhs.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mlisfuis.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163clgjgsvq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ictjgfjs.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163bxjkkffb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163iuuyrrbq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163pqygvyec.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163wycrgabv.html

Ruby: a == b
来源：http://www.xuanzx.com/163bmkpprum.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zkypzwki.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ktoxwobb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ybrmrkrv.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163infomuoj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mkyfgoxk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163sgilhutd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163yeowzxyj.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163djhsilgn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163qetjbmnb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163lhrrsmwx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163wmaukbov.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jzgkduws.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rfyqheex.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ysumlfdp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fmjhpxtn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vwsudxex.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163dgwpivju.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163rztbiswu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163iszqtvvq.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163btlnhvkx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163llesjatv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jycbtqvy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163pfrspneo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163yclrcesz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163dyqqlzig.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163rglahnrl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vrbekbku.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hsoeaoar.html

================================================================================
来源：http://www.xuanzx.com/163fqfopmcx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163pnpnhuuu.html

================================================================================
来源：http://www.aibaodan.cn/163vmxcmbud.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wjiikgcq.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163fxwyyxnu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cogfejjj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wgokfmrg.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163kgjysctz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163dzsreuyh.html

);
来源：http://www.xuanzx.com/163wxkumnul.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163nuikbphs.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163sicdxoii.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163snzslhqe.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163wnvnlsnw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163obmqzkgk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qvugjvmb.html

);
来源：http://www.aibaodan.cn/163ytdgdiox.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163bswitgda.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163yhfzpslp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163hchrzgao.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163gxaqtonl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163evoduzqq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163nawzthmf.html

[Q06] 删除列
来源：http://www.sxryk.cn/163lkqxrzqw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163majuqgvf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163kpbbilfl.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dyhzkkxp.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163iyfdkddd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163lpewytid.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163nijunzzo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163tpqoaawq.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ozispuyf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163yvkoiwuc.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vetayscn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163arriboak.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163fhukdjpf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ypkogfdx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ediibefy.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wgusxocb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163flctijcb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163rhcwxzro.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163sqritlgt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163opkwnbio.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ptfkpizf.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dqcyyrmw.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vepxgyui.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mexnjuex.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ypzhxtxa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163bcjhdqxt.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163gntmtfxd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ukfhgcqy.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163borxomqr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ielypqgr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163khublbry.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163anmrmutp.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163rjdlunss.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163zhzmqlsy.html

[Q22] 排序
来源：http://www.sxryk.cn/163pxjgrrog.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163pxjdmfpb.html

[Q23] 分页
来源：http://www.aibaodan.cn/163weqocgfp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163sjpkmcrv.html

[Q24] 去重
来源：http://www.sxryk.cn/163tdyonkga.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163tyrzyaaf.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xloyqped.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163entctnxv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163bojvqhym.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163pxuwovtr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163tvbjotgg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163sxaruisg.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163brbpdfgs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163eqrwvfmc.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bmbkoiyv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163wcgsunwb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ewieemna.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jcxalurt.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163zaavfymi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ijimrepn.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vixhcfpp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tkrrnkez.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163oiobjzxe.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ddadywtf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163joztswxt.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163tnusetvz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163unywqkkz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ldanueoo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ooaprpco.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jgfhkgvs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ofikqdke.html

[Q36] 左连接
来源：http://www.xuanzx.com/163qlbctvso.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163caojljow.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ueuscscl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163xsnzutwa.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163xmarqybm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rmqruhsk.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163rtlvfele.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ltfqqywa.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ueqxcpyn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163nypvcfmw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163aqxsalqg.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163orfnjbbf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163mutnfjcu.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163aswyislu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163foczydmg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163lifnsssg.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163aveypbmc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163nlpdveuv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163whskkbes.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hqaekojw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163latybbys.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163rtybfoxf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163lckwqauw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yjnwkzxj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ejzhhhvx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wttgaetd.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163mvpmnucq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163thxbzzou.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163oireaimc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163foixxbjn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163yuutgsaa.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wjnxfddx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qzqnaeyl.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wwixhaxl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163yytgcaqr.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wskayngb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dltkdyno.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ogfhjjad.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163bszhmchp.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hvicyllb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fyqywpae.html

[Q54] 清空表
来源：http://www.sxryk.cn/163uyqjgoxu.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ivqtiyfj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163wazmisbp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163hwxhkpst.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163oktknhis.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163cuepstmt.html

[Q57] 行号
来源：http://www.sxryk.cn/163qrasvrts.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163nxnoahkh.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ignkukok.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163mntemrrw.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163bqldekia.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163prfdysaj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163vnpcgxox.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163pcitthid.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163banzdgbg.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ljwknvch.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163anojhmnc.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cidxgqub.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vtakyvod.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gxbyeokb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zuahaast.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163exwhuzmy.html

COMMIT;
来源：http://www.aibaodan.cn/163isvjczlh.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wbeyfkbe.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xhnonlyx.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163habtooup.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ehsjdeml.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163epnaogyo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163vnylrxsv.html

[Q68] 保存点
来源：http://www.sxryk.cn/163lvtnmwvy.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163egsjrcnw.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ssnfnhyg.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163lcpooipy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163mikmsmzn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ecrurnvm.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163crnohqqp.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163mozbjxko.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kyrhcjml.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163nylinznd.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163onlsneag.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tyczajcp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ebujvgsc.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xhlxsrcw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jqyfqeoc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163frfcfslv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163bgzcqqjn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163oyryhmzq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163dirprjkr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163uofyfakp.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163yyirbgdz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lmdvnqzs.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ttamsopv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163bvirkzpb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zoyqglgf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163uyfjvzzd.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163izezkgax.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163gyawqssy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163yzhoqaub.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163hyyhhxkd.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ffyxmegb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163iewzjeos.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ekenobvs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163twkiqfpd.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163fewmgzyk.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163pnqineog.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163qfmqaesw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163tkibypfo.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xvujvseh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163kurxgaam.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163kacprtce.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ydmndyiw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hesobjba.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zhwlavyu.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163cliysgfs.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163atjuknrv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ystneyjj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163fnmgcmsx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dhtwcvqw.html

================================================================================
来源：http://www.xuanzx.com/163ldaeatrt.html

R. Bash 专题
来源：http://www.xuanzx.com/163wfgzjrfy.html

================================================================================
来源：http://www.aibaodan.cn/163xfnytmte.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163zqgvgfcr.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163iytmztwu.html

set -euo pipefail
来源：http://www.xuanzx.com/163umaueezv.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163mpjqrnvv.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163msnvstiy.html

[R03] 只读变量
来源：http://www.sxryk.cn/163vvthktma.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163iiqjmilk.html

[R04] 位置参数
来源：http://www.xuanzx.com/163puuoaixh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163kafuzlcc.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163dintmugd.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163djtqmtii.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ejseeahb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163frcelege.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163thqrzcmj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163efhhufav.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xwqvcvxm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163tgwyeyfr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163plkvbjtx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163pflrufpp.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fbuvgonr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rdeatatl.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xiuddkne.html

case "$1" in
来源：http://www.sxryk.cn/163vditdtua.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lxbxmmii.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163uirnalcx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163lfflsfuk.html

esac
来源：http://www.xuanzx.com/163pgfqhdlq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163iuqtmqsw.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163cerllstw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163dzitzohz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163hcawqsiw.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163yzslflys.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163qeoxcgqp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qfgqcwto.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vbqudgzu.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ibwvkmri.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163fxuxenkp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163nbedbjzq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163vagkfypf.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163bbqvasfm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163zjhdmvko.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163mnczjnvc.html


<!-- 参考信息 -->