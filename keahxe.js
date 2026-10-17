外链999!wailian999！

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163cwazwbry.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163odysndkk.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dmahxcct.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163dxpgrujp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163jjpsuaoi.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ecmgjmvi.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ktzosnml.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163yyemzsjv.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gviogfcf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vzyvbtym.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ftnimvqi.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163rrnajzuv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163pgehlhre.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zlaiuenn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163nvbxrdii.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163dlhhomtt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163epulrrhk.html

[R50] awk 求和
来源：http://www.sxryk.cn/163crwkegny.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163kxrxxdov.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rfvalqyq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163akpqgizp.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163nbwndgex.html

wc -l a.txt
来源：http://www.aibaodan.cn/163tlbjyfro.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jowvbknl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163vmkegwkz.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xpxtpfow.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163mxqivybw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163vkcelvkq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ziqcoumx.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hupmgwqn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163cxcvqhai.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163fbfxcygx.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163vtpwpuio.html

[R58] 下载文件
来源：http://www.sxryk.cn/163yaprctrt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hxaljqjc.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163celslwie.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ktoqwepe.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163tzyxemnw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163cfpsdncg.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ydnyvvab.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163keikfihr.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163aikddxbx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163pgpbdpir.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163faemopqz.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163snitepwl.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cpkvmaql.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nqycvfzf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163bkrvpyvv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163nnaiopkh.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163yuqbtrkw.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ofvpztyb.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ygxzagvj.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163dhauggmz.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163acoqmbtt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163vutsdsfr.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163crlicdci.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nulvpxvw.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163fslfjpvq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163muqviyln.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163pievxjzb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ilkcmlzt.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163brodruhq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163enecbdvb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kbvkclsz.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163nbjdjbvg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163foyluvnt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163xkbphbom.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163zmiqcofl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ycpkmpni.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163lofoyfdm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mhhidgtw.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xzjfzgsp.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xsntjjbx.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ddtphgqa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163olsqjfqq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163qwgrmkcu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lowkudeu.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163cyovysfa.html

time ./run.sh
来源：http://www.xuanzx.com/163hcrvpdje.html

================================================================================
来源：http://www.aibaodan.cn/163cbkewhvt.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yofmkzon.html

================================================================================
来源：http://www.sxryk.cn/163imlaqzbp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163bcufugmo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ytvjjweh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gzrvkxbw.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163uemudpvb.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163frlcnncv.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163uowlfhay.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163nyldjeqr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qyuoltfk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163lmeqowir.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ydwgykre.html

strlen(s)
来源：http://www.aibaodan.cn/163pqxitawv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163spxmvyrc.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163pffaniwq.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ljhdpbib.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163eblkwvww.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163pksvwnng.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ctmiuced.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163wfsncpap.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163bakwdwja.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163jmjwlvio.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163yzlhiqlr.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xemqvtfg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jamzsyys.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ehgukhat.html

fclose(f);
来源：http://www.aibaodan.cn/163upgtlfty.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vnhjmjou.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mkeiqybk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163plnfegvg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163mwirxmdu.html

[S14] C：枚举
来源：http://www.xuanzx.com/163sybfghaa.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ufpikgad.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fnimscdz.html

(double) a / b
来源：http://www.sxryk.cn/163senawcjx.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163cbikvmbg.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163kxhcafhb.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xkkezdgz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163wfeaelek.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163khmmbvgj.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163lkctcjbd.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163yxwiwjpd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163otblwofu.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ttcelihz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163trtwxcbv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rrkjieck.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pcqreryw.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qwhfjlvt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163jylrfrje.html

[S23] C：随机数
来源：http://www.xuanzx.com/163roelegah.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zahwqrqv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ujjgprwa.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ridljxef.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163batlqxsr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rqepatoj.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ozdkhxgi.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163mpqcxsts.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jdtmchly.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wopfdysc.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163wokvhfae.html

static int counter = 0;
来源：http://www.sxryk.cn/163wvupoobi.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mtromuln.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gnojixpv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163larznwdb.html

#ifndef X_H
来源：http://www.xuanzx.com/163reijizoh.html

#define X_H
来源：http://www.aibaodan.cn/163rrsyxuxv.html

#endif
来源：http://www.xuanzx.com/163vuihmpqa.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163jedihohk.html

#include <iostream>
来源：http://www.sxryk.cn/163nogciwam.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zpoppcqi.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fpfptdzg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163zbsunyrr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163jxgxtovv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xvahsgxw.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163btqetfxb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163blzbcecn.html

[S35] C++：map
来源：http://www.xuanzx.com/163pjzooqlv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dnjmyfko.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163wmkowuhy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163slozwmje.html

[S37] C++：set
来源：http://www.sxryk.cn/163cnrubwgi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163bvasjhpy.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163gqxwwdvp.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qjxuoyyk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163umzwpibw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163yswsmqjg.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163udsblcgz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fbkvagyv.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163rcjcbdmw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163htbeyuwi.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pggegxcb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163obytovtm.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ghebkvlx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163maeckjvi.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163uwyyrsjb.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ttgtlwsb.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163yeibftgj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163kljjpktw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163crwjndbi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163oikzkypv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163urvjblvu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ccuxmbwu.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wylkchdm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163whraagfl.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163royodnrc.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163crycghdl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jsasxbcf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163iesyuncz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163zrwxctzu.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163enbxhtuk.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163aujpowqs.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163lxbzbpmc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163agqoxmby.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163neykshga.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163yupnbjfk.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163mkwtmbkt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hlkpdtso.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163imjjujfa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163opdwjdat.html

[S56] C++：optional
来源：http://www.sxryk.cn/163noegwkau.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163wxemxcte.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163rekilaln.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vkxocadm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163zbktkawq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ldkybxcf.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gkfewggh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163yabwffat.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163tjrlfxqj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163rtksvxbn.html

================================================================================
来源：http://www.aibaodan.cn/163tjpjtlln.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xxdkzbqu.html

================================================================================
来源：http://www.sxryk.cn/163lpfufegf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zbgnkfqq.html

println("Hello")
来源：http://www.xuanzx.com/163jldwbkfk.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163gwusogga.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163nyvslnxz.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163egcvnpos.html

"值: $b"
来源：http://www.sxryk.cn/163grdxwtps.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163sktogxtw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163pwwykkom.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163zupeavwm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163nlwwfedx.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jliwuxxv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rogotwtj.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163obgsnmgg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163spwmgyzs.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163aroyosrg.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163bnrafsle.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163eegqoogi.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163aeuwkjnw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qswutjsm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bgnnltpg.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163uysrjjxp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163whaajefg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163lnhvsgzu.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163wfmswdgc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163avoxspvs.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163pmxdkbdf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163meufaiqa.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163jjsmtqnt.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163aidjnger.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163kgsfrokr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163nynpehuw.html

print("Hello")
来源：http://www.aibaodan.cn/163iouyidsp.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163aiylffxb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163adjfcbqu.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163wobxxqsd.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dneyfhrr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163jvjxrhos.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163lncjbucu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ijbtvudh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163audzdnqk.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163nutmedkg.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jpqyduzn.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ljmpljgq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163qlobiyqm.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163nftusmio.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163airtxwqg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163mevssbkx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163boirkoma.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163cshejalf.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163gzpfjjef.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zivgmujw.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163zsdeezpp.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163gwmiitsq.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163giibjyib.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163gafqiqnr.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163doqbcqhr.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qafpbpcy.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163iaqnzgzu.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163tqwhagra.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163lqhuacks.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163rgpxczrc.html

print("Hello")
来源：http://www.xuanzx.com/163jcfvxmkl.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163fzvffciw.html

local a = 1
来源：http://www.xuanzx.com/163bbiufbzr.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wsowbldf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163amzmsqju.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163vuqjypvy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163bdshrwck.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163xwjnryjb.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163cyuqjked.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163gjsimcsj.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163skmjuibw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163stwuyfqj.html

"a" .. "b"
来源：http://www.xuanzx.com/163kewvtvsk.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jhxkcszi.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163agizzyzk.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163gmnizcfg.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163djunyxsd.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kthwdykk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163haggstqs.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ytwoukis.html

print "Hello\n";
来源：http://www.sxryk.cn/163hkwizygi.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mxczsrkf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163bdvqoyxl.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163tgyjpmgi.html

"值: $a"
来源：http://www.xuanzx.com/163kxwfhljd.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mkohhfmv.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163jamrcoyt.html


<!-- 参考信息 -->