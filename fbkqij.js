外链999!wailian999！

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163cjbwoezg.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fmgvkjar.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163cwnarumj.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qhwxzljn.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163fldmrfho.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163dhckaqxe.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zlmateya.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ohuezvhc.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163tiopcpxr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jrnylapm.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163pahjmzgf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163srpmhdze.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163siujxmdp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163csvtlupo.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163hgvbwyoz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jsuahivy.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163nwulxzxp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163uvbgojwi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163lftobeda.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163fyxdwrsz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vogrpsos.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ejyhmfcf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163bybqmgjw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wiocxrdv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163paanyiha.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163azdxsebs.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lkckhtpe.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163sfuexqeb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163cinpbspt.html

[Q54] 清空表
来源：http://www.xuanzx.com/163xnkpjuug.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fdpikorj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163dxfoekvj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163fpbxgljz.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163dloqoknb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ukwzfbez.html

[Q57] 行号
来源：http://www.aibaodan.cn/163qlxeordv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163yrqfhbzg.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fdkihygf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163wowtbmru.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qwgmvmhl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xjkbubca.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ozbumrfb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mbkizszr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163kjurobei.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163tgvhmfph.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jwwrrvhs.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163dofaajcj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vstyibkl.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163tyigkdcj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hdzdzeqp.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163fdeiqiep.html

COMMIT;
来源：http://www.sxryk.cn/163hqdxuqmt.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163jxezenhk.html

ROLLBACK;
来源：http://www.sxryk.cn/163izqeklib.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163fewybwyk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163klwxmtrh.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163rvaauoyg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ygfzfgvy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163zhzprdhd.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163uebtvziu.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kylucvgu.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163afywascv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tuewdzrh.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163uribsihx.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163dkfgxfvw.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163iteppcsh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163tbezydra.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163kyvmnttf.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163brfdfuvz.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163akdzedkx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xelgxozz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163swslzyag.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163gbhadzwk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pvzgxjuk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163pahqaief.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uwjxpqee.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163khzponxn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163qrnofowr.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jytmpwol.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163bcwkqqzq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163rgdysphr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163mqcvpdze.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ryoqmjwu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163jsjeamja.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163hzodfloo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163latogzso.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163otsmiiqh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163nqobedzi.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fyvcwbso.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163sqbtpdxk.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163imqanfhz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163taoqjlzq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163cauhumya.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ynogardt.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163auowxavz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lvjsbfeg.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163rjpnuynb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163osqcqobg.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163okxvafxm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mumzrhiu.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ngatdxtr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163dopadqxi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163okifbdne.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163gkfvdcdz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163urqdczna.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163femgrgak.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vzkpickx.html

================================================================================
来源：http://www.sxryk.cn/163ccmoixmq.html

R. Bash 专题
来源：http://www.aibaodan.cn/163tggdyiup.html

================================================================================
来源：http://www.aibaodan.cn/163aizfqlfm.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bccbbulf.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jhobaswr.html

set -euo pipefail
来源：http://www.xuanzx.com/163hqphlbiy.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xgazanqa.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vmnqqpfn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163zudikhdn.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pqkxklpu.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rovklppg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jyshmmla.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jlqfjagi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163vjkdjcke.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163bmxvouwp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163hbhgieji.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163umpeuxkq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163uolvjlxs.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qukmqdrd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163zpeclpdp.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163fxyzultp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163zeeuoaky.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163cxsihdns.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163hiozggia.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vfwpipdv.html

case "$1" in
来源：http://www.aibaodan.cn/163jbvihbdb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lphmblvf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ienrepke.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wvkyscrd.html

esac
来源：http://www.xuanzx.com/163nleofqyf.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163zgwsnxga.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163fzvfarpe.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gbecfuqy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163jmdavuzp.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163wlqeuqwi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163inbwrgyi.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163yimiahzk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163itmgbtdv.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163bzxizhhe.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wgpqettj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ekzoaxre.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163bwqypjwb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lexuuces.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163txbqrwvl.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163sjpfrtpc.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163yfifuutk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jfcyuebz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163jdgpjbkc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163rrmgyoxa.html

echo "${#s}"
来源：http://www.xuanzx.com/163gqdxyjts.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zsquboby.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163vnoiqggn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xbfoclan.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163zjnryejw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163mzondcki.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163sqozxguw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ndcbhrpn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163rvsvovhc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163pyijzgkj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163nrabbftl.html

[R27] 算术展开
来源：http://www.xuanzx.com/163rgetqbhi.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lwhdvtxs.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163waxwldeh.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163lfgsimgy.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ycuvrxrb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163alwyxicb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163mbnuohik.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xppnqfix.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163brbigquq.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163yrvaehyd.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163pdqqaunu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163oqrbaets.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163nvcxnpng.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163glwvcsvg.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ixgegvwe.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ursdhdjk.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163nsjvgyey.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163astsutrl.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163cpbgoqew.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pjaoeqot.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mgrqazeq.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163hnicpvdv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bpekiies.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163opxdjrpu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vhdfwfhx.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163toeqtrrp.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163szpqwnmf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kkbpdrfm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ajvawxtw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ujbiqtry.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163upygpedw.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163yrqhmvap.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163eugxazgi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163sfpgvbmb.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rchphlnz.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rzddgakr.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163hldofvhs.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163zhioukes.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163tfaslmnw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jawfezvq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163suxoffmw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163qlpresow.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yqwjpuky.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163cvvkrprd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dscnitgl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163potctvzt.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uzjnjjej.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xjhpsziv.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163sjahxmyw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pwvevfqe.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mlavcsum.html

wc -l a.txt
来源：http://www.xuanzx.com/163qotbzafl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163btogaetz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163hgsyvjum.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163tlqpgbjm.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jobmwqxn.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163fzhlhxsp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163lmznymwh.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163anznnbsp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163uugtgvzc.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xkigyphu.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163otoxxldq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163iqhqqppu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hrfhxwoa.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163fbqjfoyk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163cdendvtp.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163lxfopnjr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ithkuuuq.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163eaigzduw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163cusfongv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163fgupbtts.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163wyufikjc.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163knyorvgx.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163xnsyqson.html

[R64] 结束进程
来源：http://www.sxryk.cn/163oskqomoq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ajnmepxm.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mrnzerxb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163prjxdpis.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163taluntbb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163itfufxlt.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163izjptbdy.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qhnxnfcu.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ntuqxwfi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163sboxbhfz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163trbrppfb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gwqeqagb.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ryreftri.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163dsoanllh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163taegqeso.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163mgeupayf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ivichxme.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163cayzewjx.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xaisybgp.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dpzclxhv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rhbjweww.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ljbutuyr.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163foeuykde.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163pdfdirbq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163offviyzl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yneffuxb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163pponmlmf.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xrqtjsid.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hwuvmxzn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fugxewrf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163eouxxgbl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xdqrijcn.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163qgmuhyrf.html

time ./run.sh
来源：http://www.sxryk.cn/163vljjnbfm.html

================================================================================
来源：http://www.aibaodan.cn/163admevsbh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163vtklujtc.html

================================================================================
来源：http://www.aibaodan.cn/163njowsdtb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ukchqpnr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163iuqoyhej.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163zfamdwbi.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ssleibzk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163asiiqcfd.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163gtttgjeb.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163fjhskfni.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ceoefvkm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163eeixipeo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ainvehhr.html

strlen(s)
来源：http://www.sxryk.cn/163gnimwleg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163maisivmk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jylecawq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dbvtkohi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163plykjuee.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163usjopfto.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ecqdtsma.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163dydpwgrf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ksqakbsj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163jmmsyvss.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163wpqtobuy.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163groawccx.html


<!-- 参考信息 -->