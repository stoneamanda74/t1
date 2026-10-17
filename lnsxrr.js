外链999!wailian999！

CREATE TABLE users (
来源：http://www.aibaodan.cn/163twnlzpnm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163srpnzrdd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163skkmwnhd.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163foxhxahp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163dhiuhkil.html

);
来源：http://www.aibaodan.cn/163pbqoqegf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163vlncaqgr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163niuszpwx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nwpkfcgf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163oqijpfuh.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ejkfrlgk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jyzpwlll.html

);
来源：http://www.aibaodan.cn/163pkprzqoa.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163qswzobrh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163klzujzvy.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ldcpznff.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163jnvusjgf.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163dwjyykdy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163zhvregdm.html

[Q06] 删除列
来源：http://www.xuanzx.com/163iaqtmkxu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163vmthssvg.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dzbejftt.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dlrdiybz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163wykhloci.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163yiplrdkd.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163qwuaxcli.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ujhjyrqr.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163behfhrmb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ewglnbhu.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tgoejjfn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163prenesnr.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163xwvqkjxf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163echwuaki.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163sxeeljad.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163tkereema.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163qoedhllc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163agubqyds.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163tffmxwav.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163liyjzysf.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163oopuesgv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163rwyvvkxy.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163lcleveor.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163fmftargf.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163fnqpvrgo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163lidtlynl.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163fcraxyxd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ifcpsrlj.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163hcowalot.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163lejiuoui.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163tffvndry.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163uqckmzcr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qcathqxz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jiozqvsw.html

[Q22] 排序
来源：http://www.sxryk.cn/163xfrhgrkj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ixfosdyf.html

[Q23] 分页
来源：http://www.xuanzx.com/163yhfxndtt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gnauuihf.html

[Q24] 去重
来源：http://www.aibaodan.cn/163vsklxkgq.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163uhaoegtq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jwdmatrc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qgdpltuk.html

[Q26] 计数
来源：http://www.sxryk.cn/163angkpwls.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163tdlnqjww.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163fqnufazk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163gpkzuhpv.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mzrloxvv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163kyearwch.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qiftohws.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163lwwolblx.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163uikmavyb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163thraoslf.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163zsymlgbo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163xfsszhyw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163krykcbmr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163darwjmij.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qhcrryom.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163uzilffhk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163yckoffuj.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163bhsibulx.html

SELECT * FROM (
来源：http://www.xuanzx.com/163nemtljnr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163yzeziyuq.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163fipeczoq.html

[Q35] 内连接
来源：http://www.sxryk.cn/163aiwrwwwk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163loygpbmw.html

[Q36] 左连接
来源：http://www.xuanzx.com/163udboxyok.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163daxelpdm.html

[Q37] 右连接
来源：http://www.sxryk.cn/163llzcsocr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xjfgpkqm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ktquqdec.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163kzpfvyqa.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ftabqsed.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wgxwuzwn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163wqjudpgv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163xajxbmzb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qqorqcmr.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163rxviekic.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gwzcdhwb.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163vgekbyxj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lpbghoak.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163nfzunpku.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163uubgzqyy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163evqkibnc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163trkqvikk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163rsgklqzc.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163xjxwxdtb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163hzzagzcg.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163urunulox.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sqaqyjkq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163reztflpq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pnqrlvzg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163pfwmwasu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wxyioygf.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ovxmeblo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163bmgikakw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163mrytuskh.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163mxrgqgwk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163musdxoou.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163kxocolzv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163qgtkluev.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163cmnucprd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dyjkbxly.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hbtakzrj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163crfmseyr.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163mfjemvdf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ynucpbul.html

[Q54] 清空表
来源：http://www.sxryk.cn/163fijnzioy.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163lpktzwaj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163rxxtzuzg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163qiqsuveo.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jwkaiito.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163lzjkewlj.html

[Q57] 行号
来源：http://www.sxryk.cn/163lcqhkpzw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163kumgehra.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163kvetplwd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163kbvkljvv.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ypqyqtsw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163rbellfhl.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163vifkfxno.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163xjhkapxw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163uzclfmon.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163vsczcocw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163zyellqlf.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163whqbpdie.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ijxxnhis.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163dhyggxoy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163hcppqpiy.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163vgftoemp.html

COMMIT;
来源：http://www.aibaodan.cn/163echyyusf.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ilsapbsk.html

ROLLBACK;
来源：http://www.sxryk.cn/163kdibmbvc.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ksjamlpj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nhmwczsg.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qfogpkor.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163gmzkcwjf.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163flxgknji.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lzrfsiwe.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163fplaqses.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xurueetr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163bnlfbcjn.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163fsweeeyo.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163gdhnhevi.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lksthhiz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163dccfeycs.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ygeqbzcb.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163tqyualdr.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163nrseznig.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163oekslica.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ndjkukva.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163iwpztkig.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xteflsue.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163yukcbhav.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163kzkgbmes.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163hiutappf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ajwmzjok.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163adpibxlt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163lebndhtr.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163zgwcmxlz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163sytuffvg.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163guvlbogp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163yhysgzig.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163cafexhcl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ozjsdjdc.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163lshaoppd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jrhwegzu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163uamjxdzg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163asjjjtzq.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zbeawiub.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163kuiniwhh.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163zmqvgrvd.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163vphotsef.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163cxdzohcn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163yikviapm.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163kigunktd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163qhcqexzt.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163abgnnfsf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163zbgnnnka.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163lhvfoybo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163vqakszpy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163qpsgzqps.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jegxgrrv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ojyxfota.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163epsvbgzy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ydwucdhg.html

================================================================================
来源：http://www.aibaodan.cn/163dlkupbnc.html

R. Bash 专题
来源：http://www.xuanzx.com/163wsoamkjl.html

================================================================================
来源：http://www.sxryk.cn/163ywqnhcgf.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163fqzqrcmh.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163xobfcwxi.html

set -euo pipefail
来源：http://www.aibaodan.cn/163hhieshrx.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163shnaeara.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163gyanzfho.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163xwupbkkb.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lhvunsnn.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xmnqdcvt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jaylrgkr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163elfepjnu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163hdgbippp.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163okaksruf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163etgrfhqs.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163bjevppxi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kiqonwhj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163pyxyanaw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163kcfssoib.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163vueggbwn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qwtitzug.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163qxhofetp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163rnutlhqb.html

[R11] case 多分支
来源：http://www.xuanzx.com/163pykejatg.html

case "$1" in
来源：http://www.xuanzx.com/163soexenqk.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163pqdzvbxc.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ngeaptym.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163twfptqac.html

esac
来源：http://www.sxryk.cn/163uzfnxoud.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wzqxoozq.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rjascbho.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163rtmqvhte.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pnbmkarh.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163risfupqa.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163zroddusv.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163fvqezaug.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163hpqwjhhx.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163rwhhquvn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163jmahyitc.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163yhtixfji.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163esnnjvhj.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163whjfbynx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163eciyvdet.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163cmfobrto.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zpwswqcb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163xqiyxazr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rotueegu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163yestufnd.html

echo "${#s}"
来源：http://www.sxryk.cn/163kjvghkok.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163pvztkemr.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163tptsxjzo.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163rowaygbk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163pmsdeafb.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163vzvovzpv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163fngewodg.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163xxlidlth.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163pnimfhsb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163stxicxtn.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163bzdnasuv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163xzjwssgi.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163yndmgkmn.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163mybofkzk.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163axhqxgep.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vrxokiyh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ighsozdt.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zlubihpp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163txkiwler.html

[R31] 局部变量
来源：http://www.sxryk.cn/163syjxjnen.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163zmyuklwd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163pecomwrk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163mgkulukt.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zqacbsyd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yflomltr.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163uggmgtnt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vzincgew.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163bsvrpxmg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163zglwvfnq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163mibpjmhb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vyjjadxk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163pphnkqcm.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nvaoxzjv.html

[R38] 管道串联
来源：http://www.xuanzx.com/163yeywhxcj.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163gevbmdpu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163fzigxpth.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163mtbnhoqg.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xirddwhq.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163heygwfhx.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nknovdvk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rbuzpmbi.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jzdyfsao.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xzmjalya.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163wrccosqn.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163uxmkvrqg.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163cziqifjx.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163httwffbk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163flzvgsbm.html


<!-- 参考信息 -->