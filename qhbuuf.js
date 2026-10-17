外链999!wailian999！

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ucxutdyd.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163jbljgrty.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163givarcki.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ylfvynav.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163btcmocsm.html

[Q07] 删除表
来源：http://www.sxryk.cn/163frfjynxg.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163mwticxis.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jbmiuvie.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163jgqlxnur.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vwpcverb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163euvcvsvw.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163tgwphjrj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xowwjhqw.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jfuzbapd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ocnorkge.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163dbaqavvb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163oopemiqf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163inwazfjg.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ziemhoxs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tkixfgxb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xqlxhdsk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163mhquntaf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163rrsrtsnn.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cjmcvsoo.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163mbunqjgf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163frnuookg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163qasbofcm.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163bcetchdw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163mpgmsciu.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163thpjdszf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163sucggzcf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ugrliotd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163kmmiqxvl.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163oqziujav.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163mnlndpku.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jurqdwcx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163famdpglr.html

[Q22] 排序
来源：http://www.xuanzx.com/163rhtybjpx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163pqmiyimq.html

[Q23] 分页
来源：http://www.sxryk.cn/163euhtghsh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163othojpoh.html

[Q24] 去重
来源：http://www.aibaodan.cn/163knwslpkk.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163gbvpfbkh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ngkefokt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mhovvenn.html

[Q26] 计数
来源：http://www.aibaodan.cn/163nwjeflmw.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vzdufiir.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qxqvbprm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163bsbbkhrz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163iesiqfju.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163rmbipucc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ikimdhze.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163afwevebp.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163icswdakm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tqmunhuh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163qpwkgchf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hsbbnzgw.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163lpijenjz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wtixmwpu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163phcohqsk.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zngplqmv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163omaldmid.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163mddcleow.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163aepjknkh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163oqzzbvly.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fknqouns.html

[Q35] 内连接
来源：http://www.sxryk.cn/163bsuuvmad.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pqjyhous.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163tddeehtc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tvhvdbum.html

[Q37] 右连接
来源：http://www.sxryk.cn/163gkmngofa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qhylfyur.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jbufytbx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163banlrcko.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163bccmmofs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163xrxrtipn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163euujpirf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163iiunqfhd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163klsnnzwt.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163seoogaoy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kvnnejcp.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163utsnbtro.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163oxilrqzn.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ikhbszge.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163dnwbspet.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163daponruk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163inanzreu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xtnhspoo.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hwxbkrcm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tyaiiaqz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rkwfvqfl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dhibldvl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163lrsmmadq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ezzxzutf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jvnraprt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163lpwkjahf.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163guflmgfb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hexwovcd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ebcyglqy.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163uhlnmswf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163tsrwizkc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163iykqddpp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jgpdjsbn.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163prmhodoh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163revstfnm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163mrvdwiwn.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163uzbuadxt.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163jhpganij.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mamivfru.html

[Q54] 清空表
来源：http://www.sxryk.cn/163dweeuina.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mqivjxdp.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163nbkdwhcf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163lerwvzoq.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163kapvqaji.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zjccdfho.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xuwshgex.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163qtwipucy.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163qdncsnin.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163gtrvcnpk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lpgtsdta.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jsqjmrso.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163eslzjgca.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163nbfzlsrw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163rrfxirud.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163agncctqe.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163nshtxahw.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ncjgdqof.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fvhwswnz.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163uecxnjyw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163xalybibx.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163pyindorz.html

COMMIT;
来源：http://www.xuanzx.com/163ariyhflh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163kyandpuy.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ygngthip.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vodtuvmg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kxtoehrq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vbirckcj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163epqwyfnb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vtfrzaaf.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wkmapeyl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163joaeynmv.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ecwexqah.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163noobjvmf.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ffdndsme.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163rsmibnyp.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163wsrbbkks.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163nlzepynk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163kwefmzgh.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163tpbsaowp.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163kmlzwdsu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xxtcxkji.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163oxgynhhn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163kyjlpepm.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163wdhjfotw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163eeeqflzo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163giaihlkz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163muauenfr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163qrshrqdl.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163khfvgrdi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163svfaomrn.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163nosdcezk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163zceoiikp.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163tlmbkjnd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zjncmlbd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163urboqkxm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163fnltgnsx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163yqgtmnry.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mjkhctgm.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gryqsxfq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163tsryaoux.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163bzdkxqsj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163lmvlpaas.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163izcwrimr.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fqfzwrsy.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ghbqaadn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163hponauzq.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163stbesngn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ykstandq.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163gsfqnpxk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163hntwqgqc.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163sjphhbsr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163enieknjw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163eoacjjdh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163yyzvhqss.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163qloxjhxq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ghgprwtp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rhiwhndl.html

================================================================================
来源：http://www.sxryk.cn/163pskrneiq.html

R. Bash 专题
来源：http://www.xuanzx.com/163robfurjz.html

================================================================================
来源：http://www.sxryk.cn/163riorfsif.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163dphvxcxr.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jtgfugiz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163incbdixm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163bhstuzux.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163bfdxvdys.html

[R03] 只读变量
来源：http://www.sxryk.cn/163bevrekcd.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ochrnvia.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163cumztxak.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qxvjlpdd.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163mwcymvno.html

name="${1:-default}"
来源：http://www.xuanzx.com/163npdgqvvv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163xxrtpzle.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ovlifaws.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ivklgjke.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163apytrduw.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xnxyngas.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163toivrryb.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163fxqbknov.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163btvljlfe.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tfjlecgc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163dqlepxgk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ssqwymtz.html

case "$1" in
来源：http://www.aibaodan.cn/163igdxqpms.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163giastbzy.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ijidadnq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hsxjhuwo.html

esac
来源：http://www.xuanzx.com/163hjgxfmya.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163fufwrpgm.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163jpswwokx.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163txaasgud.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163yrzrbydl.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163iqjemsye.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163kfvojxnf.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163otlcbsvr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wvsddmwf.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163efwdoltq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rrszjhfe.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163aqbbxvwl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163yttkshnz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163vwhhnddk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tzhiehrc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163fzjlymth.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163osgrolar.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163hamqgoni.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163fxdhclrk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wtbohnui.html

echo "${#s}"
来源：http://www.xuanzx.com/163doexpjxs.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rrtdjfhq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163yltzcchs.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163mojwpydl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ezvgsgjd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163acdnkgon.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163kyiavjqj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163fkkflhrt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wynhzebz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163plznzofc.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163fnaekfdz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163dinkdtnu.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163fjbmafrv.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163pkegolwq.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163czfytvwc.html

[R29] 定义函数
来源：http://www.sxryk.cn/163sgiblovu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163fqtgymzq.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163epudjytk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hmwvtxtj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163qirwgovl.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ddfcsusu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hkxamdah.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163iqvscqpj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163kciqbseg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163sbnobbmr.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163pqdngdmq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gfvzajje.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ftuzqtur.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163lbobrqpk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163uryirljc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163hggrbgio.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yezblhht.html

files=$(ls -1)
来源：http://www.sxryk.cn/163fpubfqar.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gpensfup.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163gphyrojc.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163sanzsfri.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163vhaajzgc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163pqpxemex.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163okupgust.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163njwjtbja.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163vgthundn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ryzapmrr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163kkqwjivd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163wtyvugpd.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163accldygi.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bcnwwhvg.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163pgqquzmh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163bjhikovc.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163uxcyubza.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kfloczzs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vxdsljbu.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163etclrkil.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163isfedvfr.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ndognnxf.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ybowabat.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ianxvyad.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163wdudeqfb.html

[R50] awk 求和
来源：http://www.sxryk.cn/163btpdexbf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163njgincwz.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fpnyfopa.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163jmxybwes.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163uhxevqlv.html

wc -l a.txt
来源：http://www.xuanzx.com/163caapmhdz.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lleumgrf.html


<!-- 参考信息 -->