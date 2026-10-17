外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mwnumvqi.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163hdacjgbt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163gpnustrs.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163jujhstpq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163lrbhehcb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163dyqjjqom.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uusqlang.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163rgsbgphm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163uofsanss.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xjqdkbyj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bcdystfu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mpufwjda.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dkbxhxws.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qkrnvbqr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hjhwxweq.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163rghwmhrb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163lcjzvxmd.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163drqzhygj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163orxlevlm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nyqmiinn.html

[Q36] 左连接
来源：http://www.sxryk.cn/163hzhjrwhq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rwxsszwo.html

[Q37] 右连接
来源：http://www.xuanzx.com/163bocwqtih.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163vjywzpbv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jwstprue.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163uwuprofb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163smttxqne.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ejspznvz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163mqecdsfa.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163liqkcvmc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163uftjgnuv.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163xbronxzf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163jxlndeqf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163sqbokxzk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163qqimydoz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ribabrkx.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163grxzpiab.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163rwbmvkcc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163xswfdvmh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163eiqsjgoe.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163pmcnkydd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ejfymkkm.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163snhabzii.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nyzqkmfm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163gwwkvwvx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jqfurycg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163rupznnym.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163javmunfe.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163fqxynblw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163pqkvvilk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163dqwyysrp.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163frpydgdr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163fpfepdbt.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163zihpgoty.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163itmxrcua.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ldrhuqlg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163inwokzij.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163sginifpm.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nxlsfrph.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zdqnzrzp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163bfomuphr.html

[Q54] 清空表
来源：http://www.sxryk.cn/163bfvooifx.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dpptkonp.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cfshykpr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mztaczhc.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ymqnveae.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mrpewmel.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fphoqwye.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163nyfiimix.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ienkryhp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163nermjcrs.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vshchhxc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163mozqlrqt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163pbjqufqh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163iragnauk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163gerqwatj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163dhsbyesd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163clfagqnw.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gswclnkv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qzxshseo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163sckrkclx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163uchxzbva.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163fdpapeon.html

COMMIT;
来源：http://www.xuanzx.com/163jsmjwbgt.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ciqthpfh.html

ROLLBACK;
来源：http://www.xuanzx.com/163xunmktps.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163garlizqx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163aquepnbq.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163csbnkuve.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163dybylsgd.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163szsngypf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163pojtkfsu.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vrnvmgdy.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163lbphmkew.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163itwectfn.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163rttazpea.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ypnidnwo.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xgwcfsjm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ojrckhkv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163nvglhgud.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163qxrdpmqi.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ghclsvns.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163yeadgvmu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163nwfcvruz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163vvpheqhc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163picjoxwn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bustubfo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dfsqlrdh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163tjslbqcg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163yybybjgm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163xmniytom.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163pfnfxnba.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nnupnuce.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163pntpyxlr.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163sbnsueaw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163smnfhumr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163akldpbvq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163hkwmsuvh.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ycjbufpk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163sulwaijt.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ngtmstyp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163nbkjnubj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163eqaahmzf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163crvzvfxc.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kttjiezu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163nqtzxtom.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163olqyaovr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163kcakzwip.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ibdtlrtn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ymzhqnni.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xxhfpkml.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vwkiocil.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cksxmoqa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163tpvpvwki.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163aitbvyim.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163haadsyar.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163wtswjnks.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163qfqtolbl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dbveakyy.html

================================================================================
来源：http://www.xuanzx.com/163mwpcycok.html

R. Bash 专题
来源：http://www.aibaodan.cn/163jvtlpqzq.html

================================================================================
来源：http://www.xuanzx.com/163hktjaiec.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163zeclhkiq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ybjwchvs.html

set -euo pipefail
来源：http://www.sxryk.cn/163kgxeilhb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163mcfrhghd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163zhgusaff.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ybjnwcrv.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vkakgarr.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ielprahb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163djssrfed.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jecirqjm.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xdbtfvbh.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163chcwtiwz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163awwcwwox.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163acopednp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163thikvoko.html

[R08] 数值比较
来源：http://www.sxryk.cn/163nnlbiuzl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163lcaimhpc.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163clhbubxn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ywgzbpwb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mwmvuqfb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ygahrzsg.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163dujetldw.html

case "$1" in
来源：http://www.aibaodan.cn/163wcspfhbz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hrwkhlqa.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163frdoedvp.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163pojdutoi.html

esac
来源：http://www.aibaodan.cn/163ezqbuzeq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163cauwkamw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gsyimwpk.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ccchigxg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163eigxgovw.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163nnkuqscs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163htjicsue.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lkkkfjed.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163nkwyrjmy.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163vmjhnojl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xmgfzzom.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163eylfacpt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163oplgiyhe.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lkpqqzvl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ghhxneas.html

[R19] 数组长度
来源：http://www.xuanzx.com/163moilivji.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163lcbqiras.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ncqempls.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ysgeybiu.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hjwrpmba.html

echo "${#s}"
来源：http://www.sxryk.cn/163lltilsrd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163krsarexs.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ldvfnawi.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163bofvgohd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qlqpozzx.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163eemwwznn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163kbdsljlv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ofazaqqz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163brnkxdhq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163bdvuwiaa.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ahajcapb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163dtiuafde.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ucyxawqc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163brcueint.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163badurvvz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163onaayfrr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163jhagoarf.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163eceuqmxc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163mdxcflbv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163dlzhxzjx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vynmalex.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rghbwutt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163tsxkwhon.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163cqrvqbkd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163atpvadxv.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xsnixhbk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163enecvmsi.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163touhhjcw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163pssnsubj.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163sbzpwuof.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163iuvyicbe.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163floqpcpg.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nhikbdbe.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bidkmyev.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wkxjbfed.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ddmifpsn.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ccbltrlq.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163lhltncgu.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163szeincon.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163djvjoxbv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163hhfufmsx.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zgxvgzzn.html

wc -l < a.txt
来源：http://www.xuanzx.com/163hxvfopsx.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163utulcsjs.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163wvbsxzas.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163utpwmehn.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163aktguygv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163julbizpf.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163guibiehk.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ormaqnme.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163mtffbomw.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163pcgbuhva.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jcskpyps.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163oqzuzpca.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163wqqbykmq.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nrogtepg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zqyobbyi.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163bsiafktm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ibobvcfj.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ivfdcmze.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163vbpfjdya.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163trskufcq.html

wc -l a.txt
来源：http://www.xuanzx.com/163jefsmgox.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163sqmmflqz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163bixirdrp.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163owwendmu.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163qbqzzumh.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pvogmnbk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ewjoakdq.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163gekqmdxy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163yzmnngns.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vkswmstt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163vdmigkzl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163jootxkvg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163vkokmyxn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163vfbzywzc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163eyojnhxj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163huytvknq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163cchpseih.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rjnbjjbg.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rbawmkfe.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163drjskjzm.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163spzquqby.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163djiejbrl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163weayilsk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tttxdasa.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163mnuwxvyy.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yakclqvj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rpkagkzt.html

[R66] 定时任务
来源：http://www.sxryk.cn/163huorpexk.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163pwhuxpxw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163natswqjm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163exqzhslj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163gkkyfvwv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163dvuyspai.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ddpbofrg.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jnyiwxsx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163lrbmjhug.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xvdeemyn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163klrxmmmi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163sainfjbz.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wzvdilra.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rqmvuwjj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163wlsdiyiu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163gvetmkhf.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163womzadvb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ekkynqxj.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163hfnzpwiq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zmwxmfek.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163vdevwcrf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pjqhhhvy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163oiltttoa.html


<!-- 参考信息 -->