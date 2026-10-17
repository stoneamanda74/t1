外链999!wailian999！

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163hzytrscd.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tinkjfen.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163viqsgbqf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163rezfxzhu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hvwegclw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ejnmamob.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163fkmunjxn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163fksmwjno.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163emfpcdwj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163wjumhutn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163jujjupse.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163rsqzobeo.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bvzsexfi.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163nnhhdjts.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163dgkixwdt.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qsehvful.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163hppmowjt.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163xethydix.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163kweaqqns.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163okyhmkli.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163kbcanlye.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ycmnlisl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kzzccmsd.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ahxzmkce.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163grmkgttk.html

[Q22] 排序
来源：http://www.sxryk.cn/163agijkjoa.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rgbvgzon.html

[Q23] 分页
来源：http://www.sxryk.cn/163ozijlrqs.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163zzmmvejm.html

[Q24] 去重
来源：http://www.sxryk.cn/163dtsadhas.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163rgxghedu.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ffnvbcao.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163tosjeyib.html

[Q26] 计数
来源：http://www.sxryk.cn/163jicimklc.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163axmqoohw.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163mkuastqu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163lutfnaoe.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hdaftivg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vxjzxisj.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163fuomvkhw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163pqnkwazn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ksxwvgga.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163umsgdhbx.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ushyfjlj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163qjegafse.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163czbpuyoo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dsybtfki.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163tjjrowwi.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163edhqttyt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163gnibqjli.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163bnlwiukh.html

SELECT * FROM (
来源：http://www.sxryk.cn/163adfqmhke.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vzexmflz.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163knffeykq.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qshjxpkw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ivcxgmmw.html

[Q36] 左连接
来源：http://www.xuanzx.com/163orqqlfsz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163avnqnueg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163meecaqja.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163fjozypfi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163rsjqfdzx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163gmuqrzfs.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163nqdbougu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ttqwlcgz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qlzajnsj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ayivyihp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163xteidywp.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163yhzhotxg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ziczxycl.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163okexvgnn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163tvnlxqpf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qomdhhau.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163tofynths.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163neuzjzey.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163vjctlmyp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ccukmedc.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163wxszgmzt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163eeluwrid.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163vecsqkvi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tdfsskdm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163suapvres.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rzuzvdyr.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163pkupnarj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163krldugcm.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163drqnmxjb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163rdozsdas.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mbkfdmnn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163irhxixlc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163idonkmqr.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wzwtaopu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163khrwgafm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163mpfjmseg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163jorcquzv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xhqibcyi.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mtkebuyz.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163azzdnfoq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163pfqgkpfj.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163vfbjdymz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163rguairzk.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163gvlgdxje.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163sgbfxmmd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qvpqnwll.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163rjduaftj.html

[Q57] 行号
来源：http://www.xuanzx.com/163cymhjmua.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163povplpwp.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163tbqmrrzp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kelbqsii.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163yvhabklx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ftejkrgi.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163wwxglqnr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163bgujtsvs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163pmdcisnz.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163bszvqkgx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163skclfnud.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vhjzvlfp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ryzolirg.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163uiryzclr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ofeqqcla.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zoosqxpe.html

COMMIT;
来源：http://www.sxryk.cn/163xtyixfpr.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163acugjqfo.html

ROLLBACK;
来源：http://www.aibaodan.cn/163lwputqau.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163eetgdqqe.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163igdpibwp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163yqdbajwq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163siofgopo.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ebzbtebb.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163rptoakml.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ixacylfg.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163vxfxpkyp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163gnxwegae.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xtzlaxkf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qociiojm.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163itgqiadp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163wvaibkvk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163qbmdwury.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mgiwspqs.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163lcavzdfn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ulprpsdk.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163rjojtncb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163wmyiivou.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163kyolvhus.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163phxulknb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163cudtxiya.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lsfzjjvw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163dijlreto.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163bcrwundi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jknsattg.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fvvbhpad.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163twttrkqd.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rirdpjke.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163gdabohrx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163knqvhxln.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163kszqwulj.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163pybpagqw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163davmkiff.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163yreqisbu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163mgvdhtic.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lxwcxhvj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163eiuniijf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163qkdirjkc.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163djnkxsir.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163qndyuwij.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163oauxwdoj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163prrhzuet.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163soepwfyt.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xnpxtiqo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ezqocpik.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xkhjxueb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163rkrqnsmw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163slcxkyho.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163bwxgwsif.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vzbgbari.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163zdflzztc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tckactvf.html

================================================================================
来源：http://www.xuanzx.com/163cuftucfd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163bqkxoqth.html

================================================================================
来源：http://www.xuanzx.com/163hqszanzx.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bgqfbcwv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mtzdzgzv.html

set -euo pipefail
来源：http://www.sxryk.cn/163vcloerov.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163vremnwer.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vivtivio.html

[R03] 只读变量
来源：http://www.xuanzx.com/163kzfipspu.html

readonly PI=3.14
来源：http://www.sxryk.cn/163bgkosgnc.html

[R04] 位置参数
来源：http://www.xuanzx.com/163amypsujt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mtebelel.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163klbccmvr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163pbmgjbqs.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163qogthvyx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163spsvdfqs.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163rliujhgm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163rlnhgcwo.html

[R08] 数值比较
来源：http://www.sxryk.cn/163bdtrsjxk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163tkjslbfx.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ftnwumcr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163fnqdvtzv.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163egiwvrvr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mrtxbinc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163fnicjzft.html

case "$1" in
来源：http://www.xuanzx.com/163fqlthtsk.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ogrsmhxn.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163dprksdba.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mkqmvhyy.html

esac
来源：http://www.xuanzx.com/163xarapscx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wyupaksg.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jlnkhgqc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bnqcfivd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163yesahsbw.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ttbtayzu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163sktuwzdc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163shhlebqv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ryqzstky.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yxteiqpl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xgtevskp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163roprezdc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163rrhlhzqf.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zdiodyxe.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163dkfdnzpx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163zmrxzmws.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163pmlncmjb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163lbmzbgdr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163magryimb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163lmsadtea.html

echo "${#s}"
来源：http://www.aibaodan.cn/163dqgjhrcv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163uposyyex.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163vgdofuiu.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163zwvtgpol.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163mfqnzkjw.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163mkesvydw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ijcrgohc.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163telsbfxo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163npniyfib.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163iqnqcaev.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163plwzxvlz.html

[R27] 算术展开
来源：http://www.sxryk.cn/163tvcfhfga.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163lodgztsg.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163qcmbobcv.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163mkwigsld.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vkmkoeeu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163svmxixkq.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163eymnjhhk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163fvhxglsi.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ygturmhs.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163dzwpnism.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dypmuyco.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163eshsiszf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163uwyjqjsg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163jsrufbmo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163alsoysuj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kqywbaho.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163pnvargym.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163qrrtorzc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163uckomjsg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163okzxvsnr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163wnxuexfb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zuglpwvd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xshwwanb.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163szoixter.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163cnzvbcpu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163smcbbefp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wzcdsbqo.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lwkfhlwn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163dsuxrmcp.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mcwzpfqd.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163bujfagtr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vongtbok.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163zlmzqvtp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nmbthuch.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163nmbawigz.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163voxkaxle.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hwkbujcc.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ftahrkjo.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163idhuqhfl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163dsfuyqpl.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163iiwfvxdb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fbcmxzkg.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fxzmsoda.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163muiasrxb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163toyjbdsh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163vpenuzio.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ltcngxhb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163lceyzjxo.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163blvcuxgt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163toveayae.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163wmhuxohn.html

wc -l a.txt
来源：http://www.aibaodan.cn/163mivladjt.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lailzxix.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163gskrojvj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163jehzanan.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ttpqpgof.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163kwdcqxkl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hbzkizlp.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163laayuvqh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163bhdnvggf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wnldfwis.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163drwrmqfl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163bddnxznf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163xfwjkvoy.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163bwxgcjcc.html


<!-- 参考信息 -->