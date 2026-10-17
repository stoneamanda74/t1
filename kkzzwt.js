外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163ylelotnt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hhoaxklc.html

================================================================================
来源：http://www.aibaodan.cn/163xgilvdaj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lwjkibyh.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163acmyemej.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nmwqfyhu.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163tueoicdj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163kjxeuvib.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163asaewfcl.html

);
来源：http://www.xuanzx.com/163hccccxab.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163mdjvauyp.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163insxgycy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163boarpiyr.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163iydruzcv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163txyzqnsj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163atfcmttb.html

);
来源：http://www.xuanzx.com/163dsuyneme.html

[Q03] 增加列
来源：http://www.xuanzx.com/163kjnopdyl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163sepphacf.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163eltazvlb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163outluhpu.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hyqhkkzp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hgypmaha.html

[Q06] 删除列
来源：http://www.sxryk.cn/163mwerdttr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163aqejidft.html

[Q07] 删除表
来源：http://www.xuanzx.com/163xboctdkl.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163muyyojxx.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163jxoxqkzd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163bvzbxonx.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163vqzvdoyw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163vsczxegh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163lkjeaokk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163rtxkdura.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jbvrexje.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163trdycyto.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163tytqdzgr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ntxpjeye.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163cdocuihz.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zvxzxdkf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163sadtmcei.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vlxonfck.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163drkdapgy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163yjxylptu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163wgahwenu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163bytkigdo.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163tqxubbcd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163gibczkod.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163uosktlfo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163oydzqgza.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mllzlnqc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163wxaxwafv.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vyojnqhx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vmsdtjbe.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163exmjzghe.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yfjlwgqy.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163jgdqcmns.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163vnbsaeqo.html

[Q22] 排序
来源：http://www.sxryk.cn/163ijtjcriq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163hdmlubvc.html

[Q23] 分页
来源：http://www.aibaodan.cn/163vfoyudra.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dzmkkdpr.html

[Q24] 去重
来源：http://www.sxryk.cn/163gqyyskcm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163rkrldkje.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163trowcvnw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163zttnbbpo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163vrivfymj.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163wujqtnhw.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163xeqapgnk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163izvtgpqj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nftzdgrt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163mzavpxkc.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163zzgriayk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163oaisupod.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163irwipzrt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163sddhzorj.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fhlvvkfb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ssaaeiou.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xeqdcbft.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163stegcsma.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163hrjnyvet.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163lpkzfveu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ralfwrlm.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163eggwadln.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163snfrkfdn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163xxnjkpqs.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163skfojuwu.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rcrmiohw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163lmjpaird.html

[Q36] 左连接
来源：http://www.xuanzx.com/163oushgdas.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163enkzvahx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rsvmildw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163plabgpsw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163cnytdupd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tadtieql.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163usrcnfsb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163iytyzynv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163nyujrplt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163otmaqmng.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163dykwfbpz.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ivaegmih.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ttpwenzp.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163jtgwvpry.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hvxffybh.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xljkkmah.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ytolsbyj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163afqmpuml.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163gmitfnid.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gfntrrtm.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163sffcwnuj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163giuyxcoc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ljpkmuhg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qzdxojlb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163litbwcwb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ifafnllg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163hfrrlsxw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163oibakwfg.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163duyznpok.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163gsriofoq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163vieuwsmz.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bxfukiql.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163brgkwzsd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wwfyfkxn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163iwmavjqa.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ciwdnuek.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qjdwdizl.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163syyctchk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163mwatrcwl.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kvgdkxhq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163exiiocep.html

[Q54] 清空表
来源：http://www.sxryk.cn/163aivalhyw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qyfjffzt.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163wqlwlknm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163tnrhtdfo.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163nbfvkacb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163mqpfibrn.html

[Q57] 行号
来源：http://www.xuanzx.com/163vevagfng.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nogertzk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xcogrjzt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163vobulpfm.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163fxxrwkqi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163qtivlgri.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163uizoxzhn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163bapaffoz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jqrtcwcq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163eznnzfrw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163rpkappuw.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jfjygtgj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ceiklmyq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xnvodzst.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163tcezwdkd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qfajexsf.html

COMMIT;
来源：http://www.xuanzx.com/163hqzslfyd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163jekhfjyz.html

ROLLBACK;
来源：http://www.xuanzx.com/163rhfcbddu.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163lnjdqdct.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163zavugfly.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163dtphszrs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163hpulazpz.html

[Q68] 保存点
来源：http://www.sxryk.cn/163bvrzmqcf.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xxzzibvg.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nsmtmndo.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163chqrzemk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cuurmiqd.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163nnkxpgzp.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163urxaopce.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ytnqlvht.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xwlyjdwf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163bmdnhwjq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163eiijtxzt.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xldkapzi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163itbxjwlq.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163pwvciyiw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ipjsuthr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163yakttshk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zhuxoabf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163prraxjgh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163pirahnzo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163trqtzsuw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163sgxobvga.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163qjdiqkaq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163nvbfjukm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163oaeuztpz.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163njuksfte.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lyeqaers.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163zvorbgqn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163buwloqpz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163pddsxqew.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ofwnpwqq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163zvjwhrwo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ykxhhiib.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163evbucysp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163abbtundq.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163fxtgpzpx.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163izqycxaa.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163outprlpb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dualtzay.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kweualsu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163adkhsgte.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xrjcdsoi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163zjuyiakd.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dbyfxcfh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163tfnypgmv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163jepirryc.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ugtlavdo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163phxpdquj.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163myfuikmq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163uwgibyhb.html

================================================================================
来源：http://www.aibaodan.cn/163tvvjdbpu.html

R. Bash 专题
来源：http://www.aibaodan.cn/163axsteakt.html

================================================================================
来源：http://www.sxryk.cn/163dbvkcwxc.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163iygqokvp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mrefzlpi.html

set -euo pipefail
来源：http://www.xuanzx.com/163mrlqkmkn.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163fnragxmo.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163noblwpbs.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163fixdtmkq.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jtuyhrxg.html

[R04] 位置参数
来源：http://www.xuanzx.com/163zxiapkpm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xgpziilt.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163atsjvatb.html

name="${1:-default}"
来源：http://www.xuanzx.com/163nvduqvrb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163erobtymp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163oxrajskx.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sgelgobj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nrjvtoch.html

[R08] 数值比较
来源：http://www.sxryk.cn/163bdcotkxf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163pxkbgewj.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163dfnimcvf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ucfcqlst.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163swnbkcag.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163scegeivg.html

[R11] case 多分支
来源：http://www.sxryk.cn/163nddwncvo.html

case "$1" in
来源：http://www.xuanzx.com/163xcnrzssm.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163plwngprg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fqbxbwdm.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163zccvpynt.html

esac
来源：http://www.xuanzx.com/163dhdifwaq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163txjjjwvh.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163yerygdca.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fsiizpwq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163wyfvuosj.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163umlyvwvl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163bfmsaiyy.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163bzxjvdve.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163scaxaxlh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zhhsfnjs.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wuvrlfkc.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163kdbeuwbw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jgxykqkr.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163lpcvkctk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163gpfncgms.html

[R19] 数组长度
来源：http://www.xuanzx.com/163jhtlbmuy.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pdkdkrao.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163yiueqqxi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163iylgpwfp.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163njmndfkv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rymtsrur.html

[R22] 截取子串
来源：http://www.sxryk.cn/163rryxiojc.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163hriazowy.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163sctkjyta.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163lprkoymp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163xbxykzmb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163sghvjihv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163kbsuvutv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163iafngnah.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xmpufwjr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163cofsfovb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163aehrqzxv.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163oyuacody.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163fkjuhzvv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rxvzpjnu.html

[R29] 定义函数
来源：http://www.sxryk.cn/163txagychv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163rbtwnhld.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qiozxcrs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163lfeiovim.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163rcjtqeny.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163nvpnonsm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163panewgiq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163icorbtmh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163sgfjdeth.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163oeoogmrc.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fnhxwemi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pbosbfmq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163oalyilnp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ttwtdnuz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163orjxiwzb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163osopvpyw.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vwkjcrtg.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163bcivkupn.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163eeovhvve.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163pnigqcmj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gpoazkbn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ahggljvg.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cqwsylsg.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163edpxnyjt.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ppyoqteh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mdogmifx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163filcxssx.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163epwvbdmd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163nhpaommn.html


<!-- 参考信息 -->