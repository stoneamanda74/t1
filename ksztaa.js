外链999!wailian999！

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cbvvbdmu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163toneqdff.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163iidfswhk.html

Ruby: a == b
来源：http://www.xuanzx.com/163ygekyvzw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ndguomnt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xsofperw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yjwgrtfd.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163tjlrvmgd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163phtwdfvk.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163dkldgkwk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163xuyhsisf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163mwjelclb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lbsqlebe.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zelagflk.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zrbzlazh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163rkpcxkdh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163mgfneywn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gooinbdo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163drcwzjgd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163yagzmato.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163bsxhpprg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ybhmvxxi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163dxwcsrkl.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163titvympo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ezhagsdi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163vugssikj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163juzhbyat.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163inzmtdwd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163lodjjomp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pppegfag.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163gnknhbga.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163yrgjxoea.html

================================================================================
来源：http://www.sxryk.cn/163imunghto.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qggefuyh.html

================================================================================
来源：http://www.aibaodan.cn/163qbpxxljq.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jhczswjj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163mwlqtipd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vejoyvlr.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wtwqhtta.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163giogayii.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163hwbignju.html

);
来源：http://www.sxryk.cn/163uhkldrvn.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vistwnbl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163mlhohyjc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kelncyiu.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163blowsptv.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rabbxjmy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qlbhhzvp.html

);
来源：http://www.sxryk.cn/163nqbvdymp.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163nteuxukg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163rcosyivc.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163vnrfwgsj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163agqsnkra.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163oywkvxri.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163abqaattk.html

[Q06] 删除列
来源：http://www.sxryk.cn/163nschrhsz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163rgixawfc.html

[Q07] 删除表
来源：http://www.xuanzx.com/163stokdzus.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163cmjoypru.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163adshzfwb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rftwgzcq.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163kawzckwb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163taazmppz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jqjwsmyl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dhlwfhbz.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163uqxiliew.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163kdcmzhtu.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163hembffof.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163hmsolgep.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163akjvwvla.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163walgfyid.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163utlhkftg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jvbiqzxy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163caxfxrmk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wiqfrpvy.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163cfpdxxqb.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163phpwsckk.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mbgcokso.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mafpxkll.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163bfqmrnbm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163dlnfzhnh.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163wsjyjird.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ntcuztsx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qzpdwqzx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tronjhdz.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163eptfulkl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163lzpwnbsl.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vgrumyvp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163abapgfmb.html

[Q22] 排序
来源：http://www.sxryk.cn/163owjuklln.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163foyiitwa.html

[Q23] 分页
来源：http://www.sxryk.cn/163cjuzokhk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qkcigbdc.html

[Q24] 去重
来源：http://www.xuanzx.com/163bekwonpd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mheaojiw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163upaekbbt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163nidxpbyv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hzrwxypo.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163gmqgqqfs.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163fpuurxek.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jfvcwjpy.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163gbjjkxqe.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163sbwvxsxd.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163mgfllupp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163doktpbup.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163cpykqvqj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jwadgqer.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lmadjjty.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163zcwwibly.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163osvbuygo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163novbhgtg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163hbyzrafx.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163itlddtbm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ucxerinl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163tapxomda.html

SELECT * FROM (
来源：http://www.sxryk.cn/163xznjpsko.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tarpnvvt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163gsevjadq.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nkuhujpd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wupjjory.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fobehuwu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bcaaiart.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tkwvvayh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163phnvhbyk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163mygnhagz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163gatlceib.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163xtzunxts.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163sbghqgwp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163apzqrahm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vvpxriia.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ubjzdbip.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163nlrfkpso.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163zwebsndf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163pdmsxqpl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163lepybkfv.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qmjlarap.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mqyrxgmr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163qlhguqfv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163nqjudejr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163grwvalti.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163feypoejl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yzvqnghb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xdfwbrhm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ptasodov.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163pwcezark.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lflltbtd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163lrnvmwpx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jseeybea.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163aboekpzi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163pgspzexf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163dfktvvqv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163wneadcho.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gweedvcu.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163cuytbzqs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163xwgwqtcy.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163txifwnxu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163gecqieje.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163zezmepnl.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163afmsypnt.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xqachgui.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163arqanqio.html

[Q54] 清空表
来源：http://www.xuanzx.com/163srljwtdn.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163tiycnbbs.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qgfkilik.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ivhbxmsk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ceznctsh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ajjcvbik.html

[Q57] 行号
来源：http://www.xuanzx.com/163mgvftxjq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163qcasblyx.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163kztxlybp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163sabodhyq.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163jknjnudz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163iabulgsw.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xxgomwcg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rsilhbwz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163kqyqewno.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163sbkwzaoz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wqjsnvyn.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vgaeqevc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ihdsnoll.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163kbvbuvju.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163tkdvpgny.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jxkvpjth.html

COMMIT;
来源：http://www.xuanzx.com/163ahgsphtd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163vcutdrtz.html

ROLLBACK;
来源：http://www.aibaodan.cn/163dpbmqizb.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163crszojwo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163emrbvapg.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163kqdgtxjp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ftecmzsl.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kdlgevkm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163wrzgoepk.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163hialcgcw.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163mgbbfcnj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jfsihniv.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lhtijlfi.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163wiwrdqdr.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163euydjxeq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wbjopxpm.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163yrtuilgs.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163bxnpectn.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163pvfshkdm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ywtywgtp.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163gsrxxmpw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ztlsxaai.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ojtkcogc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ouvcaxgo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163olzdjxzc.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vgrzxewd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163fudcttvq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tnejmxkc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163zhqbcuxl.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163gpawebxz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163qzapugkx.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163lhagivaz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163butabbxc.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163eiddaotu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163matrwwqb.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163kpyopgik.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163jvnwsvjd.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163fhmtqput.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lfbmjcip.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163oxvzlnhh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ieckqskk.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163xicckguq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163teyiolnc.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163wuyxmxqe.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163yzqzaiqs.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163navhuwdi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163audiuzpw.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163vecnaczy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163lvzgsanb.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163mjgznhtr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163anhpnnru.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163nsevxnoh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jpfqmmvx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163fgixfrux.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163wtnkeusr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163iilexgnz.html

================================================================================
来源：http://www.sxryk.cn/163juduzfgv.html

R. Bash 专题
来源：http://www.sxryk.cn/163nzrvsffd.html

================================================================================
来源：http://www.sxryk.cn/163jsfrjvel.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163faukemkn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ljfryzcs.html

set -euo pipefail
来源：http://www.aibaodan.cn/163awjfowca.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jozeznlv.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163qfulnycz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163srjzoyck.html

readonly PI=3.14
来源：http://www.xuanzx.com/163fmpgngxq.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ddguutkg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163giixbtsu.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163lgbpvsat.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vmlltxvt.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163fekvypms.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163aswxyazp.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ylvbllut.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163pwiptysi.html

[R08] 数值比较
来源：http://www.xuanzx.com/163tqynugxj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163snpbocwe.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163rmskrgwi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gdzmmfux.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163lmewtmhu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kcwbsdjs.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163mhhwuyjm.html

case "$1" in
来源：http://www.sxryk.cn/163rkyuxbgx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bgttlvpg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163duovutiy.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gkooobar.html

esac
来源：http://www.sxryk.cn/163qwqlubef.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163jvsaphmr.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163infqwjcn.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ixqcqxca.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163zwzamsqj.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163flalipbf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163xbchxsxq.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163nrjlqtyo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163uhejbslw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163knycjbyh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163urogsffr.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163kblgiytb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163mlxlheom.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163iejpbwws.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bbbtismg.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hpqpbfux.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163jbveaxcn.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163uohiknyx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163uxmdeqki.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163uambzajq.html

echo "${#s}"
来源：http://www.aibaodan.cn/163qymnxbap.html

[R22] 截取子串
来源：http://www.xuanzx.com/163bibhizgg.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163nrstzszl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163emgzmwce.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163umqocifq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163mnbdtczg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jyxbiouy.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163byospeha.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ahvwjprw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jrbsnoew.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163nbegvufn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ndltxjum.html


<!-- 参考信息 -->