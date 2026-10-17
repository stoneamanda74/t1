外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163wumwtlmz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ueqlnkmf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ycpkjbfy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tpfbmeiz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163kaqarepg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163rbsesjxo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163uitmezfs.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163nsjxfbsg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lxusgxws.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lrnzbezi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163giswnuvv.html

Ruby: a == b
来源：http://www.xuanzx.com/163mdcqimnd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163dkyfsncq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163gesaygwv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ccreqsrw.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qptyhtna.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163zzzuwpdx.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163cskpaqbm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163mnelzvqo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ybmwwtzz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lkfrdhax.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163mhmtirkz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163nmdehfhh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qnypprgb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163zuehcack.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cgopmldo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gdsnkrtf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ddiibbfa.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xrpiegkw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163wmpybtey.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163nynuqqfy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163csmmobey.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163zjapskfe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163mwrpebel.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163llbmarna.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163orswbwuk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163pvaynhtv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163rxyrvrmw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163nssenulx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nrfhqtns.html

================================================================================
来源：http://www.aibaodan.cn/163xpauhqkf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ndbwlcdm.html

================================================================================
来源：http://www.xuanzx.com/163anuycozo.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ganluhed.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163qwdvogmd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bymtofxj.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163zbxkpvzw.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163tmjcklai.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163hlvhvugh.html

);
来源：http://www.sxryk.cn/163ayvjkbbq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163xkqdtfzi.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163tjysxvpo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bqbienmk.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nmjagcku.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cmaetpvo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163hxhlrxlf.html

);
来源：http://www.sxryk.cn/163kduhjiww.html

[Q03] 增加列
来源：http://www.sxryk.cn/163idipbbds.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163bhqvmemc.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163yzbfargw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ipndeknn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163burvsuoa.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163cfhimxjd.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163jlbwfhvn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163kgiwvqed.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163nrxniesw.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163tfpcaoou.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163bgaulghx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163sawtzryk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163gscftuas.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ojjamjpb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163kllhdsdr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dnneuolt.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163crqadazu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163puhotsqd.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163csunabas.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163fmraoire.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163oyvhnuvt.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163vgkahigm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163tptkzyyd.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163hqzgczne.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163kkyjrhai.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163blckmcqj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163huzlxxmy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163uczmssel.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163znabzbvc.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ycpjuqlh.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mrxmelyh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163rydcscvi.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163pxmlyngk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ttsfymig.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kpssuppv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163evhujcyu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163rswcliql.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163lqdixzla.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163bproevlh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163xyrziume.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fdzktkgy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hlpampif.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xmedcgap.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163icghlbrb.html

[Q24] 去重
来源：http://www.xuanzx.com/163qzneaxsg.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163tofpmgjj.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tvvakysv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163otywstms.html

[Q26] 计数
来源：http://www.sxryk.cn/163jvyivgrc.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163wefucwtt.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163hbrwqowr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163yazaudot.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163znpzjzwq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163gdfqvboz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bzkndopl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163qwswczao.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163gbnoapug.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jmaplzwb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163iteqjtxk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163uzbgnrxy.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xbrkcpxn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oyhowfoh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zzsddgqn.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163tldokrod.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163sglvncfc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163amucimcx.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163mrjlqfnw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163nxxvjgvv.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ynpdwayj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163acyheyab.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qllzbfmr.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fyisvlre.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xtlmmavo.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163warwaads.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163wbdcafmi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163qmuspdvt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ymanlxhc.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163oeknfjci.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ttksrmub.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163gtldxyrv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163jscckjzw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163befvzayo.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ahwbwzwu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163xahttxas.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ctwocdvv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163gpiwrjgr.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163zapoflgf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ufvobhba.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163cprkkjif.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xvoqzxmf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163zhuvpfpv.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163zgzoalaf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ghpavgys.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163vpvpbkzi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163etpkzgno.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163arwuynzp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bxuabtkr.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163tkvdkrli.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kebkrqhs.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163tgqnkdnk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163dlvvfkom.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wdizvheg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hjrxeslc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163hjenkfbh.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163bxuzqzps.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ptvjevnm.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163flqviqvi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ffwiajrp.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163qnhjabpr.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xyildnaz.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ntsndipa.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163gtdxkxvi.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163urdpoabx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163bfxsihvt.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163avwafquu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163pkzbuqbd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163cdjvushh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163cyikbmfk.html

[Q57] 行号
来源：http://www.xuanzx.com/163xzeiluht.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163puttjccj.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163qunkrnvp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163iqmwpvkt.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kgqwciag.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ghnhiybr.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163pdakmous.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bjviakpr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163aupyzjue.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163wrbwnlum.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xommxkwg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ekdzqfkk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ztgjiwhb.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163nzoturqx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vpyaflkw.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jfrqobos.html

COMMIT;
来源：http://www.aibaodan.cn/163afmqofmb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163hlfjtdhg.html

ROLLBACK;
来源：http://www.sxryk.cn/163dlfqhpyk.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163uhrdvdud.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hcsxylzl.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163xgccemos.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ceroobqa.html

[Q68] 保存点
来源：http://www.xuanzx.com/163lquzpszf.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163zyxpqlud.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lhatqdmd.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163kealtjgm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ddjschlk.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163lttjwsxb.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163othvxaoq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163xdulvxor.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ddxfaldq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163zndptkjy.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163mtfzpzlr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163bbnccjsy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163artjbzry.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hiechpsm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gxbkrnye.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pkcgezsb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163vvyrfgfx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163iyuiphud.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163wjgqvpnk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163yfidioka.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163taeededl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163mupoujud.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163teeavrei.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163cpbcobbm.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yyzwxowu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lzgsnbyl.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tsebncsf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xyjpkvrj.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zcqeqlos.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163drwazgpt.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163kebufvot.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163lpeyofut.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163vcbfamxs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163pznkqfza.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mmkdeylu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163bqydvdee.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ottyfafu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ptkcbosl.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163iolzepcj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163abuvfucf.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163oxikvrul.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163cgutqclc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163njagntyb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163wldwhbxa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163pnxrolyj.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rnvdyebe.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163isjzhnze.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163syiypicu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163kyztfjcw.html

================================================================================
来源：http://www.aibaodan.cn/163eddjyswb.html

R. Bash 专题
来源：http://www.sxryk.cn/163bpokgweh.html

================================================================================
来源：http://www.xuanzx.com/163kchibyww.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163hieawipi.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163biqmzvxj.html

set -euo pipefail
来源：http://www.sxryk.cn/163hfkdrunp.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163tyzfmpqa.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163jtjsdxiy.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ynafpwbw.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wudievah.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163rkzlexdc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ygrlsnwy.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163djsscixg.html

name="${1:-default}"
来源：http://www.xuanzx.com/163vbsffuxt.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163jcgvuxqy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163sboecqow.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163yqhnmgxy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163dhlrknyq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mgtnbrtt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163fuefuair.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163jundcfbd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163puspdfco.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163gncudiud.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163etzcgfmb.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163cuwhcpsr.html

case "$1" in
来源：http://www.sxryk.cn/163khdmhivd.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cyeofsyp.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163eogtjlwv.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163khhkfekt.html

esac
来源：http://www.sxryk.cn/163sejjixxy.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rdqdmxzo.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163myecofps.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163usynydri.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ehwkkcyb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163lfsphmii.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qzsnyxgo.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163omcgljdr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163sqgludby.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163wlwzgjlo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163pweqrhgp.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163sqgeivqe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163nwwaikna.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jlbblcbi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163jkaqdrpd.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163pkfdubta.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mckfcntq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163cxcmedid.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163wccohirj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wihmizav.html

echo "${#s}"
来源：http://www.sxryk.cn/163gtdvffji.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hkhfgydj.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xisqrdxm.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163caanrrzg.html


<!-- 参考信息 -->