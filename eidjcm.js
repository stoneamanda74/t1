外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163vrpmvhdm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163qxhvdgqi.html

================================================================================
来源：http://www.xuanzx.com/163pghrnjlj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163afvwxqdd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163zzuzjdpg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nyyurqeg.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163cqqfosxh.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lfxigboo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163axuajycp.html

);
来源：http://www.sxryk.cn/163ngcxraoz.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ncyntosp.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163rrenysua.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163htkywofn.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163dtopmgcp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163bzgxvdgf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163fwxukdop.html

);
来源：http://www.sxryk.cn/163rlkoxzaj.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tnvpbmzj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163gxztvoqz.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qihogujh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vtvuwqqg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163kyfgoufj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xfhnplmz.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ameygdsa.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163lnbtvtdf.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163xbumweqd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163akqiukho.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ugoxhveq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163sqjqajfd.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fqzlixto.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163dczjjfvi.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ujrkkfty.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qtututwv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xpfjecer.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163sflxgeba.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163yuklqimw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jeaxzcvd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163mwfvwooy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ynojvgkk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163mgaldhkx.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163loekjufp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163rycyxhci.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163lwrlwzrk.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hlonoefv.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qqqebkrr.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bqmuakmx.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163vsorezhw.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163pnpfnonh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163jeihgvom.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163wkhoknjh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163twgxvjuu.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163coahmseu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pxsswyxz.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163hgvfrnem.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qmetogtj.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163aithtfyi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ukwscyin.html

[Q22] 排序
来源：http://www.aibaodan.cn/163nobiwldm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ziltznfj.html

[Q23] 分页
来源：http://www.aibaodan.cn/163tovpjdze.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163hygttomi.html

[Q24] 去重
来源：http://www.sxryk.cn/163zaapusub.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163fzswfdbi.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163dtkdfaqb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ojarycxb.html

[Q26] 计数
来源：http://www.xuanzx.com/163vqdhpcdi.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163habtwddf.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163xfdcrvjw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kxcufwfq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163qsfxcqrg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163unhkrwab.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163itvhjluu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163erjuyfmo.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163cxqavxmv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lfabgeyl.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163qvtjppgq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hiwitvjb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163myojrebd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hmcjyrit.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163uoklpgtu.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163cakkmlmt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163pgfqrlrl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163qzaqrtta.html

SELECT * FROM (
来源：http://www.xuanzx.com/163iomuntjt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163tdlmdokp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163imjoitpd.html

[Q35] 内连接
来源：http://www.xuanzx.com/163doepqqho.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fgkkiiyf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dnwkxkrw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163angwqcfv.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ieriqwba.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163rxirjxrp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ozfbdekb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163fiiprtwn.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163yjbswfbd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163edajmdla.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ykljyqic.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qunzseir.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163szikuveg.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bwavffpl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ahxcneup.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bdrxntgz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fpljjsed.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vwowrzsn.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163axubpvvn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xfbbylhm.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xzryofqv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163slxcakcg.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163zdkajatg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163xagnpyqy.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163wddnknyq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qrxyudcl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163qqssoixh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163meknswmn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163rwspmoly.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163rojwjmnw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wbjeezea.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bggkwysi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163npeahwlr.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163xqgjoiik.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qipedwdn.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jkqbimey.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rohqbzqa.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163cnrbpwsk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163rmghafui.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bfvrulfd.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163bpjyyqzd.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163gfoqwbrr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gdywbvcl.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163aerytkhw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163wdathelu.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ceyfawnx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ryycwsjv.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163djlcycgb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kuubvzki.html

[Q57] 行号
来源：http://www.sxryk.cn/163luyegmhk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163iqprrips.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vavwowne.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mhlzpvws.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163xkkikbrr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163mpxmnjbn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163lbxtqlic.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kbbelhha.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163oragyfga.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163esqrcipe.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163jspnjijd.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wfekvkuo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pzvvepiw.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qzvtosvu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163pjwpmpge.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163jfqjbcoz.html

COMMIT;
来源：http://www.xuanzx.com/163ykrmdkbg.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163rtwgkutn.html

ROLLBACK;
来源：http://www.sxryk.cn/163aodzvbke.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163jyfrzbry.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kncqddot.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163rcnymbzy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xvgpkquh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163bgbsvsdw.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163pfehsczn.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163umfgeqyi.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qhuwuvuv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vedbqnly.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ubupaljh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163gkdfuszf.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163hxhoeitt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163keetvncr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163hnsxsrps.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163jhxjcqcf.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163zaujrhrn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163dltwannv.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163vvqwtxqv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163tsjwgnab.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zzlvdbou.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wvuvuwst.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bsunikrk.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wlngixxq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ypykovuj.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163sqodiiyo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163teqwnhvh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163qkehdkvw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cjsyvpey.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163sqrcnkre.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163oanitywq.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163htackgyl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163pwlwyomf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163nzadvfyb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163lqfblbgl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163thvfirun.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163uoovoqmk.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163jsttthfe.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163wjwmnfaa.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xqwrsksq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163xstdepwb.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cojedmgs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cseijboz.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xzschmer.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wkvodrwo.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163lwpigvod.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mtahqkxh.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163kztvwovj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ctpfmfly.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163eenvivok.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zzcygbig.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163bscplfrz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fefzccjf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rtxsxggv.html

================================================================================
来源：http://www.aibaodan.cn/163kixbsehp.html

R. Bash 专题
来源：http://www.sxryk.cn/163pasdpbxa.html

================================================================================
来源：http://www.aibaodan.cn/163elayfwbn.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rnjvjekj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ggaswabq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163wywxwogu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163frrxnehl.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163uymlcxpy.html

[R03] 只读变量
来源：http://www.xuanzx.com/163yonfygti.html

readonly PI=3.14
来源：http://www.xuanzx.com/163knsrqkzf.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ntejfjlu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163bibvdklh.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fyckpqqy.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rsqnljkr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sbfldmop.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qevkzprx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163srnxeczz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ciuctdfu.html

[R08] 数值比较
来源：http://www.sxryk.cn/163zlymtsiz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163uqiingwg.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163urddyyih.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163bhdqosft.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163bogejkwr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163hbhulfsm.html

[R11] case 多分支
来源：http://www.xuanzx.com/163tyzcuxmd.html

case "$1" in
来源：http://www.aibaodan.cn/163mkaejaqe.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163psgxwevf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163znrlupap.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gxbywbnm.html

esac
来源：http://www.aibaodan.cn/163zappryxw.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163hqbkfegq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163czoaysog.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163dfahrvza.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163mzxfnugk.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163irxdnguw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dmbaybnu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163eqkgqlqk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rpurgkkz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ordlnequ.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163nwnxypfj.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vjflslse.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163guvvpamj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163gmupiqwr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gtjbgjey.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163wojbvxsn.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mvetvqwy.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163dqednyfc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163swekrtte.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163aoqkwwbt.html

echo "${#s}"
来源：http://www.sxryk.cn/163mwuenqgf.html

[R22] 截取子串
来源：http://www.xuanzx.com/163lckcjoni.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163tutjujmi.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163aanakgpz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lhvdgppr.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163cfjncqip.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163clrhbtch.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163lxfzyvrf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163iuarbxbb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163zmwrbwhv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ufinfksp.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zymalbuo.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lkipnbzo.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vgrkyiqe.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wprwglvi.html

[R29] 定义函数
来源：http://www.xuanzx.com/163odejtdga.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163kobpcivf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163zwyfdxnb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163wjxbbgfp.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ftrbduco.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163vgwbprwp.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163uyuenoty.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163pummqxhg.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163dkhdkvlk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163jxreqkxu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163bvuuchcq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163naimbpcm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163uiifkmtr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163jsgcxozh.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kdwhkylr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pbzodhnd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163svaucanp.html

files=$(ls -1)
来源：http://www.sxryk.cn/163pjvhaywj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163tvtifqrb.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163bndqojrv.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rgsfkyoa.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163duxfytvp.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163tdfnhqje.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163whrroilg.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ckqshver.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163bmukhbmx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ahmllcjf.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ftwwuuxo.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163lxavqtss.html


<!-- 参考信息 -->