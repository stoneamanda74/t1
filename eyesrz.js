外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163dvfjkpmp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163qqczekxq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ioaaotqe.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163bevtrdls.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163oapexjsg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163hjkpyiyu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163urxsxwwd.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163znbdzwix.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163vvclvqqy.html

[Q22] 排序
来源：http://www.sxryk.cn/163usounjry.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163bjjyscwf.html

[Q23] 分页
来源：http://www.sxryk.cn/163irfdwqgp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163fnbrybbo.html

[Q24] 去重
来源：http://www.sxryk.cn/163eqqoldpf.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163kebgyfsn.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163hzdffxou.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163lfqqruzg.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kfzguflj.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163spyjcips.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jhyysjpk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jiaywmit.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qavvvvgt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vsropeny.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163kxenovkl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163mvlcokwv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jutdcpht.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hxatrlpu.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163frouzwpu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163tqdvbexa.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163fqxfzjqq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zdybcufp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163wwmvknho.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jqbfnnoz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163joazxzlt.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163kokklyra.html

SELECT * FROM (
来源：http://www.xuanzx.com/163cmximqbx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163okpmejqb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163mvdlfhqj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lyobksqr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vgifwrxm.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dtkebdxj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163eolhtrvh.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vmdpquyl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163qwkkalkm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163pffrarxs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wlxttdxj.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163enzbixiu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163yjuzpyst.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163jqoydgiu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163epdxxipg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163wahnkglh.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163pawjkpsz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ebftyqnw.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bhmjlwcc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bisohzax.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163iksliooh.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163dvawddxa.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163lsebrisa.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163iqmtaedr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163rhvabihe.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163yosesmbw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bmmledoz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163pahfoyoh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jqahrmrd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163xmyknskg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jrgwohed.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163asgruhpr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163luoxfqhl.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yllgkuwm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163spwbazrq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163rrlgtnxj.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163lztdhkpg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163cjzoypmp.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163qfvsgnjn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163eadxpfxx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zeloxqvc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qekahish.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163petuxpoo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163zwkupwsx.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163hjsbpdod.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ypglrqzg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vlscfjjj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163amphdkdg.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163xrvucuvd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163pysosptb.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163mygmzfwp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163baqmzlha.html

[Q57] 行号
来源：http://www.aibaodan.cn/163wnmdymoq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163thncinaw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163cwsfffiq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163sgzrbhjk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ujmxpdvh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wxrogfga.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ayriucpp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mpojigko.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dxlvplpy.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163lmpffwhr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163skefvtni.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163pdhcyfeh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163apcieqwt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vpmdtikl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ttiylmij.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163gnnztmce.html

COMMIT;
来源：http://www.aibaodan.cn/163imjboovw.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163pszjgnjg.html

ROLLBACK;
来源：http://www.aibaodan.cn/163emrjvagq.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163galtadff.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163jwxqxblj.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tutadreh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ozenheoy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xpgzgexu.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163suqqsnah.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ljibojws.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xlwziuce.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cihvoeff.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163lrinjrxo.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163iuvdqnuf.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163hafstcjv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163lkqvecnx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wmkgrlls.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ahbhcnts.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163wdkihpeg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163kdwpgmwi.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163nmlnedcx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163iuftamaf.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163jhpqlwaq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ndlbeehq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zofmsdwv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163oebhkoaw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cruidwkc.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163bproreux.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163msdxtoqq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bqedmame.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163nghvwuaj.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163byemakhs.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163inzczpzi.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ovpcbmxw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163nbwsdtkn.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163odwtdxhw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ibaqeyro.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ykeonitv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ssskerzi.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vkdjtpuc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163sishffvq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mvoapbjx.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jhjvhhkq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163pblhebdu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163smkhrehx.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163itgmoplx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hftpbxct.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163wejsbkmc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ahugwfds.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163aqtetccn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163zejhuprk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163dbonzqky.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ucogtebh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163slfweaay.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163mueqkfha.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nbkiuptp.html

================================================================================
来源：http://www.xuanzx.com/163dncomsek.html

R. Bash 专题
来源：http://www.sxryk.cn/163gqtwzono.html

================================================================================
来源：http://www.xuanzx.com/163xvvmazug.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gijcdzpg.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163pheoitjm.html

set -euo pipefail
来源：http://www.sxryk.cn/163oaqiuuzk.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ykbcykrp.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ucsomjik.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nrofxegq.html

readonly PI=3.14
来源：http://www.xuanzx.com/163pgkxrfia.html

[R04] 位置参数
来源：http://www.xuanzx.com/163moeoqefu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jtjosdcw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163avribucx.html

name="${1:-default}"
来源：http://www.xuanzx.com/163pfdpkqfa.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163njgssdgf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163iogqijmm.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hymvuaol.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163iijjazii.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163tkyazpql.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gffcocuk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hbuclqzm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wkvotlkf.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163oloqlbqe.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163exffoprh.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163oicxdevi.html

case "$1" in
来源：http://www.sxryk.cn/163pgxtwpzd.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163wnlaswfe.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163uuehoqhe.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163phbqdnns.html

esac
来源：http://www.sxryk.cn/163lbqrcuxj.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gmmaffjk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163qrhnnrsr.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163qosjrgmd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163eossfjnt.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xdeohkmj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163cotpjdfy.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163bmvnbhnz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qntejztn.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qpzfwgez.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rcyismjk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163prljsrnq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163itnanqbk.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163cbryglmw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163zbkfggsr.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163erhzxbpt.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163tkztvpfk.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163wckdaclr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163lwqdhotq.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163caooebak.html

echo "${#s}"
来源：http://www.xuanzx.com/163unviltnr.html

[R22] 截取子串
来源：http://www.sxryk.cn/163szlkbodz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163gcxpleet.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163drvuunuw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fuxylncw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qdhosgme.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163czwrdpbb.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xafsnfpi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ygsmqabq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dfldbnuv.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163mbjbtnxx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zgchbwhn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163dgtkdhvl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163zgitakkc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163lacnhzem.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hehpjbtv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163jyridncn.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163jkpxyydk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jpwoieju.html

[R31] 局部变量
来源：http://www.sxryk.cn/163vztpgbmr.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163bibxggnn.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ycqklqba.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wpsdcgej.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163guusdxzm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163tsvornci.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zvgqnmgy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xqrrcofu.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163nfuunmsw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163yizbcgyw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vydbidvj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wjfakydy.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163slicsheb.html

files=$(ls -1)
来源：http://www.xuanzx.com/163wdqlvtzh.html

[R38] 管道串联
来源：http://www.xuanzx.com/163yukiamiq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hszobjnm.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pxqzadce.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163eucskjtf.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163fsfpvmjy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163gddthlmu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ciogrerd.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yocjdexn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dyclphvx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163dgdkdqef.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163tgrgalay.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xujeeruv.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xtsbwdee.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163libnqggd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163abdwxgtq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163uhizzqtb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163alwrfnrj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wvfpujgo.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qzvwnmoy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163vztwgsdg.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ksbnthgc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ycmpeifr.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163nocfgsmr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163nxtbmcsd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wjtfzcjo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163orlomdwe.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xyknjpii.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163awpozopo.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rwogfhdt.html

wc -l a.txt
来源：http://www.sxryk.cn/163ubuirbmj.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bnznogpu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163lbgytsxc.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ugfmtehb.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163omaezwiq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163xnilmcep.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163slsbffiv.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ahahixrp.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163hennuezz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163sthuaequ.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163kskzcvtw.html

[R58] 下载文件
来源：http://www.xuanzx.com/163pyhiwose.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163malhfdrh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fypioziy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163pmhcweqi.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163gqgiwsiz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163onmdsbyh.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163elrmsmuw.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163hgrrwbnw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wgonoqeh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163wspfotdk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163npqreubq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ufzolgni.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tyuvfgxn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jsjcgiha.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163tcvaozog.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ehatityp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163tqpnrkje.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163jtocccqn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zcbyixnz.html


<!-- 参考信息 -->