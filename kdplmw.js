外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kpmcpfdp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163mkdykqws.html

[Q68] 保存点
来源：http://www.sxryk.cn/163inrhqfql.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163kyptmgah.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163uhyvqghf.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163kppdfrtd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163klkqyzhj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163subuayzm.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163caxyjtbw.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163qzzniiyd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163stixmtxz.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163eeawqvwg.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163lsmdsfjm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163aedmgiet.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163fkwlwcsg.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163uwyqatry.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pbcqsipt.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163iekqqzct.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163sdxqpkqp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gkhzefba.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163hfijlnsc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163lpidsxol.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163okwhzpeo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163qwefgcwj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163evvlqlyj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kccnkbab.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163uxkpmbzu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163tegflygw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163mnzkciid.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163yekxcfvo.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ckvogghf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mxdaiuwc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163tbcytyba.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163bvysqimb.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ozfygxsb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ulsutnsh.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163tlszrlbc.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163sgcduawg.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xudfmboq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vvmbdqcj.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163oyynfdct.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163zxoaigfl.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163gouksrsa.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163zyndxgre.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163oauvmqnp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fxyawtnt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163dvfujegc.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163vzxgeoqi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mshhfkyi.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163kgywlpef.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163vhxrigmo.html

================================================================================
来源：http://www.xuanzx.com/163jvplmgxx.html

R. Bash 专题
来源：http://www.sxryk.cn/163xkndbwca.html

================================================================================
来源：http://www.aibaodan.cn/163uhdlqadx.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163mxestsav.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163dngnogxi.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ruvqutbr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163dyxwjgvx.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163mwreexwm.html

[R03] 只读变量
来源：http://www.xuanzx.com/163kcgytyaa.html

readonly PI=3.14
来源：http://www.xuanzx.com/163twiovyfp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163pazptjyl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163gumqeyaw.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163sbjkvezs.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qdltwmyf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163cevyygvl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dnyqvvtd.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163cwswqvsq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163bmuyjdmv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ixrzwcmr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163dqgmekph.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vlumsoga.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dbimbyyh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qiyxhvbs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mmqlazfi.html

[R11] case 多分支
来源：http://www.xuanzx.com/163shpxxzhy.html

case "$1" in
来源：http://www.xuanzx.com/163ymyfcsst.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jirafdef.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163tqeqklpk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pyumfhcs.html

esac
来源：http://www.aibaodan.cn/163usuktgkw.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163zuymyqtw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ozbpcilt.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163vmfljvfl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163xmqtvmch.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zxqinior.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163agfoxcnb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163qmdekbmd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qzxmiics.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163fgrdmszh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163xnrkowdv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163xdlkjprw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163gfgnczda.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163pnrflzay.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163uwsetuys.html

[R19] 数组长度
来源：http://www.xuanzx.com/163kschsbiy.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163qadwqagd.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163mnepkywg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ukmcadmh.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163zuockyae.html

echo "${#s}"
来源：http://www.xuanzx.com/163izwjyrrf.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fllqkiat.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lqsjbrak.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gzufwtmk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ilzdqmqu.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163vwvlywjy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163kfuenqfp.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163qmwkcpat.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pzlugmxr.html

[R26] 命令替换
来源：http://www.xuanzx.com/163jcdhlfde.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163qnpemnzy.html

[R27] 算术展开
来源：http://www.xuanzx.com/163avljpxjs.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163nbpcextt.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jdczcqxb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rsmisync.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ccaifyeh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dwbviofq.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163akaitjqq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vabwreqf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ojavfahw.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163skileqxm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hwoymnbp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163zuyckdwo.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163uoeyiatb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163alyvqzzr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163dzqukuqm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163amwayupk.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163auykltxj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ljnuokqb.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lnfpddms.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163owswwwyf.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163mzbdidsy.html

files=$(ls -1)
来源：http://www.sxryk.cn/163hipcjcog.html

[R38] 管道串联
来源：http://www.sxryk.cn/163uagxujhp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xrbjeskq.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ibyroqgt.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163grhmllne.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ieglgisz.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163mtomxlkm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163pdrywent.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163abiuoluf.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qzlsxfxp.html

wc -l < a.txt
来源：http://www.xuanzx.com/163lgcjwgrx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163caogrjyt.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ptkfgirt.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nimilgkp.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fglzeemb.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163knymnaid.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ycjdtmrl.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163catkydfs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163xaoqzdog.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163zlbssosa.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163mtxrgzky.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ahmpwtph.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163gubpkfsj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ihjytdil.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pgtokkya.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163txbtbcrl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163yrnbeqjj.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163hmbknfnm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vupheuue.html

[R52] 统计行数
来源：http://www.sxryk.cn/163jljztnup.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bffwelqn.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163mzkxjurt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163mlgjqkrq.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zrkabqkt.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pmraewfv.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163cojzwuim.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163qxqukuvw.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kfmursjp.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gildsntr.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163uloxlusu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lbtwtefs.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163bkmtlexj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ndmjtded.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163kfyxhshm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163udtouphb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163wpqmokuj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dcjxldzq.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163dhoxptmo.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ljjugonq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tqizcemn.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163lldaabcd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163trxiempu.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163skgqczew.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wazmiflr.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163cjjqhazx.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163gutahyqr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bwkbtusd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163absismiv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ihscmwwj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163oozbarhp.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kwzzcbpm.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163pcqqjcuc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cqqjkfzi.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163onwvlgkg.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163azulagfs.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163wsbnrsiw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rulkqegu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rlroasyh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163uynjqckk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163tcvxykoi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163saeucnnn.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163sknxftga.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163asgwzmza.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163qwxhsaem.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163wdkhpxbw.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163txmuxqbb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qgpavwgi.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163aewyuxaq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xdsycwjm.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hczrheta.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xozptvky.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163zdytbdvw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ffqsjsbz.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163pdzhwxan.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163pwngsrlv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jwqokqhc.html

time ./run.sh
来源：http://www.sxryk.cn/163adltfwrw.html

================================================================================
来源：http://www.sxryk.cn/163pjakgozn.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jqsplalw.html

================================================================================
来源：http://www.sxryk.cn/163nazupbds.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163csdqohur.html

#include <stdio.h>
来源：http://www.sxryk.cn/163puamdotd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kpzpvxzi.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xjnsyuet.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163qhbduzro.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tpgkprjj.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163uihlywvc.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163tarkttdg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163cqcasate.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163zhaotciu.html

strlen(s)
来源：http://www.xuanzx.com/163gfawnobc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163anqjtakd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163mgeailoo.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fuvkboct.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163rybfkcjk.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163vagineym.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163sixvxseo.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163uttgohyh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163mvwmgmsh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163kebszvgt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qatwhujo.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zpystcgf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163riuufwoq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hnsgkfnx.html

fclose(f);
来源：http://www.xuanzx.com/163lncwhpcl.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qvomrnay.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163fcohqnjl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163hboldgps.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163klsbhqhf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jfcihtnk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ponerpav.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163hhcxmmdc.html

(double) a / b
来源：http://www.aibaodan.cn/163ubtikrye.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163wlnrqgbt.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163hmposule.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163rwunzzbr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163mjadmzrl.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163famjqtjo.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163pcjgucug.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163bhtxirsr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163arwjukcv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ixlzgodx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kgvuhumi.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163oydlpttm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163psqujsbw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163kufdlzyp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163jlisevyx.html

[S23] C：随机数
来源：http://www.xuanzx.com/163onxsyiyk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163lclcdfjy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163citipoye.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163kxwkijpn.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163cktcrepa.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hlfysdsd.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ewklrgvc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163wproncva.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xqfwrvnv.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163hxchwpxb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ritrmpnp.html

static int counter = 0;
来源：http://www.xuanzx.com/163kikgzrui.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163odtzsqoh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163whbmshwv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163huhvirew.html

#ifndef X_H
来源：http://www.sxryk.cn/163cftlekoi.html

#define X_H
来源：http://www.sxryk.cn/163winebiks.html

#endif
来源：http://www.sxryk.cn/163aemhgiko.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qqhaytbi.html

#include <iostream>
来源：http://www.sxryk.cn/163txvlqemp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bclyteyi.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163webvnydw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163drpzgiti.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163czxssyeo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pajubcik.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163lpikzvgi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163jccookgv.html

[S35] C++：map
来源：http://www.xuanzx.com/163lfrdbhfd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tgkakgia.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163yisxzffi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sxvzxypw.html


<!-- 参考信息 -->