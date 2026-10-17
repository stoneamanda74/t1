外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163owobheqo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163hyymuvlz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163tktqivsx.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163azzcqseh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163epkzakji.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163usuvpibw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mjtlqncd.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zirjaqfx.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163frvmvgyx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163tdeqqjsy.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hvysikuz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xlkzosdb.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zgimpizv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163pvzadhsd.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163dfstgscb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vylcnqrs.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163jqpujrui.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163mxvjuwix.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ikestvqg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163aklsyhwm.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ivsknyym.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163nbhxjxir.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163urihqncm.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ylsmtvss.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163mslkzzqi.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163cirauskl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tdzasezp.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163smfiktni.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163owpqcxdp.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rggltdeh.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lnutnbvr.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163lkjhelhy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163rqvsnmiq.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ozbvpuom.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hnpvukoi.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163egxlqbyq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wypmdpdv.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163iuuxhkko.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163sdungmov.html

[Q57] 行号
来源：http://www.sxryk.cn/163amhabtee.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yyjhvpxh.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qclqusor.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163rdbgeivu.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163mwgcvbqo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163puelafqn.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163sviqhhux.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163xkedgctj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jxyftszl.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163fqyigykv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mqjdpmib.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bjzlosuj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wehkmjaf.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163fmkztbyr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163jdjntled.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163mtjqamgk.html

COMMIT;
来源：http://www.xuanzx.com/163xrtipfmb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163fvntrbdj.html

ROLLBACK;
来源：http://www.xuanzx.com/163cybcwvoc.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163hlrchvsj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163wjypkzom.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163rsapnpnt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ripnzzkl.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kxwuguoj.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xrtpulzz.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ayxjjajc.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ivunnceu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tlngyrax.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163tpgjebcr.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vuvfsocf.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163qianokqk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163beqthzcw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xsdwukjn.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163zsrgvdzp.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163lpzvdshv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163brkvrqbw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163haadolan.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163oeadlhfl.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163vzbaeeca.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163cqubkuyz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xvfoymgb.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163qtranjxk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163myywkyzf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rpuegecg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rlokuxns.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163mzhpmhzt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qfvcleik.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163exkpgppy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163yjqeebch.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163fubaihhd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163mkrlsiiw.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163lhqoiszn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163hizdiifx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163syehczxp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163fylioauy.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163fxvgonap.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163simmwdsp.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163blwmafvp.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163zvhzafyl.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163xbufowmp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163wajrxhhq.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163truhxyvv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163djmukzsg.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163fuxgenil.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xrskcyqz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163wmsqevnd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163glbnhjpq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163zeftiptz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163suaooqxf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163sfkrpzje.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ygpfzdia.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163cjbqelrz.html

================================================================================
来源：http://www.sxryk.cn/163nnrtybhv.html

R. Bash 专题
来源：http://www.xuanzx.com/163vaiinbkr.html

================================================================================
来源：http://www.xuanzx.com/163tnaegcxp.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163olmomosx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gwdcjlyb.html

set -euo pipefail
来源：http://www.xuanzx.com/163cyceomvt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ngstmpmy.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163qkaxdjym.html

[R03] 只读变量
来源：http://www.sxryk.cn/163fegsehcn.html

readonly PI=3.14
来源：http://www.sxryk.cn/163rjoxyzmj.html

[R04] 位置参数
来源：http://www.xuanzx.com/163lfjaxpji.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163eheahkjw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163qsfrtnqn.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fohgumef.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163adxcvpji.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163zovoiefo.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163cjxuhrgp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163cewqparu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163kjxhkwoa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mesuplek.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163aprlnbzb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xhrtjksr.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jmghdtaq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163zyzdhnaz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qecvswez.html

case "$1" in
来源：http://www.sxryk.cn/163ltvdlihf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163kvzfcpic.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163jucrxtmq.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ggdyuuuo.html

esac
来源：http://www.xuanzx.com/163wjwsvfpe.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163wjttkcyt.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163cjfdssij.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163giwfpqbx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vlruggoz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163uumdaqhp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163jpgwywdh.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163rayzzmnq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163baqmrgya.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lhnbsfor.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163okvfulsv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163omoevagr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163dxmgdzif.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ewaihtcw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163lkvdunst.html

[R19] 数组长度
来源：http://www.xuanzx.com/163iioiihqr.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cgwhseto.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qpltlhrk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163tfzlragy.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163uueydcim.html

echo "${#s}"
来源：http://www.xuanzx.com/163hzseptid.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vmcnzqyg.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163liyhagsf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ptyamxen.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lahrctan.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rzbttdoy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zzyrckeu.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163anmeccyx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qvumxoer.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gtydrudu.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163cmzojhdd.html

[R27] 算术展开
来源：http://www.xuanzx.com/163pdnrukdk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163meyxuewq.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163beybtqoh.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rzagqgml.html

[R29] 定义函数
来源：http://www.xuanzx.com/163defzqxgj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163brfddraf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gcfpdesp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163elvlouee.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dqmychoy.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163powwcpxu.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163hcdpvilk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163mdctxotg.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xpieuitb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xqbhthrp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163wpqkgsvv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163llhjoshf.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jkkzrudm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163suxxlobx.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163uimrhhus.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163krxeftte.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163gzmnhlqk.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163uvmkunvr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163bdddyomf.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pfcobrdf.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163khkziayb.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163xamasgtg.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163mstaaxru.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ihdcdsnb.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163aojrxbld.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xyhhuuik.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vqpaaazv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163obwrxqaz.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163fbrckfgr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qauzcrka.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163iohyqqxw.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163keatjith.html

[R45] 批量删除
来源：http://www.sxryk.cn/163pcnitfwz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163wegxxcdd.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pxqvyxyw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163jhxhddrz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163zswrchcr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163mqotnfds.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mkibeufl.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163llhhaskl.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163iwcyudsv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163suzxnqas.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ljfavexh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163dlrocphw.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dnvchvno.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jrjfynzw.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xiihpmrm.html

wc -l a.txt
来源：http://www.xuanzx.com/163nqvzgefe.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kkatdxkv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163msjiiopm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lyadzoiw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163gdrlrxbu.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163wiwjnfjf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163aceyrggw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163jlfpfwpv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jfzpwhuv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163okzlegpk.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163okamscnn.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rxkgutbe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ptsxbhcx.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163edkrbqyw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163gfovfhfh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163krahiitr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163tjhysfzy.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163wpqfkoxp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163blzduvfl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ndzavxmc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163dwyrjjgv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163fiowjhvq.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163sagrrxtj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cxmsoswy.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qpjrjgdx.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bwrkhpyp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163yudjnclw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163opwxisbl.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qrkldvtk.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163akntzglx.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163whnwqnim.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ehiswwog.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163itkyzvcy.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mphxsovx.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163bujfmepj.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163fukgbvwp.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163nmaenlxp.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163brdornci.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ojrtqncx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ucoiwrwh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163amexyevw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dknmfnhr.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163oxdckema.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lqzgbkse.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163whcrlyiw.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163dhjwleiz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163cbilfdbj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163uxjexqdd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pcrsdskx.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163btehaswb.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163eiaiocnw.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163qdmkbqxe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163pximkgxf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163nhylckem.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wcueojhc.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kawfldln.html

time ./run.sh
来源：http://www.sxryk.cn/163zhjtsywo.html

================================================================================
来源：http://www.sxryk.cn/163bnlzycxl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hteklkxq.html

================================================================================
来源：http://www.aibaodan.cn/163oxhownui.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163lhywzfib.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ecloawvt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163pbesznex.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163hxtvfrjf.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tfbzsbqz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qqtgfrrl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163rhlgfeml.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xizfpufp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163vsmevrqs.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163lsdlmvnb.html

strlen(s)
来源：http://www.sxryk.cn/163geomipsb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ujzflbir.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ejeehqtm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fgydwgve.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163tiynnqiy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163cyqxbjvx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163eohnnpah.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163gdomztgy.html


<!-- 参考信息 -->