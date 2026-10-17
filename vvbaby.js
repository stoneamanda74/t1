外链999!wailian999！

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163nnuplzyw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163tcoddbtv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xkqqajvn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163shgymfvg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ibqwhzne.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163xwarbxqz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ooxhszrd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163cczxeskn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163yswwndwv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163cqdmdiga.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163albrhhtd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163kaxfxwsp.html

================================================================================
来源：http://www.xuanzx.com/163fbzuvduu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163cviwvbkr.html

================================================================================
来源：http://www.sxryk.cn/163lpgdhhwq.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ulyepqel.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wmpjzwsc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bevotojl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163yofpbthu.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ynjfpiut.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163sjivwqqy.html

);
来源：http://www.aibaodan.cn/163thqdheus.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163eiecwqgw.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163usjcysud.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163chzfnrop.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163mmfsfkui.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163jalguloz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163sicqfams.html

);
来源：http://www.xuanzx.com/163ttqafdbo.html

[Q03] 增加列
来源：http://www.sxryk.cn/163fohftifo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163msyawnyp.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163iqximkmt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163twlfexhb.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rzwhbawo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163sjqwqief.html

[Q06] 删除列
来源：http://www.sxryk.cn/163nmqupicd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dqogknkt.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rlxcaxlu.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163puzbcalr.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ulevaboj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uhkdqdqd.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163keenmcvp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163rzmdezzb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bchyaymt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zggvuxgv.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163idumiyjq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163vyrcerdc.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rerqvltt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163kguvqnyy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dolfczfc.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163cfseentq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163idrccsaf.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163pvaxlwze.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163slfcjtic.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xlcbsssl.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163auzlnriw.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163advdcjlv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163oqpbjreo.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ejmsjdvo.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163vlgigatu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163gehbrtpx.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163sumcapqx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163djcpuhnc.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163fdprivjg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163divlovly.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163xwaizdru.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jxntvqyv.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qclkiiih.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fcxepqda.html

[Q22] 排序
来源：http://www.xuanzx.com/163hyaebolr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ifgiojak.html

[Q23] 分页
来源：http://www.sxryk.cn/163bnpmltik.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ssslvddu.html

[Q24] 去重
来源：http://www.xuanzx.com/163iteejyfs.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163oqztqavw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pebihioz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163yhrjganl.html

[Q26] 计数
来源：http://www.xuanzx.com/163osquieqo.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dakdxzkz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ibdujakf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163zrdhxtnm.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163aorniztr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163luypbppu.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ghlbiylk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163mvjzzved.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163tfhhivwd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163beeiidcf.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163oxcjmklb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kmcgpzkf.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163hfikbgjb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fyzzsfdm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xabqsqxm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163zfeugvru.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ifuueboh.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163bwyrapjj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jronsphz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163rojotaxj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163rjfohilr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163npsdrwfd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nqxziffo.html

[Q36] 左连接
来源：http://www.xuanzx.com/163bttmpsfp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fbdxfhri.html

[Q37] 右连接
来源：http://www.sxryk.cn/163glnvmszb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lbsarmde.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163aeiqjzor.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163lkolbxuy.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163byskkvcb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vjsohfqv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ylhfdtsu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ieingbjh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163vpurcxel.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163chdigabe.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163isowzhqa.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163rricbilk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kkztnpsz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163lxvhfqgw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wrwcwpbp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lcsmjayn.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163bpwfkpju.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cqktglwp.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163xejwqbmk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163tiywlcgk.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zuumhsdb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jymasygq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163nnbaujte.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163aracngmu.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163kcxlrsih.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163xiwevrei.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jczapnsp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163qfmpvcpz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163stkvinrf.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gifklgjl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163bsvnenki.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163zrpxyjgx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163eigpkqen.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pbogxuyk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163afohrbre.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163mdftxwwm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163dehudsat.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zplyldid.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163podhktee.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rxhzmixl.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163vimtxmhr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163rjokjvet.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163buvawkse.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ozzvzqxx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ogkylnqg.html

[Q57] 行号
来源：http://www.xuanzx.com/163qgjrujvp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fxuizjsz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qoulhzuo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163nqzlklpi.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163hcglxziy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xjnbowng.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163zkvofwci.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163dqohzesq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ygkbquug.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163fsfbjhqk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163imcquhzf.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163rohpugkp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163turtcztw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ezxdrhhs.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163dauflvyk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163hmjshrly.html

COMMIT;
来源：http://www.sxryk.cn/163rnpgwkbl.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wizittuw.html

ROLLBACK;
来源：http://www.xuanzx.com/163wzdloqoy.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vsevykzs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163cuiolynu.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163wksspcpn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163jfazwhls.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163bmqrzgya.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163eycntboe.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vviutqhl.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163zngnrbzh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163zkxatzgg.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163souehgjt.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163pmytpprn.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163siztmaxm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163gkwuxpoo.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163cyxzlnxz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163svegqial.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163mawyvdmb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163oqfyrxvu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163exhgyifs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163yvswvpkg.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ddskptgy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163mexkazey.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dodjstul.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163qcfqqdii.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163uhunnqqb.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163pwbbdogk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163podvzrsi.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163vofwiohk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163yzxcuotq.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163pvahxric.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xugkawlf.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gprbwkat.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163byqehmbd.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163yvyykjmo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jnvqbzuo.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163zuougiek.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163rsskrrag.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163fwjeotya.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163vfkuxgud.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163dbwkbvfv.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ofvscecs.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zjgodhlt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ldwicplc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163dmnyekpf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wpnuaucu.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163tqjoumnq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163psguhmbp.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qjfjehit.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ejefcymz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vtaoyjfu.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163zoewepmq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163cpmnwhaa.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163lhcfzmzp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163kbenkvkw.html

================================================================================
来源：http://www.sxryk.cn/163jfmbmmlk.html

R. Bash 专题
来源：http://www.sxryk.cn/163fpvrsvvj.html

================================================================================
来源：http://www.aibaodan.cn/163pxfquqhu.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163mleahgrt.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163qrjiouyn.html

set -euo pipefail
来源：http://www.sxryk.cn/163qhqdqapf.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163granacby.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163txseofbh.html

[R03] 只读变量
来源：http://www.xuanzx.com/163tdhacyxn.html

readonly PI=3.14
来源：http://www.xuanzx.com/163fuxkcopj.html

[R04] 位置参数
来源：http://www.xuanzx.com/163qksjpdsb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163otgjnwcq.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jfllobto.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xqboseaj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ufhvntps.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kufnmzrn.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163tmsrqeaq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163tmcnxazb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163glarrxps.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163plutlyny.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163usvhtdkv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163uftgomhc.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163rrjudwtc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163uprlcbmd.html

[R11] case 多分支
来源：http://www.xuanzx.com/163jmzbajyd.html

case "$1" in
来源：http://www.xuanzx.com/163czyeptoh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ooomruoo.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rhssqoxw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ejdmulai.html

esac
来源：http://www.xuanzx.com/163qertjuji.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163alzlzfjl.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163jrxktnzy.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tabqrmqw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163sbqwgcex.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163hgjnoibe.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163lmtqkqho.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wlffasrb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163smunucev.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zgcbeweq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tiwxvqbv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mngpfddu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vzmlymtr.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xgjzymxk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lsvbfxix.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163bahxfeke.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nnmpjpdi.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wfwtiyxx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qjpejrbq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163fmbdkfvx.html

echo "${#s}"
来源：http://www.aibaodan.cn/163hnlywvfk.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pouwhpnz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163exppebvm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163rajgqvqb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163oodwgtwx.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163pzlwevvz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zuqdhwon.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ysxrkutw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163atrrqwpx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163fjktlnzt.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163zdjxrvkm.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163rminhzpw.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163otjhkcvu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lxjmazzs.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163xrikryht.html

[R29] 定义函数
来源：http://www.sxryk.cn/163foykmadp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163irsppyww.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wotffqnl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163nvotaifg.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163lmzuzfzb.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ermlflsr.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ajjoscbv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163nhbabozk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ethtazhv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163pocumxjh.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xvrnsfox.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163latmuedk.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163fbosuhgm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qvifsayi.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163khsywzyh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dfcavgkf.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ahnvrmoc.html


<!-- 参考信息 -->