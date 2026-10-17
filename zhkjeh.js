外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163igrfpujs.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ujihpnng.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163znhgkpor.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rrulxkny.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163rphrloku.html

[R50] awk 求和
来源：http://www.sxryk.cn/163iqmaedhn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jezkkjlm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163dczktviw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163cocguhyp.html

[R52] 统计行数
来源：http://www.xuanzx.com/163gudvakmj.html

wc -l a.txt
来源：http://www.sxryk.cn/163xmruujln.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163eovzlsqr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kduoxngw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fzogbrrc.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vtcwmfvj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163dgyxviay.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163zehfkjhg.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163aisbqcxy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rsvwexjl.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163rbcswkpf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jnytsphb.html

[R58] 下载文件
来源：http://www.sxryk.cn/163reprlchr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163rosdpvvc.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ufhtaodd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163twtcuxsu.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zrfsixnd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163uspyfijz.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qkibyobd.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163frydywuw.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163aaejtrjv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163sdsusyiw.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163livakqzd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163lgqpjilf.html

[R64] 结束进程
来源：http://www.xuanzx.com/163emcxysxe.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163shlfuphp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163tllggbxh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qgqjvylq.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163janojjuy.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163kejlghxl.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jzdychyv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nqvbydvz.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163duazagiz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163lrmzlijw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pnyebzhc.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163uldmgdmr.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mcjxbijq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163amsfawuv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163dejveeqi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ieslwrmt.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bmwrtdfw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rufwrujq.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ytuunfnb.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163soxlvvrm.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163posjdyoi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163nseriaii.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ljtuzhyp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163exiawxlf.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xqaxffac.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163roonsjzr.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fptailtj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lwrvwrww.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163apqnvdzu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163xqlmodxq.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zcwdonzg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163txqtguoa.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163aavnugjy.html

time ./run.sh
来源：http://www.xuanzx.com/163ugnrxyie.html

================================================================================
来源：http://www.xuanzx.com/163llwijgwh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pwkvftja.html

================================================================================
来源：http://www.aibaodan.cn/163kdkrebis.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mcrjtzhq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163uyiszlsm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163nfbtmism.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ngkfnlwv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163uevktdwx.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163yugdakgh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163shhodptp.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163azsxqjbg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nnijvemw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mccxxghv.html

strlen(s)
来源：http://www.xuanzx.com/163foligkml.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163pgjynxdu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pnasmmda.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163engvmtyp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163rfuoquax.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163gsqhbcqt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163lemrryjg.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163kcopcsxx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hvdvcwzb.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163vcjjpuwq.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163zfxcatev.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163iovgvama.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fdosiwro.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163pxyhzzxi.html

fclose(f);
来源：http://www.xuanzx.com/163sfdhvgrp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163krzwddij.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163yqwnlptj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163mxepmhuu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163drjhdxnw.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hwizsiep.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zrrpbbhz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163misgblpe.html

(double) a / b
来源：http://www.xuanzx.com/163ixuxirrb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vylilfav.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163hivniwsb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kxfihiig.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163tjxfpkow.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163dophcvgf.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163njgkacoy.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163asubhvxe.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lergypnf.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fxekczoq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dqrvlfoq.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163iouewjhw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pejgbzet.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163vsojkedg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vqtmfrqx.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163nsgngvqy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163scexneom.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163pdkietft.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163sjqcqajn.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163rndcknti.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lcrrkrlc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vvbbbqfr.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163mqiiwxwv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163dgjwbpjl.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ctzpqtik.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ntelfguw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163deppdnec.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163fuylcdtu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163rewwmxwx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qelnwepu.html

#ifndef X_H
来源：http://www.xuanzx.com/163ppkxjdvs.html

#define X_H
来源：http://www.sxryk.cn/163vsozygfd.html

#endif
来源：http://www.xuanzx.com/163rczvvohs.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163flnxpkeu.html

#include <iostream>
来源：http://www.xuanzx.com/163frjfxaxa.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163lqjnafhm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163knybmaqr.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163etecjutv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163utqacdgp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pfhjzgyq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163awturpac.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163hkohtvex.html

[S35] C++：map
来源：http://www.xuanzx.com/163czvelshn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ytvyuxmo.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fqpnnixt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lgwkhnzx.html

[S37] C++：set
来源：http://www.sxryk.cn/163wwvctymd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163eoougzyc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163mlbdqbxv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163eqekdepm.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163oyjcdgka.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163mbpzvfmr.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163aaeqxlws.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wghrlbyh.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163cdbmimqd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qsixkpjc.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hrljpvhq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163aqhpfqzc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xbzhhfwj.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163bilpgotq.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vdzxjequ.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ivserekk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mdlkrafa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163vjqogwdy.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163gouorhxr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ngffmocv.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163tjpacgsi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163dsivhxzh.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163mruudhqn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163woljhjwx.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163apdvccue.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163qwpbfhwb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nldsivvl.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ipsoyfhn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163rbughrfk.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ucpfhaxb.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163pschtbxh.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ujwmnqht.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163clxtzgme.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163anjoblvf.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163kyegjxxq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wkfqlons.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kikqfekl.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163puybrpiq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163zdsbwtjl.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ptsbdngo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163uvjjdqxr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163gmpuckhw.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hhnqvdam.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hxkwacrz.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163bturaoxs.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163poskgvny.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xkodgypy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163difcjuce.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163opzltnwm.html

================================================================================
来源：http://www.aibaodan.cn/163kpyawdgn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163smipxrbr.html

================================================================================
来源：http://www.sxryk.cn/163dfjkwqot.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163viojxpde.html

println("Hello")
来源：http://www.xuanzx.com/163yxsilojw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rjlyueky.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xnicmyut.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163czozaafi.html

"值: $b"
来源：http://www.aibaodan.cn/163iykndres.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qkbviwxy.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ndvoxwbg.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ykzcsmzc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hnmywqdr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163nmtsddgn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163gadvztpt.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163acizvrtp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vzupnpnc.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163luvecrwt.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ecmilzpj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163rrwzvcnr.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ejbgcnay.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ufvpyyhy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163zvdkbwfb.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zriltgfs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hemmmloc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163yehgsawq.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ollningf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mzjrkyis.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163zcdipigp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163bahhdgye.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163usibwvkf.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163orrltmco.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163pxcsyvhb.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163htczjkjc.html

print("Hello")
来源：http://www.aibaodan.cn/163wcwpjdbk.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163qvofybdd.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ztntnqyc.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163odzfvoqx.html

"值: \(b)"
来源：http://www.sxryk.cn/163zyysmvag.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tkvfqyme.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163daseybfu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163nchqjobr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ekkbnzzq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nprgphej.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163nflznueb.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163cumqdehs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163oubftwuo.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163seicqmgf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xkhmijkx.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163rmymvaos.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163sgpuzldk.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163fnjhauwi.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163hrtwwspp.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vfnetwyb.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163raohkona.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163svugefcr.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163mlwibjyi.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163inokbkte.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163yrimyuqr.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ehdtvjzo.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163bbtmqqyl.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qtaattry.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163extcogiy.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163mefdwsqt.html

print("Hello")
来源：http://www.aibaodan.cn/163zcpaexkt.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163slgwlxyt.html

local a = 1
来源：http://www.sxryk.cn/163ioafjmrq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163gkfghxix.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163fzbkmlbu.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163fusruouc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fsnjdxlb.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163dfagejot.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163fjxnllxr.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wqukeetk.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163hrcdfvvb.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163krghfhma.html

"a" .. "b"
来源：http://www.aibaodan.cn/163lauevdaa.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163xxcupmju.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163unyljdos.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163cgjvijkl.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163yqzzmxwx.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163zvjlwhsf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163qwxnjund.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163lgjxzorw.html

print "Hello\n";
来源：http://www.xuanzx.com/163cfwejrjl.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163slzhgtbn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163efjuadhg.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163gzelwpxm.html

"值: $a"
来源：http://www.xuanzx.com/163gxwhoovh.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ssivcnhy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163amuajkwu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163yjotljgz.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163jvrufmtz.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163gbsuhwxj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163qwsczlbx.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163faeucslb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163dmshtdoy.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163liucuyhn.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ohrjkccd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163vaecirqz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163sfdzyddd.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kzcvokvd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163cjiycyys.html


<!-- 参考信息 -->