外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ogjcgcrc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163wrntawyk.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163accakrbc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163loukdrtn.html

);
来源：http://www.sxryk.cn/163zdkhlmuw.html

[Q03] 增加列
来源：http://www.sxryk.cn/163pqhrpftw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163bueuzauk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dosvrnjt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ncakgqio.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ihtbyusr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lhplawlk.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163gtxcvhvb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163vfkxqmyy.html

[Q07] 删除表
来源：http://www.sxryk.cn/163nwlzeuru.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163mcxlvqfh.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163uqozmnmc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163eliimpfm.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163nvsumdmk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163lkpfesyh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163iicbkrmr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xrsebodj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163gclkljhn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163enubvadb.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163oupjgmdq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163wixbkzxs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163fcpljwzu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163nrjqnaip.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zialopve.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163acyiathl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hptrcczp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163rtafcofu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163prejcsii.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163xbcmviob.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163esehnajo.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163lvaxmmov.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163bzabglcz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163zlxbdalk.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163uhgtthqs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163wucjsdrh.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mqphdswn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ufubsmkv.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pushvbay.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163kwixqkkx.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ixyeiocn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wdeiajhi.html

[Q22] 排序
来源：http://www.xuanzx.com/163pvqzqqbe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163cxnwsblr.html

[Q23] 分页
来源：http://www.xuanzx.com/163rpypjsvf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lwjmpdtq.html

[Q24] 去重
来源：http://www.sxryk.cn/163qpcxujat.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lckbaoeg.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163nxqcdswl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ctijuroz.html

[Q26] 计数
来源：http://www.sxryk.cn/163prlkejjb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163kxpiqlmx.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163txtwlmrc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163viufpbpa.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163sbexrhrb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163qzsqsrjs.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ftzyqefo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cuxgyyxd.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mxejgxeq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sfpmahhe.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163qqtflfjm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163drihrror.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163zlwpjcat.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163clnulylk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163sqlyhkyx.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163skypayeh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163gfxqsbkf.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163rzydqwmk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163onpmxnbu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163okstcumi.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163botcfpoj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ntvkugvo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hrgqoaig.html

[Q36] 左连接
来源：http://www.xuanzx.com/163nblosutn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kuyuizrw.html

[Q37] 右连接
来源：http://www.sxryk.cn/163wmgidrgi.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ujcfjwpn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163blnululc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163brjwptlj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lkayrygv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xwhvmass.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163vuiznqee.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ixsjwfgg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163wtulbwni.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163teublvqr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163pladqrxs.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163fwzhagdr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bqdwaaox.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163jqnuofrh.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163slsfgjcu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163nossazls.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163apibcaie.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163odnssgxu.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163kmezmzvp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163hushhlei.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ozvmynlm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yxclwynk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163qpfiripp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163anxidrrl.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163eqbfvgit.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wfvlwajl.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163qfmymtdg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163kyhldwus.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163xjvvqyvb.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163zkrfrnde.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163snhhkqkp.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wxzgnwyd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163wdhcqnru.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163chnyngve.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zmvkrrip.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163dhwiilzw.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163mpvfkdhi.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ypvkukxq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163rqhorzve.html

[Q54] 清空表
来源：http://www.sxryk.cn/163elibwqgc.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163wezrqrou.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fogvvupt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163jfzozrrb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163rrtovops.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163lnvoplwa.html

[Q57] 行号
来源：http://www.aibaodan.cn/163befttgsi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163hqxggsli.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xjsyaghf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163kitosbtf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163afioexvp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163tuvudmwr.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ohboyioh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hlqqrtvu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rzkthjcg.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163merhxold.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163erxkwcdg.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163mjadpkyq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rywjybgp.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163sfyebtey.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163lnwrcyis.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zuysmgoi.html

COMMIT;
来源：http://www.aibaodan.cn/163nchkeuaz.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163xmwmvygw.html

ROLLBACK;
来源：http://www.aibaodan.cn/163dwxaenma.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163sryamkwu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163vgujqcyr.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163kjmwjseb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163eapfmjhc.html

[Q68] 保存点
来源：http://www.sxryk.cn/163irrenyfr.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163rdintauy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163dhdjppui.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fjnnzwma.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163miozfpwl.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163digilccd.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163lxlanguo.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163umweexey.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163tntojcmk.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163nibposrw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163lqerefiq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163uzntgsju.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163gxuqxvww.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163pxurymqg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gfbgxvxk.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163cnhqkfkc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163gnlrdltp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163scgbzhgg.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163bmzkvkgs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163vpedmkfw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163vgavorel.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163epetaept.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nhlwnymw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163zmpydguj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163nddwuwpi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163shceuubm.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163fsfttuuz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163byhexaez.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163vgznecmv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163pjijgvmj.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163tgnwyeyi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163mkbkhlyf.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163arnmvvcm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163puciyibj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163froaxdcj.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163dhdwautj.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163eihfaruy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ybatfsze.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163adxwbtjx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zsuhjyxq.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ecawxdgi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163tgdrtzre.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cjiawtbn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163gkykbdic.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163kaycgzna.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qgkpmoxx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163lpwxtvai.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163mwpqqxyw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tdmzjilg.html

================================================================================
来源：http://www.xuanzx.com/163rdqadzyt.html

R. Bash 专题
来源：http://www.sxryk.cn/163beqrvyds.html

================================================================================
来源：http://www.xuanzx.com/163qmcnvzqz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163luwnvhnu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163edzqbebp.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zlnvpltg.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163kvmfqhjv.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rmcwnxam.html

[R03] 只读变量
来源：http://www.xuanzx.com/163cwodnanz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163bbvuvllv.html

[R04] 位置参数
来源：http://www.xuanzx.com/163mxmfpkiz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163gfuizwfp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163emxdtahf.html

name="${1:-default}"
来源：http://www.sxryk.cn/163fhejrbjl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vmxabmmn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163oiyiqlws.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hkmsjoxs.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163teqxbmpu.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ywmzlxii.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163bakkonzs.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163guzibtvi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163rfvnykzv.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zuyuodxu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bigifeph.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qlnypdgp.html

case "$1" in
来源：http://www.aibaodan.cn/163bkexvokl.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wfncrakg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163wyxaxonk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pykthvdx.html

esac
来源：http://www.aibaodan.cn/163vbucztmt.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163icogtgpq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163nbrmupzj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163dznteqkx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ytucwwyr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163khppzqdz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163dihcpomk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163akghnyuq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163nrepcime.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qewxvmeb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163nbgvfhbb.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163hmywuotd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wxuhqcpf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163kyriqwij.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163agyolwos.html

[R19] 数组长度
来源：http://www.sxryk.cn/163mwujesmr.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163uxjcbzbw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163aigojcxh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163kaiejtgu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mebuvlae.html

echo "${#s}"
来源：http://www.sxryk.cn/163ijkfjsoa.html

[R22] 截取子串
来源：http://www.xuanzx.com/163nuepuzer.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jnejhdvi.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163izsruegr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163atrtoidd.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163qmmvxeof.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163cwzvhaoo.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ckyopnid.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qfieppjb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163tktewqkn.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163qyuixwth.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163rdkkxadc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rrpnudlm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163jqvqduqp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163golnjmcv.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ngedagxk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ghqlmmel.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vmjllssl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ruxaeekb.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163echpziht.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dfyfocxr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163drnqnpzw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163xxkgaddi.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163rgycrtbz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163pzuamzdd.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nuuakmlf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tobvxsrt.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163yvzbonjm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163enqxband.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hjumamjb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163fuqlcrjb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vpjtkaxe.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fbudfhiq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ghzmwiyo.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pjtzbdhp.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xukndokc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163iagnkprm.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163nvjzlwex.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163pcufyzeu.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163pafadggj.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fsdjqowz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bbqphqpm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163jdevhhcb.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163gmjlzzub.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xrvhlacy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163zpdjwoyc.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163stgmkqrv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163iujsldlz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163rkacouvo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163oerfhevv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163gggmvvut.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163orezzmug.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163dnuqbqpy.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163bqyuxmod.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163cbemtpvi.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163efynqqvc.html


<!-- 参考信息 -->