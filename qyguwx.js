外链999!wailian999！

[Q63] 开启事务
来源：http://www.aibaodan.cn/163nskgzjwa.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163wpqupxdx.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163bkkqujyo.html

COMMIT;
来源：http://www.xuanzx.com/163ntvxxrut.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163zindqpay.html

ROLLBACK;
来源：http://www.aibaodan.cn/163uhnvcgmf.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163puyihbxd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163xxhgejif.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163yrcnnrqm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163uxwvzksh.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163bdvlolwa.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163tdkvtmbh.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163imagrpxu.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163stqlbfzs.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zofabmlv.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163cxjuqypg.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163zxnvdlln.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163cwnfsyic.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163qplykrrl.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163yemaznkg.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163vcwdvewb.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163lhozaeya.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163yuubznjb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hkjdtpfm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163eyhpbdzl.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ojfhlvsy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163isjrojto.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163anjewufe.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163oryojmys.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jjwtvbqs.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xtfizdcg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163goqkxcje.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163bxwqgmnt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163bxzpbqvo.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xmniewlr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163mqzmelzi.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163enpuuaxb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163hhhwrgci.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163onjesdhs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bhtgayyo.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163kfszpena.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163hoxuvtmp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163xufeegkl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ewwzpgda.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163fghlfhzq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163zzdpwzqy.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jkzpjbbi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163mwtgqiow.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163zyfzrbut.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163qwftfrwn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163susxkdwn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zrwlrelo.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ijboizfz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163zhpdtyir.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163irrqnoqc.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ezktcvwy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163kcgfirjd.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163unirsjkl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163yrlqodte.html

================================================================================
来源：http://www.xuanzx.com/163efhjqygi.html

R. Bash 专题
来源：http://www.aibaodan.cn/163rdtzrbxa.html

================================================================================
来源：http://www.xuanzx.com/163nkynpujd.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163cgamcdpa.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kfmhzwbz.html

set -euo pipefail
来源：http://www.sxryk.cn/163wrnocbrt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163yietzsig.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163zwnpkvil.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mbchrzli.html

readonly PI=3.14
来源：http://www.sxryk.cn/163wmhlizcq.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gzanpaeb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163opppwqmj.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163daznfawq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163jwxzygam.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163bbeykihv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163mnnhkqxc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163dlivzscf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163tnidzhbj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163rwxqfpis.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ablodbbc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jqtxgvjy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wksvfzcw.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ivgflaos.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ktpwxsnp.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zttohygt.html

case "$1" in
来源：http://www.xuanzx.com/163fjuxyhxu.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163nfhgxdnc.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wcvmlujz.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163vbqzmhut.html

esac
来源：http://www.aibaodan.cn/163yjnibxdp.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163evycvaqk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163upqvxtrc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qzzkhcnn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163msiokwje.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qmxlyyul.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163xvjzppqp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qftkelpb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163nglvsbth.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ognipzyh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163iptliklb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xbfcqcab.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xfltezoh.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163srooicnu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ybcysewn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163uwbioczb.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163anmmasrd.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163fpsebvtg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163vcsmjxtc.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163zzbyhhzu.html

echo "${#s}"
来源：http://www.xuanzx.com/163xiqcldil.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rhaktppt.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rayjvmlz.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163kphikfqx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163wyxqczpi.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163nebpvbde.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163beacsent.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163lbalmbww.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163yasnpgir.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163pnccpstl.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ixubjoiu.html

[R27] 算术展开
来源：http://www.xuanzx.com/163djczygpc.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vfelmnbd.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cdbdlevi.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163jyqndgdu.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ykqwnlbs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163lvbpzzzy.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163fmdeaskt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ninavwmj.html

[R31] 局部变量
来源：http://www.xuanzx.com/163cjnnivdn.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163kvrioenv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163trsespyh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163vvhzufjq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163miogqjhk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163sujmiypd.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163iyzacauc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163iyeasccf.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163kefjqdov.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163lheztnmx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163riadurec.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ibtmcxbs.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163igpjtgoh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163omfqpbei.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163vnzemxce.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163xfpgrwbg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jldhpjsx.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163trgyttxu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163rguudknj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163qtdjrkbn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mdrcohkt.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163bfqwbyks.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163sxjalbac.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163sozdwryf.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ytuatusz.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163rjzxrtxn.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qbcntbku.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163mnbifktu.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bcloiiza.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gwyzzfqf.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163oazhrjls.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kxqdmmue.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163iwrszhzu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163uwejbpix.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163doyzfbxf.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163lgydsdrl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rbkveneh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vpyjgjmx.html

[R50] awk 求和
来源：http://www.sxryk.cn/163sztqrsur.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gqzephpr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163klhvkoxb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163izgmbzwt.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ciycqiet.html

wc -l a.txt
来源：http://www.sxryk.cn/163cuvowiit.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163pqwlobei.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163dhazsbfn.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xdmbhijs.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163dsofecag.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163rmosycou.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cdbskchj.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163uzaxajeg.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jgeyckbw.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hehenfaz.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rlvlbowi.html

[R58] 下载文件
来源：http://www.sxryk.cn/163njsfryie.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163esqregvz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163psldhdpi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163xtfmrqhh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163wkwhfxob.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163yrdfmvlh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hfrpjpsg.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wstbeyiu.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lazotvez.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163fyzrogzf.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kwkiphjw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zxfzvanz.html

[R64] 结束进程
来源：http://www.xuanzx.com/163mqidxgdo.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163mrrcjmyr.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163srddfago.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hgbqfjhv.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163heesrtgy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163peuaqvey.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gjwecncl.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ojjghrse.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163kdzxdcbs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vktumzfd.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163dafwpvto.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163tyreeozi.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tkzifhdl.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163wfroyvxi.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163dhatfqbl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163aqhcauso.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ywmsbciz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ngxhrdux.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xcpnjqws.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rwrlyqqu.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163labcimie.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163aquagcqm.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163pbnqyszs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ktwsfsia.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ypawunhg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hfuicwzu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163fjymrxvl.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ppiaqqos.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163thubqsbz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jrptfwfb.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163jqsmgzib.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163thxwvtre.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163wkraegyn.html

time ./run.sh
来源：http://www.aibaodan.cn/163tuwnsrqo.html

================================================================================
来源：http://www.aibaodan.cn/163liedldbi.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yelmulza.html

================================================================================
来源：http://www.xuanzx.com/163dlwtavye.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163llazddja.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tmwwgcqh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163uqinmcmj.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163gqnnrpjy.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zrcpohwn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ehzbzvmv.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bbkhnehh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163kmhyldkb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kjrwyaat.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163tmbwaalz.html

strlen(s)
来源：http://www.aibaodan.cn/163pchxhzew.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163onqnxytn.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vfexgucl.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163tmdbsnpz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vsonfojh.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163srkdmwuo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163crtwifcr.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163moimnzma.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163clzbfiws.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mgacmpan.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163fqbthxih.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vgreukvh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jdbqmuur.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163cdvkcuot.html

fclose(f);
来源：http://www.aibaodan.cn/163nttzypjt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rolrfqyu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163wwekyrmm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163updizcga.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163qjmhchni.html

[S14] C：枚举
来源：http://www.xuanzx.com/163fmkjqhtt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ksryyulj.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kzcdiryw.html

(double) a / b
来源：http://www.sxryk.cn/163xkysellh.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163yfllgwmo.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163csogirhv.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163scfabbak.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jsunlzuh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zcglmhtp.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ykkritre.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mxyrvwuo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mzouzuij.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163odijtsid.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lpwttcnc.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mndpturf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ownixhhi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163tzzgrcmv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xohndxvw.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163atjtpwlt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wvobcebo.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qmamdlkk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jzrhhzft.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163fcmjbkpo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jdkqwotu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163laewwqqc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163amocbjbe.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163kpltdtlz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163wedterdc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163mgfmvuba.html

static int counter = 0;
来源：http://www.xuanzx.com/163anqzgfsc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ljtzgxij.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hkrmltwd.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vpskdbhq.html

#ifndef X_H
来源：http://www.xuanzx.com/163qtiyswgw.html

#define X_H
来源：http://www.aibaodan.cn/163cqootdmm.html

#endif
来源：http://www.aibaodan.cn/163cbmzppyq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163paunrfse.html

#include <iostream>
来源：http://www.aibaodan.cn/163jdygbawp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nffohtbb.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ejdoqmaw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163fsgbrvko.html


<!-- 参考信息 -->