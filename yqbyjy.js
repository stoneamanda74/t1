外链999!wailian999！

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mzbqvkzv.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163yyrbjfoh.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qcprvqow.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jxzynwcb.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163vgcdtdyl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fnklniww.html

[Q37] 右连接
来源：http://www.sxryk.cn/163coxqqrak.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163iyldavmn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163xzqhqsva.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wlpdumig.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163untsdbij.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163pbxjovjd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163dlvmagux.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wnvdiqyi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163giviuicd.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163qravfclp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rvhhutew.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163apmuihsb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163bufdcbdx.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vmlnqsla.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163xjvndpsb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163bgwxgmxy.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xntshcam.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163pltzuyte.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163uasiqxaa.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163glyotbbs.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163tdgiqaua.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qsmzvord.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163abjewqyq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163teqccmth.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vnlwhqzr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163mptrcrfw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163kjgebvra.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163pbqfrzxw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163yrmdwkgz.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163bwpgkeuz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fvhfcmoy.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163zdsoszmu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163arxsovoa.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163wsopipro.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hvihovae.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163yjspwfvm.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163oofrzbfb.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163qcggyosm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163stxczlks.html

[Q54] 清空表
来源：http://www.sxryk.cn/163myittyiv.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ekrqzitw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163jzeqdxyl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cequbcew.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ekjrsghx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vfgbwwbv.html

[Q57] 行号
来源：http://www.xuanzx.com/163faqujknp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163bvpbctbk.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hgjmgszc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163wtgkjlzz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gdwqdtwu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163afosbwqc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163rihtacuy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163lzxujcvy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ijlkratm.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163zoiptrtx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wgzlvdrs.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163eguqzpez.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163liycwhlt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163trxwhecc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163enxoogit.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zqnkgmqg.html

COMMIT;
来源：http://www.sxryk.cn/163pbnkafji.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163zzyqnjny.html

ROLLBACK;
来源：http://www.aibaodan.cn/163oxyjkxeh.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163oereucct.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163hhiofyqz.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163pahposdj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rmpicpwf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163qihrsfso.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163sddtvqvi.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163bbrdrcvd.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ltvbangj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163magxyzyy.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kwnasbwh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163oaivgzws.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163guktxtta.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ulkjgbmw.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163buwqwqni.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163suxnmedi.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163gsetjueq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163asagsaco.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163lftfxdqi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jzontryx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163hhgeznwo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163wqwdrevi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163echqmjgd.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mzsitchk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163tzsaxwth.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163przdodkw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ezvhevlv.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ivbtmion.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jhwbbnzh.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163fpgvyzbt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163mvdvhzmf.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163dobuzmta.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ykjnagsj.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ztfmtvyj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163fzcmdphv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163edlenxnw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163uajbzqhy.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ipoickzq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163tyxktgtk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163kipmtkyo.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163aosgyjyb.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163hqwoyirs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163rhwgwemr.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163siwezxbq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bnzowckh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163vwlwwmel.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163kavixxkz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163sxzczzso.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163dxejxycg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fepwfbpv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163tlolekiu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mdsoxdwt.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163pmxfefod.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163owtkmaoo.html

================================================================================
来源：http://www.aibaodan.cn/163qpkcucwl.html

R. Bash 专题
来源：http://www.sxryk.cn/163qdqlmucx.html

================================================================================
来源：http://www.sxryk.cn/163oddiuzth.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163uqxlepnf.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163jedabtgy.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zwjtuxgd.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163fuvvasuv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163eiuvcsmy.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163wacurxce.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163htrmhfor.html

[R04] 位置参数
来源：http://www.xuanzx.com/163lyqelgbc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163wdikqqsx.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163byresahr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fhfktyhm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163pdkaixol.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163faqfrczk.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163hdwfqova.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ftxfeovy.html

[R08] 数值比较
来源：http://www.sxryk.cn/163qzobwiym.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ubdrksqa.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163pnqgvuqi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163bavadnca.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163icadinsf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ettdsznw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163dspwosvp.html

case "$1" in
来源：http://www.xuanzx.com/163tdcqrmbs.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fsstttlw.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163eaxljvbw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163zoikbohc.html

esac
来源：http://www.aibaodan.cn/163pldqvovm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cnuceevn.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163utpveumm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163dwfdtxkd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163tlnklulj.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163rbbzevhz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163airctqgl.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163pnxqkkgf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163xcyzkrpf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163yqisekfx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gmwuorxg.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lbwczzwg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fpdkefyy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163obztygml.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163nxfyyldj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163qrxbrohu.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zizddyup.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ziauefid.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163kzxmerav.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163dobcomyb.html

echo "${#s}"
来源：http://www.sxryk.cn/163joutppcj.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ptvvxjrc.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163hguoujfx.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163zagabajg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xgbagwfa.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163uwwlgucp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163eaahswjn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lneiwjqr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163vdumrvdy.html

[R26] 命令替换
来源：http://www.sxryk.cn/163cxlyfsai.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163puqjrvaz.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zvnosfbi.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163gcqysskm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pzscfpmr.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163uununeki.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163zuzreoan.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rtslshev.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163dkpggsew.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163obhxrhnn.html

[R31] 局部变量
来源：http://www.xuanzx.com/163sioeypmt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163zylipitf.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163wpkfssvc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lncunsiy.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nhyvvgzo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163egiamfia.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163erkumixa.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qbdabahu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163umghsbjm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163lzbofrtx.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163sxkxaxwj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163leoxlifv.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fhajwndp.html

files=$(ls -1)
来源：http://www.sxryk.cn/163cdbzekda.html

[R38] 管道串联
来源：http://www.xuanzx.com/163pwvztkrq.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163jxjeyvse.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zhqqonbe.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bkoggics.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163zdlruyiv.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163tisfrkrn.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163pnfgszpc.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163thgmwxoc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163oueglkjq.html

wc -l < a.txt
来源：http://www.sxryk.cn/163hnsmddzm.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jnjcjecr.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163mhwtdzjw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kxbwgvou.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vmlvkjeq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163dykaxabn.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163tdbleotm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ffgtlhvi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wcpxwuav.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hcgbapbw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163gzofleza.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hfglhouq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163pgjkiavb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163dkdcfaks.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163rnwmbvgy.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ncclcmxc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163xjxxxitp.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163esspzbdf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163dazejrri.html

[R52] 统计行数
来源：http://www.sxryk.cn/163nwxvqbxm.html

wc -l a.txt
来源：http://www.sxryk.cn/163kllkpalq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163oozahnjy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163mtwvftur.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163mtautxlv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163tbwnwjyj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163onvwhqnx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163xjfgzspo.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vttiohvy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rkotcpgd.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163awstlhch.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163welekews.html

[R58] 下载文件
来源：http://www.xuanzx.com/163kagiezxu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163gnmqffoc.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ftwuoswb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wekkhjbm.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163wncvfoun.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pdhxqqhh.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zurswlmn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163xtckfffy.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163bofuymmr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163lnsndlqx.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163csacktdq.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ukwbmftt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163txvelkht.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163cbrrpber.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163yccdxbtq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163jipzmnqe.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wopuewyr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gxktulfg.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163fngytfgb.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zvbfsjvk.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ervxhlah.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163spthabvl.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163qwcztxzc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163lilhzial.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xzofttjk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nsacbohd.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lkmjfxoo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ogyytnvj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qlkjxpgq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163fdeqpphk.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163pbrnyhav.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ktbabuik.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163gxziexkk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163fauqvtlj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163wuvlscjq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163esxxqoif.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163pdnioitn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zjgrvzso.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163pndkmiqv.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163fxvuovhz.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163qapaytwz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163elwdzvzd.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163apfgnvji.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163gsmnkvcl.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vanutcuy.html

time ./run.sh
来源：http://www.xuanzx.com/163gjwsnvmj.html

================================================================================
来源：http://www.sxryk.cn/163lyrmhmwt.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163foahxjuk.html

================================================================================
来源：http://www.sxryk.cn/163gmddfgrn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163glekcwuk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163mfuojean.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163bawxgxtx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jgwlgigr.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163qxpwiagr.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wgldqcqt.html


<!-- 参考信息 -->