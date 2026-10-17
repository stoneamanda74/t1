外链999!wailian999！

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163fhwjhbgg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163qvkrmsph.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163iadxckxn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rqgivrgu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cowyxlkh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163vmhhkcru.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ofdzknfn.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163pyiigayz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lvxokvpd.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163pgpgoseq.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163vttctpnz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163seaohumb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bzlfplcj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qniliftd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zsgeylzd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163jodlwymz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163kzdbayaw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fvftdbws.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163sugyfezt.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jjdeoofj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163bngzjyqq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163taampxsb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163yeudpezd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zvsyzsxu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163bgbyddoe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163cpxdedam.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163dztjnqmh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ktcpxklh.html

================================================================================
来源：http://www.aibaodan.cn/163euklavig.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163rhlvkpkp.html

================================================================================
来源：http://www.xuanzx.com/163ldgeqmpv.html

[Q01] 创建表
来源：http://www.xuanzx.com/163osciaoew.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jcjhgbvr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mahirtza.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163nhzcrqnj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vazxranu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ktlpdukq.html

);
来源：http://www.sxryk.cn/163yeiihemj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wqbkupec.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163bqxadtcw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uvnimwkb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163uyvemgwo.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ficslamq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163fvdsycmu.html

);
来源：http://www.aibaodan.cn/163rrmfryto.html

[Q03] 增加列
来源：http://www.sxryk.cn/163odlexroo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ilisdzgi.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rjvbqfkw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163iteukanj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163eciolrnh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163mofamelr.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163whaknzvr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163miguahhj.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ekyrynaq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ztidonoj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163lspxnjja.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ioajfjdq.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fwvqsfgw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163osickhxs.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163evkjjkez.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163cseepivw.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163tuynmzxr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ktxnkuem.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163jbvtmaxm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zkspbgco.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hdxzozzm.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ndlhfkhf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163bhsloqib.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163wrclkuba.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163etfepxnp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163cmbpiyth.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163daypiarp.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hxzygooz.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163hvstfqkc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163oeqripnn.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163tqzwnkzp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163nqrevdyp.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bqtfaadw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163utlhhpam.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163cbttreah.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163fhntngye.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kqggexso.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ggiewncs.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163kpvwbjml.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163poueerru.html

[Q22] 排序
来源：http://www.sxryk.cn/163wgaunqrl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163etlgxryg.html

[Q23] 分页
来源：http://www.aibaodan.cn/163isvgqmbw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163cddbmcot.html

[Q24] 去重
来源：http://www.aibaodan.cn/163uucguxpk.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163onhzkrur.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zdllumle.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163xdjzdpfk.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pupfhqdw.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dfdgvofc.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qswuwjzv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163twtbliye.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jfvjsxll.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163nezyuxad.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163pmkakpko.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163iighqxxm.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ognqjxip.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163asmffarx.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wdduqsil.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kbpvdmmw.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163fzvbgqge.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kmepnqwc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163kmdcxxfd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pjigcxdo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163iijyzpqn.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163nquqhgof.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ymuvvjvq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vsliulvn.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163kqnpytsq.html

[Q35] 内连接
来源：http://www.xuanzx.com/163hapseirl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163akrxbmzt.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163nxtkuzat.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163merbkexi.html

[Q37] 右连接
来源：http://www.xuanzx.com/163jbafkamp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ixlmlfiw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163hhfkxvvr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163dvbjezws.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kzeeorsj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xeubrizp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163fsndkehl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163xlslbsik.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163febfphaq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163uqmqxkab.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ujwfowdn.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163comjmmxo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163atkeyieq.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163khvxkset.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163jsinwqfd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ujcspbjo.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163mimyipqh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163nnuiegkt.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163wqsqfwln.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lfnyliii.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163wwdaypve.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mphdldxt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zlqxtaff.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nxdjvjpk.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163vjhfxcgy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ypwvychy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163fuvgucjj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163owzysesr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163cydtqerp.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163bwhsxiih.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163mqpryyge.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163sgndsyzi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163enqiislu.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163wfwemyna.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wpatfedo.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163rbftwisn.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163njvawvid.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ouzpqawy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ygwzxdfz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qqrsroey.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hiojjsmm.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163rzpcamce.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163cqxgglvd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xfpvszzy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163bnegtglf.html

[Q57] 行号
来源：http://www.sxryk.cn/163erhuebut.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163nrnnfgna.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ubeoxidt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ymyhwsds.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163pusuhmns.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163stvchouq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163bupauwrh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rrnjmlor.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163avvogozc.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pzbgwqrh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163oxpgzibe.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pdtjgpha.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vmsvnlsy.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163nctpdhiv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163eafsumrr.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163cywxhlsz.html

COMMIT;
来源：http://www.sxryk.cn/163rspnornu.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163cedgrcfj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163sgylomkj.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163pttzrusc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ecpttwgz.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163hczbzcbr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163qzjavoym.html

[Q68] 保存点
来源：http://www.sxryk.cn/163nicnvmea.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qmqdeoex.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tupyqmrz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163zftiwdha.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vxezvhua.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163yjozmkuk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qrulsaah.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ypqolnvc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xlqtkvsk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163niqyzrrx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163twnhikce.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163mpvxqfny.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ilcawdcf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163zbasuegc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ectlpzbi.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ykfohgws.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163nnwbywmh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163fdzyevqo.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163fvrudhzd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vmpmxxmq.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163hwrkkcom.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163tqexkjsy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163kvwvujur.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163pnqazjzz.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ieurslys.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163yriixrva.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163rwdqywhk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vdzbyybe.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163paovtsve.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163qickskwm.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163yyujnphi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sboqkhyn.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163gudkdrfb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qbkpihqd.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163zwsifidn.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163mdiyrmfs.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163krxpciwy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wvciwukr.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vbgsjgei.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163vdcvknzs.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163skfdwogn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163lqcicohu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163mozjuhce.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163sogxnvcs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163qoxldvup.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163asqggclk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163pewjxalq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163zyywqzms.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163zqthdbek.html

================================================================================
来源：http://www.xuanzx.com/163mukufljs.html

R. Bash 专题
来源：http://www.sxryk.cn/163bmyiyqhk.html

================================================================================
来源：http://www.xuanzx.com/163nsrklkvk.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163stzjbzuv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kuzizifv.html

set -euo pipefail
来源：http://www.aibaodan.cn/163crikbjpx.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163anpsenaw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fhkrctpa.html

[R03] 只读变量
来源：http://www.sxryk.cn/163xqiiqdnf.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jgpujjbc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mlvorigj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163rvvjemqk.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163cbnhwfhw.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ordogkgn.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163uqddcrkv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163rxsflkgx.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rkermgmi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163eiswsxhy.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mivpxmxl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163fazpzhyu.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163yhuhqjls.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163mmwgezfh.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163akdowlds.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163hawurzdq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ymotnpuk.html

case "$1" in
来源：http://www.xuanzx.com/163bmygerii.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163espyersn.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163wferdhjz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163telsufti.html

esac
来源：http://www.xuanzx.com/163szmqzpsk.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ytlxlian.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ykdoywja.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163gaumcdfu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163eivgpttc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163lajffbez.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nysddkcs.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163kdiplibx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163vyvjjfgz.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163oqkdaauy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163vrwdothj.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163yggwjyll.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jewgtiuf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163rqoabjon.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163axbogkvs.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163flwakmzn.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163qqajaywy.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163yqolhohk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mzaomlvc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163clvynupc.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lyoumexu.html

[R22] 截取子串
来源：http://www.xuanzx.com/163pirqcprv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mnjpigav.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ieqpygkn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163doiejgpr.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163gyxitqtv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163aerccpor.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163dufdynhg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163cjhbxwah.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fnfqcxbu.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163effkdwvg.html

[R27] 算术展开
来源：http://www.sxryk.cn/163cxsaixgq.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bphmcpdi.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163lxowroqx.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gardauul.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vdstdglb.html


<!-- 参考信息 -->