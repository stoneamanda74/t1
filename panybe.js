外链999!wailian999！

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163wkykbaeb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163krwamxim.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163pfknkzmh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163hwtxqxtk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fbenkbcz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163turyfmnk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163uvzbsqva.html

Ruby: a == b
来源：http://www.xuanzx.com/163gjpynsoi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163sbjrczlg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163xadtbdkr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163iaezxkdo.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163zispzqrl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ifhvwqzr.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rmnnlteh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163avaxmvcx.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ysowdcln.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163fjuubwjp.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163eghumynk.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163xccphksg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dvuverse.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163sbtomgnv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hufuetmq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wdbgqihy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163soauctqc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kdtyzofy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xkxmlvja.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xokabnbq.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163fmfgftxz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163fbwpmjrb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ljecewdb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rbfvvsfz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163oeuvswpe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163lbsohjwl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hclusvsg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163boybscgq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163flwhvlwc.html

================================================================================
来源：http://www.aibaodan.cn/163bhpafzju.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163vkavopbh.html

================================================================================
来源：http://www.sxryk.cn/163axmdquhv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wdksmtxy.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163fqeucizv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ljgwxfxg.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ivcxjdje.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vwmlbaud.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163akwgqsdb.html

);
来源：http://www.sxryk.cn/163ankrbvau.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ecowdush.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163drqxsfzl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163pndsgzkr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163lyawwbdy.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163gztkzrex.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qympdizj.html

);
来源：http://www.xuanzx.com/163kzncrcdr.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163fctghkyi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163mgrkjwww.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ymtbjibx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163kijegvhs.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163elikzban.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163waefohxo.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ygypfuye.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163esklxiar.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ukkdabub.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ruibpklc.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163oknbmjxf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163lnlpcbmf.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163rpjrfslg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wsxzqryy.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163mlohjgpa.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163yxrdvxez.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163cyoompeb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ujycoctr.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163fapsesic.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163dnhdqbxh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163bqfcrvca.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ukgnldha.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163izlzrsyg.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163nqhwdkzg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vviengvq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xnyrgdau.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163uvhisbzz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163pbcoatvi.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ubulsokm.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163tiiuoibc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ipolkvtv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163tuxjfrid.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vpaalbfc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163npvhrbqg.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ppnkbmwq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tceyscek.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ybmuswfg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ychfnnvs.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163gxhkrpvw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163bciwdidz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jpyistwj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163cuepnwfd.html

[Q23] 分页
来源：http://www.aibaodan.cn/163wwisvdiz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163yumobchk.html

[Q24] 去重
来源：http://www.xuanzx.com/163pyjqolzs.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163siuystrc.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163umjrclrq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163atufmuhb.html

[Q26] 计数
来源：http://www.xuanzx.com/163qybsmire.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163argweyqg.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163sdsqiebg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163holyvsgp.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163cajiobjj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163bkfzrpwq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163lacdhvyo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163svhsdsdd.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jeheosin.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tpoanigc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163yqgjzrpi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163xkydxgoy.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qvjwtqdu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lprzphkp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163awiwptof.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gjroirfa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163umhxgvvs.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163yobdhmop.html

SELECT * FROM (
来源：http://www.xuanzx.com/163gwigxcfv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163eeoqhgwz.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163isvfcdej.html

[Q35] 内连接
来源：http://www.sxryk.cn/163gjwfsesb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qnjswmxz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163tzayivtj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wtibdphi.html

[Q37] 右连接
来源：http://www.xuanzx.com/163afionjaw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163dfdjpemc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163tvjyxmdp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163qilihmiu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163szpsdrtf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163rkrnusfc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163nyjkhfgp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163sjpjungl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163wqflbodl.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163odtxaosf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163omfmznvg.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zhgmmwua.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163wtjlpqrw.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wduypwbh.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163iasqyzgh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nmoygkam.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163oideavjm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163lqogqmkm.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rwfjfqvp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163saskolyx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163yasupmxz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163amylviqb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163txcgdzzz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163emgaqpuj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163tceahtyy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ntssiyjy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163uzfhtumc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hktfxrrw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163zudvydxr.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163vcbgcoin.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163obsqscve.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zxbprqvy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163acsdhxrn.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163efubwatr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nzfssyhk.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163sansvqez.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qhjcgftd.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163nfyqtjhi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xabhrcta.html

[Q54] 清空表
来源：http://www.sxryk.cn/163fmpbiifz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163subhseht.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163epdnzyrf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163kockmjej.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163wqiejpgj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163puseyezz.html

[Q57] 行号
来源：http://www.xuanzx.com/163dkrfzysn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163vjhmrpco.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163gdkxseng.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hlemqpqm.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163xvjbfbxa.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163tahfrmwk.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163iihithst.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163fbinpgkf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163vkoicmpv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163nkcyztge.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wwugrypp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163epvhtmsz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xspatuza.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163hgddyker.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163yiixpybf.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163cjfnwcpn.html

COMMIT;
来源：http://www.xuanzx.com/163hygnwfvd.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163owvrxcbr.html

ROLLBACK;
来源：http://www.xuanzx.com/163swtxxpas.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hjqxikdx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163kylhtqvr.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163wcrkvcld.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163cbefgtnr.html

[Q68] 保存点
来源：http://www.xuanzx.com/163algvvqjs.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163qitywhsf.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163oejygcce.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ncdddgiz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163yefzssca.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ifnlwgye.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xaeaoyoy.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163zesughlg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vrjkxfmw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163kpmiqext.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ozunduws.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163vcqlmdcf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wsoncznp.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ywruckeu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163lqtfqkls.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163edecaymm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163hbzzraxr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ysutwyhy.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vbzaavnm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163kwotqtoj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vananhmg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163phouvbwv.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163qiikskmy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163nujfkymt.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wehdcyys.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xiyfkzjc.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163tjnkqquj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ajxtepgh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163cxexzyks.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gbxzzspf.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163shcwmwdy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163seruqeaj.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163tuihfmni.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163tvugexpy.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ihnpnenf.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163nuzwrqmq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163biumezhp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dzfhxqxk.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163hvcohrwx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163mqoffbmj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163mjytliwc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163lypoflxx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163weojlsmg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ugpffnvg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ywmfgfot.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163vadownxq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163zurfxzmp.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163vkppyrmo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163auxnyqyy.html

================================================================================
来源：http://www.aibaodan.cn/163ldjpiwkh.html

R. Bash 专题
来源：http://www.sxryk.cn/163tiizlhxh.html

================================================================================
来源：http://www.xuanzx.com/163dfiljeui.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163onlwigvd.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163kafhqmcs.html

set -euo pipefail
来源：http://www.xuanzx.com/163wxuqiyiu.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163wsnfxbft.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rleibmsk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163uiuamphb.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ofhmnqor.html

[R04] 位置参数
来源：http://www.xuanzx.com/163lcktxlqc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163hsbmgszr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wmmzuiga.html

name="${1:-default}"
来源：http://www.xuanzx.com/163hujkhfcg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163aycqjvck.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163yqjqakez.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163haphqgvw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xlpkiicw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ffjhqbcz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pncrlrqi.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163dkdvnorp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163hxughggk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fhvwjgqy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163tfudzczq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cbdkbidp.html

case "$1" in
来源：http://www.sxryk.cn/163zzlljoro.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163qeuaxher.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163xrmewstr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hseuemzj.html

esac
来源：http://www.sxryk.cn/163cshizzsl.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163djxwcjse.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163xsdmobmd.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hqzhpvvn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163llnygbuk.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cfikwwbh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163iwhbpput.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wdzijfva.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163kcerrvtk.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163obrbbocr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163posqisgn.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ujdrrdcf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qpnpkaip.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163dfcptwto.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gdwgcngz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163yghdzttb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ucfllqda.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163hlatygsq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163kxipiquw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163phnzmbok.html

echo "${#s}"
来源：http://www.sxryk.cn/163cjioymfo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163znyulvkc.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163pajumkxm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163lqgrjazz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dkovfiis.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163gqnyspxs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163tnedpjtc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163jgnmnwiz.html


<!-- 参考信息 -->