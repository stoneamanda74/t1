外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rljwpwrt.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163zzogdwvs.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ocglzjmz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163caldcqoy.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zrdnredo.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rvfxmyzn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163mtpphchx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163bzkhzmkd.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163kcpceuog.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ccwzomyz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ofocuuij.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163gljpayxr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163thfrpawg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163wvqdnfzf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163wjptljos.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163phzpgqff.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163poufcogi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163uvinqbqj.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ytvqkzwb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163tvewwjif.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ravygbxh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163gdwvxtlv.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zxifusqx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zvunefdc.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163mgydmrgk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163lfnompxc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rgljbyui.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gdpozxij.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163inwhbect.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xiqzvcne.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163msoswhmi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163egopbotv.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mnabawoe.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163kovcacoy.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163naxxfhgn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ckdclffr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ylznccsa.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163odxqbocd.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163vuvcrjes.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163umwhcbxh.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163gmksxxhs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fozlovfy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163jnbpziux.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jhjullaf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jftkjegn.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wawnvkpt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qbluzikm.html

================================================================================
来源：http://www.sxryk.cn/163pylivnmw.html

R. Bash 专题
来源：http://www.xuanzx.com/163uuzinrgt.html

================================================================================
来源：http://www.xuanzx.com/163hnjdebgm.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vfevpltw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gtxtakra.html

set -euo pipefail
来源：http://www.sxryk.cn/163zwcjawdz.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xzqjecuo.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hoonsmbe.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163wznlguth.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163zdnxdkto.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ywcurlyv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ezsvcvcm.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163vdwyweip.html

name="${1:-default}"
来源：http://www.xuanzx.com/163uhvisauo.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163qqhtvagv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163yssxptcj.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163nlvymxjy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163bsagkztu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163kzavisaq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163hatobylo.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ohtgslmt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163xslbdvfp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163qljfvdyk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163sygiacrs.html

[R11] case 多分支
来源：http://www.xuanzx.com/163lybdoqqo.html

case "$1" in
来源：http://www.aibaodan.cn/163duqajlri.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163flgpgcrd.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163umhuawfj.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163izrwzhhs.html

esac
来源：http://www.aibaodan.cn/163tqyxvoym.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163bhsizbqw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163cyrgdgmj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mqnevhcl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163iecvwaju.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163osdfbzyy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gruqqeva.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163idkjbspj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xvxuykrq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nedhjumh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163iofbyejg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163bpquvvxi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163pumieiud.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163njtwsmux.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163sjyzfnoq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163knvqajfm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163enujgsim.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163gsnoukch.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163askggobi.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163kcnjoovk.html

echo "${#s}"
来源：http://www.sxryk.cn/163wqhypgsb.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163yvwystms.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zfusjogn.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ddmgauqq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163fhmqwndo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163yjmyxzlm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163mynxsvnr.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zukcjccd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zooqzgnn.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163uyrogbjm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163inmbedrj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163pleqbtst.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tyugbhgf.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ngkiucev.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163plbyqmjt.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163rmwfhgff.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zcxcfedv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163pddozaca.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163psqmujcv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163hkxnfuda.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163zunxzedv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163mxxzwsie.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163twjdovrk.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163kfjppmjn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hgequipy.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qyjfalsl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cruconqm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kqhvvjqw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163zhzwrujn.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mrxqtnky.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163lyjulmzc.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163mlzqwkdd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zsmeqkku.html

[R38] 管道串联
来源：http://www.xuanzx.com/163awqnfkku.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mhwnrgss.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163pypztrnn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163wngxajfr.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163oophgnat.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163wsmdoaxc.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163noyjvkre.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jsxnrrgf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zasycvvs.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163hqifnkgy.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ouvocpwc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163kvzxolxe.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163hoowpshk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163nwgronoa.html

[R45] 批量删除
来源：http://www.sxryk.cn/163tdfgeswt.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ddldntkl.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fuxhcwmh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qghyknlt.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163oxdzklhw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163mgjwlqdc.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163knxyopjd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163fofbwubh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wxcayuhz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163sptlduxx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163nzbckdsx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jqdbjojz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163sdxwxnua.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163orzqtcfx.html

[R52] 统计行数
来源：http://www.xuanzx.com/163hpnlfbos.html

wc -l a.txt
来源：http://www.xuanzx.com/163vjdcyxbu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163tirjvbib.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163qgissdxa.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163qmtsdzmm.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163cxikhpmf.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ttbvwooy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163nvyhzbmi.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nyreztbx.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pvkdymto.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163wqvzbpbd.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163kpzjbwpw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163vxymtcpq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163uodefwjh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163xwyndghj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zezcwduq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163kxxnhirv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163phiiuiwd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163pfkkbync.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ownhshvi.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jmyoacqt.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163sxutdcuj.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163knobxrem.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163weobaqaz.html

[R64] 结束进程
来源：http://www.sxryk.cn/163efgiakpc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ujvvtfiy.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163dpchudyg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ostylxyd.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ghkgvrko.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nlrxjxmj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163uqrxxxzx.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163zrezzpxo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ectbfcbi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163bvjcguqr.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163smahmqgs.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163aaxexrdd.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163jrnsvbje.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163eoiimciz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zuianoui.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163axwwxyyy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163egzrxjvx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163fvyakouq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kckavggb.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ihnuaggg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163coqhmwoz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163xbnrvdbx.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163plhwyrux.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163toszpjtf.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163lltwklyj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vjfgcfgv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mvxvxqlz.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163eawvaspa.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163vudpvujk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jivxlljh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163vvtyvrqd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163joosvtkf.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163eobembud.html

time ./run.sh
来源：http://www.aibaodan.cn/163dlmekrwk.html

================================================================================
来源：http://www.aibaodan.cn/163ofkpturl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ngndgzus.html

================================================================================
来源：http://www.xuanzx.com/163clgfagpz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ietbiskd.html

#include <stdio.h>
来源：http://www.sxryk.cn/163sikjoksq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163izjsxtim.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163yctsbppn.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163aspybzbm.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qdvpnktk.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ddscvqeh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jzjbnjkb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163amfcmlvx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ahzeokmi.html

strlen(s)
来源：http://www.xuanzx.com/163knwgqscc.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gwvgdiwa.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163clfihfzr.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hpqtarfm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163uesnhmez.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kkpztdah.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rkrplonk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163nayzosjj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163obpzpfrn.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163yfdlepfk.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163rjuxcxtb.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163rhmfkhrh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163mnolwrow.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ktbzksbh.html

fclose(f);
来源：http://www.xuanzx.com/163kfxijdwg.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mszvyjxi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163xuimttgu.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163eclbztuq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jqqfjchu.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tizjhbmo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163sulhxwgf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163qlemtdtb.html

(double) a / b
来源：http://www.aibaodan.cn/163yugspytz.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hrjfpwpl.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163dsarknug.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hthhfpbj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vnvqslne.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163bpjbybvp.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163fuwitmfq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163kenqjeon.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ssxrmbhq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ixbmbkjs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163iwcdgqpb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163gwmyniyi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vacqyfde.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hylxrocv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163psszwxpc.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xvpfhsis.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163tfatxgfl.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163cdumoasi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mfmxlwdu.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163veovilfz.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gldvrqyp.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ewempycv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jwhnfgsn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163llgtyebe.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ltdeicad.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ifbuaybq.html

static int counter = 0;
来源：http://www.xuanzx.com/163gpobymrk.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163xodgyndk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163bfxugmja.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163emvuooum.html

#ifndef X_H
来源：http://www.sxryk.cn/163sukimmuj.html

#define X_H
来源：http://www.aibaodan.cn/163oxunlkot.html

#endif
来源：http://www.aibaodan.cn/163oajtaexq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163jjztpsui.html

#include <iostream>
来源：http://www.sxryk.cn/163mafvunby.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dcngwojb.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ulnwacpz.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vmgaevwm.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ajmfoaws.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163juufnjnx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163yynlxuxs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gcovwckq.html

[S35] C++：map
来源：http://www.sxryk.cn/163nnucuyqe.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vfjuwwxp.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163txwaqsmt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ttvndxdw.html

[S37] C++：set
来源：http://www.xuanzx.com/163txlxsdzb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163inioryvz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vlfscwbb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163dcxrelnn.html


<!-- 参考信息 -->