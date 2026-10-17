外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163lxlvjryf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163diurikhc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163khlupcqj.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xtpjzqzt.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rbqxpqbh.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163lcpzxnky.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ujjbmzhx.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163isizjjaq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163xwyfhprm.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163hxneblmc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bjyconya.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163kkgvbica.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ketrvvej.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163bkuhzbdj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163jxcwriut.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163jvoflehu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ialujupr.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163rdkquqzv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jzjpwwvh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163vfvdnhtj.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163awypcdjl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ljivjeww.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ggglrhzq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163wlvzvonw.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163dgjqjpkv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ppqhxhcp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ndscunwd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163tzyzpeyd.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gueszvol.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hkjceost.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jgsoxqzv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mxjiqjxc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ahoyahmb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163atyvunvs.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163zrhriccn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163bnhepith.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163pbtrmupw.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163sohpefvt.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163nrrhlenp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ectbrgip.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163baumzhab.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mwtgxicj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163tjdryspq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163sruolcql.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xhgwwicm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jlojcfhl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163olyewalc.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163dsppsxcx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163auvomefz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yqburgje.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163shapxxks.html

================================================================================
来源：http://www.xuanzx.com/163tslphgde.html

R. Bash 专题
来源：http://www.xuanzx.com/163mgyzlqsw.html

================================================================================
来源：http://www.xuanzx.com/163vpqqvquu.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gnnhrrlt.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163xutkxrcj.html

set -euo pipefail
来源：http://www.sxryk.cn/163ecnhsvfy.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163omkclsii.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163snniccfx.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jngqqzwr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zxiexkkp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163pzxxdgad.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jjvdwjua.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163gknwyasx.html

name="${1:-default}"
来源：http://www.sxryk.cn/163havcjecs.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163esfmwkfx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kbkvhoru.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163euaemxan.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163wuvxtxhu.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xsivcjug.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163oluljlac.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ndvgfdls.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jzmseqcb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163aphdbirf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vbztsvyv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ccpzrypp.html

case "$1" in
来源：http://www.xuanzx.com/163aumxugec.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ydkslzxw.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163iomfdift.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163zvvaepgo.html

esac
来源：http://www.sxryk.cn/163ccbvkjoz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163pglrnqhk.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163smvnnrkh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fgvaixpp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163nkgpvqjj.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163nzehszyn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163whfzwtkg.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qwqxpiul.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163etzcsqfy.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163oalrvmtz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lyarsxrw.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163lhmabbuw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163bfgmhymf.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163hcipilny.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163flikxzyq.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xxwiqlud.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xftlqklv.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163uypennoy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163fwiqdyro.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163fxthklko.html

echo "${#s}"
来源：http://www.sxryk.cn/163vyygdmga.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163eqsloyje.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kuktkqmk.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163qynqbkzm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163sgovqilc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163szhcllym.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pevhkwnp.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163abpdkrjk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mztmflbq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163jvqedddz.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163hwqqbzzj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nbpdtdsc.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163uvztolrj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zmzzhffq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163gghsarne.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ggdbxubm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163nwdijzwq.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163bmptgehs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dsssurov.html

[R31] 局部变量
来源：http://www.xuanzx.com/163caxikauz.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163bzdsxjtv.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ddcnmtet.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163whjokyvl.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163veawclai.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163cbaocazf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ompknzem.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163aihqumnd.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gdcfteno.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163yabishxi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xbenvyun.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163kflrjxrl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ywdcngbx.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mwrbwgqt.html

[R38] 管道串联
来源：http://www.sxryk.cn/163elpvwdee.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mftqunkk.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rbugpfyq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163vvtqdhuk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163eniuwtkq.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163sxappszo.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163dlazboqo.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yvffwtvn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163qhmkuape.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ybgorqcw.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163hmyhuygq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qptovdxn.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bbdanzos.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ycjelsff.html

[R45] 批量删除
来源：http://www.sxryk.cn/163cjsvigoz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qiwlexcp.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zthmwqht.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163srupzclc.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163xhvqcizl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163odfiuqbe.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xkzyabwz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163hjveocxt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163cxkxvbvc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zxfwhbvo.html

[R50] awk 求和
来源：http://www.xuanzx.com/163rltiocfh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vifqacex.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xnkupqin.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163dezwryze.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ygzwrlbp.html

wc -l a.txt
来源：http://www.sxryk.cn/163vibtpjeo.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ymbnkxqd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vegtddwd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ugfirrgr.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ceizjzck.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163xerdoejr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163frzlltbk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163eubrzvfe.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163upflxzzi.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ediakwdj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163tlszpdtk.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163hrdeskbr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163rcwvoldc.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vuwmnumw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163aitimjdh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163harxqwmg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qwmixltt.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ldcihkhz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jipazckw.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163oltziwuq.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163cfaoehih.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163swckybmu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zdociqdm.html

[R64] 结束进程
来源：http://www.xuanzx.com/163sblsknna.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163sfezykdu.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163kgrhuvxu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163thbixpui.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163koydrdxt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163pfxtxrft.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163kzpftrfr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zqqsgivt.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163kckxcykt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163tuvgbduc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rfxzjjxe.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163btdxbimv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ujoivwiv.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163wepurpkn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163rhilxszd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163gzdsueij.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163xnkskvkx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jdznrrzo.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163tvccbtif.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qndobdza.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ihangdfl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163vvzyxfdc.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163qtqhkbgz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163nwwxditb.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163xrxbaxaq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dzougosu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163jovvldai.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hrgassbs.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gxiyjyvq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163bgvwudfc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163dbesgltr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163snhbmvge.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ymlfluho.html

time ./run.sh
来源：http://www.sxryk.cn/163lsmbyzns.html

================================================================================
来源：http://www.xuanzx.com/163mkjkunlx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163axdqxewg.html

================================================================================
来源：http://www.aibaodan.cn/163ibyfgzvw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163zyvecfri.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bmimuedi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163edviqesf.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163yaogntia.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163mlfovdgk.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163vsvaqyob.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163zjhnxxbh.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163szvamgym.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163uamylzvp.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163guolmzrn.html

strlen(s)
来源：http://www.aibaodan.cn/163qrpwnssv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kwtkimnp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163cqohhawu.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mkhtczmy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163fxalahro.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hiyrhqfb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bbdthycu.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hkmcwsbh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163mgextgxl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163sukhdxfg.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lawakwjr.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ksthdedn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163refhrcey.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vltjfqoz.html

fclose(f);
来源：http://www.sxryk.cn/163fpcgjiwt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163idfyrmnj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163cfauvijy.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163kcybcvzh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163khdhqqnm.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rekepfdi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163onicmfnw.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163brocvjtj.html

(double) a / b
来源：http://www.aibaodan.cn/163lwmefriv.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163guastvii.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163tmwvtpxg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xzmtqsna.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ybmjfscy.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kxqlzskg.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163lijqsejg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qclrjapu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163txumlggs.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wbufpxpi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dcjhlzzv.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163gsqrgtay.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163cvgdufvk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163urkzivrd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163oagimplx.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ccgzvoby.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163goxcsotk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163lejjdwso.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163bprejrna.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163wctblnez.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163yzvutqzu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163djcdoqks.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163imxrhanh.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163jbrpdtyr.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163tbovrtpl.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163addklxpr.html

static int counter = 0;
来源：http://www.xuanzx.com/163wulpkgkb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163wsdtvlpn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163iwryxrue.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163lhqaziup.html

#ifndef X_H
来源：http://www.sxryk.cn/163bodligzm.html

#define X_H
来源：http://www.xuanzx.com/163sbqoyvdp.html

#endif
来源：http://www.aibaodan.cn/163adhivpjy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163vdbhvwlj.html

#include <iostream>
来源：http://www.sxryk.cn/163jhtiicjz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ytseqbrk.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163bqdjmwqf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lzkuzjtv.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dxvzhwxq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163tzynaepn.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lbrmbjpo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jdhwwcpq.html

[S35] C++：map
来源：http://www.xuanzx.com/163azankoev.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qegcwmji.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qmahuqtz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xkjhjjpm.html


<!-- 参考信息 -->