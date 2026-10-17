外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163npjlausr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163tejgyznx.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ybgtrwwt.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vaqlsgdl.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163igyppluo.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163axjayfqj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jekmcbgz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163nlhgjjzy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163kdwnrgwe.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163awhyvcpr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tprcucdl.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163iitzjhmq.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163gsidmbtn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163syngcicm.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163lgpkykhh.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163jondkqeg.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163cehimgbk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163bxaomrtt.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163swpgfnin.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163aggrfefp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163kbqwvwhy.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ihlnzusu.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163titrybcj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jviulbtp.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bkohoeij.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163bvnfvmip.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gltdpivt.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zvrbjusw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gmluzgnm.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163rhmdzogd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zdvmoqbo.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163jdgadwgs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163uhuhqsip.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xkhsofvk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163onypurzm.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dzmuwvms.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163xhcchtvh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163zgemeotn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163yshuepbu.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163uvrvynhi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163bwuqwckv.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163eewbonfc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163lfaqzrvp.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163zevbaaga.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163zendyevj.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ylaejzoj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ebdznukw.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163qcdgblem.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mydpqycq.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163nsngujgt.html

time ./run.sh
来源：http://www.xuanzx.com/163lnwosdsi.html

================================================================================
来源：http://www.xuanzx.com/163lpcyosnf.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163qqstpqif.html

================================================================================
来源：http://www.sxryk.cn/163ymdeijqw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163qhwrzfdk.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163rtjpelwr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163vjcabjqh.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163chixfehk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163avmccuhh.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163idlpryag.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163podhiwls.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163nmgrixjy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163dhtobyvx.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163nygtrhgm.html

strlen(s)
来源：http://www.sxryk.cn/163dkwooulc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163uyhoupyd.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163qvmeyxnj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163kilfname.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zjosgqnl.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nfpgklkw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rdlwnkto.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hyryndit.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tdfxjewx.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163koadpuno.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163egpeukcx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163bouiemrk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163pcwvilox.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163asbfkbsd.html

fclose(f);
来源：http://www.sxryk.cn/163dodlevrm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ipysbcjv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163gepoypjt.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163lqsiglgz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163gawmhshe.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163coaskena.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bwrocphj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163mpzmpvkh.html

(double) a / b
来源：http://www.xuanzx.com/163vgrtxpzn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fxekdrny.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ylpyfxzb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163grktqjtg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mbwoacbd.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163cjvqimtg.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163jnzpqyua.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163oxhdpxol.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tjwfucqm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163iawxzdrm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kxunoypu.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xnozoecs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163aheaalva.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163xrhlhzel.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nqywxxxm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ridpxssf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nhjixlmw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qyguefaw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vpldmjhb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163idrwzuvi.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163jwtwwqmn.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163lelfjqaa.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163nkoaydof.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163yaikjdtb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qhfiliry.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163yixwrxqp.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dstkeauj.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163butwrpwm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163hcffskqi.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163goycocee.html

#ifndef X_H
来源：http://www.xuanzx.com/163wlrzacku.html

#define X_H
来源：http://www.sxryk.cn/163tfnvkqtw.html

#endif
来源：http://www.aibaodan.cn/163zxjzsszw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163uhzuugse.html

#include <iostream>
来源：http://www.xuanzx.com/163uwmgrxrj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163fnlurrhy.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163gxcdkxaq.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163oqctaitq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ufbtalht.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163chwtcbeu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ylukslwl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163oghvvmuj.html

[S35] C++：map
来源：http://www.xuanzx.com/163jbwnvheb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qunblhgg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163amwmzegm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ctopzhqq.html

[S37] C++：set
来源：http://www.sxryk.cn/163kosagksa.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qbkjxbdj.html

[S38] C++：排序
来源：http://www.xuanzx.com/163pgmclive.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163royvtpzg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163yulvkbhm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163caseajjr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kxcdmbnk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163bjwsoixa.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163uuzynitc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163bhdvzxyx.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163egqympob.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wkzaseld.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163fddhepvy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qeybkrsb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dnllcqsh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fgbbftnw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163abrjlzcj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163izqzjofi.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163lxhkmoou.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163puzcnqwr.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lhqzcyon.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163pdzoohyb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163jeibywwl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hdaefvke.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cymkkxsl.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163alrjlhzp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163cvjccsfs.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163sxzydfgu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163nqhjbowz.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163doapslvn.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163eofamkui.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163artvfico.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163dqthfadw.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163eseuyhri.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ubzbrizp.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163gdfmngxn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163drhsnfce.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kllomjvy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163gtyvfurk.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qclfbkli.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163clgehnew.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163nloyxkfs.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163mtqsooxm.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163konhekvh.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lerpvhsn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163exumokrc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ubbbxpun.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qnvmikqv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163yswrztgw.html

================================================================================
来源：http://www.xuanzx.com/163hkdtqbie.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163hhenoubm.html

================================================================================
来源：http://www.aibaodan.cn/163wocvpiln.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ucaaoine.html

println("Hello")
来源：http://www.aibaodan.cn/163bsxktqmg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lpktvukq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zxnsknbj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163xzglzgej.html

"值: $b"
来源：http://www.sxryk.cn/163afuecvcc.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ucrdanxv.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163iyhwgcjx.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163cuyivvuj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163xytasgnz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163eidzhjdc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163kftfilru.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163njhusrwe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163jkjfxggu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tnbzocyn.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163cnjszzln.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ellaaohl.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163kfqvowdl.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163erbpntdb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163zcdyjzdj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163tohyzslt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hnkbnmlz.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163iqlflvaj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gmzrizfx.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ojxbdlwj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163hlrauvth.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163jlvbuhxl.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163iceigzig.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ejcnyese.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hbxqurpo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163yyuhrhcy.html

print("Hello")
来源：http://www.xuanzx.com/163bwfywyms.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ggxsldpl.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163njqmzopg.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bplmexln.html

"值: \(b)"
来源：http://www.aibaodan.cn/163jzqhsloq.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163fhlgzxpc.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mrjdzclg.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163kwlsrams.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ywlysahr.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163lpxwykfi.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163xstodesq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163tlqzsgft.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163oaycxshu.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163msqladua.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wvjhzltc.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163geaswgjj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163hgkbreyh.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163joidevnf.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163kxpepaqh.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163bsohzofm.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ulgsqoqm.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wepfdobn.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163pracpwmk.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ntvdzajm.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vbwpbswp.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163sogzunbv.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ragdrzck.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163sibqwhpi.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163mmjykqke.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163umduziqi.html

print("Hello")
来源：http://www.aibaodan.cn/163gagvmnjg.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163wtqszihw.html

local a = 1
来源：http://www.aibaodan.cn/163hxlrmohw.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163elgpeflt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163durfubmq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163myocxhql.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ntgtttae.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ebnfalxn.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163bbwewbjo.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bovtjwff.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163tfwcemii.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163masujplq.html

"a" .. "b"
来源：http://www.xuanzx.com/163xexvjrjl.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163klriudah.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163uqdugbmm.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163nwwkbjrr.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163howqhebm.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163sdcbavgj.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163wluldhhe.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163nsoiuaeg.html

print "Hello\n";
来源：http://www.xuanzx.com/163ciorizet.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163cmkywfjg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163wwqjihat.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163mjydsmyt.html

"值: $a"
来源：http://www.xuanzx.com/163qxssxbki.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ausydvzm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ctajdraz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163uxrinjjy.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163dvcgjtyr.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163eklptwxi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zvsqcamm.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163clxyzmse.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163jullntgq.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163lubhbkzn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ewqzinok.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163lhjxvryh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163fokqovcd.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ibxiupkx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163qwanewvv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163titfyhcz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bfrzegup.html

println("Hello")
来源：http://www.aibaodan.cn/163rihkthns.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163yordlgdw.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163oprtbaui.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163nuhdjnwg.html

s"值: $b"
来源：http://www.xuanzx.com/163vwdkksde.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163nrrrlomn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163bencwaeo.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163dpxeofor.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163atbiuesw.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163wojevbke.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wyqvwygn.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163cbldtlze.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163tjqgreqs.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163jblnutmb.html


<!-- 参考信息 -->