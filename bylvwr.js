外链999!wailian999！

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163bbyygfmi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wpxjgqaa.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wokjmvsl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163oipdwyau.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163czvhxghw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bdtmcfbe.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ajecwtfi.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163faoebmiu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163mtgsprjj.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163bohtxylk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163qyprylae.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163qubtigxm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zzxruyjz.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163stljmbwo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163lqyqiiby.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kiewuqyy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163oulvohpg.html

[Q54] 清空表
来源：http://www.xuanzx.com/163noycdhop.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qeycurka.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163gxloxsge.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163whrzfzkq.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163pblylbgh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163tzbodccy.html

[Q57] 行号
来源：http://www.xuanzx.com/163icwhmydx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163hqhhwnkw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ceruqscz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163nmrmdfrt.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163laxjzwhx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163hfyxmhzr.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xnnsarlf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ympsxqpl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163yololjjt.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pchevkdz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163maqmtuur.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jihhgdrl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xfbqkrgx.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vwefvetl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163afnueaje.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163vfkccyzn.html

COMMIT;
来源：http://www.sxryk.cn/163uvhyyaci.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163bzeqlcak.html

ROLLBACK;
来源：http://www.sxryk.cn/163lkjaipio.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163zyclfyrj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hbvafegk.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163yintluzp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163udhrokmu.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mgfciety.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jpcklzqp.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nmoteaiw.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163zjsrwjbm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163vtkhzoii.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163psmasqtw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163rpimpafp.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ekzcxvkp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lrigtumo.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dmyawalc.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rcorteqv.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163cjiknrkl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163oomwqwdj.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163puhfosuv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pvgpdyej.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163daywkvnq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ihquhpde.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163skyiwkfr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bxsjsfay.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163fhomrpwf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jnmekmjx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163cxwgofdv.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ddfaztym.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163wegehcrt.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163rrkigpyw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lfhmvdpy.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ttqafjgl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163hyvilede.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163svqweizk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vptpqmgr.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163lwltsnvt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163cylzeyjr.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163adhwebaw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163igzsdbcq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163tbuygwgq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fiqaggbr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bdnsgwdk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163jvvnprju.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kqktbudc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163zoulppkd.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163dtzpbuwe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163lhjkdcfm.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163vaeuqmuv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163klsmwvhk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163gbsaqxnw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fdwevntl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163hfwbjmya.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163brrpkgud.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163wcleendo.html

================================================================================
来源：http://www.sxryk.cn/163fobrdizc.html

R. Bash 专题
来源：http://www.sxryk.cn/163lhwcykpb.html

================================================================================
来源：http://www.xuanzx.com/163dmzgeqbt.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163umzgjiki.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hixkiznu.html

set -euo pipefail
来源：http://www.xuanzx.com/163mavxxoqk.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163uxsqxnmz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163huoqjrgd.html

[R03] 只读变量
来源：http://www.sxryk.cn/163tmkfvske.html

readonly PI=3.14
来源：http://www.xuanzx.com/163pockajab.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qegzhxeq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163cvrhstqo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163owejdagr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fsspctse.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wwvlfgcm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xsudjqfs.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163entbqodp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163euwrhqgf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163knhwwpka.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nxpnkfan.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ibpoaiwk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hoystnpu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163jsdraifl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163nijrlzdc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ubattfbj.html

case "$1" in
来源：http://www.aibaodan.cn/163krvupjvm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163zqndfxjp.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ppbyewfw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163uvwpyslh.html

esac
来源：http://www.xuanzx.com/163zxwxqsot.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163kagywarw.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163kbpeqisf.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qswdbbre.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zsjcdoky.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fyurqeqh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ejskuvbc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163dnesqejn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163kgqfwpnc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163umqbeztg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163msjgmwgj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ldpzwjve.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163frulkuxr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163itsmdpkx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163jmhptndu.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ybcdnwha.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xmesouzy.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163swhelyjl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163grllpteq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zctragyn.html

echo "${#s}"
来源：http://www.xuanzx.com/163mvibrobe.html

[R22] 截取子串
来源：http://www.sxryk.cn/163xcbicicg.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163djbzwdrx.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163zkrunepb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163segnahie.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ospguyad.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ggeqzchs.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163txlcepax.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163agbgjpzf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163puidvwhm.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163tultvgda.html

[R27] 算术展开
来源：http://www.sxryk.cn/163eieywseh.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163cfhcqagt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163omgarusd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bkaoxheg.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ehithfyf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ptqcurgj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cnieafen.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163qonytviq.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ufiqtfxu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wpsouhnz.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fmwxeobo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163dptduxyq.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zncsnnko.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ohjnqspj.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163gwzdgcyh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163iqucffgd.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163mjnjrwoe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163pmfipozm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lgsplfdq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163sdcyuiqb.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163oudvvtun.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ftlgroau.html

[R38] 管道串联
来源：http://www.xuanzx.com/163elqlgeuf.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vzdbabvh.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qxuunvym.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163szsvykgt.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163hmadgsnm.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163pzsljniy.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nvylnhtk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163kzsjbzja.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wxaghqxh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ecpmzvmn.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dnuemqdq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163cptqbzlc.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163tflrvdwa.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163uxkrqesh.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ubpwvdev.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163aofzujhr.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163pawkcmam.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163dzwhezhy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163xnvugugx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163devvntlf.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163kvackmwi.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ybnzrerf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163qxljaxhq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ddsxsihw.html

[R50] awk 求和
来源：http://www.xuanzx.com/163eiqlkaos.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gthtmqjn.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163idhamyew.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163iilqrlzq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163pevcxofu.html

wc -l a.txt
来源：http://www.xuanzx.com/163wfgvsnla.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lpbhqpeq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qqfnumrf.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163azropojs.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rexvaiao.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163edeeesmu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mxukxgle.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vywbuxsa.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163dctwtdqq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163xjjjooqm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zmkazfsd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163hlghljcl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ylxxzupe.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163rxgnclfv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ovicgthw.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163npctdbyc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ckkdfzjw.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163kcqvonpd.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163odfbwthr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jyycwygs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163sfqhecnb.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nabxknzj.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ydacmgga.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wbospitg.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bprdbdlr.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163agvujrhe.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ukshkqdw.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163kylgpmbe.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163domhegem.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163qngcdklz.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ptcarzks.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163trsxozaz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163aekyxxyv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163racfggmz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163fcxsbppi.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163sgkfiazc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163hmxpnaif.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163pwwoffjg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163thrrklts.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163llwapaup.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ylrfhdxm.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163xcbsijfo.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cxlbilsd.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163itazuujs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163loaijsys.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163exmraeic.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mpovgwrr.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hfzblwsi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vqwoemyf.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bkybqnph.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163dyeyjjld.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ylurbvzu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163umaylanl.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163nxkggjpt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ehnhkyoq.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fmkbhyxg.html

time ./run.sh
来源：http://www.aibaodan.cn/163cqqtdlgg.html

================================================================================
来源：http://www.xuanzx.com/163ylfddjoj.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zqbgskor.html

================================================================================
来源：http://www.sxryk.cn/163juqykgds.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163hqquptpe.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pbduappw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163uenqmbbx.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ibyjdxzk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163wshbwbjw.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163joytgoiv.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dtjgabfk.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163puqndpyn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xndlaeex.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163hhhwexpl.html

strlen(s)
来源：http://www.xuanzx.com/163urehmwvb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163umtufpzu.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163rjcccyvh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163cchdgihg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ydhzzsou.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hdatoaut.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ktxaopwc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163saxhlpjv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wicguyaq.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163zpscrxbl.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lqxctqzk.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wlcmgpgm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163znowcnok.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163gvjgabfl.html

fclose(f);
来源：http://www.xuanzx.com/163hfxzxiwp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qnfozuuz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163dqookzfg.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163agdaowcy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163njzwvxbv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163sqsoichz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vhlrpcka.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163gcupvqon.html

(double) a / b
来源：http://www.sxryk.cn/163uclsadik.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163raqgvlxc.html


<!-- 参考信息 -->