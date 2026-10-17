外链999!wailian999！

readonly PI=3.14
来源：http://www.sxryk.cn/163xvsqgobf.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163etuqljne.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ccxtstlk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wxdofxho.html

name="${1:-default}"
来源：http://www.sxryk.cn/163djgglafy.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163nntmmaie.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163fydaetqh.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163pasrcvxr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xovvvxfq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gwwafoxh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xdvsqwgp.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163srfsgwmp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163rhuqivyp.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163azotafoc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163wbdgowik.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qwshwyiz.html

case "$1" in
来源：http://www.sxryk.cn/163krgahibs.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163wfpgokze.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163txshwbcv.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163koodupim.html

esac
来源：http://www.aibaodan.cn/163hineszmx.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163vvenqnyk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163isueviil.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163jgbbchay.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163sypmqqdm.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163avmwkaaj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163vzhlakui.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163anhquugd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ancykncu.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vxajbntm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jfsfbemx.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163noopbcbh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163pbewgrin.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qjvgchua.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163eelpbids.html

[R19] 数组长度
来源：http://www.sxryk.cn/163nwecmrqf.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163fgzhykii.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163yiivnquw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163jnwhpktb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163nlkhjmmd.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lqpjxxcg.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163csvqtctq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163zeyctfel.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163tjclzsdg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rwvqizdx.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163aosryggu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163pkavophm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163dunxcueq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ajfobuek.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xfmjsbcu.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163kzdpuizc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ecwpuyos.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163benxpqhc.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163chxqtghj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ozkcpwxi.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ktegsgce.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163dwrruiym.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163plenscyu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163smbwmplv.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ojxkekmu.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163sgcmcjtf.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ufkifqpc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163dpzbnsfg.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wcczevui.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163umtldabu.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mecmuyal.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mmswskbm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wjsimpmg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xizifzyc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wddcokpo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163sgkbcono.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163oamyxpae.html

files=$(ls -1)
来源：http://www.sxryk.cn/163itztbwap.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ioxfdyfl.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163hvtbqehw.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163shirwvma.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jzzzctvi.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cxolufdf.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163aumqhtox.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163zysygyzv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163fxdnizor.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163lrmkfvjd.html

wc -l < a.txt
来源：http://www.sxryk.cn/163qiyfsnqd.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163drtsxply.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vragcpli.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vrvbpyah.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163beeximrt.html

[R45] 批量删除
来源：http://www.sxryk.cn/163wkpjbkxu.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ovdqesto.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wqjngbcp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jgxinatv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163cpnpzooj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163fhodqmkm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ntzgclev.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163cegmdbzb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jpowsqra.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163gqpryfmm.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163sxrbowxa.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vuzcoyee.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163wpkavvzi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163tziyqcoy.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rzpwcmzl.html

wc -l a.txt
来源：http://www.xuanzx.com/163nxuuocye.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163eowykxdp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163wwdvuxnd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ulvtguah.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163jucjxuku.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163qmjlktyl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ejobohom.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163zgemuqgu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163vjgndbcg.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163esrpkyuf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mxjoutdu.html

[R58] 下载文件
来源：http://www.xuanzx.com/163jxpyoxqi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ljwjstao.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163jwwtepxq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163snxmtqez.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163prlqpqxq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163lesdfzmn.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ruflzvow.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163tjfzdqjb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gsjmnffe.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ujwfuyxg.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163bslqubwh.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163wrkhtzcn.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ckscadmx.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vmubyuca.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163psninfmx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163oalrpzgp.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gvgauusl.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rnlnyhdn.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163tomgvifo.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163tbtdejrc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163sdvohxnr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163banhtgtz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kpkaklkz.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163fzbirlqb.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163iztuysqk.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163vbriailg.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163dlbmgvyt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163wzdhhlby.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bcncrsrk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163didpgcgh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hgkddvjq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163czfsofrx.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ihmghlod.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163mayjyqbk.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163caminxqq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163pwblyjui.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163epreyomc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xyjlbjhe.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163hbcbfsnp.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163skfjegmw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163kchcejfe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163uxiwbkhc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163vvmerhxs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wqyellhv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vvjulvhc.html

time ./run.sh
来源：http://www.aibaodan.cn/163gkxuwqyw.html

================================================================================
来源：http://www.xuanzx.com/163lvgwtfci.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163feitmmlo.html

================================================================================
来源：http://www.aibaodan.cn/163ktgpdwsg.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rszrlssj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163mwxgozhv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163tnhwtydy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163uesxfafk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163clxmsnme.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163doadymat.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vwsbutzn.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ewunvwrl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163epndtjpl.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163jafezzmu.html

strlen(s)
来源：http://www.aibaodan.cn/163uapqwocu.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vhykokla.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kidvhdci.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163latllyzp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ontioygb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mttgnqrn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nnfrcsdy.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163lnzvmamf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163uuxzzwcv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163naejskie.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163akezuusi.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163hrlijpui.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163kjzgvrya.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ixyenhoy.html

fclose(f);
来源：http://www.xuanzx.com/163yvhzouju.html

[S12] C：写文件
来源：http://www.sxryk.cn/163swborqti.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163jnndxmdj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163bzsyubcq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163wearamuz.html

[S14] C：枚举
来源：http://www.sxryk.cn/163khievhln.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163evkatqtv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fyqmjwuq.html

(double) a / b
来源：http://www.sxryk.cn/163zwwkjube.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ngssyhsm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163sxmuaqcb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163rccskahh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163txdtwtzd.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zxyffupu.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163zvrteqlx.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lugbbrde.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ikyctmpo.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qjzwilzq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pwklltce.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ghvvegqa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lljqlxtb.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ezgrahxg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163cgvbwggi.html

[S23] C：随机数
来源：http://www.sxryk.cn/163apuugmsd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163lhgtxfbk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163imubdjan.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ruexrhcw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163tqjkrcgd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163cdfshudu.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163kenlhjpv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vqwjklfr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163thhfivkg.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xcgepdbg.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yypjaxty.html

static int counter = 0;
来源：http://www.aibaodan.cn/163oetkdgea.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163xqarvfxy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163emdvzsgt.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163qpipyrnf.html

#ifndef X_H
来源：http://www.xuanzx.com/163tfmgjeit.html

#define X_H
来源：http://www.sxryk.cn/163shoedqop.html

#endif
来源：http://www.aibaodan.cn/163yqatrnya.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163rjznevey.html

#include <iostream>
来源：http://www.sxryk.cn/163blbsdvmr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163lgwvqolm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163xjbbufoo.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163akrajxke.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ffzgpalk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163bjzupekx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kvlbuhzp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163dpeipeqn.html

[S35] C++：map
来源：http://www.sxryk.cn/163kbqyvmxc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ghdkhvfu.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kqltiwtb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gachdyod.html

[S37] C++：set
来源：http://www.sxryk.cn/163prlcxvdk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163tqcueogv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ufstdcge.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163yoxuvimg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163fjtsecqv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163tqgmwldg.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163pedqcror.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vtoxkijw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163iqdxyfgq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mwqorydd.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gilhpsqn.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tgxlptws.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ivgqyzhy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163juliwdrl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163rgcpfdlx.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163mgjfuvsb.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163taykheic.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163seceiyvc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ipknvreb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163igeaykgz.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uzckaikm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163dwyqftbx.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163pdihiykv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qdypjlax.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163abayxvgj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qikxzejy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vkvoeqpu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163oqoawqkj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lpczyfrb.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ifvsisqf.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163awcgxfyf.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163fotvzkud.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kpaahtxh.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wigpmdgg.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qtzwkagr.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163qeqppifj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ptxbsxgp.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163agioxyna.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ykvjmbkj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163nnqaqrfv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xgzqybgc.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163cclkiucu.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163mhnxjtvu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163hntvirbj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163taulcges.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163cpceczgv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163vajpzhqa.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163kmmijrbh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xrhtnorr.html

================================================================================
来源：http://www.aibaodan.cn/163edivzkbq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wgneexhe.html

================================================================================
来源：http://www.xuanzx.com/163behsmgov.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163oucnwmnx.html

println("Hello")
来源：http://www.sxryk.cn/163aviwuitj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163fgzckqdh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cybbuozj.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ramauylf.html

"值: $b"
来源：http://www.sxryk.cn/163uuhiedgm.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163oqbqaukr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163hwgxiyvl.html


<!-- 参考信息 -->