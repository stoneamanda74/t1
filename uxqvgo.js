外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nhprstcs.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163dedngkas.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163atjctpls.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rakkftuo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163jainakaj.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lxwemqjz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163htvlrmge.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dcdjfaqn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163hnawqkrv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163luxvplus.html

wc -l a.txt
来源：http://www.xuanzx.com/163gebgbfnp.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163tnblcpkf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163fvpthrjb.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163jfklbsji.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163lqbetijh.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163cqjhovbp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163eeyqcayy.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qofldvdl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ojgiikfa.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163lkufwtar.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jaaluzvs.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ccmkqbsc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nhdcizvw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zpmbyxjc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163krojwyka.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163fkuycnut.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xdgacjjy.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xieictqt.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163rxcecifm.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kedhapmt.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ieecyeki.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163uoctxsfb.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mwhvvmwr.html

[R64] 结束进程
来源：http://www.sxryk.cn/163jzkxazyx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163yscxkeub.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163cnqgzmbj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163livbykbu.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qkljzsfi.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tpyjgona.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163shmakkql.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ctysyhtr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163vrtxfedp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163laowobou.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163pdrdqspm.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jmmldrcu.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163kvqcnywj.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163imidtgxj.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vtsjzdfg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163znejbrqn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ayetqbyy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rssosnig.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163alkoueiq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163xwqqcjxi.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rexqwzzj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mzkpclfw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sxkttfti.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163onuflqcw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163iepubfws.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dwzcejne.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163qwjjtron.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kmmfgyfh.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163rfhiaicq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163qmpfdnkm.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163mwwogazc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jhevuazk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163bxuyficf.html

time ./run.sh
来源：http://www.xuanzx.com/163yadojaln.html

================================================================================
来源：http://www.aibaodan.cn/163kpqjxjpe.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163iirtgwtx.html

================================================================================
来源：http://www.xuanzx.com/163wyatbfcv.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163srczwjdq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163uemqiwps.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wyvawzpg.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mwjfiwme.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163mdijfemx.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163chcprzqm.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wdayaekq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163wiycskuo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nluplwqs.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163hzgsgwkm.html

strlen(s)
来源：http://www.sxryk.cn/163uqpfgsbk.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vlqyximj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163zmsyspih.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163bjffhyvh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163xeonlaha.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163nnxajlmt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163adouiywo.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163gjoheimz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rqkwlgrv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163iegzlmcg.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163eurtfuho.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163oulypqjy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163viluypye.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163rpdikuqo.html

fclose(f);
来源：http://www.aibaodan.cn/163tinlxoox.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hpbtiwjf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163lrfyfqct.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163cnhnbdws.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163tuowbpae.html

[S14] C：枚举
来源：http://www.sxryk.cn/163hvkzzizq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163krbcaobk.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163abmolrrj.html

(double) a / b
来源：http://www.xuanzx.com/163jbnnrmox.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qnmmnlsy.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163wsciaosu.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163zhczbblq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163tqyvaiwu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xpatcume.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ckxylbar.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163prwbmrzz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163llcozanq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163onvensec.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wxjfqzpc.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163bdjanpui.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163fewdrtbz.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163repomoxa.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163kzrjfcfg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163nlzhxfrd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rhsjxbxw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rxmdzrhs.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163izyjjhfk.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163sywgxkdb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163iexuswyc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163yjujmrdh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163okmbnanh.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163rqrfczyo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ggsjvxsu.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163lwpeartn.html

static int counter = 0;
来源：http://www.xuanzx.com/163dexyafnb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163sbabnlhu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163xgeuhjxx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ruflnhuf.html

#ifndef X_H
来源：http://www.sxryk.cn/163kztwwisn.html

#define X_H
来源：http://www.xuanzx.com/163jklmfouo.html

#endif
来源：http://www.aibaodan.cn/163ezufiasa.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ecfacghm.html

#include <iostream>
来源：http://www.xuanzx.com/163piltvykk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gynhhpuy.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163oyjwvgys.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lagrudka.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ynfkslkg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ahfnyjus.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163uwmhdwul.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163maxswsrx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163rkdxmjzg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hyveghih.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163domdmzit.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163oslqzwbp.html

[S37] C++：set
来源：http://www.sxryk.cn/163owdhdztc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163brorbkuc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wymyskpi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rlnnaiwj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163pxuataoi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163oaanzaty.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163lnushmtd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163jkzbmnzy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ffupudro.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163stbbqcux.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vlpzsljo.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163uyitykhb.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ermkfcnv.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ytdbkfvi.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163babhcqir.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ddfrbqxf.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vbrvdkby.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yinzgpmi.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163gbsythgi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163gakdivsn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163pepusvva.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ybsfwsbi.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163shsxfpwy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163yejdhpfp.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163nkxzbozd.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wssjxlvq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jzktcipo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jamzwgtt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dgnopvqg.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163hyajapdo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yudnuimj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lgcjadvk.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163osjameqx.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163skjsbbub.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163xmoxvjyr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163tnfvuanx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ejofvwfb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ybdjirau.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163zsvgrfgm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lfkysmqk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163yypqhjch.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nninkrbb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163rmowxsvn.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ddpmgvay.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wfbjgkms.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163irjyoubu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163yjidarsa.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163zkmmoyzl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kgjkuauq.html

================================================================================
来源：http://www.sxryk.cn/163rrblcujx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163uevbzgvn.html

================================================================================
来源：http://www.aibaodan.cn/163snzobbge.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163nftnoewz.html

println("Hello")
来源：http://www.sxryk.cn/163ytwlftsy.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163pimxhrtd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wjbzaszv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163bsyndfrc.html

"值: $b"
来源：http://www.aibaodan.cn/163dxohrodk.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hueylwpe.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163inlndlmk.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163jriefxpa.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163yrzjkeob.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163balzzibd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wotfyziw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ibulntmh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163huvgqlcr.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163glhnlalg.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163emcjuyic.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163xwarqgty.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163gonyqprg.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163skrwudga.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163fsgndalc.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163bwlxwret.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163tewydome.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163bgwfytkz.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163hnkwfdob.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163irepbdxm.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rhhyqyog.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qdcsivhq.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163swfnixhv.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rltikwnu.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163eacwjbab.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163sugsscvr.html

print("Hello")
来源：http://www.xuanzx.com/163uivoabix.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rfubsoqx.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163uwzwlfrn.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163wlmxpftx.html

"值: \(b)"
来源：http://www.sxryk.cn/163kpdjtque.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163jqvuzwna.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163lovieesv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qgdeknsx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fyscnfto.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163alpacaip.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163pgsbylsa.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163sdgsrfuh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dufiiyjd.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xfljgtkh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163kkpzxxhi.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xxwjlmge.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163uzowkqaa.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ajwnkwvc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163kmjuspqh.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163dumcxplp.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163tttvjwhd.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163wknxiknf.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163epcgodjk.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163mddeiufj.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163vaebjsoi.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vvdgiwgo.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163yptuczfc.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163kcudtzxg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mewyxily.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nbsthyol.html

print("Hello")
来源：http://www.sxryk.cn/163ymggwjry.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163tcjlyqdf.html

local a = 1
来源：http://www.xuanzx.com/163wjheqfoq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163dnpxqvbd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163oekvjplv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163sfibizpu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mlmupwxe.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163pdmdgklp.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ogaiiisy.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ndovdvpm.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ukklfjxu.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163jbzorivh.html

"a" .. "b"
来源：http://www.xuanzx.com/163sdntvkca.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kgbmdtle.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qctrduhk.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163xktwwdtl.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163gpccgylj.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163cksccofi.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163gorpprjf.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tofpsqab.html

print "Hello\n";
来源：http://www.aibaodan.cn/163gestfbdw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163yhlhcqnx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163pqqbqgjw.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163zdoyczdd.html

"值: $a"
来源：http://www.sxryk.cn/163vqcjiwea.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ebsdgjxp.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163isjpbwhi.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163zykcxjxf.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163uzgowoxs.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163mheeriay.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163gvuhthis.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bggaytqn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163bvnxhedq.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163fzcqedgs.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163goqingea.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163lccgezef.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ndypeweq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163lbcnmxwn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jjsctxvi.html


<!-- 参考信息 -->