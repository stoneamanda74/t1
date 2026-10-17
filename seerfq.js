外链999!wailian999！

files=$(ls -1)
来源：http://www.aibaodan.cn/163vljeiluf.html

[R38] 管道串联
来源：http://www.xuanzx.com/163rqnvgbsy.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vglhcjdu.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ahaayrvg.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163puyofpjq.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163iwnoktjk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lmklpuci.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163vwmshrji.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mytzkpsr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163itapumnc.html

wc -l < a.txt
来源：http://www.sxryk.cn/163qourqbhy.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163egttbbce.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fnwjyepb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163zlqrpaxv.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163inuwaldh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163yaclpext.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163wyorjkid.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ybdnecko.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163smorapye.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163gjmaginx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lebqrmjk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163uzuzhwbo.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163vwuxgzsc.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163mahjfqao.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163rkjtxoam.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163aipsejzg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xdaeptfd.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hxwsxerg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gdofmsha.html

[R52] 统计行数
来源：http://www.xuanzx.com/163vhttuiiv.html

wc -l a.txt
来源：http://www.sxryk.cn/163qzjapqik.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163uklsepqh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163mekeeenr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163inxldinh.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163rpnwegvw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mxhxfgri.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163wpwbphzl.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163hokfmtiy.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163yxfylmts.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163unlzykrx.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nieaqppz.html

[R58] 下载文件
来源：http://www.xuanzx.com/163eirghrct.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163whyurjhf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163plyzdufd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163sxbhwhdt.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163egbybanm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163evlmffup.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gwymdokh.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163aatgiips.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163yaiueove.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hqehgyjj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vswetjzj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163eztrrzvw.html

[R64] 结束进程
来源：http://www.sxryk.cn/163tprmvsyi.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163tukpzkxd.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hvpszlvg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163brealwjn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ismawsbd.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163jtxymmph.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163enaffvcd.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163mdhceasn.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hcdypcvq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pcsylopf.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gyxlgtdv.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163tnxjqxte.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163eolkjnvw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163osbbkvav.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163dlnbqbys.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163pkciivjk.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fzbzkupd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163cipsnbgm.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kndbjyqt.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163wajxekkm.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163dewmbllo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163xhwqijjf.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ztvcvhkk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xcjwemuz.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163sgrirnpe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ckfyxlzm.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163zrcwgldw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163avturwoi.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163oziijwsr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xhptcmpy.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163sfdexdho.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qbionxum.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163gdabwkio.html

time ./run.sh
来源：http://www.aibaodan.cn/163yfyqwcms.html

================================================================================
来源：http://www.sxryk.cn/163huprygbb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163lvelzbix.html

================================================================================
来源：http://www.xuanzx.com/163ntsmposo.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163knaqbcfh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163gokzwier.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163mrffdhfk.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ziaagnog.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163cllyuqxc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jgbxgwml.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wtrcplcq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vnpvpams.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163faspxrqp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163usskhply.html

strlen(s)
来源：http://www.sxryk.cn/163gmxgixry.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dbxiexxf.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163qaxvopbw.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mzuhzfdu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vovvzsrg.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163fkzarwra.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ztohwwye.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163nouusaft.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wlnzpibz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hsfsxxcj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163kvxxrzwd.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ukcbfeij.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163npnhzlui.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163fougeqqw.html

fclose(f);
来源：http://www.sxryk.cn/163gkbsinyz.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hsvhdgqp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mchqrsgs.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163uslfarhk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163npughffq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wmtjzxni.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fzgnydxo.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163jiddkpxz.html

(double) a / b
来源：http://www.sxryk.cn/163kszdkern.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163oudjzwok.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rzobvhia.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163tmcurwkt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163pnpvuuvm.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163eucvjhfm.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163umgyphff.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dqwbmkne.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sryumwwl.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163wqaegwaw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kfrlddwk.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mvpmzkvv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fiotfiun.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hsgwkfxu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zghqtxrh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163lmgdhdzb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163abjvupys.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qogsdzno.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163fawvsnic.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jxpylomm.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163krzmxsbb.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rvwmubwg.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163pxonhxzy.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163pdtspvhx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163pcezvjas.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xvavmvic.html

static int counter = 0;
来源：http://www.aibaodan.cn/163lebucjxh.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hlmbbrta.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163mvagkyup.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163muhfyhch.html

#ifndef X_H
来源：http://www.sxryk.cn/163cecynxak.html

#define X_H
来源：http://www.sxryk.cn/163hdzwxsen.html

#endif
来源：http://www.sxryk.cn/163dwyiagju.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163bcljyrfr.html

#include <iostream>
来源：http://www.xuanzx.com/163orpoqqeq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163kbjrxpvw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163coxwxaqq.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hjqdkpan.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163udjtrvxb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zsjshcls.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ijwfltrm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ltetultj.html

[S35] C++：map
来源：http://www.xuanzx.com/163dokgcasd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tijmzgkj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163zpngbvzp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ggeyzeay.html

[S37] C++：set
来源：http://www.sxryk.cn/163bmoiltri.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163aqzvnqrc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163kroacqbt.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ujggfqfe.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qwzwpnih.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163yixxbcmm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163egckvayj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lgvfmndl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ondltiej.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qzkkpdag.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163naxzaofn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163oylkcggk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rnxyqygt.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163qgaizljj.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163rcmvfhcm.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163mmlczmbg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vxcicjiq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163znnkcehu.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163sadfezhd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ebdtupql.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163tqsjghfm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ekduzqkj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163sqionqku.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163oppxxgvw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ezciubno.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163odxxtsqm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163qdypsavi.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163lcvfwzla.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ekkoyqde.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vnhxvmpe.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163rdrerxwy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lerucznv.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163rmpeuwql.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zxojumwq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ndpretgl.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lznawgxj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kuthcrst.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163bqwmnnjs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163busctgjk.html

[S56] C++：optional
来源：http://www.sxryk.cn/163wzqsspas.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163neimtqnm.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ukmtvfox.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vgjithjo.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ftqthmyu.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lhssuloy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wbikbvug.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163vqntszmk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163xqwzkymr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163drlgmaox.html

================================================================================
来源：http://www.aibaodan.cn/163oiqgesjl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gannsgdm.html

================================================================================
来源：http://www.sxryk.cn/163qkefhcen.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163wccggpta.html

println("Hello")
来源：http://www.xuanzx.com/163kfuqwras.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163tswamhrl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163detgfwiq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163emwjeaff.html

"值: $b"
来源：http://www.xuanzx.com/163agxmlptt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163nnepddly.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qgchnjjz.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163tyqgieye.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ffaciupw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163axnehfbe.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163uztrptci.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163cqelwckq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163cywfhzri.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163oztqshbi.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ftcfpcjt.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163xrrogsvh.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bsvaumee.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163yetjxakx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163yvqwoxbp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163pqzgcvts.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163pxtqpmda.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163whtudihn.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163uzpxxktp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163fybrpjum.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ekfujnlm.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163lbtcygbo.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163awjmzwkj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163aadvegxl.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163tubiasej.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163isprkltc.html

print("Hello")
来源：http://www.sxryk.cn/163imlwmuyg.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ahwwsbzw.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163monghetd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mxyyzzkk.html

"值: \(b)"
来源：http://www.xuanzx.com/163ulsdosex.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163mzgzmlcu.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163abkuwttm.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163bktfbqed.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vdumouzu.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dywmphtz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163uxucvmbs.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163nihztvqh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163xyknrelo.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163frzrnacs.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ozfbgiit.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163vztthued.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163pwtczhkx.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vavofocb.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163waflfcbe.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163xfmjsqzq.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163pzrvlvyo.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163advjdlif.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163zvanfyng.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ewtdclqv.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163xoxnzibm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163mvyqlyzd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163kgpfnmko.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163yctmptfk.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163xhldgeow.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163syvnwfrq.html

print("Hello")
来源：http://www.sxryk.cn/163ntoiccoe.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163djmusjwr.html

local a = 1
来源：http://www.sxryk.cn/163wxgjgvda.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163yxdquphf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ofwjgqmo.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ikqhjiue.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163vtivksuw.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163kfojxmyk.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163haovlawc.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163rwnwlanu.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163anbfsmva.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163okeiisll.html

"a" .. "b"
来源：http://www.aibaodan.cn/163vopwqnvw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163einlgrwp.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163clzxiboa.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163gpdlbqvh.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163djzboqpd.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163wzhfqwkc.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163xqefwpna.html


<!-- 参考信息 -->