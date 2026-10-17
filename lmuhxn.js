外链999!wailian999！

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163svcmqnql.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ugksnemx.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163imxqcjkk.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163mzcsdcon.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163cyhxgpcw.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163btkjphfw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163sammgzyh.html

[Q57] 行号
来源：http://www.sxryk.cn/163dwczqedi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163goxknohu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163aujjdhzw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163zpcsqlff.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163tqfzkcxf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ctiennfl.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163vcygmcey.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163yzgaojxi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163yjuzwdgd.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163otvnxpro.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163hvkwemxs.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163zhkjrhpb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vfzadwxx.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163kquozsbv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mkldsckk.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wagjlitd.html

COMMIT;
来源：http://www.sxryk.cn/163jplqsjkf.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163slytiefu.html

ROLLBACK;
来源：http://www.xuanzx.com/163qusxjepb.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fmviyfkx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hnhqfjdv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163uewttiqe.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163mgowbsnb.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163owkqlatz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ktqnxrcd.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163noccxkga.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hilcqasj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163vsfwcugb.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163oihvwliv.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163yohhmhgx.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gxyahszi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163umwvqgzn.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163caswvigb.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163lrxfyhbt.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163sdsmkxtq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zlbrxipn.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mkfzmhtz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dgcxysrw.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163srfardvl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163byvvdwlk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ebfvcjnc.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163zzlwxsdy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wvnydrsn.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163jijtnuag.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nfmmjzvt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163wrlllrcy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ilwdvlsk.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163omcobzyd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wlzvprci.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163uuljlsod.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163wfcbriac.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ehmqlhev.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163uyucxrsa.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ukdarumj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163yfqutzgs.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163luhwfglv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163tjefjrfd.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ulmyqoxw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163awmxpdwy.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163loipsmsq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zfxgeoyb.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ntlcpigl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wbsxnjxr.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ijchvhjj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gtmmvcbr.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163nydejjdc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163aamoipiv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vsslrrqg.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163whkddjmm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163lfhncdbb.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163titffzpk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163qlvjqdwm.html

================================================================================
来源：http://www.aibaodan.cn/163gmzpjbvr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163hyazlpgs.html

================================================================================
来源：http://www.aibaodan.cn/163bfkduaxv.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xlxfliwn.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163fqidoahm.html

set -euo pipefail
来源：http://www.sxryk.cn/163erbehaaz.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pnglfkrm.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163qpmbsivh.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ejchrvhl.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cxwwqnqw.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hvhshpsj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163blmufxfw.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nlhvjuwa.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jppeqbki.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163bktbeqvr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163zrdxdyaw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ijwtriun.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163pkrdqpvb.html

[R08] 数值比较
来源：http://www.sxryk.cn/163optvbrse.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163jqtvhmfw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163nqiruild.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163dellltsq.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163bulpyhzn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163sboicnym.html

[R11] case 多分支
来源：http://www.sxryk.cn/163yzrvdotp.html

case "$1" in
来源：http://www.xuanzx.com/163jrrerqkb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163lfgslkbe.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163trtzlcsv.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163fgzowyow.html

esac
来源：http://www.aibaodan.cn/163erprsnhn.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163wrzedhhc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163bvbyaaum.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163avknqexb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qafwzhid.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qbagmgfy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nbyhlset.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163dbsnzvck.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163snbuxgbw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tonbgyay.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163kwalhnll.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163lkemccwg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163wkjiaywb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163raqwwrrv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lthtnzns.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gxfkkvpy.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163hokyipta.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ryopiyrk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163sbtdsqdh.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zlbytfei.html

echo "${#s}"
来源：http://www.sxryk.cn/163msmfotxv.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zycvqbwn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163nsdhxtry.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fqexgqfk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163skcbybav.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163yyerfkze.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163gtjarter.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163slanuelb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163rknqhyiy.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ibfkrvav.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fzezogkf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163byzrtjws.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mxaxekgd.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163lrkqaglm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ueldhghx.html

[R29] 定义函数
来源：http://www.xuanzx.com/163jwtwhfeh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163hrqjaqeh.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163sljmdjlu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163usandynr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163wetxtecp.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jrqgjhhi.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163jiucwgig.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163uendhklz.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ufelsvbf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kxsupynh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163azgnsuyz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nurtwkdd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ohqhvodu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163twmsmrdq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163gvjfpvip.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163qwbteyfo.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jqtfhcto.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163exfysiyl.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163vumivqro.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vgiuctml.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163yjzvtkpp.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ulgqdrkz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163wmidithd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lflvadnt.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163bsuqekid.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163slbwbmdz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ofmnzdhz.html

wc -l < a.txt
来源：http://www.sxryk.cn/163kvuzjofd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ftvenybr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163sixgxwaa.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163wagvsfoc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163blzbvgab.html

[R45] 批量删除
来源：http://www.xuanzx.com/163jdketmhg.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pdvhvhmw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163obbmywnt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163hcwushyh.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163jtwsvrsa.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wrlzgtyl.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jobecouc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163qtknutkg.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163cqwmhruj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163nvwcmkes.html

[R50] awk 求和
来源：http://www.sxryk.cn/163shgobhek.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vivatbwe.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163dgriszux.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163goyamtre.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163klldgaes.html

wc -l a.txt
来源：http://www.sxryk.cn/163nocijbow.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163dvmhxfbl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163grlufctr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163yxylahdd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163zyxyuhgv.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qbeyoytj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163rbxrfzno.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163gyqbmhsr.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ajjdgrvt.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163rrnhrmte.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163smxyjxyu.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163bfysqimr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ljrkpehz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tijgctez.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163nndmzaxf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zpuuropo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qmuzuldf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qipbxmwm.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163qwozruaa.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163rthzkvsi.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ftjhfvts.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163jbjixcdo.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dfnmmtzx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tlunzefx.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163iufvftsa.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163omsbtsdh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163tgiabbxv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hjnktttc.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163lgjczpza.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163syomjndl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jgexbkue.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163hhcfoljt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ylrhonmm.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163hpclwzrf.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163tcmseexf.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tfxqvbcj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163bzkkzprt.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163pprttkcg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163etlxjyan.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163vqlmphhk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ybibqekp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163xznuvpll.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163fwdbhshy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163mkfoboug.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163nizadprd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163svddfarm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qjuafnve.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163qzcccpnd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xoknfdfk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163uhzdzurv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163itqckyva.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163pcnqqins.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vpzhdomz.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163gauimjam.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ihvgeaak.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ssmhrjth.html

time ./run.sh
来源：http://www.sxryk.cn/163jienaolb.html

================================================================================
来源：http://www.xuanzx.com/163zqbqdebf.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163poifcxgl.html

================================================================================
来源：http://www.xuanzx.com/163ljsnmoos.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hobttdkj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tdltqvdb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gyefeoaj.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wwterjgk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163kpsknhjy.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163orsosfyj.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ykuivyym.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wisxfofm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jbstbddg.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163behfjlqy.html

strlen(s)
来源：http://www.sxryk.cn/163pkoeytwf.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163osrlogxe.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163nljetgme.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163avpuqpui.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163lnlfoazs.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dlammwzy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zgpyuvot.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163kaxhonoo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ysmgvfgr.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rbtorgcc.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163uuamscei.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ndzejqtf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163gbjcqrsd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163gxfqjjjf.html

fclose(f);
来源：http://www.aibaodan.cn/163ftzepitv.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163iluvzhtr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163sthgnvnj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163fksnoqck.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mjshwayg.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bvnewygx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163drtdwlkr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ldmjqmil.html

(double) a / b
来源：http://www.aibaodan.cn/163nackwzmg.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163drhkrcib.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mirlijvb.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163uagrsiov.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163spqxymhf.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hcopsrpe.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163bpvnrcez.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163clzdxmnw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tpkkklxh.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163equwsqdc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163imlygpgu.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xfuqkbnp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qcznzijr.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163rlcdcvtg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tjsdlaol.html

[S23] C：随机数
来源：http://www.sxryk.cn/163yxcodnwi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163cvsnlqtw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163unbocgjy.html


<!-- 参考信息 -->