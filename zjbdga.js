外链999!wailian999！

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163elplwftk.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163eehuzygw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163vxxkqgiy.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163khpalvwq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ntptawdb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pvhkffrq.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qeilzleq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ggbxzztb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163wvxjafue.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hhhpnfnh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ttaownte.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163sdgkrirq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163wkjqmzdb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ceglqbzk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163eqdzpplb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163owxjzvvx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163sfebhbuw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xlbimnza.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163sytgxakb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163vulxlsyx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163unygsenx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vafkapav.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163nkphqrvf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163dskkwapi.html

================================================================================
来源：http://www.sxryk.cn/163hrwdizoe.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163rskchblc.html

================================================================================
来源：http://www.sxryk.cn/163ehoteefz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163hvcsroel.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163nbtasmmq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163edfuervm.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ohszsbtl.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lqyzyooz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163bubtciai.html

);
来源：http://www.aibaodan.cn/163noiakiie.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163yyyhawxa.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ygdrlpeu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mnufwaoc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rtzaqxyg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163wuvdscas.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163nhuyialf.html

);
来源：http://www.xuanzx.com/163wyvufpti.html

[Q03] 增加列
来源：http://www.sxryk.cn/163gjqkteca.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163bmrimzgy.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ysoznorx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163zuijiiaz.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xjwrdzmr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163uwvpnbxy.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vagjgvix.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163crffccbj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ugtwvqax.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163tfouzyun.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163vtcofgse.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163rarckxrt.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163skoztktz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163zvnioyak.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163gbmscerq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hbeczcbh.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163txvowpml.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uuibflfm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163igiqvruu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163kwlalhtc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jezortgq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163fwqjyztv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gukakunk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163bjwrttpb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163awbgwtwk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163wkecpxmc.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163zbpqyzsi.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bzetfifo.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163sacqunyf.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163bdgqulmd.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163fxeddylg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163bfqckomu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163evaahgug.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163pxhoqdlc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rokzorfs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bfutsbfi.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163wqlzvuha.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163pncgqjgn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ydqsburo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163afyufbcl.html

[Q22] 排序
来源：http://www.xuanzx.com/163gxncdkjj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nogulxnu.html

[Q23] 分页
来源：http://www.aibaodan.cn/163lnxgaflb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163qwalwout.html

[Q24] 去重
来源：http://www.sxryk.cn/163kfpthchw.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163onteomzr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fyaddzhk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163zvvktxaa.html

[Q26] 计数
来源：http://www.xuanzx.com/163vhijsooi.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163lqipxkky.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163szbsxoqo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163usacfgcq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163yatvbdbi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ycbnnseu.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163pmmtkeuq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163cfdfgmhu.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qnraznrr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xudfflmw.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163djjoejyr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163zjjtezgw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163noqqzwzi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sqahseqm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163sqivvimr.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hmiajcwu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163roqjfmcq.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163tnnfmbut.html

SELECT * FROM (
来源：http://www.sxryk.cn/163zvgpthlv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163etrvltpp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ficugeoe.html

[Q35] 内连接
来源：http://www.xuanzx.com/163htixxfcc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xbzkftdh.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fitqtubu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xowqzodo.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ezqxlvtd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163mwymsard.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qevejfdv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163pbwkaqly.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163elxvocry.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163yhyxsadh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bidntosn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163jvwdwzhf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163uxykiacn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163jotsjcqb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163lkbjglfz.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ghjceypr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163mzgdvdwb.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163uajlmqrl.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163srjfykcw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163lvtoyyik.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163zoydkgbw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163lkpnhosy.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163uhehvsvo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wpdnbkwf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163oogjspcf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163yqiklspl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163afuopdpj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kibwplod.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vtkbclqv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163vcuqshqe.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yohujuby.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163pqnxnpke.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163kizycjbg.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163evalaczf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qqnomlvi.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163rbxweifq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163utcjosja.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163maelsdaf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163iaibrfwb.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163wnqbglsy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163nowjtbta.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tjwxhbqb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163eearhyvn.html

[Q54] 清空表
来源：http://www.sxryk.cn/163osinowme.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kvxuqhfo.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163nyxlnfhu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163pdpfdtvv.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163lthfgeuq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163julengkw.html

[Q57] 行号
来源：http://www.xuanzx.com/163tlwhmmry.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163knckchxc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163hbyupict.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tqzvyjjc.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163llqetjhl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163fgjtntmz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163gnkzhpgx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163wailfcxd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ztqlobeq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163bpjojsaq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163xyexyhxh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163mpeweqmq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wzcyapyj.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163dhjxisdr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fgeztwiv.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163mvubltey.html

COMMIT;
来源：http://www.sxryk.cn/163frjtisve.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163quhjzdyl.html

ROLLBACK;
来源：http://www.sxryk.cn/163pjxbszil.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163uoypdrsu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163fijredjd.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163hfgqlqpy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ohksxqof.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zaiwriao.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163odomwmrv.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ezsgpxum.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hbdastjp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163eujiaxfh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163pcrxtnju.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lbfzpfct.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qxbnodgj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ecjlpbgu.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163oveaxwok.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163hrxssfwr.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jwcqejrm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rsmokvzj.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163pzpypqok.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163mlqsyxxr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163rtaijxja.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163afzmfyfy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163xcqxtvlh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163pddczdbu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163unhkjlrb.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163urvfngav.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163adnnvavn.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ezbfcrwe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163fzpuzthc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163bkbxeohj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163nnscmfew.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163yewbowqs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163baqfthfv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163dfkzmwlx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163lihrhofd.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jxumxcbl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163atwzvmfk.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163fszvxqpa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163xayoofyo.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163pgueyfsc.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163kruvcpbq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lnlkowmo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163emqvcyom.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163tqiwdccn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163wtlwiqtx.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163sspyzzvj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163wcmdevxb.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163jotwcmly.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163nmfthyea.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cginwdkr.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163puwssggx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mcnosffa.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163iuuweqxp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163bzhnlzsi.html

================================================================================
来源：http://www.aibaodan.cn/163erhtwurs.html

R. Bash 专题
来源：http://www.sxryk.cn/163akrbilkn.html

================================================================================
来源：http://www.sxryk.cn/163oznnaabt.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163oylvglsz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163lpocfbtr.html

set -euo pipefail
来源：http://www.xuanzx.com/163jaeejpyh.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163rasepuve.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163btltbohk.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hrzostzt.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163gjdofbdx.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bkxiuqlf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ymqlobaf.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163gqrwjcas.html

name="${1:-default}"
来源：http://www.xuanzx.com/163wrqkvesm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ztpnufsw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163hwjgygcf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163qqdstpoj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163bzwlfgbw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163dtugpcmn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163qecvnhvg.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163zamyikqn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163sqyibzgn.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mebixgpl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163yxhwpash.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zswgeppk.html

case "$1" in
来源：http://www.xuanzx.com/163gvpooxen.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163icrogmdk.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163tfwsxpjj.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163eujjsurh.html

esac
来源：http://www.sxryk.cn/163vgnkshoa.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163nhvausal.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163nwhcqzxz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163pqvftezw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ymspuypx.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ngnwctlw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163uumgclff.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yzdzvayx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ljqfvjwy.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163fcmeiwik.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163neqxautb.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163kktkevdp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ntuxivpf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xavqnhgm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ckporyqt.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ndeapems.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163icdwwuky.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163cvjmfcuo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gopntobw.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hzeycgai.html

echo "${#s}"
来源：http://www.aibaodan.cn/163vipucxmk.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bfaauask.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jovdqznp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163zrclmhrh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163okidezcx.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ismrkkvs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163gdwxdsll.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ispnjpjq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qvuaxqto.html

[R26] 命令替换
来源：http://www.xuanzx.com/163biscisxh.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ptagxdne.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163uaupcboo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163owswzbxq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tyzcsxwt.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163qzgbtosa.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vwvojwja.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xrtdiocf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163iyopjtao.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xlwxeeiy.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ddvjmpxu.html


<!-- 参考信息 -->