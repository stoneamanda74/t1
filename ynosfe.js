外链999!wailian999！

CREATE TABLE users (
来源：http://www.xuanzx.com/163bwwuuubh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163omnqseux.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163roeeovba.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ynfyziwb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163plerqjmu.html

);
来源：http://www.sxryk.cn/163eewegmsc.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163fsjapcwq.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ekngopmt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fpvghlim.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163xtnzdsxu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163irhlbywy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163hzmgibih.html

);
来源：http://www.sxryk.cn/163owleppqa.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163rfekmlic.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163wfguudyn.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163fhanwkcm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163quplergv.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163uzqgvjaw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163wzcdezbq.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163usfgqicw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163yxfrlnmr.html

[Q07] 删除表
来源：http://www.sxryk.cn/163nztjafuz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ptnmlppr.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163sdgndfwm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163unvmspoy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fwuzafxb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mmjpkhhn.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mkohbprd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163djqseenz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zjytzyre.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163gueeyaxp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163hnibgfus.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ywbznlil.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163iwolrufy.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163btwjgnag.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ejudzvxr.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163zecdczax.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163wfssntlf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163bfohhjqj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mnorubzv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163gdrddikq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jomtevft.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163hsavqitm.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ifrxnvmm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163eghgsxro.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mjwfbcvj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163utaimhdl.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163gcwzihxr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163vwpiaglb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163rqjpmcyw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163oupoglem.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163uzxkexui.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ixqhdpwz.html

[Q22] 排序
来源：http://www.xuanzx.com/163xcnzkirt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163fthytzcx.html

[Q23] 分页
来源：http://www.sxryk.cn/163zptqcdlk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mllinxxd.html

[Q24] 去重
来源：http://www.aibaodan.cn/163nmixiqed.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ugvtxoaf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163hbrhbzoz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163kzenladw.html

[Q26] 计数
来源：http://www.sxryk.cn/163knrzngjp.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163djybagpm.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163hnvgmxdu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163isfclkue.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163yutpymto.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163qfpdeukf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163fwwahjoc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xkyksltq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163khkxoxmy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163laavkeqa.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ielwjufq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163byoyrehm.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ehhionsz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163antzwqal.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163srhbauyp.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163mheeqdwq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163lvxnkvpp.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163nsohezgr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wbchlizx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163yftbryoa.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163czzddnzb.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xyrbzjvj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xzpjqjwn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163clnbiswh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163llgyspua.html

[Q37] 右连接
来源：http://www.sxryk.cn/163nhquonul.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163fawlvkxb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xrijvamq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ozkzpitz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163tvttuhlp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nnvmgpwr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163qqtlxesx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163htphblzs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rebrtevw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163baazvclh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163iyrbtezk.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ajjzavqy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163sfvivaag.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163mflybsdk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163stlvxsqk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163hwowjyxs.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163hiiadfvn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ncdstqay.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163xehasszb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163vneefnxx.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ueblrsxh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xqfjhfdt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163aizvayvo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ymcwonfn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163bnjzdzsw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163niqrrcoz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163rsravqrz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163sytgqpim.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163eynkicfm.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163lcnckuta.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163wmkivewh.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163gvtuguwc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163epyleutk.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163dkfzwksb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163orzyjdsk.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163iszjznmr.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163tibngqzj.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fidhkvfu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163pqgpbjts.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ecpmmugk.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163kdpuilwg.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163uxcoksha.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hviyjzcx.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ffachyiw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zcfkatnm.html

[Q57] 行号
来源：http://www.xuanzx.com/163eqsdvcbj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163qekfcjvb.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163seoahxji.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163iofvntem.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163egwkvowt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163mkkmlthe.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163lxocxfxg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163yjhyxwal.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hbgbzdvn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163gdqwvceq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hsyksmqo.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163lvzspvcr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zvxcfqql.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163eynkpbob.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mdigzisl.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163flzibixu.html

COMMIT;
来源：http://www.aibaodan.cn/163ykgojlgv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163arkjyruf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163unavpnhz.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163hfgyrepi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163bcezlwkg.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163nlryrpnj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163njnoubld.html

[Q68] 保存点
来源：http://www.xuanzx.com/163urtiudzv.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163bcqddozy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jmhnlzrw.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pinharcq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163tennoamd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163dbscyxpn.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vopnykbe.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163bvvbehzn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163abledwmn.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163meesiuqi.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xkwxnasu.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163djdtpnve.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kkwlvbqg.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163wfcvxwtj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163qfzxnrty.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163zxiqnlmf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163oeyxkjrd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163lsptpbvm.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jhjnokyc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163dkeqmrdb.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zsykmzzq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163xbudjoef.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ghfxfsxa.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163muupswvq.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163nzfhquvk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163nyhxafuw.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ttceoymz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163nqvmoqtp.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163kaplqzlg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vwxijukx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gpjdkisd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ytmxbzag.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jtcjtxvo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163qbuejaxb.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163uyjsdpsn.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163rbeimbzp.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163uuahbvfb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163egcrwmgl.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163fkoavmsw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163gzvbzdxk.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163tupmtvbz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163szversaf.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163eoloassd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163emnhwnle.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163majjzdfp.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xboungqy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163tggzsvse.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ufxmzjrv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163qbpjjvtg.html

================================================================================
来源：http://www.xuanzx.com/163nptntvix.html

R. Bash 专题
来源：http://www.aibaodan.cn/163atzjlxig.html

================================================================================
来源：http://www.sxryk.cn/163agaumyth.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163psgerhfw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163clwhsqko.html

set -euo pipefail
来源：http://www.xuanzx.com/163inhyoamm.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163vvylgllt.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163dvpxrhoj.html

[R03] 只读变量
来源：http://www.xuanzx.com/163cizdyrfv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ehcvbyav.html

[R04] 位置参数
来源：http://www.sxryk.cn/163kyzvoncj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wfjgqdgs.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wiqllvel.html

name="${1:-default}"
来源：http://www.xuanzx.com/163vrhfgcwt.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wtcnpone.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163fbdgdgok.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163dkgehxrb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163yxzhrfgj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163hgpgjmzs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163hnpdskdn.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163aygxtngz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163okeinhkk.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163xyvblusb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163jpvrsvog.html

[R11] case 多分支
来源：http://www.xuanzx.com/163helhtqlx.html

case "$1" in
来源：http://www.sxryk.cn/163knhulemp.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mtpycgyy.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163vqxfiqrd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163nlohqaiv.html

esac
来源：http://www.aibaodan.cn/163vnlwvgnu.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ztelevst.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ccbffhnl.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163tcmbhvpr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zvzuihog.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163wlcbwbgd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163uqbmawxm.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zacolhus.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wacavmyq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163gzyzbjnb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163jcljsftf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sodvankt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163fxtblgwa.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163wzckhxog.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ghmgnpcg.html

[R19] 数组长度
来源：http://www.xuanzx.com/163nojxhtvu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kdogypdi.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ggfeqrbu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lccjdmza.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163bnlgeftr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tdtueinw.html

[R22] 截取子串
来源：http://www.sxryk.cn/163rfcylirc.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163fikptvej.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163rrwvakfb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163uhztuiwc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163tbgpowco.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ayyoliex.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163bttshana.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163cfbituys.html

[R26] 命令替换
来源：http://www.xuanzx.com/163dkhbbcxy.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163tnjdjnvh.html

[R27] 算术展开
来源：http://www.xuanzx.com/163dupywydg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163taeglndn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163myqtckqh.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163nmuzziqi.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163fifpfenw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vxybigah.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163xglxmhjw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163phkgexez.html

[R31] 局部变量
来源：http://www.xuanzx.com/163muqfpabu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ypwiezbx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163senptlhk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wqkvnyda.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hsoadveq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163yhtwcubv.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xryjatcs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dybbygqd.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163yhrizixf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ugcfikpb.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163qwmiiioc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nqrwwzgj.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hcpyaeic.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rpjgtjom.html

[R38] 管道串联
来源：http://www.sxryk.cn/163djhwvsnx.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163aivwxrmc.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ymjrzssd.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163rljxlseh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163filoimxe.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qrxdlvac.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163cgxfgdri.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163uricynlc.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ubwyibtw.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163yfjjsxou.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vyuhrxbm.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163grakpkbg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qkqaiocj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zycpvwee.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163idjnlkhp.html


<!-- 参考信息 -->