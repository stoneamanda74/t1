外链999!wailian999！

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hirobqqu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fwzedeyx.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163bdifnjoz.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163qkwbkahy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163unsdrzwi.html

);
来源：http://www.aibaodan.cn/163uvuhrfbf.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163wexpknsy.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vdxtooqy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bgylozrh.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fpulcfkg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xtixynsk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ooleeaqc.html

);
来源：http://www.aibaodan.cn/163yuzehvki.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163xlplrnvx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163nsepzotm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ozhzydhw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xumxnifr.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163yivuifpo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163bgzwlomw.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163efqplrod.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163jknblghn.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hzjmdgfi.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dwuwrjjg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163eghzawsy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xeqqvqln.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163bqdedmqu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wdkcosgt.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163elauqzwj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ktmnzfit.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163lyludpqe.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163uvxdwiup.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163haksifyt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163shlhzocx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dufvystg.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163wimlxjny.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163karwpytf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yqqdvwqp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163fdsctzvq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163iadxmosg.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163wxknvara.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ihasbptv.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163syjxetkt.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qwbttevs.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163tzqywptp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163wtddqojr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163yekijvlj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ojzlqxbd.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xikezxqx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xaphrehi.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163wcapbeax.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qljvaawa.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vtiwatdn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ihvzparn.html

[Q22] 排序
来源：http://www.aibaodan.cn/163givlplpv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163yqbmcpdv.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qajhcjdv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jvrsthxb.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lolhkuvg.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163kxnsapfa.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ezlgnvwx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163nzzsxgrb.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ctjydgkn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rahrizwt.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dpnesewl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163owxndpeu.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163kdmjrluo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163wxblbzwa.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163mybpercj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ypfovpmc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ztucnsao.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yalrjktn.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163fgrowhzc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163tqbpstsc.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163sibdmeme.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fhhcqdcc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163znyqzbfb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163pehswewu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ocokvxne.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ylhfiwoq.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163xhahwuls.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dpyxhvyn.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163kiputaei.html

[Q35] 内连接
来源：http://www.xuanzx.com/163pokkaztc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kylvxugc.html

[Q36] 左连接
来源：http://www.xuanzx.com/163rpskwfuy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xexvkygf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163peykdcns.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163lrdxcpnu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vvtmfvkj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bozssdjd.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163nvokgudr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163awewqkkv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163xrowecna.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163uhsgdoko.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163onwxzgcs.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163nsficzgb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163vcfyqzte.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163rhvqbeky.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mssoxzow.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163xaixknnu.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163umdbpthe.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163erkeznsc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163cjotjsrv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163szzfdrzk.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163yzjryafm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163stzmnasg.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163uamqdiqk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wffjpjat.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163crrbbdgk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zpfhjzpm.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163kjkzcbkl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163vrejyhwe.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163otpkgauh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163cngsgary.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fjnogcyb.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wgzgmljf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163lqztmagw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ezhqxufc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163mdsmkbeq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163odaahfig.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163dprgfdvl.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163wrojlvve.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163pnsmbgqs.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163dethwhxn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163nxdqoglv.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nkbcbqtu.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163lcfrlfij.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163echxilwz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163uwrsxufe.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163lywkbkou.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kaajdzqe.html

[Q57] 行号
来源：http://www.xuanzx.com/163dxkrttrf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163othoiguu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163cjckyyle.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163esnmzrje.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ecpxithf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163mtaxsiqn.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163csyfafnn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163phrpedaq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ufuhsxrl.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ubwqqxvc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163cbjlesmy.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163apiawsib.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ioqpxlls.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163otvcfebt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163wumhmenj.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163queiegdy.html

COMMIT;
来源：http://www.xuanzx.com/163qkhfqibr.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zccyqwqk.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ulaxgeul.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163qfxeuusw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163prwyexyx.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163sehgztve.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zsjdmhcr.html

[Q68] 保存点
来源：http://www.sxryk.cn/163mtzdxhvv.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163wyealmob.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vdbsbhjo.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ipjfeytj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163iluyjqln.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ukfboggq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163tfnptjhs.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163fhvfroxn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163hmluhcdq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lwuzdijr.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ihzdcyrs.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163kdanjpya.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163qjadrdpr.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163hckwbzym.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163oografxh.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163mhnyothi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163jdkvazhy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163abmapbub.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jvmchvhr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pxnotoac.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163nozrqlaj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163dladsybm.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hajfneee.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163rglpjvdd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wdtpxqnc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163gvvfdykq.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163pwsqfxkd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163dyeireok.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ymwpvqlt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163cudrgfil.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xbsoudwc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163dpwkanzw.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163gzglkcet.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163dfabrpid.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mxhzmfdr.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163nubhlffl.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jeemevjp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163yojeedwu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163netnwulo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ngdqxzvt.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xfnirhis.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163unxbrqxn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163siqyfkkt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163madvtkyn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163fhqgouyn.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163kjgszcvg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163onsdmktu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163lvkubwik.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163uaddwtly.html

================================================================================
来源：http://www.sxryk.cn/163gqzhivfo.html

R. Bash 专题
来源：http://www.xuanzx.com/163lfcvdyqp.html

================================================================================
来源：http://www.aibaodan.cn/163vqdaneze.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qliyechj.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163yqsuvako.html

set -euo pipefail
来源：http://www.sxryk.cn/163xezanhnb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163xkijipqk.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163gdksabxa.html

[R03] 只读变量
来源：http://www.sxryk.cn/163bxuqqnqj.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mfxyztvj.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163mrcjiskc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163eqsxdejy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163yqzaniii.html

name="${1:-default}"
来源：http://www.sxryk.cn/163wxejlbag.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163giuxtqkp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ztqebzlr.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163mzumznyq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163sonqalgq.html

[R08] 数值比较
来源：http://www.sxryk.cn/163urucpwgy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163liqxuirm.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163strsnihz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163aaekzapj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163sjjgbseg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zkmezdeh.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ovvykfxp.html

case "$1" in
来源：http://www.aibaodan.cn/163axypgbba.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pdqkppox.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rlttyzvi.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163umhklxzk.html

esac
来源：http://www.xuanzx.com/163emurxevy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163aiwgdymf.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ostefdfe.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hiwitzzo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163rkpxmvme.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tmqditmr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163olsxflvf.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wmuhpdrg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163umuzytuo.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163uzwvujmw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163gskqutkk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163qzuvegal.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lbunkohb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163hxcrxehc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163qwsqeknz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163snctulew.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163sibtrqpd.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163gjnxmlxp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163kokcwplo.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163vabfpnno.html

echo "${#s}"
来源：http://www.xuanzx.com/163cafboobu.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ajdafhfv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163jgthubcp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163idilzlpk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163igpzrsgi.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163zdwgmbkh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qltpxpsq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163xnvtmpel.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163aclfapyk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ixqvpask.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pxnpprof.html

[R27] 算术展开
来源：http://www.sxryk.cn/163leahbfen.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dkvumfzi.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163fkoznipd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163kwwcgjkz.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ckgrkbyq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zmprwuto.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qbozoxjn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xfkyeues.html

[R31] 局部变量
来源：http://www.xuanzx.com/163gntpqsuz.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163hcvntkra.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ejexzdrh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mhyjerzf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163htplahht.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163lnhyqfwv.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163yhpuibiw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163perlsujs.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xbkqohgu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163frbwlezd.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163vyoxqltm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163pgvbusfh.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163cqjffnkd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163orgfcldo.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hcgihzbu.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163easfwizh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qdjqvnxs.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lwiufwtw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zrhnfnza.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163vrotycla.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163mvgcuadb.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ccgnszyh.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163qjpwjwhm.html

wc -l < a.txt
来源：http://www.sxryk.cn/163nqijpcoq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163pbtjchzj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xhjztqem.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163mphpffpd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163wzbzmmcs.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zdxyeqxy.html


<!-- 参考信息 -->