外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163kpsrbhjy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vvwnyxbl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163agidevqz.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hpodzfxl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163icztvuwb.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163owvrbkbt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ebuiyjft.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163qfbzurdv.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163cpchnlrt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163adlvfvqr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163aohyivye.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ngxdvvws.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163jdeopzwj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163eyymdhop.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ewbgtqwx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163olnyrefp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163zfpakxtd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kqqubaen.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163pejzjtpe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qmmsaymd.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163aveyugsm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163pdwzpscx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163zhsvixjq.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163kuwnobin.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163axlyvybj.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163thcyfjar.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dpyxjbpn.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ztheglwx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163qtidrsax.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163oxtwfjwd.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163fvzpxvva.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163jqawxqsz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163fkycvmnw.html

[Q54] 清空表
来源：http://www.sxryk.cn/163cmnxfbgx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163fijubouv.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163nddihyzu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163pacclczo.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163datidzkn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wvxnkyug.html

[Q57] 行号
来源：http://www.sxryk.cn/163cqarrkju.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163awnzndja.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pabtvttu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163qtanmghl.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163dywqrnoh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zppiiffg.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163rdtnvmdh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163vhyciuor.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163avnhowjh.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ewjqjdei.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qweyzinw.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163yelcrgqr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mpblzutj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163qljatvsn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wvjzkgui.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163kiikmtnv.html

COMMIT;
来源：http://www.sxryk.cn/163clmiwcnl.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wbdeeyvs.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vqznewsu.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163qapjgpmx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163jdezovaz.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163epxycufp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dgrwhywa.html

[Q68] 保存点
来源：http://www.sxryk.cn/163kqdsgavn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qnfvtzyp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163zddwlljg.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ongshgzo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cehaicld.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163oytngrhp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lyumaimg.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163wwzinuah.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163nmkzkhnx.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163fmxxxvtm.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163habocpdd.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163grdgxsjm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kuvbebyt.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163nrxqstsz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163khyunfcq.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163bjukjysw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163rqlbganp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163lmlvtqrj.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ubkyudkf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ddnhacpa.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163szkmtuck.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163nkzidtkb.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163rbaiubch.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qclyckmf.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ntjwtxri.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ssdgmvqs.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163fmujxlpm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163uehpmjww.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ctermwad.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dapiqigi.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163scgaicmc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163cvkjcixo.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163gidjwuhf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163jzsrkebk.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163zaiealkr.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163aazhhgap.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163riuwjtwn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163qtnlwwdf.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vfdpwkxo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163rvdjufmm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163frlhxais.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ijbhgxgj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ppiurcol.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jiymolef.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vtmupbqy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bueeqszw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163eqtayrqq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163brrhwiqk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rerjoemy.html

================================================================================
来源：http://www.aibaodan.cn/163gmmhzzyn.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fqmesmdj.html

================================================================================
来源：http://www.sxryk.cn/163xbgeryxu.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163wtukpuem.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163yaxkckkr.html

set -euo pipefail
来源：http://www.aibaodan.cn/163jcfbovde.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163zrqfjygr.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vbruscjy.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mbddfbri.html

readonly PI=3.14
来源：http://www.sxryk.cn/163jovcwxvh.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rpmvgqus.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ascexwxt.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ntgkcagq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fwqaugtb.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163afjmspzq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163poncdxza.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163cxnduqma.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163lnotencm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fnbzxfvj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163tuxoniqe.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hqebocuy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163bifscgvw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163xqdjaeay.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163moshwhjz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tzftbulq.html

case "$1" in
来源：http://www.aibaodan.cn/163muwklklm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163sqkhaebv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163sxddlbmd.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163nmvwzuox.html

esac
来源：http://www.xuanzx.com/163nzsfollm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ufsojtsb.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ysbuhjbn.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163qhfjjtwl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163bcapawdy.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zcxqgvmu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163aerlubku.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163zedfzthq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163axcaeape.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163wzxrnlfx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163gcbgcykc.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163lcffybau.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163aunhjopa.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ordfiqpb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163jqijgfow.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163aduczxnm.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163uusgjrps.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163yuquuzwh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nppchuqu.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163lhqwjqkd.html

echo "${#s}"
来源：http://www.xuanzx.com/163wwkcnkkb.html

[R22] 截取子串
来源：http://www.sxryk.cn/163buwssksa.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mozkpkin.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163alvqvbmd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163kpnhcoew.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163vupcunyj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163yutcfiez.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163affzytte.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163tbcrcnco.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163pgyxaytr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ntwxzbzb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163iaktwmvv.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163hxrnlcnj.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163cikmoxqw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163qpujpmjk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wmwdzaoq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163mnsrsmbz.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163znlnywhl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163doscbemc.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163obyjlyfk.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163gdpwnuxs.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163xmqhmdlb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163naaimznq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163xgsosgsr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163wdlihvsm.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vxhpblyp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163eouaukeo.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gqszkoon.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xcpqjnuc.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ylroayij.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wsuvrekw.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163gxavlwpb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163gjflipmb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163bmjuvuov.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qhdtbmho.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163wvbpikoh.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163gqqhkpwf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bnmqjazc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dwauktgq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163sslubzzo.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163rxkkpdzs.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163otpdriek.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zbxngzfh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yperuywx.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ecayfemv.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163rgnnenif.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zkllrrsp.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qkzrfpic.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163nsvxlkec.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163bzvqgxdm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163yfqyktqt.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ieylrmtk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163owvbelpy.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163gdzsvoxp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163xowetdpd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ljhosrsm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163jebiuanr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163hyjoinsj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163pdauweyv.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ghwalhza.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163psuhamsp.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ehikbliq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163orubexgr.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163wxrlwwrc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163riigeklv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163olrrapco.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ayxebmfr.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vleqliqx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jsisvxfa.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163fvevqudt.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qmctnppn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163fdruwjeb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163wylurdzj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ljlmtbdp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163cyjczxcj.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163dwjsrify.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hnruruwl.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163kkpqmxkx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fbflhmxs.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163jmsfudik.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ubqvubgn.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lzbxybsk.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163qzxbvgrs.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163arjthods.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163iwtxvphd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163evqqcxcl.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163crwposjb.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163imxcjahw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ldkfglnf.html

[R66] 定时任务
来源：http://www.sxryk.cn/163cordwock.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rvrytjya.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163tkbmiagl.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163kedoinxa.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163xbopznjr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163mimsbcuc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163dcxujxbe.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163hhyaeeas.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163zdoewjnc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ckxvckcd.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163wprttkok.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163uxeiuosg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163iylmhrez.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lhbrbrpa.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fhxwtgsr.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cmiklfdw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wjdndjxa.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163gewwhdpa.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163yiqynfdk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163fvvmgcih.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163zfupiyiw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fkhapyvh.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163hlqhjncq.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kmfqvcfd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163pvjedlgv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163zycubbpn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163phypqopq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163jgyvkmtp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163sdzmypuc.html

time ./run.sh
来源：http://www.aibaodan.cn/163zyqrjeek.html

================================================================================
来源：http://www.aibaodan.cn/163ljkbvsgm.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163cmlegrmg.html

================================================================================
来源：http://www.aibaodan.cn/163hegwplzh.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kdgsioxo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163smvslvhd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gwujjryd.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163rnjubovx.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163lwmwvyqj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163fgxbnaie.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bigolsxm.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163phqniinx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163drcqsnlk.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163krtphnyy.html

strlen(s)
来源：http://www.aibaodan.cn/163awoocdgq.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cqhcxrbk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163dipufupe.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bkdwvznc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163auennwlx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hrbgmjij.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163vairscvf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163idwmoupj.html


<!-- 参考信息 -->