外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163pbfhnlnw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nkplfmwg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wphpjyar.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163qwbiwweg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bwkcftew.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163aijpipuz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163jjmfeqnu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163oajbdhyt.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163pjqznunv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163rwhdqzfq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163fwncmgew.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163wtzccffz.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163bzxxmito.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163umkbqeza.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163bonztxfb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163trxwzzsr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163snmmyzwg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nedbrxga.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163msqtllmw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163iewimpbo.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163medibnfk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163dnetninl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pjieazer.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tesdzaau.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163nlafmhav.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163xwlunnud.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kgqdpdvk.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163hwahgnxd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163bhgbgxjs.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163orbqilcf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163xqipwlyx.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163aeyknvbc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163muplvlhp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163pkihbhzo.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hfbmlknr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tnuooqum.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163waalzchl.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163cwjgfmwp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163nyftxzez.html

[Q57] 行号
来源：http://www.sxryk.cn/163suomihxn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xuopebbi.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bbniudzk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163txcxarif.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163awybfodk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163thdgzouq.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jmtutqst.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163uurdtdha.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163mgdzpdeb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163jibrgrsa.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163btozlxpn.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163glzrzxni.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uaggqnho.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163hjfcqgmm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dxkpmhdr.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ksjtxkgu.html

COMMIT;
来源：http://www.xuanzx.com/163ghaohxez.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163kfcwmwfc.html

ROLLBACK;
来源：http://www.sxryk.cn/163jeefoqik.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ftxgvtun.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wbaytjya.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163rjbgjtqy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163hpdmzflg.html

[Q68] 保存点
来源：http://www.sxryk.cn/163gzydlxda.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163xqyzrpnf.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kifvfwov.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ntxpnpyo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163nnhhhsth.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163bzpuhtvo.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163uvmtrysk.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163jpjbgvgj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ddjqimpe.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163uwqmnnmk.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wjoaeoey.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zdgaucpn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163bitpcpwd.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163mbidvlml.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163cltnntgc.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ecapwchp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163nfwcdnqd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163oeszvxca.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163nzwzqsft.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163zbykqnkl.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163debfdsxa.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163xibdmvwr.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163iwppbcnq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cgifawul.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ozroeotl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163goppavxz.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163kfikikfn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163unngugav.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lnutavgr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163txonvskr.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ngklqiwr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163yipqnuqp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ysusivpx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163gyygsowf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mkkqtnhl.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fjwbetyu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cxgqznwi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163xwzvcomx.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163khrqcpst.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mbwajqkm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163dmkitrvm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zniejkxv.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163rnalwoyv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163evdribsq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163prevxmzs.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163eqrpcmxn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163odgcvyzd.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163krwlavcz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163jpltsvdt.html

================================================================================
来源：http://www.aibaodan.cn/163minivtkf.html

R. Bash 专题
来源：http://www.xuanzx.com/163xwtltjrm.html

================================================================================
来源：http://www.xuanzx.com/163yirtbhkr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163wgewaocj.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163eozgjtvb.html

set -euo pipefail
来源：http://www.xuanzx.com/163izlnodli.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163zbvvppdc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163mlynczpz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163yypalnhp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pbmonspi.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163cuvbmpfv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163knlboove.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fvdirewg.html

name="${1:-default}"
来源：http://www.sxryk.cn/163bmsjqmgy.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ateuhyzr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xshktirx.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kdbkfnjr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163qqtkmvvn.html

[R08] 数值比较
来源：http://www.sxryk.cn/163usiesxsj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163smqnigre.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gfscvwkm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163poxzxugk.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163xaunxxtb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163dhjfglkp.html

[R11] case 多分支
来源：http://www.xuanzx.com/163lpfokadi.html

case "$1" in
来源：http://www.sxryk.cn/163baxydyub.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163fbnnslzb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163cvnwijlw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xczcazjn.html

esac
来源：http://www.xuanzx.com/163sjxbghah.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163yvbjvehl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rfagvusj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163xptdtsfr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163tcmnbhzi.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163dmivqkgy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163cneocdyt.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163eorxdlqt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rdybcdyo.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rabhypgp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tkpwyyud.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bdxbrufw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163xxxgzomr.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wrwrjqxx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163hkbxrxny.html

[R19] 数组长度
来源：http://www.xuanzx.com/163acpbtoti.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163rnrsnoui.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ywxecaby.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vwnshuvc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hvywimwp.html

echo "${#s}"
来源：http://www.xuanzx.com/163bzmkglkp.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xowlhmsw.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163yiwcmize.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tektpxyh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163edkqphfy.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163mkooiuxi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163cfsnsyeb.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163shqnfggb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163lbbjpesu.html

[R26] 命令替换
来源：http://www.xuanzx.com/163qulwlxfs.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163dytsjpsv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163eutkrctj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ljsoxhpg.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163qvnnklep.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163asnvfofu.html

[R29] 定义函数
来源：http://www.sxryk.cn/163kkunwuqt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163hmqegdxk.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gvmakwwv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tpaatljl.html

[R31] 局部变量
来源：http://www.xuanzx.com/163adneebmd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vfozaxhu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fyjussnq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163hbzgwkct.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jyzdyqja.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163jgkhcepu.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163kwlrvsyx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rygyerat.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xavxyozm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163sboqvlmx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163nygkcfla.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163tenjsjiv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ohsdcpvt.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nfukdnrm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jsqdytxu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163gdlfuyey.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163fvcdyiai.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163vzylimcr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163lkysxlaz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163amzbiwcm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ndsdptqt.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fvpgmutl.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163gptcqtkh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163boczzitt.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zwztuexb.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163gpwbchhw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163cpycxcdu.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163grrdbkyt.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163pqdunedh.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ztwamvas.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163dddtvgqa.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163voaaqvio.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163snxxyron.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163mibwpgbe.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ppsahrpe.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163phzpbiic.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mxbjecko.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163sjpllafn.html

[R50] awk 求和
来源：http://www.xuanzx.com/163gjiisjdt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163uwxkyipt.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fkmmkiuj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163okreyofr.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163dlqfszgy.html

wc -l a.txt
来源：http://www.xuanzx.com/163kkbcorvx.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xvfcapwq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hmprenlg.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zjscilsx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163tmogyiif.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mkgxnrls.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ssfowbmn.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163olhncvqe.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163yhpndztr.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zsaipsia.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ulunsabw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163eghdtmru.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163uvycmpkx.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163vabkymmu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163lltedpsj.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163eusfxeyb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163xmqnqyoi.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163twzuzyll.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163olomjhnf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163xixsttoz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163aorcptjy.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163iwnoychn.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163tpcdcyly.html

[R64] 结束进程
来源：http://www.xuanzx.com/163oractjng.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163pdecfxgo.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163nrlafhsg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163pauvzztx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zufaprkb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163nyewcbib.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dxmhmcks.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163hejfnobf.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163oyumttix.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zkuijdwg.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ghqvfult.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jihqscym.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163wumqdlzw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zqrbygep.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163argikibx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rwoakpws.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nnivetzy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163komraghl.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dxzmfcou.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163jvgpwhye.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163kwwqhppq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163edslphwv.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163uzxogwxu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ihsvvhny.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163duspvhtk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163sjvptyuq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163qngiuvkq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gihswjvu.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hctrjrfp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wtgwmxok.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163njcjmzga.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163urnerpif.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163qiebixdv.html

time ./run.sh
来源：http://www.xuanzx.com/163aqshrrga.html

================================================================================
来源：http://www.aibaodan.cn/163xvagbznk.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163hdnzsrwk.html

================================================================================
来源：http://www.xuanzx.com/163ttpdfkqb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163xlrswnue.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mmiqrsiu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163budpxckx.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163kjvpczaw.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163gfndnkhp.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163mjpgnbfm.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163tetnllrf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163evarcrle.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jfivridb.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xixhswes.html

strlen(s)
来源：http://www.xuanzx.com/163bsvirmko.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ffryvien.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gajfjqri.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ilflyovu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ugeoqlny.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163nwixwfbv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163posarvtu.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lnydwqde.html


<!-- 参考信息 -->