外链999!wailian999！

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163mmgihukf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163mizovawr.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ryykdbtq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ticmhoyj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163yxoeatfk.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163epibvzgx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ipublvap.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163myodantu.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163rjhxwmot.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163jjdecpvt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ghwcoqei.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163dkwgaszj.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163cdztinrr.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ydbogkaw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163icmpjksj.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163nivjijhm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163hcmewfyn.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vqrwbvxh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163gtwhzisp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hgfxpuyn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163qhdyvsve.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163wiauwsbn.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lczzphvh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163dcpvjgji.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163fvyggjfy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ickqtpho.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vqmxcjci.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163bimulcdm.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163eadpnltp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163fxwkcolf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163vlrbdldv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163kndozjbx.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163yvudxtvt.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163dtemeuzb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163btwmgtrd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163tluiomro.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163tnhkdjod.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163lpqagkit.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163eadjioiy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163lmviidse.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163foxvgdlv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rwwutigg.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163bkyekmgr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163yiwicstz.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163smtajodz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163fauhqxqq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163tgtisibg.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qqusjzxi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163maqwshkj.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wmonyibk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163fcxujwef.html

================================================================================
来源：http://www.xuanzx.com/163sarwlllw.html

R. Bash 专题
来源：http://www.aibaodan.cn/163apczwwfc.html

================================================================================
来源：http://www.aibaodan.cn/163qeztraoy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163kpkfrzbu.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jqdrxyhg.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ooykzwdu.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163dybewala.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163whietexg.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163xwhrtzdl.html

readonly PI=3.14
来源：http://www.sxryk.cn/163yyxwybhe.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ucxhqxjv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163nxlawkok.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163lcyocmgp.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163enduetcm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ujoajtjf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vvvnqgdg.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163iwpjlvzp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163oinaoygb.html

[R08] 数值比较
来源：http://www.sxryk.cn/163hdplqvkx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163tfgjvora.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163nkqeyljr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163zbqxweps.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ggrgpfgz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163tktzqecf.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lfzzvegi.html

case "$1" in
来源：http://www.sxryk.cn/163wgrbnqfo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163nfzygkyr.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163givsskvi.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163tmupqoma.html

esac
来源：http://www.xuanzx.com/163wqvxwbrm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163zkvwppvi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jsklmhlv.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nqnybfni.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163baswtwqh.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163qzmrizpq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163lypxwgkr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163vfddufve.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ynypleln.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163wgtyifro.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163iyppcifo.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163tbpfqpzd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163qyziryqa.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163drfydthv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ytdhjdjj.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163sejhlzlf.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163fabhpile.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163nklmtpcs.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vurmqjpr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163jceakdct.html

echo "${#s}"
来源：http://www.aibaodan.cn/163milvssbc.html

[R22] 截取子串
来源：http://www.xuanzx.com/163cexxxozg.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ucmwvtdu.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163cmqdqgah.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fqpxyfuy.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163urrxriek.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163zpcgwnqm.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163vlelcpbk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163bgggnxcw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163vvlddikg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163zyxmavoz.html

[R27] 算术展开
来源：http://www.sxryk.cn/163xrhjtgef.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163lcwnvnrp.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163frjmgdzd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bhriucdf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163nxbjoikr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gitcfqhm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163lphaijqn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163sitrwxyb.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163aosoneql.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163hwtljtpa.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163gfqcgzbi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ydgebltb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tsfmjqfe.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163lrjxzcbm.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163rocgpqdp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dwgtwvbc.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163abcfrzfr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163wxoxslvu.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163grxhighg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163hifqkzbd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163uftkacui.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163yhaueisn.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163tcyjrpyf.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hivoctje.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rexonsdq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jtomlfpp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163eifqztqc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163gxvorcuk.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jfjsnzfx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ckkbbigt.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ketmekzz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163emvwhaav.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mmaduntp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hkzfvmtt.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163hieclvoh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163eniwrdvy.html

[R45] 批量删除
来源：http://www.xuanzx.com/163qdcvvuyp.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163mwatibih.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163myohhnuc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ceqjnxnf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163saroxjzi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163efemuxdq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163usdyypqi.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163pxtipfbw.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jhpfatel.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163frvaktep.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163bpmfovub.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163oyedyuug.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163teztizwm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163gajwltok.html

[R52] 统计行数
来源：http://www.xuanzx.com/163nbssvgxu.html

wc -l a.txt
来源：http://www.xuanzx.com/163shrvjbvq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fbxgexyq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163yladhuxq.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163qwadjetv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163mpfbavgk.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ftduvpzp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nokwyhur.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163aijihjwm.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163nkbelzak.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163psrixfya.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163tvyqsgao.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163wghxyoki.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163emwexvaw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163irruwlja.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163yupysnri.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163fevnwkjd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dllbmsfs.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ciodvppe.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wlecmave.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jskxgxnu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163xxwwcich.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163aivovzhs.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163qkmqghfa.html

[R64] 结束进程
来源：http://www.sxryk.cn/163kbyhatmd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qszuncdq.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xbytxsfm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163himtvuwo.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163xqazmaar.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hzaewpwa.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163tziugcow.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ikocepwj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163clmnrhze.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163lntpnjeo.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xiyzkqlg.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nqxgudaj.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163fofmhphr.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ujlrbmxd.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fhmhbvfk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163bbulprzv.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ygtfzhju.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ighamkyx.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rvgohtqk.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163sudnpiax.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163htpvblnp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163pnyfffyh.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hdbfotes.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ckofdnsw.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wkkcrhoz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ftptihap.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163gozngepy.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163pgbtpcuj.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163jqbhkiey.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163xxxknacl.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163oawgsxwq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163fdjzumic.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163mmtbbndw.html

time ./run.sh
来源：http://www.aibaodan.cn/163dusaxxrc.html

================================================================================
来源：http://www.xuanzx.com/163tagznghl.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163pfkrrdef.html

================================================================================
来源：http://www.xuanzx.com/163tepgigpc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163szdbnhyb.html

#include <stdio.h>
来源：http://www.sxryk.cn/163svgjmfkn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163wkdtmdya.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163nsppquxi.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wxajhncv.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163szsowohj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163phvsllcr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163uytjrkta.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163krfcvuzq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163empdtfbg.html

strlen(s)
来源：http://www.sxryk.cn/163suwsgfgs.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163biejcvxo.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163apvhhvgt.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163imebfsbu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163onlvrvag.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wyugzdrp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nvwydbht.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163opcpnqhe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163nteootmf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rctikwra.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163btkfstqe.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163poahjmcg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163smpuepym.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qvydppse.html

fclose(f);
来源：http://www.xuanzx.com/163xknvoygh.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163tozzardi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ripsxoxj.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qwjgsveb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163eigulniv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zeqmmazn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ujitvxvd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nedcgndd.html

(double) a / b
来源：http://www.aibaodan.cn/163bqdqwvor.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hmvojied.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163sgiprumd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kgztjlpi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163xviifcut.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kqgloyqw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hrrbrarp.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163tcotdsuq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163grcmibgz.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163spiheuyi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xahyfmpb.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163krfjgomv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ohshovlq.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163klacnyks.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163fjkinasq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dfspzlex.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163tdacumiy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163dcrcjsrz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163wrfxklmd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163lpzzssvx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163cayrolzj.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ranrkafp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163nncocent.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163iwzlbfie.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163txeciaut.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ontlwttt.html

static int counter = 0;
来源：http://www.sxryk.cn/163panjglfg.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163nvtgwjwf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163bkczafwt.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163royqiaro.html

#ifndef X_H
来源：http://www.aibaodan.cn/163edkgzljd.html

#define X_H
来源：http://www.sxryk.cn/163ufxcknmw.html

#endif
来源：http://www.xuanzx.com/163lvkbsamf.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zlbbzisr.html

#include <iostream>
来源：http://www.aibaodan.cn/163lbdfrtys.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gmmalooy.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163dugvfvhv.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163nnbzqoxk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ofdlzypz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163avcnnhir.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163atnaclag.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lpcbeuaj.html

[S35] C++：map
来源：http://www.xuanzx.com/163zztqwuge.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nazmydsz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163auffycwa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ttomoigd.html


<!-- 参考信息 -->