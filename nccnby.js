外链999!wailian999！

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163iksquihx.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163uyzkoxvh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ahwgmmxv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vgrskwap.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163mnfbylzv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ezgblefa.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163yqmfqepv.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ijacizic.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ticsiose.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163yyslxxyf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163aftgqjaz.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163zdspureq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163bdkpebbv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vaczzsjq.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vmujbdth.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163uravjuok.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163gnbyykwt.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ommmopqh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xjvzbfrh.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163lgnybusg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163entnisqi.html

[R52] 统计行数
来源：http://www.sxryk.cn/163waszdgay.html

wc -l a.txt
来源：http://www.sxryk.cn/163pzyzcchx.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163wblizxht.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163xdtnsxpc.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163skkdlfmg.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163sycwdwuq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nzfjigpj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wcjtqyxg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qwhxjqff.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163wsivclqb.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163maipckbq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163iwfmgqug.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163jafnxbhh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mukdcfoj.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163jpenwnpn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ganspiws.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163urcopufe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163idsmnqon.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163yvpuwvht.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163davndtow.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163qnqqznuk.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163equwdaib.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163oezmmcug.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163eqvlyoxt.html

[R64] 结束进程
来源：http://www.sxryk.cn/163mqwttyxa.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mkjyinav.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163covyegnd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kiojrdns.html

[R66] 定时任务
来源：http://www.sxryk.cn/163aspgeppx.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163rtbzzvch.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163lemdajjd.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wymvdyfu.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jrjfzaxc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dhyksyno.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163cjnlhiim.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vndhfghy.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163awjlnvor.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ebrvklbk.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lkrxcilk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163acyssata.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163wnbjeexn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163hkwtnydl.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nqiyyhfh.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ngelufbu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163knxfjadw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163akehfbwv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163neygrvwp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yqgvftef.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163nwngngmq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163buubgyjr.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163sreouhbj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163mtzmrkha.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163qtvqccmz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163bjcsxpxr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163btdqvxxn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163wsqghzmn.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163drlujnne.html

time ./run.sh
来源：http://www.xuanzx.com/163uybovxyo.html

================================================================================
来源：http://www.sxryk.cn/163bbanlfzm.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jpemzpls.html

================================================================================
来源：http://www.sxryk.cn/163wfgliukm.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163yjspncee.html

#include <stdio.h>
来源：http://www.xuanzx.com/163bpenglqc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gfpvhzrh.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tklncmvi.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163olmfslpx.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ktqjiubr.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163yvyavzeo.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163tnqsgdck.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ffkhsscr.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163wnpltprc.html

strlen(s)
来源：http://www.aibaodan.cn/163jwazyeen.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163fxomdyii.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163qarpqlih.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163hlakistb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xkfowlhs.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163sqdqgftq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163kuavdwnb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jamlfbhe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163rnkmkzxh.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hswlxlrc.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ydmnwuqk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163apuhrlez.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vqtphqle.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163gnbihrup.html

fclose(f);
来源：http://www.sxryk.cn/163vkpnzohd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fhcxswlz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163habnpgzs.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163rgsmhrzm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163eldaqhgj.html

[S14] C：枚举
来源：http://www.xuanzx.com/163wzhzuqqr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163owkpmrla.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163cjpxzabw.html

(double) a / b
来源：http://www.sxryk.cn/163sxbadduh.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163xwnkxxst.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163oycooupu.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nqbjwhxu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163wqtkzanz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163glldxdwz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163irzhaicv.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163pkcdwxwt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wkxqgasq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pvnktgkf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jduplrvq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163olvycvnu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163btpqoqlj.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163twzpghoh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mezphbcx.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jsawexxc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163xnkhgawg.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rvsqxcxt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163suzsylar.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qiezfrag.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hvxrswcr.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163vvnowhyf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ipranljw.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fcyurmtw.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xtexxkse.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ysrnwxgk.html

static int counter = 0;
来源：http://www.sxryk.cn/163orpadthn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163urtyrsyw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163stmrpnaz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cgbzcxsx.html

#ifndef X_H
来源：http://www.sxryk.cn/163eebjvwod.html

#define X_H
来源：http://www.sxryk.cn/163nlcayuhx.html

#endif
来源：http://www.sxryk.cn/163hzevonsy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163jyjyrlws.html

#include <iostream>
来源：http://www.xuanzx.com/163eryxfnnx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163arnoxmzk.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163khfoskcu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qpsbfshl.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163fqqqdxvx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163qsadmvqk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163vqgdxdmt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163fufsserk.html

[S35] C++：map
来源：http://www.xuanzx.com/163ztphcduj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kjogtpeu.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163igggnfvs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mprjwliv.html

[S37] C++：set
来源：http://www.sxryk.cn/163jjoybkni.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jxfzhdbj.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163uskndqxf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xwqhgjqe.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163xpfemoun.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163fecojujf.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163sumabomj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ezogghqt.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qvaxgupv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163agjjjrkh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163awfsgtac.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gqeiqery.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rlpeyeme.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pizbzgvn.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fkwqeuos.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fvdbgcya.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163sorlevdb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wyeokcrs.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163mbcuqxrq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163atgayvaw.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163dqekkfnh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163bfkwfzsp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163kwrpfwfn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163fannulzf.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163xgyhgkly.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163codpdrtp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163qvzrffkx.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ztgxlpgj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163tevcppyv.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163kpyfehcc.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163axfilwix.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163wmfmibih.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163hobrxghl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163wfommqwc.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163wisefqwc.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163oowvqeji.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163kiiuvdkd.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163epnejghb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163garimfee.html

[S56] C++：optional
来源：http://www.xuanzx.com/163daxlulaw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163mnofadka.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163kwmtbeio.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163iiqxyqsj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163usujqlri.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163huqfsdsy.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yimnkiju.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163guebontc.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ugzowdwg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163jrxtujpi.html

================================================================================
来源：http://www.aibaodan.cn/163epxdbwee.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zarxuafx.html

================================================================================
来源：http://www.aibaodan.cn/163dagaucou.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163pnuokcsu.html

println("Hello")
来源：http://www.aibaodan.cn/163wcjtfbyy.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163evyuosfs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163lbjnawff.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kdfotwoa.html

"值: $b"
来源：http://www.xuanzx.com/163eluihfgv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163girujcyy.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vsvfvtkr.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zazzhcdy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wdggdbws.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ygxiioxp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163sotmoxmx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163tidmarha.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163evhvbbwh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163lwkdkehq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163colqdamt.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ogstuweq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hcbomtsw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163jqkmqmse.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163oteliiuc.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163upifaqja.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ztdasiek.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xslphkrp.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163tsmnejxe.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jrlmjtdr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163zazdfgln.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163yiqnonpj.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zknfrzaf.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rzyjqkqf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163luycyrty.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163wbmmkvaz.html

print("Hello")
来源：http://www.aibaodan.cn/163cjfbfvos.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jvsaisuq.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163scxdctlc.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hjhlekti.html

"值: \(b)"
来源：http://www.aibaodan.cn/163rfofnhct.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163oanrhjcr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163jarcazxq.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163keqvpulu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ztmhdiim.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163uzpweccr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163cucsjkws.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ogfgzdyg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163zxmmsrki.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163gmzibopx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wmpbvucg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ohwnshtb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163gvuiikgr.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163lgmemisl.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ciettjjp.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163awvcaewr.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163zjcokjeg.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jlppjzkx.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163mptbimza.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163dvocluyx.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163hkoinmlz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wpopaqqr.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163vcglkmis.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163kuvqavvz.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163rshzdlqc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163qbsuxmig.html

print("Hello")
来源：http://www.aibaodan.cn/163npmkocmd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163kumwqlma.html

local a = 1
来源：http://www.aibaodan.cn/163asldhtzc.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163bqkvageb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ziqloinb.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163plsuvmnb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yhzxctsl.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hplzeyqg.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163wznxiewg.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163kjgspkbs.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163pfgfgnlo.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163jxvnvjtk.html

"a" .. "b"
来源：http://www.aibaodan.cn/163kxqsyqqc.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163hmxoseja.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qxzlpygx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hzcocdhz.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ruxqfebk.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vhufzbjz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ivpplmzu.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163fyrroxby.html

print "Hello\n";
来源：http://www.sxryk.cn/163nfljvhxv.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163teutchmx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qbnpelcn.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163pzfzkehq.html

"值: $a"
来源：http://www.aibaodan.cn/163mppfcryg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163vfeghxwy.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163erjzggre.html


<!-- 参考信息 -->