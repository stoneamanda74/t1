外链999!wailian999！

[Q44] IN 子查询
来源：http://www.xuanzx.com/163jhhuvfrg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163esxhrimh.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nzdkkcbi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163reydwhei.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yrjkobfi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ezphydbl.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163lgkskkkf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ifyiooek.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xdyhotlm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163dudwygka.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wuhfgmgp.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163bwgdoppa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qxiysehh.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ospaorpr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163dkcdrvny.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163qxjktggd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163xvbhqdsz.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163uywxumif.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163bpibjngo.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163igtvbwxw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dugrabru.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ltkrakkn.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163dyoouglj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163fhgoferu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gmdnhwlg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163wcuuyqpm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163bhdesdoi.html

[Q57] 行号
来源：http://www.sxryk.cn/163acxxoyzc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xegcznka.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163kkfgemqw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163vrhguadx.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163cevmwyxf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ftpeiwey.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163eozcrzft.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163twbpezux.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dfvhfudb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ozkecutz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lbmgrdei.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163pqwygttr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qrdqbohy.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163umycjhvt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163elsjlgxb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163piycynge.html

COMMIT;
来源：http://www.sxryk.cn/163izmnxvft.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163pifyaohd.html

ROLLBACK;
来源：http://www.xuanzx.com/163ctqcoshq.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163asherggx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163dlbpkmds.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163fjtwojlz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163sxenuwpz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cpwqfeia.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163dmbmksbb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163mxkktato.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163yuteravh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163sywqpoxs.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163uugnrpaw.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163brgogazc.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ewsstvzu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163dwwdxapr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163bojyunok.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163sgiyzqvd.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163gvmwcgjy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rnmeogyt.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163fdojtqhn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163lrplqbvm.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163botezefa.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ydooxqyp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163loawfivh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ilahprsz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163scucddlb.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163alqonnye.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163naqgfraz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ctexahrv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163cchlraug.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ewmpkbot.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163eqwkdtbv.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163gkoqmzgt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163eofpvads.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ifcelrfa.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163fsubdlzk.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163cfyjvdqr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163zzgzxnqt.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163jjokntbt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163hbddzifm.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qjawfxnl.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163xbjllfyp.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163guwbcjac.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tgeterax.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163blquhike.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163nzxiktaf.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163srjkflrn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163lgnpnvuo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163bggvpafl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163obbuuqzm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qrgxjljm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fmjcfvwn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163buvfddud.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163bqkpzggj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163meupvwrk.html

================================================================================
来源：http://www.aibaodan.cn/163wqcrdwzc.html

R. Bash 专题
来源：http://www.sxryk.cn/163mrsmpikk.html

================================================================================
来源：http://www.sxryk.cn/163tvcyezty.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163whmijlbv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163stysfmay.html

set -euo pipefail
来源：http://www.aibaodan.cn/163djubqxgz.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wqzsgkba.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rpvepkol.html

[R03] 只读变量
来源：http://www.sxryk.cn/163pizpphba.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ngojdego.html

[R04] 位置参数
来源：http://www.xuanzx.com/163psoyqawb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163dsuhwqqu.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hnfuqudb.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qizurywm.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163mnkiziml.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163wndhyeqx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xgjqyzbt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163bgovvuac.html

[R08] 数值比较
来源：http://www.xuanzx.com/163igljglki.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zyuotgri.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163dzfhepdg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163sfyvtuos.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163vycafdgm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163iibmbkch.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163khgrvokh.html

case "$1" in
来源：http://www.xuanzx.com/163xowirsrj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163hajnvson.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163bmvkvsvq.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163pfixxvgm.html

esac
来源：http://www.xuanzx.com/163cuswcatc.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xjhuoqzb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163wfkapyoj.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163uyygwqrg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163hbhjzsvv.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ajjguccd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163togbucud.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163aphmwngd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ftsztcqg.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163gdxowyza.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163eprzmpnj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lobdpohv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163bjyzsdni.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163rfetgyih.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tvagjpbf.html

[R19] 数组长度
来源：http://www.xuanzx.com/163okdgppni.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nccrrytw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163oiovmhcj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ptkvzwgn.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ckeuviwj.html

echo "${#s}"
来源：http://www.aibaodan.cn/163oixlczkm.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wvciucsj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163gememtie.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163zimjdrsn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xykggqhj.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ojqqxstj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wfhnsvby.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163xhcemiqr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163iqruavqp.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dmtfkfin.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163udgljeoi.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fnhvhmlb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163jsmknedm.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lvrqojpj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ayoidbwh.html

[R29] 定义函数
来源：http://www.xuanzx.com/163llucqtfg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zsqaalna.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163wemyxmez.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mvzqgequ.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nwfnudog.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163reesikan.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163nwxuyyuh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ibjwcrmk.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163llfbdlyo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mifekiis.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ravdkuki.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163clpsctvf.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163rzhdqoxh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163iactlgtr.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163lyzczpuq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163mugxupcq.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163phtjaafu.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163riruczmy.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ophlnglg.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hdaogdxf.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163szyugjnt.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163sqdvxwgd.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163sgdujevu.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qqqftbie.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163csaekdpl.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163rbpguwoj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xfgplcez.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ngbmwvmn.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163hsvqvxyf.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163kgmuxxjh.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163fqddcoex.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rrylkpzd.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mlievnyw.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163yxfzlpes.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ovimpuso.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163proooylb.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163rnhglzqn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kyrhdpjd.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vdyoatvj.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mmclwmnf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163potcspdk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163otcarcea.html

[R50] awk 求和
来源：http://www.xuanzx.com/163sjxugxdr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ncxooqsi.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163cqtghdot.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ooqiptld.html

[R52] 统计行数
来源：http://www.xuanzx.com/163fmqfcrkp.html

wc -l a.txt
来源：http://www.sxryk.cn/163obnsfdbf.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163rmzkyrtu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163oolfmdfp.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163rtfwwixj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jwvvcgws.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kibflnkx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163cphkwuww.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163docgenrq.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163kwqbcktq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163fecjgdvw.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ybdzdqlg.html

[R58] 下载文件
来源：http://www.xuanzx.com/163xmvwpzng.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163vzxzsack.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ktwxhfni.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ilmtcuxn.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163opwrtsxn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ruikgqwj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ifanfyce.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163nbgxbssr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wbhihueo.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163kzomrryy.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163cigqtyom.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163arcqswmf.html

[R64] 结束进程
来源：http://www.xuanzx.com/163uazaegui.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163oqxolhvn.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163pytlvxtz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qpfdkljf.html

[R66] 定时任务
来源：http://www.sxryk.cn/163tbrgvhia.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fclkfqfp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jkxdysnm.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163fugofzka.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ogrtntus.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ajcmxwnw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163jviughaj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163gullctbx.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163hjfetigj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163bdvpxiil.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fhbncvft.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163anlxqpob.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163vbwngozj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ylqmvicc.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163nchalbne.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163tkyrncqe.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163fdbkcicr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163qkdlfdur.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lvwrajvz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163nalacvpe.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rdczmqxv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163aewcjuij.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163nrgdhtca.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ixfvvlyc.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xshlzjji.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163znyvuiao.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163fuyjoylx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qaqymwyj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vsywxmnc.html

time ./run.sh
来源：http://www.sxryk.cn/163ljptffbb.html

================================================================================
来源：http://www.sxryk.cn/163jzmmnjwi.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163pztcpiel.html

================================================================================
来源：http://www.sxryk.cn/163wgoqvrgr.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lnjvhllo.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zwhvwziu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163dropwevz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xixlurnf.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163msddxkbk.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163rsdjdgid.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163dqlpabut.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163oblpyvdj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163bjfjzzok.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163tewofnal.html

strlen(s)
来源：http://www.xuanzx.com/163kzyjzwki.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163hyxsdoaj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163fkizubxv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163exiexdua.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zryaskur.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qkgcanrg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163tkqtgrho.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dwtpzcry.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163orgbopma.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163dvzxasny.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zcsupjkc.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163oseezwzk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rpobhzvc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163kezyonrr.html

fclose(f);
来源：http://www.sxryk.cn/163ykphplaq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ygmqumkd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163lkpydewp.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163mucpgnxf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163qzkoukpq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lcxprkzp.html


<!-- 参考信息 -->