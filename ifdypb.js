外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163gxwoeyng.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163zpompanq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163uryhxtek.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rcsayzbh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ohicyjof.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hqrvneub.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163srqezqwu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163buntjzgb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163rlkevjuo.html

[R52] 统计行数
来源：http://www.xuanzx.com/163yhqkwgom.html

wc -l a.txt
来源：http://www.xuanzx.com/163dxsjohza.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163hjghxzrr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ziweyfig.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163eiiojepf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163vndrhxva.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163bprtpwey.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163apmihevp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163pueslceo.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163perhbgll.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163oegofach.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163czvhbxwj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ugtjfydb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163gqevpaky.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163eqypbkqu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163whcyqxjk.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163fkftuzyv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163tuhjngmu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163imhsbefo.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163jmgyafsp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163meugseit.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163dvmcanoz.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163olgcvxpz.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163atsvxgvc.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lfofjozf.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163omlxhigs.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163eotkttlq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ejzllgvh.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vzofaqqs.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hffcpuqd.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wnanvqpp.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jpyenfer.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163dionqnkw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163tszvbylp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163vumwnscx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163talxuatm.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163eawiisbh.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qbetaaex.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qeinpbjz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gvzjkwke.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163zmrrdkbf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163esteggzg.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fiizelgr.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hvnggdlu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163iebcpiah.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163tacyloos.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gmstanzv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163obaxszxk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163amxephdn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163graxjzxz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163mstyoctg.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163lzjivevz.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163urylzyav.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163lcauwrch.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163fwwfswsv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163cqgwohik.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xkwmkwjn.html

time ./run.sh
来源：http://www.aibaodan.cn/163nsnlipse.html

================================================================================
来源：http://www.aibaodan.cn/163vvkdnczd.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kzvlbsnw.html

================================================================================
来源：http://www.aibaodan.cn/163juyywieg.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163orwuyzhi.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163anfjjgtk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163fddczuer.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163tinulpdc.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bikwxxgu.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163swybrifv.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wpxighmr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163jqouxldj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tgyrhowm.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163xkifbhko.html

strlen(s)
来源：http://www.sxryk.cn/163klfonxho.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163gubynyjb.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163zjqzekme.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163nlatacqw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163qkbktbbm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163xlwmprzy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qvnmbqiw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dkajygku.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jqmweyyr.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163waguupxt.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163txtgzwlz.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xtkjvicj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qslzlmjr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163mhgpiicg.html

fclose(f);
来源：http://www.xuanzx.com/163euakjkty.html

[S12] C：写文件
来源：http://www.xuanzx.com/163smgqimls.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mshozjta.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163hoqqjxwh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163gvlzkzpe.html

[S14] C：枚举
来源：http://www.sxryk.cn/163enihonjq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163rctpworz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163sbypgcbf.html

(double) a / b
来源：http://www.aibaodan.cn/163crxnncxr.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vkvmygrn.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163cvswhpqm.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nsqtawle.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163yxkzhrhv.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163nkrdvqom.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zkgyeeqy.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163pyakyqoj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xiyxppqv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163cfbstqsn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163apehkqbk.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163vzgfrkvd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163smxnnszn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ctvtvfnb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ptzhoixf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vfofrzsk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163eyuobhxy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163fpuwmyek.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163wultgmny.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163wnvhtwoq.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ktbiczsf.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ofpcyfpd.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163nkwfvgfh.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163aebbkrwb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163cszgzuyx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ezffkmtx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163poqhvexb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pudttixf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163whbfboxp.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163gssdphlm.html

#ifndef X_H
来源：http://www.xuanzx.com/163nywkazfh.html

#define X_H
来源：http://www.aibaodan.cn/163zbjqwqcz.html

#endif
来源：http://www.sxryk.cn/163omvautjw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qbeahomc.html

#include <iostream>
来源：http://www.sxryk.cn/163qjsqbuvb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dtrcnnjp.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kycburhl.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163drdnkpsx.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163icfbyxbf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vsfjryvj.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163kinhzzlw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163yhazpeca.html

[S35] C++：map
来源：http://www.aibaodan.cn/163soiovcwb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uikcgooh.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163izhcthsg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nycevyxk.html

[S37] C++：set
来源：http://www.sxryk.cn/163ofhpvmap.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163loqvyjke.html

[S38] C++：排序
来源：http://www.xuanzx.com/163elgjwcdq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vkpbpfmt.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163swmtugcy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163cspsghef.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jqxqxpsj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163mzcafdqh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wwbafhfp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163sgampclo.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qdlcmsje.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163cnvmmvmb.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zuepcibd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163spgtxpya.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hgtjogru.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lyqjymfb.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cpwetxwq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cqghmtft.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163zlybldep.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163mgnbhwst.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163logkahmw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163eyfrngif.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163vjjnazqu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163laoaatgd.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ouvamqds.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163asddoelb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163oaczytbu.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kykqefqp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pzthqyrl.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163boagdxie.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163sgfxrcmz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163crsnzqww.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qdeghhcv.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163dhhgmrdj.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jnjanbzt.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163oohubqqc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163cbgudgmd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rwguhwun.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163jjawysoz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pkwldzbr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ufzltikl.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163sjgarckg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yratlvce.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ewueurby.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163waqkgutm.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163uqclxsha.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163oozlmacu.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xsbdyabt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163csoelfiu.html

================================================================================
来源：http://www.sxryk.cn/163ovdwfokz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163cqghnukb.html

================================================================================
来源：http://www.sxryk.cn/163ojbppzlx.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kpbwsfiz.html

println("Hello")
来源：http://www.aibaodan.cn/163dyteheyv.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163nppiyvxn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163piastyes.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163soltegxj.html

"值: $b"
来源：http://www.xuanzx.com/163opnryveb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163aflaixri.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ucpqewqk.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163brcppgia.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163seuhwcda.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163pdfldmok.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163yivmctxd.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163zhqivqdt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163qhrkapsa.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fhbeljhb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163edzxujlq.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163upkcpvbl.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163lizkliso.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163swvkcoux.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163utaoipbe.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163vmrmjman.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163axsfuiav.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ymiyjscw.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bcxchmec.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ksrwxscl.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rtvsemmb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zvsfqapk.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xmfvomra.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163fxxexupa.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xvhbwcsz.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163privwcgz.html

print("Hello")
来源：http://www.sxryk.cn/163ebjdhkjc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163tmoldvop.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ssxeovyc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ysttigcw.html

"值: \(b)"
来源：http://www.sxryk.cn/163vosmqvxw.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ndunnafe.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163wstfjstj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163xqotiqpg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163kbommozq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ufajstfd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xzjziayh.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163lcdexxjg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163sdprhjjc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163arjvyzvf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163nmswufpu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vxyzyjxe.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163vxdmgqav.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163phiuahtl.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163xfcvwnoq.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163jtgryhih.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163osilszjz.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ryfcskds.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163bgcsuyns.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163egdonweg.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163duxjjzsk.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163leauiklv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163dewraeyh.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163uputprnx.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163goxbrdqp.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163mymuesxe.html

print("Hello")
来源：http://www.sxryk.cn/163yanzmlyh.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163qelvtbfc.html

local a = 1
来源：http://www.aibaodan.cn/163mjasxwls.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163csptqvqj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rczlouhm.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163qehqyjof.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yciemqjx.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163bgfyyigt.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163bpqbgbhp.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ewmsxdpp.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163gdeqigto.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163irqldcqb.html

"a" .. "b"
来源：http://www.xuanzx.com/163yzwrexfw.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tzhdvhxv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163pwdjtzxp.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163uknncjhr.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163bayzylqi.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163hbgtyjnj.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163pzhtprum.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tzecznvc.html

print "Hello\n";
来源：http://www.sxryk.cn/163infabmam.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163fqekraec.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163zfejkszk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vatlpztl.html

"值: $a"
来源：http://www.aibaodan.cn/163gtvghgwm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163uesxybyf.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163lfsosrpp.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163nsabrwba.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163zskfxpoj.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163wkxpepvw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163sortgebc.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163yljdqqzx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163wauuhskg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163sgkirfax.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163tucsgzez.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163rkiuivdn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hkstvaui.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wexceocw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163capychyh.html


<!-- 参考信息 -->