外链999!wailian999！

R. Bash 专题
来源：http://www.aibaodan.cn/163sundmwbo.html

================================================================================
来源：http://www.aibaodan.cn/163ybimmthc.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163oeudtolv.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163sbaiqyqq.html

set -euo pipefail
来源：http://www.xuanzx.com/163lmvafycc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163sydphlib.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163iofsjmhk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163wxfidtod.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ziyfjdpe.html

[R04] 位置参数
来源：http://www.xuanzx.com/163lxdypjby.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163pptizitu.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163tezwtdjp.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fnblqrbq.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jrocuztk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vzweryld.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163zdoyqtrk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fjnlzyml.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ylsbbabx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163thfmsbnk.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163brcgfivv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163edvbgwci.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163shxdgyve.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163tfqlejai.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ndcsttic.html

case "$1" in
来源：http://www.xuanzx.com/163qhfjvxtr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dmkyxomm.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163cwpyoqlf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gooitilx.html

esac
来源：http://www.sxryk.cn/163ivqgvckk.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gzuilaxr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ftqlcdch.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163lpsqclot.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zlzspriy.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163pssedoyo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163xcapnsxc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tthqxiyk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wrdpxhhf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vnbbienf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163keybpcaf.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163wurzpwfb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163mjicjoqq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zqygggco.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163skghccvf.html

[R19] 数组长度
来源：http://www.xuanzx.com/163lmehqfbs.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kabgbbwt.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ahqisvxd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163eztyfpsp.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hlcbbzaf.html

echo "${#s}"
来源：http://www.xuanzx.com/163wupnetdp.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fytcviqh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jvadhtii.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163hqwqcztn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163znxjrwzo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163fqamxkce.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wpouglta.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163yqjqiejw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qxbvzath.html

[R26] 命令替换
来源：http://www.xuanzx.com/163nggajeno.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wjpbqrkl.html

[R27] 算术展开
来源：http://www.sxryk.cn/163weapcqsb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zvkcfpba.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163rzcudcmq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qopeqypz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qsnnmytg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163dgcyjouv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163htpisomh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zqvzecpu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163knlhribr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163bwiyrmfl.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163wigqqoyt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163aqvuahzm.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ztaxqucm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163sbeftgyz.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163kjklnvfy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yenzkteu.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163lehgvqyq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bxkfowbp.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163iinsgejv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163szndzcct.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jsfhueil.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zxbndlkb.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ugamifyc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163iwqlmaxl.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lcowllnn.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163kfwvcghs.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163mlmzqjez.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ypzpcqco.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163jyxeqquo.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163rdtliejt.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163izohrndd.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163tjkwegfj.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jizamnwb.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163iszibqud.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163dhzmffls.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163tyfqnbmn.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163vwgfuysn.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163cjxdorsh.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pjiibkdi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mavrqtnl.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163oyowntlv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kbloahyg.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163eoajdphr.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kuwnnyoi.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163tuafczwe.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163elpeycfj.html

[R50] awk 求和
来源：http://www.xuanzx.com/163amhxzrxo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163djwavgcu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wxfgmmar.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wkjcdofn.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xjmpuvgl.html

wc -l a.txt
来源：http://www.xuanzx.com/163dnjnpqpb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jurlyncx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cynrnbug.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163nlxmwkiy.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hsixlhrj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163wmrnyxdh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cqkalnwm.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qegjgddh.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tqegnjxv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wybqtgvu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163oegcllxl.html

[R58] 下载文件
来源：http://www.sxryk.cn/163fpsmgvjf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mnmrmkam.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163byhgaxsf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163aejzheyv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163tgmzjikc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163rdjbayee.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163crpvgakc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jsykuxyr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163orlnzocf.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163edwxpwcd.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163eoeepjsz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163avbmoeat.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ntlblcjj.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163kwfqioyn.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wltlvghy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163xxhdyrom.html

[R66] 定时任务
来源：http://www.sxryk.cn/163gshkhogv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163agjnbmmp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163chhikdpp.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163yucitnbw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163pkaagyeq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163yyfygiza.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163cnswiaff.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163tgrvvkcn.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163whjypslr.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xwgbhgxh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163oaksjljk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163fyamfuzh.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wqunsgsw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163hgolhyat.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zrvuzhso.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ucskxdha.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163fjcnbinq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163keaxxmuk.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163crrugftf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ougytdkw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ddqbdjgc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163aadxezif.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163acqtowcm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gsgttleb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163mqyyosks.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163yraxfmwb.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163sobytnjq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tiessija.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163oeyesdln.html

time ./run.sh
来源：http://www.xuanzx.com/163vcnfsjpj.html

================================================================================
来源：http://www.sxryk.cn/163xhsivuwr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xfgknlnf.html

================================================================================
来源：http://www.aibaodan.cn/163kozpxrge.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163dslrnstc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tgdojmew.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lnlglgvu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163pewugagk.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ufuwtvuy.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ywdyeqav.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ivclukzn.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163mbtnfadh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vusalblb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jhghgdcf.html

strlen(s)
来源：http://www.xuanzx.com/163uitevosp.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163olptcmtu.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163xwxzjzxw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163urikokyy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163pzhsdfcv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163nfbkqnhj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jgjwjhjq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163extrcrnz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163cktivqqx.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163trcbdqfb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tmgscvjc.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163fqljjshr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ttmemglk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163imcolayo.html

fclose(f);
来源：http://www.xuanzx.com/163wwipolrg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163cgaautnj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dbnsebdr.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163pnaveeqf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163bqghmfrl.html

[S14] C：枚举
来源：http://www.sxryk.cn/163hydbgyyk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163muhszsea.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163uyevfumj.html

(double) a / b
来源：http://www.xuanzx.com/163ooudjshk.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163axnolfzq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163luiihlbl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163baalkzts.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cbfeomlb.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ddqsqrus.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163odsekerq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163iztronwl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163anozgtmv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163njggbqqa.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qswpcpvv.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hrpthcgj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ffwzykdx.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163egwatsqt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wpqjdlze.html

[S23] C：随机数
来源：http://www.xuanzx.com/163xwlkrigy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vlnbetfv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ejtldkgz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mivitxfa.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163gflhecov.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163lfqeubjx.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163zauggxwx.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163vmniddmd.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bqeddhmi.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163mvsdpmkt.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163bwdqivge.html

static int counter = 0;
来源：http://www.xuanzx.com/163zgqdangw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163geuczcub.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163fsqwuolk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163usscrqtp.html

#ifndef X_H
来源：http://www.sxryk.cn/163wsbdusjd.html

#define X_H
来源：http://www.xuanzx.com/163yygxvhzt.html

#endif
来源：http://www.sxryk.cn/163hhchnssb.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163byrrtcdm.html

#include <iostream>
来源：http://www.xuanzx.com/163gzewzzud.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163shpfepwh.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163tfegkdpc.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cplosmxc.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wzbwlkst.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163bihsidwl.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hrrjoupw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163btknvcnv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mciywbli.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163yiioupzv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163sfihhzve.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wmlursqp.html

[S37] C++：set
来源：http://www.xuanzx.com/163dyzrsygd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163fpxcpvtb.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jfejqpua.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163zfyzhuzc.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163bxjmbyfn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wjbpffqt.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163oehxaicq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ukzmghxt.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163iwojkeqz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dwpnmven.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163tyfrmnxb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wyiupzqw.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163aqylfitw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163isqvlrns.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qeucirry.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163suqlqvcj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163nbsilkbj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zzhjwhhh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zbtgwnkz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163tsiljnmj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163pxjjlgup.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fwmhgtef.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163kaierbfi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qkyotbhh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xgpvvdoj.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163zdccmcaj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163aycebuco.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kzrzetqy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163brmzrodx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163imfskxmv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pkuvoieh.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163odjmxolr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163pgenwkkh.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163curmqjpz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jhzeoago.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163scqwbcmh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pqmmfdyi.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jjmfclgk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163grdojdpu.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wpfaiuaj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163muhniala.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ebjxnsal.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163qircondj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163adgpvimv.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163uhuzblrz.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jptbdqfy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163iuaqaxom.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dydqpllo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163dtychvop.html

================================================================================
来源：http://www.sxryk.cn/163bkjmchfa.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vmazahmy.html

================================================================================
来源：http://www.xuanzx.com/163txbwjonz.html


<!-- 参考信息 -->