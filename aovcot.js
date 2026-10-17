外链999!wailian999！

case "$1" in
来源：http://www.sxryk.cn/163qyudzdnv.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163dftckici.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163riosrwzd.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163zwmllqey.html

esac
来源：http://www.aibaodan.cn/163mndvelwq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ifwnzhhu.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163iukmehyz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163sjtkvvrm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163buzcxvnh.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163vlivronu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gnpmjtqn.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163vwgxwseu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163zqqcubeb.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163hrfqduvy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163iczaivvn.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ofezdoif.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ajegtuoo.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163sqnzszgp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163kezisdqe.html

[R19] 数组长度
来源：http://www.xuanzx.com/163jauqgxqh.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163wrutahpz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163yjdwpfgb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vgjhqcnj.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163rvymjppr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163yyvwkpoz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163iwesppol.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163fyjhiitl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163jdwvftmu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163wfukyyeh.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hvruceue.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163drepxiit.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163iajhcjir.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mhwabysd.html

[R26] 命令替换
来源：http://www.xuanzx.com/163emjsuuvw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163snxewshk.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163yggdfiez.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163fmrvvydj.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ayzmzmzt.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163jpgvvccb.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ientkpcb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163mpeozvol.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jtjuljcu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163obgzfnga.html

[R31] 局部变量
来源：http://www.xuanzx.com/163kvnugmgq.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163tdbbszbb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163pnjsmlcs.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wbdctihc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163nqqrmpaw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163moxxgcxw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ifcbbffd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163eqdbtckv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pbxeofvf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163vrsesdjw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vpiarkvs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163gfemmhcy.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fmzkqkxw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163givvluev.html

[R38] 管道串联
来源：http://www.sxryk.cn/163lqcoqxjs.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163binjhqop.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163hdqlcurn.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163xjbaxunt.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qlsdnkfv.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163hrlcqvcq.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163soeasxna.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163eoxiufvd.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163nfientcr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xudbuiqk.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163zkyngdff.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163czgsmaks.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gqwpfska.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163wbkltezs.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ogcnamlf.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163tmysqkmc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163fwooghuz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163digyfyrv.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163feciswlo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cxmqrmcw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zzxingeg.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163manvnwup.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163htcuvebu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wkdtoyht.html

[R50] awk 求和
来源：http://www.xuanzx.com/163jtawaqpc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hwshsvzd.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163tjcihmro.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cycgwcxs.html

[R52] 统计行数
来源：http://www.xuanzx.com/163hxafmxer.html

wc -l a.txt
来源：http://www.xuanzx.com/163yfwmjeyl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163wjmaszhj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163heknvolt.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hgnyvhrm.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163oztlhzht.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qnbdvgop.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163esqpuuom.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163usxpovse.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163scaixvcl.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163dnjokrcn.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163bouiqkct.html

[R58] 下载文件
来源：http://www.xuanzx.com/163rxtjuyij.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163sllmooij.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zofglrkp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163xhtpumyw.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163qaipohar.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163tutypstd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163mzftejnu.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163xjihallc.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163yiqdbjvo.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163wfekkbcs.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163bopidqrd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ibzpxeri.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ljjbqwyg.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zonlrhnm.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163uqhrmmeh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ikszlszw.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dsjzpnnq.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163vqgmhqvu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fdmwlnsm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163pnkzkfpe.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163oozmueis.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zhcjwajm.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rqytpgqr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jxvfmoni.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ulcoplnb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lsotgqko.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163aixsalvk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163rhjolbpj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163skxeikhs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ajtnutzs.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163lurograz.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163szdusiqg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163caqghwmz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163govreekv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163wkutctzi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163lahrnjqb.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163trfrcqkn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ivxdjmlb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hejcscpc.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163otyabpjs.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163pfgenuqc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163poieamgu.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163yrujxyiz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ybyoixnn.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163sdmkydxa.html

time ./run.sh
来源：http://www.aibaodan.cn/163oqejknhl.html

================================================================================
来源：http://www.xuanzx.com/163zggzdpbl.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163dwbfpldq.html

================================================================================
来源：http://www.aibaodan.cn/163ycskgqqc.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163emygpvsx.html

#include <stdio.h>
来源：http://www.xuanzx.com/163zulcvvwn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163rzrkwqvf.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vtzwpnqj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163swhakzly.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163lxuqnvxf.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163lfwbtkus.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163qjwmedzh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163hjdjfiij.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163krnfiplx.html

strlen(s)
来源：http://www.xuanzx.com/163txzqrvim.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163jfmluknj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163zugrujfq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163zqmgsxin.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hcrqwhfz.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163yigyaliq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163qpybybkz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163kskaghbg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163kmzahgsy.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163siazwucu.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163cdvqzwvb.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163cgbdbpwh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163makervdi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fhnqlqhf.html

fclose(f);
来源：http://www.aibaodan.cn/163hmdkqtec.html

[S12] C：写文件
来源：http://www.sxryk.cn/163txtfzufu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ozmpresm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163plqjfzde.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163cfszljoh.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xbnhkwtk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163dvthxjtv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163saxfhixr.html

(double) a / b
来源：http://www.sxryk.cn/163hfbcexqt.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vjeajynr.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163gioldahf.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kqmsnkyx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wktmcrvz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163nxdfupit.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zzmwoalb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163pblzqurq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163aqblomqp.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rcwgqise.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163btdwmfzh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163jmiuamtp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163bhnbloag.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163lzvyvpid.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163mhdestnc.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ecsecwnd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163luxbswlt.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jiexbpjd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fvtbhyub.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163fqwmzaxa.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163rkgkwkai.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163lcjkinxl.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163lrsiyoty.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163oxtptxqu.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163gqpseczm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tdfknnod.html

static int counter = 0;
来源：http://www.aibaodan.cn/163yjxzopyv.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qxhhyfni.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163qcmgafap.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163fmstpbuu.html

#ifndef X_H
来源：http://www.xuanzx.com/163eqdenduu.html

#define X_H
来源：http://www.aibaodan.cn/163vscbqjls.html

#endif
来源：http://www.sxryk.cn/163zwwljneh.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mezzjpxc.html

#include <iostream>
来源：http://www.sxryk.cn/163jvbfmsya.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zzhooixo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ktplyrmq.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mckuiecw.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163xgzthwfe.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gxkxqihg.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wzrogrgp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kxgkjqea.html

[S35] C++：map
来源：http://www.aibaodan.cn/163rjpawhvr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163thovioea.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163gutexmar.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dzduduar.html

[S37] C++：set
来源：http://www.aibaodan.cn/163lhrlkzas.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163dzootaxy.html

[S38] C++：排序
来源：http://www.xuanzx.com/163lqmibxzc.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163enhqdhmm.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ambkpbih.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163kfcbomol.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163rhadsggg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163hddtpxri.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163hdwyryft.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wpqraxmm.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rvyyiqux.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163lldvggpz.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wgywismk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163lakpopyg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163bmuhxpyz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163jkewtldh.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163gehlndzt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163bqigdfjm.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vpzvhirs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163yybgwawq.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163chqnttrd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ivndrqtb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nocjdoqu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ekkjmxpq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163wphbhqln.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163evmztkcm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163bchlratq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ngyywizk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pcnxumsq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163bvifultc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163fvatmxlg.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jxjwqljx.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163gecpjbai.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163muzhqtii.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163uytskcgj.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163adtpznsh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163yhwkpkjh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163zehucsvg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163jlhsiygk.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vowqfuqk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qqhhloay.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wjleejpg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163igbgnwkw.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163kuxubyxm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163idjafrdj.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xpewybof.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163aphmqeaj.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163idtxrgso.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ndgdflct.html

================================================================================
来源：http://www.sxryk.cn/163dehhmprs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163psrxmnxz.html

================================================================================
来源：http://www.sxryk.cn/163orpttjgu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jhvgvuap.html

println("Hello")
来源：http://www.sxryk.cn/163nciejusf.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163usddmmwb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xfurytbz.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ogayihdu.html

"值: $b"
来源：http://www.sxryk.cn/163mkmdmata.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163myevwqax.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163netxvoak.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xwzberrs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163iaqehjmz.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163rssfezms.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163rekhskvq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163pwhatpbk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zjqjewvk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ryffghpt.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lxfymuug.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163gchwqvwm.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163bxtrvpzp.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163lilmespe.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163exclijkz.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rcqboahi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vjtiuhlc.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mnbyojlu.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163owulzbce.html


<!-- 参考信息 -->