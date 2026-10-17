外链999!wailian999！

SELECT * FROM users;
来源：http://www.xuanzx.com/163jioazsyf.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163accabwsm.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163yhsjtsdf.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fuhgrkza.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163tewhkwbu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163gniedtou.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163nhdmeztc.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zkegjtmg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163gbkdbwvo.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163dlwmlfyg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163cydswjkf.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163zqbymkwj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163nqyoskab.html

[Q22] 排序
来源：http://www.sxryk.cn/163ljbpcvpm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163rzgsuplp.html

[Q23] 分页
来源：http://www.xuanzx.com/163wxrrcbxm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163psydieft.html

[Q24] 去重
来源：http://www.xuanzx.com/163nmgvtvbt.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lhvtzvjl.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gsnzggbo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tntuukfq.html

[Q26] 计数
来源：http://www.sxryk.cn/163rdusdwjn.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163aellbkjq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163vkrrqgqj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163tfvpbivs.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wpwhayah.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vvjosrhn.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ocbmsbfk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wubhcpig.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163mxflmiwu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ueqjktcl.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qnetirbr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bcymkeaa.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163bqtxaabq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cjrajkep.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163uoxhuotg.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163rukondml.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ffmplgbw.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lvnbwtir.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fpibciwm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163vtjkgjlw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163kgpqwmal.html

[Q35] 内连接
来源：http://www.sxryk.cn/163xwrykmeo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pnhstiej.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mmucdbqf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bhzcljjw.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ahwzdfts.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fzgoajnh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163tikqzpvp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zeiorphu.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163palgchgf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163tpftirzf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163znegludt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tennnilk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163sbtvpday.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163wpwnjbfk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163nidslqup.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163sztztgdr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163evsjpavk.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163atdveuwt.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163qwiqlivy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hgdptdxt.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163waudolsi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dmtfxjyt.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hgeubigo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rccqomsy.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ohdajosg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163codvdsef.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163tqmjeoxn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lchhxict.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163hirwgyya.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163fcnxcqri.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163zjodypnt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163uuwrguub.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163omfyeciw.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163tcaolndp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163flxxctws.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nltserko.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163oczudwyn.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163uakpvrye.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163pekkklim.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163whkpnygy.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wdxahsvf.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163afqirmhy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163zharzzsj.html

[Q54] 清空表
来源：http://www.sxryk.cn/163fykwrrwi.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fpzomzvi.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vryhifwo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163lipzkfxm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163eftdalkt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163mkvpuiad.html

[Q57] 行号
来源：http://www.xuanzx.com/163kdrzoxeq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xeikcnfo.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ngklrpul.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163duuetckz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163pyybpmre.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kgxbnxpn.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163vbsrzoys.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163cvnljxof.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163zzguesqd.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163uxrkmzsp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163xjovxrkf.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163irpsjayt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rhvwaysz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163sesmczzh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163zfpzmkjk.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163eujpcfyd.html

COMMIT;
来源：http://www.sxryk.cn/163yqdpxnqf.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163xzydukru.html

ROLLBACK;
来源：http://www.xuanzx.com/163kqbbcuwa.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ngkpuhev.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163oikhmtbp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163piiwdfkx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163orbxejyh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163arezqswe.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163onzplcdf.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163cthppycu.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163sgdteosh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163znzgahns.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163vckcqlba.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163aspwugco.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cqvwgsyd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jumyhorw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163utfblroy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163azrtgvdt.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163lgxcxqyz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163flfnldxn.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163kldloopu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163hgbrhgaw.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163sinquubx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bcfniqvc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163oqnjdfih.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163pvalmzrs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ixziiefz.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163uvdkgswh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163hllmmoof.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163sewfvjoj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163nbebbvkj.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163gqacolzi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163qdjnmhhs.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jamzbung.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163wxnvvzmb.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163uauhkjdm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163fysrzzmo.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ryylgylr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163mwgvtbro.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163rbvjcpob.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163bnwkfmgo.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xpapxyba.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163hybwksju.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163awazkbtt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wnnjdqsd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163lyjnammw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163jygdvodv.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163hzjqtevv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163pluwdmhs.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163pjsobdlc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163uniegjej.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163mrtrihmc.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ucfeuxoi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163vwyvctfm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163rynanucj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163lwuuhqjs.html

================================================================================
来源：http://www.sxryk.cn/163ttajjjxz.html

R. Bash 专题
来源：http://www.sxryk.cn/163xikptwgy.html

================================================================================
来源：http://www.xuanzx.com/163illdknng.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qsihcixl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ibqfmnii.html

set -euo pipefail
来源：http://www.aibaodan.cn/163dksqjufi.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163vxhfjsab.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ukxvoxcp.html

[R03] 只读变量
来源：http://www.sxryk.cn/163tdbaboem.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163cvjmbvno.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zlzhjxtc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163pjfllebo.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ctvvvker.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ernzcvmo.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163gjnnnjxm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ubqrytvh.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163vffpmdip.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163blobfxka.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zrzsykuf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163iacpllyl.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163etnwoylv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163kpqrujqs.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163rvjcywiq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163robojhax.html

[R11] case 多分支
来源：http://www.sxryk.cn/163nqaatwzq.html

case "$1" in
来源：http://www.xuanzx.com/163cidodaty.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163njjjctjy.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rwpdjwab.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xlwlxjae.html

esac
来源：http://www.sxryk.cn/163ooyfkprl.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163fxvrcoxf.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rohsybsy.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163samgwrfj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163locsmofo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163knuomxql.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tjofxunl.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163fawlrxby.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163bfybouda.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163qukafegi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163lmawexhu.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163andedpfp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163wxljhjvc.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163mnyeqshy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163kvrmsbfv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163mnrpyutz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nerehpas.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163cqoclgxk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163leuhpgxd.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163xqlijmeb.html

echo "${#s}"
来源：http://www.sxryk.cn/163cbwcftqc.html

[R22] 截取子串
来源：http://www.xuanzx.com/163mujtjozf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163vlhmzwjp.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kxmoxyeo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163isecqghw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163hsjhletz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163souydepl.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163fugdzksh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163mrtdesag.html

[R26] 命令替换
来源：http://www.sxryk.cn/163idzwtldk.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ruzknzfo.html

[R27] 算术展开
来源：http://www.sxryk.cn/163khzpabck.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xiyqfqpz.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163bezxdatu.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163aobxazaq.html

[R29] 定义函数
来源：http://www.xuanzx.com/163llycvhyj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ulycuzll.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gkonvcep.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163asvbxmvr.html

[R31] 局部变量
来源：http://www.xuanzx.com/163bxmhctma.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fummkpkk.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163iwtcxcit.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163coetfhga.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ncpkayqs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bpmaqjsp.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ktauikoo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kodfifuu.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163sdeybxsr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163fmsgafyl.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163numpfuxs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163dosxmhyl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lkyhdyue.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ipnbcimc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hsuvqqmk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zozqodol.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163yoevmavb.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163lgifuclo.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163lddwzhuf.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ivytmdqr.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163aagdpbhy.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163rluizafo.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163txijfkpt.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vvaunrgm.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163pfylivey.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hnapspgf.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mtpapdzo.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163mamzgutz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qwokkmbx.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163bxprtwfs.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163nykvicjf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163tsywfhoq.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163pgmudwlq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wlqfgwty.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kmtiipcd.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163cplqzbdo.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163hyhtkspp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163opxosezv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163dnhpoxfy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163pajgajdt.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jngtnsch.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tvmhnbxd.html

[R52] 统计行数
来源：http://www.xuanzx.com/163mskdymeb.html

wc -l a.txt
来源：http://www.sxryk.cn/163kinfxsqm.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lqpvmlkt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qdngcbij.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ofyopyir.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163kwszjmgw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163yrmxxwbz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163oznalydk.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ngcyblpv.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163asmsexgl.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xdwiepor.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nzzgikhe.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mahvjtpk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163bxhiftkh.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163mrghvxwl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163sedfkfyk.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163gecqzsrd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163lddoyuez.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ytwzifkl.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163vfjqdedz.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163sqlxqclh.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163oosnmrir.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163dbygayqe.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163tnlsmzag.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qzsiigja.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gposedip.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xdyoimiy.html


<!-- 参考信息 -->