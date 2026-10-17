外链999!wailian999！

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163doymeeew.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163blbfdnom.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163kddetdie.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163pkmdcafc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163rpngtbiq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ldjppeou.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163awrwekbo.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163lmjzjvvd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cofahetm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163wzuchkmx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hixevwdt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163avkozmma.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163bedfsvyi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163qxlpixur.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xpqxvfbp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163wivayjbd.html

================================================================================
来源：http://www.aibaodan.cn/163csodawld.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163sooxczsw.html

================================================================================
来源：http://www.aibaodan.cn/163pdocjymx.html

[Q01] 创建表
来源：http://www.xuanzx.com/163amnooizg.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nwendfsx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vlhrzaxo.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163tymvcedv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163elvdasaj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vxpeqaja.html

);
来源：http://www.xuanzx.com/163zhaygrsy.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hqrgfmvg.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163xazaedmu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rpzphbtq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163suslormw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163lzlcorqt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163tsfeulbv.html

);
来源：http://www.xuanzx.com/163ilichixv.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ghhchhmc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163lpysliij.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qfxseutm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ipcrnnzj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ppamrzkj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163htzjivwo.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163zapzpups.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163mwycldwf.html

[Q07] 删除表
来源：http://www.sxryk.cn/163kfkoypvp.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ijjgagxo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ilezxqnk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163vkkvyjly.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163azxyljwx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ojwietfw.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163itmqlkzi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zuuwnrhq.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163bhjaaign.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163sveaipbx.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163tysvxrcu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163stzcdwbr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163apmfmwpk.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163amiphdqz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163cetaordt.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163kgyswlwv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163eivwtapr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163oqfhavhb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163mtswqalh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163rmhvdpkr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163wthygetz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163dglwrmja.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163oxfwhwdz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163diwjgcxk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163skgdievo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163caxgdlsh.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163vrwngove.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hwjxheor.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163mteftxnu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163axwpbfxf.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xslyyhcf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163qsxnyiba.html

[Q22] 排序
来源：http://www.sxryk.cn/163hkmtlnsi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163nkxytlld.html

[Q23] 分页
来源：http://www.sxryk.cn/163zabpfbdn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163izcpeocv.html

[Q24] 去重
来源：http://www.xuanzx.com/163hvpmkesj.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163jpfzrong.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163omnklpsj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163zezpqupj.html

[Q26] 计数
来源：http://www.sxryk.cn/163utycdgnw.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163qmdxmjlh.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163cyoxausu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rqcwekkq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163pgylmgbz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163mavtiyzg.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qdmhuwhp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jukazexf.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163upgcehfa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yxzajire.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163qlsmdbde.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163twuzbfbo.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163rdcjhafw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163updecxfo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qnkunwvu.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163tywxcdib.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163aglbjbcl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163btydoyzv.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163imkuhdft.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ejvjpmru.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163hkzprnea.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rlzrgdvw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vuqpebar.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fpdspyrc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ywtdntll.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163mvlwhars.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163upjjrqph.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163pyyruczk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xxfexkkv.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163pdibwruk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163lkfrjqjl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163taoavuup.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163lwkhspvr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163fideovay.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163cqkhrlbx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163beepjgzg.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163adgdznvg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163rmzrjtrl.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163rutwfafa.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vzgocxhr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cokwxlgm.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163fmdvsklj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163tacwjxgk.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163lyvzyqns.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163gptijvbr.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163pabuvsxw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163unzfybbq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163sqxelfqz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163omgevbek.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163cxqhcymn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163kxymfhsp.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163oqbhikee.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163psfeknhc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mmmxutem.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163mtqkdzjd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gwthoxis.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mrvrlcai.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163coijqedk.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163raczasmz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163poyqbnqu.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xnqjmwuh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ubhdyicu.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163bgwntbzh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163rafuvdjr.html

[Q54] 清空表
来源：http://www.xuanzx.com/163uuyojmoi.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163arrnjaer.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dmlelmgy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163iynapvfx.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ailbxurr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163icbiqzoc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zjskvpma.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nnjbpxpq.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163zqxxswlj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163nvnxwpdk.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163vtijhqvd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163pmanvdfa.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163zemqocfi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163awnkvutg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163bdjsqdos.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163dqnfqmnk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dctlnwtw.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163truplrjr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dsnqajbv.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ubbuwrlp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vqdgehid.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163iwaojxmm.html

COMMIT;
来源：http://www.xuanzx.com/163vgogwpre.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mwurdazw.html

ROLLBACK;
来源：http://www.sxryk.cn/163meengijr.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163huxzruuz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163jykrrewa.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163yjogfmot.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163arrkvzyy.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163epodocpi.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163icfjmowk.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163nqfnhumy.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163lgwhricd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163owcecnlu.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163lrwjslxp.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163yorohjaz.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qaqlrdtg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163slmnddba.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rxuzwpwq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163czslfuph.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163tvelpcnw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163yrnkizhz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163dxrtyqnx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163qljaydgq.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163oscaonlf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jkelffqz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ekgnijxg.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mcddvdcb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163tjgrtsiv.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163qfyxxrwv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163qtybnfow.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163rhyognte.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163txscbrxb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zlmfbcni.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163pmmurxoa.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163tvphdogi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163knjucrtz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163aejxxqin.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dzfncawd.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163hylpwggm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163gpvdhgjb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163gwvmjvqz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163hmroefnw.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vuxyzzpp.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mmpywxfn.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ohhbylub.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ssqoxmgz.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163kkycdhai.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wvmveout.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163fxebvlua.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163hzxrdcpo.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163eueljnrt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tgpuigoy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163yppgryvl.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hjvombip.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wxepicjl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163azsnrori.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163moiqhkee.html

================================================================================
来源：http://www.aibaodan.cn/163tmflnoyl.html

R. Bash 专题
来源：http://www.xuanzx.com/163upeaxkbv.html

================================================================================
来源：http://www.xuanzx.com/163qdcvkwjf.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163eqhhvdxh.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hsfbkkqn.html

set -euo pipefail
来源：http://www.xuanzx.com/163tqrltywh.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163oxnwwdfs.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163kdoibcrx.html

[R03] 只读变量
来源：http://www.sxryk.cn/163madcpcea.html

readonly PI=3.14
来源：http://www.xuanzx.com/163vqbjsnjv.html

[R04] 位置参数
来源：http://www.sxryk.cn/163vgkvsptz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vfqbgwpe.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nnonqpnp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163dpwouyue.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hysgjjif.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jsuvxbnw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wcyzhhfi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163crmnbgdw.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ahvcgzch.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mimwvuxt.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163msqnaalq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163actsczox.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163qpbehqxm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163dazxgaul.html

[R11] case 多分支
来源：http://www.xuanzx.com/163efynboak.html

case "$1" in
来源：http://www.sxryk.cn/163laxqbkct.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163vvvwgdgu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163nbgefawj.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163vgjenkfc.html

esac
来源：http://www.sxryk.cn/163kkzzmthq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cioudtza.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bhxuumom.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nfumxduh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163oddjmiki.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163weimdpaw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163akpwgmsb.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163rccxzmik.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163seaznkjx.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163whrobvaz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ctxnottx.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163grdkinty.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jsurwlzt.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vcpgelnd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mgqrntru.html

[R19] 数组长度
来源：http://www.xuanzx.com/163oprzrayi.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ftmdyhgp.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163segpvump.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163awladqat.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163cgoaksiz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ckdvtosr.html

[R22] 截取子串
来源：http://www.sxryk.cn/163acdsxzxl.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163tvhlpzvp.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163emfildbj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163clmifndh.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163uloamzvb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163otyepxhf.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lwfyhyuz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vltsbnlm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hwpyhfbv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163oymqjfqr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ndpihvsx.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163htdhtngu.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163eitditoo.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163akfimbeq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163sfrgihxy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hekvxtos.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163crhclgkn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163wdiokbyu.html

[R31] 局部变量
来源：http://www.xuanzx.com/163yubmhzzb.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vkxevdxj.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163gukwhwln.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163axggrqxi.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ymotbydf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163pfbonrfi.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163eutqbmat.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163idpoytlr.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163lpnqjfdh.html


<!-- 参考信息 -->