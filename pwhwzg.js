外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163pyzokjkt.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pwtyjvwb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163nfhuisjq.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qdrxdafo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163sddnyipf.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163iucuwukg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rvofqunc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163hdqixzij.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qljgpmru.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163bhuufuxu.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wsppjetz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vnsdqjbm.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ukjttwxw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163zpxiseuq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163mjrzsxad.html

COMMIT;
来源：http://www.aibaodan.cn/163lzjgizxh.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ecpgbykj.html

ROLLBACK;
来源：http://www.sxryk.cn/163kqxubhcs.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fdsuztdn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ozjueabb.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cojewvdn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163anhdmnyq.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mpejwmnv.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163brgnfocv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rqjebkyr.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163dimhgiet.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163upaxmazb.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163pgmoohnt.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163orxoimab.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kotxuasx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163mqhwgvla.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ccktlymx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ltnleznl.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163bjpnynmw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163mbkzhodn.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ryiyyqsu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163umpctcrk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pltolhkx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163oicituzq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gfdbdpkn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rzdkoqwf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jjnovxrt.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163skhgkmqd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jxatijhs.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163axfsgtzt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ppgvrakr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ojqblocz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163wtyyhavs.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ezpzyyvi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163dvuhrwuv.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163kstvnhvd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163geaukyul.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ykufrgdq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163wstkzswm.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163wpkoxjjx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163thtarnhi.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mbmbpgzb.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163qpuldeeu.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163trjryjso.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163gvmbtgoc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163arrslxgx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163nnuerfvb.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pwnxlazg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163oopiahqr.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163hgzequjg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ewmgflyv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wsibjvar.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ftkigjqq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vcdqjpjt.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163wdptndel.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163upkwuvny.html

================================================================================
来源：http://www.xuanzx.com/163qavbzsum.html

R. Bash 专题
来源：http://www.xuanzx.com/163zgldclxy.html

================================================================================
来源：http://www.xuanzx.com/163wvzuxxkz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xbjygylg.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bqsbcffo.html

set -euo pipefail
来源：http://www.xuanzx.com/163tgpxkarv.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fbsppkww.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163czcitggu.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163dniwptyl.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ldqyktky.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rffqhsyb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163etrmjpka.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163flwmjjha.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163cyjzrvof.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163gnjryhnl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163nkezbjti.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163pxfptmcq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163mtklmpnv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163yzglvgqe.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163uxeiszqy.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163enhplccv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jxlushgo.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163rsuwfgif.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163amoytaul.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163irihdekg.html

case "$1" in
来源：http://www.xuanzx.com/163iqmepnnh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163skmugigr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163suqszpsj.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pldersnz.html

esac
来源：http://www.xuanzx.com/163hxcbgcvv.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ggyrnhxw.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163zpdimpet.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163yptqmhor.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163xgwdeyoj.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163iclbkqvm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gbukeqyq.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163btqzyjpw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163xkndjvwi.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163onegotwv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163czzgleas.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163iaztqeaw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vnfkdsej.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163uvsopzuj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163fbmuhaki.html

[R19] 数组长度
来源：http://www.xuanzx.com/163wcdkgywu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ydhfcdgo.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163csqvvsjq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163fdgjkhtt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163lemtbyqm.html

echo "${#s}"
来源：http://www.xuanzx.com/163jwoxsdbg.html

[R22] 截取子串
来源：http://www.sxryk.cn/163lzaxjgoi.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163tkeezacr.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ogbbsrlk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163dkrnlfpk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rosxxrls.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163cykzkrii.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163fpvcskjx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163itbvmzio.html

[R26] 命令替换
来源：http://www.sxryk.cn/163zsihwqpw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163dlkwqufd.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bxhbydxj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163illcnnan.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163dlvrxohu.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ysrjdzis.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163nijbhtwn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ioylptnq.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163cizmcgpq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ckovgbmh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163hpozbeqy.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rlrsbbfj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163eplpupjz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163hakebpqh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nzhwwbuc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163arklekcw.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163rcuqeian.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dmaoxabo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qiemrbkx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163kiykngba.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ivgiawib.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163icklxigc.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163aloagvou.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163unvnrrkz.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bcutayjp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163tyjpffix.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163cofocout.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163gthtqwxr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163zoczivze.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zgxejrrt.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kuntalpx.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163pwgzfvbx.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vviylxfg.html

wc -l < a.txt
来源：http://www.sxryk.cn/163khdzrrrn.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163pltceuax.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nqvjnlia.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mjxsncdx.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163pdtoeczl.html

[R45] 批量删除
来源：http://www.sxryk.cn/163bsuwoxmv.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163wndcawih.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163sikwalst.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163kkyvybgq.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163bdelnrvu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163tcppnshe.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xrhzrypg.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163jpyfhmbo.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zkmxrsan.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163cbdnfrji.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xyvomzup.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hgufehgs.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rrzbggby.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163xtaolcny.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mhpyxryz.html

wc -l a.txt
来源：http://www.xuanzx.com/163sbtosojr.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163wqzyxlfh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163blrlcjff.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163wpiukxyx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163mqbldfpl.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tycyxsrk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163axmqxhsq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hdjblzil.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163inqhbfqn.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163earbkqju.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lqrtbetg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pfoyjtfk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163xqurkgph.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tjgjlifm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kacpyunb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163qdayghgl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163rlglqcyg.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163sfgflrtr.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163nnodaoso.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163yidipyyu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ucdmukfo.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hcpufhav.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nprltqib.html

[R64] 结束进程
来源：http://www.sxryk.cn/163prqosyun.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163xzwerdnw.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163uwtnengc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163fhykldrc.html

[R66] 定时任务
来源：http://www.xuanzx.com/163tofpttyv.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hwzljnhd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163gnxcrmwr.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163zbsfnwje.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163tczraaeq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163xabwshid.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163frnzjhsk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163diminjqn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163nbyshmfr.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163utxnfnls.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163awyiphhz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163sovzzxqi.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163sryfioiq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ejkldnjs.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163oqoocfqj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163xhovqper.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lhhamocj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163eyuxiaex.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qiotoenl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163rylajjqu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163pbpjmjmu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wztybcqh.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mvmtnhwe.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163erjyvgdr.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163yllbxokl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163svrysgvd.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163giugkcxo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163dsqkcyrd.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pgjcienb.html

time ./run.sh
来源：http://www.sxryk.cn/163uyrxaeyx.html

================================================================================
来源：http://www.sxryk.cn/163kkbubmhn.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ambszioh.html

================================================================================
来源：http://www.sxryk.cn/163ilxmchns.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163intrsism.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ybmrbezt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163eadroglf.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163uffzusuq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lfyfnqif.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163edlakgxv.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hycyijiu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163grhwntau.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rhiebmpb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xxtanydp.html

strlen(s)
来源：http://www.aibaodan.cn/163boajcnls.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mtmlndna.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163odfimcqs.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163acrwpuwq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xwgkwrny.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163uifarjly.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163cogllqei.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163vmeuawas.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163vecwuqqy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163dlewcvbc.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zglzchfs.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jwzegnir.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163sircoogc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163kizqclfx.html

fclose(f);
来源：http://www.aibaodan.cn/163ogfkoxfb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yuauhwpk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163lmhsfuth.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163eugqwnlu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ejddvahz.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tfddgbjg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163uxhthwed.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163onarxbyq.html

(double) a / b
来源：http://www.xuanzx.com/163befnffjt.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163yiexguvq.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ztfqtevu.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163xlvxzdfo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163lnpuxfiy.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163nhrvcrmr.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163mfqhtldg.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163yldvkwtc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hewsckmv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ocghdvjo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163izxnsgjk.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163jbsocniy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163trqpmunr.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163hnivvyxd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163diuzjwcd.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163lzdtrnyb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163synokqno.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ofekvakb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163trfeaapi.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163goqsgjlg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ydyhzvor.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163lvojvmnu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163mrwpsarl.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kuosmlpf.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163elmxmqkj.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zgnqdqil.html


<!-- 参考信息 -->