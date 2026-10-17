外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163xpfyizlt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163dqmnjxlw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163deugnlid.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163flwardmg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163eywicizt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fzgvordt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wrzvizgs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163uojnjmze.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163czyqvpiy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dtkkdmcx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163djvzsiow.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xqoxebom.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163paywcbyw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jjtjwhdj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163huzngrhf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163btqbjpzn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163wogbpojh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163dwsqrupk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163idaztpfe.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jyvbbvon.html

================================================================================
来源：http://www.xuanzx.com/163owxqdapk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dflspzaz.html

================================================================================
来源：http://www.xuanzx.com/163fuvjinwm.html

[Q01] 创建表
来源：http://www.xuanzx.com/163qxbljcgo.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163snqrixkz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nkrfzbhf.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ljipoljv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163kllsyysn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xfdxuftr.html

);
来源：http://www.aibaodan.cn/163anjzcpqo.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ygcihkna.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163drjnraqd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qjpfvfdi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163rzqgtahu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kmcyhtwj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dbbjztdp.html

);
来源：http://www.aibaodan.cn/163dkkgpzie.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zjzywocw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163nkzqymfq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163famyimyk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163dzgbxsfm.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rjanikym.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163mtqmtnud.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ssgslwui.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163jqfnldnn.html

[Q07] 删除表
来源：http://www.xuanzx.com/163kzmlumol.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hcmezqpm.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163eezdchkw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ykqbzagn.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163earquktm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163zbrjmoxj.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163vkxoiyvz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lhoujtgl.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163dmttwogb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163twfastyi.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rhtqmxtv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163dneyghed.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bsgooiaq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163roykodqn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163jwiodtvg.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yywhiotb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163neejgrcg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163whprsrkg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hichsmvn.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kgeeuvbv.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vallhaii.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ehutbcna.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163lxycaoic.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163afyopdsi.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dvfwjalo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163edcijzuc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163knevwiey.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163edazlaud.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163bklvlchy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163dajdakyw.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163tzscvvdo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163cjdpmpoz.html

[Q22] 排序
来源：http://www.sxryk.cn/163zctdpddr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163frccodqu.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ivntqyjb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zafhpcxh.html

[Q24] 去重
来源：http://www.sxryk.cn/163fmqfjxda.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163bthovyff.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163kpysnvik.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qixsglax.html

[Q26] 计数
来源：http://www.sxryk.cn/163tqwxqshv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163iycthsbk.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163nibetovj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163fsrloudy.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ffobxfwm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163mptniikg.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163fltcjpda.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163kwfzzqss.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wetqweda.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nmeptqfm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163glvdgkuo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163candpczq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163vecpetgs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hrjmbfbs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ndrpykda.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163uupothbg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ajgqflwi.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163oxrfsmuo.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163wrbakaht.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163rmkcoqlg.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bzvgffyx.html

[Q35] 内连接
来源：http://www.xuanzx.com/163xwmvmzsx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qlymxwve.html

[Q36] 左连接
来源：http://www.xuanzx.com/163pauhkirj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sxygqskz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163srtrcfry.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163qabvkrsc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163eyojtfmw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163gnfqxyni.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163rijjlagd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163pgffvsvw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163htcixmqm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163uprjyjue.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163gaazcnxs.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ahhclopx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163tmoapyjw.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163dxsfxizn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163psytacdd.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163rukdnwoy.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163knxeprxs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163bmdvkbzl.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163akukirao.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ewfayhxc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163felcwens.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163xpehnmmt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nffazhhg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163oucdghih.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wdqtzwlj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163rtaubwhr.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163whcbonce.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163svxwhhrf.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163clbdebcv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163sazwmqcg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163hnxjjxqy.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163iwzoisfp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163kxacjhvo.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163sucikpnk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ulwuihxr.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163jibmmcdk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wwdsyqfb.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163qjxejugk.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163twhpukhn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163bgsxxmaq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zjxkjsjr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163icvuwlvh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ngbwvoty.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163llvovcjo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ywnxuvcc.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mbrbyxez.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163aoprzkvq.html

[Q57] 行号
来源：http://www.xuanzx.com/163lafeucfc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ojbiiqrd.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ydkykywu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xhacrpfj.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163wnyapjqg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ojfchnna.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163lilqzgft.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163unzsazch.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ktmnucds.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163xparjxsn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163cpvuckie.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163lvkejeld.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cxhnjyii.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lnneuqjn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163nztljcxz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163fjuavjjw.html

COMMIT;
来源：http://www.xuanzx.com/163mqeosrwi.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rtnylraq.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kfbeybpt.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163tdxrplyg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ngvrkmny.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ewpwldoy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163wrqvbeui.html

[Q68] 保存点
来源：http://www.sxryk.cn/163eqicaxwt.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163oddxufzj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163zwwpikzr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ngwcxend.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163jugnaumn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163oyoknddg.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fdtomodc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163junljbrq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163djsbmfzy.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163oiqatcsk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163fmphjtha.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163bsnqogjx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163cxmvlrcn.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163yxfupwox.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163wentkkll.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163wpzfptxr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163yewmtdhw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gofsabhj.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163gctwvlpi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163brrufgxq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rjrkinlc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163fptkngib.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163bxhnnkbi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163goscgorx.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vtlrzttk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163otqycjef.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163obzbwfow.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vjofkwgv.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163zvpuoyce.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hojpywsi.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163eveqckef.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xuocpori.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163cggwahca.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xngjzrog.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qfwzartu.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163vpljkyzj.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163bmatimut.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163yzliobdw.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163mqssvxhf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163orswgtfz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163nceetbko.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ksxupdjv.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163vzvkscbm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163spubkfuz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zxhbywfo.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163lxyazxxx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163bajrbvrq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163oyztrieh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163cztauwxf.html

================================================================================
来源：http://www.aibaodan.cn/163efhfyebs.html

R. Bash 专题
来源：http://www.aibaodan.cn/163yaomgurm.html

================================================================================
来源：http://www.xuanzx.com/163tgpwfmwm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163bbmhrplc.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ifqcvgev.html

set -euo pipefail
来源：http://www.aibaodan.cn/163lcdyiqqq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163bfckskfa.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163rodvavyn.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163agobdqoq.html

readonly PI=3.14
来源：http://www.sxryk.cn/163rhiaoiem.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163mxziiigc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mgpdpcmj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163mrrznqww.html

name="${1:-default}"
来源：http://www.sxryk.cn/163peksmgax.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163zshpmnsg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163avdcnoaq.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dtlzejru.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163xyqkjqsx.html

[R08] 数值比较
来源：http://www.xuanzx.com/163oxqdpvxm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163lsttopjz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qnlfgcxy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163neuddviz.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163kkkhxsax.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163tokywcwe.html

[R11] case 多分支
来源：http://www.sxryk.cn/163eorekili.html

case "$1" in
来源：http://www.aibaodan.cn/163rdhzzpeg.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163nlpxuiot.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163inmnqouw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163roensfoz.html

esac
来源：http://www.xuanzx.com/163tidknjiz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163hhvqywnu.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xjuehrxh.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ijxsstiw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ysuiaehu.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xkhnotdv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163iechmgvm.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163gineexpe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163mzrszjsv.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163aouhopsn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163sfsgoefg.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163dfoxlxwe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fdklphao.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163lfmgyrwa.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qkvmfpyn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163uwcuwfox.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163wovvjjmx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kkbyrjoi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163tyihxjrj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163omwlibke.html

echo "${#s}"
来源：http://www.xuanzx.com/163oqoanbdk.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163chmhfeph.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cbygtgqg.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163eyjohhlk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rosvgdvv.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163sinaaptd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163zavdynrb.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163chpelfob.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wzgmzicj.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xrkmszfc.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163azljylhp.html

[R27] 算术展开
来源：http://www.sxryk.cn/163aypnzjwj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163xgsdepay.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hvovwlgk.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ucilifnx.html

[R29] 定义函数
来源：http://www.sxryk.cn/163hzwoqddp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163jeamypwj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163mwnnpeze.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ldqdsmmh.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nmbbdbrx.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163xyzmllkd.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vaztxtgi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163kvlnmqyn.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ylqcpuhw.html


<!-- 参考信息 -->