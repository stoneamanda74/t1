外链999!wailian999！

[Q61] 移动平均
来源：http://www.aibaodan.cn/163lexonxku.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163vcavdzvr.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163eoqrvfln.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zvwrusmn.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ueokbflt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ptropusb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163xjkiwxaj.html

COMMIT;
来源：http://www.xuanzx.com/163qpwybbad.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163lsxmkdcg.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kmmohesq.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ojxqsghb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hhmvfruv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163iclogtoj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163oliokpvf.html

[Q68] 保存点
来源：http://www.xuanzx.com/163jobtejmr.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163kzzusgfm.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163duernbma.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163eirlkjlw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163pwvpuinp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ceqjlbvx.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163dcsihnaa.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163devnzrqg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fkvofkqj.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ivyspiju.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fpfosuns.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163vrjfuqei.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163syxefrrm.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163rbtzmtdr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163errvupxz.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163tlvvkncn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163enjalbxj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163bmwljyra.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163mdlodcet.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163mjjltdgf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lmcifvxr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163lnxkxqrr.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163emujxpkj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163mvxhgctp.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ztgtamns.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163owjqwgev.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ocfvuhtv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163phzlcrrl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163toeuttsn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163jbazkfbd.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jjhmnlwj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ltueziif.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163kvaszkja.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163eedarjbc.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163gjqjxrbe.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163qaqhvtlt.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163mogsbvnl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163rkyplxux.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163zaphifha.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163yjqudzup.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163sxwrryhu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qhpiujzl.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163yksnccss.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163obfeijwj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163bwhonkns.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163khlhcvnn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163fajpbyti.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ctbciyhm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163kfcgcdot.html

================================================================================
来源：http://www.xuanzx.com/163frtiiemx.html

R. Bash 专题
来源：http://www.sxryk.cn/163iphvonfe.html

================================================================================
来源：http://www.xuanzx.com/163ctwoaixu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163sfkibjhu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bhuneink.html

set -euo pipefail
来源：http://www.aibaodan.cn/163unpddewy.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163vewtawih.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163eyjrzixg.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163xjposiwo.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ccwxksqv.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yydxngym.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jnwqqkcw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163xzxhyaso.html

name="${1:-default}"
来源：http://www.sxryk.cn/163zcsipwcy.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163eamftkxi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ormhapfo.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163vdbjtghm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163fxhvhunt.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163lxfufhrh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ajznvqcg.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ktgbdvth.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163abzmlsez.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163yvrpuxqc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mzmcmili.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163pfqtdzjz.html

case "$1" in
来源：http://www.xuanzx.com/163iccaycbr.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163otqjzxcv.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163sgduwivh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163iyzqfrii.html

esac
来源：http://www.sxryk.cn/163asydbjsm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wyvpfnji.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163aaejifne.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163gfsutsis.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gpbenibx.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163vhdwuozv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163shigjdaa.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163zxjatiok.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163qdygolam.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hgvnkjnx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zgnceeaa.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163gflnvbsg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163sphfccuz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163rdoqgngv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xidvjjeo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ktjvjpcu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bsvgiomd.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163hyijwuxt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ojnbvrpo.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163jftfpcmf.html

echo "${#s}"
来源：http://www.sxryk.cn/163houqpmgj.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ccgskddz.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163swycbjyd.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fnjtawhc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ecbemsqp.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163tothgbgc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163xdckigkk.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163zynzwkmc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hluzattt.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xwfjkfkh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163zgulopoo.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163mrpqtaph.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ilhybslo.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ykcbqpip.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vvxcixvt.html

[R29] 定义函数
来源：http://www.sxryk.cn/163bdyozdqq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163yezmkvie.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163liclwhim.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jmovwdwn.html

[R31] 局部变量
来源：http://www.xuanzx.com/163asghzirc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ppdbqzhh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163lborgokz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163pbcrhurv.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ueuejjse.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bsvjbvyf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163kkyobsxi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163isosbqwx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163xyjyucxe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163dmcrawnf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qwadwwvv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nylzasuz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jjfbltwh.html

files=$(ls -1)
来源：http://www.sxryk.cn/163staigrcr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163cskkttao.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163tsrcxzaq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163txllwkjj.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163udiaegvu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bazxttfa.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vdjqiyze.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163bhvberhp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163tfzwdqgx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163boovtmzu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163sveygrgv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ahxojwji.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163cdlpzvsz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163efqcoiqj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qscgcrik.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xrdmkgog.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163rjewonkw.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163lfijxccq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mjftbcsc.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163qpxzkpls.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ehxspbuj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mwkicpdw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163pbfcfskh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163katsfnbz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163yixlbkwp.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163uixjbtoq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163duamrrwf.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rzzuilvo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163npycfhkt.html

[R52] 统计行数
来源：http://www.sxryk.cn/163irihhijd.html

wc -l a.txt
来源：http://www.xuanzx.com/163crqcgwng.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xujppdbm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tuqncjhe.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163yrzesmzj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163irqkqgjy.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163fsbjocht.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163gykkpwxa.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163evhrlsiv.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gyenbypo.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zjfzxifp.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163puqxnqub.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ifbxaddx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163cllnyqrl.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163jwvrannx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163sdtvyuum.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163etrloxnx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163uwnmenhq.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163kvjfoqro.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163akfluxnz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ixkvzvxg.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rywfhzjt.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163qejwgnwp.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163qobykoyv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163eaoiqhhp.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pbvxppkr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163kbtvcfxx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qoxbjshv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xnrunvvs.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zyscueyd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163tcdvkhpu.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163llmvdirf.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163usgclydw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163flxfaibh.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ejrtmews.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ejypatsx.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tvvlhuwl.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163cehjhbpz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163gxfmiukl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nctcvmle.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163unyszmko.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vvzfdlij.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163fwzehyew.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rsqcpwgv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xjantpiq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163xykyykmw.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163djwhrrxb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163dgfgucqm.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163etkhapqn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163msadptbe.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163wpvrnkme.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163vampqlwf.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vhigtriq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ualdwqeq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wignbsoh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163gzxuovjk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ljnrlbcj.html

time ./run.sh
来源：http://www.aibaodan.cn/163jzavznih.html

================================================================================
来源：http://www.xuanzx.com/163gjixpzgo.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163wzvbnyvs.html

================================================================================
来源：http://www.xuanzx.com/163wadcvqix.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163whsgnqsu.html

#include <stdio.h>
来源：http://www.xuanzx.com/163srnjyour.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kcicqzdn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163cqxhokmd.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163cmrdgdos.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163tbdbsxxe.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163rjpgdyxg.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163zurrnbuv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163dhxgmihn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163mrzwtpsk.html

strlen(s)
来源：http://www.sxryk.cn/163prwwvgnv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163clonpuyu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hqnftwgg.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163phjfeouz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wxwrqgfy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kmgskrph.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163vocaehlh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163eksvvszh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163yffrukfz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163chgqerec.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ckyoepqo.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163pesvdurf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163daxmposr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ysqwnqrs.html

fclose(f);
来源：http://www.aibaodan.cn/163ozpkvjtf.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ludxphme.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163apkzdwvs.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163xzwpbdxl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163cwddtgqh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163yxrmykio.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hbpmywzc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zeqpdmmn.html

(double) a / b
来源：http://www.xuanzx.com/163thcjzdif.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hcsgggbu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163cojopadg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mropevif.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cboyasbr.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163igtsnivh.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ibizgxqi.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wplbhmfl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kartrjlh.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163sxbztjnt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zqseafjt.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163atvttnki.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kldlndla.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ljqryoeh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163zhjqkick.html

[S23] C：随机数
来源：http://www.xuanzx.com/163krretyku.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wtymgkpd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163cunyhost.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qknpvavw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163mphxeilg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zfqecvnn.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163iehnsllb.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xippyeku.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mnddntqi.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163snzldkwn.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jvygmwym.html

static int counter = 0;
来源：http://www.aibaodan.cn/163hetfnhcr.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lleheukv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163iksdavbu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cmbiyijy.html

#ifndef X_H
来源：http://www.xuanzx.com/163vlntddgl.html

#define X_H
来源：http://www.aibaodan.cn/163thvqzedq.html

#endif
来源：http://www.aibaodan.cn/163cmezpwzs.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163hiqasckx.html


<!-- 参考信息 -->