外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ghfsbjtx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lqvwjkia.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163prqestuc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zsvjpwrg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163wziiridr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163fkxinceo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wbaqeczk.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dqtsrzrv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pqowehgb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163liugnvgg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ikvxwgmw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hzyzvqpa.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ewzidmcu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ghfwdzun.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zkfajzru.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ncrksefh.html

================================================================================
来源：http://www.aibaodan.cn/163hhijipjd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163nxedaaxg.html

================================================================================
来源：http://www.sxryk.cn/163itwaxbae.html

[Q01] 创建表
来源：http://www.sxryk.cn/163sfegghhe.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163mccpiaie.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rumrwwuo.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163glqhsbze.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163bjjiqhom.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163lsmfxbbh.html

);
来源：http://www.xuanzx.com/163clhxgbja.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163btitvguv.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163byajakcx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wmttyzio.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hypmynxo.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qcrpwuda.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163qqzdkjad.html

);
来源：http://www.aibaodan.cn/163fqtiupzt.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163zfyfsain.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163xmukqbjy.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163fqmiiotj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163qcliwokt.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163stdkdztn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163kcxtgtsj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163kujikacq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163adphkdkh.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jmuciepb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bhhgloei.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jyuvtskt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163stmlqlly.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fpxtalcs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163padxhmkt.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163wkchneev.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ytjcxvog.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163gkcwdwgr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ohegptkw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163uhhmwiea.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ausxdqmw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163lwninlvr.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163vgauonnm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ouvddcvb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163rpzeouko.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pxpfbuwb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163gjctlphf.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163gbzihrbw.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nmisvjuu.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163dgklpqnj.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pwpuqsfr.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fvevjkqd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163movlyvqz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163sxwoguoh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tweskoal.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163bpqtisgp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163qkhqucdk.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163szwcklbo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163srjoqjud.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163nrquwbji.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163bzpkaadz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163rxknqksz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163mrcjoirh.html

[Q23] 分页
来源：http://www.sxryk.cn/163gmfmyqei.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lsbkadwc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163marffegb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163cqchthcf.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ouwvupgz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ydmftkjr.html

[Q26] 计数
来源：http://www.aibaodan.cn/163apckmurg.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163pjngntsa.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ixkszlxf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ohkgsekl.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rnplvhvk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163bjytyjjx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163iizifxxl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163vvpyqzym.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163kqwvuxys.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gvtvnayu.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163rojqerrw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wjqcctbq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vtnwjbia.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yyazuoot.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163yfkshevp.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xejyriab.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163kjwizmww.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163pvhjwkmx.html

SELECT * FROM (
来源：http://www.sxryk.cn/163lumgjrfc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163osftndtn.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163arbgbocs.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163bcjhhzmk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163afhcpxxk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163lhukszxc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ojbagglk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163jlkfghwv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163vejffcgp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163mkxmllqk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163isxxqadq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hpjbjpcq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163fpwwxmkj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163mzztlyal.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163qhxeequo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163dprcibta.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163wvpkeurl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163rcvkwbem.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163avqorguf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163nrwsasxb.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xcppquhl.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ghwllbto.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163mbiiwkws.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163kvmjpyiv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gqjmknix.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163pjbgustp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163olljcvyp.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163xkecfadl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gldmyvyn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163nwbkvqri.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mecdjqey.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163mglxtsbc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163vmkmuvgs.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163nfnzdbhe.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163cearbfxi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fscbfcjc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163okkyypna.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qocatjct.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qowfxcaq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163okrewrum.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ksrkhnbl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163aiotzlcs.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163jajpyokx.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163zdgoyldz.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163lwqxkcya.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163zgptpzhd.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wjkejawx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163lyiqidvg.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163pgnnxvuw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163immcpucz.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163phvzgopu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163wjqqgdlt.html

[Q57] 行号
来源：http://www.aibaodan.cn/163llgaliak.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ruszgvbh.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pexdpodw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kwghodde.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163rqgykxbu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163cytopwmf.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kuiepcfj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163lfweycjo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163mrhegtew.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163katynmhw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qplclnxd.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ymjobzfp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163struqvbp.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163tbxmqaed.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hocfltip.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zollyddf.html

COMMIT;
来源：http://www.xuanzx.com/163hhdyipaz.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163qdjfudjh.html

ROLLBACK;
来源：http://www.sxryk.cn/163kqkaxehe.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163bpkafyxf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163pvjvczjg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ceeqhsxm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163grfkjuwb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163uedalvxm.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163uhjtqadz.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163eodprram.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163trttbjvu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hmlquzre.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163hbwueudj.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163xgtnoofm.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163citpbahz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vdwyfoul.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163llsbgwjh.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vimbvnre.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163vumxqjzc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163yppuzsen.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163poiypqaq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163fiimnmmf.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163tyocskhb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163mvhuajzi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163cqhndrlg.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vcpkgfsu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163bvymklpe.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163dnoxfzfg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gqiqzftl.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163maibwjow.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gopkixcj.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163enkvnrwm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qtirmxau.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163qvqffqzo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163celcgfjr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163vifllyhi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163lamkbfgj.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jfjufbtz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163xtswvecc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ngbwspks.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xdnsmlgf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163uhpgykdt.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jiunnysm.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pizswpcz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163fxtzkzst.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163yasdhkqa.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163gvpmmdxh.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163unrujerq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rphxpdil.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163txlzdjca.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yvegcnyr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163upxkjjyd.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ewcnhwej.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163tmczcrrg.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163cxiqkyfr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163fofishuz.html

================================================================================
来源：http://www.aibaodan.cn/163afwdhgbk.html

R. Bash 专题
来源：http://www.aibaodan.cn/163tkixzfkv.html

================================================================================
来源：http://www.xuanzx.com/163vlpsdcsk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163amwrmcnp.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163admwpgig.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ouqsvzah.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163aihreoid.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163sqjppthk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163dizdulfm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ahmxuraa.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ueizqras.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163srodxxyg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163eqvnazhp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ftkttuuj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163uunyyhub.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163miwjmlxa.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163rstngkhh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163yrweaqzv.html

[R08] 数值比较
来源：http://www.xuanzx.com/163bqhrukqw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163achfsswh.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hxdpmbjr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163wueleaci.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ndlkpjxp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163fybdhzpu.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163byrdzclk.html

case "$1" in
来源：http://www.xuanzx.com/163ncomoczk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wziblzed.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163qhzptkpi.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163tvclitea.html

esac
来源：http://www.aibaodan.cn/163lhxxnpup.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ndpctqdk.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163jnittcsn.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163rmsreupu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163hmholipr.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163oadzxcqv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163qpxyafrd.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163zjeeyzwd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163oxsleoah.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163obgegcaz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163rzokqacz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163iofqmqtt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163udehjobj.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163pjsvvvjt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163avgkwnee.html

[R19] 数组长度
来源：http://www.xuanzx.com/163tcfvmvox.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kdhdvxjx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163iqfycdtw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163apdseyvj.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163srlmcwhy.html

echo "${#s}"
来源：http://www.xuanzx.com/163kwzrotiy.html

[R22] 截取子串
来源：http://www.xuanzx.com/163bibqapzh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ufjfxkli.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ukuvqmhx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tchjikyc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163yiohtrup.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163qxrzlkra.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ydgfgcof.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163opcbgzho.html

[R26] 命令替换
来源：http://www.sxryk.cn/163qfucuugi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163exjwqryn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163jodnmmog.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dwhsshau.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163gzmwrfwj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ioyrjief.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163rqbtewtw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xwdcszck.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163dqctzctb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163mnylcmpj.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ubbpwkxa.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163wwygldhv.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163oxxdfnna.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163dgvbpvuv.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163zcclptgu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163oypuxdnd.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163yhpznncl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ygvategu.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163lyamuxmv.html


<!-- 参考信息 -->