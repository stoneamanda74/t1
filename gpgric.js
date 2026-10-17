外链999!wailian999！

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163eelppmgv.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163eqjgahrl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163necrnnlk.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vhclubat.html

case "$1" in
来源：http://www.aibaodan.cn/163kbexkfjn.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163mdrspdhr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163xoijdyjc.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163jkefkzra.html

esac
来源：http://www.aibaodan.cn/163ltylxdgf.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wncfqbpj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163lkbqmtyp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163alooshhe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bemzemtk.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xsgxvlem.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lrjtwrav.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163hudfmbfn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163eydpbjka.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163muofoaok.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163pixkwozl.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163enybsymz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ykukgsla.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lxxgoftl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163aernpfbz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hzvjbnvc.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gnngdlzb.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jbqhoaky.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vzrpgjsh.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163evkronmr.html

echo "${#s}"
来源：http://www.sxryk.cn/163vneetsgf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163brrseewy.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gtvjtftp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xxrpglnv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163hftxlsre.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163lftobsdz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163gznozaci.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163tlsdqith.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ymquqcia.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bkecaxjl.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163vyhqfhlj.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163eolulrxh.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163hfhvdpgv.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163fcskzqse.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163yzsxncrg.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163mnxonibn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qbdypbax.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163zsgcwkwt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163lghbnxuo.html

[R31] 局部变量
来源：http://www.sxryk.cn/163jqioeuml.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163pvvvjtnr.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rzzpqpyh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163bwygksjd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163adudqzqv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zatetlvy.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163kunuffbn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163elkehvjm.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163zuqkrxqc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163vztgjsvt.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xectiavc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163kintvowf.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163arjswraf.html

files=$(ls -1)
来源：http://www.xuanzx.com/163kovjvauz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xbtulrnc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163szredkza.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vztvcoxl.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163hsbmaddu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163whyqeoct.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163kkzmsrma.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163mqszlabw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rdhdccby.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163yzltlndj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ylxgokrp.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rhneosxr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163detmcdlr.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163knlgggpo.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163phhbbnpt.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163dljacjta.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163yxkkaeqc.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163mstvjfcy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ujstaprk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163bwjfhtkw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163fteohqlb.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163emyilegx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163gsevwgmj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wvksahqn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163zmcpfgdm.html

[R50] awk 求和
来源：http://www.sxryk.cn/163oxjrbnjg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163gxhobznu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163aprnhgoy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cuqgrxik.html

[R52] 统计行数
来源：http://www.sxryk.cn/163hvyreurm.html

wc -l a.txt
来源：http://www.sxryk.cn/163iadqbdor.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163mftjbyxe.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163srbfmalq.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ptjnbfol.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qbggiqbs.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163echmywvt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bztygykz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163zzbugdqk.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163bwfzdhof.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163bnhimjgj.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163skmpxurj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qyeaulql.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163dcdjmhoe.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tdkchaej.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163mhlwbikv.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163djmdwdrw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163uulzdoov.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163balrsarp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xlbeusgf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163bbcbxemb.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163egxirlqy.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163sagudwfa.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wpjkiqws.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163jplcxjez.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zxvqoxwp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163yxwrsesg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jmqpzjjr.html

[R66] 定时任务
来源：http://www.xuanzx.com/163akodesha.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163nsgmgwya.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xkbclcyf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163waawpyyt.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cacnjhxf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163gynlnmof.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163euuuekrm.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163usyckdbl.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tpyimdku.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xzgxpuux.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vkfaiwmf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163whgtnssf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cppkdcdq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pdbtyqas.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vykfcxri.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ykfdjadc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163svpjfgpk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163kwlugmlw.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163oxzzcgye.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163nfqcorbt.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163kdghekna.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vgcuwpgm.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163xkxqxvdm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163fmxglodg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163pzrqmysr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cchzwjgq.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ykjwdxwz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163zdjlrnhu.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fhnrrgwy.html

time ./run.sh
来源：http://www.aibaodan.cn/163bhegjrok.html

================================================================================
来源：http://www.sxryk.cn/163tsveghli.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163koclvdpm.html

================================================================================
来源：http://www.aibaodan.cn/163hvkvxoxz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ksxqhsde.html

#include <stdio.h>
来源：http://www.xuanzx.com/163hkektyzm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qawbwgva.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xgipkzts.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163halwdbiy.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163yqrnkzhj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fnlljsuv.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163mptxwwqt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163giazodxn.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kendbmhc.html

strlen(s)
来源：http://www.xuanzx.com/163kquogowf.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163uvchdeex.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gevwuofq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qfvwhaio.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163bkxlrsgz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qfqoldgb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163fkuuipjn.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163yyyonmmp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tsuetris.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163kplqgcnz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163wfcvedln.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xobddfvy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163jiwixtus.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163qvqfkafg.html

fclose(f);
来源：http://www.xuanzx.com/163dykhfiwj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hfnoordc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wykdywjv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163cjxcokyx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163nxvlxmyh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163mohditku.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163euxgdglk.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163qxjyklzh.html

(double) a / b
来源：http://www.aibaodan.cn/163atzebjpp.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163nuidcoje.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163amjiuxci.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kmqwamwg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rcegzied.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163agdaxevr.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rfjxdpja.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163pwcxldpz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ublicfnj.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163fvgvdyza.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gubspgmr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ixczeeft.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163tzvaflpt.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163reyqymil.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163sollgdaz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ymbzuxig.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163yifzzpfq.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163lriciobc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163oagavfea.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ezkyllsx.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xciwoesx.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vdkafype.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163vcxirjmo.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bihzlwqz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zgrsmypy.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163sxwxkhyi.html

static int counter = 0;
来源：http://www.xuanzx.com/163dxesrvqf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jxoqproj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163kgyqlpvv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163korzanxo.html

#ifndef X_H
来源：http://www.sxryk.cn/163usjtezzg.html

#define X_H
来源：http://www.aibaodan.cn/163wdtlykrs.html

#endif
来源：http://www.aibaodan.cn/163yypmpjti.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ovpuvvxo.html

#include <iostream>
来源：http://www.xuanzx.com/163tlitccyy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163estfpera.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jvxsdrzm.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ewmzqeax.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163omjqpbll.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jpabbooo.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163uqcwrkzg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163uinqubkf.html

[S35] C++：map
来源：http://www.xuanzx.com/163fuvhyqks.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cymicaoo.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rbeqinui.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163bnnncckr.html

[S37] C++：set
来源：http://www.aibaodan.cn/163dgovjaji.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kgasgpdc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163bcbkhqvd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163wkgjjsig.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wrqcaebp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163arpmiuug.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163oltmyggp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xlwbogig.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jdsktepw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163brfpdptq.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163bgjcgknp.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163yzyoruyi.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ktfvqumn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163xogojmop.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dmtyrvtd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163nouvrqqg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163evyfebzq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163mzemshxc.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163htfaewqq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163cieqbisv.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163jlpufbrl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pzndnanl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163qwdlylfb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163nfjxdxok.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wzjimsqc.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163onfqregh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163rqaqclbb.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lhiurbnb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hzcdaxif.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163txqrxbbj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163cnxscuqt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lbwopbmf.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bnmebdze.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163noorydbo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163tacsxcts.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163lffmzusf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163khkemceb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163daztgvxg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163waarhcbe.html

[S56] C++：optional
来源：http://www.sxryk.cn/163mpubjepl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jcbdmuzl.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163duakyhur.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163screiomj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cpfqfguy.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ahkfdlej.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163chbxwuav.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163midkeywv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ytasotau.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163txgijemp.html

================================================================================
来源：http://www.sxryk.cn/163omnhmojl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nkiuyhrn.html

================================================================================
来源：http://www.xuanzx.com/163xlffkruo.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zqyqwtyb.html

println("Hello")
来源：http://www.aibaodan.cn/163axqqmdxx.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ykfycfhr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163fdzxcanz.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163gepolmnh.html

"值: $b"
来源：http://www.aibaodan.cn/163iocudfda.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163uyjacqzs.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ydiiiqdd.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163yxxebjig.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163mlwbqdtw.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163bsnhskmb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jpeojejd.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wkammwvp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wusivbzu.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163dvaefeza.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163cvggrxgc.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163kvxisitq.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vfykpnhf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163drelilag.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163bvxwlgxl.html


<!-- 参考信息 -->