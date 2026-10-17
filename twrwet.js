外链999!wailian999！

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163rbynqzrh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163pnhiauvk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jtoicjiq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163aagzywip.html

[Q36] 左连接
来源：http://www.xuanzx.com/163zlesizga.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nbvcubfv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163bppjiqjz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163oqycpsmp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163sosypzde.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163plyktfgl.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163gttesdpw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163llqfwpww.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163aiqshnyq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163jjgtgvvb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163tljovplg.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163thbebqok.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163dlxrdafl.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ftczflzt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xwnlacsz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vbqwnjqn.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163apejamrv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pxfaxjvl.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163eagtufvs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163bysteyxd.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163oomhnunk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163dirwquii.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163klawnwww.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vkjpgdoh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163knlqpowt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163novngtwr.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tvoincax.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cndltlec.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163azqitaau.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163jgssuubz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vnvqhynp.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163gizrpuqs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163lcvnoizs.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163oooseezg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163soydbogy.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163drkzhbap.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nppvbfhp.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163phelfxko.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163sxgrspfq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163wnvmwsoa.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jqtsafaj.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163akzhgxon.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163rypwzftt.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163siinccrg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163bifyjorl.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163xyfkyynk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163blcfuomp.html

[Q57] 行号
来源：http://www.xuanzx.com/163pojffwkf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qhexjkck.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163fropsskm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ffasswyz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gmhptpoa.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163sztvxvan.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ezbdcrca.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zjfzuilc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ffyiqsfx.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163mkgkqszh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163khiqqqlh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163urynptpb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hitellvq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163oqxymihk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163tltrqmed.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bmfdlodm.html

COMMIT;
来源：http://www.aibaodan.cn/163futfhqon.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wzutiqne.html

ROLLBACK;
来源：http://www.sxryk.cn/163goyhczqn.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163iyponlyo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163rrwwigew.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qquzmnll.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ykhrvudz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vbgykzok.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163njaakddt.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163acnsggzw.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bxjcptic.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163zncitjga.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163gpbidivq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163myhypcsq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163saciazdr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163arhcnyiz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163cvpefyvj.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163kmuwqflx.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163pmkwrkqh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163jntumvio.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163svcdyzds.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163pkxnkmwy.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bxwjsmde.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163utmuhfbs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xorwevyw.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ekmmaqqk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163iemwicye.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jqptilfq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163cuedndhh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163phgmzesh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163qqdpnekc.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xyajlomf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163znyfzydn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hafvenbz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163whqqqkcf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163orbdbhsx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163bqiwvvym.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163fixkzfqk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163uheawpcs.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163revktofi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163gwkbsdtd.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ymscbtav.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163xryldbxz.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vlczhouq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163heinqeub.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163lkxdflyg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163robshnre.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163rmohdsoo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163pojyxkgx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zjdwlahc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163udcrcqot.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rqrgyrmq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rdnquskl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jbyfmqpc.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163prshtvyw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163jjbxkpqp.html

================================================================================
来源：http://www.sxryk.cn/163wgmmeadd.html

R. Bash 专题
来源：http://www.xuanzx.com/163xzchbneb.html

================================================================================
来源：http://www.aibaodan.cn/163kgipvuod.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163smlzockb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bvxlbosd.html

set -euo pipefail
来源：http://www.xuanzx.com/163pqqgkxty.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163vdeogzwb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163dfoiqslm.html

[R03] 只读变量
来源：http://www.xuanzx.com/163foktuhio.html

readonly PI=3.14
来源：http://www.xuanzx.com/163pdeifigb.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163lnmtbkru.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163tysjtfzo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163rzazvyzx.html

name="${1:-default}"
来源：http://www.xuanzx.com/163gltovltb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163gowszmby.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ryuwkfzn.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163gztqpuhg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kdfvjbdp.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xncalszu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163fjvcnvyk.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163flkzkgub.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163owsvugrn.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163klsybatu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xrwidybg.html

[R11] case 多分支
来源：http://www.xuanzx.com/163hcjpxiij.html

case "$1" in
来源：http://www.aibaodan.cn/163zhqwoirg.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bmbtwwmc.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tgvvewir.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163kahcngyj.html

esac
来源：http://www.aibaodan.cn/163oetuakdu.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163jbvlgdxu.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ckgszige.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163mvfvdfyi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mkymwndo.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ezqpgnfl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ikxfgkxb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rsadbsql.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163tlmjirfm.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163rcetavvz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163cxfjibns.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163tlxsetag.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163qucecglg.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wbqbkena.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rhbikedv.html

[R19] 数组长度
来源：http://www.xuanzx.com/163jfhkhkmp.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nnuvfmxw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jvnjflgg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163jiwlject.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rbpbcijq.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rdrwwoze.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xsmecujl.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xtxepznc.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163dfvrgqyw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hwekuuuz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ylzucqhu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163rtitwiah.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163tjuaizuo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163eusrsjtv.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ukjpwkrp.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163rkwhnjif.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ckyqxkwq.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163cjjmxxlz.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163svnyltue.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qbdkpjyz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163uefvmhzk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zaysddpt.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ypotjsbe.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rypozthi.html

[R31] 局部变量
来源：http://www.sxryk.cn/163htemybiw.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ailjiaiu.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rbqcjbiv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163atbbtgvg.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163xhmccasq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163lihpbcwo.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163prcrtuex.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ygyrxdar.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163drejjbhx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ebrslyho.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163nufprnjl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hmhjcbgh.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ujfsuloh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xsjqqntd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163qudbrshr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163npqtqvqe.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163viulkppo.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163uxsrdfuc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163sqkqgner.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ylogxhxu.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ygreokth.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fnseurff.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vwkysnub.html

wc -l < a.txt
来源：http://www.sxryk.cn/163bnihsret.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ipjndcjx.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163trebtbev.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163wsffhdju.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163polbybjq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163lkavtegk.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mjaurjna.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163nmsoaoii.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163cmalzjtt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jfujdilr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163aomdtyrs.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fmgmrztc.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163pgaybbqb.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bvriyumj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xlaljjbm.html

[R50] awk 求和
来源：http://www.sxryk.cn/163yhwjfrow.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163louipkbi.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ojmiwzkv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163rtdqicpf.html

[R52] 统计行数
来源：http://www.xuanzx.com/163cokyusiy.html

wc -l a.txt
来源：http://www.xuanzx.com/163scszxdet.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163lqzheagk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cftfkahg.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vckvuhcx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163skzkmxlt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163rvvgtkss.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163eybkyedj.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ddezftab.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163xwdbnrri.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tnxpuphm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rozwwiac.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ejjdnzzy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163slklvmht.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163vwebtmdy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163twrirzeo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163govtdnwp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ljnnsxmo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163jbdzlniu.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163oemnkeih.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ionfaleh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mhzkyyht.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163pyyeypgu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163vwvacmew.html

[R64] 结束进程
来源：http://www.xuanzx.com/163scfmrfbt.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vygislay.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163hxcrnhor.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163yvdrvisx.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163krzzpshu.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163gnsbdqsg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163muglfaak.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163skirtxzw.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163eklqfgov.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xdtafagm.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163jpivbgdy.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163plqsrrkt.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163pekryhnk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163tgdrmltn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zqxnghkt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pfhsqhon.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163qqhushxt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163xsrfgiow.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zimibqfy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163mbdxhsga.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163yordtlpb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xssfxwcb.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163veugahox.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wtnhvrlj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pgkcnrsi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dnpdjqol.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163fuujsvlt.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xhwadvax.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163xlzjjlhx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163rrvnphjb.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163acnbnori.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163fumnpbpo.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163etqbhltj.html

time ./run.sh
来源：http://www.aibaodan.cn/163yrfupmzb.html

================================================================================
来源：http://www.sxryk.cn/163cutarhef.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nmqgacsc.html

================================================================================
来源：http://www.xuanzx.com/163bztlhtzi.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ylohcpow.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nynbfnnc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ivvamfti.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163gcunphby.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pquoekld.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163umyffggy.html


<!-- 参考信息 -->