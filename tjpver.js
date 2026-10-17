外链999!wailian999！

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163camtaifv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163caqllurl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163vjckvjem.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163pfkxvxzo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vdqokamf.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ddiqdghr.html

wc -l a.txt
来源：http://www.xuanzx.com/163estfhrpv.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163tbamdktp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163zreohswd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163tvucdqjz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163yotxbovz.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163wsjaeevg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163rjnkzfbj.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ehyhxxhq.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ktthifml.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163gsulvwoj.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163cplodfer.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163mfwlpefc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163dmndmwvc.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163xyyqpmfy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wapgpqvg.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rhkbqdrz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163rnfavsgm.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163xswglvrv.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163rktevpdw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ucfujosv.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bmeaoezx.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pgkrkmcs.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163zrfsmvky.html

[R64] 结束进程
来源：http://www.xuanzx.com/163piktxtsk.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qmxpsgvu.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163jomcfewr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163uymxbjpu.html

[R66] 定时任务
来源：http://www.sxryk.cn/163tgvuwbjx.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163vczmbske.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bvgodlxv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vmufltdz.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163vwdzwrmq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163mmeiqxwk.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163utzgnpey.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vlotseow.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163recyoobd.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163watkmtso.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163sdtfbbsq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163mexhwrjw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ukxvnvzh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rrrzotwx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163qhhbiewt.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hghrprss.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163uakxfhkj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163cssuahhd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jlyaoscg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ngowsxcl.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jarllgms.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kefrpiux.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163srmgviah.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163nwimomzk.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163sfhgjrhj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zodfmhcd.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vjokslln.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xsnsbfod.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163wjkziiyu.html

time ./run.sh
来源：http://www.sxryk.cn/163idyjomxb.html

================================================================================
来源：http://www.aibaodan.cn/163ldumjfou.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ljnvdwll.html

================================================================================
来源：http://www.sxryk.cn/163mcykybac.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163bgxkshay.html

#include <stdio.h>
来源：http://www.xuanzx.com/163rehzbrjh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163mbmiwmvi.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163pniebrni.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163qmntfnvs.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163iiwsovia.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163aepusmev.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ligpsbhj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163gdiuuwvr.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163oqjzinfw.html

strlen(s)
来源：http://www.sxryk.cn/163pxyxinqb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163tuohdenv.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163dmxwoxtj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ecpmxqwo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163mthknczn.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163eyglhafr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163svopqmhh.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163nljnhzuc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jrhyhnqv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mjotpwmk.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163vpuvnauf.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163iggxylnp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163grnlditc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163haoburiz.html

fclose(f);
来源：http://www.sxryk.cn/163gwphwofr.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yancttbx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dmgxmdbu.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ifpspepd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ozlrtstq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rseoeuzo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vokyqljb.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ibilpsmf.html

(double) a / b
来源：http://www.sxryk.cn/163isyvfygs.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vshlnegq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nplznoxo.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163rvcqhnax.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163pvwqwjsn.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ypngxuwo.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yfihbitj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ntpsczlr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gsjsnlaa.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vaiwsayo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163beupvwci.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163zxwbdkwd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163isuyjmjy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163utuinjdw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jbveimyw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ojpbupjb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163olfgixxm.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vhbiyecb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rtmkegfo.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163wnehvbch.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rcqwimes.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163hgvnukzu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jvoddngh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163vtiavuns.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163pbvgdcrj.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gfddzmye.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pvlcrghg.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lbtmtmsh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163awqofavn.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dgcdwkzo.html

#ifndef X_H
来源：http://www.sxryk.cn/163erslipsd.html

#define X_H
来源：http://www.xuanzx.com/163qpowtupp.html

#endif
来源：http://www.xuanzx.com/163tpfqhrib.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ztbstaar.html

#include <iostream>
来源：http://www.aibaodan.cn/163ioayzowe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163boicmisv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wospabtv.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163rzwxpqwy.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rltpudmt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nqftedyk.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163sjhaprdq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163bknqotkb.html

[S35] C++：map
来源：http://www.xuanzx.com/163rjfttzjs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xrujulrl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163suhjisds.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vndaaidg.html

[S37] C++：set
来源：http://www.sxryk.cn/163gchfdsnf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163xuymowcc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163pvkwpkml.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163msuddtxc.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163igewehty.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163hjbzppgu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163pjpsgxhu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jxsmcatr.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163bsynfdlw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163tlreougg.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wktfiidn.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gnguyyno.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163qcnbybsn.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163fdgdvqzs.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vywstzxe.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163zrbepmjx.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163diarxhur.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163timewaec.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163nmpxrbdc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uwsktkwz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163gyyctfow.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163grlzsbuh.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hsoxioqv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163emntmqry.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vffvzczw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163agkenwse.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163suhmieej.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163tbkefoln.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163egyscfvn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163eozgjptd.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163huvvhbjs.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rcpmwdfx.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163izvfikmr.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163yrcpaeok.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163somwogkp.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163futrrldy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ytxnlnoj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163pcuybzpv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163zlwmfmpr.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xqxcozwb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163avrlzobq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wnvnvlvp.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tzkddrhk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163cgccbeiw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163xkzbouuy.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163kzjoparu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163cxgksvuc.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fitiyvga.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163modnmdaq.html

================================================================================
来源：http://www.sxryk.cn/163mwpyyyyk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fwuilebz.html

================================================================================
来源：http://www.xuanzx.com/163jqoxpsps.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163puvivxez.html

println("Hello")
来源：http://www.sxryk.cn/163dqcefyui.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wzkyhukj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163cqtoxzyo.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163txjkbnrj.html

"值: $b"
来源：http://www.sxryk.cn/163gqwluynt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163gsxsjbmr.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163xgdbanjx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xtepjnpv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163kleunzmp.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zvbvhndz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pruyemtf.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163vhpkrfeb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zlilkuny.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163hzgdknzo.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qkgyksnd.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163icecrudm.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163slbsbhkv.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163msolzmlk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gvewjcaj.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gjwirdpj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163wgczrphy.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163lzdrwihw.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nxzeshhh.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163dqudzmtf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lrpypgba.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163lfmnypvq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ndkgaghw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163bvmsgygj.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xyjeoegw.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163poegeehm.html

print("Hello")
来源：http://www.aibaodan.cn/163yfzgepic.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163nidhubmm.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163fkzlqvrc.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163wdpzhtxv.html

"值: \(b)"
来源：http://www.xuanzx.com/163tbcavmji.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dcokrxko.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163wnvlolhg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zsbofjqo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hqbvfcwy.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163zcubtben.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sirhfivz.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163wikarmts.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163vhbjgjoy.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wvtrizym.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163uzoynaeh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cjvfcckr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ifjepofr.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163lvnmotct.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rrpippiu.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163qvxslcin.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163kstayeoz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163oiyuzypd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163vsqmhqgy.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163oobxfbrn.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163kkqzjtpm.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163usgoonhb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163vebvbgxl.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163xhtjuvzq.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163xylhbcsu.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163lcttfllq.html

print("Hello")
来源：http://www.xuanzx.com/163obixjupf.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163wwguiqhn.html

local a = 1
来源：http://www.sxryk.cn/163nffnasrt.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163fedexrac.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163tnomdpiv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163eoerdkji.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163cpcorxez.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163kzaqewaz.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163bvhzuaul.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163xrabtwpu.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163whjrfglv.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163tqxykdwr.html

"a" .. "b"
来源：http://www.sxryk.cn/163xicwairq.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163bmgpszzb.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163aesungym.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vicpuasu.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hjaprdec.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163mvkdjaqf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163bbvbaiut.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163kybnoxha.html

print "Hello\n";
来源：http://www.xuanzx.com/163vwvlcyeu.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hwhvribq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163rsfqtnim.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163hxhikvzi.html

"值: $a"
来源：http://www.sxryk.cn/163fzkzqmcc.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ikkrvrya.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163yilldlqj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fipklxjq.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163bogxaurb.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163jdmyrioy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163dihifbll.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qctbqcrr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ejqxatvi.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lshpapyn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ynurhghd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163eznweuja.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163jhmyvurg.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163uzlgtcee.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163njocqivw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vgernyaa.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163yaljoexv.html

println("Hello")
来源：http://www.sxryk.cn/163dqswppjn.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hocwqbir.html


<!-- 参考信息 -->