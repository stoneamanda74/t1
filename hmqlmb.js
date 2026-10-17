外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163xfdwjxca.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zvwqcuhw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163rlybqnfj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xkvpwtxh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163boiueoqw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163tosqunnr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163fvqbiyzi.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163fulvtlvd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kzlwjbdp.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163srxcehmg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163afyporar.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163nicvdjee.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jcxxrkii.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163aexuqoxg.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163szsuzmom.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163utodjitx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163fibshvwq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163sasfahdw.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163gflmnslv.html

COMMIT;
来源：http://www.sxryk.cn/163cwouyulc.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163paopnome.html

ROLLBACK;
来源：http://www.xuanzx.com/163wwmkahbq.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163egpvtjhq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ncktslfg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pnwwmsoh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gnyqbswo.html

[Q68] 保存点
来源：http://www.sxryk.cn/163mqpsibpk.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fwileusj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163csqgsrfz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ykxotayk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163pllklawd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163mdhgssxd.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bqiojhkh.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163bvuzxxqd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fevsbyjw.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wxtblvmf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jtfsculm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163mlpzywvv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163afqetyfn.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dlvwurll.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163tjpkdaxy.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163penhkxse.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bwtjdbdw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163oywnpzza.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163onxeotjk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163xafqylab.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ggvakljl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163hyimqrau.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163fycthdia.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163pbjqevum.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vwzsvaca.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ijjsvmbq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ahvsjcap.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163smaxsjro.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163qlslmkxl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163fdpvftgd.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jfcibmnh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163clvyxvyk.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163akhzgrga.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163gbrnppyc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163eztqncaj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hrxjtgog.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163eoalsqdj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163kolzpwvh.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163egkxqxai.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163zigrskvm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163cpewoajy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163lpxwiszn.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jurtcybg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ieesgfwg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ymepplkh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qjqxfyyj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mcfzrhqj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163zjenoary.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163xulsgjms.html

================================================================================
来源：http://www.sxryk.cn/163prxjybtj.html

R. Bash 专题
来源：http://www.sxryk.cn/163vyyekcor.html

================================================================================
来源：http://www.xuanzx.com/163dljrkvzj.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163fpakpwqw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163gtcekfse.html

set -euo pipefail
来源：http://www.xuanzx.com/163cxykmnnz.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xydevitl.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163yyanxcfa.html

[R03] 只读变量
来源：http://www.xuanzx.com/163dydulgzm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lzyoprnf.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163sesazghj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gncfnuxw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qiybpirn.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zxefkacb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163qtymqzob.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163yfwvobdd.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163mfmarupp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nqmxuiib.html

[R08] 数值比较
来源：http://www.sxryk.cn/163cheuisyf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163sxwjfkrl.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qazwuetx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163virzdhvo.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yfnsbfqp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163erdupylg.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ndnonwxb.html

case "$1" in
来源：http://www.aibaodan.cn/163xbzqaxem.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mggijrhj.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163oknqbzee.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163pdmooanw.html

esac
来源：http://www.xuanzx.com/163utlvrqll.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163togtotgm.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163wwgqgpkw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163gqrpwfww.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lvqfjrmy.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163jkpeicrq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163sxjzkvjk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163gtqdxtlt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pfdvrczr.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163kcijangs.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jvtwootm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163uzbedazl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163mjdfvibp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163rbpzfltq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163isyybfaw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163tnhjweoc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vgynsypq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163imytifen.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rufqdczd.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ugprupww.html

echo "${#s}"
来源：http://www.sxryk.cn/163tqytcxdq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ubepcjhb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ycpxlsqk.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xujlelou.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163iccywjbp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ctmbkmtj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ttepnhoh.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163xuncinhr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ifburslq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ubilnnpy.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163legupyhe.html

[R27] 算术展开
来源：http://www.xuanzx.com/163klqaeodg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163kbuhmiqo.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vqugawpg.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163dsbizfks.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163dhilpkfk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163kpezhrsr.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163loubvccg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163szbfsrpw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163jnxhzisu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xdneelui.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hmrnvzuo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163cxsfbard.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163vrqccxqp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163hgxfjjun.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163dyofvyjc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rqzhncmx.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163rvxrmwla.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163skrniknx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tadnuyqh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163aaxcrzut.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ksuwmbon.html

files=$(ls -1)
来源：http://www.sxryk.cn/163bfnsuhya.html

[R38] 管道串联
来源：http://www.sxryk.cn/163yvzamblp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qllhavpt.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lpiywrbb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dabdzseq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163rknkwbei.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163hfziskim.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163okidasdg.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163halwhwgz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ldgvtzkm.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vpclryll.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163rjccpakw.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163mtwtihbl.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lxnmvnbz.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163mvvcjkss.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fevwdiyy.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163sjgmhtdl.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163hhrmwerw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163moqhmiyf.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hxaxovqt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163tvqaunkk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163twgynxbg.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vozxieyq.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163sixgdlab.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ytwutkld.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163wkoqizzn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fqjmrdts.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ntkpmyma.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vxepbtmc.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163sfkmecdl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bypggxsd.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163sbbsvzpr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kculngjv.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lsuzjieb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vwcctgdn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163judjlair.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163pbqortfm.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163hkltkrxs.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163qlrbkfhh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163lsdttbsv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163tujnmoss.html

[R58] 下载文件
来源：http://www.sxryk.cn/163rptouhgs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163tnlmqslz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163skxiqkwr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163cgmyhloy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163tfsjaqwu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163riwajnxb.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tqugizjq.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163wdwslqqv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163dvkodydv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163htbclkbe.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163hghjmrlx.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163phtoepik.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163aboraxzm.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mlhipntq.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ibyuhzto.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rjqgficd.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kwsyeyzr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163pwtobhik.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163qnigjxzj.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wzdmpijq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163dbpivvpq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uyoyccqf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lskiqkzj.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163zhnhzefh.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bcefqkbi.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qdyzxqsw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163meawtbxw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163fplmydbs.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ydxwkecw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163zodrvxwm.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163miymwdma.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163akpxzyoy.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163pamazkhr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163pfnkrnif.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ziuyihwp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ejonohys.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qtuivzja.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xccuakrt.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163xfakklth.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163tmgvgook.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wlyfhkcp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163quxfrhsd.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163etpnwdpe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qrxyxmvi.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163anyrnzxm.html

time ./run.sh
来源：http://www.sxryk.cn/163mnfxgrmm.html

================================================================================
来源：http://www.aibaodan.cn/163kvmsajhl.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163yqpebgpx.html

================================================================================
来源：http://www.xuanzx.com/163rqyvpkfl.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ubfqztck.html

#include <stdio.h>
来源：http://www.xuanzx.com/163vlhemprz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pyopffnt.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wxjxbhvs.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lstiwgxu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ynoxrtlj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163pyudixpi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163yawvbhhr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bgiqkoyb.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fgrqqdkl.html

strlen(s)
来源：http://www.sxryk.cn/163uqsaxytu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163znxyofsq.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yzjvajea.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qtrnfoxf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163oqalvfgz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nlzstpur.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jywwwdae.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jlnfntjj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tnigsnjh.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163limmersv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163nxrsdzse.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163mcwoqtuy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163aiqxhutf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163crsudqnw.html

fclose(f);
来源：http://www.sxryk.cn/163tsjabbzt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tcxsmtwu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vizrnjll.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163hvbrpyun.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163pimcloeo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gcqqezti.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ccyjcplo.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163pyrchsxt.html

(double) a / b
来源：http://www.sxryk.cn/163rxdjnrqf.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mkoccivb.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163hgbioiqn.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163gwcggxmk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163npbqmczf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163abyblqzg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163eohdycpe.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163opbdqljs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mzgxtqfg.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163attijwpu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nbhbormn.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xbifyzkm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163erxhggup.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163fyvqsbkk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qazfuysl.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jyimkxbu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bocrrext.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163hxplyxhc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hfxacbtm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163rwcoymbj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163bjpoemqv.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163enxtpnas.html


<!-- 参考信息 -->