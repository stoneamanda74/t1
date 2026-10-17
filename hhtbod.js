外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163xzeckgkz.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xbfgxcbq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ljesnibz.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163vqxpdyen.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163tflxlcpr.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rwukhjzc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ucnwfufi.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163jqsjsmos.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163pajubfge.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163eeyofhml.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tviaevvx.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163dxibivpa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hoeaxegy.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163biujerjf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163pxrigkeq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qdwbqcgh.html

files=$(ls -1)
来源：http://www.sxryk.cn/163aihvqdic.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jswxucjt.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163cqgvbwlg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163vsdcsoza.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163idxlggdn.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ibzjblyw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163bpqxdmba.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ugkkscef.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fxgbnkks.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163srhyexhf.html

wc -l < a.txt
来源：http://www.sxryk.cn/163knputdpl.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163kinsvyef.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hirrxydm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163fmhbxqqa.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163bjxybdpk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nbigthzn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163kumpdfka.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163htwjhieb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163osnsjysh.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vjcwoywn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xdphbbwj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163coxailzs.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163btqbrwog.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wzypgrum.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pjtugydu.html

[R50] awk 求和
来源：http://www.sxryk.cn/163fcowxzci.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ahujwvkx.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163pjliosao.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ngowbqbx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163etasacpy.html

wc -l a.txt
来源：http://www.sxryk.cn/163uyjkugpu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ejnytfsm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xtiijlpt.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163uxluobdg.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jxcarqkk.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163fzjahtjf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163rnnvbdfw.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hvishxcr.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163npofdngf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163axlfdenm.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163uyxwmbyi.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163acldmcfe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163tqbzhofr.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163pujnzupc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163kpiupxdz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163wdjxptgv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lnijqetz.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163qwpiqvll.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163aozeyymy.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ooozazkx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163qtuubqkg.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kvogwzwr.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163suwfacoz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ghvieemf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163vvjawfds.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yhrwpbig.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163pkhxmena.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163kemekrve.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163gvkluapn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163jhdbgngz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ttunxtsh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163oayolyat.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163xvqwtube.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zwslzntr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nltxdola.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163dsguhdta.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163eazyedaj.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163qvocedye.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163rahexrbv.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mmuswarx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163tpvsstdj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qxtcjwpg.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tkxelmsp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zjhmrrub.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163sezsjqwz.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ndofhwpb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163uokrozdb.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ygvcqflp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163uygxjeac.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163sywmrlbc.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163lxthfgso.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163szrzgebg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nyeayzng.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163zlgbpkgt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xgqrunfl.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ijceawuc.html

time ./run.sh
来源：http://www.aibaodan.cn/163yxodysds.html

================================================================================
来源：http://www.xuanzx.com/163saklllyw.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163euccmgib.html

================================================================================
来源：http://www.aibaodan.cn/163pbjjcpwx.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163fwezxrih.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163bjsdbchh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163knfymfef.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vvxnynqr.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163szcdvsfm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163sfvvyjcx.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163tkxjtzcm.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163tdbvsqrd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163qiokybeq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zfquhhir.html

strlen(s)
来源：http://www.aibaodan.cn/163ozqgmszk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163nrhxzybd.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163lkhyjhev.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163sxgyrjdn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163lnrqqyvs.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kosntabs.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163jtqtkmps.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jwbeihgk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wpjlebhv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163rlkaxsng.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163igmrhcvk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163djomfsfc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fdhshzka.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163isihkrqg.html

fclose(f);
来源：http://www.aibaodan.cn/163xhutloqy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163sfitvskm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163kzmkbylx.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tmvjwyjk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jhunarmf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163axmkssuc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wnwbarzs.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bsvpgaat.html

(double) a / b
来源：http://www.aibaodan.cn/163gpavjznk.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lzsvefve.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gyfqrhex.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163vmlugebn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163uvsvsbxt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163haydpadr.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163vogeufvc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vcvbjlwy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163uwxqiejb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163bakmbszg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ztebkyeg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163aywgsxkw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kbtarssa.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163fummfgjj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163blyutmbe.html

[S23] C：随机数
来源：http://www.sxryk.cn/163oklvgbcs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163wgswnzkg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163pgqzsftj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163rwebktwz.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163xymvtuyr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163wjixhcld.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rbkhdvir.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163bbozcndx.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163nhttblfq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163sgrocrvg.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gkcfpkxa.html

static int counter = 0;
来源：http://www.xuanzx.com/163gszdlrpx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163enjdweff.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gnlwkzmt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vjlbqetu.html

#ifndef X_H
来源：http://www.sxryk.cn/163zuxtjdks.html

#define X_H
来源：http://www.xuanzx.com/163apbznwgz.html

#endif
来源：http://www.xuanzx.com/163dmpycjjk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zjouaxxu.html

#include <iostream>
来源：http://www.xuanzx.com/163psnqtldv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163kpsshzqo.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163rsjkfvbj.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163btdtfrsk.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zoezfxeo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xuojyibg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zrmhyknw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qvaxgspd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hgvipewf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mvpxuvky.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163neznphkr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aiurdlgq.html

[S37] C++：set
来源：http://www.aibaodan.cn/163phfkxxxi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163obtuzgvm.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163bdjjhoea.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xxaelwtz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qcjvzqnn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163dcdurkvz.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zexwpegi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163krnpzofe.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163roxzowyv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163cwcimjvv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163eofoojhx.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163okuyvdrn.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ovhoslef.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163wnbdpyly.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163yglshmkm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163mcyrycmm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jpenppia.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163isjfjqnb.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dlyxgesd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hwszyghi.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163dwmycwsf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163cjyxxtrg.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163cdbqchrx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163avnkvbam.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ftrdiwsl.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163miyuhmru.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lvcnamqo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ikejeqbf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wjecyosv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163eghpjjkq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ztgumjav.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rdxmifpx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163caswqcwh.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163iqbkdbti.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163hpyzukoo.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rcerworq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163boouhcnu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163rvgfrnnl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163rmbofnpz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163odjkaopz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163lqsknkkm.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wskdarmf.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163upgwujji.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163afdfgomc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ztgfzxwa.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163cemosdrq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163wpdxmwbv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163zkmlxpzm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163nwejnasv.html

================================================================================
来源：http://www.sxryk.cn/163rxohpfmy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xvqqohjf.html

================================================================================
来源：http://www.sxryk.cn/163vzsywrob.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163nmvwywsa.html

println("Hello")
来源：http://www.sxryk.cn/163qkvavqyj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163yuawdxnh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163mcovcmmw.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163sjqtcxpx.html

"值: $b"
来源：http://www.xuanzx.com/163wbfeqlpl.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pvfqfkof.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ouyifjqx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ngeecajq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xcebgslo.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mvsompfd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qsnbyqwu.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jyluuynn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ulmskrgb.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qlsynhqv.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163fqffqagd.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163yhfflket.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163csiupbdf.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163nrlbygjw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163imnrfvfb.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163eslkcvkx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163wfutcpxk.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xrimwwyx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163gdclnjum.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163buvhwwcg.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163fxammrjy.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163jslyzlqs.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163iaafhibu.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163nianbppa.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163liryzkjt.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163dbmfseab.html

print("Hello")
来源：http://www.sxryk.cn/163gpiaixqx.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163esmgitbk.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ufwphbsf.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163skymhhhc.html

"值: \(b)"
来源：http://www.aibaodan.cn/163roevsgmk.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163armdeyxt.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163eagwqvly.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wqgqshrr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wblqxisi.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163kotmmuvd.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163folbkrrw.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xozamrai.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163rwowpbqn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163aygbktne.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163joemjqfl.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xuzzacjm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163gfjrskey.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163fiyzaqxp.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163cpxdhwni.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hvtmpgqd.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163lttwbqwg.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163aefrcclz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ogzgzrne.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163spyxkomo.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163rvingrqs.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163zepvdxut.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163viokzkds.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163fulxqoaz.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163gasvkbsl.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fblcbnwz.html

print("Hello")
来源：http://www.aibaodan.cn/163yamcmxww.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163reympybr.html

local a = 1
来源：http://www.xuanzx.com/163qtxbrkyo.html


<!-- 参考信息 -->