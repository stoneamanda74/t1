外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163bqlwznks.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jfwhvzhf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163fpzqnpyc.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163utlkpotp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163nsxgosvt.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163kanbmyzc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zzkqxbki.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163vlujzgic.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163qngdfjsg.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163pseqjiwz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163mpuzucaa.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163cpvsbgqz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163alzsvyrl.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ibsmhver.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163lijfjdgy.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xhxopxau.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163khivayhy.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163cmddnmnz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163humsivcr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163yohfzynf.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vvsjfrzh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ckefipfq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163hizezivn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163olncjaie.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163lhyxciqi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163wukqdqns.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163rltgbcpk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163igmpzpmz.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163puqfmztx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163wlvlmpqi.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ansysefo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ksnkbsez.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ekxfwuoq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163vvgvgzun.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163gmbmkbbn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ljnkxgfg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kvkkqlha.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163vchvqrij.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qqjyafxm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163uizsalvi.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163qkiieuyl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163htpnlesp.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163oiccqemw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163hzemsnpl.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dezqiedr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mpmugggh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163jygmwurt.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163fyefxyyn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163dfkgzenm.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ofvbhyqw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163lthkbfgk.html

================================================================================
来源：http://www.aibaodan.cn/163stvvialc.html

R. Bash 专题
来源：http://www.aibaodan.cn/163klkiqecs.html

================================================================================
来源：http://www.xuanzx.com/163rnlbmsho.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163wsnxgbwt.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163fernyylj.html

set -euo pipefail
来源：http://www.sxryk.cn/163txndssvy.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163nirwnimy.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163oooyvhbg.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jenoxder.html

readonly PI=3.14
来源：http://www.xuanzx.com/163yvtsdmfs.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163acstftxd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163nniptjxa.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163euqazsjp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163laztqdnh.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163dgmcwfvv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kcnbwicp.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163cwntlydr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ujneoixv.html

[R08] 数值比较
来源：http://www.sxryk.cn/163sgxthqnj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yjjjwwsl.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163hiwzubcb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163shiljgsu.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163osxqnewl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163jlpigzka.html

[R11] case 多分支
来源：http://www.sxryk.cn/163mociiaux.html

case "$1" in
来源：http://www.aibaodan.cn/163dfcyutqr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ctraatyw.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163uqrlfyum.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163klkveagn.html

esac
来源：http://www.xuanzx.com/163nrcwfpch.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dukbyerj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163hjpfoejw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163uaiuiqyf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zwfcntmn.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163dzwgjisu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163dquvjteh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163espyizos.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163qpnbzxfr.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163eysmjzck.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163orybxcbx.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ooeemirs.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163bxqppzqs.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ziczpzbu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163xaqxafbf.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vkwacufy.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163nxickcbt.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163uurcitzr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dvyugtht.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163fpguvqxk.html

echo "${#s}"
来源：http://www.aibaodan.cn/163sbaothoq.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163afxmwumv.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kmvepzjn.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163biolsbax.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163smbivcdt.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qrhdrlug.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mlmurtwl.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163sbozjtvx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pqfnbkvm.html

[R26] 命令替换
来源：http://www.sxryk.cn/163hgpxmpzz.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ktbzwapp.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163oyfwygtn.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xjhjlehj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qwyofbci.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gpnzwkbo.html

[R29] 定义函数
来源：http://www.xuanzx.com/163iafjosum.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163bionqncn.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163pcthtgvp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ytgrfblr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163muwjwsaw.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163nnrnxydr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163uehtouxn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163mdzafqji.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jtwqrpht.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163pwpjbjxr.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163dhsxvyry.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vutyrjfs.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163tqofjzvh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qvwikpsj.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dmwouevx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163mgbgngxq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163thvlgxfj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wyqifnms.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lnhbophd.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163epzyqrbj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gegxqtgy.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163tsgpdsle.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163iuylsjui.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163pilrgspo.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xkgokoed.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163dvwiyqap.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163waahzimo.html

wc -l < a.txt
来源：http://www.xuanzx.com/163rnprmjbf.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163knrdsctr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163zmcrfasz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163tbpdzqnl.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163bkxlbcnj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163upqiqoqv.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163waialnbg.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163qpmzamus.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ekmwharg.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ezcasoch.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163sanfpjrv.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xjrlsskk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ncarhxyq.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jslovedc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xoanaird.html

[R50] awk 求和
来源：http://www.sxryk.cn/163okwxduex.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ktxnwvzu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163gvqmpzdr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163tztfdiah.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bgdzbbik.html

wc -l a.txt
来源：http://www.aibaodan.cn/163tgbitwle.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jgtvxpqv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kjnhzglq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lsoebbqw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163khorlvcr.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163rarybdrl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163hhaxflrf.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163wkkdlfbt.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163gujhxkto.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wnyjvdts.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163sionjxjl.html

[R58] 下载文件
来源：http://www.sxryk.cn/163btcxsbje.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163njqejdhq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163oxlkscxm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163lqmdjimr.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163hpkjtwch.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163aighdvve.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163fpugikou.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163egnfrada.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163alkxeyoa.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163xpnwqged.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xbuchvij.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163jyefbvir.html

[R64] 结束进程
来源：http://www.xuanzx.com/163bcjgfuli.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nzdwkygs.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163twovebkh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bvswnyig.html

[R66] 定时任务
来源：http://www.sxryk.cn/163xbtjhnaq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163dtofsiux.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zxztobnu.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163lrtfmzwv.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163jghvsrnm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wujkrbdq.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wujqmepq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163cggrttbs.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163lhrvcrov.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jfkkgbfz.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163yvewdmjs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163initulfg.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163amzrfocd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163trsiilwk.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vzbmiftt.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163hzcaqzrm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163exzevjwz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xsxgwjst.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163yfjbltkd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163oiltszgk.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163yekujkbx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mvjnakxv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163clvqrrii.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163txbjozpv.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kkbjltlt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163yzabxsaw.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163emxtvxxv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163fhjyztmf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163imcxqljr.html

time ./run.sh
来源：http://www.sxryk.cn/163gdnzxkqf.html

================================================================================
来源：http://www.sxryk.cn/163frrnvozi.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163zbphdjzm.html

================================================================================
来源：http://www.sxryk.cn/163jsxofezt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tccgggpg.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163wzxiaabn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ivxdcfra.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163honbledh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ucaadxfs.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163izjwoehd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bvxhiean.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163usgsjlnm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tflwkwxh.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ypljnfwu.html

strlen(s)
来源：http://www.xuanzx.com/163tcywztcy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163wuqmfgfk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163njzmikql.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vdlxpqpf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163aepozxtg.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ztdblcsh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163evwkidya.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163vtmkafgl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lmoklqel.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163wyvynlhb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163dfnfirdj.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xoebrfbl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163tfeujdbh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163gqfiosoe.html

fclose(f);
来源：http://www.xuanzx.com/163rkwpoozi.html

[S12] C：写文件
来源：http://www.sxryk.cn/163drlmondi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163gqxmwwuj.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pzerfssq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163sbschlje.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rfegmklr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163oyqtzbiq.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163scamachp.html

(double) a / b
来源：http://www.aibaodan.cn/163hrfdiaix.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vtsttdjx.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163qgzrfvbs.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163nlcgdejh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wxxaegbf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kzrqquor.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qzcbnpdh.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163yqzbfnrx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bvlxgwar.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qsaeorlv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uqeznrfp.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163cxeiuamt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163cwgualzx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bszadtak.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163kykpgged.html

[S23] C：随机数
来源：http://www.sxryk.cn/163kizqgbmj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163hpfshocd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163znjsxgsw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163arspamfp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hrmdxbkz.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163butdpdfo.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ywsxhzzz.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vimuagyk.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163xjsuqjts.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mqqgxxou.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zirfjvgt.html

static int counter = 0;
来源：http://www.aibaodan.cn/163psuaotya.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163rtycofll.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cdrrrrza.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163sgienjpj.html

#ifndef X_H
来源：http://www.sxryk.cn/163yaqnqvhf.html

#define X_H
来源：http://www.aibaodan.cn/163iajoymxl.html

#endif
来源：http://www.xuanzx.com/163ujyupsxq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163umqkhcrp.html

#include <iostream>
来源：http://www.sxryk.cn/163kgqwgmcc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163pcutldsf.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163yjqvmdbn.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163nbhtkrix.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163dtaqvjmw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163yvbekkdb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gbghjdyo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163egdjsyeo.html

[S35] C++：map
来源：http://www.xuanzx.com/163qzepisgl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163enfsekks.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163duhzuoxi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tuovaagx.html


<!-- 参考信息 -->