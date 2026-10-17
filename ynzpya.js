外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ehndkapt.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163mrceojzg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163dtmmoekw.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163usytabpz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163uembvjqq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163pzflnhhs.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hucpkvxq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163nxujkkba.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xccsfxki.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jknqfncg.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163tzkwfdvz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163crmodlvg.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163sqpxuuub.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wdwbdtqb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ktxclarv.html

COMMIT;
来源：http://www.sxryk.cn/163yobragjt.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163govygyun.html

ROLLBACK;
来源：http://www.aibaodan.cn/163sqtugzlt.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163eznufzgd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163wlkxakxy.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xvbixriq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163lsmpedub.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ekazvzmx.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163kbvlepnp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163dekjazuy.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163aaomknqf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163sbovzvpy.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163isuiirjy.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163uoctwxsd.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163kzybtzad.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163atyirqxo.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163yeekslcz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163tfrpuwti.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163uuplguab.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163uuwykemd.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163fnwetwfe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163qnydthdb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ealpausm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163guqujaiw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163lpqempge.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163messgcie.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163dpzlgclg.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jgfhbmfr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163okjaejth.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163iiocbgff.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163vybooviu.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163exxfnofk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163dqbxqlpd.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xtjinnkw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163rcvytlva.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163bxciccsq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vgojxqiu.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163yeaszhdv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163iljyxxau.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163phdiucqn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163dfjsnjig.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163afaqnppk.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163tmrpdand.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163mdtkduyh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163czcejqyj.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163lckautla.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163uqipqcmx.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163mdopxjus.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163xbrgqsub.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wwvbexax.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tvzuyrqo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vcobqdpt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bttxrenr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163vjmgkzxx.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163kbfkrope.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163obcidoaw.html

================================================================================
来源：http://www.aibaodan.cn/163butnyoui.html

R. Bash 专题
来源：http://www.xuanzx.com/163hzzwhgye.html

================================================================================
来源：http://www.sxryk.cn/163jqtfitwh.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163prdimpmc.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ugtztioj.html

set -euo pipefail
来源：http://www.sxryk.cn/163clmjubqd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163guxdjqjg.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163tafoallx.html

[R03] 只读变量
来源：http://www.sxryk.cn/163uywtdgwu.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vofykdxd.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163xbuwelcw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163eymwnqvq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163nyspxqpt.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vijghiyr.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163mlypgfxh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163yofznhzl.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163gbdgvfck.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163dgjtouut.html

[R08] 数值比较
来源：http://www.sxryk.cn/163duarqajh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vpflznmw.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163iwgetfpd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163hidovbgz.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163hlrmheuu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163gkoueavp.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ztuqlgfi.html

case "$1" in
来源：http://www.xuanzx.com/163qylgttir.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163oycvejnk.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163vhymzdra.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163cvwzmurq.html

esac
来源：http://www.sxryk.cn/163rjjepcjn.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163fwtgzoqh.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163yiaehfuc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163xjyvcrym.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163jubmjhnj.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163sizlkuvn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qpjprreh.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zrcvxrpe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163qxrdldlp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163dgneqdno.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163nmpvtwfg.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ukkawnjp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163nfpzccmz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163mtikodtk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163dnsxoxiq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163yasdhyxa.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163eljbeqaz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163alnecrkd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tfusfhlu.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163lzksaogt.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fmhwnqgn.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ojtzkrld.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163sylwwbhm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163oucjzsle.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ebcoqskw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jlkhtqek.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mivvfwlc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163okqybted.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163lrtcsvvb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ulxejili.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163hrdwpctu.html

[R27] 算术展开
来源：http://www.xuanzx.com/163iybnirvg.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163opdjmrbt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cvmivuym.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xmlrcthf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163btpszvcb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ipcuxmcl.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163iwquttmu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163mlpgimqa.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163plxdomlk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ajigknux.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163hudzgeql.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lbdfozic.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163cqkdndvk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zyogserg.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163wdliuxvy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yvjmkkgf.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163eigfgxsw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163nwcmscyc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ioostbat.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nhvhkkky.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ocbntakg.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163wizbmzkt.html

[R38] 管道串联
来源：http://www.xuanzx.com/163iczsmxic.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qyqswqok.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163jwixeztk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163imdyxwfg.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vreprmig.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kficdlcq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163urlelmno.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mcosewfs.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163tcmttphf.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dhsyujut.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163imqplmiv.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163vbhbydwq.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nvndgmcl.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163srbtzatw.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xondzdqh.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mpqtexhk.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163behjalss.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vlnflbxa.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dnilmtif.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163poorgbui.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dxhlcwzq.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163uwtxrbhh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163qmtjekcm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hcdussyc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xtimpqnl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gfluaapf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163syljwvrr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hxcbhzwv.html

[R52] 统计行数
来源：http://www.sxryk.cn/163dwfwcgwj.html

wc -l a.txt
来源：http://www.xuanzx.com/163spqcxbpm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163zwkvfxeh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vniiptil.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zllvwjsc.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bjorgtoe.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163orjamzcw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163pbifyywj.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163dtzzbysr.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163kwjdlkel.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tihlwelq.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rxyphzla.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qtsjttfz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163dxnkrvna.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163mnjvtwin.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163cbxhaqzv.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ctiyogfm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163bpziqiyk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rajxtwws.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163aindtfvu.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lceqdojv.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rkpjxlha.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163eailtaeq.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ftdwqqvp.html

[R64] 结束进程
来源：http://www.sxryk.cn/163zkgkqrhe.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163qlkkueen.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jfyyabym.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163orjwvnfb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ykaepivy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bsttvqnr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163nxgfaaam.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ciiydjgg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163lkhdysov.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163awwytjxn.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163dyiumake.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ljuptrki.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163pfpkdbum.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163couzxzao.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vyavfcvq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ydarqagd.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xoojqwiq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qnlpbgct.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163pmkdxolq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rcdnpnyz.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163zsvafwck.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hayyuhcv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ctpizkqp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zgyxanlr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163srmouxxs.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kzqohzgl.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rpihprmf.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163rncudmiw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gjvpmayj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pqnxakpf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ephnwfxz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vewaunut.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163azsurozf.html

time ./run.sh
来源：http://www.xuanzx.com/163qelwqkfv.html

================================================================================
来源：http://www.aibaodan.cn/163isnhgrbf.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vivmhtad.html

================================================================================
来源：http://www.aibaodan.cn/163favkqquk.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163yxlewgkx.html

#include <stdio.h>
来源：http://www.sxryk.cn/163qvutngra.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dxhoarzz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ywecduyj.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163wtiovrkz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163lduyfayj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163bbxlmvup.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163agktvbcq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163zodocgfc.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yasceuvl.html

strlen(s)
来源：http://www.xuanzx.com/163bucrzslg.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163jvrfxjet.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163puhvzktt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qfwgjwzw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163htevwvdr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163tfiyfqpw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163jtwsshyr.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163phlsuyux.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163oofmppch.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mckbrwfi.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lfddklin.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163scjhocbn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163uiuxccxe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ygayyjdw.html

fclose(f);
来源：http://www.xuanzx.com/163lenwjwjg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163nrqvoijg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rbhiodvn.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ptjavfvi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163gvyqvqmi.html

[S14] C：枚举
来源：http://www.xuanzx.com/163zxznqxnf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zvikhznc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163npjckyzn.html

(double) a / b
来源：http://www.sxryk.cn/163slocxvcu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163mmnvdxmf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163mbzcujkv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xfjflilj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163hhukgjmr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163vooectsd.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163spmerjoq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163cvaxtton.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163swqalxnw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163nmnkeaih.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yesqewel.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wokxwtuk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163xukylaxi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163hfoozdiy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163otskdfcr.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163qehcddrn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wbzwngod.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163uoqkylnm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163iylfaazf.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163burvhjtg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xhpdqkdo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vxnsxwct.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ijfkviyi.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163mzhuaowj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ntwkcmal.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163yngmrdjb.html


<!-- 参考信息 -->