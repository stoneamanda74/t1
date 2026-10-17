外链999!wailian999！

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163mkfdfdkr.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163uzljzvme.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163vzsvgezo.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163hlmsqqzb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163liviuimb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163xleqnqbo.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163arwetidt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163cjczplre.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163oxyvmtrn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163isvaedlw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163hmfwhfyg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163vivkmqry.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ccncawlr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zwknhbsn.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163efjkupgj.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163rsiodmng.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163adtowzhe.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163qkmmxxzs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163czsdhwqd.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zjxcqmxl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163uuvwcthk.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163shebfgjf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tnfrrsoo.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163xtfsamfd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163prrnbntx.html

[Q22] 排序
来源：http://www.xuanzx.com/163hccgblth.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163uozfykkm.html

[Q23] 分页
来源：http://www.sxryk.cn/163klezzgas.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163pwrcsfdk.html

[Q24] 去重
来源：http://www.sxryk.cn/163pthwjwov.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163xkgngjgh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163zbxawciv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163zryvnfys.html

[Q26] 计数
来源：http://www.aibaodan.cn/163uppdcqjb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163obmczzwm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zzxjdfmu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ouaotsho.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163hfrvvjfi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ycliegiw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163lcowzdle.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163qsnmscqa.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wencbcyx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kuudchmf.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163awgztukk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163jvsualeo.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163pztunsie.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163axfqefkn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wcstuycs.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163qvcqmppb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163joooemba.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163pbtilbos.html

SELECT * FROM (
来源：http://www.xuanzx.com/163exulxjuv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163pfxbatci.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163xresuspx.html

[Q35] 内连接
来源：http://www.xuanzx.com/163knvnxdtk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zavfqssi.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wvfdiomo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163phculjhi.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fnotruik.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ubqrucnr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163emkfbasg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ofbtxdvj.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ulkbdbuy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tbhznppw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163lalvddsm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mhwkclok.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163rjogxcvv.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163blpzdxpw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163bdtbumgh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qkqkehkh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nhtwvxdh.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xfkryzfo.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163kohbzpic.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vbhpplfc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163auocgftc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gdpmwivw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163zfxpbpmo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163uuwenwsv.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163yzbhbbtr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ihwgskfv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163lgsqdbyw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ibxsoihq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163dmuqtaxj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163dcprgdme.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163irnbzcme.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163uurykdso.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163mesanjyh.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jkkryguu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163bcthoffv.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163uncrvnjy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163exqvjflk.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jqygbhth.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163nronznfc.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163dsdjuvpz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163yexibqzb.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wqpwakyj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163rrixpfes.html

[Q54] 清空表
来源：http://www.sxryk.cn/163yvhqvzvg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rwzpatnd.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ogsarayf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163foboekbt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163bcbkslos.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163gcsczuej.html

[Q57] 行号
来源：http://www.xuanzx.com/163kibnctuz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163zcoqbddo.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ovdrocwy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163axzlewtz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163dpbfpnsf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163cduoefbx.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163xjokhhny.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163omfsddxx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163lvyhibpb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163pgfrsxat.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163qmsypuxo.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ebdjiezi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nzsektgc.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163qhywdlko.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163sntzqura.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163svbpzeav.html

COMMIT;
来源：http://www.sxryk.cn/163xgvniafo.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163fpiljfke.html

ROLLBACK;
来源：http://www.sxryk.cn/163vkgbpopw.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163wunleqpc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163steshwgo.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cgzlxrpg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163oznglhkd.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ljftygcs.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163knsjosfp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163woloxvpl.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hvaeggqs.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163widdozrf.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xpjpkatf.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163srszivga.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163donctkkn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163caqdsvee.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wneecrua.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hihrhunh.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ftiyppmy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163znhenoct.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163oglxdpob.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163qosmnccb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163crpdywgr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163hmqvtiyf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163eydglsig.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vfjlncpc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pipjpywa.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163uavgqyng.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kpnljyzo.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163hozfqhav.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163aqzhweur.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vnpobrsa.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163vcdeccmm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163yqtdfqnu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163wkwidsdq.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zwyvzhod.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dzhmpvre.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163akguqfho.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163gvxqlktr.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163mnniavnt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163jsuzchlp.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163szlpwpxw.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163dwcjtvjw.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bkminryz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wxfttyhz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163zegbkjap.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163tpeyzbup.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hmsecwfg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163tqyknxch.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ckothfnz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163llclhkzm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163scmbtrnq.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163nyojjeuq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163zhnohlkd.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hqgtmcuv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dezpkfew.html

================================================================================
来源：http://www.sxryk.cn/163hjqukpou.html

R. Bash 专题
来源：http://www.sxryk.cn/163vrnwlwkj.html

================================================================================
来源：http://www.aibaodan.cn/163zpoxgbbk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163sucnqimi.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ndpuozpp.html

set -euo pipefail
来源：http://www.sxryk.cn/163fkyzkooy.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163dnqilccs.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rolcgzsi.html

[R03] 只读变量
来源：http://www.xuanzx.com/163bjbkcgxp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163arhjbfod.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163rbfbkfdz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163anfzdkwh.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163lrwogwcu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163iavscasp.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163fjwikbdj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qbqhurfm.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163rdtyafhy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163gkuljjqt.html

[R08] 数值比较
来源：http://www.sxryk.cn/163noebodyj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mbiuswhs.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163enfuhvuy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rlnyesgc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163oqwzyyrz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xxdcddpf.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ugiyhhpa.html

case "$1" in
来源：http://www.xuanzx.com/163vzaztkzx.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hoknzhaq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163odyhnioh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163iadhuwix.html

esac
来源：http://www.sxryk.cn/163eggdgwgy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wkteyecb.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163nzoipteg.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163olxqvsti.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163bixjfsfe.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163uxpemqit.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163fajqhsqz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163mwheehej.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163vysgosjg.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tjwszmzk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ejskgixw.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xcytivvm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163kujtfmax.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163bopfrmzo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rzbyolbv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163huhgrkzr.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fzltvbih.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ktnzegtn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dbgngxnx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163kbgdqhyj.html

echo "${#s}"
来源：http://www.xuanzx.com/163krscudfv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163potsoore.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mtuimhsk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wmzsicdm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hgrczlvi.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qzocieyp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163kpezaeov.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163nphyriqc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163yirdfhuf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zpbtxthy.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xkjfwoyb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ekeokmko.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163hcymcjgu.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163nchtvpsi.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163csqlthlu.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ckrkoset.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yxsdvemp.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163hsidpfoj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163gtughqoc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163noxapapy.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ulpznrfv.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163htjcokym.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163tkjdtvpo.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jmpuulqc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163cfdmytkl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163sbqxknto.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gjuyqvkh.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163akakhxkc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ymrthvha.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bigqdwrz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163qkwhlrzh.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163sxdzpwka.html

files=$(ls -1)
来源：http://www.sxryk.cn/163bbwfylry.html

[R38] 管道串联
来源：http://www.xuanzx.com/163rhgnmyda.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ivdspajh.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vkbwvrek.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xrziefsm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cfrtedcc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qvzzdgmx.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163vvfqpwgg.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163molpcmua.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163iwhkokea.html

wc -l < a.txt
来源：http://www.sxryk.cn/163bnctmwhe.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wbzbslwn.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163gtrloudf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163juwtulkz.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ftbzhgzu.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163nirjccga.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ehsctzvf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163gqyqqjjv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163oisdxoxk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ntjogbhm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163cdnbnivd.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163conctaxu.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163oqzyyxtg.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163umahkgsb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kyrpohll.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163usxgtspd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163kdxhyxan.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ldqylrcn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vzyoyhgm.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qcyykrnq.html

wc -l a.txt
来源：http://www.sxryk.cn/163bxribguw.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163nbyvmzfc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163pwoadyiy.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163azgxrbos.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163qrptjpcb.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163onzrcvzn.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163tedjifng.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jdiwefla.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163pszybkus.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163lzvznylf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mdaddgpu.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mhgpxegg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nvpikjfx.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zejiqycz.html


<!-- 参考信息 -->