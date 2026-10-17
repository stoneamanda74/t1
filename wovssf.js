外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163dupwlqix.html

[R26] 命令替换
来源：http://www.sxryk.cn/163faousots.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163sbmhyows.html

[R27] 算术展开
来源：http://www.sxryk.cn/163mkthwhma.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163dqahhrwl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ezleeapo.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zligjjuu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jqicvywc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163krmrscfs.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ejtmdbll.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wbhhenvr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163uwhlclqa.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163cocmrzor.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163nluomibd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ywtjhnou.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163oobwkzui.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163uvomdbfb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xkupnvrl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ssjygbpu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163jmayngbl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163xsaxfugp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kkmqzmrx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dolylazi.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163omotsgmw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163aoqegrii.html

[R38] 管道串联
来源：http://www.sxryk.cn/163yarzthsw.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163pjmturvt.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jeshoigi.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163kqfrtbpd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163jvnxpbfd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163pisnrftj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163kdnexuop.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163nxjjsvkl.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qfqlgdct.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ifdpdjag.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163sqobtkuo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163fygswquz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163amjhmkec.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163xlkqzpyy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163oxxeopuf.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vizerxmg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mtrymmzc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fxlqfivr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163uevuurqj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qbwyxpug.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163beaynlfr.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163nzvjcmop.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jhqqmnyn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163iwodbjxu.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ojbxtkuk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163sqtxhpwl.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ghordbws.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ywrzqruq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ahtzmxlw.html

wc -l a.txt
来源：http://www.sxryk.cn/163wtxqqeqg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163aahutbzo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cwnwhzvo.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163mydcnhxo.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163fhkbtrra.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pyvzbqjb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163dijjsqpq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163josxaadw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163nbljutbp.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163brulkkds.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dgiuhmee.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163emkqaeqf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kembzare.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163civlygro.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163aeygzewy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ggoogljd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163axjyvazy.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tsycutfn.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163tiqdcysp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ylscaxhb.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163gvkpuaoq.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163cnwcrzgn.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rgbgxjto.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vrrdeehc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kcdabqol.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163oauzowjv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163xmktxokg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qtbkpwov.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hkuxsryt.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163xomugjlk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vujwqlch.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163cpkccpjf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163smjljhtc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xbczdwxs.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jgwuptmo.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xtfxpaov.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163cpboutmq.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163hdkxjzxv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163mxtwmkia.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163pokliemz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163xyzattup.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163abwixqiz.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wskunaso.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163xvkwcyxb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163pycxnyrb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vobmiinm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jvpsqjfd.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163vcarmmtk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uelhehmk.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163aqwrcomn.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163zyzpisnx.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163gslomcxu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163kcikmjzh.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163dmhsosqn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163frtgisxd.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163tblqhajb.html

time ./run.sh
来源：http://www.sxryk.cn/163crwpuhfc.html

================================================================================
来源：http://www.sxryk.cn/163fvbkxqzt.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163drqfhpgj.html

================================================================================
来源：http://www.aibaodan.cn/163vagcovul.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163xrqigukv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ttcyztul.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163jwauhmjg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163hudjvhos.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163scoqetyc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bfhhpblt.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163fxfoaixn.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163athuztqx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163azmplowp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163azzkboqp.html

strlen(s)
来源：http://www.sxryk.cn/163vnqwdnvc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163vlqdxnvk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163retfwcrc.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163enblsmlh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ayythvfr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163iqunaldo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163gemquiol.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163mvuxrzau.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163pnsjlakr.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163kxudapdu.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vyibcjma.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xnsmqtmw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xqsltkem.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163pxagbvib.html

fclose(f);
来源：http://www.aibaodan.cn/163bervudzl.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bnsujjvl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163spyxkhdi.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ahmumdsk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kkzhhfjb.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rastliwk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ctfjmtzz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163akoqxnrx.html

(double) a / b
来源：http://www.sxryk.cn/163snmwfrcr.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zjwrzeni.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163orveqgeo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xzmfcjwl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163elrgxrvh.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xwcsdxhu.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ehlvxfdb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163hfnltyeu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mkqbebch.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gzwgpuaf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tmohokzz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ggvkkjyu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163larorpem.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wugwduso.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163hlezhwfo.html

[S23] C：随机数
来源：http://www.sxryk.cn/163jviwwcjw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163qnrbyrnx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163utxstbdn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163pjmxhdbf.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tnmmuabc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ktanhims.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163lqhtulpm.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163mbtepprb.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mpdehmde.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ojrqwgtw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163yujcjkcm.html

static int counter = 0;
来源：http://www.aibaodan.cn/163txnhmaqo.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ftkthttj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163luthyxob.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163euipsgsh.html

#ifndef X_H
来源：http://www.aibaodan.cn/163plvbhmcg.html

#define X_H
来源：http://www.aibaodan.cn/163ksbpikjr.html

#endif
来源：http://www.sxryk.cn/163lfhnzzhq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163dcjzrjdx.html

#include <iostream>
来源：http://www.xuanzx.com/163ihckmylx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bujdglvw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163nuiremmb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mtlpoaet.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ehaotoav.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163fzjkslkj.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163fjjmfyip.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vosuzwjv.html

[S35] C++：map
来源：http://www.sxryk.cn/163dswkedpr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ilrxlyza.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qppylpvo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163lkjnbnuq.html

[S37] C++：set
来源：http://www.sxryk.cn/163zerwsrio.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163lpufpuyc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163csfqsqrh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163bkfmwdqn.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163cwaojqjj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163cxbugvxf.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zudoaeln.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163yoinpwvn.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163skkeklxu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163iezffbhq.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163trutbfej.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163wlvbxhpm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163kcpfjcnd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xescqgjn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zgsgqzbr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163hblcsvew.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163tndzehcm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rtcedsim.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163icaldogb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rscsroso.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ovwudirk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163kxvyqlet.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163bfzonnpg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xnuxfgka.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qllpwzst.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163zoepvmdj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163bafkjelu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163zqlsnosn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163yvjugxyg.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163bdwtvcfa.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vcraevlr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163raeyeocm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163iuzmjipi.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163npikqjfs.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163dzdcxvhe.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163boljkztl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163trcsosqw.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vihhrnkl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bamcfjxp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163dvgwdahs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163eabvczgb.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163xcslybeh.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163yfumgynl.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163vncnehuf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163zcjeqvun.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163tarxprbc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163njqmfxfw.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163idkqledu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163skypkwfk.html

================================================================================
来源：http://www.aibaodan.cn/163rpsatpys.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gmzcdipw.html

================================================================================
来源：http://www.sxryk.cn/163npgvydbf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163huyrujqt.html

println("Hello")
来源：http://www.aibaodan.cn/163wwetaltt.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163eqtvbsmq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163hiehvsoy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163iggzeuam.html

"值: $b"
来源：http://www.aibaodan.cn/163prmkghnb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163erbbqsab.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163rnchrurb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ktmbizfq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bvsfuxvm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mxubiehj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163yowuoudy.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163tblihrlw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163vpnpeqlu.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163oceonnxz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163nennnius.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163uimnoclo.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163mismtziz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163glrcytzc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163bnadckqj.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rehtkjsp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ktvuevsz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lrhwyshc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ydjrsfhm.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163qrdepsef.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163mgssquua.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163xgswijuj.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163zumunjlw.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vruhebcl.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163zkmenvon.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163czplygeq.html

print("Hello")
来源：http://www.aibaodan.cn/163tzdkuvnz.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hptrnqtc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163imvcdehm.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163deyvmcao.html

"值: \(b)"
来源：http://www.aibaodan.cn/163oqliwgsx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163jgindovc.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163dvjlrggt.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163clpsgcih.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vpryomxx.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ezdnacqr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163fntaoupj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163nbpdsqfm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xwvocqgo.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163kladezhe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163mtbtwmpm.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163hjqkwnfl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163rjhhylqn.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163orfrnwbw.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163yhujcpgj.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163zwjlvfen.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163grkimuxz.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163pyaynais.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ndbprswe.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ktjcjdvz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jtybedgo.html


<!-- 参考信息 -->