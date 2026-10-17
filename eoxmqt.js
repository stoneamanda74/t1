外链999!wailian999！

[Q63] 开启事务
来源：http://www.sxryk.cn/163yleygvev.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163bqgqnjbu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163oqechkdp.html

COMMIT;
来源：http://www.aibaodan.cn/163xjcnbfcc.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163qxxtolrj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163gywomahn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163xitgkyss.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yciijbso.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163pvtmvfus.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163cracsepk.html

[Q68] 保存点
来源：http://www.xuanzx.com/163gicckdjj.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lvhnzebh.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163eqqgyiaa.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hrsdqbng.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163kaxlpqdg.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163fbofiohq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163kchtsaor.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rxqcbnpr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kvcxizzo.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wmlxknyj.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163bfvjjqga.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163psuyshxf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163grtthhzk.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163vvtjdfqp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vqhdcdkr.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163duxbooae.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163arikxjtc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163mbnswtrn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lbvbdkuz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wecdfvbx.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163yhvssuev.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163qatqnyou.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163owkzipka.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163svbwahmz.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bqxsueor.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163tvsnijew.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163kpsgcbun.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tqfyiqtb.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163tnhucpgf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163cmaakers.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163tupharqb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wipenxmu.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qqewgxfe.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163awlcafmn.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163llxxocqf.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jwqnjksv.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jcuoerps.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163jamvpzgc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mfuhhjpq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163nwusotlf.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ahsvbdtb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163fjdbjrsj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qrmvajbz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163eidstrdj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163klwffrly.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163gxpiviwa.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ljbhejhi.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yzysqcjg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163loadfanu.html

================================================================================
来源：http://www.sxryk.cn/163hkofgpuq.html

R. Bash 专题
来源：http://www.sxryk.cn/163hnurxuoo.html

================================================================================
来源：http://www.xuanzx.com/163ytihvkiv.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163mzptxqhq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gjlkmalx.html

set -euo pipefail
来源：http://www.sxryk.cn/163uihszqvr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163tndkvkte.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163uzxhbfnh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163idkdcswe.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ualzoydi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jgjstzqx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ewgejsrz.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163gwfttkpj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ergrzbeu.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xxqjlpgm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163iewylpuz.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xpdxkbvo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kqfxzbgt.html

[R08] 数值比较
来源：http://www.sxryk.cn/163qoerauls.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163kokfuvyn.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163zdotafke.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gvklxbbs.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163njsyvele.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163avhzxdvz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zamhzipj.html

case "$1" in
来源：http://www.xuanzx.com/163psmhparh.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163vdqsyifg.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lqugjvip.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kqepdxnz.html

esac
来源：http://www.xuanzx.com/163eylgzzhu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163lovevvtq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163erwiciof.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163desxpjmd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163iuufykzs.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163itxwvxhd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tsvwultc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rdijvwmh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wliemmgk.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ettauovq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163pkvdfpxg.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mngklkjm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fiaztcsn.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xxfaxali.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163fdlkrtva.html

[R19] 数组长度
来源：http://www.xuanzx.com/163rpqqccry.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ekvjpdlg.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163hyhizffh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163xjapnjnr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wprlfxrg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163empmrfvi.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ykmspjdq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163xllaenrl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163evhigdgj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163gcczvsiw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163bbcmxzvd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163uivuyxzm.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163caumeitp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163okjolbxq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163yuspxxhd.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163spuqqitl.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kiwzkfso.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vwktphpz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tzrirmit.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163awbdbbyl.html

[R29] 定义函数
来源：http://www.sxryk.cn/163dumvgpqh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163fopszwxj.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163hiisbpfv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dpxtwlsh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163owqkyklp.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mzmpfszr.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163jlnlaqrx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163beajpses.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163loanpbmt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ewuvcqxz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163suqzhole.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dwwpayff.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ajsruvgp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nrnuxfsz.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qijwgnmy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163linnlqsz.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163lnifzyip.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163kksoouxb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163kytzldic.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163nwbzutvb.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163rixbkxfu.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163gbplmuwp.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163mfunotvm.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ajqaukpl.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163owztecsp.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ksedyian.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163znmwanpf.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lladallg.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163btzuwqnz.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163roqfygoy.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rraizvce.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163uxocpogh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163cspttbzm.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163uwnsfvwe.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jdnelgdm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163tnqqarcs.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163gmqqyrpy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qrfdoyjr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163zpaipzyn.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163prekgjde.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bgvpjkeo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ehnscdaw.html

[R50] awk 求和
来源：http://www.xuanzx.com/163jknofzmt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163difeuemj.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163odqisoij.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163xgongltm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163bwcficlg.html

wc -l a.txt
来源：http://www.sxryk.cn/163nmzwvsuz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kmazgceu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163wnuhmfea.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163uebxrrdl.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ehljweio.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mgzukfap.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163uqolkebv.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163dlnkyiae.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163svbraogr.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163lfdgtxxk.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ckixlgki.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ahgiigho.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bwzbdgtm.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163yzochacx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ytzgtjhs.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mjseiiuk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163wmipvqmq.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163bvucghsi.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163qomhjanv.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ozexccbh.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163lozwyptq.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163tcxbtmej.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163nuzkjpzs.html

[R64] 结束进程
来源：http://www.sxryk.cn/163olyywcty.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dcjafetp.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163envqjupi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bbrhkdvt.html

[R66] 定时任务
来源：http://www.sxryk.cn/163knsgaqlv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ghgpxciv.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163sspuhkpj.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163fwzsxfiy.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163pqqnikcv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cgfwjeeb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ngagbpzb.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163thkffaal.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ddotwkvo.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163vlzpkxaw.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pmmavjmh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163olmtxcap.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lxiotkkl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163msjskhxt.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163jdbfdupn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ccqhwlsp.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163wgpoojhf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vgqcjepd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163maujglem.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xnosduxs.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163svwyftmi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dumjimhv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163piuhruhv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163nzwqkvcq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ispqgsiu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163rlmzfeeg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163huccoavz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163uwugvfvv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vnyfktkr.html

time ./run.sh
来源：http://www.sxryk.cn/163xktnfxto.html

================================================================================
来源：http://www.aibaodan.cn/163ezbfprkp.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163msigklkv.html

================================================================================
来源：http://www.sxryk.cn/163ukthjypl.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163dqpbmpcb.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jnmxbhlk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vrturutt.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163dmnhqexm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vnkejjum.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qiabryui.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163zlalapkf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163bjvmnvym.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163wpofvjhd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jcqxhkzp.html

strlen(s)
来源：http://www.aibaodan.cn/163lzrjwgmm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163jaeqzvfd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163trlmogdb.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zfblmolh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hipzgyau.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jyakqmpr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gzrqocze.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163agxhrrab.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qsggusmv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163nkinpjvx.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fqgglpta.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163sbzhbvtp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163mltqbafz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xroydjws.html

fclose(f);
来源：http://www.xuanzx.com/163svlyeafj.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vjxmoudm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163uajofkcb.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163mmsdbhvo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rmpzjtdw.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gnhghrbh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163oscjpghv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ukmwzace.html

(double) a / b
来源：http://www.xuanzx.com/163pexdzzos.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163gzmswwtv.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163daijmhpb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163kjmvchuy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rqtdgnpt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163wqokxavy.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163fsmqpoxf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jbitwcec.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cvvbcmje.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163krvodgqx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ehkabcuo.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163qvdutaxq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163drpmhbem.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163bdlkutjs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163uzmiapsx.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xkbbjtmn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nuaihcid.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163gzpupdkj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163szoixruw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vyrahlmw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vbypcbeo.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qwoahbhf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163zxmamjwa.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163enbmpqyn.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qytnriaq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jftsydqm.html

static int counter = 0;
来源：http://www.aibaodan.cn/163wrpbcfnm.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163szuusjql.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hezpnfyw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gvuiegsu.html

#ifndef X_H
来源：http://www.xuanzx.com/163awxejnwu.html

#define X_H
来源：http://www.aibaodan.cn/163xutxynpa.html

#endif
来源：http://www.xuanzx.com/163lvigcbhe.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163yqyrlkcx.html

#include <iostream>
来源：http://www.aibaodan.cn/163zsfsjzrz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rrmpvder.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163awgeapof.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ooqirlra.html


<!-- 参考信息 -->