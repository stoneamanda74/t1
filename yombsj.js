外链999!wailian999！

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163hvworgnz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163wohatmpf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jkeveuja.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163quupmxxv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163jlpoolnk.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163avrzowoy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vyjhlzng.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163mbtdfcqb.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163wcufxdwl.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163esiwausm.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163itdxormu.html

[R45] 批量删除
来源：http://www.xuanzx.com/163jeqwpuym.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163tcefzpyt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fcycdzcq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163chxwsisy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163rujbinid.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jfizblti.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wblprbrk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163gxrgwrti.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163mehihgks.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163syzspeyu.html

[R50] awk 求和
来源：http://www.xuanzx.com/163whoczsdr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163domsbftu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163yaglzaye.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163fontuoac.html

[R52] 统计行数
来源：http://www.xuanzx.com/163znwlugsy.html

wc -l a.txt
来源：http://www.aibaodan.cn/163kfiftwlh.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163cdtimqro.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163wrtqfvuq.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163qioimnzc.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163utjdzuof.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ecredeyy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163khhinjca.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163wrlmtiab.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nnuyhsdb.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163uxcgtjmr.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163gjndmuyp.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wpayppii.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163brjwfgvg.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163bzmcadrc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ywkajwvb.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163tqnrybkm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ctxxlnfz.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163cjkyrqbr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163awbaxokr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wxodmzpc.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bucuhnns.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163evtbtppx.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nryanqjb.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163jnlededh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qxaqksux.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hjadtuxq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163gtecxzxr.html

[R66] 定时任务
来源：http://www.xuanzx.com/163rsenajhm.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163aybcomtf.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163zaxjnwvc.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163xodeekor.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163roqxmhwg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cjjrlaai.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163cqwtluwy.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yiwbowuh.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163scvebvin.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rqhlzgrz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163byzrhnhp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163xnxihqgj.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163chnifift.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163duugtpsd.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vcztdpgs.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qhcebfxh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163najnlpzb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163fsznitur.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ipbidvig.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163edfizsma.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163rscdapoj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jntrrxwy.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163livssxzo.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ufmnshfp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163nbbfzojo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163vkqugdfw.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ggfqdfzx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163gmdvwgzp.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ynwshnke.html

time ./run.sh
来源：http://www.aibaodan.cn/163nownutlf.html

================================================================================
来源：http://www.sxryk.cn/163ibdcregd.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163rrowzyyr.html

================================================================================
来源：http://www.sxryk.cn/163mpoaiztj.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163xwlmolxc.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nfudtrkf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rsbjvlkc.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wbocqwtr.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zyusgrfm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163vnbgydwo.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ycefjjop.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163lxjvpahf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163iohsqtxq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kxfmlrtj.html

strlen(s)
来源：http://www.xuanzx.com/163wghklbem.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163eyrljwoe.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163byyrndgq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163eenkfdwj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163obwxktkr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163aesekvev.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xpsflbzp.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163heitiuqe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ywuccbve.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163rdketknw.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163zajwrcef.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163kylikjxf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163hofnazgf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wiixizcj.html

fclose(f);
来源：http://www.xuanzx.com/163agfmcojw.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163inpufaso.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ekckjxdi.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163akempfkx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jajpvuoq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wgwsydhu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163uhivtrbo.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163llugvbez.html

(double) a / b
来源：http://www.xuanzx.com/163lsigdikv.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163tdmrrubk.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163iryclpir.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hksotbdn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163tfhmeaqw.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163bdwuvlyf.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163aufupyih.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163lngbkstj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cqaqhxty.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ckyswhut.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rytiqgxi.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163mvxrxmus.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vcymuizx.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163pqnochco.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wbaujfee.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dhyunosz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fiduspyd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163mlguszlv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qjqgpfxb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163siytygkh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163saoudibo.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ymnouflx.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163zwygmqor.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tdshiqzv.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zwghzeif.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zvphllgw.html

static int counter = 0;
来源：http://www.xuanzx.com/163btzfkudk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163siuecubr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163gqeznkry.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zvearcil.html

#ifndef X_H
来源：http://www.sxryk.cn/163mihjbize.html

#define X_H
来源：http://www.aibaodan.cn/163dxqqhhwz.html

#endif
来源：http://www.aibaodan.cn/163yohuqhjr.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163eajdklro.html

#include <iostream>
来源：http://www.sxryk.cn/163blamwtyx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163cudcvrkf.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mfkvlbol.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163bzcqfsbz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dxsvftsm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163btqegytk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ecooektp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163bnbialea.html

[S35] C++：map
来源：http://www.aibaodan.cn/163eemaobvu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163txwyrzll.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163xhdjkfkz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cvaknded.html

[S37] C++：set
来源：http://www.sxryk.cn/163rujdfksr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163pduqrrbk.html

[S38] C++：排序
来源：http://www.sxryk.cn/163uvyxacup.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lmcaqfoc.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163fhmzvext.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163knpvqiaq.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ffreesqy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163tabxjpdo.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bawkmbfd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xcajxfsr.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163rgoupnzg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163seckvndt.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pmzuceef.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zmqlwlit.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xyamorqd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163bcmrqque.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163tpvdauko.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163qqxlpreq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vujibamv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zybxtneg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163kyqzgvnz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163gefbkczb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ckhrvqvd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163uaqelkzs.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163hvzhgfop.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ttyqplvj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163qnmhtgsb.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wrrechjk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163eailaonw.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wmjsvfzv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xctteilk.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rwksious.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163rwrbydnr.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163txsyqmco.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163gfdsmvyu.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163uyzdqxrl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mipsobyn.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nlrnhpal.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163negjtwzo.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qcohcpkg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163betozvhj.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163bkfmtpyc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163rugmojhs.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163cjpbennb.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163vqdpwzng.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xyxflanr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jkyxckgs.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163vjdaugym.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163rcmvbeyb.html

================================================================================
来源：http://www.aibaodan.cn/163pgprksar.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ehxomnvu.html

================================================================================
来源：http://www.xuanzx.com/163jcmcouig.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163wvtbqjjx.html

println("Hello")
来源：http://www.aibaodan.cn/163rrtnpius.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163thipazjb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163sudhybje.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163uvmptnrk.html

"值: $b"
来源：http://www.xuanzx.com/163vpmjgyrm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163aiyfjbrs.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gqqzjlyu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163puwytrtq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bmvdgfas.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ggwdbhmk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wbnwakar.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ombuicjq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163jdnnqmoe.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ztezmycw.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163wxpjpiih.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jzaivgnc.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163szybddfc.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fyjmsuyj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163erlodxwt.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163lxuapjxw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163etljcqwk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163dcueyyyn.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163kvlxbvir.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mxtgzkag.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xceuyvqi.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163nkqwstei.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zmbgfitu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163iquzwimf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163lodjtgia.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163oyjmqagz.html

print("Hello")
来源：http://www.xuanzx.com/163mjzzwcmp.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163eetxouqy.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163fimhmdke.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163khedaddj.html

"值: \(b)"
来源：http://www.xuanzx.com/163fgrjsqgr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163pzeszjys.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163piqxhovs.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163amuxhwxj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qcpjmxgl.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163tjrxtyem.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163lbdkouvx.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163yclsrtxn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163fpopsxwc.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163bmqgocnr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163azndjngx.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163pnabuwtm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163tmggranx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163jkyqgiut.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rolxthld.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163eidiydue.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ikktmwhl.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ztuvhbyh.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163peczqmqc.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163qoovapdk.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vjkucfio.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rnjlohhd.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hhhtnrha.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zmdjijnd.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rxygseqa.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mzlvxgsg.html

print("Hello")
来源：http://www.xuanzx.com/163kjvnxesp.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163mrskvsqk.html

local a = 1
来源：http://www.xuanzx.com/163kywafmma.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163zyszrczl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163czphtule.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163tiqsbkvg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163nqglckyu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163uaskjfcv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163xnpxsnyh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163llncorvk.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163xymrmiui.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163njmsggrq.html

"a" .. "b"
来源：http://www.sxryk.cn/163dmeiatks.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jbkmodmr.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jvxywdxn.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163hbfsxxeg.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ommbznho.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163xxdiwbuk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163kbzwfrdd.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163lrafclwr.html

print "Hello\n";
来源：http://www.xuanzx.com/163onspcjeo.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mezqtymj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163cxxpmmvq.html


<!-- 参考信息 -->