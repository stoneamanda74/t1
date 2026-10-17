外链999!wailian999！

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163uxkhzyho.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163gohhwpne.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163wdchkkwq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163vilxqqok.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163qlfwwaqr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163lvwuuetl.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163icbjbfuk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ciqcjgqp.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xflxkffi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163knfqhewd.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ullkacem.html

COMMIT;
来源：http://www.xuanzx.com/163gmpqoocb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163eekejnmo.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kjayscqn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163mljbklzx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163bvodrfmq.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163yvoelezg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lyfurwxm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163jztkawfs.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fnthyogp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163btcbyrux.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hnzjzhdc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zkdpdvly.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163awvsrbys.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163bebcrtok.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163mxcbqfqy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163wimbihet.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163bfqqzvap.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fsufsuyy.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163emdrwrdr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163kkyqmcpy.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ghaxqkse.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163voyqxqgw.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163lfvzadgo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ctypfohq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163lotfyzpx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163tllzlzgi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163biesclyt.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163rioyneza.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mtkdgpxi.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ipjuihfn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163vwtckska.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163yaicubdu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163attlnqns.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163efppcrom.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163zsdkzfpy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163wlgcxhrl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rqkihpel.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hqysnimp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163gjsjnkda.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bchwlmlg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ilmyprzd.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163eibkgbzh.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163olobdhzo.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163eypqshdl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163mpinnqyx.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163csiwccpb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163chqmcbhm.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163quymubox.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163grvijvbz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163czmrekam.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163smmrjdnt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163htjbxboh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163kvwmjkin.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163reynmlyh.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163dydommuj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163forygbdw.html

================================================================================
来源：http://www.sxryk.cn/163cskuxtfw.html

R. Bash 专题
来源：http://www.xuanzx.com/163egebablm.html

================================================================================
来源：http://www.xuanzx.com/163xxiypeuv.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163sjvzljpw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163efsmuckl.html

set -euo pipefail
来源：http://www.xuanzx.com/163zmwlhdsn.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ayxncpwm.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163aikcdrth.html

[R03] 只读变量
来源：http://www.xuanzx.com/163diksfnna.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ryatdktt.html

[R04] 位置参数
来源：http://www.xuanzx.com/163btrlbrpw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163kdtcvfom.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163deabjswe.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ankmmtcx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ktitpcsn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vchplczt.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ilzudexz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163xtagotyv.html

[R08] 数值比较
来源：http://www.sxryk.cn/163vjmcuxev.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163zfufaarq.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163lvbhceod.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163llvqrovc.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mdmdlbny.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hjzphupf.html

[R11] case 多分支
来源：http://www.sxryk.cn/163waqmqkff.html

case "$1" in
来源：http://www.xuanzx.com/163jcknrsjx.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163gjsgnedp.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163opcirysw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gpxztsmt.html

esac
来源：http://www.sxryk.cn/163ebdffuur.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163wctbbyef.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163avnqwzlh.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163vjtdzqul.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vnnavbeh.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163kpopabrr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163murtmyhl.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163jczvapye.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163vyneaehj.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163oahbyoxt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jpcbtxgu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163cqvgtajr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hwgonpbx.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163daoxldju.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163adxyzvqh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163gvjwrakh.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163usbuvzdr.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163fxxwkgtk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qxpfkuvy.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163keqqgixl.html

echo "${#s}"
来源：http://www.aibaodan.cn/163uzafohce.html

[R22] 截取子串
来源：http://www.sxryk.cn/163apdyylol.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fyaqebtc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163acslnytg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163reqpanpv.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rwcltsbe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163rlhrrtlc.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163tglbqfjs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ueuwgzfh.html

[R26] 命令替换
来源：http://www.xuanzx.com/163tmipffrx.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163icddehfr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163amgshbin.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gnfkxkaq.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163yrxcbbub.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163srneluuu.html

[R29] 定义函数
来源：http://www.xuanzx.com/163qrsdeqrk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163mhjfqycb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zkdpvpuy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tmojqwqc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ifjyuzlt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163yburgnwm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163zosfwaiw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163gfagrsmo.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163iguamzle.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163czijbpwu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163meexrodz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rpfvoxaj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xfmiqoja.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163powglonp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ewhvbbpa.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ffigfsha.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qkzcdjug.html

files=$(ls -1)
来源：http://www.xuanzx.com/163bhdlnqga.html

[R38] 管道串联
来源：http://www.xuanzx.com/163kytqdfcs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dipeveja.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ojttrlpp.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dekkdqhv.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ilklfxae.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xwlludhn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163qqbhadxj.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163tjwfjwgg.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163znnjfmsi.html

wc -l < a.txt
来源：http://www.xuanzx.com/163gzufsrou.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163skyvlfrc.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163arhzxmkm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163redjkzqv.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163eqzrnact.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xqnwcwbk.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163idbhqywd.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163pmpxqtue.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wdtigsdr.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163bunfbdcy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wuyjdjhx.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vzxqdgyk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163owaddwwo.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163uizzfpoi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bmuwkmxj.html

[R50] awk 求和
来源：http://www.sxryk.cn/163cgqoffeg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163pdbjvfdz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iqhvtjqn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163lgkijsql.html

[R52] 统计行数
来源：http://www.sxryk.cn/163gqximqgf.html

wc -l a.txt
来源：http://www.sxryk.cn/163fbjjiukl.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vvbpvweg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tjxubmig.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fvkqkmok.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gshmlltd.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xswfkyig.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163eadekdwe.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163sojtdyit.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xkfrkipo.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163bnyjxvly.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hgdwlmfx.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zvujelma.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bpjoyfha.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163eanrbduy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163grntguec.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163swttacui.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163scxopylg.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ltlzpzhd.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163npzypigo.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163oqrhvnsj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163qnenfgsn.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hflozoro.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dbcvgvcs.html

[R64] 结束进程
来源：http://www.xuanzx.com/163stqsambn.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dmjknhjf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163uhujgwyo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163kyktwyxf.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163itxbsghn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163omzxixtg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163vmfvawaq.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163tcpimxpp.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jkzctjuz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163tfdhfqij.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163uqqsevuz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163cfgvofkh.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hcepxhjg.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163yhonzrhe.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163herjksmk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163upgvcxqp.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qagyzlvy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jospnjkx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163bjopymre.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tjrgaxnr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ldbtqxeh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163lsozyvtn.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sxrsqvcn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zsnmkndn.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163uosurfdc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163knftlufa.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tgesgiwi.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163tmxrglow.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163zylurkdo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163klhzokfg.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163eecvyizo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vbzynvwv.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fxjhwkyq.html

time ./run.sh
来源：http://www.aibaodan.cn/163qsywkugm.html

================================================================================
来源：http://www.sxryk.cn/163buvtjdxe.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163oaboadmf.html

================================================================================
来源：http://www.xuanzx.com/163aqyqweyu.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163mvdkzhcc.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mrzevqeq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163oopvigzw.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wgtffaal.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wqggkjrl.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ukolxtxo.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163oteiaclh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ikbcmsux.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163qoojuyif.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gfvopgbu.html

strlen(s)
来源：http://www.sxryk.cn/163glbqtvhz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ttfrqldo.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163jdhwbapb.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163oapwirmu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163evxwuwmr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mmmnvzam.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bkpcmwmy.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163hphvqjew.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ujcvkgof.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lzqsuzco.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163dsxpefuy.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163nzmmcivc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163rvktbqeb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163dtfwjqbt.html

fclose(f);
来源：http://www.sxryk.cn/163rcplodfu.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163vzoiihol.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163aqbficwm.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163zcvaslmq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163dayxiphn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ozthtigk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163rmnlrxgv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163loimxbpn.html

(double) a / b
来源：http://www.sxryk.cn/163rzyttkzj.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163gizwoeir.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163fmxtsldz.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ggzjmtcb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nlzighkj.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163jmwnjjtz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dkupdzmt.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163gmlqnhsi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fuomcolp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163vhdcefbq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163elotpwnq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ayfnshuw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163txwclght.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163awndjjdp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ktyiitoo.html

[S23] C：随机数
来源：http://www.sxryk.cn/163oildhbzo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163iuwfmnxk.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163yqonyfkp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163njwmxiuy.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163bidopwbk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163kndweqio.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163psoopeck.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dqejmmmd.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tpixbqfz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ougehvcf.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163lstuibtm.html

static int counter = 0;
来源：http://www.xuanzx.com/163aqdktfwg.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163vyalmkql.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kiquuray.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163adpycjrk.html


<!-- 参考信息 -->