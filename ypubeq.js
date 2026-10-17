外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163qgtbscvl.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163whuvzjwl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163frsbfvhh.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163svaqafsq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163dahnitpv.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163fwzeucej.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163yokrlcsf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163vusgjzxr.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163xmiwglmf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xxderbnv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zimdotzn.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163qonjurim.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xsbqqelu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ynaescoo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163qghvyqoy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163xzhkliyh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163zlyzaymw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163aejggolx.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163itddodts.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163hdmxfqrt.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163qqzrbjtk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163xaiunwvn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163jypejyib.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ifanyogr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163chjuqvnn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163wopxddsa.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163klpwpkph.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163zraivxef.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163cjbgryzw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163onltdzaq.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163lzarckxj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lppuuyih.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vrjaortw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163phjkkuep.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qsymhmmd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163uoetusuj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ywfmyhij.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163hfdnuihv.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163lkcgplsm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163yblphnpl.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163gqahkkma.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yokfryox.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163rnoqtibk.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163rgewoiys.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163qgjumyoz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ruqpexwf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rhxpklxz.html

================================================================================
来源：http://www.sxryk.cn/163lmodjgfr.html

R. Bash 专题
来源：http://www.xuanzx.com/163pblbbjkz.html

================================================================================
来源：http://www.aibaodan.cn/163ptvqiksa.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qrquijcf.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163kuxhvqym.html

set -euo pipefail
来源：http://www.aibaodan.cn/163rsgqdiws.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wvzzembz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163udtbnfzz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163fisxaurw.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163wfmmusim.html

[R04] 位置参数
来源：http://www.sxryk.cn/163vpkvfcif.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163fqnajmzu.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163xsranpjg.html

name="${1:-default}"
来源：http://www.xuanzx.com/163utjxaguj.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ndyqrmby.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ctagifyb.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163zibyhntw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163glpivutw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163iksazxhw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gsxexijs.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gwlvnpwx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163oycsnocx.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163mdzjhooo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xqgfvvca.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vrjpmphh.html

case "$1" in
来源：http://www.aibaodan.cn/163fydyjyyv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pqfhfbha.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dnvmjdsx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gvxjaklp.html

esac
来源：http://www.aibaodan.cn/163nbhewabm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163gjzfsclr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163itgmrduk.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tqcbcrfv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163sahfqhdi.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163zmoylcum.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163tvcctqtq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163nixbdqxy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163zptfbria.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163emoqzsfu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163xonoodpn.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163vkspwqtd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163qzqwlyty.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vtwhchjg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163yeiptcsx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163isoqddst.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163vpblfyyu.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163pwcleqss.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163nfiqpqoj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163gahfxgvc.html

echo "${#s}"
来源：http://www.xuanzx.com/163jlkysjyc.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rmchudsd.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ahvjgwzc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163catbuyqr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163moqedprk.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163vmzhcobh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163cxuofvhe.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163hwtoweaf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163mtkrtcva.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ylavsetp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fmvgyoiz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163caihzyyh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163fxumwfod.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163fukmopso.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163oswakgsh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163wbgbctmr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163cjuisbdq.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gschtmbm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163lfhfpsvq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163oklhocze.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163fihitmzg.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zgelhgwk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163gdqnibpe.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163cdxhylnt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163znxnbyap.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163czuhlutq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163esumueuj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ncmkahgj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163dkdlmtts.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163yzkvudjn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163cmcniqza.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163erjjingc.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mqwzlbar.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163rnymrywk.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163dldxgvqz.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vpvfzrts.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163shejsrpr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ngntwvvb.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ncolvdwq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163sqawpbvk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163opoalbbi.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ahpkxumc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163gmxtepif.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ietpjycv.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hbshuiqb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163woywzbbq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163zsjjbzpo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163yjsgihud.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lfpxludo.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163eyjibicl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vtykxfxc.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163zfppdzfu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163tymjaiwy.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jruqvvfw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163gbwiggsn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163szjspxjy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163swgksigb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163zgtbqtog.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163tvukmywn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163kvnhjpxv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mhtrsijg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163eybddofn.html

wc -l a.txt
来源：http://www.sxryk.cn/163muaxlnws.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163apzaocgc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163kvqffdqd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xyvbmcpd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ubchxwcj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163uirjmakt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163qhrxbdxf.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ansdayjd.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163loiuhtud.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163llzqzhfg.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rlkzxwld.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pywpvndy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ocfaymzm.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163iikyjexb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rftzurpa.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ggqewkyw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163tuernsbp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xtkbuddh.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163semfgaky.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163vjtenytf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mribdrwz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163galekdaw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163sqvtstcc.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xzlsqbpc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ydrnbcqr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163urkifymz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ongtrmqb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163imzofged.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163kzcfbajg.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ltazxqgm.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163iyuyqzmb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163iuockgjt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zijqhdka.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rmdojuev.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163prveubcb.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163yvkrwekv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wwkqpsvm.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lalnlwyz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163aibmqzey.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cfiwwpxj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ynqcpydi.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163eycptkcb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163kstkodwp.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mrpcnohx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xmbvoxtf.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163uycepqay.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qtyohlng.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163kdlcbyee.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xchdxdfu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vcvurqmp.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163oabbuoty.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ntwsjspq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zawxxaji.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163uamgltlm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163osyrqamj.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xqrukicy.html

time ./run.sh
来源：http://www.sxryk.cn/163qcsyfehj.html

================================================================================
来源：http://www.xuanzx.com/163kxqhwyjd.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163mjxeafum.html

================================================================================
来源：http://www.xuanzx.com/163otseemhu.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lmxqabgu.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163aeurvoql.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163vemxslhu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cldaynin.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163gobzmeil.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163yhaxknlb.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163qfmtgtvi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hprmgmiz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kzqviyal.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zckscmnl.html

strlen(s)
来源：http://www.sxryk.cn/163nuymbric.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163prxwzwvx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163mpwmovoh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jpnghkxc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ztkygoce.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163mrbisxgb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163irzytfjn.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hrzkopxn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163cmueavpp.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tktoazzf.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163huxviuyy.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163irkxyybe.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rtahzglr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wvxygril.html

fclose(f);
来源：http://www.sxryk.cn/163srizhxpc.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hzuywlaw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163kmoipvzh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ipioxdxt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jwoklczz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163uibtjwyo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163fhwuqsrv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163hbfrmxyf.html

(double) a / b
来源：http://www.xuanzx.com/163weqfstvc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163nuszeobu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163creaxtly.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163disnriax.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163xfrrbiad.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163pdxwvfyt.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gqbijnie.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163peavmoty.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bxyxncbm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vdqtmwks.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163omqybzup.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163pdsjcxfm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163nfkqdabc.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rwpsznof.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163aercklaf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xasxblfd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ssobvhwx.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xdfwezdw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xjdmszcs.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163nahgwmck.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163rlewoeon.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wwdhljge.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163kwojefnw.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qtlsoofy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163sppgojgi.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163orkszlhy.html

static int counter = 0;
来源：http://www.xuanzx.com/163ybwamrfo.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163tjkarmif.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ddzgkfuq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163yderxyjv.html

#ifndef X_H
来源：http://www.xuanzx.com/163fhwzmokg.html

#define X_H
来源：http://www.aibaodan.cn/163ixojqbcx.html

#endif
来源：http://www.xuanzx.com/163uaxkgzta.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163oxifcoir.html

#include <iostream>
来源：http://www.aibaodan.cn/163qurrzdhy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163eesmsdbc.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xpyqrxmo.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163zorvpaib.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163hchetosu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163svzisjtt.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163xzkkngzw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ucdpbsuy.html

[S35] C++：map
来源：http://www.xuanzx.com/163uxmzyamc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163swxcrfbb.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163naskjkcu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fhbnkapx.html

[S37] C++：set
来源：http://www.sxryk.cn/163gvkblfdy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vuwkcocz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163kwjdquzf.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xfchuhec.html


<!-- 参考信息 -->