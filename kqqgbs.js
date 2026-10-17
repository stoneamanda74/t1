外链999!wailian999！

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163yaophtia.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163yzdhpgoe.html

wc -l < a.txt
来源：http://www.xuanzx.com/163xmbmoffo.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vnxqehqx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163sargkxsp.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xpcmruqn.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163luqntmhk.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rrbehbrq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163jzbwgklx.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163myjfibll.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xpnorhrg.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163eeyxtsxl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163jcsghvxj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163uwasvure.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163vddjnpsh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163yppkieap.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163eopnrmgr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mdegxlsd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ejtqlokn.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vaufholq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163fwzkbnca.html

[R52] 统计行数
来源：http://www.xuanzx.com/163svswbcey.html

wc -l a.txt
来源：http://www.sxryk.cn/163vccrnwta.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kiilqzay.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163fapluxvh.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163mmdqkcwu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qykbveig.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163otwpuxak.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163luynfehd.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163fgxhkkqe.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ffcawwnx.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163kddcjptt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163sgjfnaxq.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163yswkgupr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wumqmddr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tyfgtrwl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ajooonnh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lrvmrpes.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163zoycgwri.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163dredahqa.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163yhcpcjaj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163dlkuycwn.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163cfkxvbjp.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mapumexk.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163pvezocug.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ejmtucef.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jlanhxpj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hmrfcgoa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rmhlctsj.html

[R66] 定时任务
来源：http://www.sxryk.cn/163xwipgnbq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163yobbtjof.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163stcqnwkv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bwumrohy.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hbmrtaxy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zomxslfh.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163deowrfpq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163dsijlafh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163pyrqnkjt.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163njrbspmy.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163yawgulab.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163jdtwckhr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fcjsrsgg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163wcwlebrz.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zxvvfmko.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163iurzbxde.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163slugfnla.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163gatdcbbv.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163tarhwcrd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163idvfxuoy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163tbyewjae.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163meymnjwn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163avirqfwx.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163bnfyivaj.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jgfathno.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163wmpmbarh.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gcurxsai.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163zxuaflvs.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163obpjpasv.html

time ./run.sh
来源：http://www.sxryk.cn/163ktesgjnk.html

================================================================================
来源：http://www.aibaodan.cn/163siwuzokl.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pvcfnubu.html

================================================================================
来源：http://www.sxryk.cn/163gbbjjugh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163alxojfjc.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ppucvlhz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rzvuzouc.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jyonzbvh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163crcqrtho.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ykkqcgds.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wkhsvaed.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163sjmwalvi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163uwyuseul.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163pdjuxgah.html

strlen(s)
来源：http://www.aibaodan.cn/163ocwbtbxe.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rerjpreg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163fkmumeyt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hytybnxo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cnellqoq.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ogxxoryj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163vtcpnatd.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163vbvfvydh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163owamdlep.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zkqbazwp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qleawfaw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163kbinlvxf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jazzhsvk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163exluiscs.html

fclose(f);
来源：http://www.aibaodan.cn/163quqnjtty.html

[S12] C：写文件
来源：http://www.xuanzx.com/163petbllfu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163goobmxta.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kpdrkjqs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163muwzhdth.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163crnlbecz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163iubisjvy.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163eyfyvxuz.html

(double) a / b
来源：http://www.sxryk.cn/163pcvvhgmq.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163noqsbpnx.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163rzbvufpi.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ukhzgong.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lwxgydzh.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ihzeicia.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163eojergze.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163zergsium.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cajinrsx.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163hcfjkpgc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bwvktcpp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163uetexzsj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163deaebdyo.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163dbzishrj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xqokbaaz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zasgehel.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bdtljana.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ahkdiota.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163dstfcwrl.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163qpxvnkwk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163brwzbivo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163huskocfe.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ekjhjscu.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163gizdqrdo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163xifconyd.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163itojigot.html

static int counter = 0;
来源：http://www.aibaodan.cn/163kppoysai.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163gdwfblxn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163qxcmiceh.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gcjsvdeo.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zqsckymj.html

#define X_H
来源：http://www.sxryk.cn/163lgivyeho.html

#endif
来源：http://www.aibaodan.cn/163garyzyix.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tqqwspmi.html

#include <iostream>
来源：http://www.aibaodan.cn/163ptjmmlru.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163haayzumm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163nvqjrkoo.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163obozofmv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163fdheosev.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163iedzysxi.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163xftnqzgi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163lanloldc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163aqtyeqol.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zicfguhs.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ofudtoyy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ifjwuopq.html

[S37] C++：set
来源：http://www.xuanzx.com/163xqyyhopc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jpvkasdz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ydoegjer.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163mbajdmoj.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163aylypoda.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163pctwxobh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163mukytksq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cfaiqqan.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163nrwslbkc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163lgqhknor.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163xuoxnxhd.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bcunuhys.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wuaodogf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hbfeusci.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163kzrhumey.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163sazkpbun.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ahwqsomq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zpacoylb.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163pchuppdm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ntgmvsxq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ifydxdes.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163itbwjvzt.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163btwccqhq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163anyvoxfi.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163csumvxwr.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163azrhgeyc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163iiukwsul.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163sugzevro.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163pjvcwklk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gwhxkghp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163hjgisxcx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163gbjdfpvb.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163yyifumwb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163xhyukdov.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163gekmhoeg.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163wbiltqnt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163hjnqztul.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163gwqeyngg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163iinpkgay.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qidspzgg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vjhqqoef.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163yqxstssn.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163wxbwktkv.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kbftsrxo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163yzbywwfb.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163iebtnues.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jwwdivdm.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qxorednn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xczclpkb.html

================================================================================
来源：http://www.sxryk.cn/163suvdnnhe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wzehjpme.html

================================================================================
来源：http://www.xuanzx.com/163rcylelko.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163whmyrxju.html

println("Hello")
来源：http://www.xuanzx.com/163bleqdrek.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rovsjibc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ekavzrzu.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163cexjrnxc.html

"值: $b"
来源：http://www.sxryk.cn/163hsrchrkc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163bhkjrgbg.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lltbrjvj.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163kfklyaiy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ujvskjdz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ddkxvirt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163udxxkfba.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bsgofajj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163lhyddkzd.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nbdrvmif.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zknmzhpt.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rdnrgkam.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wjazvoli.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163rogugcur.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tapbnied.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163gdmlhkvo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163agvopqzm.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mygfjhry.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163wqnawtok.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163orzatrkg.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163wxqilutt.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163xwhrxdyf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163dsbrwzgf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163sfovlqyc.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ozztqdnz.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ropjukiu.html

print("Hello")
来源：http://www.sxryk.cn/163opeconvl.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163iquligxn.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kztkholk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163alabdnwo.html

"值: \(b)"
来源：http://www.xuanzx.com/163mixiyqwg.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163hzzlofkb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163wkmrejev.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zbcihmhe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163sriircdg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163tibrwmnq.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tkyqbbkp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163guuormlw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163yskhzfxd.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163qltuizhj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163olqohmvm.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wyzngsfs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163atqjszgy.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xmreowqg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163clijrwmd.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ccnvonjg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163muhnwdai.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163nlfdkamb.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163hansebal.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163uwlsxdbw.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163xdzapmqz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163yhwsxbhs.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rqwyiffx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163mffkjbeh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ckbqidrz.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163gyngncwc.html

print("Hello")
来源：http://www.sxryk.cn/163fptkqaoo.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ouzgyqjw.html

local a = 1
来源：http://www.xuanzx.com/163szcxhxmw.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163gnnzrsmn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163qdhrfcsl.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163iylkjryx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163owgbdtct.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163xeovwzfh.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163spgphrcj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ootdykon.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163zrymerys.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163qsdnages.html

"a" .. "b"
来源：http://www.xuanzx.com/163kfsgjovh.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163hmcrtcat.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163sqjropqo.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zejnhcbf.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jkldhyld.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163slsuptgk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163lgdwnzrv.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ymebssye.html

print "Hello\n";
来源：http://www.xuanzx.com/163qdtoczeh.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ccmhapao.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163wsxphijb.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163uxtdxofa.html

"值: $a"
来源：http://www.sxryk.cn/163jqkoxlur.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163yexgzzrw.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ohxlvvnw.html


<!-- 参考信息 -->