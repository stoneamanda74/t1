外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163kbushgow.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wlwoebip.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163littefcz.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yrokiaxb.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163tzqshxuq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163cqhkabcq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163iudsivxk.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163tjnegmlf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zajemxgj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163feiwcqqy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163sfcxxbjd.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163udcutvdw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163doyxomns.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163nvjqgisu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163iyaqhevr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163iuehsszi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163iiiwtfvu.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ggpclchn.html

time ./run.sh
来源：http://www.sxryk.cn/163jqematqs.html

================================================================================
来源：http://www.xuanzx.com/163trkbfmco.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ineituoa.html

================================================================================
来源：http://www.sxryk.cn/163evnigegx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163rakhqtzt.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qihrsagj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jhbasxpt.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ezoljtoi.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163rhcmvbvg.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163fluprsfo.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163awdtswsu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163msulgnoi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163qaspvtlt.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kurbjbxz.html

strlen(s)
来源：http://www.aibaodan.cn/163ewlyoszx.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163llqdpjxk.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163nccgodco.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ifyxrmjk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ymkcnfph.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163aikrcrwf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163xiukjihh.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163leixwsfz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xntqiuao.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163bnnrrxyw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tbxxbhhd.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ekdzavls.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163henaubkn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163nqardzih.html

fclose(f);
来源：http://www.xuanzx.com/163tgtrorte.html

[S12] C：写文件
来源：http://www.sxryk.cn/163dikwquyq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wndpvrnu.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pouzcqlg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163awxusatd.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163owucizob.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zzuvwhib.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163nwscaviu.html

(double) a / b
来源：http://www.xuanzx.com/163ythesllk.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163lvcthdud.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163uhqbpwyn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163dcjbuefq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163enwlzusi.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163rvlndwxd.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163uvrmkgjr.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vmnewlat.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kyaeutgj.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ezxowuyk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mqepkqdo.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163zidlebro.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mtlcsisn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163chidctgk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163dnzzjocy.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163odrzkreg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fkeqkyme.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163dvslibrn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yixlutby.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qeynrosg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vlcnndzg.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ppoailak.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ebequegv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163yunvvwev.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lekapfch.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163odyyefmi.html

static int counter = 0;
来源：http://www.sxryk.cn/163morditzr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xktusaln.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163oiqnoabh.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ipfjjued.html

#ifndef X_H
来源：http://www.xuanzx.com/163tzwyeday.html

#define X_H
来源：http://www.xuanzx.com/163plfrvrla.html

#endif
来源：http://www.xuanzx.com/163sadynalt.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163awwolosr.html

#include <iostream>
来源：http://www.sxryk.cn/163zsllcous.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vowswzxv.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163zeklpvyd.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163zeoicagy.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163iimxauuw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ybdqqqql.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163afprujya.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hmyglttu.html

[S35] C++：map
来源：http://www.sxryk.cn/163qwlnzuvx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163iycccahq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163zcnmdhvi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163umjutnjd.html

[S37] C++：set
来源：http://www.xuanzx.com/163xfhnsyuo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163uvlxoaqw.html

[S38] C++：排序
来源：http://www.xuanzx.com/163gqulvbav.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qjgyuyst.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163gycgafbs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dtxoruhj.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xanertrc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163dmkvmelw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ljdjathm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163gebmriim.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163epoiziip.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163adjgyfoy.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163lwbfwlju.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163majyqbxi.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qppmjsbc.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hqwusrsi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163aizvcmac.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qdsatbxd.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dvnyssvm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kusulwgf.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ocoyxpbi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163isciylrp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163rmfmptov.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163puvoysys.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163jcwcckex.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wrmokmyv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zeeebfae.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ivpyhkwr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ortyerik.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163nwendhwk.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ewmcffde.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ghstebtn.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163osadwops.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qotfkdkp.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ibkvagkt.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lppkgrhc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163advdzadl.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163tzmfawyu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163esdjcedo.html

[S56] C++：optional
来源：http://www.xuanzx.com/163csxradsf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gcoauboh.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ifwmgcfe.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163gipzxkrg.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163tsuggxke.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163gakrsexr.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163yurqvuuq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xxfprwwr.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163bvmxrxbi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163nrqukqhy.html

================================================================================
来源：http://www.xuanzx.com/163xuoyjbbl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dgguwkrg.html

================================================================================
来源：http://www.xuanzx.com/163sqtapbey.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lohxkyff.html

println("Hello")
来源：http://www.xuanzx.com/163dvwnybeb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ynbtftvl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163iivjlctb.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hpazpnoq.html

"值: $b"
来源：http://www.xuanzx.com/163injomahr.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vgogefhg.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163spcgtmgt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163heutnpjm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163dysklcjx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163imyjxqll.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163kqzikagk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163czsymemg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ipbfgbxm.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163oziedhwq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163vfpaagvk.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163grtwpvbt.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163lfhdrzum.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dginydgd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ahmnilqr.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163egzbnuvm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163pvnarxbo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xaazusnr.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163tjsvotcu.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163abeylgnz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163kaaiavjj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163pocsqlnr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163zreyhtzc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163keanjasi.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xkxltnqp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163wsgnynao.html

print("Hello")
来源：http://www.aibaodan.cn/163pgpytxhc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ilfacmqr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163uglzfbtt.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ylzqjwuy.html

"值: \(b)"
来源：http://www.aibaodan.cn/163uimshgbi.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163nubybpaj.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163frzdgenh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163nytnvmju.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163pzexfdvh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163brcurclj.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163fpgbznln.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ysrllmwz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163gkjzomad.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jrwkdnqs.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163pllsvniw.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ytxfwngb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wsovgjoi.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163fajyrzqt.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ufgsglzv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zhdafrka.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163hdtnnucm.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163btgguksz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163kjoxchds.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163jutqwlpq.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163wwqtexsj.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ztjxzqrx.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163rivkdylw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ssninltd.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163nngoxups.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163dcpwwnao.html

print("Hello")
来源：http://www.sxryk.cn/163mrzcuycb.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fhtovang.html

local a = 1
来源：http://www.sxryk.cn/163sdvipbmn.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163mhzljnyr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vbfipyve.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163btnrizmg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163dqhrwhfm.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163surctjjf.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163xbldwoxz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163guzaywqm.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163pgppyrzl.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163tzsksxxk.html

"a" .. "b"
来源：http://www.aibaodan.cn/163aoxwfioh.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163hlaruanh.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163amfcqeae.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163xnqajnpb.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163pvwwcjxp.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163xybnerbf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163stdnqtei.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163zdvtnvqb.html

print "Hello\n";
来源：http://www.aibaodan.cn/163caaubzma.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jevavmfm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163niuuffeo.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163iixqugff.html

"值: $a"
来源：http://www.sxryk.cn/163mdpvkhdv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163hcbcaycd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vnssjifb.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qzhixynq.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163hgiurcuu.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163jnvbacfg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163iuwlfwrf.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163hpguwpuc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163vydblacb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163owjtwtyr.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163pevzvctn.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163bneaayat.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dposrygy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163pxegehzk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163lpjdbjgq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wtzeotlw.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163kvbqdgmr.html

println("Hello")
来源：http://www.sxryk.cn/163dvreachm.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163qryxypdj.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163yikaoolu.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163anwuolbz.html

s"值: $b"
来源：http://www.sxryk.cn/163gsvbwiet.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163rrfnhaxc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163dqsozivb.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163pbxtublt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ptterofs.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163fvwlphkg.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ujpsihwh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163qxcvfelk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163shrgnlaj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163nhlmewht.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163whwcncxb.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163crfjrtfp.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163tsmdufzy.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163zrmaiavs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163udbvqhbn.html

================================================================================
来源：http://www.xuanzx.com/163holcufll.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kbavszxx.html

================================================================================
来源：http://www.sxryk.cn/163inmnrdlc.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163pcitsxvb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163sxjihkwc.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ersttsxf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163iulpnczq.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163koiwmlbe.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163lfpuhsli.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163oanlgdql.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ujvlfumb.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163rzbjregp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cjscwdsm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163rtztwddy.html

{**a, **b}
来源：http://www.sxryk.cn/163aurddiyo.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fdvmlxsz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163czoarwlr.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163qbyrdyev.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163hrnxlecj.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163zusjivah.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163kotiymqt.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163qdwnxxms.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kjchhlne.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163uvrcaats.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163teezguti.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163elqqslxo.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ajrbihbe.html


<!-- 参考信息 -->