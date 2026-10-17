外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ezvtizmn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163krwxvjde.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zjyqqelw.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163supwyooz.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163zruyywfn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163lryrnrpb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163njkbufed.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163sajtkjwj.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xkxwweqq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163sygdtohc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163csejzcco.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ygrvksso.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163daagosas.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ozaiixhr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vdvqueir.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wzuofojm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vvjqnrpu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163llhrasxr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ssglpgft.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163tjaxstbp.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163kdyyjyma.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163doaxpdvn.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ugjcgjas.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163qxpuveln.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jneiijuw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163msecqgyn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163lxvnqaxq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163elaauxnn.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163effpkyro.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ixepkiiy.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163gfghuein.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163phzorwfn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163qigmqgzr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ybigextv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163iyavdrqe.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cjqhjdhh.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163olwgxghw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163cuhzvkzj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163cehlbldh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dmazwizm.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163lchjfohq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163awvelxmo.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163snugzntz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163dlimppsg.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163lzuyhmwu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163clhudztd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163sgbgrdka.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163maefhewt.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163panyszfv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163vaogtwag.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163jjhebkql.html

================================================================================
来源：http://www.aibaodan.cn/163hfctoxth.html

R. Bash 专题
来源：http://www.sxryk.cn/163zxmrxsae.html

================================================================================
来源：http://www.sxryk.cn/163hefzypdw.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163augactrm.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163mxgxuvct.html

set -euo pipefail
来源：http://www.sxryk.cn/163eunmknpc.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kikscfya.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163locjdyuz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163kchbdfcy.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xrtpcvef.html

[R04] 位置参数
来源：http://www.sxryk.cn/163cwixadsa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ruedashg.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zobxawpq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163aypbdwxk.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ubfoupjs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ffrvtarm.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163cidpsscb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163beohpvia.html

[R08] 数值比较
来源：http://www.xuanzx.com/163mcpozdes.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ydwuakgq.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zsagpipl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163rzqbqsxj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163lzfsnxfu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163yxxfprln.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tjfemwww.html

case "$1" in
来源：http://www.sxryk.cn/163ozolcxxk.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163phwxkizf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163kzvzbeby.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kixcjctm.html

esac
来源：http://www.aibaodan.cn/163pyasblre.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xnxtvckx.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163xqimaffp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163lhvjdxbh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ucsjxjkl.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163bmccrvwt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163onfvozoz.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zgwhzpqp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163grtbjunb.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vcuiwovm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163igcxagvx.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163gyllrkty.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ndqkwdfd.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163pwespodg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gbhsdywz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163kdpwyffb.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163xyfzpvpv.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lpwfhzpt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tsxyvpwz.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163erkmqlad.html

echo "${#s}"
来源：http://www.sxryk.cn/163hvxrmhso.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wkzbdzbo.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163gamluqvw.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163suybobbr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163xjcxaivp.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ufszwkut.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163pgboinxp.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163whvalbux.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xmmifutp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163nmjnhzni.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163spfyehll.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163mtcrafeb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163cwwhxhwt.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163nfkqjeof.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163yvyhewfp.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163mogjvrnz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163bphtgaii.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qfedxnbk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163uddfsuna.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ffyvszqx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xwvcazcf.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qtmntliv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163hwoprozw.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lxprgmvn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163srnitpxn.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163elfbdjnr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rgbyafif.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163mjingckn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163uyomacmi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163uoajjcdj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jxjqvtpf.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163izwmmitl.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163xupxzwng.html

[R38] 管道串联
来源：http://www.xuanzx.com/163rjozhdqz.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163aabqnycr.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163nzpehxld.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163iqtondju.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ixzfxojj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gqqqmllp.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ygkdlfuw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163dupzqphf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163tfbzqmnf.html

wc -l < a.txt
来源：http://www.sxryk.cn/163nostaoes.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163evealbli.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163dbryymfe.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nhtquwgh.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163pytakjqj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ytdbtiau.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xyjjfusc.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ohxctiwm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163eqemjqjk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ggckacaz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163pgcksybf.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yruzerzn.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ydgdrcxf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ynzuflzj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kxbdsgak.html

[R50] awk 求和
来源：http://www.xuanzx.com/163atctrbgn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163yoznnzct.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163mmeepcog.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163piihyhoz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163pytcitbh.html

wc -l a.txt
来源：http://www.sxryk.cn/163uauoakre.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bbsawrhj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163sxmlmvlr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ibikmvvw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163kmwodqwv.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163knmakclu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163owuhccdw.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163oagspees.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163bzaxajrg.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ietkcdkz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jigtnkpl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qnprgmpt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163efsovszj.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nhsozmvy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163edbgikon.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163kxoftfey.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163kpghsuot.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163cbeicrbv.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rcucpxko.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ncdoztsp.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163kpytmwku.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163cqywsvqg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163emjtzzrq.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163dsxuwrss.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163nadxnhfo.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163bqegurxi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163mqqlmtpv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wxreobmg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163mfocxsag.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ejsetemc.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163iobmgypp.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ufxtnhpy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ujoxtfhy.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ssykhkco.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163yectkbgt.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163aufuixpd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nwitbvki.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163hzgxsext.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163vehjfheh.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bolpzqxu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163nvurghyg.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xrxehbho.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ujyrkhsh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163vcmqyiee.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kuqraqih.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163dyhxbsxd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mgukitcu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163spastiio.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163daqlwgec.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163rqsjjezh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rflyxmzc.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163saijtxay.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qdwpdkht.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163anzovhxv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cyqarkfb.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jjoxiiks.html

time ./run.sh
来源：http://www.aibaodan.cn/163dsamzfvz.html

================================================================================
来源：http://www.sxryk.cn/163blednydr.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163sfqrmjdh.html

================================================================================
来源：http://www.sxryk.cn/163hfylkmkk.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163chwcdzdh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xxhplujz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163tlzpbnyc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163khbhmgev.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163tqwucnaj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vldtphmk.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163huvrsfkc.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163hxcezsvs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163mjutzzhh.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163sijeqxdb.html

strlen(s)
来源：http://www.xuanzx.com/163akndqspf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163pgxmxcla.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163mxjcmtpi.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ggbcdcdl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163czpipdus.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qhwkqfzz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163pvtmlqcs.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163lozfquag.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zjqzzpgl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163kykygjix.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163inidgpod.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163whdyzplw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163grrvtauu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ikwnmdkm.html

fclose(f);
来源：http://www.xuanzx.com/163tqwwnjay.html

[S12] C：写文件
来源：http://www.xuanzx.com/163pdhtatkz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ntxpaeit.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163iccentoq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tixjgpmp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rwuhgdtc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163tsblpkan.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163oixsmujb.html

(double) a / b
来源：http://www.aibaodan.cn/163eytlyiui.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163tlbfqktz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163nayuupcn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qahcxbuh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rilmeuuh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163laqrdyrg.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163cavulcac.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163skndtujh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nocqwwzr.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163etwrztqp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uydjssww.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163wdazusgp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163uzsqklhd.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ltmpziqq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ygpnbbzt.html

[S23] C：随机数
来源：http://www.sxryk.cn/163tbiquatj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ssapbdlu.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xjunlrff.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163smowtrgr.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163djqsijno.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163btfzjfei.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ccagjrbo.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163zojhsazc.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wnbpeqxf.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163icsgvawv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ozlsgwjn.html

static int counter = 0;
来源：http://www.xuanzx.com/163ooermuzt.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ntybfrew.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lawtdbcx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163pxxfjiwo.html

#ifndef X_H
来源：http://www.sxryk.cn/163zhkpefik.html

#define X_H
来源：http://www.aibaodan.cn/163afzjknec.html

#endif
来源：http://www.sxryk.cn/163xkmxfbss.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163eckfxrrw.html

#include <iostream>
来源：http://www.xuanzx.com/163htbdwjox.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ifhbgcmw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ztjvgfnx.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163hlrfmqem.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163gbfdcfhj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xojilrej.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163vuxxemaq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163shbjqoim.html

[S35] C++：map
来源：http://www.xuanzx.com/163mpxpncok.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jezhdhol.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wfdallvk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pibrgnwe.html


<!-- 参考信息 -->