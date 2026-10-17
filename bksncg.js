外链999!wailian999！

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ojupycpp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163flqzcobb.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oyqysbwb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hddtzezc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163fmbgxjnn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163mnreaibm.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163gstdcvsi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163tfcvrnon.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wymgaeec.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163uxojgmwh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xspinqdp.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bbatmako.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vmtmzzsb.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ehyeuryo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163cccxcdrg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pkzdohsk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163skkdsrgm.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163awnsvric.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163jclbdufd.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vygpzmgt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163zccvsgpu.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ievmwjcf.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qzjtroac.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ivbgfgvq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zhbcrjfk.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163huadiogv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163fdqabfto.html

[Q57] 行号
来源：http://www.aibaodan.cn/163gdybtdqi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163fmwpwfnu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163rodpqkgx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163rjlmdzxz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163jciylwfi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kkanwwpc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163iubzvese.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163hfqsvtyf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163zcrcoskh.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kkkaklaa.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163uuwiuygy.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163phehfhog.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rgqtglyh.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xosegjop.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qcryraft.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zeoeiwxt.html

COMMIT;
来源：http://www.aibaodan.cn/163ucrbxrtk.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ghamhdrs.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jwlnuove.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163mfxosoix.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bsectpih.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ojpshuck.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163werhtuvs.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ggeedrqk.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163uegvhapx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163tihwprfv.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163obxewykc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163zwnyxhmp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hhnlwsqx.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163bmwggesx.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jgtcjkro.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163yifsnezh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tmprkvrx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163iiphjhgu.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163hqtfzaov.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163irtassno.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163bsrfmxzg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163mtzuxuoi.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163wdnbidbz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163wqdcxzea.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163orvtutgi.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163mfbfoqhq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163cvoidmoc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tpowmnji.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zwyazbnw.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163edljzzjr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163pbjmirin.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zleympln.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lwpxczvy.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jkgpvouh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hdzdjdlt.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zbwhsswc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163dbdfjkpm.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163atsmzzrk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hwrvbdrg.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ltpdclax.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163zavkeivy.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163cxbwcusn.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163znjoafmu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qyzhzdyk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ejaedear.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163tzwfxpni.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163yjjzpgqe.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mfxeepyq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163uwjrqrin.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163hwyxbsgt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163hwdethbx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vmfajacx.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163grmvsnzd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163eplbzneh.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rjfkvokv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163bkcalfix.html

================================================================================
来源：http://www.xuanzx.com/163qmiznehu.html

R. Bash 专题
来源：http://www.sxryk.cn/163nddwpfqq.html

================================================================================
来源：http://www.sxryk.cn/163rbzptgpq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163tnfxpvkn.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163nebkurid.html

set -euo pipefail
来源：http://www.aibaodan.cn/163lknpinaj.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163xzamnmhz.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pbuksfeu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163bqhfkzdc.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163acxyarge.html

[R04] 位置参数
来源：http://www.xuanzx.com/163xizkwdts.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163crndpvzp.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163scybpfyt.html

name="${1:-default}"
来源：http://www.sxryk.cn/163oyuczqje.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163tvrzmqaw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dalifaea.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jxthcuku.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163tcdvpxfw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163hwkbvafv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nzagrxvz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ljuqtwhf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163bzvhiifw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163zpertqbn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163lrllurtb.html

[R11] case 多分支
来源：http://www.sxryk.cn/163krckebuk.html

case "$1" in
来源：http://www.sxryk.cn/163lvybkitn.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163madisthk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163odwsmhau.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163cadummjn.html

esac
来源：http://www.xuanzx.com/163izhuvlhm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dgmqkjsc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163cckjbxgy.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163gmuqvmui.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163nonbocsl.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163vzexqrkm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163huhtdjro.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ycuagiqg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163dthrgxlq.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yfqmpgkp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163npjyzihh.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ilxxzfpp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hlqntciy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qrecprcs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163nenifbps.html

[R19] 数组长度
来源：http://www.xuanzx.com/163tqmclaza.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163cwpzhkme.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163swurvfze.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163jgdhkvrn.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163aehltjze.html

echo "${#s}"
来源：http://www.xuanzx.com/163rsghjopn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163roeankgf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163fmyrfchn.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kvtuyywh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163mneichfy.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wpjliyrj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163sselzutn.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ddyqxfgw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163atryrqcv.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hchaegcw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163hbtsdgnu.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163cnrffylh.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163gbgadzek.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163iibofxrc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163pidqzjui.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ensrcoog.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zhxymssv.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wwduczcp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vpiovsuv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163knlhacrh.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163utaidhec.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163meawefar.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163kcsrkboj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163agsdjuok.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163nvqvvyso.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163pujxonsr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vzxbrpfy.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163rpkpgphb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163gyfkkhob.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mrnarvps.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163bhfphlss.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163bwblmwcy.html

files=$(ls -1)
来源：http://www.xuanzx.com/163etflwfzf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163sinanefa.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hbkqdtds.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zbqyxywc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dspsxmkc.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163adwtqndo.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wkwqcybq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163vogxafwm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fdfbnkwz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rnhrmakt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ohpbmglx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ojmaqism.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163bcjycmoe.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163pzsjkeyk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xzrhqtpg.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mcaqvuqr.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mhqcxkim.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163klqfcdvx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163enqgvrnf.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163lsobydjw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163kqvtosbl.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163cyaalywv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mhiykhge.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163uhpgmime.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ihcsimbz.html

[R50] awk 求和
来源：http://www.xuanzx.com/163uzbmgxjd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163yqmsxhuy.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xdgdgcrs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163irvqbjte.html

[R52] 统计行数
来源：http://www.xuanzx.com/163slfrkdqu.html

wc -l a.txt
来源：http://www.sxryk.cn/163nnvuoehf.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lgxexkbn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xtfgkdmk.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163otpmwmah.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rhrmrjdr.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ajpgwkwq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163uswgwdum.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163umwbwqbv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ezfihndq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163uufugart.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163vwexbvje.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nymrbifz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163tvsnvkzd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163gvwhzhsf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163sspcguzs.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163axhegqho.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163maqsjrxq.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ownslmgb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wprjglvq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ilbzzkge.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163rumpuhqv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163otkrnmym.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163xvzwbdnu.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wggwewdh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163niamtoze.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rzqmygdx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163gzhfmxex.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wwawivhj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rwjkgxuy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ppzwxxwr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zwvwbdsr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rxghqdwc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ahtlayjk.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163aedhuxcr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rgckihcx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rbimrisr.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ojocbnaq.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163sykutbwx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zimkmbkb.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wzywktyb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163yjfslwiw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163npzqlcrc.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mzmaaxph.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163etqknmmk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163xfzrsmli.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163abdclsle.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163bnszhqcf.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163uaaiengr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yxzqwghq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xhrjkyxk.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yqekhocn.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163scshtsls.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163hoypftiw.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163abgqtlbf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kzjpkyru.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163cplqgrxl.html

time ./run.sh
来源：http://www.xuanzx.com/163ygbzzvvn.html

================================================================================
来源：http://www.aibaodan.cn/163yjuudynm.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zwzitcvi.html

================================================================================
来源：http://www.xuanzx.com/163qxqvgltj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gnwjnsel.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vwjncctg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ijwcrpto.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xkovkmmk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163paohvonw.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163fvoxzieu.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163oljcjfui.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gpcfknmg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163kkdvjwlx.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163knklewaz.html

strlen(s)
来源：http://www.sxryk.cn/163auofezzk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163eitbadyb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163bfknxbhk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163glpkkbvb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163tjamyupg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163efeyhmho.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163jikzcsit.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ygktgwbl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kppamplj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163thmymrqg.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xzqpwmks.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163vrrbwlsd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163cmrinoeo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ssqjzwar.html

fclose(f);
来源：http://www.xuanzx.com/163jhhpezqr.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ldngyljx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ronaecic.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163seznlovf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rnzqwido.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ekeoxzix.html


<!-- 参考信息 -->