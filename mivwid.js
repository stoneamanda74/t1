外链999!wailian999！

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dvqejexr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163annymivy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163aoafufdn.html

Ruby: a == b
来源：http://www.aibaodan.cn/163jlipbqup.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163fiehxcis.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163zxojhxah.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163jexkbzco.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163auzgjolj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hctblawh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163kzkqwuug.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wpzjwone.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163wgfnuzia.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163gmpnnnin.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163uhvuehje.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tbnpfwrj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163bytdbiun.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ssejqidd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gjoeswwt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163suezvumu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163nmambgwt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gggvhedw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163cvxxlxtm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163brspllom.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163kzkhkxpg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163mmwrbvyz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wkkubdtm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163lxpmkyih.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163oqvqpagi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mpxuvvfs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163edwrcvqn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nqapwpuq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163kqdkwodb.html

================================================================================
来源：http://www.sxryk.cn/163bsvcmcif.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163becpirtj.html

================================================================================
来源：http://www.aibaodan.cn/163vbxrpvvs.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ewryopmz.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wnhhotjh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163opjuxjcp.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163esqicich.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ouwzskwr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163jtjnpvjj.html

);
来源：http://www.aibaodan.cn/163rmzxcgby.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ayfcaolq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jhlicreu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163seffcqob.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ixinejmo.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163cffkuztt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163yczyaokh.html

);
来源：http://www.xuanzx.com/163gjqmmxrd.html

[Q03] 增加列
来源：http://www.xuanzx.com/163uqrjedmh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163thdhgstb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163pwwijqyl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163wsktpygf.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163bqxeosta.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163koleekhi.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vhoagiyu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ezhdmhhx.html

[Q07] 删除表
来源：http://www.sxryk.cn/163qcrfwbvw.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163kvzskori.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163nolglpvp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163aqzhjmfk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163lbracnbs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163azuksfao.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163stpzcens.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163fafujrck.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163uyuaqlxw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163hcopcyuw.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163kepwumhn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163gjswwicg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163jcviycph.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163tropboyr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163moduqjri.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163mjbamooe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163mrltbuhz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163hdaqpmon.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qwxnlobn.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163pdconruf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163grpnpymt.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ptpsialn.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163wieljxnv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vnrbpknx.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163wyvngwbx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zgjzbxse.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ykkfwkkl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ahzajatl.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163mrmextop.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163okuvhnmp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163gqdupyal.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163bhapvida.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zgsiobvh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163loefwdvj.html

[Q23] 分页
来源：http://www.xuanzx.com/163cfcpebzc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163zpehaavi.html

[Q24] 去重
来源：http://www.xuanzx.com/163fgdrhkvx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163eahrsuex.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163euvqitkg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mzwupfcm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163gzzicsnv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163qdptxbzz.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163llkopgjj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163bywnyrso.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163cncqqwhp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vthabppe.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tgithgcv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163kpwbqiiy.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163pruijdrq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jjpbileo.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bwyyjovs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hwpzptmo.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163muspqucj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sasaxehz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163jowqmxhc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zowfqjju.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163cxoubloe.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163shyxvmho.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jqxgpkat.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vbqjzlhx.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163attiumok.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163zftrepkg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163slvwytet.html

[Q36] 左连接
来源：http://www.xuanzx.com/163rhdejkmg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wnfofity.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163eorfjsko.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163kvzlallg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ucnwnvgy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163tocdmyhu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163otybcqwx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163eywlnzzq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163avwppfrv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bjzaxeoa.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163tkkcdjbd.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163fnpgmuis.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163axilcije.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163rgsgechp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163weexxosz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163mbafvqcd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163kuvwonfl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163wflgstkt.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163lweljino.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hxsaktfq.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163bozoxnyb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163zusdwtgm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163vxmrkmfn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dtsjwqkc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163dlldhyzk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xljvqkvq.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163tzfnbood.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163yueujwht.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163oakachyt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163knyyoapc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hkeowkhf.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163slhfnhhu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163grkhyngc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163bciivxjy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163doocxuqp.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163dzkuxqqg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163zglxqfoo.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163etwpifzu.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163qgmmhufr.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hjtkvzql.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163qarvcpxr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163xmtrophd.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163pstmafzm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163mppjlnnf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163htorygnk.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163vyukkkhc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ocdwdojv.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ivnxcfcz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163jlgckyqg.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163axbsqumt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163bdkqnjyi.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163rltrslal.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163lbdhdcdt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163feulznfa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hvvsrfkh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163xhuyyewp.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163pkzcrpuf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163expwbjuh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vsajaxtp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uwrtecgz.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163svlfsgxl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ajzdpmzc.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ivwpoovm.html

COMMIT;
来源：http://www.aibaodan.cn/163gkryymrr.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163lkbtvafi.html

ROLLBACK;
来源：http://www.sxryk.cn/163malwtzoi.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hqxlgrwu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yvzigytt.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163xisbhzhd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163fqodpkfu.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ubbmzcav.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163tnnkywnn.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hosvoufx.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163sirdkakw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163lqaayqgr.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163doslaooe.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163kbsmaxok.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163veryrdhc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163onadzuow.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zolqvvmw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rwahlnde.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wicsbvwu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163istujtvn.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163rbeysuvd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163oklmwebi.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ghgtijpf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163grbvpzxp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163nhcgvkmp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jiqiolni.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jrhjolbw.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zincutel.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163hybgiswe.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163hfdutdie.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163eooderpx.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163mbgahukl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163dtlqxilf.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163hevusekp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163wlmiuoqv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zwmjjuyx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bwbmfetg.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163dscfjpvt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163lyzjybsj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ofjoqmyk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163detkgsdq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xlvbrwws.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163phybrclc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ksqickgh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ainzwtdm.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163hagcfzsg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163clukdeje.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163cksycgfp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163gizrosgm.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qxlizvpo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xczchher.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163xawudeoz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163befmfxiu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163fiyqeeao.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163feiwsyjm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163mcuhwjzu.html

================================================================================
来源：http://www.aibaodan.cn/163yusnsixn.html

R. Bash 专题
来源：http://www.aibaodan.cn/163mdwrzktj.html

================================================================================
来源：http://www.sxryk.cn/163izxoomeb.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163dkafmvuc.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ypubxtzw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ynpjeapb.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163maqrxrlr.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dqioghww.html

[R03] 只读变量
来源：http://www.xuanzx.com/163lfswxgoo.html

readonly PI=3.14
来源：http://www.sxryk.cn/163mqekbpqg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ccopzcff.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163fnsmftru.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163tnnyfvsf.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163mpolssgh.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163gszzaehe.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dcwgkvqw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163nssudwnn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163qgifoerd.html

[R08] 数值比较
来源：http://www.sxryk.cn/163brgsfqaa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qieizlsv.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163goyzgjcl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163awzvmuht.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dnikijpa.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zbwlptje.html

[R11] case 多分支
来源：http://www.xuanzx.com/163blpootjz.html

case "$1" in
来源：http://www.sxryk.cn/163jfghkzcf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163lzcaypmx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dajmntxv.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163mokbpjib.html

esac
来源：http://www.aibaodan.cn/163cuoclwdf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163jkhiacxg.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bhivosjv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163knpzajgo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163mclvqydb.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163cwdzgswx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wodohnmt.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163gpcokwtb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vghncnpo.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163pbuilici.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163zwnwfcyr.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163miwtikvi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163pxzdfgvn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163omfyprmn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163yykiarqc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163askuwcae.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163lrrvvppk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163muztwlfm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qjzhkywh.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jegyxchz.html

echo "${#s}"
来源：http://www.sxryk.cn/163yhtackxa.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163hqclqyta.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163aokfrpvp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163kpiunypw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163erdwwnhe.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163eoqwscjk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jytffqrl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163eibwbagm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bdylpqps.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zcliplss.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163bamarddr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163wgzibxty.html


<!-- 参考信息 -->