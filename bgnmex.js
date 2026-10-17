外链999!wailian999！

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163hdsfqcmn.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163mbjwakkn.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163calbgvml.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tlxcvfli.html

[Q36] 左连接
来源：http://www.xuanzx.com/163jjpyezcz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xypqbbnb.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163zxjdlswa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bcgxolps.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163uctclvxg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wchwcalb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163tybrgzhc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163bgjkewdf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163khqyikmw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163pxaohngs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163mntwkmln.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163eugqpnbk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163iyuforhl.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163dsuznsux.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163rcbnqtie.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163hoxfmdez.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163nigrmpdu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163hsrasase.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163cofpmghs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hzeksosn.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163edwmdkdm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163tjtplzuc.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163qgjywwvw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ewmytlfa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163uiwthkrv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ixeppcfn.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163bnwxawcf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163qrwbvjks.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ffqcefhf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163dgqwoujm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163lmqzecue.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163zgbicxco.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ryzlguoj.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163huaieerv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vfueetib.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pfxlwnbd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jzrmnhzu.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xfogpzyz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163cktehbaz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163glutwujq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163sqhlagqx.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wdoqzqgk.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163clysharn.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163wyiimcyx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163fpzicdzi.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ktlmeshy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163jappryqs.html

[Q57] 行号
来源：http://www.sxryk.cn/163gljjbrvw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163vygocvrd.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163srjtgrle.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163cyxjtczd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163exwcjjiu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kwkjxdzc.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163yucucqml.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163qbbxpnrl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163wnpatvqy.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jxepwdyf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163enqealin.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fenhgjot.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163utqulpji.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163asyvngbd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163cdeoulez.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tmoxegbw.html

COMMIT;
来源：http://www.aibaodan.cn/163iqgmveml.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163cmhgddus.html

ROLLBACK;
来源：http://www.sxryk.cn/163jobzbbgr.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163lefdfbxy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163sxvuqpqv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163vueltnmk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ytxscvsi.html

[Q68] 保存点
来源：http://www.xuanzx.com/163qdwmdnxn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163alhmyvul.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163oauxiuvl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163dugubjsm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163amdwvtlm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ufsontad.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qprjqrha.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163qmyiblse.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kegcdgxe.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163iaofnfop.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fhjvalzd.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163mkmppjfa.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163rgqijqtb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ejphmhhf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163tblzqkte.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vnbpwgea.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163jkoaokbu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163zqgaupnj.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163jesbucjs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163etqfsiuf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163jvrxqncs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163imykfzpv.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ikerkzut.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163itblvkzz.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fscfukvn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163uwkpglsj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dmduvjud.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163grqnfbsk.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mavasjvj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163brfpftbp.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qjfaivro.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ictzffsg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zngxiomq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163phoqycpi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163prikvubu.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163wamljasc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vjydbwfh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dsiknspx.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ejzfrdmu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wlfjdbfm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163iklyrkel.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163dnixntqo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163gljzdycl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163atypcszs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163xtfeoijo.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163oevubtuv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163oiowjtwb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ncydbffr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mirajfjx.html

================================================================================
来源：http://www.aibaodan.cn/163ozkqtehi.html

R. Bash 专题
来源：http://www.sxryk.cn/163pspidmzs.html

================================================================================
来源：http://www.sxryk.cn/163hmauxcgr.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163exodjmwd.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163lkwnrjuq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163xpecucbc.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163lkqgkcao.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163sbgwuzip.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ipjrncvd.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lyzhrxqt.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ceoxfflp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xakrzaye.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163fztocspl.html

name="${1:-default}"
来源：http://www.sxryk.cn/163jqsxokam.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163jylmornu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mejigvlv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163kibnairg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163hoicckly.html

[R08] 数值比较
来源：http://www.sxryk.cn/163xyzmulxh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xkbxcofg.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163iynoloit.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163upslljwt.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ejwjydyq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163tschocgo.html

[R11] case 多分支
来源：http://www.sxryk.cn/163szhzevye.html

case "$1" in
来源：http://www.sxryk.cn/163gtebofsx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163muqzcejz.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lyniesxd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163yqduzhtc.html

esac
来源：http://www.aibaodan.cn/163ulrnkztz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163foehpgqv.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ihiflxpd.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163vgimqodd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163mhjhdenz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ytmdhbkx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163orphqxay.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uzaazvsx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163dirnppxq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163eckviouw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fsgmtche.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163caxjjqhb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163yllxmedg.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163gpyqxwyj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163soisjuvv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163mqhfjboo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163baerssth.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163shdnzkkh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ebnggcxy.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hoiroygz.html

echo "${#s}"
来源：http://www.xuanzx.com/163ckfuslps.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ujkcvuib.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163cpefhpfl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163atpbaqqz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163soslqsyh.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163aacxxade.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qcardryc.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163szophkje.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163yubgupwx.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zxsbftvb.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ldfbeaio.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ueajqige.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163cbkuvrwf.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kybltxdl.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163xtnaedmz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163nwtrhffj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163czbdtzhp.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163heetkpar.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163llbddane.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ticpxire.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163kgvquwup.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ueqsimzz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wgaxwicn.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163sswhbbkd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163aonkhftp.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163uhpzejpg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hgsmfpxm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163odthuhdt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163kwxtzzeq.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qogavwgk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qeymorju.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163rqrqlupz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vsnjlifh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163uvhswxwb.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163izxyqmld.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163igdzicrw.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163oxqrwuek.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163bunkmfrj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163bludwcoo.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xnwbiule.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163czwyyxso.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ucbeqvak.html

wc -l < a.txt
来源：http://www.xuanzx.com/163fcehpybu.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163oivehnyd.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163duqnkafi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kzgaorew.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fgwlastb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163bztbwkay.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163etjybqhn.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163uaobotmo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rtarkhyp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dccabkql.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kedssbye.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fspmtuaa.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163cwerymik.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163buaconoz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163iekplslu.html

[R50] awk 求和
来源：http://www.xuanzx.com/163dtwuhchi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xnebeytt.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163gdlgvouo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ciflstuf.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vvonukxl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163wosxupym.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xlvojlfy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163tsffihxq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163yhcujwti.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163jmeviaxk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163csjcqorg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163mcvavmoh.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cwnyhtol.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ovdbgssv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163hagtfwbg.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hmnuehcm.html

[R58] 下载文件
来源：http://www.sxryk.cn/163uyndwtzs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oqwrbggn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ivztpijn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163abtcbked.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163djacgfui.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jwkykthy.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gwnfmjbh.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ycwjbwps.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163tnhzydka.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163aipdnqll.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gapvbggz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163muwnyxov.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lohzefnh.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dunqmubi.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163dtcrboro.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dsgkyxdm.html

[R66] 定时任务
来源：http://www.sxryk.cn/163knwacsxv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163gealjjni.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163oghdkadk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163mjpmjiob.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163vxjwecie.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ljpmwfim.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kslvmdae.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163hnwapaml.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ygtnuwja.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ofggabgm.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163cnkvuvor.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ybwyglef.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163outaiflg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163vedexuqd.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zxkrzcxn.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jybdrqeb.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zbirazln.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xpxogmty.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qdhbmnzl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163soevhhix.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163nwtkzfsj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163epezeqbm.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163nvstpoms.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163quostdel.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163whtjujek.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kmsezjzt.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163djpavpuk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163exgqqmrb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kzmacxul.html

time ./run.sh
来源：http://www.sxryk.cn/163wnezfoje.html

================================================================================
来源：http://www.sxryk.cn/163wyqbjrnb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fiezzlyi.html

================================================================================
来源：http://www.xuanzx.com/163qkeuxktn.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163yakggvlv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jawjqxkl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gssyumpk.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163yupeymyq.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163cuycrpdp.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163oxkhrfjd.html


<!-- 参考信息 -->