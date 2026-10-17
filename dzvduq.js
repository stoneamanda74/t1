外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163omhukuxy.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163fyssbttn.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163bynoadqi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163htfmdxqb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ymzbdyxw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bmdcsjcd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hnytrepa.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qefhtzer.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163soxhdmnk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163zlrkbkga.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163olvgmazn.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163oltudnbj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163uomqzkmd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163dgvxrrem.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163dcztcins.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163kakefzzi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163kctoxfrb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ohfzvobp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163vjpgokke.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163lfasnhug.html

================================================================================
来源：http://www.aibaodan.cn/163kklncmvo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163sizyarxo.html

================================================================================
来源：http://www.aibaodan.cn/163kjivsvbu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163fwejezco.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nlutuhsa.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pvkhtlof.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163gtetwphp.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wrbutajk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163buscllms.html

);
来源：http://www.sxryk.cn/163rgxtahgj.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163xqhzseyf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163jwrpwnji.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pfutsvgl.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163qcnqxeee.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163wzpftddv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ibitgyky.html

);
来源：http://www.aibaodan.cn/163fewwwesa.html

[Q03] 增加列
来源：http://www.xuanzx.com/163klqztpxl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163hhezrrxo.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163hftdwpoh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163sdyqndin.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163lhhejnqh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hqccljod.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fgmvxgzt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ljyamllc.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gonebsfd.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163yakbvvrl.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163imxmjemo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163svzcrhon.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ecqbakov.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vspddmiq.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163cyaeiqis.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ywvzdmwz.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163durtxfio.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zmswqlvm.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163tahbtdby.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163rdpqumqi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163suekxbrt.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qohvjkck.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163smlkpipr.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vuvrupvk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hmnzvpgh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kkxearnd.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163npfkpudd.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163mpmugzjd.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wvypcmfz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163tenjffof.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163lbqettbz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163rfgfpsty.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163wzlmkwle.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163svtmirec.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163igbewxqj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163iryoscly.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163mhgxjkfu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163vmtrtiqy.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163emeahhoa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gllyqeta.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fjtxxefg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163iblkplwp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163abnebexs.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163aywfpcgo.html

[Q24] 去重
来源：http://www.aibaodan.cn/163qoifeooj.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163xkawbedl.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163laasrevk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163bgbrygpc.html

[Q26] 计数
来源：http://www.xuanzx.com/163sgbecpfu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163konluwoo.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163suugwpsw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163eboufyqo.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163azxvuuxk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163dqbazzkw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163lujcpbmc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163pazejjds.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163bohexwoo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ucjlsfkx.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163vjuzwmlj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163etwzpmzv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163lavmhuzx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oiwuofrr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163hxbdrixx.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163odnbrmuk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163escbyiiv.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rirdajak.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ixtdesmv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163buhrybri.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163worwvnco.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ghgykifk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zsfpdndq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163wgepflii.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163sonenhfo.html

[Q37] 右连接
来源：http://www.sxryk.cn/163xqafgerx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163hecbibdh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jdmxkfiu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163rlmdpntk.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163pysriwkn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qxighxeq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163mjgmddtc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163gshavxnx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rpcrqugf.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163eycnqsjp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hhypxlar.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xadbjhzd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163uenwhhta.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qgcofmgk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163tchpmarq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163dfkkpnqf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zpbjxvuk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163siggnpqv.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163jbrwzhep.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fmtbxolu.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lbzmawar.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nwxkcgya.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163osdupsux.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iryfajlg.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163odxpzjkp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163chnursfu.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xjgvxaus.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ughpgkcw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163erfnldod.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163fvvjuwfy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rxbetrnk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163uxrhawig.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163exsfzojp.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163naortvkz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ufcvabjn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163uldhcwvi.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163eeguxbta.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163uxyignft.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163bhekdedi.html

[Q54] 清空表
来源：http://www.sxryk.cn/163hjvscsie.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ahmjxtvd.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163nndyulun.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163vlknyewf.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163kayldgns.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ahyxsazq.html

[Q57] 行号
来源：http://www.sxryk.cn/163jmmokmrj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xxrljuws.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163bnfahtzt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163okhuehoe.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qgmijjyo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163fcoukmjp.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163tamiurvi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bbfxbfwe.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163mfataxui.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163zgzqugyz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163zpznxrlz.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vhlykxkp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fonwyabi.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xgkqloaj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163cjuyxvan.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163caswjhua.html

COMMIT;
来源：http://www.sxryk.cn/163cubaljjr.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163horzosxl.html

ROLLBACK;
来源：http://www.aibaodan.cn/163lndsdpbt.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ffoduccz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163gtrqwxid.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163nuljhbnb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163scfsbwuw.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163tegrxpop.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163isydpboe.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vvplampa.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163zhykdjhm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163tpwnwhgh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163gzendxir.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163nwqdlsrq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xsdfyrrh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163juzsziqr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163wxdfqvnw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xkxquanp.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wnfdnrzn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163mfdtrrji.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163oqhwhfrl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ooqejscf.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163uhfkgtjg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163yuizjeye.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163sqsexscc.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163oloqubwr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163uvbivxnt.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163nprgeohr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ttumgqzw.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163uhwocirc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163izciljof.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163aazkaqpm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163grqzcmcu.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xeopemlq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163iolqlvqi.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163tpooddhj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bkyjoghu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ljvvtpex.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xekqtysc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163kicjpxnt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163lbfknxiw.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163wyqrudpx.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163joefsvhj.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pupjmrxk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ebklchiq.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fusfemkt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163btvyjgws.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163arfzupgu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jvaywycw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163irjifmvb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163oisziqzc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163fnbbehrc.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vkxhgpml.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kasjybqy.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ayxtydms.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163lpgtgivz.html

================================================================================
来源：http://www.aibaodan.cn/163ftquumlr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ejuwaiod.html

================================================================================
来源：http://www.sxryk.cn/163qlwxziox.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163xntqautf.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163yanprojq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fgcosano.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163kvyrgpbu.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163rewdbecs.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zgzjtjjt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ivmilsxq.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163perjdsrz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163foydrhoi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163owtdrfaq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zsdlpuhx.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ufqhzyfj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mhqjyolk.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163dgizlmux.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vfkjqfip.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ndghoqgz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mjaywwvq.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ydxdgerl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163evmfvhje.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163sbkgikyy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163fhyaobsf.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ibluhzyj.html

case "$1" in
来源：http://www.sxryk.cn/163cvhffqoj.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pjxsacud.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163aguibxxp.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163snhgzakh.html

esac
来源：http://www.sxryk.cn/163tfvepwxh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163amazsryq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hueoynxq.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163vxpihsbj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ntxvsqjs.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kzxnawuq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dsrcdvyq.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163jontyael.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163yemicbug.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rtmjwaba.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qabbndnj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xtoiiobg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163nunviiod.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163vbaqcfaw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163lfxencpj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163acadodbj.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kenbczty.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yryuklul.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163acnglnog.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163osqdelon.html

echo "${#s}"
来源：http://www.aibaodan.cn/163emdbsich.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163oxyadhxz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163fbiqzckl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163jzdxvtbe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163volccexa.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163whsjlqrg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163btxnhbef.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163oovzpbtz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163evcicgnm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rjlwvnkn.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jshudnys.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jsfvybvy.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ikalelmw.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163mutbxntn.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163impryzyy.html

[R29] 定义函数
来源：http://www.sxryk.cn/163btwsadsg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163eyjmrmki.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163pykwmkay.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163vlqujtnl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ercsxqsv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rjbekqst.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163glhoxfiy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163gclvaqip.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zgqgvoad.html


<!-- 参考信息 -->