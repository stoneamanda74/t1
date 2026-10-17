外链999!wailian999！

df -h;  du -sh *
来源：http://www.xuanzx.com/163eaybjidp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cfroceiy.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tytnzpez.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mufahtbd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163wrbbgmvo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163fjotoomu.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163aaagiopv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163iifxchpu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163cvukubwz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wjnrbfzm.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163xcjtmxse.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gaffislg.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163dqumxgyu.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163upibzlfj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dorhaeot.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163gzmgjgpt.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nsimlzki.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163yijaaaoj.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163kxdbkftp.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163hedxuirm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163uopkrngb.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163hphmexsk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163unfuvtxy.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163jwkdjjrq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163kcijqghy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163auhvnmfx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vymcxtrj.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xygcieys.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163pmjksbsh.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163xeffvpwz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163aasbddjz.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163zyadnzmy.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163moquprdf.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163bhxyaqkm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163hezmokom.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hsuibdvm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xjpnltli.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163yxdhehmf.html

time ./run.sh
来源：http://www.xuanzx.com/163vsprwstm.html

================================================================================
来源：http://www.sxryk.cn/163ioyrdptq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163llidxkts.html

================================================================================
来源：http://www.aibaodan.cn/163ajhddjpz.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163cptyrcbf.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ulmeiqyq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ehokdtac.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ehpywqnu.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163jnmfippc.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wzdnxhue.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163byusrqcf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163dfpkxybb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mibzshrw.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163yzvlwojc.html

strlen(s)
来源：http://www.aibaodan.cn/163nyhlrarn.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fycoghsm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163gsvuknqs.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163kwzgwhtk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163fkydsexr.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163faqveifv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163iqwbtlff.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163hxeuhycz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163cwvkjohh.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pvfjkcud.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163uptgwwbk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163whlqsdjf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gjlbxlfi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xfurcmlw.html

fclose(f);
来源：http://www.xuanzx.com/163mbqjxhdn.html

[S12] C：写文件
来源：http://www.sxryk.cn/163aoomynzn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hmqmchkr.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163mdwupple.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163mcateoay.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hqeintsz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163kzckydpo.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xqhcbctx.html

(double) a / b
来源：http://www.sxryk.cn/163jbsaoaqu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163itwwlccc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xgnxqnod.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163tkovuity.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163gvdzzifb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ljhnqjum.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163abcwjjwm.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163arhndbir.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yfhqtmgz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zuhklznh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cozmvtsv.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163edzhxpnd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jbimuojk.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163llwnakaw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ybxdeqgv.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163etzvxoiq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163olhhecax.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163cbunkmhw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163iyazwpxh.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163lujnnmfw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gkszyxqm.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163nsmjfcxa.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zepziqrd.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tghkbmai.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163hvxmziji.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163tzgdfjbo.html

static int counter = 0;
来源：http://www.sxryk.cn/163btqgzgof.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163dyayaujz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163amwphixb.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hdhdjmom.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xbfxadod.html

#define X_H
来源：http://www.aibaodan.cn/163rnvicfqi.html

#endif
来源：http://www.sxryk.cn/163buagyvuy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wisdvqlv.html

#include <iostream>
来源：http://www.sxryk.cn/163gvayljwo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163uixajkmj.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gyyyndhb.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163jctljuma.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163rxiffqfi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163pdfepykn.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163epytwykb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163exlkivap.html

[S35] C++：map
来源：http://www.sxryk.cn/163hlwktxtj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ehxwnpxv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rzabfpoo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tomfzoff.html

[S37] C++：set
来源：http://www.xuanzx.com/163boufadjh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163epoctfvt.html

[S38] C++：排序
来源：http://www.sxryk.cn/163kjmwaaga.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ogspftla.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ycautoru.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zmrkytqz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163bnoulqhq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fqlyffgv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ndegzwbf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163apkpstcw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163noeiifwn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ljdtysoy.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163drhmgewq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yrubqhic.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fmnbrshh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vxxkenze.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163huuqeegl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163vbfvmobd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163phpharfr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nqtpvxuy.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163mlfnfcze.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163zxvlnszt.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163netvfnzx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163uymtgoas.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163iberfegx.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fcluahse.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163feptmcbm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163aazxhjnu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163jjfvugrx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gzctfnxr.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hkhytini.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qaupmnkp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163luqlptvu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hxufgxwk.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bbmpdapo.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163anttqhwx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163vgbfgalx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dkbmznvc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163vsrtmlvn.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ounxktfs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163yijebxik.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163mlgfoewp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163nbecbrpj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kivttujw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163imnedspj.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163lheommsd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gaiqdzye.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163oclyxktr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kmvtaqbk.html

================================================================================
来源：http://www.xuanzx.com/163pjirftwm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163sgjvqyih.html

================================================================================
来源：http://www.aibaodan.cn/163vwwfqyqn.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163pnlzehwl.html

println("Hello")
来源：http://www.aibaodan.cn/163kdonlhjg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163cwbeatxj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163sjgqdxao.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ngraqpok.html

"值: $b"
来源：http://www.aibaodan.cn/163biubruyx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163fizxabnj.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ocqnoopc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163lxtzkmpj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163sktvagvj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163molwtekl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163qourfsjj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ioaklhck.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163uaxrnlho.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163kujfcojf.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cvstqujg.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163qurkhigk.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wpsfmhyb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163fmbwabfy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163unykocif.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ulyojqtr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bjoyolxt.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163fteyqqgs.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163xfqdpkab.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163oavyslcj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163tzwkigih.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163hdcrzpgu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163szlgnjyw.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163iqhyqokk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xdxwcepb.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163xejhpevb.html

print("Hello")
来源：http://www.aibaodan.cn/163qvtizrxt.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163gfbivsiy.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163yvqadxrl.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ecvwnkuw.html

"值: \(b)"
来源：http://www.aibaodan.cn/163crxidmwy.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163gjivuavp.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163tnedqimf.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ebthgwky.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163yzsopbki.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163pfkxgkuo.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163breyakkv.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163aiuascku.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jvjclvqm.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ttxyscas.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163yynncfxm.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163icdfhifr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163snizfubj.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qxqycczj.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163stdbwhdm.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163kcihpbbo.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163bptcxkta.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163sfakihdb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163prpwsdne.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163liiouqxt.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163quoldjod.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zkotneld.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163oyhlvwpp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163gthfmkhc.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163xtabbkqx.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ddmhqtow.html

print("Hello")
来源：http://www.aibaodan.cn/163nrpubwuu.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163nxdusxhl.html

local a = 1
来源：http://www.sxryk.cn/163xlnmjatb.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163qjixpdyx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163nwjjrcgr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163iudexrdo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163bhkvgosd.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163jlyxiqky.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163vepnsmxk.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163gyuakfgl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163qnbxmnyw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163aakcxrnl.html

"a" .. "b"
来源：http://www.aibaodan.cn/163dixpnigm.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163spkbiigl.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163vlysebad.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ufdweoqk.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163znqvyuxk.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163yfckmdhw.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163psiduqnl.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163usqjrslw.html

print "Hello\n";
来源：http://www.xuanzx.com/163btobmthp.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163raklmxuh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163avtzqvux.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qbgoitnz.html

"值: $a"
来源：http://www.sxryk.cn/163vsjsrsjq.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163uhyoxgrc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qeedvkpq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163dxaptoft.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163jpzvluib.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ezcspiae.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163odnudueb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qohynlbg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gyzqawsl.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gutbdqky.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163aloujrch.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163hyiubiql.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163fgojplch.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163agurcpup.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163kjwasqmd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163dawksrqd.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163wtbsykuc.html

println("Hello")
来源：http://www.xuanzx.com/163gekkjylk.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163gxijoxrk.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163sbqyluld.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163tvukkwkt.html

s"值: $b"
来源：http://www.xuanzx.com/163obmsrtnm.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jhtifrdr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163krrrwxrw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rzsslzed.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xbqupbam.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163oiaixdww.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163qusovwoq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163yajaizbw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163qzzggkfz.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mrrxmeaz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163yhuuspql.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ceyjywip.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163mkilukwy.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163vidtggjl.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ykguebct.html

================================================================================
来源：http://www.aibaodan.cn/163jkbbywdg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163iullcqel.html

================================================================================
来源：http://www.aibaodan.cn/163uguakzgg.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163xanqcrnk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163rkdzltng.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ykprmqcx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163doggqyav.html


<!-- 参考信息 -->