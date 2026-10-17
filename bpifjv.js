外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163mfhgugyy.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vyktbyva.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hxaokprw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mdevmvtv.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hphnokjz.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163dwqrzqwk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163mnkujhyv.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163txmnjqjb.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163rwyibizh.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ledxulqa.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163aopkwsej.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163hxgcldgh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163eomaovfz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163hbcqiayu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163xkjiatub.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gprdylsj.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ntqxplxb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jpiepsuj.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163vimptnax.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ggmcjvgo.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163lwxopazt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163icykifsv.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163xlactbqy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rdtkqbnn.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163boliczbp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163sofersam.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163bcrqnzpp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163japkqegf.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ypltawhs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163lxtunzzw.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163hwhdrcaw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lrbomcdj.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163iqmyazol.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wyzwhrbf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163rqxqpxzh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rblxipkq.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163nbwmlkrl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163hgsmtaji.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163kvrneoew.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163cgryqeow.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ywmzaffd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163htoaanrv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163domjddvn.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163usfosvtk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jaxwucbm.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wmhnvocj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ojqjjytj.html

================================================================================
来源：http://www.aibaodan.cn/163tzmhjivd.html

R. Bash 专题
来源：http://www.xuanzx.com/163soizcghd.html

================================================================================
来源：http://www.xuanzx.com/163zcbrghco.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163hunzcrcw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163irfddmvd.html

set -euo pipefail
来源：http://www.aibaodan.cn/163sizlglhm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163rtszvqwr.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rymajvoy.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163zlsofggf.html

readonly PI=3.14
来源：http://www.sxryk.cn/163xefqtqfh.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ktycqefw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ciunctfq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163rnjglvxl.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ryurenfv.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163bjrtlukl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xfedijdo.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dgjwkziu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163lmuwhncy.html

[R08] 数值比较
来源：http://www.sxryk.cn/163rckufnnj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163hodrmxkl.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163itwarobc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163vwjukwzq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ijgmbgwf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163uisxmidv.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163qbjswxqf.html

case "$1" in
来源：http://www.aibaodan.cn/163qqruseal.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163dgzvezwr.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163htoxdlnz.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ungdwevq.html

esac
来源：http://www.aibaodan.cn/163hngniinl.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163mpyqzpic.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163sxhqjqnu.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zisixzjg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163bvrshrsv.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qrprjrxu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163sofdvpef.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163dubpznel.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163xailynaf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163bnijtgaa.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163damgvmgl.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163gffymden.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xwtdkoet.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163lvglphgi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163cwtegkso.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163wrvvwlrz.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163hjglnxxx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163tbglwznh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163femdyofw.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ddtseolf.html

echo "${#s}"
来源：http://www.xuanzx.com/163byztrrcd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rlufcnrg.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163cyofkpec.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ykerougy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163kbxxwgql.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wyipdrux.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wfvuwqff.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163vbcvszcf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zceopbpz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163gbbbuowv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163eokvivzc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fukyyyst.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ukgewued.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tipvlard.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163mkyfeflg.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163iwucuneg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vifnqqhm.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qxkkblsi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163gzlykbmv.html

[R31] 局部变量
来源：http://www.xuanzx.com/163epfxhftu.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163sosvlmjq.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163olykijme.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ibkljbdc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tyzvcihm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163sjrxjhyg.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fzziyxki.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ababayjy.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163rlnuyzzn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163vljchjna.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163uyjeviwr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rrmoikln.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163oamnxpli.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fisntdsb.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163aldisqcc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163frklbnjv.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zcqbndgc.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163myefzcin.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163grpbbmyc.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163nbspsaxa.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163cyuqgszf.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hcskznbw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163rgpmqmjp.html

wc -l < a.txt
来源：http://www.xuanzx.com/163mtzzache.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163zaeseabu.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163yofngjav.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vxtgvyms.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xbftdegh.html

[R45] 批量删除
来源：http://www.xuanzx.com/163sctzosxs.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163vcnrtevt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wcpxqyso.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fvkshouj.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163wfbxgnel.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163slmqunqe.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163qsfnilze.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163jnkbkwce.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nbcgvmng.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163frzblehb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163pcmziazz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jmmhxcwb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163acotaqbq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163fjqiapaz.html

[R52] 统计行数
来源：http://www.xuanzx.com/163foiewgdb.html

wc -l a.txt
来源：http://www.sxryk.cn/163zjwftntq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nkrfzoza.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163difpfmjq.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163yseldhqc.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163kvjctcbd.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ikvkixub.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wrlnuxwh.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163tmpgjtwv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163yrddvpiz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163nvmfhsjp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163xkooypkj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nydplgye.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163npstepru.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zdgfiged.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163zeaabfli.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163nnykgndp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163nssmguid.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163lzvgsykt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163sqsnymbq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163fjlvrkcx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163gjafxakv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163yjeuxfyf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163zpfkfhqk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163covdfxri.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163shegmnjq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163wlvogphf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163yxpamwjr.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ssoyyylg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163euuujziy.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ywwxwnpx.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163mhabpicy.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163guvzmizi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xnnoyvcg.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163dxqknnsi.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163icluejpx.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163trevefir.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163qwlrvlvl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fskltbmk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163qgganyvt.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xhpzqxqp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163imetocgm.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dmahutex.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163flefrodr.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rzawyfvb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163eawwceuv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163whmjknzj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163lejjrejq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163pynvwaai.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vojysgli.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ljfkfngd.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163zoqyovek.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163tegjzttt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ezwzkash.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163cfzrafcp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163fushcwrm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vovqatzu.html

time ./run.sh
来源：http://www.sxryk.cn/163plwohogq.html

================================================================================
来源：http://www.aibaodan.cn/163wrdicgzv.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163rrmdzxzd.html

================================================================================
来源：http://www.sxryk.cn/163ukfvqeyi.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163qdipgudn.html

#include <stdio.h>
来源：http://www.xuanzx.com/163vlznlpvy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163xlbdwmrl.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163suahozsm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163qrklaevd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qsoxenaa.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163grmnwzcb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gjsvswtn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163acksxmrz.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163rayrfrrq.html

strlen(s)
来源：http://www.aibaodan.cn/163dtuaiopt.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yqluadwa.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163dhlsqhlk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163lsahamgm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163adjvrawt.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163eschnudi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ysscjkti.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163eyiqmyur.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163edidezdc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163vwwkjbcc.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163waipnads.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163rthfdwci.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163dejyghfn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wmmjfkmk.html

fclose(f);
来源：http://www.aibaodan.cn/163rdzhawce.html

[S12] C：写文件
来源：http://www.xuanzx.com/163digkajqp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zobqnnwu.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163gcorrigg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163aakpznin.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rggmtkne.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163seiiskzu.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ptqvmhyw.html

(double) a / b
来源：http://www.sxryk.cn/163taffaqnm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mjocegab.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qgvtyhgx.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163bhauezbu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qtnabemp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xnwvwuhb.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163fkkldetj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163oxcpivsd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163krtvmjrp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jmbnnffo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xfkrgiwl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uemlasbm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163cyvlfyyb.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bekcamug.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163aorcdexk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163oxirufdf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163mmhismlh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163fzwzvybp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ebesdwsy.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pkhkgysp.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163qriiepps.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xcunkzqd.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xaxkcmhj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mvdfuaoa.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163gpgfhcib.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163llxrdqxy.html

static int counter = 0;
来源：http://www.aibaodan.cn/163knzorjjv.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163mhjnjsxo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hqnnvald.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ifjohipu.html

#ifndef X_H
来源：http://www.sxryk.cn/163pyhrepkd.html

#define X_H
来源：http://www.aibaodan.cn/163qwanekny.html

#endif
来源：http://www.sxryk.cn/163upadirfh.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163dznbvtph.html

#include <iostream>
来源：http://www.sxryk.cn/163erawzhds.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163friehwbn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163hkjvxxdw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163uwdcwyuv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163wotacbot.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hadirrfq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163pfiuyhsu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xdfqwyfi.html

[S35] C++：map
来源：http://www.xuanzx.com/163bmeynxzz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jxnvvdzw.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163swfeoxpl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163toeukmbw.html

[S37] C++：set
来源：http://www.xuanzx.com/163njgtoqvr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mtdezmpe.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vloowjks.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163rgsxtpao.html


<!-- 参考信息 -->