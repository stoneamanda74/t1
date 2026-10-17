外链999!wailian999！

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dgvcvjot.html

);
来源：http://www.xuanzx.com/163sckhuwqz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ibveeqer.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163gemzigen.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163alxmphkn.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zpfqcior.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qyrfxims.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163vwhmonmf.html

);
来源：http://www.xuanzx.com/163bsbjwzdi.html

[Q03] 增加列
来源：http://www.sxryk.cn/163xaealfkr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163jxeahvgo.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mmsdjotz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163pmhvmyqi.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163vtmqndlj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ggtvwdfs.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vpwpmfpb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163hjpslhyf.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ahxvbnqn.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163uyknlkdo.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163lcxqgyej.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163vgurqagb.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163kmvoucdx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163cqzduzbb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ekjiizxa.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mrbqjbki.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163pjiuurev.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163bqvjzbsp.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163yyvzzuwy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163eebvnltc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163czlsddae.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163kqktyouw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163yjggfjsr.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163bvvenapv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163hagwapbq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pxlyteor.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163uveaxmww.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163vodrrali.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yqbwpuht.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163iodjljmk.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163twiehrks.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qerzfagt.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qnhnzozg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tgzbazgw.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163yjwtzvwx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163uzqjtuoe.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ucaokfbf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163gtoxiazg.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vpftgcxj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163jxjnokyl.html

[Q22] 排序
来源：http://www.xuanzx.com/163pkqmeopu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163dmfygxxs.html

[Q23] 分页
来源：http://www.xuanzx.com/163xvwjriub.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ndxevqmz.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xxqnuzka.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163nnloqtjy.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163wifdrzod.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ouffdvpu.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hzjlekpd.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163vvcbjiox.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qwwfriom.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163pyhqvgpf.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163buymlhrb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163cgqumyts.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jycnxbaf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xngisjnn.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163bruzqnxc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tiskzope.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163xanqfqid.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163tevofdas.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163cavdlzok.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qyqqzuea.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163gzzlhqgo.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163whefrdwo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163vmiegzyd.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163kamefkud.html

SELECT * FROM (
来源：http://www.sxryk.cn/163hnpbxtqz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163jlsqzqoy.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163jlbjwlby.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ounyamox.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rdarlmfk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wxhuctfu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163sdszuigd.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163nrdzmxhv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163uegvpmnq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163dzoyjnyy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163msqoycgt.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dsqjvkov.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163dqjbfmvy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163pinxqwza.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163zqxdabjh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fdxrsdeu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163gacglxoc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ywlhywpd.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pdwfgxsb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163rqmnuwpz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163yygvgmkl.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ojpygyhd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163abcpbukr.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ibchpgbi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163jnwoesji.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163bwvljwue.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163sgnqdwnr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163fjjmmahf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163reljwzcl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ehlmomrb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163leigguzj.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163jcmbqagz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163fitvxcaj.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163pujxxpyk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163brkfhftw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163fcassgbt.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163acpvbmfu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163fkyzlyol.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163jruncexg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163nipowsps.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dldjnqjr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163mbbpubuq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163zkneaihy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163oywtmxso.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163sstmdprs.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163svmqdmit.html

[Q54] 清空表
来源：http://www.sxryk.cn/163coiczwuk.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fizezspg.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dvdyqpbz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163skczqejx.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163gekowlhd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163yoatihuu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163tjmpwztg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163arwmznhs.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qeczvqjp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163utllioap.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ideioywa.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163mkbeabdk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163vkgffkkg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rydedrey.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rqkskohl.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163prrsjwbf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yruwgbll.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163najiggja.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ehrxzikm.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mkfjyijn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vucndazk.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163qpkfxmsy.html

COMMIT;
来源：http://www.sxryk.cn/163opgxoklt.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163kodptasc.html

ROLLBACK;
来源：http://www.xuanzx.com/163ejftlfwp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163mmjamsjl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yretreud.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163auknilnj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163qyzktojo.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163uhnvaljv.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163frtpffmn.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163zhxrusbd.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163sitxzkes.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lqkpzxkh.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xfvshycd.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163saneymdr.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xexkkdan.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163buhysrrn.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163pjurvgfr.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163rapoahfg.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163pejygljo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163edeafpie.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163dqutsbgi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163rjocxteh.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163uohcxhae.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163yluqpret.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ifuikdxt.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ioxrmwsj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163rnfstqdt.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163bhpmmwpd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163bmiaeytk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jdlkyeri.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163eamliwwa.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gzrtyzfz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163mmwrkcgk.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163iurhunij.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163zkazhmvc.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163cjcrgstr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fqywfwfx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163eaultlmq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xbpxvzuf.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163jzfqtvnb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vcyqallr.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ygzgdlje.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163zvlzmgpb.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kgxixhbv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163mpfrnffk.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163notdiaza.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fidizdwi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163cggewtym.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163dmwyvoll.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ejrgdkct.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ycwevglf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163tcajtvjl.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jyblndst.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ebefyxir.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163hajngzrk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qxcxsvbh.html

================================================================================
来源：http://www.aibaodan.cn/163vguptelt.html

R. Bash 专题
来源：http://www.sxryk.cn/163glcrglpj.html

================================================================================
来源：http://www.sxryk.cn/163ktxnusim.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163miryhfbu.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163hrerqnko.html

set -euo pipefail
来源：http://www.xuanzx.com/163septsfii.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163boqunvgg.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163zovweehx.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hszogvhm.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rxizqlpz.html

[R04] 位置参数
来源：http://www.sxryk.cn/163edwwmwam.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163omzncjbw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jbermavk.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163caaqmntj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163gxetumsf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163gjfqfvew.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163wityhvqx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163wmfrikxw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163tokcblhx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nrcqaqzo.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163fbulgvlp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163cjxkxply.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163pegihyax.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163nebfdfvr.html

[R11] case 多分支
来源：http://www.sxryk.cn/163uoekbpuy.html

case "$1" in
来源：http://www.sxryk.cn/163fntkngto.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163pdwrrlgk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163gjwnabhm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163fmsjsasn.html

esac
来源：http://www.sxryk.cn/163bmnbyrbd.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163majdoqhb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pnamhphv.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wodmscoj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163kzbqtyqd.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163vtbldclt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163kydlqtip.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163shhqqndv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163rrkzwzom.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mzcwpikj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163whoueiiv.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hamrggqk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ogpazukz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163runwljek.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163xgqktxlz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163xcpfazkv.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kqaylruu.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163xlyvxibw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ybflvtvo.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163bamwaqxw.html

echo "${#s}"
来源：http://www.xuanzx.com/163coviabni.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pchuijjx.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qwavdeel.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fcrqjmtz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163evbnyror.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163kdaweubm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163wtmgwioc.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163knzcynhh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wensmqei.html

[R26] 命令替换
来源：http://www.xuanzx.com/163naoktuou.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163qhhhjapr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163boawaojr.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163kiwxmrrl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163tnjabfso.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163smbuhfbj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163yloutxfm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gthzlxay.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163lefqcdod.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163gtprcimw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163jewjwrns.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163irtzopra.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ltyiqxur.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163fztxaege.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163qpjoywdi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163yquozkoj.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163buifgrlm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163avjsmvad.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xqcbnoct.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xxjioftq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163fguqnslp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163uhnyvebu.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163lxynypvt.html

files=$(ls -1)
来源：http://www.sxryk.cn/163nkvrbcww.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jdrklxjq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bvvkrtak.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163nywnhbgb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163mohacttv.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163gneuggcs.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bkbfpfkv.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163bnmkwwxl.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ggmsceqn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163rqtlgqtl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163patlpbqd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163gwijjzuo.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hqpevmle.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163uiowpahx.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163pblkrrno.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163hxoqashz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mwqhctvf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163anwgsssm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163iibuwzze.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hlrydjno.html


<!-- 参考信息 -->