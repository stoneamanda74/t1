外链999!wailian999！

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163szpttvrq.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163kkgtwser.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qgorydlh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163yxtvtnol.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163dwmjzhde.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vdeemrvj.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163drabzdbr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163klhkflar.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163zmxxnfby.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bkqjyamt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163avxgqwjk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ctmiavym.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163rmgmdslh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163dcgynfnx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nlgtxwkd.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163kkoehzmk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163dmzqhebq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163tdoaldxq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163eymdreco.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163czlomhcc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163wowarbaa.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163shrzgngs.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dwzswkeg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163fzyykqvl.html

================================================================================
来源：http://www.aibaodan.cn/163dcpqpjqq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163vdljebhb.html

================================================================================
来源：http://www.sxryk.cn/163msrkqepu.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jmgpvbzc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ebakjpsv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rtgbrldn.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163hvrtydgx.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163mvckvvqw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mdxzrcko.html

);
来源：http://www.aibaodan.cn/163fwvtpdvf.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ktnzgfdi.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163dwforuih.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lzvtfxfn.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163cywiutpn.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163bnnkzbta.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ubpmhzrv.html

);
来源：http://www.sxryk.cn/163aivncuqm.html

[Q03] 增加列
来源：http://www.sxryk.cn/163sqfazube.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ybqumdoy.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wiawaufr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163axsxeijm.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163oouhicqr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163afnqpwrp.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163kwidmjub.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qasulgqq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163oyjeknvy.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bwghibzw.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163sdgyzljl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wcyepjfb.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163asgsmnlz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163kwjnxrdt.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163rtelgydn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nupgrmcd.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163nllgsfwg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163himbjkjx.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ctxafwnp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163qujzpkdc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jirpcula.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163immyndpw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163owhcgsku.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163pmssadcg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163oznlxcvv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163stezwwwc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ywxsmksz.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163babsloci.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163atzgomzx.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163kzoiwicu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mkllbhqg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163bzjlnbgb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dbxelraa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163jmfibmjj.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xptgwfdd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163krsxuvhk.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163oytcdcuh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163kldsdiwa.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xiwpsufu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mzctmckz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163dvyulbkr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163cehxexnm.html

[Q23] 分页
来源：http://www.xuanzx.com/163cflrtiet.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ycmjxwml.html

[Q24] 去重
来源：http://www.aibaodan.cn/163fnuoskct.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163doefpshn.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vquxppvf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163tshvqatq.html

[Q26] 计数
来源：http://www.aibaodan.cn/163wkqucjiv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wmrxafsr.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163cyvytxmu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163qpbifpyb.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ybgzbcsc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163jyyscmof.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163fqiapyoi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gtpijpwi.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163fclfafma.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mylfllcz.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163bpizztua.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163fqhcocwm.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163drfouhgv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163daxbvhaf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163iibswlzh.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hmcwsdqe.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163orsjponz.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xnjbkfrr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vzlpjdpj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ncyckieu.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163aobxgict.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163bfgcuhzf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bkoaskiw.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tdulcrwv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163aujkfztl.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wsafhppr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163advhafau.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163qoxauitn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rvwmrque.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163cqgmlbgg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vmxyqqxy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bpkxzkif.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163khkdvisj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163jqjsbylu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163gmnhmibb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163maddittj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bpjrkmxi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163wxonbhvm.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163urjyzaxm.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163zolfclak.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163dnbtzuqu.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vnvztgzi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163bfatnvpw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ezfbxozt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ygpasfud.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163mrqmairr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gcciztmf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163foyfvcqq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163lahfwaqq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163kqfiglre.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163nmeaamza.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163wqjjgins.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ipfudwlo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163zfpnthbz.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163iwltffwa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ipvbhofg.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163kgojwugz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kralpdjd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lbfjrknl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163xbkomrql.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163xhenpuek.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163odkgudtm.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163hlpirnyi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dzstnkoj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ikvaatjc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163aovngrlx.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ckorqxnu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163runydjky.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163yaqqsmkm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163bnkdysiv.html

[Q57] 行号
来源：http://www.xuanzx.com/163sjelyouz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163dbhwbety.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163speaagcw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163nkmfynwc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lpanmlqz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163slwwokjg.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163muydfugx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rccocpev.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163yunvzjyo.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vjcpsdtv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ebbgsnlz.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fybwpvxh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zmpshqvj.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163tdkzlctu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163xniscuyc.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163pdgplinq.html

COMMIT;
来源：http://www.xuanzx.com/163mnsqtdwj.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mmlbpfgt.html

ROLLBACK;
来源：http://www.xuanzx.com/163xcvpfguj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163iscnkain.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163wymhfqcu.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ikzuvfqf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rkgfrkjb.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163srwtdepd.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163vzucrcju.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hrqfemft.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163idhtunpk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163airscnav.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jgcvtlui.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163pdsqphtd.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zmujsawh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163yswzpqvh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tbkyyppy.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163qbivcbax.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163vdvadlud.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163nkvhqmes.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163kldbmptg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163skooxqqh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163wfzariwb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163pjtawtge.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ianzsiwl.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ltqveuhi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163qfanihif.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zbbedqnx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mhxcquzf.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163zlgtzglz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163xlfvytbm.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rdynigel.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lriywicu.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163wajylsth.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163syffzigm.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163dyvrevev.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163axkzsfza.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163amujjnkr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163xizakzbc.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163pgfzbmpa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wmxovdqc.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ggjvqouw.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163fpthxtci.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jtfalbbn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163huhdblwi.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163lnipdtie.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fnqqkspn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163rdbjlvfr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xlriykbo.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163akhygmhe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163wdfhhauo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163aikzfatp.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163utjcgniv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163dutubwgl.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163fqejocse.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ynyvyzvz.html

================================================================================
来源：http://www.xuanzx.com/163fkpnrkkd.html

R. Bash 专题
来源：http://www.sxryk.cn/163bkaqozic.html

================================================================================
来源：http://www.aibaodan.cn/163icojkaqz.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163iqusgqjq.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163iyupxoym.html

set -euo pipefail
来源：http://www.xuanzx.com/163vrohheco.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163iadrqcys.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163etwkxrxr.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163sgvuzgoy.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jqqqumbr.html

[R04] 位置参数
来源：http://www.sxryk.cn/163wahyxdug.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mmcgdgwu.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ukkbszmg.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ttmgeype.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wmeejjia.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163roatikgs.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163lnjqlawh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163dcfaomcm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163hccuhtng.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163nvccognj.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163uhhirfxu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163pwatilow.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nylouokl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163vimmnsao.html

[R11] case 多分支
来源：http://www.sxryk.cn/163oytzgevv.html

case "$1" in
来源：http://www.sxryk.cn/163hvvnlbaq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163vqsvduwb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163scuyivju.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kzzjeraq.html

esac
来源：http://www.xuanzx.com/163sbqzhuvj.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163svyergxy.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163zgwsiugg.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163klzvpgaj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jabxndhc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163hlfkhsmf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163xchjxhvx.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163deqqupla.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163yfcthoii.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ycdlcrab.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xsfpkzuv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163kjkieccs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163euxafvml.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ezhoubph.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163lgqjfwhy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163xauboycj.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163szjpkyyh.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163csvjclah.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lcaesenl.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xxxnlwks.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ibunnkwx.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ayhuycit.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163uicxjhmp.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qgohkapj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rgstzmix.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163yempgkvt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nrvmjqrg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ahvoghlv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hqazjtyv.html

[R26] 命令替换
来源：http://www.sxryk.cn/163pnonebis.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163wixthbwq.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163olzcvcyc.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163cqlbnllw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163nwgvjygw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ynpudzpk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zffmouci.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gsiyciyy.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qqqqaqer.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163plxfkilf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163qlcxrhgy.html


<!-- 参考信息 -->