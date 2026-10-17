外链999!wailian999！

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ysjovone.html

);
来源：http://www.xuanzx.com/163kqbvosfy.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163frwdkbts.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163wduxmqks.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tuzzqgbb.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fmosnlvv.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163imxoptjb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zjvmoxzl.html

);
来源：http://www.sxryk.cn/163bibyryqo.html

[Q03] 增加列
来源：http://www.xuanzx.com/163iodtyffy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163iafzvfpo.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163opwlmcib.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ifaluojf.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ridmqwtr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163zpacpjan.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vdeboqtx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163yxfoizil.html

[Q07] 删除表
来源：http://www.sxryk.cn/163zhloflmo.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163jbtsskbu.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163gipdbkbe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163tsgvqhyz.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163udenqoch.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163iqxjyfft.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163fmldastf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jpribrrd.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163weyfonmw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163egphgtpg.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163lzgoeaza.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ehffqrvs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163yjbjaivm.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ovjcpbeh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fhxyyqug.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163gbbzburm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ansuhqjs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163blbkvgsy.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163smouaiqr.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163utrhaxth.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163dcezdatn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163guabwboq.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ngfapilj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163lgtvnzkc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163zatpfspq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163wbgauwob.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ezvkswul.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163kocmmyer.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163zgfmtunt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163iwgzhibr.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163yeuqkgfa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163xjydrlll.html

[Q22] 排序
来源：http://www.aibaodan.cn/163maiayxwm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163sqgevpyt.html

[Q23] 分页
来源：http://www.sxryk.cn/163wnytajvj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ykmshfoy.html

[Q24] 去重
来源：http://www.aibaodan.cn/163thjijjpd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pzljkkci.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ucbqfvnw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163rvqkbdkp.html

[Q26] 计数
来源：http://www.sxryk.cn/163kcrmbmwg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163heqorchr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163udqjhsya.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ntvjbjms.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163uexdwoub.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vcxrraqn.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163gewjohvd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163vgbczqjd.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lcgwwwik.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xgofzjor.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ggcqpvca.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vavshxyj.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163dnjqfjst.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kbhpcjmz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163wnubebef.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163qokicaqc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163rbwkaeus.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163qyetnibc.html

SELECT * FROM (
来源：http://www.xuanzx.com/163eldgusif.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163shfklpec.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163onwwmdir.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dvniilsv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kiauoryd.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wqjbaunx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dgpwudbi.html

[Q37] 右连接
来源：http://www.sxryk.cn/163wusjkvib.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ewnscebs.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163qtsgcccb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163htaderen.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163zsdmqnvp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163zmcnzwvf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bxaygtfx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163bciwlikq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ddrkbioi.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163epqhwqmt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163qzctnbcc.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163lpaxymwr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163yxecqyel.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jnnwnddd.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ntlgbrcv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163gkvuvlyb.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163uqclxqde.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wseysskf.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163apuydtyo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163gsqkcira.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163orejejqw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163adtejqsz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163uitpqqru.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163izchyyxy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hgtcaqla.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qdcpenbz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ydrmsioa.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ngxgltjc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vecbayrl.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ebwidqva.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163nusmngxg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wnzxhdvs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163bsdaohpl.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163njtcnllp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jkodyrst.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163mgmvpamd.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163cjqhdzhd.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163hpvumxqf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163akaukniv.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163rsynoara.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163glklleme.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ftgtmvtb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163yykeaerr.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163frrwiefc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hseefmom.html

[Q57] 行号
来源：http://www.sxryk.cn/163jvtddfpt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163qfeyojfp.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fpcmyxib.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163mvdnltkm.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qboebcsm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163npibjjkc.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163xavjgunp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163dnquakhs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jcryhgho.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zsybhxum.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163gooqtiwa.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163hgmcnhqh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163btrpwxcv.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gqmadavm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163jtczcryr.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163pglqftzv.html

COMMIT;
来源：http://www.sxryk.cn/163zvasgioi.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163trdbnykt.html

ROLLBACK;
来源：http://www.xuanzx.com/163xgqifewq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163pkudssjo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163widwgvzq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xwliwknx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xualnzpl.html

[Q68] 保存点
来源：http://www.xuanzx.com/163rqevofyw.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zbgigkum.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163fwmsjcyt.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163flzwtmpa.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tlmecfpn.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xbtlddin.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163utpwbixo.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ozerboxu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vfktovjt.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xllayhwu.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163zjpucqwm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hrvnumjs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163mcxotaod.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163dyslrmiy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163dulaclpk.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163gehuysvl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163dslfgheq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163tmnsopin.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ermzjigl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163uldujwji.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163csasdjqc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163hybhqlil.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163rjugblyr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cpqulssr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163llgwvcce.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163hxnmqoqr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163molqlcqp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163mdaoumgz.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163pgvfdtip.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rujixpgb.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163lvnuabqo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163yasynvpc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163sstfspeg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163fvnycsqm.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163dqnldthq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ysfeljqr.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163kboheesa.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163dtsktijd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163glbvsiys.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163bizcqfkk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163hsbgfjtl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163cneeupns.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ekvfcvhy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163fykzhdgd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163tlemhwiw.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163kbzicfzm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163rjbtpzbl.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163syxljrbi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163bwxiiqar.html

================================================================================
来源：http://www.aibaodan.cn/163gzxvekky.html

R. Bash 专题
来源：http://www.sxryk.cn/163qwwqhfdk.html

================================================================================
来源：http://www.xuanzx.com/163owipppan.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163oqhcytnq.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163vvafajjk.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nvsgrcwg.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163fuaazrbg.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163jzgyzofc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ocubkujj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163irrwchle.html

[R04] 位置参数
来源：http://www.sxryk.cn/163vvbdskoc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xrvwjstv.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fxgulbib.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163nhdpakvg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163tsoatawe.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163lbjgckon.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163rqhulfgj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163boxnlvmp.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zgduksct.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jrubvshb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163scpvvqhp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ievpmbxb.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163njsipqxi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bxoenidx.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163snitbsld.html

case "$1" in
来源：http://www.aibaodan.cn/163ixtngnkj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163blxvnljp.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163enwolbil.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163muztqltc.html

esac
来源：http://www.aibaodan.cn/163znwsqvpa.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163oicbfotl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163gdoemazo.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zlxerhjs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163rmskolsf.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xdlnzvjn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ygrgpmrx.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ixevrurq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qpzxoyfi.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163llhoglni.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xeicwcnn.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163txavblcl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163pijfhqln.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163otwmnehg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163lnodegem.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163krquaaog.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163fzlmmpeb.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163mvwnmzog.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163lfmgrtzg.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163awnwkkar.html

echo "${#s}"
来源：http://www.sxryk.cn/163xwujxlhn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163dcvimblc.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163dkarjopp.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163bhheenuc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163fdxvqfup.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163blewljhi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163iixopydg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163rqblmjby.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163efsmkwou.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163swlqlhmd.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163uozsvuqt.html

[R27] 算术展开
来源：http://www.sxryk.cn/163gtbymlhm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163intnlgun.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163snqgwdns.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163dgqmgudc.html

[R29] 定义函数
来源：http://www.sxryk.cn/163guxwlkvz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zszrtcfz.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xzqffruz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163oyuydfsm.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163tmqkgfdf.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163hmkrycor.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vxsggadm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163aqmdbsod.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163iiupcpmz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163peinvcrb.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163fpufzncw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lozvojvn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163gxqyuylx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163rjmycynt.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xnlenbay.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wlmwgday.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163afkekkrf.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163kpqdeayu.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ltnovjdw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163yctjairr.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163mauycwqx.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pomicdsc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gkvxzaiy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vjwuskpl.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ywmepjiu.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kolofyrt.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bujcwdcr.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163eicmvgut.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163qgequfch.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163qtkrlvyo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163pfcpamol.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xjylxwuh.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cdudywnb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gvyybmcy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163xgurgcgz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fyrrkxtz.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163xpscxxpl.html


<!-- 参考信息 -->