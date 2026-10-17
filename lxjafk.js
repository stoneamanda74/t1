外链999!wailian999！

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vajiaamy.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jlbyfghj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ogtqpsga.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163vbahveyn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rxltynoe.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gidufqwp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163kwgdhoks.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163cqvesqdj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163fjsfwnia.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163akisjwop.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163itncjmwc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ileguklv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gkrnhcjm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163phgzhgbt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163yobevnqt.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163fbefatlu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ysswgicm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163uiwdhdhh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bzcegpqn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163dzyeoeuq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163lnktwhcf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163qhghdyuu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163onhebdty.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163dlivypxz.html

================================================================================
来源：http://www.xuanzx.com/163mojnrwzk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163erecvkcz.html

================================================================================
来源：http://www.aibaodan.cn/163gbqopbef.html

[Q01] 创建表
来源：http://www.sxryk.cn/163dksurmfi.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nistnujs.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163gkerhrui.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163rxnnaarv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163yllmxvuo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mokoezsf.html

);
来源：http://www.sxryk.cn/163fpzjzkpv.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qniijmqn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ukbblfev.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163knowbuqh.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163azgdggly.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163yqwusbls.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mxkjetxa.html

);
来源：http://www.sxryk.cn/163mmkrkjni.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163fobxvxzh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163lvoojhyt.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163glusakwl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ecctcyvv.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163fjejwrdc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163vfvymvfj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163orayvvfi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163mmhidiaq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163miogcmmg.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wkkbhvps.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ajazfrvz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163qtrbtxfr.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dkwvkvaa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163nlfjholp.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ihyeqktk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163wfsmalfp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163iyyksdta.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qyinjsop.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163kajlbuaq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163owrrcawb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ituoxgta.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163gbsdabod.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163cxlkullg.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xvfblsnu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163xqpfsquc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163fgszqbnv.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163gxhrnrfo.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hirgyvar.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163gtfcjxmp.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163vgneihyu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163bgljtfcn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wgqxkngw.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163hojijxrq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163iqxwxdkz.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163pnmmwdba.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163qbaswant.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163egnuuaqg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163tyqasyap.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163spbxjhzg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163tcojibah.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xybcfguq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163qnfovjxf.html

[Q23] 分页
来源：http://www.xuanzx.com/163pximqffg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cqlrjppa.html

[Q24] 去重
来源：http://www.aibaodan.cn/163jhcdilmf.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163lojuuqta.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163puydqabo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163jihbstou.html

[Q26] 计数
来源：http://www.sxryk.cn/163deueddep.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163bvngchek.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163xghirjhc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163pqtpwjec.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163xlcwmkhz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163usgitgop.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163awdwgrpj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163mpdrgknx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xbcfastk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163egamrynn.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163kgvmfzpi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163eyoqkkuo.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163igilgapp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kqftmcbx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163sfoibeua.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163nutluigt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163sjvarxdf.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163kpfduiij.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ptzqpuyr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163pfpxrylx.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ghrprvwz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163usuxzwqx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163alsqtxvc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163yesurffw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wvrgiepk.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163dglnozuv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ngdeszwj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163eyvfaini.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163trmbxkjs.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163oeogtgaz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163qooctxqm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163crzlveto.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163mczhqvva.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163vzytuyyj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163dzjoyfgf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rlponclf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ntcqnpkq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ngghygwx.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163qhjskzgy.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ogdzlcmq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jyszhpne.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163veuvldka.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163tiwnwjun.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qcxvpikm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163okgcuwam.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163hmlbemhq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sgrrosyy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163trmskudb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ybhvpyet.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163tmfxfuov.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zpkccfxc.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dwchpbgt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163nfponfeu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163nzjtbdrs.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163mqnskqho.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qibgqxyh.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163mirwbptf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rlwcwnbq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163dazpbpdb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163gtfvxewi.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163brlfutgy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163umrqlyxg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163uomjruzu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163hhyindss.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163vniqgqnp.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163xjfpzxnb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163cxtearjy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163punlmjjl.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163pyrlklqk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ocyhtkth.html

[Q57] 行号
来源：http://www.sxryk.cn/163mmhgozpe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163cijchqou.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pddtcbth.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163njgwiqau.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163bvsmvuao.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163urkodxwz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163kwaulafg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163oyfgookd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163strjmlou.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163besluncq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qsukvwkl.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163dzrqjzwz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163eqwdkjfd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163agoucrho.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kwmswmfa.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xwlwfwbt.html

COMMIT;
来源：http://www.xuanzx.com/163wlzoyccg.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163zhblsalr.html

ROLLBACK;
来源：http://www.xuanzx.com/163ygbpvgwk.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163iqbozkfh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163slujufxu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163mhtrklmx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163mccemypd.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ejkzkvsn.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163nbderxrf.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163szmezgfb.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163zfqiordx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163rijuhtwg.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163mmqabjfw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163chkfhfut.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163mlconsry.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ruhcyozh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163njvqjnks.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ujmaxlmu.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163iwnjoepe.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163srlgcrsu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163dzpzgarc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163koszhmig.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163drdmhqvd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ftcwbatb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163qludpecu.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163drktfjbe.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lyvahfbs.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163mtgialqt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kdpihumr.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163wanhxmev.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163msvifdmr.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bsrqahzb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163vijxisxm.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hihobxkd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163sxlqcfka.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ueouefyf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163lxstexcp.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163newwctdn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zgqnkkzx.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bkjffaio.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163sjgrrqet.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163woujlzai.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163byxulccq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zcstuzdh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bypgmdga.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wqaetueu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jdlcwdnx.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qjsenvwm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jnzsjvzb.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ofxszjhn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163txltryjd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163driibiut.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hcrpnais.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163fmltnnqs.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163oddtxako.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163kfradilh.html

================================================================================
来源：http://www.sxryk.cn/163pjkdnqyl.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wlvgqcml.html

================================================================================
来源：http://www.sxryk.cn/163rexjsukk.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163gxrrdqjv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163oewnrqnq.html

set -euo pipefail
来源：http://www.xuanzx.com/163sjtvqodn.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163vdrnxuqa.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163sgwzwvhw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163skvjbcbo.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rctgzhhf.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163wwncyuej.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163iovnihqe.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163aseocljx.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kqjkjzoa.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xnklfvqe.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qcuzrqzk.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163rkkpetbk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163vzywevtj.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163sjgnfkuz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163iglvelim.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163pchzdgkn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163pyxkthzm.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lknbctqj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163rzhahiri.html

[R11] case 多分支
来源：http://www.xuanzx.com/163yfdwntzj.html

case "$1" in
来源：http://www.xuanzx.com/163dxbjijdc.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163evhcliqo.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163xillodrs.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163kdsupvpd.html

esac
来源：http://www.aibaodan.cn/163shisnjfl.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163nhwrainr.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163wsnsxpns.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163eeabgila.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163uhxobduq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nbllmltr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ifsxbkgi.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163dubnisru.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163cpaozhuv.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163txwtzohx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163sfzlydtg.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163yrabmjxz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163zbqrpvib.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bokluqhj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163mcpozqbh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163aknridbn.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qdtjhwbn.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163imwvzprb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163avlctfny.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163blrrntnb.html

echo "${#s}"
来源：http://www.aibaodan.cn/163uzdqmtqi.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dcrpimrh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163azdldjlx.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163idgmszuu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fxgehwep.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163iqlfxhai.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ogkeqngl.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lluovbww.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bjrwhdmi.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163enfqsavp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wtzlzawe.html

[R27] 算术展开
来源：http://www.sxryk.cn/163pyrklgdi.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bfuqwtpx.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163twddzeqg.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163zgidkgbj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vbssqhil.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163cdatcqco.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163eysntsqi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163gomcqhff.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ekpvfcwl.html


<!-- 参考信息 -->