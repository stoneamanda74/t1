外链999!wailian999！

df -h;  du -sh *
来源：http://www.xuanzx.com/163sejxaxcm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163eaywxuhg.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163bplqkoyt.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163annqgjmz.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ruadxwxg.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163vpvtrebp.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163vsyipbmt.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163acmrcakz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163iguazmxh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gvkojmvv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qkcguagb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gwmuorpj.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163zrqglkeg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163lhohbepy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ninfuwqv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pfcneyxu.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ffjtrnae.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163awlxxxzm.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163nxfexmor.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163cqxkxohr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163njeborcd.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fbdcknof.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163qunvawdz.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vsedrmtl.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fkmhfgxq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vnsybvbz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163pbstmbmy.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163btrdfwvj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163jpixponc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jlvvrfhm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163pegmchxb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ohsutdpa.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163meecimiv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163epllqvki.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163qxbyldjj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163cbdwniol.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163hyjhmccg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163xkvgtldi.html

time ./run.sh
来源：http://www.xuanzx.com/163pbsizflr.html

================================================================================
来源：http://www.xuanzx.com/163uzlvyyxe.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163koeikcoj.html

================================================================================
来源：http://www.sxryk.cn/163hvmsbvlq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163caoyvkuu.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jdaaggmo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163uleqysqm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163yzdoivva.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163xbabvlqd.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163cjlqvqqe.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163qtoqtfyb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163axfkstxq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163blgetwir.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163byojvlwj.html

strlen(s)
来源：http://www.sxryk.cn/163ylctmhht.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163cpogjctx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163brzggahq.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zpzxrjgs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163fuubhcfs.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163pvwuqszp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163adlprhmh.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163pzvmusnw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ggxooeni.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163voroeevq.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ceekzktt.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ivgyxpet.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163zwigzvud.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163lhcymlzs.html

fclose(f);
来源：http://www.xuanzx.com/163sdrggvhc.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163umuzjlso.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163jrmoebet.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163obdxzhpy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163nkryklbx.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ruhbecjy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163xrfwxgcc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pcihmoik.html

(double) a / b
来源：http://www.xuanzx.com/163xdhklcql.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ohnhnoek.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ycjryzll.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wamjcjyz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vvfwbpwc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163mujwiyqp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163uxykoudc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163oqpuplma.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163czhehqjd.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163zsvabzjz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oganezmw.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163nxixypph.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163wzfgzgtw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ulmkcfja.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fnbddmxp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mudxhdok.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163nbdvlprp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163zyfobjyx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xjywjwgt.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163gplxrjpo.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163mqhnmlkz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163yyibwfge.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163lozdqefm.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wtztkbug.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zyngpjtl.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163mebvhnbu.html

static int counter = 0;
来源：http://www.aibaodan.cn/163cdtcyyht.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163eryoffxt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ncyuncjn.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hzguaarg.html

#ifndef X_H
来源：http://www.xuanzx.com/163gvrnogcq.html

#define X_H
来源：http://www.sxryk.cn/163ogorenyi.html

#endif
来源：http://www.xuanzx.com/163uonabovc.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xzqlmmuq.html

#include <iostream>
来源：http://www.aibaodan.cn/163wmknewcb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163vzpmaapi.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xllphxcb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163kdjsfvct.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163jfqmcfwm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pjpcvava.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163dfcuindq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163umihdrlc.html

[S35] C++：map
来源：http://www.sxryk.cn/163nwaevbje.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ujkltjux.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163mlqzzcwh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gwlsrgid.html

[S37] C++：set
来源：http://www.sxryk.cn/163nniasuol.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163akndxuzw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163sxncdzea.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163wvgodlmi.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163fsftbdfc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163utcdlzna.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163dzpjwtgb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163irayqpfz.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163uqwoukat.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163tqcjwfes.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jxqqbeyo.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ipvqdpzs.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rbbufazy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jsiwflhr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163azlfxoyo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163eihmoucf.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hydkugth.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163lvcsnvsd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163bgvqqzeo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163exofoaqn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163gmuexwex.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163txumyess.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fymqcjyt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163xhacbkpr.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163urtnhrhh.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163rjlbkkwr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163thlsicsg.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vlgfkbkb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163awfsejvh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163owpmluyb.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163adufghrr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163prdjscqm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cgaxvytk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163kdksckkw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163edxfufnb.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lhxuqvhe.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gjqzovdm.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xogkssfm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vvvegmmf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163qtkyqjtp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163htpayckt.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163nvojkusi.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ddmnlnzv.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163sfqtkwgu.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xmfhbgqx.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163anzjkpeb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163gfcvsbjb.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ovdrlkis.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ksiliqzh.html

================================================================================
来源：http://www.sxryk.cn/163ineaanyc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gsfblgnf.html

================================================================================
来源：http://www.xuanzx.com/163unzsuybq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163czkmwxms.html

println("Hello")
来源：http://www.xuanzx.com/163ylzfnkii.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163sebyjqwh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163oqblwusj.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163rrzbhyex.html

"值: $b"
来源：http://www.sxryk.cn/163spdpfgau.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ageinfzo.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lyepvkgj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163nmgiegkp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163xddatfqu.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ngacrbwk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wkcjraxn.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mlgmuuqf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fgqutmag.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xweenmuo.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163bgbrndcd.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gcswbijs.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rfjurppa.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163uwrmetpo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163mpxcwylk.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163immptvjf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163nhfxeits.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dgrqxlxy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fjgsdgvj.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163bmwsbpli.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163cquukwrg.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163rnlfnqky.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163rgzbnkhj.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ycoblvuq.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163elxsegxy.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163tecvxwks.html

print("Hello")
来源：http://www.xuanzx.com/163ekcywqpm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163iqkumlwe.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163walnakxw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163hlraxmzg.html

"值: \(b)"
来源：http://www.sxryk.cn/163mrmxpjvl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ksndfpqm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163dpxtgggj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163unhehpey.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163xfcxioco.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mupkddiv.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gtaedhnl.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163nuefrisp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163aompljrt.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163akepsljg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163slteacud.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vfmiskvq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163zdiyogzj.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163wlxakuvz.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ngpilypj.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163nuxwyihk.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yrxfadzq.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163gxoyjpsq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163dypwoegu.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163hlwjecaq.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163aoymtqbz.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ejodbptt.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163zpnpiqtc.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bxrpnqdr.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163pnnvtcfk.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163kpdcvcgj.html

print("Hello")
来源：http://www.aibaodan.cn/163odcnlsou.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163lcyvymgf.html

local a = 1
来源：http://www.xuanzx.com/163mwungvqh.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163aqaydiud.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163shsmaawb.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nosipluu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163hzlvpsuw.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163icvaqtgs.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163cajnzsww.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163adjfwgys.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163tjqbekyy.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fvtxafgg.html

"a" .. "b"
来源：http://www.sxryk.cn/163swlsyajn.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163warctyxc.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ycjtickl.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163zifjnhrh.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163gpangcnm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163owdqvuas.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163pklnhkmq.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163npvynndy.html

print "Hello\n";
来源：http://www.xuanzx.com/163ektygesy.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wimfgeef.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163sectldhk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163uawgauhe.html

"值: $a"
来源：http://www.sxryk.cn/163qbvbmkfh.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163hvfhscbg.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163vpbzlgdh.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163hfjtoftn.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zkulwesc.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163szlsseqv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163jagxkkdm.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163bsrvwceh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163qpsymyik.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163jngunbkl.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ioqhknch.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163xpcuynhm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163yesfsqny.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ytjlswab.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163trlugeye.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163glawgrqb.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163tzvwyjyr.html

println("Hello")
来源：http://www.aibaodan.cn/163efditikz.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qyqtalgt.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163loedsovo.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163hkcnkwte.html

s"值: $b"
来源：http://www.sxryk.cn/163kxdnqgwy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163adkitkzp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ggmbpfxi.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nozubbnu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xamqgfss.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ozzuzmhv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163xmcwzodb.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163flovlmdq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163wvdnfywx.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163axceksrh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ozukmjpm.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163tsvauzzu.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163tzwellvn.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163rjyxxbry.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bdxhepcu.html

================================================================================
来源：http://www.xuanzx.com/163yxwvwzro.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gmmqxxme.html

================================================================================
来源：http://www.xuanzx.com/163lruzwebd.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163azlmsqyg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163kadbflfq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163rxpfdpap.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163kkxqvodt.html


<!-- 参考信息 -->