外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ydwbfmiu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163bomzxojv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ccoeoubw.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163uajuhxww.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mnqcnqkn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ajgaglac.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163grxekdpb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163fmqyyghy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163nniyfgzf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qvircqde.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ahkntcmy.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163lxrdzpku.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163tzcmftzd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163nwpixtdm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163yhklcirr.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163zgovotxm.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163qxnezxmm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163fehybavf.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163nvmxdytg.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163eobgpqer.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fglukngr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163xfcfgtex.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zuvbcwmv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163jwdrxnvc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163jfqwmzdf.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163fgkxivcf.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163snpraexn.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xbjfuqtr.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mdkpxutz.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163jaihubvn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163bdpkfihf.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163cjkvzmbc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cfzblgnd.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dqtavbpc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ndxgxgsa.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zsuonbmu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163vuljkfua.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163gssdiqwx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163tdymidbt.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xsigurvc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qahyoror.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cvfjbxxk.html

wc -l a.txt
来源：http://www.xuanzx.com/163llgypcce.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qlbypggt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163sdyabcja.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163vqubaifh.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163yozdioww.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163fwlmsksi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163rqwvmbeo.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jroxrmot.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163aoidsdob.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qqsdpgqw.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hejpuzxv.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163oxslivqs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ggzidjar.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163frhrmkht.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163qyeihgig.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163yhxfhdne.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163svwcozmu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163juxwiizo.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zjqnmgoz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jvbhqcqy.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163rgpzmszj.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163prlbcfza.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wpzuxpfj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163szrzmntr.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jrvifupa.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mhuyrjkh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163fczmxqyd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163lnxrqghh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rbjqaasc.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163pmkotrnb.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vgylnxhq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163zvbibdxw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tgklzwjz.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163jgbvqamp.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mkwvwnxg.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ndlixqie.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wfgcjjkb.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rztrshva.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hgfgefwt.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163hgjsdqat.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163omprzttw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dpggbray.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163krpyjutu.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163wxnjogko.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kvczhvoh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163dpiejsyq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163zrsfdlov.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wjenecfm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163myhgexmz.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pzflsbfd.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ymgnkaap.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xrxtpjqb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jgztdvln.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163aaqmzyks.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hgnmxxso.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163bicjaajx.html

time ./run.sh
来源：http://www.xuanzx.com/163hvsdxllo.html

================================================================================
来源：http://www.sxryk.cn/163glddmwiz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ykruemus.html

================================================================================
来源：http://www.sxryk.cn/163sdcdepmj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wnfjbxxt.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ggriudsa.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163qrgkpfhf.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163fnrwuyny.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163wpmrjawk.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tuccledy.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163olrhxvba.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163fhofqitp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163zvnanahf.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163lukapmij.html

strlen(s)
来源：http://www.sxryk.cn/163nnhyxzzg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bscoypuh.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163triyfrwc.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163fmevdhkh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163hjkildyu.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163zmskmtgy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163iellknod.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ipfhwdlk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lhihzvli.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163aqnthonv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163zankjqph.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ggfxlrya.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ihfoduda.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163qhnxfqcm.html

fclose(f);
来源：http://www.aibaodan.cn/163dsqztxof.html

[S12] C：写文件
来源：http://www.sxryk.cn/163lwenffab.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163cicknuaz.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163vhsppwsw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xzxycehj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163qtyuuwui.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163iwbjyyrg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163qnezvnmx.html

(double) a / b
来源：http://www.xuanzx.com/163zoxsecza.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163deruavky.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163hrrslnat.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ybjdimtd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163zibywwbk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163yrpyqgto.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163lzzpbdgf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163gcnbmxwj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ldrlrmoz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163orwhcmgy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jxzhombn.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163pqbdkuor.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163rnxjxtnd.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163gfzpannz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lpyfclgs.html

[S23] C：随机数
来源：http://www.xuanzx.com/163iknitsmm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163zdgeeujk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jxmnhivw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163otlwepps.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163eaigkvoq.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163igplyozq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163pkqyahts.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ahpdiovj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163bexejygk.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ykmxoqoi.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ztneftfs.html

static int counter = 0;
来源：http://www.aibaodan.cn/163kbfldxbd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qzznrmcu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pqgspfif.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163gtxszcpc.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xzcxglji.html

#define X_H
来源：http://www.xuanzx.com/163gpikfpfg.html

#endif
来源：http://www.xuanzx.com/163iekgfacy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163joyywoag.html

#include <iostream>
来源：http://www.xuanzx.com/163dwuhtduq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163oichafcw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mesaovxy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mmgxxxkc.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ivctnufo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163rigbzaah.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163jndripbj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163egddcqlh.html

[S35] C++：map
来源：http://www.aibaodan.cn/163csvtadme.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zmdgwbjg.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kculcvkw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oxyflgws.html

[S37] C++：set
来源：http://www.aibaodan.cn/163guudchzk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163hhghmamo.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163eonacvjm.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163axrgehup.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ngvlggws.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hnofahlc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rppdwkxo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163adostatl.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163tqgvjjkx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mulukcqw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wgykbdjw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dgphcymn.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vdjwldpy.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zhsvtrnx.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163aulewkgb.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ufrvhyje.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pidzratp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163llutgqof.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163jitxpwel.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jjisngol.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163liilaxyi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163oesmmrkb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163dghmvcjn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163gcqiphwk.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mgqemhsa.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ngozcrwt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163lzstksds.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163lpygvrze.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163cpfnnsrp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163onptbnch.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hamfehhv.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163kdfacmvi.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zfocahgv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163tczrhhrw.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163oredyplb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163kpobgktd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163boycxrxw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xqkteqvw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ghesadfx.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cxdzmpia.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163pegdxnsd.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163unnpucgq.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ptdpnyep.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163dmzjfcyc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163eazpvyrn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163dwmkstyr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163lgwdpehj.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163nouaierf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163vaykjekc.html

================================================================================
来源：http://www.aibaodan.cn/163benkckeg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163mlospoof.html

================================================================================
来源：http://www.aibaodan.cn/163fypiiuuh.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163qsskiwaf.html

println("Hello")
来源：http://www.aibaodan.cn/163hxoffyqw.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lfkmvebu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rwvchcti.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163yvayqefm.html

"值: $b"
来源：http://www.sxryk.cn/163wgbqjxuo.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163bsgwdrcf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163dweqdlgg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ehcznxhx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ffmrdcad.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163vwddomfu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163numucepu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163izjzyxkv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163eridsxmd.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163untjwoar.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163dotzowqx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163vhmctwsh.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163lnblrbqp.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163jonjilwj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163jhokqbxi.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163uhkgzcoj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163uopdzdxd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163hovwxacd.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163uubgxjdz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163edwvgwhx.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163lunvhvxj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163deledcdh.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163rprjaqjz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xavytnca.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hwccedhz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rtgyvtsi.html

print("Hello")
来源：http://www.xuanzx.com/163hthtvzap.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163iwqxqesz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163cshnstwi.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163pozjmfan.html

"值: \(b)"
来源：http://www.xuanzx.com/163zrtlhiyf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163abxkdjvq.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163vxixnulx.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wzkvvjux.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163trymeayj.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163nieipmxs.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ixazenvl.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163uqxbmijc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163kqtnhmbz.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rglhqoei.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163qhrbtbyo.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163mdjrfqkf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163lthtftpz.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ogldjmmr.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163hvoycxrh.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163znxvlisx.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ofqqrppc.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jdmlbmpt.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163jyruloya.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163knbmvvks.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163agxuuoiq.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163bybodakc.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163bixzjwfj.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163boynvnem.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xnfzguyg.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163wjeyieat.html

print("Hello")
来源：http://www.sxryk.cn/163qpyrblym.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fgcnosuc.html

local a = 1
来源：http://www.aibaodan.cn/163qwvnfqlm.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163jorxxgmi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163hytpwewf.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xrhbkcau.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yliccvnc.html


<!-- 参考信息 -->