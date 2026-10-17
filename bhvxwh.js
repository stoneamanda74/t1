外链999!wailian999！

esac
来源：http://www.xuanzx.com/163wuvhfnai.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ouqgeddj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ddfakzaf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ctpkzrmg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163cekjvohr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163fcbzptwr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qmdwxxjt.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163dmheikon.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vjpsxuef.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163yufdverx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163oggkufdu.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163bjdvbbux.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163kmzcfnub.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163hlksauns.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163jhetdpgf.html

[R19] 数组长度
来源：http://www.xuanzx.com/163mmjclgmj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163jfqedqjh.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bhswxdgj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qswpvbjt.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163lunlthkr.html

echo "${#s}"
来源：http://www.sxryk.cn/163lnulhurf.html

[R22] 截取子串
来源：http://www.sxryk.cn/163aexislqj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163erprgsjq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163hzzhablu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rtnulora.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ntbrdxxs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ikquicum.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xtbyzgwc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163najyqgnd.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ydkrcjsf.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163tuqtkcxk.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163mfrvgfyr.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163yzcgcbkt.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163aargjhmg.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vrzmulyt.html

[R29] 定义函数
来源：http://www.xuanzx.com/163udcthigg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163kjioirgr.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163idrtchyg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zoxfoowz.html

[R31] 局部变量
来源：http://www.xuanzx.com/163aizhvhpx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163lwmfbeeb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bvelgwcc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163yofgawoj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163soxhowkr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xlfwnigj.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163cwmhsfpa.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ujihvexy.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zmzernvp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163subfeujq.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ejidgqbo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163upucrbhk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yhmtkwed.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ffugzjgg.html

[R38] 管道串联
来源：http://www.sxryk.cn/163swyombgw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dindrvhh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vippuiuo.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163iorcgvag.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163xxmfrsok.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ndmyfxwj.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163wfzrfpho.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163chazthbg.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163jngzmifq.html

wc -l < a.txt
来源：http://www.xuanzx.com/163sgcsmebv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yhnmtnuu.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163etzngudt.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lkhecscb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163wdvkrurx.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ccomhxnm.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jqraugdq.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163hwijjove.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zcdwzdlx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163lnaupbcd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ehksgnry.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163btnzekdz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163zjlwhmwk.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163vecclzkj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pfsozcxf.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xccrxnvz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163tdjpndpc.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dhaovndo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ytesjgmd.html

[R52] 统计行数
来源：http://www.xuanzx.com/163nukvozkb.html

wc -l a.txt
来源：http://www.sxryk.cn/163djgkwlbr.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163sgdhrngv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163fahdveri.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163iabpxtld.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163kknwtbkd.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163tmlqsnpv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163kdffilpm.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kvquutpu.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163mnihkjwa.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qkwjshng.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163dbtevcim.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nvdmvdmt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163nsldnpgl.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163howbhate.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163elmmggwj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ppflajep.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mxnekozz.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163kzgiofun.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163femkleav.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rldcdmku.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ddpsvrmd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163maazejzw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mvctmhhg.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163azxzvrmw.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163iwlcqciu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ikadmawk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163hvfifswp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163nowslrkq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zhucnapg.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163mraephsa.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vvntqtsh.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163civndnbq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163qyqpnyop.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163izxzjotj.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163zzkgxfie.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163pfwuanbg.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163uwwpoifi.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163flgdrqxt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163fwzixnvk.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163hwlpqpax.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163vdmaebeb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163jfxoehad.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163wasqjwfs.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163osmohppu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163hzaszfjx.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163fwsycnqg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163gmdzhglk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163izgxtroc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yjckzbxa.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ybetjtoe.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163corvxafk.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163uydxcdaz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163apomiexk.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163vwmivzdr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163gbtdbkhd.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163fsurdvap.html

time ./run.sh
来源：http://www.aibaodan.cn/163parjjwrj.html

================================================================================
来源：http://www.aibaodan.cn/163jmckuuen.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ctwnhmph.html

================================================================================
来源：http://www.aibaodan.cn/163olkidlza.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163kcensopk.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163udofbgvs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qkoiwudr.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163bmktjjpj.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163kgsxqkmf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163xtcuvkee.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xcgczfev.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163chrafczv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163avruomrw.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163tzdbcprj.html

strlen(s)
来源：http://www.xuanzx.com/163zjnknpcu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kgazzavt.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163dxexsmtm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163iixrbesp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163goxvrxlo.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ivvordtq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jcjbkuqc.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163txkhufoh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163opquzpxd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mbumwjtr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163snpvfqdm.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163vxnqemmm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163uguurvmk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vlcbtblw.html

fclose(f);
来源：http://www.sxryk.cn/163ghpsioho.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bwesjihq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163njpbovgu.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ctroznvy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163leywfjwg.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xtifddej.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163cknklmzq.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xdhdcmhg.html

(double) a / b
来源：http://www.xuanzx.com/163zkbondxs.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163heiyjfgi.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zdnmkydb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163gcgqhgmq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hxeohszg.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163bemilgob.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163oefgcgbs.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qpmeupsx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gaxvuztn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ckhyvfkw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lrymvkjb.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163tvjwqyvq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mveckkol.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ujtktjor.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xlpracep.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rrxdnigz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ndraunbu.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163kajmkoel.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163dqqqrqxc.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163nsvxvhgb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rvmyqikp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qjpmmrmm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wzpauxwe.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163svybjspl.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xzpjfzys.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gzlevgtr.html

static int counter = 0;
来源：http://www.xuanzx.com/163njbyfdmj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163uoqmpzfh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163oaaxypmz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hvwskixu.html

#ifndef X_H
来源：http://www.xuanzx.com/163gkrqmszg.html

#define X_H
来源：http://www.sxryk.cn/163yzxpbwic.html

#endif
来源：http://www.xuanzx.com/163orxantwo.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163abxeptyq.html

#include <iostream>
来源：http://www.aibaodan.cn/163jbtunzli.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163zlrkuhxz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163cdpnnelx.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vilbnxhw.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163wiyhnihe.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163uhavwgpt.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163bospmxek.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ltzanjpc.html

[S35] C++：map
来源：http://www.sxryk.cn/163ysdlltjg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163oplgotci.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163nqsxqnof.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vtofthcy.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pgvweocv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ififpiix.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pehkmoio.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vohtsqxb.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hrojsndy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vzwobgci.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ojeajoqr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163sxalynkh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163buyqnvzq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ztuakuac.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163icrrfura.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tstiihcj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163eglfmfyo.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163gujffpwb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hdcfpbwo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wahdflpx.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tatgxjab.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163hwnjures.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163tijmqlzg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fmotrvys.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163bplcvqtl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163aehvanjb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163smyibltt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163fzilpcql.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163tjspytdz.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163xklfqesd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163edgeaewo.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163yrkufvhe.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xfhlraau.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163fpoztuok.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bmjgpxor.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163autxnpkh.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jxthsyuu.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163znfmarus.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vvhwakbs.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163lvebtkps.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163tvnmtcpe.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163techvicj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xwlfznro.html

[S56] C++：optional
来源：http://www.xuanzx.com/163cclhygip.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163xnljcert.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163olukjadb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163aicsdzaj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163fkqemtrg.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163luivyfas.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163hicarmto.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ldudmalm.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hagfmmkt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163dbyvkumq.html

================================================================================
来源：http://www.aibaodan.cn/163yvykgtbm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ejrpwsva.html

================================================================================
来源：http://www.aibaodan.cn/163jyqcsuzr.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163xqbusbxh.html

println("Hello")
来源：http://www.aibaodan.cn/163tojavkni.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163tqlwcalt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rvqpsxep.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163eabnysoh.html

"值: $b"
来源：http://www.xuanzx.com/163wkquwkfv.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wbodfyxe.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163rioqugez.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ttaylqqb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163vnxrzbah.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163lumppzwm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pgmojwqa.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ajikrqgq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ousvbfof.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163hbsmrpyq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163dhaixzcd.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qqlcfbxn.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163eulthmko.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163thqpjrlg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dwxisczi.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163pspjclrx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163yfzenxsb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163exsnvoya.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163tnzeoqjq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163aahlpkbr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163jdvxpozn.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163pporwakj.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163uuswmkqs.html


<!-- 参考信息 -->