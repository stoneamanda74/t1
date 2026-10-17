外链999!wailian999！

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163otyyozmp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163fxzuniyf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wbcjpocy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163moeowaip.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163hgznkdsh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163yridhaqi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163wjqzpusp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163coajmvjx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163sezjffyt.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mgzxrxvt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fpplrbej.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163pxqmvvzu.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163hmoxwroh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pgoasiwq.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163vfxkyssx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163dthcendv.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hbdumujy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ugtsvpbs.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163augfdvji.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163byersqhu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163cjhtwmln.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163daefcixh.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ydhqvmqv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ssrnhmip.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163noqvpimi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163bdvcmiua.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fkranwce.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gezyztgz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163fzevxhfe.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163lpfwjmqw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dvyhqnys.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163vcyestue.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163tymqqder.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163csgldhue.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163qmrosjpf.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vxwplmgh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163zplnvupv.html

[Q54] 清空表
来源：http://www.sxryk.cn/163aouliaoi.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163geuodamd.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163qegnezzp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163pauthngk.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163kfhsfyil.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hhrcsmgl.html

[Q57] 行号
来源：http://www.sxryk.cn/163stjkrlyz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163exeyurkb.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bvjyvrnm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163dbryfrcj.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163snwhjvjh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163aztjiolc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163jhicqrnt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163otlmrlfy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163gdtfjigp.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163hrwfvgxq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163rpvkbdkn.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163qrprbxzf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pwalnqio.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163sznlvulc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hbhukkls.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zznwnwee.html

COMMIT;
来源：http://www.sxryk.cn/163bvkcwulh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163umldqchs.html

ROLLBACK;
来源：http://www.xuanzx.com/163ffrxplrf.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163pceroaiy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163iohefile.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163usqqusoh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163iwnnwcky.html

[Q68] 保存点
来源：http://www.sxryk.cn/163cbvveydd.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163owvypfqn.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163hyfvejou.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163uqvrdqkq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ijagcelc.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zfzgjkqu.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163zxrhrvho.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163oxcxipof.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163bwfgsngt.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lkilxxar.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ferxjkgk.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163kgpkzqiw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163pglrbhpn.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zyixoxkr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163jvbvvwpk.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bsyajkkp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163uklssqsz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zowrqivn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163yydddtla.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rjdrldmf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163zosbirhe.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163uvdilygv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163tfsifgbw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163iajvvtgj.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163gzfvgxrp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qgcldmfr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163qqrabkps.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163aqgabqbw.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163suypqhtk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jxibetis.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fsyylhvm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163uncvwqnv.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163yloxrazo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163meykqfan.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vecmxwvt.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163cwolfvwo.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zhzrvvbq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163xhnmxleb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163bduwenwf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163lvqglhao.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pzasjkuf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163yfbfrnrf.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xelkwkwq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163giayujqq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qjmhfqpq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163uuehskjk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ladscnsn.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163eqxpxvge.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ijihyuao.html

================================================================================
来源：http://www.sxryk.cn/163gcctlhwd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163sberrook.html

================================================================================
来源：http://www.sxryk.cn/163xvfkisio.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kpivhcod.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163cgbizolg.html

set -euo pipefail
来源：http://www.xuanzx.com/163lusptnql.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163sduqdocw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163pghuwhce.html

[R03] 只读变量
来源：http://www.xuanzx.com/163usahyldj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qblupfao.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ogzvjqyu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163esuiirbj.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163bbkbnana.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ibjjrxxl.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sqyuhhmw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jyfiwdxb.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163cdqonasy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163brszhgvv.html

[R08] 数值比较
来源：http://www.xuanzx.com/163pwsifxnj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pcckuhpf.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163nqskbujp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xpyvonod.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163dznptrct.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jfvxsslv.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163awzalimi.html

case "$1" in
来源：http://www.xuanzx.com/163mjlnvqin.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163hkhuavzd.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163mamvzrns.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qnuusvde.html

esac
来源：http://www.xuanzx.com/163fgwgvtuv.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163bphzqzmj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vvbbrqev.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163hchcgqnp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163esapvakb.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163dunkkqti.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gsczttpm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163lmgjfjvu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163bfejlubv.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163smrbbhng.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163blhmqiuk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163wojeszdt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163tiwmevyl.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163rvrfwzaw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163fnwzywmx.html

[R19] 数组长度
来源：http://www.xuanzx.com/163dvkhydoz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163qzishwdn.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hexlduyn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qhmkwuku.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163dahmuehb.html

echo "${#s}"
来源：http://www.sxryk.cn/163temygaho.html

[R22] 截取子串
来源：http://www.sxryk.cn/163joyfqzva.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163lrwisnvv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163hjluvdrp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rqpndrrd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163lowahzhl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ybpwzzzl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163zmwglghl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163xakwnwxt.html

[R26] 命令替换
来源：http://www.sxryk.cn/163kgfsdgsc.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rqvcojfa.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fbmamece.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163kmuctkom.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163iienetsv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163czumvdzf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163iwlkiarq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ktuhgxqs.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163fuogwjqg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163peaahozu.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163atywzfki.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163dgkauzbn.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163aoscrifc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163btwmuafr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xwdzdfac.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163uuananrq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163amsvulbu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lwizcvim.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163mkfloexz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163sbpepshe.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163odoecayh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163aryciwls.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163uxmjudvf.html

files=$(ls -1)
来源：http://www.sxryk.cn/163gnabvnmg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pscsnjrd.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163iqwvdevi.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163mzygtoch.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163vdwaasjg.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gvofzdbu.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qezqfnnj.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gvsnqsse.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wjmzgtdd.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163cgudpvfe.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163iwdqhwdz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163imnupkzq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163rlzkzmrl.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ysqjxaax.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ckgqyuvm.html

[R45] 批量删除
来源：http://www.sxryk.cn/163gtourulj.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163zbdtcqpc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163qdynvtng.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qjpvnmph.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xnkkkuyg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163czluzztm.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ktqofpnr.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mafybboc.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163syrbjzxy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ntdllpkv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163repqsjta.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163mvlrlvki.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ivnzjjmq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163rhlswruk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163kzryzwch.html

wc -l a.txt
来源：http://www.sxryk.cn/163taisyjwj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163jcsmslmj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ybhjdkoe.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163urclctjg.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hdmvsrvk.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163etkkxtnn.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163czqlcpvv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163mchbvyrh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163iemxsabt.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163nbrddbks.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lrcfzbzp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163mwuiuhog.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jdubvnjl.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ebodefhv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wkwgkgnq.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163pmmietbx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163enspggbk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163lgcefbsf.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163qjohgkby.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163cyqiipgm.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163abygamia.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ifkarjsf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163uhoschlw.html

[R64] 结束进程
来源：http://www.sxryk.cn/163iofmlrxe.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163irslrigy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ttzfcleq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163fxnbwdwv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163fbjqupra.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163qmnrevmu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wpatcqkl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jsotcdmo.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rrkaxvja.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163thxacqbt.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163bhlhiwsx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163digyhnik.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ibfdtcbz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lzsbjsrg.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163xdrjlgkd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gfubdctb.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163efvyqimq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xxjbdwov.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ruhnfqvn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qcmnjymf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lwpfhmwy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163hgaukelv.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163jagggcfy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163laeyczsf.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163nrslrjjo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qxojioui.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163apfewtdv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163elrferfo.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dvxpuafx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163rzhtuumz.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163avhzrbxr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kpdvxarg.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163jcuiunvb.html

time ./run.sh
来源：http://www.aibaodan.cn/163hkhlplfz.html

================================================================================
来源：http://www.xuanzx.com/163gbetwetw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163riakawew.html

================================================================================
来源：http://www.xuanzx.com/163zqzxuizt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163obboahtm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163vxpquowj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163pgeovwkn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163acrnbfom.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163nzwmlsso.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hrdwakby.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gtkoxqaw.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163saozdbfz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163imbzesmb.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163npuwcdkx.html

strlen(s)
来源：http://www.aibaodan.cn/163fgxoymbq.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qxtrbcbt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ezezrbba.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163sqihxket.html


<!-- 参考信息 -->