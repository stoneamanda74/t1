外链999!wailian999！

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ovcxfmgi.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163lzftpxxd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ilovaneb.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163vsaothda.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163azujgihx.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gwxyrzml.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gntzdfxj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163jenszmkb.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163yrryaefo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163eecvypyx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163xmxvnutr.html

SELECT * FROM (
来源：http://www.sxryk.cn/163tvjjtbhs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163nvlgcgue.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ywixdrzi.html

[Q35] 内连接
来源：http://www.sxryk.cn/163evkevxjz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163okjsbyer.html

[Q36] 左连接
来源：http://www.xuanzx.com/163lwpldpwk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jkiwymni.html

[Q37] 右连接
来源：http://www.xuanzx.com/163bawqsamp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163bnczkizt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163qwqicclt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zisbaslt.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163miyzhrpy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163znssnkow.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qxhxzqcb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163xzhuoptl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163sdyvaewg.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163dxrdnnge.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163urlsmqau.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163mvkzyjcg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ckhgvhun.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163kkwboutr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163nuzfqxas.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163totcrlkt.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zjrvrxou.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gkfsrhlc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163npxvxnds.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wkzuerzd.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163mfznelio.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dubtbhpt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163fwtbzvob.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nwgktgpk.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mkmgevzn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163whcpwnyh.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163miwppsfp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163kehlsrym.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hpontavu.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163qbcgfauz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rjvbbmxm.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163vicwojjs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163debghugy.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163brkpavtm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163sxmzvfaq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163brupjpqc.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163erzlmzmv.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tkqwizpw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ogrgpvdz.html

[Q54] 清空表
来源：http://www.sxryk.cn/163frpsxwgu.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163wqwjwppi.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163eixmvsch.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163rtmjjlct.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163htzgdgbr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163whgztwxn.html

[Q57] 行号
来源：http://www.xuanzx.com/163roxwfxrh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163voryquyd.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163gmmhcyjk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xxmvfknz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163iitqqwte.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xypzsfkm.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163nuzwidxz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163zpuqjqxg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163qwnurakv.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xmwjkfre.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hjtymtib.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163zfoxbxhp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163idbdotfc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163hztuyjbn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163tkxlkmwz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163djflcmxx.html

COMMIT;
来源：http://www.sxryk.cn/163umbpxubw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hfghvcij.html

ROLLBACK;
来源：http://www.sxryk.cn/163mweewfhv.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163lttzveos.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kdwpxyef.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163faoinpcs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163qjcsahfu.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163caqnsgei.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163shmchxbq.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lgoesdup.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163irroycvo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cwktffnh.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163cdbhxzxu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163acoqrkiy.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163woicveie.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163auvxxdfn.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xjzwbxlx.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163azstxhwq.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163jjryenmw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vrkpqiix.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xsqbmubo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163osrwcnmp.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ognkpvud.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tpivygyd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163mjigqdnj.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163kzcymcii.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163qrjoziza.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163uxdmkoxi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163mznymuuc.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ratputax.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163dtmblzau.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163unlcpwny.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163yjpyfxic.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163vwjitzat.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163rionvnbu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ryouzgtq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fbjxtxdz.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163lhqaoixt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nqyvtafo.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163jsdpyumz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163bccbbpil.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163igvuqzlg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163zopmoxjk.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163njpdfwsy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ailkuvwo.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163vysxjyda.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ehuxsqal.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ohaqjjsn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ccdyupkk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163wzkyivpa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163qlzdnucy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163vklsugnt.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163unuextih.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ovelchle.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163turokbcg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163agjowpur.html

================================================================================
来源：http://www.sxryk.cn/163wnyeluue.html

R. Bash 专题
来源：http://www.xuanzx.com/163yetqmyjy.html

================================================================================
来源：http://www.sxryk.cn/163ddvgzjyg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163bnwwpawl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163cgjhedra.html

set -euo pipefail
来源：http://www.sxryk.cn/163iziiibtw.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163akoztrzf.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jtnvgyix.html

[R03] 只读变量
来源：http://www.xuanzx.com/163phvqljjv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163xufervls.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163nhctxarr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163delgdziy.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wjmxsdrq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tbnmzpmd.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hgpmelfp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163oajemtrn.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163uukcxues.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ssdbhpha.html

[R08] 数值比较
来源：http://www.sxryk.cn/163thaybkeo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163tfxgqoow.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tpwozmvd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ctrrlnje.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163yvempozo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163jbcbmcve.html

[R11] case 多分支
来源：http://www.xuanzx.com/163sypnjonh.html

case "$1" in
来源：http://www.xuanzx.com/163petttipu.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mnwewibb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wopjwqii.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163utgdqzhs.html

esac
来源：http://www.sxryk.cn/163aiefelhn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163shymsels.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163cnjwlwez.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ovewrkoq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163toqqidre.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163whccqrej.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163rjxutjrj.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hpxpqpab.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jbpalxdl.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163iklqplho.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qozjuknp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ubtxsiri.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163oymlbdhc.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163nsrzdlcm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163tuxpozdp.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ymfbypdb.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163lnglemik.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163sfsqkglf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163agudpdtz.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163tiolnqeu.html

echo "${#s}"
来源：http://www.sxryk.cn/163asfatbfo.html

[R22] 截取子串
来源：http://www.xuanzx.com/163uqrqlvgm.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163dmvllfqb.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ggbnupli.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vfbvsbbf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163stulljil.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163oeqakdpx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163rcgbkxlr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163vecddizh.html

[R26] 命令替换
来源：http://www.sxryk.cn/163puzyfhgc.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163kaqyybrh.html

[R27] 算术展开
来源：http://www.sxryk.cn/163wtcjwflx.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ngowajrd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163cslslngw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163twsfetaj.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dztksemy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qmxpmtkb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163uvfgubxg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rlukkekg.html

[R31] 局部变量
来源：http://www.xuanzx.com/163whbhvfdt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163dqkusldk.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163gaqjdapl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163kkvipdsp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163aitroaye.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163rzqeqtec.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vomapdqr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zxuaplxw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gmpntzre.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163okacsltm.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163mjipgxdu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163oitgrinv.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163niyyutya.html

files=$(ls -1)
来源：http://www.xuanzx.com/163wqbkiyic.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lchuvrlq.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ekmgsmhk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163dfbqqxgi.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163shacobpu.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163oguwvrtx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163herrrdzg.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jqynybrc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ybkrcyje.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163iaqdlnoc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ygkfxcvt.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163tcekkqwo.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163wzchwowa.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163rkszjrsb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ogyzvvol.html

[R45] 批量删除
来源：http://www.xuanzx.com/163wgohxygf.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163yfvuyagj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163yoxafcso.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fpmdrmss.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163hgggnjby.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163zimmorhq.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163usquzqeo.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163zzemqutv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163lainrgen.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cykdoawp.html

[R50] awk 求和
来源：http://www.sxryk.cn/163smoslyzp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163uensnsav.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vlphohtm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163oendejbk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163yrzgooxp.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jkbiuwft.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vhbibsrz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163iliuazhx.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163wfgdkidq.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163gafyfpyw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ofjrknkh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163aabtufhg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163yqwzexzp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163twougzif.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163iobivjrw.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163qppprbcp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163olirkrif.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hxczxwql.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163rauufodg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ltlrtzjp.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bwhieohy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163gtrctugr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163paemdcej.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163guyspugf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163oftqthrb.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mlzcbmzo.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163jggwrmtd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ihtnfqea.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ttbtvfzf.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163btpppyds.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163kwuaycbo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163gikkevao.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zhcvgmjs.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163tqdcihee.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163juholuoo.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163zbasfvfv.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163fbnepkjd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jdsfbrke.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mcdxyvsb.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163sfnsopbg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163woptmpli.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163dhumupti.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163acxxfiep.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163rjtrpvmp.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163sarcrxqs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163zlqkumtc.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163raahglja.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163phcysrwe.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ggebjzgu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bgixjbfy.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163hzvfjhhn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zojugnmh.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163lbutcndc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bvndozjc.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ihsqhvmt.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163rsdmfcqt.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vrsquywe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163qbhoxwac.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163xlzarubn.html


<!-- 参考信息 -->