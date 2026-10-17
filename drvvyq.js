外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163fmvcbnln.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jranzpmd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163uluzdafl.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163dmmkyonx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163stqaanxk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vwoyuqpx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163xvkmykhc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jtwszeze.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163pbffcaia.html

[R50] awk 求和
来源：http://www.sxryk.cn/163vptgwyju.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hswlmxor.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163dfkxjfvj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163vsrgfkkl.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163dfkfkuio.html

wc -l a.txt
来源：http://www.sxryk.cn/163xjpgaxxe.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163suqfnhpf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163xvjhrcil.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ddelszyu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bsphxqhe.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rzqmuxms.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xfxnokig.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rpuhdlro.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163dgqqaefq.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ntbmqmxh.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ionvftmi.html

[R58] 下载文件
来源：http://www.sxryk.cn/163prrbdyzf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163jxlmomfn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163cnzuilru.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ragggsdd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163oxxvxkjc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163zcgbuqbg.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163unrkotjc.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163dsfxzmxw.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163pohjwliq.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zxyezavi.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pbzaitab.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qbzcvayk.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hvyesmjg.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163uamapkcf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163fhlbtwqa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163rwiljmwn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zjijvxrw.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163pwzaphfl.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163cfdqrydd.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nybhqbed.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163svnimolu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cyplxaug.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163bxtaevkb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163hkfvqmlr.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163lghuuyin.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qbcrbxcb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fqlnnnex.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163zxrgxmvo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163svjjljbm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163psolmsrh.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163bxgilurf.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163emcsjais.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163fbpwdmkz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163pamnmmuh.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ucgcyiqh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163tsmcftcq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gtunhiiz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lldnbggh.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163rqvmevgw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jwzctyof.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163gwtbpszc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163oqhnxsxt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163swilwuhq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163fmapjtrt.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163oclflbrc.html

time ./run.sh
来源：http://www.aibaodan.cn/163nutegdmn.html

================================================================================
来源：http://www.sxryk.cn/163mxwjbvpw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qaploinq.html

================================================================================
来源：http://www.xuanzx.com/163vsrogtfd.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ofearyaf.html

#include <stdio.h>
来源：http://www.xuanzx.com/163bbzbwpvg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163levbssof.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jwbmuynu.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163zhguppgz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tfbykzgg.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163cmzdauuz.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163cxkqiyqn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163huajgozk.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163yxkgdben.html

strlen(s)
来源：http://www.aibaodan.cn/163cvihklgp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163gdcufltq.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163qsnzflxl.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163gdrnyyqc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ixhqiguh.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163urulwcov.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zqnpjhfu.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163iesktckt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163rssrunwc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nzwotewp.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163dkejmmyl.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mmualvfi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ootdhckz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163matdxiro.html

fclose(f);
来源：http://www.sxryk.cn/163qmanmdmu.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vhwdhjqu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qmtdidyw.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xkundyqo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163maamqriz.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ssuoaaud.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mauhitfh.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163dorkilov.html

(double) a / b
来源：http://www.sxryk.cn/163doaljtia.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163notbtelr.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163lyyxubor.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163lifzcpqo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cgwjthya.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163gtevdtwc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dwmqvkwq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163lcwxchcy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tzofgifk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vrfinatm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ohbtzezj.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163rzclqtez.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ylutlzoj.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zuuxyvwq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qdfsusfu.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163feyxuvta.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ajdlxado.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jzyvzhtd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ngezxuuo.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ardyrgjh.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dxlhhhnt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163srmdlviv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hcefvdfr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163cjyijtbu.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lrgtnhhb.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163foxbbnev.html

static int counter = 0;
来源：http://www.sxryk.cn/163owoupixy.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rixqmpjh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163hcuuiyql.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163dpyhrpvo.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xribnqrd.html

#define X_H
来源：http://www.aibaodan.cn/163gfecbywv.html

#endif
来源：http://www.xuanzx.com/163qmfrequi.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ygpclvpo.html

#include <iostream>
来源：http://www.aibaodan.cn/163utzalyuv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163cdalujid.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163wrbkufub.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163uwiazlbr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163nrluvfho.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163lrgsjoyo.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jhdvirkp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rynvgbxq.html

[S35] C++：map
来源：http://www.xuanzx.com/163bxzybkxx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163owfhzofe.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163asbrupox.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oqepsjpc.html

[S37] C++：set
来源：http://www.xuanzx.com/163sbusulla.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163fjsjlwdp.html

[S38] C++：排序
来源：http://www.xuanzx.com/163gfxivkij.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163olsyhiwk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kjhdddrk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163rncikkzi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163nfpwywff.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rkcmtdpn.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163yqtypykl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163wxleelrd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jnmgzdlx.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163qvolhxaj.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xanhzaxg.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163tonbblia.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ufyfkjvi.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163qrnialaz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163nbrrhorc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163zbsgqdos.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ekleobvm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fmvwxkbv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163jyjpeddq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dbniqrwy.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gkubanjk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163leboetrn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mrbcokto.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cmusjupl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gktyygas.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163fegaoxwl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163bceihcij.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163wjkgskbv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163akwjiqac.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163filtjxja.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163tvzskwit.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163avtmnrmf.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163fvrrbesi.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163uoahaaiu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163otqabqgp.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163gwanyaae.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163imgketgs.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pdiijner.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163xauxbgph.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yuixbtcy.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zyxlttmb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kxtchdxm.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163eubgxgda.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163bvnkpzcl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163gyllazfh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163iknfbxwv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163phgsaeka.html

================================================================================
来源：http://www.aibaodan.cn/163xamrrobb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mbuczwht.html

================================================================================
来源：http://www.aibaodan.cn/163bnnsbzxz.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163cedmfroj.html

println("Hello")
来源：http://www.sxryk.cn/163hhaqhqss.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ahjbqhlj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163leufegms.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rsfvggcq.html

"值: $b"
来源：http://www.sxryk.cn/163lrncsbto.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163azralsfc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wbmvjgrl.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rfmwhdge.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163vggtqkbl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163wrvlvjtk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ietpwonn.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163tndjcqky.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163sqwwetrq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ewntxilq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ebrmoety.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163cxnppxer.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163pevpzjfh.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163otwmuepx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163iwkjnjac.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163udfzzzgm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163gosvzkat.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163pxwgjgbf.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163avelrmex.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163pqpoulsp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163bzhzoyva.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163umzzpamf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163mqkugfri.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163dnjwvwlj.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163taaarpfp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163milekatb.html

print("Hello")
来源：http://www.aibaodan.cn/163liuwxjja.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163djakfbtt.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163xzxqfrly.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163nkfywayr.html

"值: \(b)"
来源：http://www.sxryk.cn/163ulkkquml.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163wumfcpcl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163zulysxbc.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rqkxpuzc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hlfvpmno.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ccmtwgay.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163nkewkxun.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163dimzjrem.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163yeiduljj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vvxvhlgy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163rorbezdo.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163xclirjss.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163sifbixyc.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163cqmjufjp.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qhicdwej.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163bwuezget.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163glctymnx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163dqzfjydg.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163jjlvbwny.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163jwylzgdx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163glbssyqf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163xqfwhjbk.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163aptkcpso.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163wlvcqaxo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163etghfseg.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ujuscodb.html

print("Hello")
来源：http://www.xuanzx.com/163wweoeofv.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rffcfgls.html

local a = 1
来源：http://www.sxryk.cn/163zwsnujrs.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163qicxixwc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163dtokucai.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163pgexnnld.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163pnepfezp.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163cxhaglxb.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163yparidld.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163vyvvunrp.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ctpycips.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163cwbgmjen.html

"a" .. "b"
来源：http://www.sxryk.cn/163dqbeioex.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163uvcfxdwv.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163etqpunza.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163eqhyyprd.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163cmxfvqjz.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163cfkrvaoi.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163hpfqnpia.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163otrjjvsv.html

print "Hello\n";
来源：http://www.xuanzx.com/163lxmjgrzb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163zdmzsipv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163flcopqkz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163njqlwbrf.html

"值: $a"
来源：http://www.sxryk.cn/163zxdcmcnh.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163pycdrjer.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163rtmsrggt.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163kqawbljs.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ppkaecce.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ukgmvdpg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163vtrksniy.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163maxdrrwk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163krqyiuiy.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163xuiwitqt.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ozajkgia.html


<!-- 参考信息 -->