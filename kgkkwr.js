外链999!wailian999！

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163dnoiihiw.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xikfeifw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163wfclcorh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qnddcvtp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nqwboyjt.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ltcuexay.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163rdxrrlwo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163oxcgyhpa.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163efteawxz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163hqdvytpk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163yfbecllf.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163boxwkhow.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163daigoedn.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163obyowojt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163enadrcuf.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163kvlpfwzx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163tmczznkj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dgsbbfcn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163nambsvpc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wkxwrvza.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ymgeeujz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163csgmjqfr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ighcjekk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bukfwgzg.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jxeeouzn.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163rnacpfqd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163lnzvqcho.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qgctngud.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163khzaldwc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163yvirjfsp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163mtvebkwz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163sbcbmdci.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163urkecjrr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ziaaalrt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163pthyntog.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163dctqfksl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163uvvqftvq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163rztjwvyz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163nozkfxax.html

[Q23] 分页
来源：http://www.sxryk.cn/163faxiyrbc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ozscchlx.html

[Q24] 去重
来源：http://www.xuanzx.com/163dthvsspg.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163oxjsfrka.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pkzmyxvg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163bpkonnxs.html

[Q26] 计数
来源：http://www.sxryk.cn/163xozabpgr.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163zymqzcud.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163aufmavod.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163cponfrbg.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163mtofuvsf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163twxrfhul.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jeeetady.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dwzaywuo.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163czzososn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fnhhsviz.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gynqaxfl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lvqvjwgy.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163moanprgz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wdsglzlc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163aeyzvvtl.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163hcnjnyfa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hezgycyi.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163iaxictjo.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ebyjmiqb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163eadcxshn.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163trgovhfi.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163bvlgzfvu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163uyooivxs.html

[Q36] 左连接
来源：http://www.sxryk.cn/163zizermpr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163odqvfyfv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163iplgjlqk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jwqoqypu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163zbsndmeo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163jxpdikps.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163cweihfeu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163knivbhby.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ztumgawk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163pxbkenbk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163snpumjst.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163tulgqmnk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ctlewerv.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163llgmguto.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163itpjdjdl.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zyhchvxe.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fquhzfxy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163neyrvobp.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163feovvwjs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163fxnbeqqy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ytsysfxw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163uveprshy.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lhjwmzol.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hpvexmxl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ctfxcklh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163omiijnmq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163sgopfapt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cdyyovct.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163uizafczu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vdmnsomx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qmmxzgdo.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163oyyrmfwa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163gvbvdfci.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163xbxnotcz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163oyluuruu.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rhgyjyzd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163kuoalflz.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hzxzgqwt.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163zaqhfurf.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ueahwqtx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163psfabaix.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ypgjeqzh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163mtvctkrr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zggbovqx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wwchgekp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163npgnxloz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163oajxuhwt.html

[Q57] 行号
来源：http://www.xuanzx.com/163isycbwns.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163qyfhdacn.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163clsrtqjz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163fphlwgkj.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163dktrgguu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163gxvsfiig.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jsnxyxdr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ckapzddz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ixaypxlc.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163haihuyoz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163fkawzclu.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fnhtdyql.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fjidrybf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163gefxqzkl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163gzeyqsyc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163afpgmoac.html

COMMIT;
来源：http://www.aibaodan.cn/163gbbihbwu.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163mmyumiqi.html

ROLLBACK;
来源：http://www.xuanzx.com/163niqwgjkz.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163vfcpqcwh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163xgfpueeh.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163kcahzsiq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163vwinkpfl.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163fgcoxrvo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163wjirlhwo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163axmrvhul.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163imgataat.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163qphgjclx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163npgjtgpn.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ynkdgbso.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163igmwdbjg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163sbekixsp.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163syxszgzj.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163wuwtugsd.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163sqrwzsug.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zmqyrild.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163yhrxqyrz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163hjeexxal.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zctkbdab.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163eufehvkk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163sfuocylf.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163iaicqjjc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163qgfdnoro.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dboctvsg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fdicmxrq.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163syajmefi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163kwgrizgt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163swgecvos.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163acewrreo.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ghqqwboj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163uifjgymu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zdsxmzvm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fgivwlol.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fginqzje.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163czjbbhge.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163zuadtfod.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163vpnnmzrz.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vxhnxwuh.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163zlynzghf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jikicrdj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163szxqqzvp.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rkpwvhsh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ahxmfazq.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163msftvfon.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xmwpinwe.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163nqclbvtm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wkplhewq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163uessneoy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bzwbesuu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jfiqkxft.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163vlzjlnqg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zhdetqgu.html

================================================================================
来源：http://www.xuanzx.com/163vduuyyqs.html

R. Bash 专题
来源：http://www.xuanzx.com/163gxdciavm.html

================================================================================
来源：http://www.aibaodan.cn/163nodzecqn.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163eazriaja.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163pvkfzvzz.html

set -euo pipefail
来源：http://www.xuanzx.com/163drvqnami.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ybsmdvcz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ipuxnvee.html

[R03] 只读变量
来源：http://www.sxryk.cn/163gkxkikvy.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163rywrejme.html

[R04] 位置参数
来源：http://www.sxryk.cn/163oulrtosr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wejsewei.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163qxpqgzgv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163hnrzdmox.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163zskscjlo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163llslqimd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hjihcpri.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163twzwlefu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163embkbfam.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163noehmuiw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163kxyajvsy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163nnucwamb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163bqnlzhmu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ntendqxl.html

[R11] case 多分支
来源：http://www.sxryk.cn/163dowigafd.html

case "$1" in
来源：http://www.xuanzx.com/163djuirnjp.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163fnhopuzw.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163wsachiqk.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163uodvcovo.html

esac
来源：http://www.aibaodan.cn/163ggbfnabo.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163cpuvggog.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163sigtwbpy.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ikkritcj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163glesbayc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163paawdcnj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ynxmyowy.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163utczcotk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163yravnpfh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xtyqawox.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163yykaszwf.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163zjearmnm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163vbpzdmkm.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163tlttzzvk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163sfjvlqtx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163yntdsjav.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163hqzigdik.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163iewzjoae.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163vzdzcbje.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hoaoaywc.html

echo "${#s}"
来源：http://www.sxryk.cn/163dmsxxipr.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fbhrcfvh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ondaitri.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163skdultqr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zvblqoyn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163aduhmjcq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ohludxge.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163rfmgmipr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zgzotqui.html

[R26] 命令替换
来源：http://www.sxryk.cn/163mevlrkqi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ordtmbqv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163dkhxfduy.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dwcfrgjc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rtlymcar.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ulclaeig.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ezeesdul.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rwphgzyd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163nwdubixz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ukduewnc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ndslakwm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dbzgofzl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163gkuzsixd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ixvenbwq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hlgtixoi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dolpybuc.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163nydkkkmk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jicgirus.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163aikbnllm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163itdxazvt.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163lgqhzqcl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163chcemgla.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163lcgzpghe.html

files=$(ls -1)
来源：http://www.xuanzx.com/163vykfthyi.html

[R38] 管道串联
来源：http://www.xuanzx.com/163fyksbkxj.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163eztjpnvb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rsadcegy.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nbkbyxtk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163zxdgognb.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xxwbcmtt.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163zkjrwuhw.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nnfimtww.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163tlhddpms.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163rbmddzws.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163epqqmkyd.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163qfhkscvr.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163eaukxplo.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qymmquos.html

[R45] 批量删除
来源：http://www.sxryk.cn/163pozrdpaz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163zidclzum.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163yjbuemba.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fhlydscy.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jspdrnlq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ecdoxpvr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vqhybxqh.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ldmugfdb.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163yrfuaajr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163czbvtjfs.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163jhyorwjv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163camdzhzk.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tzcxysne.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gimysuez.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163thukylrh.html

wc -l a.txt
来源：http://www.sxryk.cn/163dsrgndee.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vlhtpqsi.html


<!-- 参考信息 -->