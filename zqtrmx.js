外链999!wailian999！

[Q76] 按天统计
来源：http://www.aibaodan.cn/163inulgdee.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163pwxiuzwe.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163hgwhqcuc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ybnqkyif.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163qpevmdff.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163wzngqgot.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vbijfcau.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xpnuogiu.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xibtwehr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163rrtazzez.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163pdfpdgjw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163erbhlmvv.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163quhivovg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mrqeguww.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vowkkjxb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163jlpdgjgt.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vtgvomlw.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163mmjsrlry.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ctffbewh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163bqoabxrc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163pqqqpezv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rrvjmgwi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jpvzstmc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163guzxxmuw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163bkxjbyef.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163fviwltcr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163drlinjza.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163obosttxo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163svndexus.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163qjxujowa.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vkgblcnn.html

================================================================================
来源：http://www.aibaodan.cn/163xgcwmevq.html

R. Bash 专题
来源：http://www.xuanzx.com/163bvfypqmh.html

================================================================================
来源：http://www.aibaodan.cn/163iyzwdhqs.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163nfiksubr.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163eknnnlwn.html

set -euo pipefail
来源：http://www.sxryk.cn/163cekwlmow.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163iwgluvte.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163zfmkhxjz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163aljduhoa.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zjkdtwin.html

[R04] 位置参数
来源：http://www.xuanzx.com/163xeghwzhv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163zcztnwix.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163tghcsujg.html

name="${1:-default}"
来源：http://www.xuanzx.com/163vjyhbiaj.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vthemliq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163zdwumoai.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hhkjogdu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wonqmtzf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163qsdbjssu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163uurqomjk.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163iexvaoxs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yfjzkptd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163zapcvbgq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163psqrhyhe.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163pfbiqkln.html

case "$1" in
来源：http://www.sxryk.cn/163vklquzhs.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163lydvqwpd.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163grigttzk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163nwnwzvjc.html

esac
来源：http://www.xuanzx.com/163esionmqn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163njjmnbfv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bhggmrjj.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163bbxgtbut.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163jykqiyqt.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163yvdacbaa.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163tlejnxdq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tswwmrhu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163fvkmzbkx.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163wwrlqgfe.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163silvaafg.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163iakydbzx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163dnnbqqzx.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163fbliygpd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mjadcxuu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163mwyphcqx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163kuqkivzz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163glooeryc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163fdqnwbuc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ssrjbtll.html

echo "${#s}"
来源：http://www.sxryk.cn/163bzzukvso.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wuypsmvm.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163edzrynsd.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163xnquamms.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163porsmxmj.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163tdkjpxqt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163bseiqjxn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vemgpdlc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163habeuxvi.html

[R26] 命令替换
来源：http://www.sxryk.cn/163uzoclewu.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163etxebznu.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hdipolls.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163fafiwmwz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mhmczklp.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163aifpiuav.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jtdxfoce.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163pjlreqkl.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163oanuilzt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163dckorgbl.html

[R31] 局部变量
来源：http://www.xuanzx.com/163kgzmgcrf.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163nbgkzfhr.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163vyfosxkv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163bgvhdepi.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163zowvaudo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163oqvjnnjt.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163moyxlcen.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rhgxekqa.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163krbhxrtb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jvmgblap.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163xtmgmilh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163yqgbhlpn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163dasfbzad.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163amhjjeqe.html

[R38] 管道串联
来源：http://www.xuanzx.com/163lkwbqvqa.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163spkcekfu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163bildzviy.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163omfbzthw.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163uycvtskj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gsjqltps.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163swthmulo.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163zpozpych.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163lldbwixo.html

wc -l < a.txt
来源：http://www.sxryk.cn/163bjekgikj.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163xqfnsyfj.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163lfznnguk.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163gekzlczy.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163hydgrdvc.html

[R45] 批量删除
来源：http://www.sxryk.cn/163pjnfkrnp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ystxouvx.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vmjavsog.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163nclvkkby.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163bcdmuhga.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wylynmiz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jvsricxl.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163prmjqedl.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163nrvxbnhm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ukxqnqkl.html

[R50] awk 求和
来源：http://www.sxryk.cn/163yvkltsvr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zxgmnqzf.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fdkemgfq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163aqylqent.html

[R52] 统计行数
来源：http://www.xuanzx.com/163mhltmyqj.html

wc -l a.txt
来源：http://www.sxryk.cn/163gfmtfapb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xrsepiwn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163htnjtjck.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xezktctx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163dfnvhurx.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163xospmdog.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163iwlebtal.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163xnvcycir.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163bsxxjrag.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163lqntqjyj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163abqfwdst.html

[R58] 下载文件
来源：http://www.sxryk.cn/163twkdkehr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163fngyukew.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vctlccud.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163dsjzyoss.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163hszjaypg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163vfskhkws.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ibbgscvv.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163nukxnmik.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wywkxijm.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ugswkqpd.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ltisxudv.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163uirropzk.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cvyqlsxb.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163agebyjgq.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jnhvynoq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163oglkmnvx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163teadtttu.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zrndswfd.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163hggqmgch.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163xgqdewda.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163xsgqizje.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163akikeqlc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163olzhwvqh.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163qpqzisqm.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163sfsfxkhd.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kfnadycr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163jgjhgvhe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jmppzsht.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163hjxydvqt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163oaqsktua.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163cljqxipz.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163rjtupsjj.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ysfkwuzw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wxnpwqfr.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rngnnxwx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qpmqdioa.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163pgpvchvu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kionpkyu.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163seoaahpl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163zyfyjgzm.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vyljlswt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163izifcxms.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163krtlhfem.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163hadcylkt.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163jtwqjuvz.html

time ./run.sh
来源：http://www.aibaodan.cn/163djgtwzbs.html

================================================================================
来源：http://www.xuanzx.com/163rcntgcim.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163qogkgrqm.html

================================================================================
来源：http://www.aibaodan.cn/163pbyubxao.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163obfkctzg.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xkvgbnxm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163kqyvxngq.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163zsvnmkyy.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dnqsyrvd.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xnbwmjjv.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ivnhdxbs.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ahqxcomn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163raaxkfth.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163huchktwd.html

strlen(s)
来源：http://www.xuanzx.com/163gxiiuabf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163kuiqaeos.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163sjgndwwh.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qydwdnxp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163xhghwibn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qlhhffgp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fbljqozs.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163pjdrqqyf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wfczldgp.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163yavmxlsx.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163qxiolsvb.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163glmgcsyq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kubrxbbq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ddoydmuc.html

fclose(f);
来源：http://www.xuanzx.com/163zfoefqxq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163wbzhrpqz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163aupehmxm.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163jnnmncrd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163iprxjnik.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zlmfbnea.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163pjwxhama.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163mnagvvdh.html

(double) a / b
来源：http://www.xuanzx.com/163gpduyqst.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163xzdebpfl.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vcoizipq.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163uzjxiell.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163szxryiej.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tpdcskhc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wcsbhffs.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163urpwwmlq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cvsetmwt.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163afdejgzy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ehprqkpz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163tvqarqce.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mtndwxeh.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ksovlliy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163wkhvyfcm.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yvjzlqir.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ctgeqqfv.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163jiseqvaq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163izvsobqc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ygkkeysj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163lnawkahi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163pfbfjdvo.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163tvabukit.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kglpfegd.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163aozrugtt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163aeiejyxv.html

static int counter = 0;
来源：http://www.xuanzx.com/163nzznsjrf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163aomdlsvx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163kvjjeopb.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mpweszkf.html

#ifndef X_H
来源：http://www.sxryk.cn/163cfbdmdat.html

#define X_H
来源：http://www.sxryk.cn/163iklzgaww.html

#endif
来源：http://www.aibaodan.cn/163tumgnngk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163jihyrdpt.html

#include <iostream>
来源：http://www.sxryk.cn/163fturstbk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163behfbads.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lfybqzit.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163promhffk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bfbxnmik.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163qkkekwoq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163whilietp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163knminyax.html

[S35] C++：map
来源：http://www.sxryk.cn/163vadznqun.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vnpxhwcr.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163mblnvtcy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qxbowdys.html

[S37] C++：set
来源：http://www.xuanzx.com/163gjkmnijc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163rhgygmeg.html

[S38] C++：排序
来源：http://www.xuanzx.com/163jcrglqzz.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163kknejlzd.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163sfwpodjw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163nayokzli.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163eugcokyv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xzzyzmhv.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lxuprefm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163gqhzshki.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qroipwqs.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pblxuxku.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163lnkqlkjn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qpnasnze.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fkdksrvf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163trqsjhpr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qgxsbrwn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fbydonnv.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163bpxfkdvd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163lvqorcnl.html


<!-- 参考信息 -->