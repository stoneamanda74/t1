外链999!wailian999！

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163egjijray.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163urobhefv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dfmkduxg.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163dpszkvxz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163blqizsdg.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lpizjgjs.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163wnewzqvc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163tinilhmk.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ftkqbqxq.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163lagbhdzh.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163gdqkjzsd.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bvknvgcy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163aizqboqi.html

[R66] 定时任务
来源：http://www.xuanzx.com/163viawrlut.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163cgiqpzdg.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gblvetzv.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ypkhcobh.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163zofwpvyw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163gsjpwnrv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163tzupsppe.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163shltzkbm.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rbxsweae.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xqcnyjbs.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ghfugqya.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163nvmtnvab.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163irdioqeg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ccceyjfa.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163rceaaynk.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jdouhrxt.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163mhpbqkhx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163qvquoyne.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163uuocryow.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163beqcdsxn.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163kddcvzsc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zaalekiu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163eatvlmpa.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163omeczmfw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163engjwpyp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163rfainhyg.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163wnjgpcvd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kvbbfilu.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163bwenacun.html

time ./run.sh
来源：http://www.xuanzx.com/163ctrytcpf.html

================================================================================
来源：http://www.aibaodan.cn/163vmhoqhmq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xsevkupe.html

================================================================================
来源：http://www.aibaodan.cn/163ckomqzzn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163npieirrd.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jippuekw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163nwctyzuk.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163enrmuwlk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163gbyivowe.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kqmckdrc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163klejuqmv.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163pxidrnqm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163phxvdasv.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zcnglbug.html

strlen(s)
来源：http://www.aibaodan.cn/163dbkkphka.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163xywipaqb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fdgtqcbs.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163mvgsmdyt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cdebwqds.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jdnuclib.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163snetbukw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ftjsyroe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qihjrwdj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zmobmkpw.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163jlnpazpo.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ndmjymmw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163gvvhefud.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163kbjmpvqa.html

fclose(f);
来源：http://www.aibaodan.cn/163izueefca.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ntmehjuw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163armzegai.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163urqkevty.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ffqtcomc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rvoxnyhz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mpphlden.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163tsjmuknb.html

(double) a / b
来源：http://www.aibaodan.cn/163bhuxtdih.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hptbktvx.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ktzrtiem.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bsgkjbpf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ylkswbxw.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jsdtudvn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163nfrhwnoc.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163nawigark.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wfeacmsf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ebnhicyi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wtvigoxu.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163chwqugdf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163husblvco.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wrxtrucg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ukgommij.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jawiezlt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163zyohmtum.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jnztziwg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jvpdxict.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163iqsgcsma.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163cizqlhhk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163gjbtgzov.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qkqfguef.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163pwynrfqr.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vneqvzok.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163pntfzkzg.html

static int counter = 0;
来源：http://www.xuanzx.com/163ylteoiaa.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163szwdfrae.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zvnsnsjk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163rxdxhlqh.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ofmxdvdh.html

#define X_H
来源：http://www.aibaodan.cn/163nsrljpna.html

#endif
来源：http://www.aibaodan.cn/163jdxqskul.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163nzdgnebd.html

#include <iostream>
来源：http://www.sxryk.cn/163kzkjootn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dqoqcpcu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jqeszbpc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mfxuqkkm.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163vecbjblo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jhsiwxjr.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163owltluzt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163yxxerxkj.html

[S35] C++：map
来源：http://www.sxryk.cn/163otnlboxx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163txntrwtd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163kzjbqimw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cwmjlcqm.html

[S37] C++：set
来源：http://www.sxryk.cn/163bntfwkgf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bunollgs.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ljmzngpi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163orxrgnub.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163phyboxlk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163dpnzxxie.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ycypqztd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163nysnaadj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163qtgotqua.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163kcwwmgnb.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163oobawuuk.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kexwqevj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ziuwvmfs.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163dstiznzh.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163nobbpxbd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163evuknxbg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163tpmxwjlx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163hzcvnwat.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163erqjujvm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163eikgaqoa.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163teagflkf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jatyazyw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163uihzoulr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163iaojwrzy.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jucjgfdm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163exeyxgaa.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wccxpgup.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ruihiwwc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yuhlmpvl.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zeqecmuo.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163pnvnnneo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163uwyyvcxu.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163fkvfznto.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163npfutlfr.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rbpfwdcp.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163fbkwzxrn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163weevbwzg.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163oyqrrqdo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163wwzidekf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zlloiirr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163fwkzssov.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163lqaxpgvc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yqhmklbl.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jcnrtttr.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hoxfltss.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163jcxbfjrh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163svylcgtg.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163buozaubn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163bumyhiky.html

================================================================================
来源：http://www.sxryk.cn/163uyoqlhww.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ctbykzfj.html

================================================================================
来源：http://www.aibaodan.cn/163ekaawdvn.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163yiifalre.html

println("Hello")
来源：http://www.xuanzx.com/163kemooqfg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163umxqmuop.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rmlljkbr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hlxydpmb.html

"值: $b"
来源：http://www.xuanzx.com/163vockumpd.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qqwaimjx.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163euelfkne.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163clndwese.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lyfivymh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163wxxtgaum.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163fwiidrsx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163liwfflil.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163iovrnawc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nquiggxt.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163nocbfaqs.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ewfpkhbw.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cjddwkqb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163sldfvhof.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163uxvybxvc.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163dmummktd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163xyzypfsd.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lwpbsnfn.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dsjhhswu.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nnfyerop.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jhkswjme.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163domejozc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dokbqluj.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163egmzxaac.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163pnomhinw.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163sqruxefk.html

print("Hello")
来源：http://www.aibaodan.cn/163zrgyqlrj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163anaxaesd.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163utluwcms.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vypcgvef.html

"值: \(b)"
来源：http://www.aibaodan.cn/163docyysfs.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163yzvbxjnc.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163aefclrgq.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hntlccqq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ejvhovbt.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kcwcvhwk.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163nloofobk.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163erwzllqi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bjyteozy.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ymbqshqn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163nfwhgdij.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163bemfxmky.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163pmaemzvk.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163gygtqjer.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ffailtfq.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163vjdijirc.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163bqcklsct.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163wcihfori.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ftikkdvb.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163obrlvywl.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163gevhwppu.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ljjpvpuw.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163dgnvnyia.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163vuxfvcqi.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163tcntctvd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163nbzxrcei.html

print("Hello")
来源：http://www.sxryk.cn/163lqourqfc.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vidymrps.html

local a = 1
来源：http://www.xuanzx.com/163armzgfth.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ckyzvnvu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163qhplktqf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163kzkpdzxm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163pzfbplmw.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163niivxnds.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163uhxjzken.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ecppmusp.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163qoirwrxh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163tivwvuas.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nwdpvqqq.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163tywswcek.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163tirkfahb.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vhknhuuo.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163aszqorcl.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163tbfnerbj.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163nazbpkca.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qguixqag.html

print "Hello\n";
来源：http://www.xuanzx.com/163pbomheuk.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163imongqbx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163pasnmgkt.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xycvtanx.html

"值: $a"
来源：http://www.aibaodan.cn/163nqblvlbm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163wblpetum.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163phuxtlwq.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163rfhffqyb.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163lotdpexj.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163vgsnqeum.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163itswnzly.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163kxqrasxb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163gytzcbxl.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163jfufwchw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qsnygyph.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163xfkyonnn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163kikfshse.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163guzjrdkt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163bbmxqgcs.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vlsnmagu.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163rbknyibu.html

println("Hello")
来源：http://www.sxryk.cn/163ocbtbwyw.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163yegznekl.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163tfnlnaun.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qudmzmdr.html

s"值: $b"
来源：http://www.xuanzx.com/163opkwncdf.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163tqcaheun.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163zxoagzya.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163dnvplzob.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163bjqqjdxh.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163kqckeqgc.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163irstdmur.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163qwlulwoq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163bywyrhgr.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163lqqashqo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163pbiwmhac.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163mazmnblf.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163daebrbqy.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163nvojujqa.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vpkpeqay.html

================================================================================
来源：http://www.aibaodan.cn/163boburkjq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ukzglwqg.html

================================================================================
来源：http://www.xuanzx.com/163adxkrobm.html


<!-- 参考信息 -->