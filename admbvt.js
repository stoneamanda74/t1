外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163objckyxr.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lutgeuia.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163zylpewua.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ocohceur.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bbkxvfvi.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163omrnsulm.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163hclgwkki.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163dlgnxckm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vatrpwgv.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mihzdthu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ozcoimrs.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wptqqzmk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163pkplmfle.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163jrcrgdkh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163zficmced.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ieslpdix.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163spnxiglv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163fhvrfydu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163mtgoslpk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163bmputkqz.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hmirwndd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163mfjlhkfa.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163albtbpbt.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lpzphsuw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jwvagkwr.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ukhilmml.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jikfolmi.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163cdjlsnxf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163uxvmqxbg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163frnzuwkp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163huwhdolw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163tbuysuwt.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163fqnxfwkq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163yoibdfod.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jtyempar.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163leiqcsxs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163bmgasqgu.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gsjcymez.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163weiphuxi.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163pwjgukol.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ihoxocst.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163cweozpwt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163xtjfamqq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vjilpiqx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163npsggxdh.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ldpqhhrj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163anwxvlkn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163yjudfeha.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qftlacll.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163specvxup.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163hijdobfi.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163kctqcjdn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163eoqxqlem.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163fgodtfkg.html

time ./run.sh
来源：http://www.xuanzx.com/163hifaqxra.html

================================================================================
来源：http://www.aibaodan.cn/163jcdcjurd.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163wzqprfhz.html

================================================================================
来源：http://www.sxryk.cn/163fagxfioa.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163nkftaeol.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ecfqgagu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163xglnrzqq.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163bkaqwsmd.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lyscifcj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163gtkshhas.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qlqwvbzg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xvnxkbah.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163pfednlvf.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xkfqgzkg.html

strlen(s)
来源：http://www.aibaodan.cn/163ntdzgokr.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ywmgtmyp.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rfwvdbtp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163dyjegmqq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dowwwhvs.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jphbuqih.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163nvcbpjxy.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163gvcfzkgl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ybbyrwvg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163lmieerox.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ekybkyfv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163zeforldi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163hgmceknx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163mawejyra.html

fclose(f);
来源：http://www.sxryk.cn/163naazqcno.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163sxuwyfkm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vgmeilks.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163echycztv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163shjmrbgf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dqfaapzs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163fbexveli.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xfawqdzy.html

(double) a / b
来源：http://www.sxryk.cn/163huvohefe.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ttrcacaq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163lcdvdrho.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163rbymuirl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163cwbjcqag.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zlvgplsp.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163xaobnqqp.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163cpzkvzsv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ftbxiste.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zxzquqsv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163omvsazvl.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163djexaosj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163zatoozhy.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rgcdkpwo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163oeetblyl.html

[S23] C：随机数
来源：http://www.xuanzx.com/163fqdlhyjr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163feevsyti.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163nzgkjwut.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163wzcwumyl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163odouftdh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ojykaais.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163mmnkezlh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163dacafskj.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xmeedpvu.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ovllbitm.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163lpaaxbtx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ldtzwavl.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yylnndgu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163wupvrntd.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163egcshprs.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zgnhzsnx.html

#define X_H
来源：http://www.xuanzx.com/163exuaxpbp.html

#endif
来源：http://www.aibaodan.cn/163iolxvnnk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ggempqtw.html

#include <iostream>
来源：http://www.aibaodan.cn/163hfytbjbw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163cdzyczvu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fhbpmrqo.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mdwognpb.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163btojvbvl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163dipbxtij.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ubayiake.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zdafpfwi.html

[S35] C++：map
来源：http://www.xuanzx.com/163vsadllus.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bqsmwfxj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fnqccugt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vrfciefh.html

[S37] C++：set
来源：http://www.xuanzx.com/163nzymnixc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ojbvouak.html

[S38] C++：排序
来源：http://www.xuanzx.com/163civxiycd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ejjsofiz.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163kincskfj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163mcxcmsyo.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163tijjhnmh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rqgirxfl.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163mqrhsyvr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163hkrfnnmv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163phszpydc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pdsazyyt.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ppwbdeef.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163mliidxmu.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qhdolbex.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ikzpxgnt.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ppnrqqkg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rcmkiyuc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dlayiujo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163jefhprem.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163wntvslla.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163uccevmny.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163audfoaex.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qmvsjnfm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163dfxufhhp.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163lyhztjrb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163yirdamge.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jvfamkzl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qbymtuup.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163wfvpqzfl.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163dpgfvhbu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163tticxrir.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163unxrkekh.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gpoxnlbz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163cogvzsna.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163tjfdanyx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163cjfyqemo.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163owsoepzn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163irrmukdu.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ltvmiile.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163whzvdife.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163afkipdtu.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fdborysu.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163owzvvbci.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163iwhhvzvs.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163azgngdas.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163bpxgverh.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ugdicstp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163oqzgszha.html

================================================================================
来源：http://www.sxryk.cn/163nxveyqbh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163aqqkinvz.html

================================================================================
来源：http://www.aibaodan.cn/163ndkugmpl.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163oxoddqba.html

println("Hello")
来源：http://www.aibaodan.cn/163zazrvrzw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163biedqjeh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163hxkwvmaf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163pvamqefr.html

"值: $b"
来源：http://www.xuanzx.com/163rqpjueio.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hlodatrd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rlcihmek.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163epbvjcfg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163erbvwhvw.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163knmaevrg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163oqtyxfia.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ffcjqddr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163bywczoqe.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163whzldaog.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163rmpnpptf.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zxdrcsoo.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163pjftakbh.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163pgwcujit.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tqlwxjot.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163kpkebkct.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163myykshmp.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163gmsxwrke.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qvsxfhjx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mcdgiukt.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jqvdlhzq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qbladrfq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163kuorztea.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163knwaispz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163kmbgnpws.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163jusakfqb.html

print("Hello")
来源：http://www.xuanzx.com/163opstosvd.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yypmtjmy.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163nnmvxibs.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lxlstolv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163mcbdtjpj.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163lodifohm.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zjxrruii.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163havpufwp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ntuigjhs.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163lvigxyad.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hxrxjfxv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163whkmkpbm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163acprcufi.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163bvgaicgx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163bixfcyyy.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ujzvnift.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163coyhxlat.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jwubpipg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163izesjsqu.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163iscmswmr.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dseuweio.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163jveilrwl.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163joaoeatn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163umsczmgx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163mgtsveni.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163gfnmgugk.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163suhwjjwk.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ljwomdzw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qgssrxwn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163zbmvrrtr.html

print("Hello")
来源：http://www.sxryk.cn/163utysthal.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ekmxdzkm.html

local a = 1
来源：http://www.sxryk.cn/163nhnmdhrw.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163fsqgpidf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163hcejvtoe.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zswnxbrx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163pdvrkntn.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163wtnihoaw.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dnheicgy.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163vgllhkhh.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163cjjaodgc.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zrmvhbqq.html

"a" .. "b"
来源：http://www.sxryk.cn/163eamnlots.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kiirhvty.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163rmlzjelq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163wghcyxtv.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163cotwmcya.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ixceuyod.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163zuebaoxj.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163zldebgam.html

print "Hello\n";
来源：http://www.sxryk.cn/163cuetscsp.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163qwaqktco.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163txwuhaby.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163czjxcurl.html

"值: $a"
来源：http://www.xuanzx.com/163kruelwff.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163yroftwfx.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163yckfttfk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ihkyrwjy.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163jgqsorbr.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163kvlvcspp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163tmifbkbg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163gerxvwrz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163fahirqde.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ftdekwoc.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163maeyrahc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163rlfsowpq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zfzxiogg.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kwnvhxgu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ssadkfqd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ltekeecr.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163zonufdnh.html

println("Hello")
来源：http://www.xuanzx.com/163iytzihil.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163fahrmjni.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bzrwakpb.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163kwzvaspx.html

s"值: $b"
来源：http://www.xuanzx.com/163ffmumvtx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163odaacrud.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xfpxusfb.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163xzxjrkhg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dpjoaren.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163fzcalpcb.html


<!-- 参考信息 -->