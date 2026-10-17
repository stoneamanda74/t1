外链999!wailian999！

name="${1:-default}"
来源：http://www.aibaodan.cn/163oqyipngf.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ndqbourj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163gqunmjej.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163xsafnagp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163zgrxddvl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163afyzxgxh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163fooeurhd.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163omtxpilk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163frsfpaqc.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163qlmdrvpw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dsmuxdyl.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163docsvrhx.html

case "$1" in
来源：http://www.xuanzx.com/163umlbfxkr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163paktbsie.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163kzjzvrsy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163rqntrgrb.html

esac
来源：http://www.xuanzx.com/163rumxwgwo.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wfphtkca.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tfbxgccr.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kddkygbx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qzvphlpg.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mhkvezuk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163nzmpvzwd.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163feuvwtgv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163aoywcfat.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rysgutjk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ysidhghc.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163fnobwleh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163wmimpesq.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163lfmhwayw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163yzihajpo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163pigmvlam.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163levjmawb.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163cxgsuuex.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163wauthbtl.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ogbotxxz.html

echo "${#s}"
来源：http://www.xuanzx.com/163blmfwmea.html

[R22] 截取子串
来源：http://www.sxryk.cn/163mpcuvwmv.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163wpvjvfyo.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wlezehie.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163wgzmovpc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163obcxopur.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163nhdgzsnh.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163bkrqhcon.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163vcfwlnel.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gnxpzczj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ngyfaijk.html

[R27] 算术展开
来源：http://www.xuanzx.com/163eecvjvlz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ddkslwiw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vdlllwmw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163oepnhjyn.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163oulozufe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163aeuokvxy.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qitybogz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ugmjxbrh.html

[R31] 局部变量
来源：http://www.sxryk.cn/163mttvtnld.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jqwzswls.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163mpzhksxt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163hoewuerl.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163atqccjxj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zubwjupq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mfyenfwl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ztnpafbl.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ozsisxqr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ppugyngd.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163krmyjgwp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lxsxhoyr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163apzabwom.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ubmnpsph.html

[R38] 管道串联
来源：http://www.sxryk.cn/163qiyjldeb.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163bvbjraaa.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163izsamsth.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163azoftabm.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163azupwbeg.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163opwvgmnm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tiegucjv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163lobibezc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163cfrmeswi.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wuvtrxli.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mxdduaay.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163vpownvvp.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163luauhnsx.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163hzjqcvfa.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ifemdwam.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163cgzmudxm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163suramkdg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wdhrijxb.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163gbwcidrt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163nwxswoxp.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163inkrlxsr.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163caswmgsi.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163tgtlrskx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163uvgerhjt.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163onueydzu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163bfdwnrep.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163hoemmpbv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jgbbcxya.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xbopnphz.html

wc -l a.txt
来源：http://www.xuanzx.com/163osxirxoi.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nulvqzfo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163yhgrihsr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ftiqwuuf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163uuwycbdd.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163cwqcddvd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163binijjcr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163siynevkr.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163eidnmwjc.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jxdonudd.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163azinlavz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163papqehdo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163osqwwdjh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fvflnnoz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163judcrbuz.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163asyqnuyv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163aenhohxz.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163kuiccoam.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163epotrkkr.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jefvrvzd.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163erfqdrpl.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163srswxjqw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163jczbqdvd.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163kneokfbu.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163noqumdyz.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163jnnpapud.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ycgpanre.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gdkijmfv.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163yrqlosfh.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bnayealp.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163txzlanrr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163kdwdfhyf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fpmehjms.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163jjecsmoi.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163tkmvcwsj.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ubigvdlz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163fpawplaj.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163yxakxrve.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163uxqghuka.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163wvgdhfmd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163biyytlvy.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163phqlsoye.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163yiyagene.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163fedjuwyf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vgpqqcot.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vvxyzotg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xrqqyzdh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163pjqsheqo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qcbgcalb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163expluykk.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163nqpbdrbw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163outpuwwz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163hdtqmejj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vdvpfglx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pwdxxdew.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163gcahmyus.html

time ./run.sh
来源：http://www.sxryk.cn/163thsuwwmv.html

================================================================================
来源：http://www.xuanzx.com/163goyicugt.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163hotafpip.html

================================================================================
来源：http://www.sxryk.cn/163pycnpmis.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tnwzhdrh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163vnufvjrh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163hbdkjjhb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163vaiczmhy.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163elrlrrkj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qcjyaksw.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hlevkwvr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gofzrtxy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163iaqmikpq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wmjqwlbh.html

strlen(s)
来源：http://www.xuanzx.com/163rsnpsftk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163odvebqwv.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163xfnjzbnr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ntdgrxce.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163alsuzrzk.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163cwhhggdl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163cmumocog.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163hecygizs.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163gcvatlac.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163dklrlcmo.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163exnlbctp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163czuscilw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bqqpaixe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163rzfmtzvn.html

fclose(f);
来源：http://www.aibaodan.cn/163rbqeizgq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163eonjxhtq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163xhyjuvfo.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163bmidmive.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163cxdzqqga.html

[S14] C：枚举
来源：http://www.sxryk.cn/163hkqskcdm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163yudwfxgm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zfjxeqlz.html

(double) a / b
来源：http://www.xuanzx.com/163xrtpbdfv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163uygkhdnn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163rtueslxl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fhrgyfuh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163idpbrjmm.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163irukuhhu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zdxnxncx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mhmzpiir.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ghtjrofh.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163usvkcpxx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163abdtmwge.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vmjhzaqj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ltohhhzo.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163dpmqjyca.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163rkwvpgpk.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163eohfwsuq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163cqmxpals.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163skophvvc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163rdqqnqqr.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163zudvyioi.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163odurnwxc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163vnlhlwfh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xqipacll.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ojreigno.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163futqpiur.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cdccojkx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163husttquq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163msccwihg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163nfbxvwqs.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163gzerpffx.html

#ifndef X_H
来源：http://www.xuanzx.com/163neyrqter.html

#define X_H
来源：http://www.sxryk.cn/163iuejzcjd.html

#endif
来源：http://www.sxryk.cn/163xbyznxsk.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163vyxovwlu.html

#include <iostream>
来源：http://www.aibaodan.cn/163ilyqptkw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jlwqcgku.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163izbjdsoi.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163eejjgtio.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rbtxsflk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163pbczfzpr.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ixiogzyl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163jmchuutb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163forzxkax.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163htqddbrn.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xqhgaitn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cbkufxnh.html

[S37] C++：set
来源：http://www.xuanzx.com/163pvittcjp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ivunuinc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163icmcssdw.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jhvjkmsf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163hgaccmqm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163lsbfeawl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163sffwiopl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163tcinvgtz.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163pgozqzrf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bidutnas.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163reftfyai.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163qvnscgdu.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zjttjqvp.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xofhifgo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163unvsubmh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163uubrkcrx.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163stsscgxc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163dgjxmfzr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ryseuwtw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163phwrykvj.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163cfcnftrp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wiojzpro.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163xsqrfgvm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ctldibio.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163oincfgud.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163otfugmpk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jbmxeclq.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163sygwlvqn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163rtmbmraf.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163rqyfuwrf.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vfmctouw.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163wweuksqm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163rtjrwjhn.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jbxvbrwv.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163obqmznry.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163pdjypaky.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ttlnoqjb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163bgmqkhgw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163xtdwuavo.html

[S56] C++：optional
来源：http://www.sxryk.cn/163nqpwcfev.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ecovqzby.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163uhhwmtdl.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163gmmsedtk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163srojnrsw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xvlaqdmy.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163widrxetu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163inmkllfk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163nfanipel.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xgauswbb.html

================================================================================
来源：http://www.xuanzx.com/163phiihefl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ocxkjjrp.html

================================================================================
来源：http://www.xuanzx.com/163szkqqigp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lfeoaitc.html

println("Hello")
来源：http://www.aibaodan.cn/163qvdbcppz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163xnlkbnbq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cfhgxtzl.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163zhcwaugc.html

"值: $b"
来源：http://www.xuanzx.com/163twceuftt.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lsawresz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163zogdoklv.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lpfrqxme.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ngrjugio.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163yxggngmh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163edufrpfm.html


<!-- 参考信息 -->