外链999!wailian999！

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163bfpcyava.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163clplwoto.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163bmekhgvu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hnlmosxo.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163yivqivwc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rdnxwckh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163rmewzepl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qxaumfgc.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163pprvtndr.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163njooiisa.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163muvowick.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163qhobsukf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163oxsofxxz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163teycrbul.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ynkhbzjh.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163vdfqinzk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163tjggaaqc.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163tuwcnniz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rwsiyehj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163epmpodzd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mlisihgc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163atrqzonl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vnppblka.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xbmcvnkz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163bllqfyad.html

[R52] 统计行数
来源：http://www.xuanzx.com/163yuleyezc.html

wc -l a.txt
来源：http://www.xuanzx.com/163edapqzvp.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zdjxlwxu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163jgnfysku.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163bpokgdmo.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xuoodrou.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163wrhoblue.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163aarihczn.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163nxyduwiy.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163drfzhevi.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ohfaaefh.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qhoeuyuy.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163aruqgefa.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163avdwiwuv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163fytpahcf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163imivulbi.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ssvwovpe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163shcopnlt.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163gfcgqmaj.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163nrmllcyh.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163czjwtqhn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mokeoaay.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163szbywgsm.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163yhoenojx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163icanfwyl.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fscgdloe.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jokbtwdf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163uyrrxbeo.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ryrvblyj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tmhsecab.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163krtkztps.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ztxxksjz.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163aspfoprh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163apvalkxb.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163oyqthcgp.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ycibwcxm.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hgryocoe.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163sqjgctmz.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163blzfccen.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163myiqcfao.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163rdgqggxm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163tmmlkmfe.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mmcbnnze.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163uikvdbei.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163octurkea.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163grtlaqao.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163bjabnfgd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163cltatref.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163trnicuaf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mluokokn.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wulqjngc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163euklvdwu.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163pssscmhz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fscsgyrr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163mgcpxeso.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163iykpbfsl.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ovdatcmx.html

time ./run.sh
来源：http://www.sxryk.cn/163uyybxsbk.html

================================================================================
来源：http://www.xuanzx.com/163koakzuor.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ulkbdfqm.html

================================================================================
来源：http://www.aibaodan.cn/163sriytvsb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163nbchckae.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tqitrbqe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pprksxqo.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163dekhejlm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dedfiohk.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163bprupoot.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163fpaxzgkx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163qsdvgnnq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163auouyebc.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163lwjhdtvd.html

strlen(s)
来源：http://www.xuanzx.com/163plrvbzqc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163upusccwy.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163qfinxipj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rkhkkqmy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163tgcaykax.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163xflgcmux.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163azekuwpb.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163aibhrrfi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163txrapnxa.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ybjydcat.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ajhpbgse.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ximnqgvk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ncprmxxd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163zbjmcovw.html

fclose(f);
来源：http://www.aibaodan.cn/163nnshhnep.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163utkzsknn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163aaraklqi.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wusvqgsa.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163titnwaji.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xhkocbhi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163jowfbfja.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163jndganxf.html

(double) a / b
来源：http://www.sxryk.cn/163ozfpnppr.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163oyviiwir.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163krelzrew.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163dfjhhvjc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rfriibon.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ifjxtubv.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163qagcmllm.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163faqjbrre.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wzpqbray.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163yzwidlwp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vgckhhqx.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xpahhaae.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163nzlurqec.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163owhvhcwx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xccxkwbt.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ffhfqdip.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163jtxrsbhg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163abgqonwc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163auqaovsm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163gsqajnra.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ozdeizyx.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163lhitldda.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tfspwgca.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fwgqaszb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163chksmxue.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163brjfmrim.html

static int counter = 0;
来源：http://www.sxryk.cn/163qjhpqthb.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163agcgfcyj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vlycqdmf.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163rjqdivhu.html

#ifndef X_H
来源：http://www.xuanzx.com/163upgimcwd.html

#define X_H
来源：http://www.aibaodan.cn/163habmczjw.html

#endif
来源：http://www.sxryk.cn/163uykcwyun.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163bnawcgzl.html

#include <iostream>
来源：http://www.sxryk.cn/163yxmxvntm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wqiysmiz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163pvtrctba.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163sfpknahb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ujfqddxk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163bymseiai.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163dcjxhqhe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fjfmcpoz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pvznzalm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vapszdbp.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163zajorjbz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163axapzzvv.html

[S37] C++：set
来源：http://www.xuanzx.com/163ejzedetm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ufskvrzr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tigxwxpz.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163recrukew.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xrhqafhw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163mhinivqr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163fsjpybzm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cjvenilf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lkglhshz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fneeycux.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ntkltjfi.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163brfrjcya.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163svhtagqa.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163unbazrom.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163elmaipvh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nddamkdc.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163kkrsezwm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163oeodcphp.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ofdvpmeo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ckebtaxg.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xhebvugp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ldrgeofz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163bpwlurlt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163viakmdgt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ukxkkvqw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fljfybmz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pjgjytsn.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tacvagpo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163dfktmvba.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tezwqubo.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163npslusim.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163agdlcavo.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163jytuzvmg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163sqtzkkfx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163qzgdylag.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rxbmbcxf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163hipdzdll.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ocessaal.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163oskiyind.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rzyscpyh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163pwyhstez.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vgenwzkc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163sjcgbojj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163bltmblpw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vmxdclcl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ocrpojqk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nmbodths.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163xfsfvpcr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163iaztqwae.html

================================================================================
来源：http://www.aibaodan.cn/163ygrzrmaj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uqrfencm.html

================================================================================
来源：http://www.sxryk.cn/163fhrgymar.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163achncicb.html

println("Hello")
来源：http://www.aibaodan.cn/163dlbnsuem.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163iyrsaxlj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tvhwpusq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163cmfnsvjr.html

"值: $b"
来源：http://www.sxryk.cn/163wzektvzi.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163hzpxgnlp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163tlwloqcy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ocwkvrcz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lpltegzb.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163feaqyjut.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163pepgygyc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163zniazceu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163erbvyxqo.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163deplqhrn.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163iqpsntif.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163pojkzhjw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163yreksvwf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vfnhbtar.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hbfkmcmc.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163atihcmxi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163pyomduof.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163dzzjhwgg.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163imnjubvu.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163riwckevx.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163tjiqycia.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163obqslkij.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fglpvsgw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163khcfpace.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163womshsce.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163dpvggmli.html

print("Hello")
来源：http://www.aibaodan.cn/163fonppmqp.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163yuiqkpyp.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163jelxnqrw.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163tegkusul.html

"值: \(b)"
来源：http://www.sxryk.cn/163hazxisfb.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163eqgdppky.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163paaosxfh.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hyqpyaie.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163irtpdltb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163jowgkdyp.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tmigodch.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163puzrbjay.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163wssciwra.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163lratghiy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163movqqbfw.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xjujgsfz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163fjfqpblo.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ehsaygaf.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jznkhzmw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163rfqfjicq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vcclfmve.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xpeajmyt.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163kwniirkh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163iewqhine.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jauxfqvy.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163asfsemrm.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163nwghpiqi.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163szqrwdbm.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163pasilcpq.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163vpvltmko.html

print("Hello")
来源：http://www.aibaodan.cn/163rrsvtrox.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ipumrkuf.html

local a = 1
来源：http://www.xuanzx.com/163uolibxzd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163yvssvmyf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163dryxllne.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163iyribnys.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163jyxlwofs.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163smadrkbt.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163uesmgvfv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jdibonhf.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163bzolmjuo.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163rjncysii.html

"a" .. "b"
来源：http://www.sxryk.cn/163tovhxjgq.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163dfopjzgo.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163knugufdg.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163rbwxuzzx.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163robipjid.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163mbcvdiql.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163xsmwkxjc.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163fqkzzyhw.html

print "Hello\n";
来源：http://www.xuanzx.com/163eklkesnb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163rbfxtdgz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163wviitpiy.html


<!-- 参考信息 -->