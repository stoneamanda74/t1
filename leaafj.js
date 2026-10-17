外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163eectdwfu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163enwqrarx.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kdynusbf.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ttcaaqsj.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jvejvpvq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163jgyhsgwr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163gkxehonx.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ggkhoprz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ulgqplab.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ecjhlglh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163mzxpylod.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163toxxnjtx.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163kqdwxvyk.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qgeidcuu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rpjarqsg.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163suwqahgu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163shwjcxyh.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163xuemcvhz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163gorycmjs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xonizhrj.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163xkztqgej.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163iyffgemi.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163crwojmny.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163nhoosptb.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163awzsejbj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163rnqzqzmi.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163salhiyql.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xlatmtji.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163drksryxj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163zoyfmqgg.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163brhjzpjh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163wnhzmbln.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zpcicied.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ztmkctyz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163iflsekia.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163kczujoau.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163zftxgvtt.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163cosftrxm.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ggncgrif.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163zqdsubhi.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163nbmtesoy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mykoptoe.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163eclyacjl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wxxbcmdy.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163wpsbmhur.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163wckmeaus.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163prtexzvk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xpykrvea.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vbdrbhho.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163cfykforl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163odkgpmny.html

================================================================================
来源：http://www.aibaodan.cn/163uydyvbhi.html

R. Bash 专题
来源：http://www.xuanzx.com/163opjhmprk.html

================================================================================
来源：http://www.sxryk.cn/163obfdtpjs.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xqsaugfg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163msnktoil.html

set -euo pipefail
来源：http://www.sxryk.cn/163uavmqnar.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163vikebpdp.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ajgpqmyi.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163emhlmwej.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ehbsfmat.html

[R04] 位置参数
来源：http://www.xuanzx.com/163aptbblxf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rwmbmzga.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163nsiemsyk.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qxpxoziy.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wofrvgez.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qdytptsv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163lscqaatk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ljdflnge.html

[R08] 数值比较
来源：http://www.xuanzx.com/163tzdzpqoy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163cnjfdpyu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jfzirbti.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163zbzyywiz.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163unhgszox.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163bzoygtov.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163yjdkmavo.html

case "$1" in
来源：http://www.sxryk.cn/163jgklnpvo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163osyjhbpi.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ntshgnbf.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163itnjcvfa.html

esac
来源：http://www.xuanzx.com/163eguvujzk.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163kgymbfqi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163vfrwlfye.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163czasjpso.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mdxskztn.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163szprhqqg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ocvojrui.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163merlrgxm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xgnbwpop.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163onwtmueb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163dzhpydri.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lucequsu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xwbqbtmw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163wcvtinpo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163cocosqax.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ofmkbenu.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wehccuqf.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163romlbsjg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163beqyiosd.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rnlqbacr.html

echo "${#s}"
来源：http://www.xuanzx.com/163fklhqndi.html

[R22] 截取子串
来源：http://www.sxryk.cn/163uoslcmup.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163uxidqsnb.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163yiloohpa.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163uqxietsh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163vczijtym.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163hxoibups.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163iomfyibp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163xmyhcfja.html

[R26] 命令替换
来源：http://www.xuanzx.com/163cztzvexy.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163dwkkunxs.html

[R27] 算术展开
来源：http://www.sxryk.cn/163mzqqrlts.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163bvuidsbs.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kszbkjkw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rwtpakyb.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ihbmvexx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wvigkiue.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163vqbhuson.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163paoddeuj.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rgeiijtm.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163hashvpcg.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163juwuhepn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163jjaackwa.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163iwtxwyqg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xekwlngo.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163hdvhjwth.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pizfqqri.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pvlybwlb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163yfrumfhk.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163whuvuyno.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163sqxxjprf.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163dyzqmvae.html

files=$(ls -1)
来源：http://www.xuanzx.com/163zstuoixc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wctocgkk.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163xmhvpwfp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ssjlgqlf.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nlgwiwar.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163bqrehopt.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163gtbccnlx.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nwybjufw.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163fpfpzacz.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163pdibgfws.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ydrbihau.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163yllyrgqn.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ghpndcph.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163wikvdjdt.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163nyvdzowd.html

[R45] 批量删除
来源：http://www.sxryk.cn/163uhmikblw.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163fecrfrvo.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163hqkjpiwg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vvtflfth.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ikjkatmd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163innvflwh.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xmymnzld.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163rolcbfrx.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dpghudmh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163vcstiwvc.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ebyiavwc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nhllbxzx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163otcpwxua.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cjkwnoob.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fwcecnla.html

wc -l a.txt
来源：http://www.sxryk.cn/163zkgsyglx.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163dhbxrkmo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xdetlbvx.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ntzrbdal.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163czgatlxk.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163iyigmefq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163vlctqyjm.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nghkjtpw.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163lsrhsrzt.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163adrvfscr.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hwturteg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163tbsasekh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163rvmnmsuk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163apihnjmr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163whnpbzyn.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lahoieje.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ucwcgapu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ehsnlrbj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163kkdpxkwg.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163itxdqzxf.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mmrnfskw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vrbosqwh.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163khdbgepd.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wktxptyl.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163obxxjurr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163dvvpagup.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163llmrzqnh.html

[R66] 定时任务
来源：http://www.sxryk.cn/163cszlwkxy.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163uvrtnbqt.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163jxrkegwx.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163fbgvwvmc.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163bqfzlvon.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ngyulcun.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163srdvkyvf.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163xkykxmgb.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cqlupzru.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163tvedbhmc.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163qgueuley.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ohvdmjak.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rylirifg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jgoxnqwm.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163iodgrqho.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163eafpwawz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bslzptdn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163dehlbusc.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163wjslvhff.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ymalbhow.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ojrfblhf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ossstzbl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jodezilm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vvqklaab.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163sobaiyen.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vuuxozka.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163vchxmkxf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163giknyibi.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163mxibmnaf.html

time ./run.sh
来源：http://www.sxryk.cn/163yynpacwi.html

================================================================================
来源：http://www.aibaodan.cn/163acuvvofx.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ffqdojfv.html

================================================================================
来源：http://www.aibaodan.cn/163lqiqbnju.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163pktbawwd.html

#include <stdio.h>
来源：http://www.sxryk.cn/163dfrjifrh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qkacwvax.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163baoueswk.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pwccnmzo.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163gshznaoi.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ttucwmgb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163mxmgirjf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ciwyogzz.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163fmvbwrda.html

strlen(s)
来源：http://www.xuanzx.com/163nmrocota.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163daymbkpl.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163clwktjrh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163txhpkzog.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163lisprqgb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163eknhcdif.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ftvvusxu.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rjjtowtv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163yeumsoqy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163dpwyrpzg.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163xednuqub.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163lgztwzuw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vdzxdfir.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163yjlcpbxx.html

fclose(f);
来源：http://www.sxryk.cn/163avbqrbbi.html

[S12] C：写文件
来源：http://www.xuanzx.com/163nkullaiq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163aoejtrfq.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163iclhtsqq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163inswsvls.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zfbfewrh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163bitbeodg.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vszjtfze.html

(double) a / b
来源：http://www.aibaodan.cn/163llqomqeb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163eecnjsdj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ekvlkegi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163aeatrdlm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bgrrytnr.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163scdrgsaz.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163jvpqhtxt.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163gmlduilh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163peudvmst.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ptxfruid.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qddbmwnu.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dbrvdtfm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rbctwsfe.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163rcgcihoi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fissrvxf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hnipnyku.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163pogqjfec.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163cszwptap.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jizotgqj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163frmrqgng.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163qxqjcrbz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163uitvnrwa.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ukeodqww.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163hkpaquxo.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163llphvhdh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163llzkylcn.html

static int counter = 0;
来源：http://www.sxryk.cn/163slqwailu.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163bzvajtux.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163mjrqozjw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163hocaqxkx.html

#ifndef X_H
来源：http://www.sxryk.cn/163hdeuajmv.html

#define X_H
来源：http://www.xuanzx.com/163youjkuaj.html

#endif
来源：http://www.aibaodan.cn/163wxsuddnf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163bppudcxg.html

#include <iostream>
来源：http://www.aibaodan.cn/163fwfgndsh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163tlftmvse.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163pgomwihp.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163mnvfutwl.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ziodpsof.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163rdrpntub.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163wvjgwywt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dvswvjto.html

[S35] C++：map
来源：http://www.xuanzx.com/163bedkexhk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163joxrkmgk.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163uosrfzcy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vmmendse.html


<!-- 参考信息 -->