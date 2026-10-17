外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163aklcdcms.html

[Q22] 排序
来源：http://www.aibaodan.cn/163bjxnvewy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163zfopcqff.html

[Q23] 分页
来源：http://www.sxryk.cn/163lvxxgtpm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bflbthcm.html

[Q24] 去重
来源：http://www.aibaodan.cn/163vfgszjlo.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163zjplylqz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163avykgwtf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163sjovqqfq.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ddvuoxgf.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mvfkihno.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163jslbvwcs.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ultncccs.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163wtamyqke.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163hjytgprb.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ecuroyen.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163fgodqonk.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vgghgexu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zrcbmpwp.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163skmlfrpe.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163jtdmbwrk.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163kjlkskrq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gfcdwqnd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ogfousqg.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163hpogynla.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163oodiabpc.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163yzanbhst.html

SELECT * FROM (
来源：http://www.xuanzx.com/163rxlzlujh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163xdxmgtjw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163fphniviy.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jialidra.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wztngxio.html

[Q36] 左连接
来源：http://www.xuanzx.com/163mpfzwhde.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jwsfdyuj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pmwdqorh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qxujswbh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163lwouzgch.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ayigovkp.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ewlzrgdv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163dtqidnfb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kjcyutzj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163mhsbdxhc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ucqwsidl.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163uyrbfuai.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163rsvahgzf.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pjzflbww.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163qguoxmlu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163gknvrxmr.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163mjkbzwmg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163dfsgdnpn.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163qfeguspq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ylakygfk.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rryijsjl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lqjdphbg.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163xxhlmuyv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kfeykokh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163gebxnfpf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qxliblxy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163qsnethnz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163biygqlnc.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163hlmwrzoe.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tibkmytc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163gxkjcvyt.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163hlcntzta.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163afzfihfa.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mhqvndiu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163fgrhyotj.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rhgubxyl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vhupmvcq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dypxgvzx.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fcihtyrr.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qtrxfork.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ebiyaojm.html

[Q54] 清空表
来源：http://www.xuanzx.com/163lfdwrsqo.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163gxbkxqrj.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wtdsejmr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163sxvrmtwt.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163zfcbcqvi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163trnqpuuq.html

[Q57] 行号
来源：http://www.sxryk.cn/163zecjoiid.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163fedlremp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163fqznjaby.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jmxjewaa.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163mxdebllt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163pcpadlxj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163sbmxzslt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hhepnmzf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163crpuminb.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163uxrdyauo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163bfyyvjoo.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qdvyijri.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qggvaihw.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163uuwdlrkc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163vlrnzgqx.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163lamrpick.html

COMMIT;
来源：http://www.aibaodan.cn/163meweojot.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163jdpagmdz.html

ROLLBACK;
来源：http://www.sxryk.cn/163rudjlzhw.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163byxyouvr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163rqzmejmz.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163zpuowelt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163kgonzltj.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163aisnscxh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ylaojftk.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163gajyrqds.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xrlrataq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163uwxhlcbp.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ghuorlzs.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163hqxxymgs.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163tckrlpth.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rzqfoliw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163lbjrkigf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163kjglzygj.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ujqlsbvq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163laxmstay.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163dcalmjcn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xnmqmbil.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ftfmiaez.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ohzgnjtp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163wpdspads.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163uocrgjhh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163payhxvuh.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163btdhfifn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nasfynjm.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163pwvyebnz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kaizrqbe.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ubkdpgdb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163lfeobewv.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163pqrstjxr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163wwirzkzl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rvaxwkjj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vmxoslve.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ngdtgjst.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lgaqotue.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163fscnpxdc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163rtdnjyuw.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ftjicqfw.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163bhshupep.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vqsziotn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ypadfuqi.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163dwyxjbxk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163tbqostid.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ftuhctqj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163oarpqkft.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163rphvocqi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163yhopakvr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163weuhcerr.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163asjfwvkw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ybrrhsrd.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163zsczntnk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qbswtwnt.html

================================================================================
来源：http://www.aibaodan.cn/163xcpskmbb.html

R. Bash 专题
来源：http://www.aibaodan.cn/163tsujozys.html

================================================================================
来源：http://www.xuanzx.com/163vfvkxvjz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163oigjzoel.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163izibordq.html

set -euo pipefail
来源：http://www.sxryk.cn/163snorbark.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163lweoldvi.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dhrixxjg.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jhnwigvz.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qtippoqg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163akankzwd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163voxhyrtg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163hebsbvfu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163gqcccgyb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163erbxgenc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163rmpogyrk.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163eobkthst.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163gmaykrbw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163oqudzkjs.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xyvxxqlh.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163nmmcrmot.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jcpdbjlj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mvopjemk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bdycpwiz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ybgkemel.html

case "$1" in
来源：http://www.xuanzx.com/163pyxbmlrz.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163efrivlfq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163kvhmyxpy.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163rjcbftzr.html

esac
来源：http://www.aibaodan.cn/163ghdlukde.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vmktdqii.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163mfpoesye.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163nvkrmtvs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ceblmuky.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xkfosbca.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ehrnivjt.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tcuaizzr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wfebdekt.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hnkupcft.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163tbxxrybt.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163kxmblhpp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163bubcmlyj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yfgtudxs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ayropduh.html

[R19] 数组长度
来源：http://www.xuanzx.com/163kpnrnjgg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163tcmxmevc.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163barwmubh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163oxbvkkmy.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163nibalfhw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ydomqnbi.html

[R22] 截取子串
来源：http://www.xuanzx.com/163jyfyjtac.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163hqsdjzta.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163hqbxldte.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163qkfykkor.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163kalyqkby.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163avpjsiyc.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vwgaddyk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vfsoygxe.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ruwhnzvx.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ynlidmlc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163rivumsam.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163uwijohyq.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163qowrzhwq.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vgmtlquk.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ixgpxjfq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wvrvaufv.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ztfhvfdl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rztymjuo.html

[R31] 局部变量
来源：http://www.xuanzx.com/163jpoutrdz.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gutjwner.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163dmlksahh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ztoteied.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163yhessdse.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163cunchdqa.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163eyxhytgk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xqeupqou.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ydfkhvvx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163tfllccdt.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163srbopcey.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163dqfgmodn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163rfabpoyv.html

files=$(ls -1)
来源：http://www.sxryk.cn/163pbjehdkh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163slpjzcbk.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163czijejqa.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163bgoluchm.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163wgjhecny.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163nuscxmqf.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163pgxujljr.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163lhpuvtcz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mqdkeuow.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xxeykqcw.html

wc -l < a.txt
来源：http://www.xuanzx.com/163iaptnjew.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163wekfmgme.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ctabmogx.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163tpbyqfif.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163kkhnjwmn.html

[R45] 批量删除
来源：http://www.xuanzx.com/163gbhnhrhv.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163yvxkncku.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163iywjqwgv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jbhlrnpy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163uwimefkf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163dzhjdcey.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jvekjcbh.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163izpvcdik.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163lmngivbx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163anrqlzme.html

[R50] awk 求和
来源：http://www.sxryk.cn/163xawrntwz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xbjmlcxz.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163mvqnuedb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163wlzsxutg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163dmivgqoq.html

wc -l a.txt
来源：http://www.sxryk.cn/163msmhbmdi.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lzhgwhba.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jueqzgkj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163nehmyukt.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163aowkbqpi.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bnmbkros.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163fpgxmhex.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163xqgvwkgv.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163jkdevqak.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163exyguvls.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163dfnjyssh.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bwnowhzy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163gxokqlxy.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163decgmzyl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163zrsctxwj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163qcxzgakg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163acesxzvt.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163wsdwpazr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163xpcxdhmh.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163sqqzuski.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163yfrpjpsz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163btvbypmw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nexdenbj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163kgnyqsse.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163medslwlb.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163fqrrflgg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xddgctci.html

[R66] 定时任务
来源：http://www.sxryk.cn/163rddvluto.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163yyjqeuno.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bbooqrhc.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163egkntwmx.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163pnrebiad.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163hmffqmzh.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hmrrtcez.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163hiueuedz.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ysxoavfi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xxsbbxzv.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qskwpqso.html


<!-- 参考信息 -->