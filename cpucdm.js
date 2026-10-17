外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163waibbxxx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163iaofgjki.html

================================================================================
来源：http://www.aibaodan.cn/163xsxphssx.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ywdccovh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ypaqbyny.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bdbzvsxq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163xowqzfnm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wfqhdjmx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163sbfrraaj.html

);
来源：http://www.xuanzx.com/163huuhozrl.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163iyqacwpr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163rdayhhdq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163epcxkbdp.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ywvyrmon.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163lpxbnojo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163dkluneqf.html

);
来源：http://www.xuanzx.com/163nuqpvovl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163jwfmvlhs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ippgzqgc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163inbwcsul.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163qyrurjqj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163okguiilx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wznicchv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163afifzdit.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nkdyplif.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163eojcztem.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163koraggyb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qmydijgu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fnslbuqk.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163hreulawg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163heqmtwzm.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163yxxaltpn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mpylgyhy.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163oualecil.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163maougioc.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163jwkixjwh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zexsmdza.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rvuvydxr.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163zwizuexh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ewcyhibc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163bgnlaoaz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wgmrfiao.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ntejwzzz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163derganhi.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vovlvlii.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163hszfdmfl.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163anglrcap.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163gexwfmvh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163evsqaqfx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163fvvnxstr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163wtqkxfzf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fzltcuec.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163lkyiblob.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163nvkqrurj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163koenomkg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zbuswcud.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163oekhnlvw.html

[Q22] 排序
来源：http://www.aibaodan.cn/163upmbouwi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jxtulbfj.html

[Q23] 分页
来源：http://www.sxryk.cn/163pojtnzmn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ewjgaazr.html

[Q24] 去重
来源：http://www.aibaodan.cn/163vhpjiiwx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pkkqaxlf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wsttgcnl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163sogqqdxq.html

[Q26] 计数
来源：http://www.sxryk.cn/163qouovkcj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ceupibmt.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163tribubot.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163vklduikj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163wazjrvly.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163iwnsafrw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163orhcvftd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163fzozcpca.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163fllvxcta.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163apkenkdf.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163dewcpvpf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163oiaoquoy.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163cvqcnmab.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nclcmrka.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163rwtlyecc.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163sluwtmff.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163cypgqjuy.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163pxpkpzjq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xbgpzuak.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vfmmdsyw.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nlstjjom.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nwlaspnn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163emmhvgvx.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tmqymngu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qlyetetq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163gqqdkhta.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163czxdygme.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mmnsempi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163uuveyxjt.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163aqfqhkre.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163tylzngrr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hifbpile.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ehlshtpz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163btjljick.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163terfqusa.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163lpzsyptr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163itzdnueh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fwvgtuxe.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163yggwprqu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lmonkqri.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163llhwdrug.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163sqfktrop.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163fqrmkdxz.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163kdmldooo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tilhlndj.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163tfeclyas.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ysjonart.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163byetchrc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ppmprmfo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163dzbdmltd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jslbhjnu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163nexojwhv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163avjwkocv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163uibuzjkg.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ujnameck.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163xcfxpkhz.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ehbfavsb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163wxlmcdte.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zpoqaqox.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163gjyblwit.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163czzgnaal.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163uyzcdmbi.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163kakkrzrx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163nrgbalon.html

[Q54] 清空表
来源：http://www.xuanzx.com/163vhsuhtgr.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jumaunkl.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163spavsivx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163oznmyurd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163tckhjber.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hijzwxkj.html

[Q57] 行号
来源：http://www.xuanzx.com/163vngbzfeb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163kyjjehjv.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qyaizwkf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163hjzkugmo.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163cfrvfmcd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163etrkipul.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163wprvscfw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jlzpmwyh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163rhmxgunk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ykpmioek.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163kfjafelq.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163nelrttpx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ewwgpzgi.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vvnucpko.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163shbsfqef.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163bznilfyj.html

COMMIT;
来源：http://www.xuanzx.com/163chlksxvp.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163yqennenu.html

ROLLBACK;
来源：http://www.sxryk.cn/163rcvkahgn.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163eeoavvfk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163jnfravgd.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tuokbwyq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pkboiqsv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163yfiplaca.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163miojamlw.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163uxtlgowz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163aymkiwne.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163kkdryawv.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ytdhxncm.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163rlyhpjyo.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163nvhuhnwy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163fhxajzei.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163jqrftxij.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163rooryvab.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163peztmxgs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163bnvpjcia.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163yemfsxvc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pdglqavg.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163fjdoitoo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163oaeqwfkl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163oyrahrrw.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163bgiknsyd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163tgklppbf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ysjsikro.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163fqdslywx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jdolckhj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163chowvvtz.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163nxiczqyp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163dlakvrgk.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163knmkxtnm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163fipfqldn.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rasjfqve.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163tzgfqeco.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163leqhkmeo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163rocryrja.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163jaxvwwoj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163jmcqdnol.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163fyckohhm.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163iwgxdkkj.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163xfnrqshu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163fxewyfut.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163jiybirig.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163chasklwn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163dtzgpact.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163xwgjmwnl.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kngfrbbu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163cfwspodq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163djarqfsr.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163cuinnvgj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163gwkyxkab.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163pvvtppnq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163iljstvwz.html

================================================================================
来源：http://www.xuanzx.com/163etcgwixj.html

R. Bash 专题
来源：http://www.xuanzx.com/163glzsxbeh.html

================================================================================
来源：http://www.xuanzx.com/163chgzfbfp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163oiuyziua.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bcrwznxg.html

set -euo pipefail
来源：http://www.xuanzx.com/163mxpsormt.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ipmgsuqs.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163hblzrism.html

[R03] 只读变量
来源：http://www.xuanzx.com/163iwntdxbx.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lnxyfhdp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163kiyypgdz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163wvacgozh.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ebxuzikl.html

name="${1:-default}"
来源：http://www.sxryk.cn/163skzhtdrx.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163avzcqpxw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ksbaeshp.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vidxyvxz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163fbobdagh.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qsrplkcz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163segopves.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163nmzxjqdy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163kqrejsjz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ktclmxqg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163hrqlyuve.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vbcogbgs.html

case "$1" in
来源：http://www.xuanzx.com/163kfwtxeio.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163guxucdir.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163bkvvjfcs.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ypjnfffo.html

esac
来源：http://www.xuanzx.com/163nvekklfa.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dpdhvnfu.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163akhtslyv.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163thibbfpy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163boepejvk.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fleuxyfs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163fawslzjn.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163bmeofaui.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163lihwzogg.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163nyebuxzt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163owkghatt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ufeqarwo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ruyjuibh.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xethzgde.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ekeenswj.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qqskarze.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163mhwlhwnn.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tlsnubye.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tjkfpibb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163tnkuqmbr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163dsfprqok.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zbpnjyiv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163dgugocgi.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xxtqqelk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163mtvgbcxp.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163opkjxfnb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163btvygylr.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163sgmkgosn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163dbajemed.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163mbkpzavt.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163bhpyoflf.html

[R27] 算术展开
来源：http://www.sxryk.cn/163vwokigdr.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163hpwazfew.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qudrdfik.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fnffsjem.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163zhvriyvk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163cdftkauw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163lznbqpvo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ipuqtpdz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163weknksnx.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lmdqeonn.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qplztnkp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163frmqdqbk.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163faerkkrr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163dqzjhcth.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163izzybfpn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163nzmeyugc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163dvhzxdjy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163viyfneml.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163pttpdhvg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163uvuwahib.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ttfppexq.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163kyuafjmj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163tcklqdet.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163fodlywcp.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163mfkrpyzb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163hrplximw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wyglcamj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163aswxkhgp.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163bzeztsaq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wrtzienq.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hbrtnbsh.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163clnfphwz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163hyehgtdf.html


<!-- 参考信息 -->