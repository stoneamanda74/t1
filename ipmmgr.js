外链999!wailian999！

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163qgdsulcp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jgqtzyer.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ahmdykpl.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163zgyxqiac.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163btgmpvns.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163vxqxroal.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163soqbvgkj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163dubvgzav.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dhbksmab.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163zrvqegit.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kakuswru.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163raokwdlf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ebnvokzm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163xxyaakfx.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163httblcoi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tpjpnmem.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163gjscnuzm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163odbwwmdr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ayarvkoc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163tyegsodp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163izkyaytf.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163tzvidriy.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163qrnjzlco.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163esiawuds.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163xsrvdkeu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163gsxpuqsx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mxhcyoby.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zgcxnhsh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163wxoxrpkb.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163fsuownzo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163biayvyri.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163nfbudqyb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163octzdagp.html

[Q22] 排序
来源：http://www.xuanzx.com/163utacqojw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163xhvfwxgf.html

[Q23] 分页
来源：http://www.sxryk.cn/163trxteuwi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163dgmmgscy.html

[Q24] 去重
来源：http://www.sxryk.cn/163bacbzlej.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163grdjthde.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163xbapephp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163peenjcaj.html

[Q26] 计数
来源：http://www.aibaodan.cn/163vasrclmd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163luvujebu.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163bjvkzzab.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163svvgzfsi.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163egzwoxpx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ykmgmtoq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163phbhefgu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163bxdngeut.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163pdmefhzr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lwagpjjb.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163blpsevrg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163gznclxjp.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ltrwnjnl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fmuclfsb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ddgypbsy.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rmeraklx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163bjbgfbgo.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163vlkvxqfq.html

SELECT * FROM (
来源：http://www.sxryk.cn/163sbxvealg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gjfruwuk.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163agcsvbdq.html

[Q35] 内连接
来源：http://www.sxryk.cn/163xmnvpahw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fprtihcs.html

[Q36] 左连接
来源：http://www.sxryk.cn/163mourcgho.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163psvhbchr.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163nwmbterv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163gjshcsrc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ublsjlqt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163htijdqky.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163paaykfba.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nimcfrja.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163dtetdrur.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163knxhehqw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163cycspqda.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163kjbtrsgs.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163eddepqhz.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mtbhbycz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lvodnbun.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163pbiycylf.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ftesfubx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xyuevkmk.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163nugutwsg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tkidrhgt.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163zhrmvjej.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163mflfibfb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163dewylsbc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tetyunzs.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xuvpvesv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rcknczky.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163pdbuzpeq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jnkqvcul.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ieeiivqq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163otocvtrl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163yogfcwcd.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tofffhsy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ppkokrdl.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163stfyekkd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163iozvrmnf.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ouswtgtj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163phrccfdg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163blgkfcli.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tzjnjchd.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163jeyfyxgi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163wkkwkwro.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163rqiegkir.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cxhkpqiq.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163arthiiqd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163gsklpjes.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zrbnrnyw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163izwbyarl.html

[Q57] 行号
来源：http://www.sxryk.cn/163atlksjlb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163gdpsrich.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163kudufwmz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xepkwwyp.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vljduoft.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163cvcfbkrm.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163fecywgjh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163lrhynqqo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qmikgkac.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ngjzkhfj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163scciklpa.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163tjxlwney.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yojpruug.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ajklpwrf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163emjiqeol.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163bwiikumr.html

COMMIT;
来源：http://www.aibaodan.cn/163qwzzpifb.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jqwhinai.html

ROLLBACK;
来源：http://www.sxryk.cn/163zltpdsvd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163tjjxwjrl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tpmgrdhk.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163nbifbitm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163mngclrji.html

[Q68] 保存点
来源：http://www.xuanzx.com/163zngcwdud.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cctyqsvc.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163aafgyfrx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163cqfastsk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163usxveqfs.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163rpkksdwo.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163yzpmnhnp.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163nelndpzy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ygaadlbz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163thsqamub.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163opwahvhw.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hozyvyhd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163nepzgtgu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163yuawsmdk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163doyngjni.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xufbukip.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bhfmpiac.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163nmulnaxq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163famzyuxz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163wcjklnce.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163nlufbgmd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rvegploe.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163wmczmgdn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163vjvqpkpp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163dwzwdnqz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rqfnnnlr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tnagfmqs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163pvkyczyl.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163atyhdrzu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163pryjausx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163bxpbwsfx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163qksqllol.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ingmgpmw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163nzngqcrp.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xjupxcdj.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163bcojnuke.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163tveelkqy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163oszlrnhr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163hlcqxbxi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163tutpkkps.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ylvwrhcy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zhakabaq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ilcasbxd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lspstxue.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ukonslqi.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qewzddcp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163wwvvinfc.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ilgwyvzx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xckziqsp.html

================================================================================
来源：http://www.xuanzx.com/163tsvlnsnu.html

R. Bash 专题
来源：http://www.sxryk.cn/163cjlhtrqd.html

================================================================================
来源：http://www.sxryk.cn/163ezjnrhjq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163xrpwtcja.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163tydccojb.html

set -euo pipefail
来源：http://www.xuanzx.com/163axjnlgta.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ylzwyvry.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hwgaaduu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163enbfciyh.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vqnocwmj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163werimhps.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xtyjdfgy.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163erchuqkk.html

name="${1:-default}"
来源：http://www.sxryk.cn/163tozczcvi.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163kyisahqt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163dtqwlvik.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163fxpqwqzn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163rikjmefi.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hufmsvlx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163tqtgnvfa.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163prsaaiha.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ohjrfuqd.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163lpmmlsiz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hlgaddfm.html

[R11] case 多分支
来源：http://www.sxryk.cn/163fpvrqywv.html

case "$1" in
来源：http://www.aibaodan.cn/163jkqzgppf.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163uyplaelu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163fflpgtjd.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163aokbvapq.html

esac
来源：http://www.xuanzx.com/163ytutmkep.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163nubsqxvl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tkxvsyul.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163pyheltfg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163xwhvldhl.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mqsuyldm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rulqrltp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163dszophfh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163rkidltav.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qrodreum.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163onwokvux.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163auarwich.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jezqtuwy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163avdcibfu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ranoohpz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163fnomrcpp.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163hbxoaeec.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163gxevycur.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qdxjzdku.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163vaikxwlw.html

echo "${#s}"
来源：http://www.sxryk.cn/163uhdtbwwb.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ypppmyfa.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163oihbryzq.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ryictrbc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jfvjaxuc.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163eyqnzlgt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163uzynfvse.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ahcoirsj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ovwktsaj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163nnfzvksw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163tdeppnyn.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163byqaelaj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163gpplfrhp.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163uycuaame.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163unyszncu.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zlpkbdvx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ntincjzq.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163yqqhjwvm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163kfkynxjn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163scnwgdsr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163kpixoncz.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163kztdxvue.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163yvcfzvvs.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163cwjoooni.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gkfctdrh.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mbzcbjfw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163onjxljjq.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ihzlbuki.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163lhoputtg.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jswetnki.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163scnixmqq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kybvhisz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163aflglrgl.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163edoklvdh.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163phhifsja.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163tuhuikxx.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163goorttde.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163trmdyfve.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bytqpgpb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163lrwsdyyt.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hzczyfns.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zeumxujx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163aalqqnio.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163rebzsyad.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163bcvvkokk.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ogwanesz.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163tsgaizoy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163pzzudael.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163kwhmcpfh.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163lyabstfl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163zajrysit.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ywzweisq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163yezaqctp.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163pkssbhfz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163btppkhok.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xwfnpbxi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qpoxajjt.html

[R50] awk 求和
来源：http://www.xuanzx.com/163slpytlfo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zrtgqkfo.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163wepugkkc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163cmquymiy.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mzjkfmqu.html

wc -l a.txt
来源：http://www.sxryk.cn/163uuegxdsg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gzyvmjyb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hcusevin.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163rmfwfpff.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163edshqpbe.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163sajkamfd.html


<!-- 参考信息 -->