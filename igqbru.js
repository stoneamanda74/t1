外链999!wailian999！

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ckmujatf.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163unpqoytq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bqdyavzg.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163utdtsgxg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163yergrzpo.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ccicocrk.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163qhajfwwh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163lblzoygk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ccttunof.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ttecyixe.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cggfbjoh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ftrtlbzl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163klftaysk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163girgllgh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jifoomcm.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xhwijgnd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163zyaxctrf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163biedqrmv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bhdoqhtf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163oveghjww.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163tzhtebrs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163itjesfxh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163oxgmjahk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hrwsdakg.html

================================================================================
来源：http://www.sxryk.cn/163xsknmqmx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gdzdbafi.html

================================================================================
来源：http://www.sxryk.cn/163hpwbzeiu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163fzdmbioa.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163cmkbmdef.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163byrrbzij.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ohauoyvr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163mqwuhuew.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163adrhwuio.html

);
来源：http://www.aibaodan.cn/163tfpvflwo.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zohkphgl.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163swiqlgwv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ozqsfpxd.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rpbjdjiq.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ieyfxhql.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163lliyorxu.html

);
来源：http://www.xuanzx.com/163kwfvmmqa.html

[Q03] 增加列
来源：http://www.xuanzx.com/163qgbisnto.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mjpsrmpu.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163sjuodpwb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163advfhyao.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163vdstubwb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163cegyrcoh.html

[Q06] 删除列
来源：http://www.xuanzx.com/163xwizfmzh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163uybirfwh.html

[Q07] 删除表
来源：http://www.sxryk.cn/163awdtlvkm.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163auqwxplw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163nbgcdvyb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163lwcgnnox.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163lbetrtqq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163kqxynfso.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163avgtwcde.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ioillkpr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xahxmrnx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kyuarplf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163rfzwbmja.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zbfsvzyj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qtljcfhh.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163fbsjhuva.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zzbrlcxn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hpaqgorw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ddpnmrny.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163otxpnwqu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dihryhac.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163pzjbpjfw.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bghoskdk.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163skgmvsdp.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hfjskpps.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163jnjhtfre.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163gsazoaqa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163txquydxl.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163gplfopdo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hcoohrla.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bsthuqij.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qtyvmvgs.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163cgsukbji.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nqnhwmba.html

[Q22] 排序
来源：http://www.sxryk.cn/163uftqingk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hkicnmvb.html

[Q23] 分页
来源：http://www.aibaodan.cn/163oinnyjsx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ihakhopw.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lftuddci.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vdpafdgd.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163icvdojlc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163bndicxwi.html

[Q26] 计数
来源：http://www.xuanzx.com/163vxpgmzyb.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163kvpixnhx.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jztvahyz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ygqpkejc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rgrbrufa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163dwztrnqt.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163xpzqqttn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163lyxsuijd.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163guirepuk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nlzmngkr.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ebmgzmgk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wmxyurds.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163zuqhvwsd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rksucygp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163nusnpxuu.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163qawyqntn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163uistbigm.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163yzhdnxhx.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163elidupfp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163qsnjhrca.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163rzvsfhhu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vwkjzuzt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qpmoomnc.html

[Q36] 左连接
来源：http://www.xuanzx.com/163lturvwfj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163lahbbflq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163albvixox.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kaaorvgb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xutpwkrf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zunuwyue.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163zuhadcsc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ailkkefg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xdasqdev.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163iavttsdi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qrceuwqd.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hhjyjqsb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163obmgoymr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ienamfeg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163fehltsvi.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jztckuvd.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vaqebglu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163wtrhkobf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ebkmqmvl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163frrvgjty.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163xkntvafu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jncsqntw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163upnttvmq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ulagjszc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ydmyvvie.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163biyfychv.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163javqredz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163vwrqxakx.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163qkwhufwu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163crjeorde.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163azbajbxt.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163exptaoxf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qjefuigm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ylmwmjti.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163rujhejre.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163fjjuwkwd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163dfcctmgk.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jmakrncx.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163lgadknhl.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163okldmpsz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163bihlxohf.html

[Q54] 清空表
来源：http://www.xuanzx.com/163rkaqmzea.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163nohhepcy.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xbepqknk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163uhotydiu.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mhqozteh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qkhlsobw.html

[Q57] 行号
来源：http://www.xuanzx.com/163dqqjgtww.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163zspgaecs.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163oetduhjn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163knhefrya.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163yftupypa.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ohgfucqm.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dtdrhrel.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163pbtuqgwn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jqxzmpyq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163lcuknfkl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163fftgfrpw.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163lflrqvga.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163smdpaddi.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xwuvvsjz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163hsyymncj.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163dpkczojm.html

COMMIT;
来源：http://www.xuanzx.com/163kuexfesk.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ufxovegf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163wqwthfvk.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163kxzdcttk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163jtohfbvb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ddeucyas.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ghvyryea.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ivlghrpp.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163tvijdcqe.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nfihmzjq.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163gtvztjdb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163asaujwsg.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bobzbppf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163gpdhcaye.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zootucno.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163hhdwfxcr.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mbraxjrx.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163tmwwbill.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163dcslyctj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163xhtgxfsw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163abmrflyn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163duerkdqj.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163eluroius.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163idabgcrw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163dxuxensb.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163hpvdjdnu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rfxkofhr.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163dayezbnc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kgctvall.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163gdkmjygw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jjhgnmrt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vqqynenl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163vflnyhqg.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vdqymuzs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163siceqbdo.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163bszryhdk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163awbyekkn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qawidqtc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163gxehipnv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163aguilxtm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zunxdqfr.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163rvjohxwx.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163smpntapz.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163khefcsbi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163gslzintf.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163dcijaxto.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ulfmkbvn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163daatebww.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163nosacfyn.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vhmuhujo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xfuvnihi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163tfozrrvl.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163krgvzelf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163vzccjipl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163heqquhqp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163vaeasqwc.html

================================================================================
来源：http://www.aibaodan.cn/163mgblbpnv.html

R. Bash 专题
来源：http://www.sxryk.cn/163ybibrqwa.html

================================================================================
来源：http://www.aibaodan.cn/163jcjamrkc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gtigksvb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163gharbahh.html

set -euo pipefail
来源：http://www.xuanzx.com/163rbhestwh.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163tmhgygew.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163hnfdxtbt.html

[R03] 只读变量
来源：http://www.sxryk.cn/163yoxgeqnp.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ruxhkagy.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yimejzie.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xdesjaoa.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163psqbzamo.html

name="${1:-default}"
来源：http://www.sxryk.cn/163plwmwvdv.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163lrrgxhmi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163wbprniyr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163iwubkaiw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ggfzwcxr.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163soicqviy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vtwxlwsj.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ytvgcoqi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163xhnidimd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ycbtnxky.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vvdfuxln.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163opuninfn.html

case "$1" in
来源：http://www.sxryk.cn/163wijbpzzu.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163qrqibzio.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qedscbzr.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163gfijplro.html

esac
来源：http://www.xuanzx.com/163alfaaeok.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163soxpewbd.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163lzztsbkr.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163gwxajfgk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163buawwknq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163yoskyefe.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zhmretfr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163evssfgwe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163gvezgfaw.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163bvvxppul.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163iyqwiuqr.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163skkqekjz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ivmjqwlb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lhcoqzps.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163jgahsvoo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163gqotlhdm.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nnfrcrxd.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163vcgyfsrp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163dtatclzg.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jzcuawgi.html

echo "${#s}"
来源：http://www.sxryk.cn/163nlxujdwd.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ipxbkmad.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zuecgwep.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163dgwjpxtm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ncvmnduj.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163bwwqwejl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163awfsyszz.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163fhkiqyoj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163giumcrud.html

[R26] 命令替换
来源：http://www.sxryk.cn/163txrhoplw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qqmamynk.html

[R27] 算术展开
来源：http://www.xuanzx.com/163lbsbljyf.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vamsvcat.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jqaeorud.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163axovpcam.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dggbdkdz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163zsmoczfc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qmwshmby.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163rupvjcky.html

[R31] 局部变量
来源：http://www.xuanzx.com/163hgumitdc.html


<!-- 参考信息 -->