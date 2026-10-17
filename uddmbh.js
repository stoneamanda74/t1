外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163hocpnetq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163rsvvpnnb.html

================================================================================
来源：http://www.xuanzx.com/163bfrwyinm.html

[Q01] 创建表
来源：http://www.sxryk.cn/163sgefgpnn.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vsbwcppp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ypuktzhs.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163taacdjcv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163xrysbagb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163fftfzbkk.html

);
来源：http://www.sxryk.cn/163iihttamy.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163simyczxa.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163amsxqgzo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hlmtdjvd.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163oeeisxpf.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163kcrfdlmt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163fpxabpxo.html

);
来源：http://www.xuanzx.com/163ghokjdpw.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ormspokl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163xonkgxmz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163disyjnko.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163hnyhedrt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hizlgexy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163cekpkwwz.html

[Q06] 删除列
来源：http://www.xuanzx.com/163agxvkiwj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163nsipafmc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163mprxqxyd.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ifbqwsfh.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163erpsmlgk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163hkdnrjla.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163tjkktmtd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163azdazrml.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163xkiayxev.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ldgzpaxq.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ynrathzk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163bwmwjvka.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163wmiksbcs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zcvbgwdd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ffzgadoo.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163duityrcw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163oqmdjqjh.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ahyxekqp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163rohbaiws.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163bgjhabtf.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lvhbuxoo.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163mwzcswuy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163kqqdvzrb.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163rnqlowtf.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zzoioaph.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163phsiajvc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163buiewixl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163fywixofx.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163eqkmtulb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ekbhbjab.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ppplqocp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ndexvdez.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163mwrvbkee.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163niokryef.html

[Q22] 排序
来源：http://www.sxryk.cn/163nmcbhsjf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163vdlpegch.html

[Q23] 分页
来源：http://www.aibaodan.cn/163waiizklt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163awwfuhnh.html

[Q24] 去重
来源：http://www.xuanzx.com/163iwtvyihe.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163uyiolsij.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jkvessal.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ugzdasrt.html

[Q26] 计数
来源：http://www.sxryk.cn/163bvtqzofr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163yqizlnyo.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kfndxukp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163gxozhwsi.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163kfyzelat.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163zsbfnttv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163krbvxpbr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163bplirrry.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ransojbr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163szlghrst.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163voqqtawf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hprrcciy.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163bxgzukzr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163stovdmxa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163wdrvmgow.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163gmeuieoj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163odsaridr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163mofznuyd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ttshbyio.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163rvcugfcc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ycnvsjqv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163xqvfssdk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163obruuuja.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ylfoddrs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kwvmpkto.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tocwhkvg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nowiqceu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163yakcdhgz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163aumtnhdp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163cyleibbn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163fttayjpm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163grovqppj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ruvikjur.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163yjpxzksk.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ribetsga.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rxhdvtnt.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163tkyqpwsu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ssoambbd.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163mslnrxto.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163qjobclhy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ukysyapp.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vhjjmnde.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163eeirouoo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163yhqjhusp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163zdyaaspq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ovmylhkz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163anbmjpkn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163anwnolex.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jneqlifx.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163rcmfsmjb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163wjttagel.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163trveolep.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163veubeszp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ttokpnjg.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jxfxcroy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163zrjgpwxl.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163tznndape.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ksakdauw.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163uuvdomlf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163tinbvhay.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fhhlplft.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163gbkzazqg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163pnhrsrrm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163fcdlybwa.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mpjbggdg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163esyatcnt.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163dcfmblqt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163shjjysmw.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163woatdoyg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163zmnsceuo.html

[Q57] 行号
来源：http://www.xuanzx.com/163jmwujaoz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fhxksupi.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163itzfwgeu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163aeioridl.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163cgdsmwoc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163saeutbvw.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xbktndwj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ecxpoukb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jlshafoy.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bkxwrdvu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dwoiztxd.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163dailwbhn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zdyapvvf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163zcwfhtky.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163rvivqfiy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163katszppb.html

COMMIT;
来源：http://www.aibaodan.cn/163jkkitzwz.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163nijcbmxs.html

ROLLBACK;
来源：http://www.xuanzx.com/163agiamgzt.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163blaqsxlf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163oapmqyiy.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zwbftmbf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zjmdnnaa.html

[Q68] 保存点
来源：http://www.sxryk.cn/163rnhlecns.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ocxtroeg.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163wyweuwzq.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pvbkwcta.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163kyuixeey.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mamsxafc.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163kjtwkqaf.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163oodewpgo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163hvepoipa.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163cmifjhrf.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163yofkartz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163sivqhgda.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163mnrlilte.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ywppyfkn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163egifeteu.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xdlmufoh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163hvrtkcle.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163quufikov.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163yiixzrup.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ooojqbpk.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ybxdllsd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163gysceszh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163fqifjnqn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163zakuffes.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163aolmqrel.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163khauscgb.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163bloebrjj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163osiacopa.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163imhbfipe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163peyrdatz.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ffubrdwl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163tguaalgk.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jquunxcu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163tbtzeofb.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163teztykuo.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163xmxpwhyv.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163nbdachbg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163gxgjywtg.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163krvqnqkm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163agepzqxx.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xlibefrp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gaauqnal.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163epffsjge.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tpemgxcp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163mdnuzqqg.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bpirqpmp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163sywiubik.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163nqibdqns.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163exyavths.html

================================================================================
来源：http://www.sxryk.cn/163atenjnjc.html

R. Bash 专题
来源：http://www.sxryk.cn/163rqrstusp.html

================================================================================
来源：http://www.sxryk.cn/163knznmtwx.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163cjblpofc.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mlftgcsd.html

set -euo pipefail
来源：http://www.xuanzx.com/163ophoapmu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163nkxctzfy.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163tzkntxkt.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gxcwmrwt.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dwirfcrs.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163cxjqujlw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rjwkzuxu.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163emimdizq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163tkxcpcgl.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163bhwwfxff.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ekyknfjh.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163wzpxcipq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163twcyagzr.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ysxucymw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163qcauwmao.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163kwmvmsmw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163frvfqyfg.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163esytijad.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163hvnymrsn.html

[R11] case 多分支
来源：http://www.xuanzx.com/163grcpatgb.html

case "$1" in
来源：http://www.xuanzx.com/163uqyxksqx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163zicslxmm.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mnckdjno.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163yfboxlbt.html

esac
来源：http://www.xuanzx.com/163hclgsqfq.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163osihlktv.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163uvnqulsr.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hkxbulxr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163amybuqsf.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163cbgigsya.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163orhibtsx.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163uasjdmdi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163dciasjql.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163cjlkvgls.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wqlateom.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163atfldatx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163eielltxx.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163eybmouzb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163jvhvqoup.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vkkttjuj.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gsjzalzn.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163thgqujhy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163rryzajmf.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163iosgizjf.html

echo "${#s}"
来源：http://www.aibaodan.cn/163avdffhxi.html

[R22] 截取子串
来源：http://www.sxryk.cn/163jzeeiyhl.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ulqusrvc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163aenvntbe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ckwgkdro.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163qngnispc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163hiyvetle.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163mfdilmyx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163srbydiax.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fmceaxja.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ydqvibgw.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163vsvlznhi.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163rxjyawwt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wjcodpjj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lywptcfk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163yobohusi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163jinsetcb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ywfcxvwa.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163myekxure.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ftkxgmvn.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163kxodwaws.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163uokcgaay.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163cbpobfjr.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wlunsmqw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163nniucjmw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ysemjzqi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163knrwrutg.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163urmpwkrh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163sihczahv.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163yisanluc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ndkucata.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vqoaybkv.html

files=$(ls -1)
来源：http://www.sxryk.cn/163lbewlvha.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163qqjtjyjp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xykkafrv.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163nlgbbbbl.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163gpbapuzr.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ggqajjhj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163swobqrpo.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kbphnsou.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kmminnbp.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163tuvwpmqo.html

wc -l < a.txt
来源：http://www.xuanzx.com/163awrivpqk.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163tzkhemhx.html


<!-- 参考信息 -->