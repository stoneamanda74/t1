外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mftzrjwa.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163egprfqto.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163eiquqehi.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163qaswbesb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ettawxdr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163grzwueep.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163gorvsacz.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163wzpgdkix.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nlctwcmn.html

[Q22] 排序
来源：http://www.sxryk.cn/163jtbljikl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163mvdrwona.html

[Q23] 分页
来源：http://www.xuanzx.com/163bjznsmla.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cpodacmf.html

[Q24] 去重
来源：http://www.aibaodan.cn/163adjxhcgf.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163poduisjs.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163bsfhlran.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163blkfzoic.html

[Q26] 计数
来源：http://www.aibaodan.cn/163cdbhlacq.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ykltfwmf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163muxkuolo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rzpvqyvh.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163gnujongp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163lfzhfxgy.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rpxbmmdv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cccmklin.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163emgrkped.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cnbesxre.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163nacogdco.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163tfazrubp.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163acwsvdhb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yffvjbfl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163szfsjhys.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163hdujoacv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163zyzvippd.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ybpmhioo.html

SELECT * FROM (
来源：http://www.sxryk.cn/163nybupkhl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mxnzwbxq.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qbxmkckw.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vhbnrszg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zxvvisvx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ideiqfwr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zmuchsrb.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ednurvgk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lmvetwad.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163nmblxnvw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163uksfrdad.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163gypiimjx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163fhioagka.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qgrtbewe.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163yjagvhxk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wkucqrct.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163uqbvwdxj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163dsqjuphw.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wgaaphva.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jhcxowzt.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163nrhhjcjo.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fdwzzmhp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xgworuey.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xxgrgjot.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163quscztii.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163iohzvksy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163hlmpecwn.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163diianhmh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ijxmtokr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wumzxnhr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mdolhobj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163zpvdagzi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163nrctttya.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163jzpcuoql.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ohkoexzy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163jigjyqfq.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163mxnptiot.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163mraidfyr.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163fuqzbxtm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163kbcizozm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163uwchcukn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rvygqbpm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163otoswheq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163rmrfebbn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163snuueeoz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163wgseoals.html

[Q54] 清空表
来源：http://www.sxryk.cn/163iztvhsdg.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163juupdqjk.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163nxdewwke.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tpnvevgi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163bbegfxcs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163xvekqzhg.html

[Q57] 行号
来源：http://www.sxryk.cn/163uzrmtbcj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163spbuhpju.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ifctbvsj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163uajfjrmp.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163axhukfyw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163afskmoxe.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kgkcikqe.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163qvoorqxf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163mbehppnr.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163dpjbqmjo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163mwqvauet.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hoxxdtid.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xxdsvcea.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163wweanysn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163tizrjvfl.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163gtxwzhfa.html

COMMIT;
来源：http://www.aibaodan.cn/163qxdcecju.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163lpgvmpko.html

ROLLBACK;
来源：http://www.sxryk.cn/163kzqbzxxn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163trsbzgox.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163nwkdrjaf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163bzczagdv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163xlpwopff.html

[Q68] 保存点
来源：http://www.xuanzx.com/163shdtndvm.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ftgcnjgx.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163yuugybes.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163nasavhrk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163nnxtjwqb.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163euxcirzu.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163eukevdpq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mynmiapl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163tzjibnoy.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163oicosgpo.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163igbwxpav.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ofxwkvlb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163waayuqei.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163mcjyclbg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163jfwfgxhl.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lifsbjmu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jquvjzcz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163vmsdzitc.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163wmxxiacv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163glnnfkuj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163argtsjga.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163imisbfkn.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qoghdjgw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163nbmrgzbi.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qihtrhmh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kkjrconu.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163wkotrkne.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163wccgukuc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163yqpifurb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163yhqmlmmv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163glwqjwgh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163cxjdczuu.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163oioxupvu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qrxfgcep.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kfwjgxpo.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163dtheistx.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163wmlbohlp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163dsotqobb.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163efmllxmi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ipbokgnh.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163cexmohsg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163umjzrvkt.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163vmudtwfh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163jlbvlinc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ohzlslff.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163mxadfebb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163orampgyu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163arambata.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tnycngnf.html

================================================================================
来源：http://www.sxryk.cn/163jbvwpdiv.html

R. Bash 专题
来源：http://www.xuanzx.com/163vqdirgzc.html

================================================================================
来源：http://www.aibaodan.cn/163isfjarsk.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163yjiivcpi.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163hiybkuhu.html

set -euo pipefail
来源：http://www.sxryk.cn/163phiklsqf.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163hovazelk.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163cjmxdvnk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163fccwvbwx.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mmvjqdbi.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163sbralnat.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163poxdhnps.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163yftoejjc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163oviumpcr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wwicgows.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163prefcpme.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ygalcmhi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163thnrbfjh.html

[R08] 数值比较
来源：http://www.sxryk.cn/163qihyludx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163kxzvurgu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163tezhojup.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vtoxshwv.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163yoestqhl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kamtjlmh.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163gtcllpoo.html

case "$1" in
来源：http://www.xuanzx.com/163bezabbbr.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163dseyecsj.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163xdsiiqrk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163mrtbnmcf.html

esac
来源：http://www.sxryk.cn/163uvlhlvwd.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ponsojmb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163lndifwkk.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163uoxempxm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163xenplrys.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163gmvkbssf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163aitdhyyq.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163vfbvplvl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ulnnoinf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163twbyuhwv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ahjimvps.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163upqvrjxk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163cfnnjony.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163gypogvzk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163nybfulhb.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jbrbcapi.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zcdkzbka.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163zvwfayut.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163nyfygiqc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jjaponvz.html

echo "${#s}"
来源：http://www.xuanzx.com/163kppjzgic.html

[R22] 截取子串
来源：http://www.sxryk.cn/163plyjwior.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ohoykjbj.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163mfiqszmt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163iagjplrn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163prrvawgh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163lygbsnns.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lxbusdmq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163imkkpwoi.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ubqmkmrp.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163tqzaepfl.html

[R27] 算术展开
来源：http://www.sxryk.cn/163sivcroci.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163vovnchhe.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mucsudwq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rtfyksbq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xzcoyhnt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ybqxfgzo.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ggwypeah.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xhjvynkz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163owucqmjf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163owfmtkyh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163nnyiwfxd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163tipwojpe.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nmdsgcuk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xvliodao.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bzgkfbhz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tzyqvjzr.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xrtlfgfn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ydnqkhri.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ofjcwmsb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163kgitkyss.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163rzzobndk.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ovxxlygr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163agyjhljq.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xoglodti.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163scrnortj.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nmtouygp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wttuxfpe.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ofbdoxaj.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163knshnvjl.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ktbatfva.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163fudwmjej.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163wevytjpg.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163tbxavsai.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163dndohwuc.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163bhzhbghk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163usivapyj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hgxmxfli.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163bcyrglik.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vcbvdeiz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163yzulmztd.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163yaodlbaq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ufzazhlp.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kupzqgae.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bhzgwgxv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163olotcgrx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163gtkamzte.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rovabudj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163imwgavxd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163adkcjaqd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zppqzalk.html

[R52] 统计行数
来源：http://www.xuanzx.com/163nueoqdwk.html

wc -l a.txt
来源：http://www.sxryk.cn/163sxckramw.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163wfqehkxd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tjuvhjhd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fedovngn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zunivslr.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qtwjzrxr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163qwgsnjom.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163awrvvxul.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163vbeywlfh.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qthdatbk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163klyslsok.html

[R58] 下载文件
来源：http://www.sxryk.cn/163lutougzo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163sscywpbv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163jifrozue.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fugaxrbz.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163cqhdwzwd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163nnwmabzl.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wjqbhsnu.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zqvnoxxo.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zzsuhfgi.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163weewrdnn.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hkfmqysp.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163aikyhexj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163lntuadvt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163glzvcfue.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hvsebuth.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163axudoofg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vsmzpfzv.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163rmnnnwpn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163lxtipglb.html


<!-- 参考信息 -->