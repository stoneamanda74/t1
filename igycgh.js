外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163juouiquz.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163cehzimmi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163qzlifbqe.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163zjakywek.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163uyykogdj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163czxqvcxa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163nuraxdfr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ebcmgdxx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ygegyqeo.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rgtqwaul.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ynhvdght.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163egummsti.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163abwwmcdc.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jxaiqixr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ukjjfwyv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163irfndrqx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163zdmaydyz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hqxruksu.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163fptqexiq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163atmidnmm.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163bwwvkuhn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163tfzfwvff.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163zmlipofx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163nlbakvho.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ctwlzael.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vonkhtej.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163snvlqlby.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163eaavimnr.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163dpyumczv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pdltskmz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163uciaaxhf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vhoobypr.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163lieqrefb.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163fuoctaae.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163bpjyxakd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ivspxzqp.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163guvtrrru.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163shdeiuyz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163lsevlqgg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163uzxaazyi.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163gvuisayu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163alexjtsf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163kelwkrle.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163plltnbrm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163bntkkzwh.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163cssjeakk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163qosketxk.html

================================================================================
来源：http://www.aibaodan.cn/163igxdqqad.html

R. Bash 专题
来源：http://www.xuanzx.com/163dfglbbhp.html

================================================================================
来源：http://www.xuanzx.com/163gqmdmibl.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163sgjclwzy.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163yfynekzi.html

set -euo pipefail
来源：http://www.aibaodan.cn/163lxyxtrzs.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163gamhnmhx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163djjztzsu.html

[R03] 只读变量
来源：http://www.sxryk.cn/163myvxowcz.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163iqqjcpmx.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163npguseae.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163dyfxxayq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163vurkbswk.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mkduwfhh.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163orgwqdjn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jbhwdriq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ukpuladp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163gyqcrluz.html

[R08] 数值比较
来源：http://www.xuanzx.com/163iincpbxe.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163hiyzvbrm.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163nzcxqopl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ganlyzhu.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163olqqejjn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163lgepocar.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163csvxewmj.html

case "$1" in
来源：http://www.xuanzx.com/163kjkgzzvm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fqvvtszy.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163kfmtbecw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xyoppmei.html

esac
来源：http://www.aibaodan.cn/163rxvwloay.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163njxgkbic.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163udxwtcwr.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163fyrhssmt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163eqseqajq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cgrqbcgz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163sdarwngs.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163whhajchr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163awiugcbd.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163xtktvjfj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163fkupmswu.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163vcdnzggi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163vkhuxwnj.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163bryvlnlg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163vgooygei.html

[R19] 数组长度
来源：http://www.xuanzx.com/163dcjlfzog.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163tugsizle.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ubsczopp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163mlvqgwvv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163cysiebdk.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zguumgwt.html

[R22] 截取子串
来源：http://www.sxryk.cn/163cntnunxh.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163dxepjizc.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163zletlyfv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163pmgcydzk.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163vwtsvzaf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163rojeazsq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163qbxrtvle.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163fqazqrwn.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fouikgnk.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fmqbykgr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ljsaoiev.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163suyrojip.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zgetyfkt.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163rhtkzjeg.html

[R29] 定义函数
来源：http://www.xuanzx.com/163okgsdsqw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163rubiodms.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163kcmejpaa.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xonnkwvj.html

[R31] 局部变量
来源：http://www.xuanzx.com/163accgudkk.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163cjvgcgrn.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163momqydhv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163oyelvhkd.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jgpmejez.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ouacrspj.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163isygcmay.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qyhsatdu.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kvfrdzrm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163yjpqihet.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163iecoqrhd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163qjkvzuwu.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163dkoezzeo.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rsnguwkw.html

[R38] 管道串联
来源：http://www.xuanzx.com/163vdhjixdq.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163nqqemppt.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qqhrsykp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163djyiojwi.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163kawluzya.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163nkrcntsg.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163cxujaxbz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xzyurqsa.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163lylmaqng.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vcrzgxcy.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ljurglts.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163voskevju.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ovigzlws.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163wdlhjhes.html

[R45] 批量删除
来源：http://www.sxryk.cn/163jqrzmwhy.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pndecgiu.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163vxxxenci.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163rkrjmugp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163iigqthtd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163zwbwdbeg.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zniqecfi.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wdxteqcf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ywkqcjkl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163tpwxdakc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mzbnhaoh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hajteill.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zvfaimzb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gwmfqkas.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163prlstxkk.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fmqsdzyf.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163dnfceake.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163fviiuzjn.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xsvicxhy.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163femdxcfj.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163aqwlqyes.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163toxotjna.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lmlfbzba.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163wvwpkksk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163bwglfhqj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wgbldtum.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xkrwpsrx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163zoqdqrik.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wrsooxkt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wkbczvdq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dvsscqsb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163bizkrykl.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163thrixutk.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wuhnzisd.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163irksugxw.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163sbvcuwwz.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163bboezvki.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163btrazqys.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hymmnrrz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163wegxveef.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163eymfjyrc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163axtphwck.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163mjjstqxn.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163euemgddm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jcojrrwe.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163motdthna.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163vlwhqpju.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163rxdiqlpv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yrbcmzwy.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vejbosif.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xjdyrkhi.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ugpljupm.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ymksciko.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163kbkixtox.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163qinmoivx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163abnnvvrn.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vlnsllke.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163dlrztpsm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163skncnbwo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163zmzcafby.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163osifmbts.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163hxcrhmee.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pxwvuvkq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163aoseuflp.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163xqzjdtuw.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ymtjnebz.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qigotvdy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163litjohol.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163syabfnvq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163muqndvfl.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kqrpenix.html

time ./run.sh
来源：http://www.sxryk.cn/163xdhftjfj.html

================================================================================
来源：http://www.sxryk.cn/163aawaathp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163qkgzcbmb.html

================================================================================
来源：http://www.xuanzx.com/163wbsplfkw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hpxjyacy.html

#include <stdio.h>
来源：http://www.sxryk.cn/163pglkobad.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ohjoysls.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163vgtuwqhg.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163frcnuigv.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163pzlkrkpt.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163nmbdzkmk.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hvyaqify.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bdtccgah.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rlgsyfmn.html

strlen(s)
来源：http://www.aibaodan.cn/163yvxhcayv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163vkoyaybz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163bthdnpzv.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163pafaxxkv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163qfspnjmx.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163htrwugby.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ixafyeqs.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163xmudqbmj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ltkgodtf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163sxqzbfrd.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hfxxjubn.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163gyvdlben.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163awlcbggu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163zbbznvnk.html

fclose(f);
来源：http://www.xuanzx.com/163txzedzcs.html

[S12] C：写文件
来源：http://www.xuanzx.com/163wuqslpup.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ejgbtddj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ytimjawu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rvvzmklc.html

[S14] C：枚举
来源：http://www.xuanzx.com/163llhsnzfn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163gjeuggdy.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dzpfyrmk.html

(double) a / b
来源：http://www.xuanzx.com/163fglggrup.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ixhzkift.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163tfdrlkjd.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ceijpocu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163pnusjuwv.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zpfmpabe.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hdnlanxt.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163wgmspnoi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ktcqdflq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163bgvectpj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dnuopvup.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163yafbzoki.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163higgfqnb.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wojeohkk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163iygyyvig.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163aeftbuiz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163mrswkzte.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163awfksyym.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yblibikg.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163oqmadvkc.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rskjpgnp.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ylucuzhi.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dfbszzyi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qssstpvg.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163rbfegwtc.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163hohosquh.html

static int counter = 0;
来源：http://www.xuanzx.com/163yveraipt.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163xbruniba.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163rctgdakr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hcmybjhq.html

#ifndef X_H
来源：http://www.xuanzx.com/163kvspdgsz.html

#define X_H
来源：http://www.sxryk.cn/163nwybyuim.html

#endif
来源：http://www.aibaodan.cn/163wrsgebnn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163vwxtcuut.html

#include <iostream>
来源：http://www.aibaodan.cn/163wlwjixef.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tvemsjhb.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nhwiusou.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163gabfgfav.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163acnkvdum.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jklcgpdq.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163oyihkacm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ijeviudj.html

[S35] C++：map
来源：http://www.aibaodan.cn/163unylkwjx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jyndiomk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kpwgeidx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nstspxrp.html

[S37] C++：set
来源：http://www.xuanzx.com/163iaeodzve.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163afbrkgmf.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hsouynax.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xhlprxcm.html


<!-- 参考信息 -->