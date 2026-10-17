外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rmawzvfr.html

[R58] 下载文件
来源：http://www.sxryk.cn/163mhgqlsao.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oavnvnaf.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163xfhpztzz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hxpuimcl.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163jfgwnrli.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163kxxiyuge.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163qqdgiann.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zirydeoi.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163nvfouach.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vljszdoa.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163dalctcss.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dykakmnw.html

[R64] 结束进程
来源：http://www.xuanzx.com/163thnvytiy.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163etuslvzj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hjnudrgn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163tebqjrty.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xkqtnqzg.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163enrxmzcf.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163cbqtlzfc.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163baftbrgt.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163uuwxpdlw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ratewnwl.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pcozrkmu.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163aquqwzje.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163seixawvw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163iavnpjmn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xxrwylfv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163mzoltako.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163tvvitfom.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jpmmlliu.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163uuvmfedi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ltcpogjz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163djjozxfg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163olfzmzrq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163cehumjdi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163myxhdtfg.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163cqyazifg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hnfrovks.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163lgunoosl.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163mffsibah.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163gcivszea.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163gdyfddvs.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gorqurhm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163snygtdfm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dfjvxhvh.html

time ./run.sh
来源：http://www.sxryk.cn/163ujvxyfea.html

================================================================================
来源：http://www.xuanzx.com/163maaaovyt.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qcujmdbz.html

================================================================================
来源：http://www.xuanzx.com/163ifghrezz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163dcloyczj.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xeetbjpo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163zikbgsih.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163kzhfygte.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163lgazdkuu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kuubwxxo.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163tyinlkhr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163sabmnjum.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ivvcbrzr.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163bstapxtu.html

strlen(s)
来源：http://www.sxryk.cn/163gkflfjiv.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ykiogbvh.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163eifurifz.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163gzujecdx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cckggkat.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hqtaatbh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163eqemahnl.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163sdxjxzlp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jwqzsvev.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163fpwcodce.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mrjpaxju.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163bpnehsed.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163wqmjqwfk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163przkjeio.html

fclose(f);
来源：http://www.aibaodan.cn/163vtqblzlg.html

[S12] C：写文件
来源：http://www.xuanzx.com/163pxtmjbte.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163oucehaso.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163apkhlmov.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163lpfdccjp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mtqdbjlx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163uqhrzimk.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rqwyieel.html

(double) a / b
来源：http://www.sxryk.cn/163ssyipcpp.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163knkaeqqp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163seiratfl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163kbzyebya.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bfohrujk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163dpfsrzpc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ggtelfsx.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ifktiurw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rlqofaix.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163htpqhnqd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hsvjihyw.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163gjuemmqt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qxzmcjdw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163xmzscvul.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ocnkeyep.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dofeyfhr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163sexgbdao.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ghwgdsra.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163okidlczh.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kggmgqbj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163azkpceoe.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mvhjsakt.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163grgvbckq.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163myafglua.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dbymdnpy.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tmlilkrv.html

static int counter = 0;
来源：http://www.xuanzx.com/163mngtpkqe.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bpqdsexu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163uphiwiuj.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mbqimapy.html

#ifndef X_H
来源：http://www.xuanzx.com/163zauwsbnw.html

#define X_H
来源：http://www.xuanzx.com/163tcoutuca.html

#endif
来源：http://www.sxryk.cn/163plpdecdj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tozeidvu.html

#include <iostream>
来源：http://www.xuanzx.com/163reczgowy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163vtwdrsfc.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163lnmvtkzt.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163lwwvuzgz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163mquziomh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163zebquart.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163wofwzyly.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163udencgsg.html

[S35] C++：map
来源：http://www.xuanzx.com/163qztbrfea.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xxgumnyt.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163tmhghuid.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163taytmxnh.html

[S37] C++：set
来源：http://www.sxryk.cn/163igcaxqpp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jhxeznfm.html

[S38] C++：排序
来源：http://www.sxryk.cn/163sdhkwmkf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163rdprzezx.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rezbybiw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hyjmfapz.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rmcryima.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wriluhnl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163eebiyyjq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163sjwksrrm.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hznmarhy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ehfvqfmh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163nffcuujc.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vmgaulfq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fdnscdgq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163reqzwpfi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163iygrhkgv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163tcupforu.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163hulfftbt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zsumdrus.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163pvlzngzq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163frrovoum.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wlpqqpzd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163zeegumth.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ukryiexs.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ggokeywc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163fazvnfcc.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163agljpacj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163fkdlsetn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vnyppcgg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yxvzghhc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nrpnjrwn.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163hblbhhec.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163bvlrktzp.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163viairsra.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vkwsbyjg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163zqxdxtnm.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vchkklcf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hxbnhojf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lhtozkom.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ynwsvzuc.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163nolmwmhc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163cnzanrxt.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pvtedclw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ucqcsyki.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163jszyhvvc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zctlmhin.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163fmoorwjy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ecrtircp.html

================================================================================
来源：http://www.xuanzx.com/163ciaccovi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gtaqtjej.html

================================================================================
来源：http://www.sxryk.cn/163mknbjxbg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jqirweij.html

println("Hello")
来源：http://www.sxryk.cn/163rluozaxv.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163iwuajcmy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163irqoluep.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163gxwzxvou.html

"值: $b"
来源：http://www.sxryk.cn/163rzboedad.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ptxtlebd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163nwaxzjsn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163kiwbkjbl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163jxvoewuh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163dfrjqxto.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ydcxixcq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dacvedmm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nmzwacwb.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lduerruu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jonpengm.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fhjkezdh.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163davfkxxb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163zfxuqswl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163glwyjkqz.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163lsbvzgvo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163plkvalcr.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163iayfxjed.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163kcljtvpt.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rpzoxxdh.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ofbvkxwo.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163cdzijgoq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jnxqtxhv.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163mjyavebj.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dikomemh.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163aznquhnp.html

print("Hello")
来源：http://www.aibaodan.cn/163naymardf.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163tdeihcge.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163fwszobtl.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163igcwhiha.html

"值: \(b)"
来源：http://www.xuanzx.com/163uklmpzrn.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kloxydfm.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163tfonczag.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163uhsviqyy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163pjfxsrhz.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ngkhrqme.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xhhfgzhc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163buxuppzm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bqlbdyww.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ovsjhayu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163njgnvnid.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163gmadecbs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163uasnpuyx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163grfcaefl.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163epqidvyk.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163woynqmpy.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163idsoznwr.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163rwxwnmgf.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163gbxivddt.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163mieksuda.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163mamkxckh.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163exvownul.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ewpgdrzt.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163btiyejeo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163mkdaguqv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163igpckfec.html

print("Hello")
来源：http://www.aibaodan.cn/163rxpknstm.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163pvdlsntn.html

local a = 1
来源：http://www.aibaodan.cn/163hxmbhfbj.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dptxyffj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163nyzpxmuc.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163pfwtndvj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163hxwhdqbv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163eibkoprd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163yqjmqxat.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163yehbpmiy.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wkyqltiy.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ycgwungj.html

"a" .. "b"
来源：http://www.sxryk.cn/163ffdhlhmz.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163dcbsazqr.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163apwbbadb.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163oshwkkqw.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163nhmkzhgv.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jfyezdcr.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xmdsrjqu.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ukfdcoen.html

print "Hello\n";
来源：http://www.xuanzx.com/163jcuveyci.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163sguxhnpk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163oyamgtvz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163uoazvagv.html

"值: $a"
来源：http://www.aibaodan.cn/163kbeqgmaj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163fqfsymtq.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nukqehvg.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163kydntqpi.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163gwpdgtwe.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163nemkicde.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163qgfswlrl.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163rrjghrgo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163xqszstwu.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ziahjosr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163uamoutfj.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163efkukbyi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163qalzwzoj.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163mcrzhuhb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163holazdjm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163gpxzgpao.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lsrauovl.html

println("Hello")
来源：http://www.aibaodan.cn/163mtjajltt.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163zbeqreqi.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bqsocdqg.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163uluaxsvq.html

s"值: $b"
来源：http://www.xuanzx.com/163wkbazpvz.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163rumeldaf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xlamdgir.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163tvxgqqov.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163roccnrlf.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163dqdhqpoc.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163fwhsoppw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163mnsitgfz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163oxtpbueb.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mjmcfpql.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163izikxjkb.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163txdyiehy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163spwjrjjk.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163hjzhwmcc.html


<!-- 参考信息 -->