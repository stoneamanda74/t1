外链999!wailian999！

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jsexsxsy.html

);
来源：http://www.sxryk.cn/163vmvkkcat.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zaivntty.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163kpgexvyc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nzhotgwg.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qgmibigm.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163tdcxzfsl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163vkzxbzdl.html

);
来源：http://www.sxryk.cn/163bzcayjfk.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jpplfzgp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dbdxvzrg.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163saazldcr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163djrguuky.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163wsqgcmlz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163bhebykub.html

[Q06] 删除列
来源：http://www.xuanzx.com/163nxpphjvk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163etfcmwdq.html

[Q07] 删除表
来源：http://www.xuanzx.com/163mkoyhitf.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163etojxauc.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fykqazkg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163lclrbspe.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163grjysofd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163lornmiil.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163sjzjpjiu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qvfmewcp.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ikvocsht.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163mtopbqzn.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163stzhgjbt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163nvdzewzn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163cxlmplyy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qwfozbxd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gkfnexxy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xtlplbsx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163qpapmnzp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pwwysjra.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hjqeugvl.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163wwuhugkv.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wrvjeesl.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qohfsoew.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163vhwycjxl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163zshumtjo.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mtbhyjnr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163sgurkquo.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163uxcnmdid.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ljsmvphs.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163olptzfpu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jgdanqmw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163zeoifjqz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163lidcxuto.html

[Q22] 排序
来源：http://www.aibaodan.cn/163djmltdup.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163xaufbshp.html

[Q23] 分页
来源：http://www.sxryk.cn/163dthszdey.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jzyswypu.html

[Q24] 去重
来源：http://www.sxryk.cn/163dicqjvau.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zzpfvjmz.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163hzgoipaq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kdhxiacn.html

[Q26] 计数
来源：http://www.sxryk.cn/163zaqhkidd.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163qzkmmmwt.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163glsjsnzp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163pvtqrjfk.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ddlfhmde.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lctqenqq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ogdqjcoz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163welrxjqh.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jhvcepts.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163skfmawrt.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163mctisefw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163puvtfnnm.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163qlpdqnbt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qcknkzor.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163itqlmrhw.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163pnqadgzm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163uucwjnep.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163escjxhgm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163gaercdmv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wqureknf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fbpprime.html

[Q35] 内连接
来源：http://www.xuanzx.com/163pxlzxwsj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pmjujbzn.html

[Q36] 左连接
来源：http://www.xuanzx.com/163faprbarz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cxhpmtpa.html

[Q37] 右连接
来源：http://www.sxryk.cn/163kmsynabo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163pvzurbtp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163wrkaeqim.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gbgttfgy.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ztuxdpln.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163fftmtbky.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tmbiqwgy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163zuvoonio.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qpbzzxea.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163petckthg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163gfhemshh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163tdafvvkh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163msssncsb.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163bquvayzt.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163gjxcmgug.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163faqiylyj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yylvydxr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163gmyqzrdy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163owaczoma.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163vuueavow.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rvxzhehz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163epmlspxe.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163azpxnakr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tujryajr.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163zhmchfzv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163csddrcba.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163dzgjprhg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163oivgsddl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163etndrvgp.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bmohjebe.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163huboiasw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163kuxgsqet.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163yvomhlnm.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lonzdqyr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dsppsoxn.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163unrpsujw.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163rxcdnpdk.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163bmmpaprt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163cxshvnti.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zsqmkwky.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163yhwfnafa.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163dlboabtn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163kfjjclbv.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wzcddlfk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163pggcscui.html

[Q57] 行号
来源：http://www.sxryk.cn/163zlfaakrt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163wcpwyqtb.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163bfjqfxas.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163apqiboqp.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163lyxdihfr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163bcxzjmyu.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163lptgsecd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163kgqhpssf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163atbniqmj.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ccputdag.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ylbfrrop.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163qqfnpoho.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zvtkcjnq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163jsfspxta.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163shraafbc.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bkeijmqr.html

COMMIT;
来源：http://www.xuanzx.com/163putapxsm.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163apiuvapn.html

ROLLBACK;
来源：http://www.aibaodan.cn/163lolxcarf.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163vxhttlva.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163jgpoofvp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ayuiruts.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ljcpkckz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mlscdmgr.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163geyanidd.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jqlubsxw.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163vqbqgmra.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163urbmmqks.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lzfnqnte.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dcmzrjsc.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163dztqhwkp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163nlqwdzyk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163uzluwzbg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163pohaoufk.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ytbkhsum.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163rftplnab.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163mmxweqhy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xyczjrab.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163suqmjsbq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163pvorkpaf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163tfgcdqbr.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163istwfdzv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163zrdbtlzh.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163wfmzkygk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163hfoooini.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163vjrarbrv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163yfsmpmxh.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ljyzdsxr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163tgbtnorg.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ttjylppo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xjmtrhzx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ytejwghy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163xexertjx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qsamcnzt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163bfcvfppk.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163fwsbdbdi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qgefifdu.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163izmtnufa.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163dzarsphx.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163himntxsr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163mkskabtn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163yxilgary.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163sqfcyrwa.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163kepznomp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163lplujorj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163orxpedie.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163okjspnaf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ezgjpqiz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jjatzjjf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163hqrxrqjl.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163nmjmodlx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163doytafyj.html

================================================================================
来源：http://www.sxryk.cn/163hgtywarr.html

R. Bash 专题
来源：http://www.sxryk.cn/163ouohuoeh.html

================================================================================
来源：http://www.aibaodan.cn/163uepzzhds.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vrcpyfpq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163rywfrveo.html

set -euo pipefail
来源：http://www.sxryk.cn/163echeqtmb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163memwcjyx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pdzusphy.html

[R03] 只读变量
来源：http://www.sxryk.cn/163swxbdwer.html

readonly PI=3.14
来源：http://www.xuanzx.com/163asvoaojc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ztulorwe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163agzmrmyk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ixnbhbql.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163elphbrhi.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163xqfrlvht.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163daendjvg.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ksvnochz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163smrkpiey.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163tyohqnif.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163uvimsswe.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163lwqsnabh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163yxgertbi.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zuflnflv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163aoisjlnb.html

[R11] case 多分支
来源：http://www.sxryk.cn/163nwvthkmr.html

case "$1" in
来源：http://www.sxryk.cn/163akcazwsd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163nethcvbp.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163upabshxi.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163vwkqtbqd.html

esac
来源：http://www.xuanzx.com/163czxhxftk.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163gxsywhwx.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xyhssxcr.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163obrffqxd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163whhfjmdi.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tkhotyov.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163euwumpkb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163upoywoep.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163lcmagayt.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kobjteah.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xwjjnsuh.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nqdriusv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lvuewrpb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163lokuamyw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163dmpqngej.html

[R19] 数组长度
来源：http://www.xuanzx.com/163qctifunk.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163umgunvxq.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163iyzznkdr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163swglkdln.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163zknvgqgw.html

echo "${#s}"
来源：http://www.xuanzx.com/163bahkfjte.html

[R22] 截取子串
来源：http://www.sxryk.cn/163cbljbaed.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163srtfvvbr.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163rrnbdehe.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163qnyrrleu.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163lrytmgtx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163elkhulqm.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163timrfkjs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163qaokcalt.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nqewknhw.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163bbedrmbo.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ltftvyrw.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dsebrqob.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163laztefjy.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163bvctubzf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163onljrhiq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ekfcvpcy.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163pfowybkw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hnbnxbhs.html

[R31] 局部变量
来源：http://www.sxryk.cn/163kehirjaa.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mxibcpmi.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qhnfxxer.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163aibtndsq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163brvrxylp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163aaeccszw.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qpvjfxuh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rioeqagf.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163bcrktwim.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xisxzryw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ewfmdpjp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163tasizufo.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qusjpori.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ihtxwzql.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gbuqvvhb.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ytyleogi.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163rgdvxxmh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ixkrhmkb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163qxwxkzwb.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163igasljlu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pkkdwukz.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163xqyuwodv.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163jogfmhsl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163becnudfc.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163zjwtudbb.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163trrupoop.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jejxkymw.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163rbiffrra.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xsbyxhpc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xdsdfjqd.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zjamqroy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163gakzlzvb.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tnhhvdqm.html


<!-- 参考信息 -->