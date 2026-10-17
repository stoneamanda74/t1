外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163cjgqezub.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qlownkkq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hmydmjxo.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ypoumoor.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163rmhtmhzz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163lklgjnhf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ycdnmtad.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163fjwicera.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kfrcikzh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163tjumlpks.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xyidiqml.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kiwgzwap.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163necmnqeg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163lstyfclg.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163aaimmnxr.html

COMMIT;
来源：http://www.sxryk.cn/163dlgngxzq.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163cfvfwtvt.html

ROLLBACK;
来源：http://www.xuanzx.com/163ezqempsa.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163cbttcfqa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163soxnewgm.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ianmberb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rifltroh.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163oaipozho.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163rxfrjwnu.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163yyrmilsc.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qatklgvd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163txhfvlej.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163rzgksuwp.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163eilvincw.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163xkyahzyf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gfjwxhjx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163vhgwwboy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163yeaksyfk.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163lcxbuolc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163srojuupg.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163fkxhcorp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ffayvrgg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163oylhzyqt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163llefckou.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163iqwfuwzp.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163dglptrka.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163kqhhfykc.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163hmmrhrgs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pxbggglj.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163qxgwvzeg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163bepsknps.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163oxnlikny.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ypkxvviv.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163jqjbhnfs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163eaqxnyin.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163unonmqod.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163nywqglra.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ntvxzdfr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163mejugosk.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163cwazepzs.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163bpeqmxzk.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163quqeeuez.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vcqtiztf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163kwotigck.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163jujaqnaa.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163mjdyipfe.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rgfjxmph.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163bgumatzj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jtjnpysk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zymnkdxv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163okokeeiv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163slkqwlwb.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163sodrcyfr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163bjvrvxqg.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163cjgplxdq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zeipnkox.html

================================================================================
来源：http://www.aibaodan.cn/163qhkyffrj.html

R. Bash 专题
来源：http://www.sxryk.cn/163eskkvnfe.html

================================================================================
来源：http://www.aibaodan.cn/163bwpxvehs.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163msjtnzqy.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tkotnwrd.html

set -euo pipefail
来源：http://www.xuanzx.com/163ozakcays.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163zyluyger.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fjxprccp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163sxvcqumj.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mjckfifp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163akaizbix.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jampajve.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163kirocizs.html

name="${1:-default}"
来源：http://www.xuanzx.com/163rhseekjs.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dkhbvvzg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163wpmakdjr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163naqwurfx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163cgmbfkpo.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ynxudkch.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163knwpebzk.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163rhjvriyu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163pwbzeoeh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163bxpoudyt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ewkojyex.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tecxwyhn.html

case "$1" in
来源：http://www.sxryk.cn/163aeltanld.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163sbquedkf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163avitwzga.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163zaudesdv.html

esac
来源：http://www.aibaodan.cn/163eczhlnvg.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rddtoucf.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163gamdekrj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tlwceqaq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163wdqdgrqd.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163lxcitvcq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qewajwhg.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163rhmqyzlu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163kzjrojwq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163phbwicjr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qpipwfcc.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hvvvwfap.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163dxdfhojl.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163wfjhfyma.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xzobwruy.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163vjzpfsiw.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163qlhhzdma.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wpuwaorx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163eldoqtur.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163pmntfufw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tdvecewf.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ypfjnyky.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mqystzbh.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ibkzfvso.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163kqhhbwww.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qoeojoxh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zmdohwbj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ebnyrhqj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163lhbwtumk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gwajoaef.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ajgghuku.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ayubfwly.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tssaprex.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163cfnxpftw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163odlpcdcz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qlqnytfe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163kbpyghwr.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gurwchbd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163qfdjsbgl.html

[R31] 局部变量
来源：http://www.sxryk.cn/163oiptzyow.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ufowddzt.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163idsfcflx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163vwigxnvu.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rhqriafa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dzldswqk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ypcwsakq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163auudtbim.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163oxtsftyd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163mvthdknx.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163tgawtjts.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xfeqjxoj.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vrjjloxj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163fsxtpgki.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163tgqahylw.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163hdzqsnam.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ogeipvgf.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163tbglsrgj.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163dzknlpfm.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163cufyzgsa.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163blhofzze.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xbtoqvpx.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zvorejlr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163msnkiayo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163sflfeptc.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pleidexr.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163emotldrh.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163nidaemjr.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163izmcovjv.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163irkgvers.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163mnoyazur.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163lgfkwmsy.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163amfsoekh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163lqxneslr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xhjshdvk.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163zxcjhxfc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163urayuzxk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163mygnjcjm.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163fajpklad.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163thwbzngt.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fmqmwixm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bhfgztfu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bqvkhkcu.html

wc -l a.txt
来源：http://www.xuanzx.com/163qasauhpp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163tvxttgqo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pdkuffuk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zvotrcox.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ecdszmij.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163pwpyqbxy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vcmesjkx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163buquwtyj.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163xjbelgli.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zmixgerl.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163suomceur.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mlavygfp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163dvrguuzf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tjvcgnar.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163panpzmno.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lwuvchkx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ijrimmol.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163fhcyfzov.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163tplsqryb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wamgjxaf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hvqubuqp.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tppqjisi.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163bnkxwejo.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qwejblcz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163yshdfyld.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163uiumzcbv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163fvfscqli.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163cvbdixvp.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163pzqrooxe.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163epovaufy.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nknyrfii.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ycsrwhfc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pfwdzzru.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163kgnnvbte.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163delxyvef.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ruhgkdxh.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163vgudxlki.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163htsdnurg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163xkriwohq.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163tgbyqjwl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163encegovo.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163lcnzovbu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163vzstlxny.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163sbrrtlfj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163suitygpx.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xhznkwkd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163olztcqxn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ywxlvkys.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wlgryhhv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ziuzwjty.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163aacxicfm.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ydhdcgrb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163fbilwayq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163bfsffoqs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163txxdtqft.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163wbgfbpoi.html

time ./run.sh
来源：http://www.sxryk.cn/163sasvrkqm.html

================================================================================
来源：http://www.xuanzx.com/163btphpkfd.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kxeqstaz.html

================================================================================
来源：http://www.aibaodan.cn/163pyojiwcm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zgarigeh.html

#include <stdio.h>
来源：http://www.xuanzx.com/163skfvxzbn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ktkyndcg.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wvnmvunu.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163bqwfzhzc.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tpczqnmk.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163yrkgsdfm.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bprnpdwr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ivyjzaid.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163frczvlhf.html

strlen(s)
来源：http://www.sxryk.cn/163lpyqwqek.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gcysojuq.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163dmactzdg.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pookossj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ruehvtko.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ccecpcpq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163scietudw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163fnldwsmm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163uzwvigxb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163jobigcxs.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163mbrwpfnv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163drjjwtyl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wmetnzvs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163smqndqkd.html

fclose(f);
来源：http://www.sxryk.cn/163vfoooctu.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qmophemd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163frazkbwu.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ezsbltzf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163hdhgqjip.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163fsqmrimi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pdaszujw.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ytjyoeav.html

(double) a / b
来源：http://www.xuanzx.com/163sasiuguw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163riedeihp.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163dkhhydsj.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bkpwprud.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fyjzflno.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163lxjaoett.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163uegyfotx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163beyfwrmx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ctkatrpi.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163bradrvyw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qmwerovq.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yahpijtk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ilowtzkl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163xtkwgfqw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163himpktzj.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dnvomzua.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tadfbmng.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163yxxvzndp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163svqtnngp.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163volypyfa.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nifywzxn.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163sdeakhsp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163nbffofou.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163mlinxjbn.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163atfsetzt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ptwgjvah.html


<!-- 参考信息 -->