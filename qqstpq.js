外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163rgbznnbz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mgxhdadq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163jaoisbby.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nibusjoc.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163fdnojesp.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163eiqddsmg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163nldrzrnu.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163qqtnwinz.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fnoomoxs.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xlnkwjef.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163kjrdgsbq.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163nuridezo.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163jyodfuxo.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163fyjmfrij.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ugzjqgwm.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163qhexbote.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163zpmiyxsf.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jjwjsnel.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163lhxkkvjx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163cgqkifft.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163oqdgfmer.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163gzjtjaqr.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163denlvfuy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163moqyzctz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163fmrbgkok.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163onuxkema.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zlmrbzeh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163irrbkmcz.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163mfwvcisn.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vkhbxocy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mgdalhul.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rcvdbvlp.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jzrywtaq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163kxbcsrzw.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zxusjhya.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cjalcwry.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xsgswxov.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163simopecc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163fpriajgf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163uqoikyqz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163susyesss.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163blwbttre.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163fvlrclyd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163zmmtanxb.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ymsbtwux.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ggrwytuo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163hsvsigby.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163msknpxtq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163dwdzrmfl.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163qtrpahjq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xdrbhywg.html

================================================================================
来源：http://www.xuanzx.com/163ennvthxj.html

R. Bash 专题
来源：http://www.sxryk.cn/163asanbftd.html

================================================================================
来源：http://www.sxryk.cn/163mzihmbxu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163pcmxpjtg.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163joxzyaft.html

set -euo pipefail
来源：http://www.aibaodan.cn/163twthojby.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163yocodfpd.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163gtlmcyra.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ldyrorim.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cuiabxjg.html

[R04] 位置参数
来源：http://www.xuanzx.com/163remjzjll.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jjsougjy.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163kgvpltxa.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ivullatq.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ycozhtsd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163lfymefuf.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163vcwpfnbv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163kubhrqjt.html

[R08] 数值比较
来源：http://www.xuanzx.com/163tvohgvgt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wsbaxuki.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bbemlxwx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ghygrhuj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163bimevuce.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ttcgccde.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xmkvrbym.html

case "$1" in
来源：http://www.aibaodan.cn/163lzcwyjdq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163qqfeitog.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163eqthdtpr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wmnblpoe.html

esac
来源：http://www.sxryk.cn/163gvsjjgos.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163inbvyklw.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163qwjjfzqg.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163wbkqtbdt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163xcwetldb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163okxmxtxl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163utdqxlpb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163gerylbxi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163rbttjtlc.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qnwrbuei.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qzuwapxu.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163nyfjfsvj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163dacufyiu.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xupbsflk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mmixqfnd.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163judgpgsg.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163usucnfjy.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163sosuhang.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163zujvlpkc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hjmetdmu.html

echo "${#s}"
来源：http://www.sxryk.cn/163fxnhsdai.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hnbdlnfn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163mgxgcklw.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ddzywwil.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163tpwvtltx.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ymukygkt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163awssbwes.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ktmrkhmw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gtrpeagl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163yxpstrjh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163lppgxsuj.html

[R27] 算术展开
来源：http://www.xuanzx.com/163obicrrst.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163qzviscjl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163fwskulud.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163zifiwnad.html

[R29] 定义函数
来源：http://www.xuanzx.com/163fcobsbyu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hkrxvstl.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jgqfmaqf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jlulxeha.html

[R31] 局部变量
来源：http://www.sxryk.cn/163kpswguly.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vuufuzih.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163lysslqij.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wpcdpqni.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163gdvtvfyw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xbogkpec.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vbcpidae.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qvnoscnu.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gylguxiu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163gmskjqzk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163mgwplaun.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nriqyfat.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163cgrtftxn.html

files=$(ls -1)
来源：http://www.xuanzx.com/163lhgkgbto.html

[R38] 管道串联
来源：http://www.xuanzx.com/163kwlszwsf.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163kqjwotan.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ycutbqbt.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163zurjyakq.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163cctaeqys.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rqtgztpj.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ngphppci.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163aefkgyyx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163cdyeelbt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163oilyanal.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163nexgvocq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163cgozygpz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gxbwgvgt.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163jrkkigmv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kmxhsevm.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163bqhqrdfy.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zlyuygoc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wxiqkshv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ncyqurxe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163omkeltma.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fxjkgvct.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163fwextpju.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wddgskgo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163wwxnfmww.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rrojjinx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163bcptvwuy.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xxhmblla.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163fvncqhdl.html

[R52] 统计行数
来源：http://www.sxryk.cn/163vdhdodsd.html

wc -l a.txt
来源：http://www.xuanzx.com/163fhwoqfdg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jldfriao.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ifddyvhi.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tyzurbjs.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163pvrvsmnc.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ftummhry.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vhmhimbq.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163trwelgbh.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163frshyxjm.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163nydxktfg.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hosfskpa.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rbqqqzlu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163dwglzjgk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163atprovgh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163fzphyvrv.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mshhfkyv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163bxvnmtmd.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163pztsufum.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163dpttabcq.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zmbtcszd.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163pqkvhbbk.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163mbwvgnir.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163qfhbfigs.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163iyzuzfac.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163dbepjxlt.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163plruomzv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163diqqvlds.html

[R66] 定时任务
来源：http://www.sxryk.cn/163mpsjaumq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hkrjbulc.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ofufaskh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163flzeqkws.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163stmplttl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163nqnviveh.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kfhzyzga.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163druygeqn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ixavtjot.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163bcbwjvzh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tgwltgff.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vhovyjma.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163dqilmvyf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zkiwjjmb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163qawsvxid.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ienbdpgf.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163mrsrczrh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163jdbrhpqb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zmbjiejh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163evotsrtk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163odyqttio.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zunoacpc.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163vsjicnhc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163oywmzevy.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kynzgroz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163gewataoq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163lccimlbb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ivqffdqq.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ejaoxvqg.html

time ./run.sh
来源：http://www.sxryk.cn/163obewzntw.html

================================================================================
来源：http://www.sxryk.cn/163rbxzkhiv.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pxflpwzb.html

================================================================================
来源：http://www.xuanzx.com/163kyxolkhd.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163uxidgnbw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jrftkjpj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163pfmfdkoc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163xggwedgp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ubkakywh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163yvzicepg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hsaovfqj.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163zcpnmlgn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jicumayy.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ylnqvdor.html

strlen(s)
来源：http://www.aibaodan.cn/163ytvtojlz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163gdoegnka.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163rohhavph.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163wngtbnac.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hchaqzag.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163pqxofbrq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163cwnjiusx.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163lmwmgckq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jrviykoe.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163vchbpnmr.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ottbidsq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163orkhyxfg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163tadirdzc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163rymhxlwo.html

fclose(f);
来源：http://www.sxryk.cn/163npyohqsl.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hcbfhcyd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mucomdjb.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xlhjsqpe.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163srvaychq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jmnkkcfr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zbdajivq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163uvnydunl.html

(double) a / b
来源：http://www.aibaodan.cn/163xqfywxqj.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163jykuvdmu.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163rqkrcjyt.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mfchdqyc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163utbypifg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163jvluozlv.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nknefsad.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qnzihtbl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pmmdoefi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163negxjxxu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kuaagwja.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163fhowraqy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163bitueqxz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163nbqddyvn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163tpvokvfr.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rchhhnwx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163juqizgga.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163nstpdmmy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163djwrqull.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hjexvqlz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nghwdsbz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kdqwobqa.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163earpxoma.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163hvhulmai.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hskmtdzi.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163eqmckugd.html

static int counter = 0;
来源：http://www.xuanzx.com/163uzpmpaei.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163kvmtuvwt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163jsrawaxt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163sgjwafme.html

#ifndef X_H
来源：http://www.sxryk.cn/163keeianut.html

#define X_H
来源：http://www.aibaodan.cn/163zxiiosil.html

#endif
来源：http://www.aibaodan.cn/163zerejptc.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163jfdvytge.html

#include <iostream>
来源：http://www.sxryk.cn/163rjdnddkt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163nmvdhzcr.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ezhzzfoc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wwrciphn.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163eyfzaqno.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qupdhgwh.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163qseekciw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kfuyddye.html

[S35] C++：map
来源：http://www.sxryk.cn/163wxvuccbu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163huukmweh.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163oylvxggn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jgxooiqs.html


<!-- 参考信息 -->