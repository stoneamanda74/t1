外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wqeywtmq.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163edomzbtp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163igayxxxu.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zwwsloja.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163emwcobsi.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163uplypwge.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wfxecubn.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163jcjdzikc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163hobaefbu.html

[R52] 统计行数
来源：http://www.xuanzx.com/163awylfrnx.html

wc -l a.txt
来源：http://www.aibaodan.cn/163dkdaxeem.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163bdjimfdj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163giwuphtr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ufkupldl.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163snkjxoed.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163cpkuxhbw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wzrrqbmn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163plmkypev.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163bspkwaal.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163jwqgnars.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163cavpkfll.html

[R58] 下载文件
来源：http://www.xuanzx.com/163rgwaqyvx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ejplcwfo.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mqhlouul.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zlctjjeb.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163bqtwudmr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163hxbnsceu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163cxolwpma.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163bjzwpcqc.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163llywhucf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mqhkosfq.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163gusuuxce.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ojklugtp.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qsbwkqvq.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163mmnnbhgu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qcszvvdd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163wqlwqzwq.html

[R66] 定时任务
来源：http://www.sxryk.cn/163aqpswvij.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163yoqvqnck.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hezbmwda.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qixwatbb.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163fbnxbxet.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163tjcdwcpw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yusuvvno.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163eccowcum.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163jzmncngx.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fcmmetnx.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163givyjdxv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163tuhtolyx.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163egjdobfh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163akttnrqg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163kqghwliw.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mcvprfvk.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163atlqiiso.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kikcajpz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163pnhaljnu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163gxdhzcpz.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163vqrwqpow.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163suqagzoj.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rynjhxwl.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163pnjaehno.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163mdjamlmw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qgzmminl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jshzklkt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163bfvymakh.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vkhwuxxu.html

time ./run.sh
来源：http://www.aibaodan.cn/163jgezbjdc.html

================================================================================
来源：http://www.xuanzx.com/163jfaqtkdw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163lchcucta.html

================================================================================
来源：http://www.xuanzx.com/163ztaofjvg.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vtkekdns.html

#include <stdio.h>
来源：http://www.sxryk.cn/163qisjnfyi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dyslueds.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163chopodsb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wwrtmyyi.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163jiwekgjc.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163syxufzbh.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163xwdenule.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pihgcaum.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163tesfzuxs.html

strlen(s)
来源：http://www.sxryk.cn/163muqjbcju.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163viluxqxp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163rfvfacec.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fuefglaf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163yymsthyo.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163lzjnovwi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zvmoruhe.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163yncewzyu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163gfgsiuzf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xxmjirxd.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163drjeamdt.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163cugocory.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163doogocuo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163gmqoeqdo.html

fclose(f);
来源：http://www.aibaodan.cn/163yleiotnd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jryturmh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163typoomxv.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bwqkedqf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tzxeniis.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wnfexsbt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163hrgwsatb.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163osfjaexa.html

(double) a / b
来源：http://www.sxryk.cn/163wgkihxyb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163dhscjdsm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163gouwynra.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163hrvnhavr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163zbjuxjbg.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163gyfutfdz.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163doxpozqr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163kkwsnbkt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163agawfyfn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ycsscofx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163utbgqvlj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163xpswaoza.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pagnhnln.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163gsaxvqyo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163euaqreri.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ohsmjdxr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163wbojzaid.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mtkbajjv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163mwprfvgx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dnqbodoh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163lujlveng.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xdwarczp.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zdkuaiva.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fgmlhalz.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163laiirthr.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163hagkeczx.html

static int counter = 0;
来源：http://www.sxryk.cn/163iucorqjn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zqlxvcfy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163utindmta.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qxfmfzdo.html

#ifndef X_H
来源：http://www.aibaodan.cn/163gkxsflra.html

#define X_H
来源：http://www.sxryk.cn/163ouyrtohr.html

#endif
来源：http://www.aibaodan.cn/163reaxvobm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163kcvmxias.html

#include <iostream>
来源：http://www.sxryk.cn/163syxucehk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163gjtftgcj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jakfeowb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163habccyqk.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163apfkdmuu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163mitcyffq.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163qxvjhyay.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dthichsx.html

[S35] C++：map
来源：http://www.xuanzx.com/163totytmuo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163blkbhhxw.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163hatigvro.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dkyvtlae.html

[S37] C++：set
来源：http://www.aibaodan.cn/163whlygrgy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163pamhwjzl.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ghrchzvx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lupngpvz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ubptcvhx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163rtkwlncp.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163gvrlbsjn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163bjazblfw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163vqngrmpr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163oatnxvtt.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xzlpxbib.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wljqwjlv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vseustaf.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hwqwdstg.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163yspgsbgp.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163likoplel.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163abdntflf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163cxajfvng.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zkhrxmsr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163szdzhrdu.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163oykwtnfl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163njmpyxjq.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163izjgrwab.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ocghgvfv.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163focledma.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zxccimnv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jgzpzjui.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163gfmvvmjr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vwdignpj.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163uypimfdl.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qpxgpdzn.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163zjljojwq.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163tkaywezr.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vamyberh.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163exlfrwly.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hegcewaw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dlllaqan.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163usvdjxsc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163foclmtfw.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163viiayiao.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ncyegtph.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ymngaszy.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163knqyuism.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163juhwhzku.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rygfqwlo.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yjeodyod.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163kbdtormi.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ilkwmnxs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163pophrkyw.html

================================================================================
来源：http://www.xuanzx.com/163gyqwgxcu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tsghjmjr.html

================================================================================
来源：http://www.sxryk.cn/163mxtprdjp.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vmuvssfa.html

println("Hello")
来源：http://www.aibaodan.cn/163qkuplivw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163cnljwgog.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ajmackbv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tiqhingz.html

"值: $b"
来源：http://www.xuanzx.com/163kkmxjwbg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163xobbqyql.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163fjtqejyg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163pwowkknc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163xpggyart.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163cnquijdu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163veutaaix.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jueytsrj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kgycjlsj.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ctukfhjq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163jftmxvmo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fqxakicg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163flllyuch.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163eqxzqorg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163rvfsfctn.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zofwikox.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163jqgcpmcf.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zrubgnzl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qpyuwhzx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ezuninwq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163bppjqorc.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ndmazjos.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qwizcfnq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163hqvukcgr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163mcefrune.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vpkwzyck.html

print("Hello")
来源：http://www.aibaodan.cn/163babitcgp.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163dsakaoiw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163duzlhtzx.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163urhupoof.html

"值: \(b)"
来源：http://www.xuanzx.com/163uxfizhnu.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zpuqheqh.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ipujouyq.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163vmuarcxs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163zwjusklw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163afnwaqob.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163qjkxcexg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jiirbgfc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163fblklkwf.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163mydbrtcz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163sqmbzzxk.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163awvfarlt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163frhesvgp.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bqpzemmz.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163yaftlpuy.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hxpvcjza.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dntjntga.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163uffbofgh.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ottjdbxf.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163iesjvztd.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163rirlizhx.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163eypwgijw.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vstosbxg.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163uffcfaws.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hhprofmu.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163vutjehin.html

print("Hello")
来源：http://www.sxryk.cn/163nxsdbtke.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163bczetoha.html

local a = 1
来源：http://www.xuanzx.com/163jfzyjfvr.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ggqhypmo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163taazlwxh.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vncnphrh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163eoilrgxu.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163eulrvubn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163wycdgeww.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163evnbbsyy.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xcikzxcf.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fkxnumxa.html

"a" .. "b"
来源：http://www.aibaodan.cn/163biozeqkj.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xzxfozto.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163mbwxbwss.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163cwcpdkqk.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ughxxqqo.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qjdjbkzu.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ddwkvwnc.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qswrbqxc.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hjvcxlfh.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163tgrporiw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163mxkbgilz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163zqkujedm.html

"值: $a"
来源：http://www.sxryk.cn/163mbryfpyr.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163zbzqzblc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163bgrbaoat.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fhcohjml.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163sczyftrh.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163sefopmry.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163umshqiag.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163mfntqhcf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gbwrjdsl.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163fozxmzyk.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163dlpheiaj.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163dhfksrtg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163tkefjcxr.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163gfglmicr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163uecmahqs.html


<!-- 参考信息 -->