外链999!wailian999！

echo "${#s}"
来源：http://www.aibaodan.cn/163znrfqtye.html

[R22] 截取子串
来源：http://www.xuanzx.com/163gymnnror.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ipljhcjs.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163atmulavr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163yeqxavic.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rpijitjz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163vwndvmrm.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163uungpcxu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163myrydlto.html

[R26] 命令替换
来源：http://www.sxryk.cn/163vgswxlmg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163fuvjwfat.html

[R27] 算术展开
来源：http://www.sxryk.cn/163qosjuwfq.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163fqcfgngm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wspeefwj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163gpkzbqge.html

[R29] 定义函数
来源：http://www.sxryk.cn/163pieepfpb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wkmiunge.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163nillbilh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163bkpkvaeg.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163bdjwkvau.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163vsinccrj.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ecoqiyqh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163dqouyqxh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ygmlwmim.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163jofsgppk.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163mgakcvqn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163njferefe.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gplzmore.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163nlqjwlse.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163mlfbxveo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163uyjvsqpj.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rrtwmqxi.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ttpjhpax.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ynhasizv.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ihqtimfe.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pmjoejjm.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163nbqemxaj.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163tdqeolme.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163txvdnqek.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163rsvsodtn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163umzdadve.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ajdmsibl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dvnbrttx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jfpqjqwq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163zrvymszf.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163tqklpemx.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163mjjplixf.html

[R45] 批量删除
来源：http://www.xuanzx.com/163lfxjdbpw.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ldmrdwov.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163cgcerzfw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163diffhawp.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163niujdxwm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wuyqxong.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163eceoxyub.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163vywmwrdz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163innrmczf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163jpzmvoqe.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163jontbimu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163whpzpyth.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163sqdiahaf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163kjtcyjtw.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163gyukzaoz.html

wc -l a.txt
来源：http://www.sxryk.cn/163gwtxbyne.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163pitaimul.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163uaxhrlij.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163acsattci.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163spdehidd.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pgclacsf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163iucorqoc.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gpdalsdy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163yssshcwv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qycoxnrs.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fsvizwjj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163dhidfshr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163fnxcfbnf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mogsymbd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xaowxrzq.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163eqsqpbke.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163osvnvbab.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163izdpzpqs.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ckwlzwgl.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gjnxqumi.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zwaobftn.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163zeojrnot.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zhluoolo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ysgwzelf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qzjsuzhm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wzpxpuni.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163tfkuotag.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wscpklqp.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163tbvolgsp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bgalvnbu.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163amrixpmw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163kmstybua.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ibrfimmz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163dopxqznv.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163cclqoosw.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tbidjzft.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163iucdnjbm.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163dqvpubwr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zunpjnxs.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163zjtchfgb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163xulohjvb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163hzqholee.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163dtiesjbf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163apwysjtk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163mzocmdif.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163wzhfgilt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wjgtfxwd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163isejxjsr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jqowotap.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163vwwsboag.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163zwetvhdv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163fngczuga.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163enomsfuo.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ftgukpdm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cgprtumb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163szllppro.html

time ./run.sh
来源：http://www.aibaodan.cn/163ryaoceph.html

================================================================================
来源：http://www.xuanzx.com/163lwrnigwr.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163qhgargkt.html

================================================================================
来源：http://www.xuanzx.com/163gxlgzczh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163fuzfmrwy.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ershsnpb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163fppqvcpd.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163fkbgirbr.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dltxgawv.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ewxixgym.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163qavzjxjo.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163pkosrssr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163pencpogn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ceypkwpw.html

strlen(s)
来源：http://www.sxryk.cn/163celdybcl.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163seatbgiw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163citsbsgx.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163sobtkfro.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163sfyonpbm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163tgseolil.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163emfixxhr.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163rfpufgaq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163khzotncp.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zrnuebcv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163yxpgzbfc.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dqkpanfw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163atboymes.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vmhznjbm.html

fclose(f);
来源：http://www.aibaodan.cn/163mcvzoukq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163mpldcpwb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163tcpzxtem.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wuuldyzx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163itwqotfi.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mwhmhclv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163bzuywthh.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163chodvkmi.html

(double) a / b
来源：http://www.sxryk.cn/163ieiwpzhw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163wrdlorgj.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163btnuylej.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163nfqukwlp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163uquiehcv.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163iwcbigcn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163tgdovxge.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ggvcggrs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163llyvnfst.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pofirsja.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zdktwzsi.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ylonykiq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hthhlypg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163lbrjtpto.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mnkaefyp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ditybxyr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163idcxedlk.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163vocnzmxl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163exllixfc.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163qyfneihl.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163jfumsnxx.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163incfdbim.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163iabrtkek.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ewnjsltn.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163kbivjxyo.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163yvslfctn.html

static int counter = 0;
来源：http://www.sxryk.cn/163aylnuotd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163okwtwhvm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xuvswzfh.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dkwmefvw.html

#ifndef X_H
来源：http://www.sxryk.cn/163zztukozn.html

#define X_H
来源：http://www.sxryk.cn/163fldfokke.html

#endif
来源：http://www.xuanzx.com/163jfqpqozu.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zadpqlsz.html

#include <iostream>
来源：http://www.xuanzx.com/163dkxpgvuy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163lazwtvhw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163acvovlxj.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163rsstvnjn.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163dwqisqwf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163eyarjrxs.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163smobizcb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163iogngytz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zfrxxjfp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wpshnkps.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163agaadwcu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163icldctux.html

[S37] C++：set
来源：http://www.aibaodan.cn/163tfbuokdc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ujzmopxh.html

[S38] C++：排序
来源：http://www.xuanzx.com/163brzixrgi.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163upqttqcr.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zcbhzftq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163kwmjrhva.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tawvlovq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163loagpdtw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163uxtunmqw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dhnrjxzx.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163rvgvvyqs.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gstpbalk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zemvwfme.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163dnoodexx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163lujenkgq.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163bfymhwod.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ylpvrhgx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163bobdjdjr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163uipifufs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xmugnwhl.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163amxxcpmw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wuqagmar.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ptqqbdvx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163gpygjubg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163aldbpiwb.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163arursfuc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163qltetzbo.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163qfhocdva.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163adpzjeau.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gtasgajl.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163lyptfikz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163rksgshem.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163enaachbt.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163velawlht.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163rvtjnqio.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wxzilzjv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163rquvemsm.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163dfqkvipf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163themwvsy.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tabcotnz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163wiihixcp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163szcuuoqt.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163pfwvlkyn.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163xmgdzqco.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163wmvqmtpr.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163yjjdyzwn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mtchrfyx.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fgzknagm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ohnhjpej.html

================================================================================
来源：http://www.sxryk.cn/163qrmemrfs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yztoktaz.html

================================================================================
来源：http://www.sxryk.cn/163ysieqabv.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163twagzbha.html

println("Hello")
来源：http://www.aibaodan.cn/163rechruan.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163exqjehit.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163plpwvsjt.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hujiheko.html

"值: $b"
来源：http://www.aibaodan.cn/163obzuhfop.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ffnicthw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vdftmwbp.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163iuyoftpo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zcfqlkvz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zszyugmu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163pqiuhfwo.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163dmdtocur.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zyqcujqf.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163zaqxnvim.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zhfhbaxm.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fzlyzcdu.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163wmdjdbjh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163hhftrkpx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wyypnokk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163fxrlsmnl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163onpxmiaf.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wfzxbjha.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163todvhxtt.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163pggepjsg.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163brkubdxa.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qffihmzu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163psuosivn.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163udktcezw.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163zxctfsog.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163uosdhaoz.html

print("Hello")
来源：http://www.sxryk.cn/163wcottqmj.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163smhprghr.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163loxnjvil.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ekfcwxbp.html

"值: \(b)"
来源：http://www.xuanzx.com/163ibvqxedc.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163spjbbjhy.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163rjudpcam.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ujrdppht.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163fmhwjgue.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rfsoveop.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jtnumdwi.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ikcpmovl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163esrgthud.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163dfnrgpnf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163pwolmfqe.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kuscbflp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163psawqehr.html


<!-- 参考信息 -->