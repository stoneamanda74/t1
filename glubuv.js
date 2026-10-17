外链999!wailian999！

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163alkvqhxi.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ewjtxffw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163wbibyejf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163xyflumpe.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ruezqjyt.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163scorrlvg.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163pfzfvmtj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163dkuztmqo.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163gipenkfh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ttoagbha.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ewxkrmpg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ivycqkks.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163evxerjjj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rtzstwxe.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xeuguloj.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qqiyryat.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163nogmzeeb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163btxglsav.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163zybibqvk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163pmjtxzbg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qncqynlj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163biqmmtji.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163oxmwzjrf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163pouujswo.html

================================================================================
来源：http://www.xuanzx.com/163krgmdscx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163sjhxervf.html

================================================================================
来源：http://www.sxryk.cn/163fuunippc.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pulrbyfj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163uogtlrru.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jjpofqlt.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zfcuvzbl.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wlcdsoyl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163auhrhzqt.html

);
来源：http://www.xuanzx.com/163ysghdkvo.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163smjedtsh.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163snwcgfau.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yobrjwww.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dssihdty.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163kevnzafe.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163nobvifsj.html

);
来源：http://www.aibaodan.cn/163btobfovy.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163gxqrwhrj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163okkvdlwc.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163lfiwcgxr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163wokddary.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163dbmxonpg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163tpypwjze.html

[Q06] 删除列
来源：http://www.xuanzx.com/163blypmmdi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rrdlxozp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163sbtpivqw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vmfcjrzq.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163wmiuwxam.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163lklvddqv.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163xoqtonjp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163vhfjlhok.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163vqejtajb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163kfudpcps.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163sqghxiov.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163wpzccxxa.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ulbidxeg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163nkdsdfet.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163zhrawpto.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ggqaclvt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163mpduakws.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ajcqjjdm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163oxerhsby.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163urmmkzme.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163elebimgy.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163yvzlrmxg.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163kpjynaay.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163srllircz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163icmxnrtn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163evhdvdso.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ftsanqyj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163qdpfnmem.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163sypfqlyj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ndcrhosz.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pxppybnq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163cutdtoie.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ekaajqrl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163fmndoljv.html

[Q22] 排序
来源：http://www.aibaodan.cn/163baryyrpa.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163yqmxerxa.html

[Q23] 分页
来源：http://www.sxryk.cn/163kzliydlm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163dieicbin.html

[Q24] 去重
来源：http://www.sxryk.cn/163twzqatfx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163xewnbpfq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163gitkswfh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163oewdpnbn.html

[Q26] 计数
来源：http://www.xuanzx.com/163rnyfbdke.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163cprviilg.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163njohhmqq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ceordati.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163bkazpaaq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163shkoyntz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163xvpyllyp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163nzuprnln.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163cxxolugb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jqfkfksm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163sqilmnpu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ecwjldlo.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163hruxhcjy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163djzfgosc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163mnygfjbl.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163puaxlivi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163obmsgkeu.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163xnifnslq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zbfqvqiu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163qnkdjjic.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163soskrizn.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pelomsrc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ylpaxmba.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dborwsuq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pdnunmti.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hmgluqxl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163txsalkgi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fzlhtcpg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zvlnlhtu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ubzwmidp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163sirsucfe.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ptciyvfw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163kgfrjisa.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163lxeiaeam.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163cyqnszji.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163qpmqyish.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163osdngvmi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hqtenktr.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163kcucoepe.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163smdzhptq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163fkiqwpzt.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163zrhqznjf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163dmksrpvj.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163dyvdgznb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fgdvicmo.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ivlbukit.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163veahtjeu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163zitsphrn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163otkaqtbn.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163lrdfzjsk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163pwgquohn.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163sixwupbi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163bcbrsstm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ybzdhlwc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163zklnywsl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163dveqwxuc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163xekwsqha.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163mqcqwhtf.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163opzvhwov.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163slbqhkzk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163olmjyomg.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ubtwdsdi.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163oadnqysk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163wieaftip.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163osimfgjv.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163iyotxbtc.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163pvgyvjpk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163saauufum.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hnmtdvpd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163fyxghlmf.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ubhcbooe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163emovzyky.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163bscecmfv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kwdyufsg.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163eloywhdf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163yhxcvwrn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163wtlwiukx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bwkskfaf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163vtwaysad.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163mipjwohy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163botbftbt.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pfbvgyni.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tkerhxco.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163iptvfzcr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163odztijai.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163fcfzrirm.html

COMMIT;
来源：http://www.xuanzx.com/163rmxqofxr.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163nqbgosuf.html

ROLLBACK;
来源：http://www.sxryk.cn/163uoqclfys.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163rwusbdvr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163xsgfalmt.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163dnhqsipq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163zncdckzi.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xnxhkaqu.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163kjaviven.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163acqndgrg.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163nhuvlpss.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163haqthznf.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163dnifuxqs.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vwknvtvb.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ckjaguld.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163jviapklw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163wdsztiif.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vzxlkvkw.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163hikpilbg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163igisowhb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xojqcvoq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ieiqeynt.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163xzlnqztc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163uxjhkjyy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gfjwzeth.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ngpfrmzn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163opjnitrz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ododjwby.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pixjfqrh.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ksjnfxnw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kqoqwkbf.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kuvymaue.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xcysnsgk.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163akjgyynk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163krmkobhr.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163stsikzlf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163tpspyoll.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163wumycscm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163iarudptu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163gnsazhze.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163zdildwge.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163zigncrfo.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163tmratgle.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163qjfftaqw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163yaioyaem.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163gcsyvzne.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163abfqyrkg.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163yaxznfzg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163kyvyfhmk.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163eylbnqxk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mhlagxzf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163gjvhrjvz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163lagozrgh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163zxhyizyq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wwurvfsf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163unswekip.html

================================================================================
来源：http://www.aibaodan.cn/163cioowsgo.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wdeqsgta.html

================================================================================
来源：http://www.xuanzx.com/163xlwpbgom.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163pqtoylbn.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tvhxcjhv.html

set -euo pipefail
来源：http://www.sxryk.cn/163zvdqtxol.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163pqhrklml.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163nlwpumqc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163oinidpqx.html

readonly PI=3.14
来源：http://www.sxryk.cn/163mkzoylon.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ahokepbd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ysajcunf.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163gqgfjzop.html

name="${1:-default}"
来源：http://www.xuanzx.com/163jlhyyvtm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163uvukcmtz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qeribnqo.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163brqpanrl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163svxcdvaw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hwptpcnw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163hwnvbivc.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163kskbutsd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mjxmvinu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163gwbvwzlm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163jqjhmdew.html

[R11] case 多分支
来源：http://www.sxryk.cn/163etfjysez.html

case "$1" in
来源：http://www.xuanzx.com/163leeyqgnx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163umiosycu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mhkcvuli.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wwdncdeo.html

esac
来源：http://www.xuanzx.com/163bbucwnaa.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gxuwbcqe.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163mjhjtpge.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tdiovetv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163xelfhufd.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163cfbhhuph.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163kuyrrxcc.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ahzqkorj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163iiaamyoo.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163cfncurvf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jgxsmtwr.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163aojjivjc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163qrlmazde.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zxbsaqab.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163yyzvxfqc.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163idhvslvx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kgrrmfib.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163vjltmjhj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163kejuajgd.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163kjyjurhj.html

echo "${#s}"
来源：http://www.sxryk.cn/163vkjgnact.html

[R22] 截取子串
来源：http://www.sxryk.cn/163mlutbozy.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cubxmdfl.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163fsulsztj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163wsaoixev.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163izrtrgdw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163oawyxrtf.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163misbrxep.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ielyvbgz.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fmmngkuc.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vmpqbwuv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163jgcsazai.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163obxbpvsr.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163rbldtgju.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fwjdmuch.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fjtccttk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163anodkxdu.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qveglmlc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wsdwqzip.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ervfvuga.html


<!-- 参考信息 -->