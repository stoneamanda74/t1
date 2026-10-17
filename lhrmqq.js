外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mcdjljue.html

[R58] 下载文件
来源：http://www.xuanzx.com/163lemtudlu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nbjyrmgf.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ojwlygiu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163qfiipmlc.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163eeczetoy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163yqxukkpj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qcbjokup.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ulufkihz.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163mzzztmzo.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nkwmzgvf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qtuqrcug.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163mpjzdowz.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dmklanxv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163pdjttowf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ufcegizc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bbvovviz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163cmnhxfai.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gegmocrr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ororkqvx.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ziwubvzo.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163xkcoenqu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ebgqnvfm.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163fzzepkxe.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nejcwzlu.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163hnzfnxgc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ngstntdo.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163vhkvmsev.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163dadxgcrf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nuwvkarj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ofuboxhf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vgwqoqld.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ruerstei.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163pdfkqgws.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163rrcvhwts.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163jxoiqfrs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163dqpfcudy.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163uxexzzcs.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163oggpmdpj.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163tqgobckt.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ijvltqjt.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mxhviltf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ydjituqx.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jacbtsrz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163yitjknue.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163iibokpfd.html

time ./run.sh
来源：http://www.xuanzx.com/163vdkctcjb.html

================================================================================
来源：http://www.sxryk.cn/163vxcsnepq.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163blfkqzur.html

================================================================================
来源：http://www.xuanzx.com/163vdnoxxsl.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vqnwqrju.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163edaghbnh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wghadyup.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qortllky.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163crempnvm.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ehqzxhvt.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ihvokewi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163atmhoctr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163aitdmqfp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nitssdwh.html

strlen(s)
来源：http://www.aibaodan.cn/163hnvmbibz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163uxaywafn.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ctcqhimg.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dmdcjhps.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jyhpiqzf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163lgdrdauv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163rvnpbnsj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jctnaeoc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fgfdueqd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163dhvlxmlp.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qhnsinuf.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ncjwhbch.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163yigojegb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bqcpuiao.html

fclose(f);
来源：http://www.sxryk.cn/163gklgrbib.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hddsywiv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163avbtxaar.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163mpqskfzy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163egrntlcf.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163sqroarzf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163xqfueftj.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163hqrxuzoj.html

(double) a / b
来源：http://www.sxryk.cn/163khkbbkxt.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163pyxfaunw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163npucnzrx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163uxykoljw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163gnwsradm.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163shsvfdde.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rijogtet.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163pnxxwfcn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163eeyffmvt.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163aeitegeh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rikmyrun.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qaobuykc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163buvcxiea.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163gevzgsnl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ouxhgckp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163gldhlzrq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163rkcexxdr.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163oduzmwqg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163aufvtdym.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163epazvidr.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163wfzcjfbs.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163dxlbkksg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ulborvgy.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163nbxnymgg.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163fypwklkp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tlwqpbga.html

static int counter = 0;
来源：http://www.sxryk.cn/163vpwmipsa.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163riaeevyp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163auxlzlbk.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fpsfomfi.html

#ifndef X_H
来源：http://www.sxryk.cn/163nxqrtzia.html

#define X_H
来源：http://www.sxryk.cn/163eiamyrxs.html

#endif
来源：http://www.aibaodan.cn/163ccrhneop.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zemuvmdp.html

#include <iostream>
来源：http://www.sxryk.cn/163fncoygaz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mqgkshsp.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vxcuerwy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cdkeqhuy.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163xrquenyw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163xtxbmjuv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163aqoxjkqs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163yumkqhtz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lqfjstdh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tpkpnjue.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163fdqzsdaf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cmthaevo.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nbeplagj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kgkjcslx.html

[S38] C++：排序
来源：http://www.xuanzx.com/163pyneelmp.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qjjpgmcv.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163quqetkzj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163smdwvovq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163oqsraozb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fynlxmjb.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pmtmvegf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bpgwmvsq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qqusmtad.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163xczrjtxe.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163juorheld.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163eubcuvwt.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ibrmshvo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lacbuzlg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rusxuvhg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163semcjeby.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163clazjtpb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163vskaqhxk.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163osrmmdfs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kouvucca.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163lochmnuy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163jaaojeye.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163nidtztfj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163wyegaqks.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163bqceqaim.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163obmcykji.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163vyvezuln.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163emsxdnzx.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163aonsasqz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163acjcyyql.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163uexdfibz.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163aygfxyuq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163sjbviqnu.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163puwricdw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nglcokgn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163dgswgvom.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163kkpfdcyj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163kgqrwzwj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ttftuonn.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qghbkdhy.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vdilhanl.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163sxxlqpos.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163hmrkcgpp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163lcnqrgqj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163vyksyvup.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rcavfrhh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163mmwjigwt.html

================================================================================
来源：http://www.aibaodan.cn/163ubeyqgws.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lvgjgojl.html

================================================================================
来源：http://www.xuanzx.com/163zxqawdyb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lwuhxuqm.html

println("Hello")
来源：http://www.xuanzx.com/163uwmffumx.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163pchqzcmh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163guxscwfv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163aatlwxmk.html

"值: $b"
来源：http://www.aibaodan.cn/163bbdiryit.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vhpbpodu.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jfkinyjy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163rwsqkgro.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163eggljqow.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163opmontmb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163cusfrvha.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163vvfqdrod.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163dkbzzouh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163tdsxegel.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163bayduyca.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bdusvoaf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163lnyovgsm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mkwvflyx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tthcfzbq.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163zntulklh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mysmiyoe.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163rlvrcocv.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163uhfhcbht.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163qblbddnj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ezqjssrx.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163zocmoywo.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163nraqeesd.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163orpjsbhp.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fajwhnpa.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163gwwvksyq.html

print("Hello")
来源：http://www.xuanzx.com/163fjqfqkqg.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ouvgklzv.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mxgrdkcu.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rtcufeir.html

"值: \(b)"
来源：http://www.sxryk.cn/163rtfdxtjl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163oyvofytj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163tvmmoqyu.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163eofahfkp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163tixcwzdx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vqdyuvwi.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163cmsrtqxo.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163dcgauwis.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163gbitxbgv.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xovtytvz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ztawptgv.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163jwuquqke.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163dnglpzyz.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163kijgbsdd.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163zsxuhgkl.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163wedifpwu.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163nzcxythf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163nouqtwdb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163nqhokhlw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163erecgcvf.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163yvdcscom.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163gzluofmh.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vhhuyrav.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163syoaccrc.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ijsnsopl.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163bhqtpaod.html

print("Hello")
来源：http://www.xuanzx.com/163lhcyxzpv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163xzmqxnmo.html

local a = 1
来源：http://www.sxryk.cn/163uutsprcz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vsfhwdxf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163tpkjcnwh.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ekbqwazl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163wsgkvgsf.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hcbvrwhz.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163asgjqfom.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163hvqkvpky.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163saxllpef.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163dmtqimwt.html

"a" .. "b"
来源：http://www.xuanzx.com/163bqgkipiu.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ezvpjnko.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qdetnpez.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163pucdkgim.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163fmbvykry.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ijsesgsi.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163kcdyfysh.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rkqfiwyj.html

print "Hello\n";
来源：http://www.sxryk.cn/163tvkpiwoz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163zcivccsy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jdcpjfgh.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163vwgqqylt.html

"值: $a"
来源：http://www.aibaodan.cn/163etbxcbjz.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163vjcjxzbh.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ybvfydkb.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163czlgdjke.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ywsninic.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ovwcibqe.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163tmmezboh.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ufbaycza.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tlvzfrre.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163uowbfesc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ydyrvbah.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163fcuagrjb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bsxfmwhw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163sxreedzu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163iiotzuud.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163utapbfca.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163upqjpnle.html

println("Hello")
来源：http://www.xuanzx.com/163reowsjjk.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fzoayeer.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163wsrbrtan.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163biaglsou.html

s"值: $b"
来源：http://www.aibaodan.cn/163apmwakxg.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kwosbijd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ksyxvrev.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163hryjtrsv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163xrwzgikb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ininlqhf.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163trwzpcfy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163hoxfqmog.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163rqzcjgyh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rojjdcdg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163emiihpex.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ommqzsws.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163wknvncdo.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163hvszkxsm.html


<!-- 参考信息 -->