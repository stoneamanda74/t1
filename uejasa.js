外链999!wailian999！

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163pmybdjcy.html

ROLLBACK;
来源：http://www.sxryk.cn/163cjkdrkvb.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ufecjgqs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163slhoemxz.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ipequuwh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163nlqjwoxz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163usjnpxcz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163jbdozizd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163okjavzme.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163izjvgotd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163fxupjgia.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163shlvoxdp.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bwxdcrye.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mxdtqwwk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163oiyrvoot.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dkuclhss.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163uprkwzlo.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163igvbszrq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hntuwmys.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163zsaivlku.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163qbarohrf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qcmlmetv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163uykrbmgr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163mrgakaei.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163pxwkryfo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163bvomxydx.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163dtaicmki.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163tukwxrpn.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163jyuowejp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163wsajmfrp.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qeejmhxb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163udvgjkzp.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163lgxzkksl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ywljllyv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163uddltytb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163egtvttic.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163aqvdzsvv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163kbbqeuoc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163umqiaelu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163dnvkndth.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163nrviyxnb.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163uwftqjhy.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163uwydhuze.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163yatyquwy.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163kcrevmcf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163fgoehzfg.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163zneqeggt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163czpfddgi.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163yexodcgj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163isxcfyni.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163hurdqgbu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rmcvshrr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163fjjiohmi.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163dzukaqui.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163evhonrku.html

================================================================================
来源：http://www.aibaodan.cn/163qnghfzpa.html

R. Bash 专题
来源：http://www.aibaodan.cn/163dtufywhc.html

================================================================================
来源：http://www.xuanzx.com/163jwkekety.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rkrhmmdn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163xmvstgrd.html

set -euo pipefail
来源：http://www.xuanzx.com/163lxlpqltr.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163zfwctzql.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163eqectadf.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163nknrlvux.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163klvprkzt.html

[R04] 位置参数
来源：http://www.sxryk.cn/163wnnrjfww.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163exlyeznk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163nuvxcmpw.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163dduxmnph.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163yndorbtd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163emzmbudd.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xuriutak.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163emgjvbjt.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wsxkwfwj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163cxhzhknu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zqvninbd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xckzqgac.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tlxlbyip.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rqcgwmoc.html

[R11] case 多分支
来源：http://www.sxryk.cn/163idtzmkpf.html

case "$1" in
来源：http://www.aibaodan.cn/163ylkxkukz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pfevijss.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ptsyczzt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163fhbdeaug.html

esac
来源：http://www.aibaodan.cn/163lheinnnv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vijuawox.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163sarygbca.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163hjohknpi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lbdbihvg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163hzhrvpdp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163pdzjkehv.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163vyknwyoi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163kehfulow.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163mydqqeir.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ctrityrw.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163xzprgohz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163sxtifobi.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163lbuljffb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163otremthy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163bqldzmlm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163plbtdpiq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163xjjgsndg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163dsxxypye.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163bpglrgwk.html

echo "${#s}"
来源：http://www.xuanzx.com/163rpfvgcuh.html

[R22] 截取子串
来源：http://www.sxryk.cn/163uuycahbv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163yhpwxxca.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163erhtlvbn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163sgoffadk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163zincjqez.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163bikrdrvf.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163mcqkvdxy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163zwcewtgn.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163qafwaawf.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163onvxpore.html

[R27] 算术展开
来源：http://www.sxryk.cn/163uqyvzwou.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163oirywfdl.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pnxovsel.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163jtgrpplj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vvqzwupd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163hluvoowh.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163paxgrprj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ttniwyxl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163moluyxdi.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163stowvpbe.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rjcpxtzk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163atijenkb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163yryvrngx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jrwatnhm.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163pwseqjmg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mirikupj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163olinbxll.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163nmqurvmj.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163rjfwuqzh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163dwbmpbmc.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163swiphzlt.html

files=$(ls -1)
来源：http://www.xuanzx.com/163tpnrmunj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163czaeetci.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163gtxeyobb.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wvmuvitb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dgsqhfhf.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163rduvbhlu.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163hvulvulo.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jbpcqzet.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ohiwoncs.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zsbvnlnv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163cfqyqylp.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dsoaxkjj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ulmsgtlw.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163srcevryg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163lcutvdpj.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163iczfcads.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163obsllwcj.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kradpdmx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163raiarcxq.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163avaurdgn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163lmkizzcz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163awzzxxou.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163pwzhjuku.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163diwvaobh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xsmecezg.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163wkrdyvyz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xrmpocvt.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iomcapju.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163sregtail.html

[R52] 统计行数
来源：http://www.sxryk.cn/163zybrtrxv.html

wc -l a.txt
来源：http://www.sxryk.cn/163ggcbdwmy.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163fddlfamr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163thqjbjok.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ompgzfgf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163hhjwnpgi.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rgnubkkx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163qwojvrkg.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163wirozrsh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rgxizkux.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wcezufff.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163vmldbwmg.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ewkbktar.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gqpkpcwd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163pvlqmxdh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wcbquxqb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163wenvsrjl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jligqdkc.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163xzwciqvk.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ivnrfckz.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jbszrwdu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163cfggugtp.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163nzswrwqf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ikqkvitx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163kffebjxq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jhxyxqbw.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hndjnjea.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163wkoksndh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163tdnkkorv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ymgqzjmj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xerfjnte.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163hwmsqmsn.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163expzyuwx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dtwxfdzb.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163uyfvubaw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163whinsvno.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wrglpnvq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ofihyklg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pomcfanf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163klhsgolz.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163pjywxubb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163demlxcrv.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dmzbkoyi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cpikguwm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163kkgrdcou.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wzoolqcz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163kjwobmgi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xqjygntb.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163hwxwdflh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dpzsdciq.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163muckghxp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163aigpojnh.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xshdnacg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ruzmwmyf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163rkatvsxs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163oltesspu.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163nmbyujkj.html

time ./run.sh
来源：http://www.sxryk.cn/163jfyprily.html

================================================================================
来源：http://www.sxryk.cn/163tgqhhedr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yaktimyf.html

================================================================================
来源：http://www.xuanzx.com/163qeioqyzf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xsaqudsk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163exbtzqmz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163jzfttwqg.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jrqyuoly.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ueptenvp.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hrkpetvu.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163waqolgqz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bjemmqvo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163zmfmgpmm.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163phpswchg.html

strlen(s)
来源：http://www.aibaodan.cn/163hzbnpnjy.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163uhpgxcly.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163fdgsnmcp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163klhelqwn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163jdloeboz.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jiiokxdv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ewcpwaxz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163kuekkqkg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163nkqxscuo.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vttwkopc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163rbjtromc.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fdsnnxls.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163dacgcgpt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163otvuygnv.html

fclose(f);
来源：http://www.aibaodan.cn/163mmlnyfst.html

[S12] C：写文件
来源：http://www.xuanzx.com/163uosdhoxa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163cgliruay.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163iolnshte.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163tgoifevq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163qfyesxux.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mdvwvrlv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163wzqroglq.html

(double) a / b
来源：http://www.sxryk.cn/163qkmtywma.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163tdirswil.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qqhajuyi.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163njqkjhyg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jfjesptg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163oqpmkldb.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163rmdvxedx.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163bnrqyady.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ljadplgv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163lxjywjzo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kukeqfpn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163knsqjloh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163jqusaysj.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163unqrgvws.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163pzvpyxtp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163lkgbwwil.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163svovahpd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163pzhewsnw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163botaghmf.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vfuyabbm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ofooyojv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ufmarogv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163szahlvwb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jwwsldfe.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qidmtbnw.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163bpvtjaaj.html

static int counter = 0;
来源：http://www.sxryk.cn/163atamywvv.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zdepinra.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163dmbryfcl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163aqqvmemp.html

#ifndef X_H
来源：http://www.sxryk.cn/163bqwxeywh.html

#define X_H
来源：http://www.aibaodan.cn/163xadonunc.html

#endif
来源：http://www.aibaodan.cn/163whslvkxy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163wnszfwvv.html

#include <iostream>
来源：http://www.sxryk.cn/163immrqbvs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rhzakyss.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163rlusugte.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163cjadvaoy.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ukrpfnfn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163wwyygqsu.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hjlnnnhe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163rdhuholm.html


<!-- 参考信息 -->