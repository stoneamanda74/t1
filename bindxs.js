外链999!wailian999！

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ovrimhyv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163rgegodny.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lyqjkdwt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163yppjruyc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163luexjgyl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163hwridzhi.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163teousqjp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163dyjhbkuu.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163anopbhlh.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vvvkcyza.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163mapodsiy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163xljqrbev.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163glgmlkbk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163psysbvxs.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163mwypwegu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163likyagzq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163nhldxozy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163cwxcepro.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163tvggvphk.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163umdfetqk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163tlqdvdfu.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163pxbpjyzk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tgpzfcrw.html

================================================================================
来源：http://www.aibaodan.cn/163kbfmvriq.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wwcersor.html

================================================================================
来源：http://www.xuanzx.com/163aknbwwzp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163xfadsrvq.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ubmnbjzj.html

set -euo pipefail
来源：http://www.sxryk.cn/163buqabcuh.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ktxwotqk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163atfksbnq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163dvilxfgp.html

readonly PI=3.14
来源：http://www.xuanzx.com/163suphuptr.html

[R04] 位置参数
来源：http://www.sxryk.cn/163vlakfsgy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163hyvwmlaa.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zmkybnlk.html

name="${1:-default}"
来源：http://www.sxryk.cn/163puyvkpwg.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163inralusr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163szfquzhk.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163vskuhtpp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163orjvgacp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163whwohyro.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qklpabvo.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163jevjfiyc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yntacbuy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163taczjppa.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163kmegwvka.html

[R11] case 多分支
来源：http://www.xuanzx.com/163sfnaxerr.html

case "$1" in
来源：http://www.sxryk.cn/163thgetiwm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163aeebkjik.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163emhzyzrw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ofipqwwm.html

esac
来源：http://www.xuanzx.com/163mwfnjpcr.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gzrnnnfs.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ultmvust.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jvrtjxzc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pszfbcxx.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nbuxxodb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gjndnkdg.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163alknznek.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xzfujpei.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163kwuwqyxr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hiuzewny.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163gfxvhhqg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163daueephx.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163cbjlsxpa.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gwjmxfhg.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163hlslnddh.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gawopdzh.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jvvrpbdj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163bjbeyhyh.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163gsbayzth.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fmyqqmnv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163jwqritdj.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rhvfaigr.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163bayukojo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163nsfgniyl.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ndqfavjx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163rikgkasc.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ahkrjisc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gizdhlmi.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163erzxjxwk.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163wpejwyvw.html

[R27] 算术展开
来源：http://www.xuanzx.com/163qaajwndl.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163gqifvkxs.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163omharfnv.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ikowbmea.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163peduhfpq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163jnrtfumr.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fzqivepl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163qscgugwc.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163jbzywbkv.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163zrjsyrea.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163uhwbyuay.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163cffdiiem.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ypghkdrq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163eqpujcjb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163eabroklx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vvdggoxk.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163dmndzjdd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163atlzfejv.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bltlnnpa.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163psogfevx.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163xhqsfqld.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xhqdxfdi.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wtehnpey.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163yawsfpae.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qkfpdbpq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163tbtioytb.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163iupxeohy.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qkchxdhx.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163qftehynt.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163hovfzwep.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ncpbeywm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zbpcqyyx.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163diaudavb.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163arhcmsub.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163nhgliwxs.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163deymxsal.html

[R45] 批量删除
来源：http://www.xuanzx.com/163tawlwzbj.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163elsuzouy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wcdwryeh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xzwuoand.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163lbtfaabc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163lexsxwdn.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163iwlwqtfd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163addmwhel.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163vhwjstgy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163cfwrtwps.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163aeiskcoh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163syncyjvj.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163fcflnrat.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163kwcallow.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rlawvprd.html

wc -l a.txt
来源：http://www.xuanzx.com/163vhdqchxg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163srfycjan.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163upmcsvya.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hhzqksbu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163timxnate.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163wluseeub.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ksbnxulw.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qafjtjzn.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163tbdgzaey.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jgxymxue.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163pcxenqut.html

[R58] 下载文件
来源：http://www.xuanzx.com/163gjsqnohs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163kwklmkvm.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163pkpjfxjp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163boafxskn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163fmkirgoe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163rmmxwgmi.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163pecyvcjr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nhwqmsos.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jxkyglkb.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163whgcfcei.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163zippzoyi.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163upaxlxzd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dxwlyixy.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ribozcxq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163dhjjzyge.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ioafcnpy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dsvelhih.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nlyxodbg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163eadatyug.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163aaszzzqs.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163hmpufizf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fqhxyldl.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pqmamufw.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mhmkyzvu.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163nejsafbg.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qcflteph.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163svrbfxwo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163wzyopaza.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163kvlbatzf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163skkyesve.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nyatzgaa.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cmtuvsiv.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163pfawxpwh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163sswwgbzw.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nepblkgu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zabgfxsm.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163hlmwbtnm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wdhvoxod.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163yknapnop.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163spefmdyh.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163famvzoom.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163pwbjzlhk.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163vcbgobmc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163orykqvok.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163umnffwws.html

time ./run.sh
来源：http://www.xuanzx.com/163fpsmoflx.html

================================================================================
来源：http://www.xuanzx.com/163vcfmttwr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163likdotiw.html

================================================================================
来源：http://www.xuanzx.com/163yrqejdav.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ffrzxisp.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jxivbfsp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163zlwwtdaj.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163kmuxohsi.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163pgmfjxwa.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qhgargcb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163pfbtiady.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cqiljawp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163djiphxnb.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163bwqfsdsn.html

strlen(s)
来源：http://www.sxryk.cn/163abszywnw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163tyhbggul.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163tcjhrkqc.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163kaqfatiw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dcqxzpyn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ebvdmnvk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tvnlgtgd.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163iuuecpbe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163tosxuhni.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hkdvcsqa.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xovstpme.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163plzcumfo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vpadsikj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bzepufqd.html

fclose(f);
来源：http://www.aibaodan.cn/163vhxjigzf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163pwdcurlf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163lnqakljs.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163bmkgjeax.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163sxlmtykx.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nlhjtrdj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163oztvbjvj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163puxkezbb.html

(double) a / b
来源：http://www.sxryk.cn/163nbnrrkfm.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163phlhdvsy.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163nimmsutd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ignfffvv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jrqyifko.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hedqzlgf.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ohmdvxcy.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163trrptalj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pvplcidt.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163qfhpblhi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mrzdatmx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163dxbqjqzw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163nbtwjgyo.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163uvpznktr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zilwvhuj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163clzjdzof.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163uhtcdead.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qapakwqc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bzepuxfs.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163udxwdifm.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163uknmmnot.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163bcvsazye.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ucwbsfnn.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163sixlwqdm.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kmqrgjwr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rebbwfda.html

static int counter = 0;
来源：http://www.xuanzx.com/163rsxhpxrs.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163farbrskg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163rihcdddu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163aejbgcsr.html

#ifndef X_H
来源：http://www.sxryk.cn/163shbogoqw.html

#define X_H
来源：http://www.xuanzx.com/163qxyrfwbp.html

#endif
来源：http://www.aibaodan.cn/163arnzzxoo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jnzfxtji.html

#include <iostream>
来源：http://www.aibaodan.cn/163lgeqnfei.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ynjsueyg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163coxbqodb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163dgcbcnrt.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mbndjswa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163lcugjrkw.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163tnzyzuje.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163vwapolqb.html

[S35] C++：map
来源：http://www.sxryk.cn/163wjwfrzos.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ivusnklk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mhwqmicm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dglmiulg.html

[S37] C++：set
来源：http://www.sxryk.cn/163zqoxucnz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163bndwtrul.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163kghtfsbd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163iegramqh.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xwjxuflj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163bymncusx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ppmduiee.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ojcvnbeo.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163hbaqlvvi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163agkubcdh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163awhnravm.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gasksepy.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163nnmcjquj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163kjlvftzd.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bptttbon.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163dppikvjo.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ivrgoxns.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163njvztilp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mvdagsmf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163cfzsuooa.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163skyglbfj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163zsaiuekl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163bzleklpc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163gvdvivnd.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163jmpzbsxd.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163fuzpgkzn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163gejgodad.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163dmzcixet.html


<!-- 参考信息 -->