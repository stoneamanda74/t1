外链999!wailian999！

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xfkoskyb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ifkdilpi.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163gqkkxmlw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163swoccapg.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163iwqivpvq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163csxqycgt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ajjijwbs.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cfwsjzfy.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qxyrlmex.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163wuipommb.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qfttbdxh.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163grggxowm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163iupyabfr.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163zbgwokbf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163agimpidg.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163papgdcih.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163yxycvdvz.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cyeyrskw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jcxfqhpb.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163pqorttmv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163azwnrreg.html

[Q22] 排序
来源：http://www.xuanzx.com/163rhleurzc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163vyeqdini.html

[Q23] 分页
来源：http://www.aibaodan.cn/163klkxcmsy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163mwookuqx.html

[Q24] 去重
来源：http://www.sxryk.cn/163tlslqbrv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163dssbdjik.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163tqogtswu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163gtawrzpl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163glqiseaa.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163sdqtjfxv.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163pcojrgpz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163mrvvhtxp.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ghpgnehm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163behoeoqc.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wwswtupz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ulzosgjf.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wdhenqfq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163emcmrhpe.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ckzcshuz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163drzqflie.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163zjtetgtw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163iiqwiswo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163qpvxqfbl.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vvwdqqbw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163buchngyn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xlgkkpxd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wchwkarx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163rlalittl.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163gwxetiei.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163hnpanmae.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163fwsfmcoq.html

[Q36] 左连接
来源：http://www.xuanzx.com/163eksusabx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vzorjvft.html

[Q37] 右连接
来源：http://www.sxryk.cn/163egnsckjs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163jjqqpgxe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163pyubsqaz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rrzdzykr.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163pygoiodt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ktbyioid.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163hzuhefkq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vazefilp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163aubtamzq.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ttqmyixp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163dkxxvcvv.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mwkuihqf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163gvzrltlb.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163jkhwjkoe.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163wufjpjxa.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cixbjvby.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163krsynpwd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163joxevzhw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163pypllcxk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163jtioncmq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163pgmoeyde.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dwhmsyhf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ijvdjhop.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163yhcesvfb.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163lywlwwld.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163yqobwyvk.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yxpidttd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163vwljzgyd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163azuefukq.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163xmwblgvd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qairltip.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qjpeiecy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163gjqnllvi.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163pnxjyvuf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vuqlivhm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163qvirjgsp.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ceymgzqn.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163legkvgyf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163yzjyigtr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163sgelyosf.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163xrcbritb.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ccsegfah.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mbjczxfr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163duqypeuj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163yvpxkwbt.html

[Q57] 行号
来源：http://www.aibaodan.cn/163teezbhpp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163dqnlgzxp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163sodmruwc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163lpqnimah.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163zmygzirf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xbzkoeer.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163kwnqxxke.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163lkrqhekh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hdogpnpv.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163muawdtpy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163vltjgwys.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163bvcfiswm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dnqnmgvg.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163xkttzegf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163gmfjuwle.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ixehrelv.html

COMMIT;
来源：http://www.xuanzx.com/163peksosxm.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163zkjeftze.html

ROLLBACK;
来源：http://www.sxryk.cn/163ombsvkvy.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ciitwnme.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163dijislsh.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163bziyzcms.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163yrgzwwpg.html

[Q68] 保存点
来源：http://www.sxryk.cn/163jzvdccyy.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163mbanqpqj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163zswkpmyp.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ipckutkb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163tvqejyso.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163uktdmaoc.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163rjpxreob.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163tgvrmxhc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163fahsdega.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163sluxycpl.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163qtrghmqa.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163uiplhxob.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163bfxhbvzm.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163opqmuwum.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163onbatnaa.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163kowlkhaj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ylykasxg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163adszgkps.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wkouszqn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163huaolzdc.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163mfigpxct.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163qtkqxwyv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163tdanazln.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163sdxxcprd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ndhrvptt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163kqkqivgr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163dvvzmpka.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163fknndudw.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ctdpqqzr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163edrncxcq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163npjkwger.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163eazyqumg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163epfbuzhs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163gyhydrti.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lbsefjss.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163qofzzyho.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bdknaahh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163qwobedpc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zjfdhxly.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163qxusetck.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zvkwfhei.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163cfecitvh.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163lumwfqat.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xpsuvmqw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vbhvpuos.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vltcdfel.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163jexynkib.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ngkurhfw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ddhxlhzz.html

================================================================================
来源：http://www.xuanzx.com/163muqoeuav.html

R. Bash 专题
来源：http://www.sxryk.cn/163ebjedmgb.html

================================================================================
来源：http://www.xuanzx.com/163bcansjpo.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163tobnhqdz.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163zahyfzba.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mmpqtwkh.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163zyncscrz.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163qgzytllz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163lyayxgoc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163bosqtxlr.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ydiihevj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163mjfwnnyi.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163sakoegez.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ccfedpds.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163dsdueqjs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163lawpojnc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163annrpwaf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fnufooao.html

[R08] 数值比较
来源：http://www.sxryk.cn/163zzvafdba.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ztqgojuy.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163eqoktgzt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163miwvjiex.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163sahiwcsi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pwbtobnl.html

[R11] case 多分支
来源：http://www.xuanzx.com/163tjcymmvh.html

case "$1" in
来源：http://www.xuanzx.com/163dawchgnp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163aybpjbjw.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qtavtnpu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163lysurlff.html

esac
来源：http://www.aibaodan.cn/163btmafyhn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wzsqvtgo.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163dilctfow.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163qkhjtaxk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163xsdhlazt.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163pxrdrwxh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163wxefpnqj.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163rvghjevm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pswxiqwy.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163esdrmsfm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163wqimkept.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163pmgpvynb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ruhdctau.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zjmhnwws.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ihzusxjn.html

[R19] 数组长度
来源：http://www.xuanzx.com/163dpamsxzf.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163rkvnqmqs.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kjkttdle.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163gmlajahw.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163avgnujtb.html

echo "${#s}"
来源：http://www.xuanzx.com/163occxhaqc.html

[R22] 截取子串
来源：http://www.sxryk.cn/163qipnuhzb.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zfzaohgo.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qsstsrde.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jucvdxnt.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163euqljaos.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jipzygka.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163wizhuyrx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163zsxbodjv.html

[R26] 命令替换
来源：http://www.sxryk.cn/163furbavjo.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lqqxxwir.html

[R27] 算术展开
来源：http://www.sxryk.cn/163scwhzraj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bisuxmpe.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hlbarsyc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bzehrozx.html

[R29] 定义函数
来源：http://www.sxryk.cn/163kbjsefoh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163megmqiqt.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163lrortqnc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xhmbwxxt.html

[R31] 局部变量
来源：http://www.xuanzx.com/163bjubvyhu.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163uzizdegm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163vafwgtli.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163lrcmziht.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163umitxojj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qtsfygih.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163guiqbncs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163isxfnfez.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163sswsxbto.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bvssxgsf.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163tveunmkq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163pranqgqc.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163dbgvcocr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163slrmeems.html

[R38] 管道串联
来源：http://www.xuanzx.com/163drzafigy.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mpxizpkd.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163bkhffcpg.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dpvfvfhm.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163lkilhnep.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163sscigiap.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wcfceult.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163pmijdwgi.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163slwtaboy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163viqffrpf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163icmakllt.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kfqyozmz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163pfkmfknc.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163paypclui.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nyxkbceh.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163uavfufuv.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163hrzqkvdt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163twiawvgk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163jlywpgah.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lywrehqn.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163okzdojsp.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qvuqixce.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163qajmwwyb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163lxhtevjp.html

[R50] awk 求和
来源：http://www.xuanzx.com/163vzdhxusf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zzaysjyn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wicymovd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163gwcyewss.html

[R52] 统计行数
来源：http://www.xuanzx.com/163bijukezx.html

wc -l a.txt
来源：http://www.xuanzx.com/163clvhibpz.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163fujrvnuw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lgbszgou.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163rcledtoy.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ucwsgmmp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163esqmsdjl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ikkqmnvn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163sdvzzlyb.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163afkfawjg.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163poofcjok.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163acgvvzjf.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qmwzulte.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ygswdwvy.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163pkcwurrx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xjwgmzyl.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163oqgbfdry.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lphrbbte.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ekyoommi.html


<!-- 参考信息 -->