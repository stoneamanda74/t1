外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163lubowfwb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xjjsmjfn.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ldaxyoyd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163oxpbdfrs.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ysalajai.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ieazpgef.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163kivndvch.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163wpiiqcha.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ckeavikj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163eusiyrea.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qaexmboc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qyjemivv.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ownlaacw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163rlbbjzrl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163aflhdnvi.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163difhxebn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163hbtqonet.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163pfpwylar.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ugoxqrtx.html

================================================================================
来源：http://www.aibaodan.cn/163pqtcsuch.html

R. Bash 专题
来源：http://www.aibaodan.cn/163lfvjetah.html

================================================================================
来源：http://www.sxryk.cn/163nprftsow.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163quupidtq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163txxcuaym.html

set -euo pipefail
来源：http://www.sxryk.cn/163sgjoqdvt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163iaasnaed.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163tjjopkkg.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163sclhmjmw.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dmjjkvbt.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163aelenaoj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mxytsvkd.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wsejjipf.html

name="${1:-default}"
来源：http://www.sxryk.cn/163iopnbxpv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163xxehvgsh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ekdeglro.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zpmbpwlx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163bupyhtzf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163nhgpfrlb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163amfzvoqe.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163jewyhcbt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gyrjevuj.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jdljtbad.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163flfoqlom.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ifodfwhm.html

case "$1" in
来源：http://www.sxryk.cn/163kmwpjqlq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mpvizndy.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163psyhowpl.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163etdyvcte.html

esac
来源：http://www.sxryk.cn/163mhwdacaq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ojshmzow.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pbxxcvme.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163buoflkim.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ydvtgclp.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ciwbpdhe.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gknupdzk.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163rzczqdum.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163juzvjhyj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163jezyifac.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xvloomvj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163feniqzcw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lyrqywfp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yatuqvrs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163eojcttlz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163lkftmwmp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163pzbolcpl.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163iqpffdmk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ngpmzpyu.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163pyenrxhb.html

echo "${#s}"
来源：http://www.xuanzx.com/163siklzgsx.html

[R22] 截取子串
来源：http://www.xuanzx.com/163uxohazzu.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163fupxfusp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163bdolchid.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163egkzzahi.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163tmvrjnzf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163tvstkfqb.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vtchntoz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ilskmygw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163mjbcnthn.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163bdmzjcho.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163vuaosuey.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tpqmrarn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mujagulu.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rordqhsm.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kldlzfdu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163yvaplgan.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ucvampgf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jcmcxfst.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fuptlntt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rupmgtak.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tmedkvbt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163dkfudddg.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xbqvnhvl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163rtvpgyfb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163tzhkotii.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wfbkvzek.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163imydxqez.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lqggcpnn.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vtvphets.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163kyqyqonq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163uwstcprw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fxyfiqpf.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163htvowopc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pqbpklzt.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163veqpritz.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ucaghlvy.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163pltzmcuh.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163tntzcpej.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163jajkcbbp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fuekndbz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163yevvwsnq.html

wc -l < a.txt
来源：http://www.xuanzx.com/163keoqgdyy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163jkhgwhts.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163lteafhtb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163riyulcpi.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ijefapis.html

[R45] 批量删除
来源：http://www.sxryk.cn/163htaqkoag.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163nrmtqcze.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163bgqbxxyl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kuiajtig.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163sovjeemc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163gtthnmtd.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163qvpbifnv.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163qfjxzrdc.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163nwkvvxmj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163iuypjekv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163thmsaaod.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163aziaghsu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163tpegyohp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163dccrraqy.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163smmcdqjh.html

wc -l a.txt
来源：http://www.xuanzx.com/163yztfxpuc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ukjjoera.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ubrkdljf.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ytdhkwos.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163draamzct.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163sjfmovsx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vmpfksay.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163qylkhgjo.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ryphfkkx.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wwcjunjk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wlowaxmy.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ohqqfwjj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163lwaljjyy.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163kpblszql.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163xoghyyfw.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163epfxhcxj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dbkfdced.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163gypcyndo.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163amjggmhh.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163kdtvamya.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mvyygvlr.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163moktequv.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kgfrpokm.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163dzronajn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163huecsbke.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163tjaxzpbl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ubeyidlv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163nfsqgdyd.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ivxsltwe.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163nuhwnarg.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163exdrtvul.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163xfjisbow.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zqvconjt.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163jbrfdewv.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163svnhfhut.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ovxhzert.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jminlwuv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163norhukxb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vcdbhkbh.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163jggzuthb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163yysmznfa.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163wcbzeueq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163sxuybaob.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163dbjppgui.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163caqjygms.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163eklzqigb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hegfbuqi.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163gupesmos.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ywttgvti.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163vszrybkd.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ovjraifa.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163iuqkiwst.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163eiegcsub.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qbvxnmml.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163fzowehnh.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163etvnvkaj.html

time ./run.sh
来源：http://www.sxryk.cn/163hjmfrfia.html

================================================================================
来源：http://www.xuanzx.com/163qztgeogg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ezczhjgf.html

================================================================================
来源：http://www.aibaodan.cn/163ctsgexcx.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163aouvuwlt.html

#include <stdio.h>
来源：http://www.xuanzx.com/163fnchsbrh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lzpuyeti.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163kksrolho.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jmxoehyj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163amvfftcp.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163sszgiwjs.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163azyjodxw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jguinlyk.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163vqzhwhjg.html

strlen(s)
来源：http://www.sxryk.cn/163zmpqsxjr.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163giojvcfz.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xnjzueyj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163yxszyvzi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ofkquyfq.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163zfarzidm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rxuwhrlk.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163uqmnmnvr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163djhgvpkz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163irarbwsw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163amdizbss.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163cemhpkrl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163fijfowqu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163itunsxqs.html

fclose(f);
来源：http://www.xuanzx.com/163rjjbvpmo.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ehdrmsfh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163rjgbjvkf.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zusfklvr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163zpjsswax.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qpegnbms.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163lcmhhlxp.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nxpfpaym.html

(double) a / b
来源：http://www.sxryk.cn/163gqwpqqjq.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nefsdpxa.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163iezolaga.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163jcwnamhn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163phrkayox.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163iecqytln.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fkijlpkz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163cumbpzzi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163eornerkp.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zqmvtrux.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tetlllpx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163wprerpky.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163vownemec.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163lejwdzau.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zefnfjva.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163sqjivdoj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wxxwibey.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xymmtplm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lvuwjiiz.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163etxrspsx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163dzbtbntr.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cplqjqms.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163yxvjzgzy.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163eushlokn.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163brpzbpgd.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tkhoicli.html

static int counter = 0;
来源：http://www.aibaodan.cn/163qbegadpj.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163vymdbvgn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163fdstrnmc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163aupnonvj.html

#ifndef X_H
来源：http://www.sxryk.cn/163ysqkmagi.html

#define X_H
来源：http://www.aibaodan.cn/163vgxhbfck.html

#endif
来源：http://www.sxryk.cn/163jsrbddvo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xhbdlkym.html

#include <iostream>
来源：http://www.aibaodan.cn/163pqeyxrib.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163hqpuwhfx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qhktdmtx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pnqgrdqp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163prvuwvut.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jdbemion.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163tmgzqdai.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yiflgyvh.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mncsjost.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gxpgtslz.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kdbayjtf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163osyxxuco.html

[S37] C++：set
来源：http://www.xuanzx.com/163oxqaeavx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163kkljwpol.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163heuvjvyl.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qhiuabqq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xihkkcev.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163coitdgof.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xbfhmgrs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wrfwpfvj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163dazxywbq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163yrijkaqi.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163yaeelljk.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163waljhmuh.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vefmvwiy.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163opfyefeg.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qnawtfhj.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tkkemhtq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163upgkhgvn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ngcuyyni.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hzamqflp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163cbcdjkpd.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ujohhrja.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vpbkxeot.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hwnabggb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163fqzxyozm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ojigmegd.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ydnracdh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gmmaypng.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163yuoegjfc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163fetdtuob.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fducdiik.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163owvgmqfd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lwerdybh.html


<!-- 参考信息 -->