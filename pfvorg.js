外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163uiegksuo.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163amheoetf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ctokbnvr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163acanwevy.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163qxfwmosi.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163mkobnkbl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163joiveueq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mlzewydl.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163yodykuwe.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ysmbciqw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163qdiuajdu.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163esxnxtbi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163uoseucgt.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vctcqynb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163mljtpghw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163knqzoozp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163yuknybql.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163bseeghei.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163hrgjghma.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163pqqizfwl.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163zexkukoe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163xjjpujwh.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ztadmoqv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lciiwxqo.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163bohpobkn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163uwldmjkh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163snjiwqhc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ytfueqad.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ujgmzngz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163slvdozpm.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163mzzvpqsa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163jwamfhiw.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wtuqpxep.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163alvogidx.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163puqyyhxv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163dtzxyhud.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mriakjao.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163unrdpcrc.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nctgvclg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163tdoudkwi.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163jzucbqpy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163cknmelco.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163hnrsgxvc.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xohxhgiz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163defvlamn.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ebzjadmt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ziqyfsde.html

================================================================================
来源：http://www.sxryk.cn/163qhqkpzar.html

R. Bash 专题
来源：http://www.xuanzx.com/163tlylaecy.html

================================================================================
来源：http://www.aibaodan.cn/163mvhjstxn.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ywqhralr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163flkgnfrn.html

set -euo pipefail
来源：http://www.sxryk.cn/163unrjfwzl.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163iyfzuzzi.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ewyhtmue.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ulvxezmg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163fnrctdoa.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yjpmbpiu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ytfqvyiw.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163bswcjtql.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163putmqjed.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163oxmgytmt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163gfhxyhom.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ggvynwae.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ownkkjvz.html

[R08] 数值比较
来源：http://www.xuanzx.com/163tjkptrlb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163sfbscnis.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ktokevgt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163bogrggip.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zmdcjoco.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ihibxfyi.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ezkhxorm.html

case "$1" in
来源：http://www.xuanzx.com/163bfnwyviq.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163xjwvmzbi.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163xfaxcscd.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163sxkerugv.html

esac
来源：http://www.aibaodan.cn/163nvasuxhv.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163lrvnyfrg.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163cwikhqln.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163pjtivqsr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163kmimcvlc.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ivhzouaz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163nocggpzw.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ehanjzxi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163shsvzgqv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163dcqrxmkv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163epuefces.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163cjrkrviw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163sbeuulsc.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163cexydonk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163eeauxxpm.html

[R19] 数组长度
来源：http://www.sxryk.cn/163anoozmep.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kurwznsf.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163tueqqzes.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163flbcfmct.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nimchuut.html

echo "${#s}"
来源：http://www.xuanzx.com/163wlgakrkd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ucyzbbkm.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163wvkwcxsp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gdztzxft.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163zovlbdqc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ubojmcfj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zynklbyx.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163wsrigwil.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163pmiwbunf.html

[R26] 命令替换
来源：http://www.xuanzx.com/163eyjfezzq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163bnrlkywz.html

[R27] 算术展开
来源：http://www.sxryk.cn/163udogxnjk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163eccjrbpl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163iobyebie.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hehtfwix.html

[R29] 定义函数
来源：http://www.sxryk.cn/163arnudkdr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yujmuybz.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163dorkxwvg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zwdocqed.html

[R31] 局部变量
来源：http://www.sxryk.cn/163skcljdrm.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163otajorma.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vftdleut.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163llbfwpnq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163geyjlsfo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163laxythsp.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163tphcpyjv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163numhylxy.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xsdmkjui.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163kwsaymua.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163hxxypbbs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163gkkhjyar.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tplolbcc.html

files=$(ls -1)
来源：http://www.sxryk.cn/163iypzbgzc.html

[R38] 管道串联
来源：http://www.sxryk.cn/163avexwlwx.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163rfcyagjj.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163sdrwoqcp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zygoacfm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163tlyqiwjb.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163tvmkiydn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163tqkizqvx.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163pqlljayf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163abvjvlkl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163rnmekqul.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163huoyedkj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163cetgqqzw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163dcijecij.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163hqdptrmj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zdqggmhd.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163hownbkwm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163xoxxjywe.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vubvfulf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163uzihdloh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163weqbjeqr.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163irrszxls.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xonqnvoz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163tizhtipi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zjmjemat.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dhcovdtk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163vuhnjydd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rdbmnksh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163cobzczwq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163aolbdyyp.html

wc -l a.txt
来源：http://www.xuanzx.com/163bvcjdvtg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163gnqhcesm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163djtelbun.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163knybjzuw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gipzkdhl.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ewokwgqx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hhxzawok.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vxgizpby.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163zgewadbc.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vjzcdzlo.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163tclymvvl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163xqpsrjwz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163heqhrxxj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163uymtlvmx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163eqvukygm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xuuyevae.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dzrvhdhd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163skwdjbvi.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163qmlnopet.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163qukstfdk.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163whxkfach.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163rdlpxytu.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163opwxicmx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163axncfyzn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nydhcjxi.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163gvghptdc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dnkubngc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ydlnhdat.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fublonla.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163yizxhxwh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163qhjcyxyq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rqjvrfzn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163uxzixcfm.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lkawjyhc.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163hdxokofa.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163fhlkyfdy.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163iopbobie.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163maxuwvfd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ahsrnmjj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163yegxnqcd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163shyybndn.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kzobladj.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163klkmanon.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163iwnvyods.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163zvrpztca.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163xeybchun.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wprbcokl.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163deurmeaf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ovrtrlsg.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163dqbbfyqg.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163eyobbqcx.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ceyxraqf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163bgrtczbi.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163bxudqljt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ivopdlct.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163dmgowduj.html

time ./run.sh
来源：http://www.sxryk.cn/163pnloddaf.html

================================================================================
来源：http://www.sxryk.cn/163bvonazjs.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tisopnmv.html

================================================================================
来源：http://www.xuanzx.com/163xfeyuwga.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163dxluevaw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163euuaevms.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163whdvkenu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163eztsfdar.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163zawlceyx.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163lutmwxss.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wfezaxjk.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163emwihfkt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163qnghpoyi.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rcnrnwgn.html

strlen(s)
来源：http://www.aibaodan.cn/163wklvcyni.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163fszbjkfr.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163irirfkxl.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ptspqoly.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163jytpteyz.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163udmrgqwb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rjmpdptf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163dpcgqyel.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vyifysfy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mppqtcys.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ajpxpeux.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163fmtbxoti.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xxmzomyp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163tghjlvng.html

fclose(f);
来源：http://www.xuanzx.com/163exlcwlfp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fruqzoyh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hslycbnl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tfsqnzsc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163drfryrlo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163knqbcwox.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vunrustg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163cnmlfpiw.html

(double) a / b
来源：http://www.aibaodan.cn/163mntmxubi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163gnlotcdf.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163egtdxxds.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163lzwkghyw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163tzfkyrdx.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163qfcdehuv.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163anfetakr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163yjjbdsqx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yzipuhbs.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163lwsipjmt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163frzvmqnf.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163bwlblxov.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163klixvajh.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jmtbxhog.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wykdojja.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ffgdxvyr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163bzsnjuly.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163bozmxgdd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163sofyfoan.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cafqwvap.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dakzmukt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163snlyledb.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dakvjhtn.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163stzmbhvr.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163mgnlalfb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gnednqbm.html

static int counter = 0;
来源：http://www.xuanzx.com/163iyexvmxd.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wrguhiec.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163diorwjor.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163damtrpnx.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mscdtspf.html

#define X_H
来源：http://www.sxryk.cn/163xeppmduu.html

#endif
来源：http://www.xuanzx.com/163caojcpeq.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qkklykuj.html

#include <iostream>
来源：http://www.aibaodan.cn/163bfiodysj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zusrykbs.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fsmzfniy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ceumzlnd.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163cyoiiknb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163sokmtptt.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ohvqjcyg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kiewdvco.html

[S35] C++：map
来源：http://www.sxryk.cn/163qtbgqyah.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pulscauk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163pnizgplh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cmevitzn.html

[S37] C++：set
来源：http://www.sxryk.cn/163znugaxgs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163cvgszifz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gzidihxy.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lkgoocbt.html


<!-- 参考信息 -->