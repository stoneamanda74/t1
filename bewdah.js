外链999!wailian999！

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163roerqcbb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hypievtn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gqotlrhz.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163txxdnrmh.html

echo "${#s}"
来源：http://www.aibaodan.cn/163twcfvndx.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wlkfshtl.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163phbivviq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163laxzznww.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hfumzsgu.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163vndcfugl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jamltfnr.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163dfssjdrp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163njhsoqgj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163dkbyscre.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163aujgaykj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163eclnpymj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163edpohzqg.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ptzqeotl.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163fauwpwln.html

[R29] 定义函数
来源：http://www.xuanzx.com/163stfddzqm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163nmxangbt.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163dvymvgqg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163oliegxxi.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fqklmwch.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163uqihliuy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163grgeoqyr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163nmhmaaeo.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wlfbmtbr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163qnqmolau.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vgnyntya.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xsrlcnew.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ensyahge.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163apylweoc.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163hjwzsfvy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163zlrkibnl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163bstdfpbt.html

files=$(ls -1)
来源：http://www.xuanzx.com/163qjgyayts.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163nipwujic.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163peoxkrom.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zhbhdfdh.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163iluuykmy.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163shsdcmfv.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ybsadifb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163euvrwitu.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ishvouus.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163pywnbihh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163mtcuywah.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163kwzspdlh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163lzjfeutu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163udtksjom.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163fzbxpiaf.html

[R45] 批量删除
来源：http://www.xuanzx.com/163amejnxpg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163eebgwnlo.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163chkthvbs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163euyaxvlm.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163mxnkolbl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163dwefzejl.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163egncykxw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163bkndysqs.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163qgewyrcr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163lxxviprv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163jteqvlor.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163smgyutwh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163lrhdhnyu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163fihsnsji.html

[R52] 统计行数
来源：http://www.sxryk.cn/163lyjylmnb.html

wc -l a.txt
来源：http://www.xuanzx.com/163tzxmssdw.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163aqgbauft.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163rcjtlaya.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lkowrhag.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vivagvky.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163bffaigjc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163qgupglff.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163gywawtzh.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jdgnlags.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ochyjmgz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ibysvdzp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163npezwlir.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163afldllks.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163hmraedfn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kvetukuf.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163swjlbfud.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163wyjxvcnl.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163oveldesm.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163prditvev.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zkvdyawe.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163yznyejxj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nkeqnvsi.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163gakqmkzp.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qcjtkybf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163yzygifow.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163mgofcgul.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163izaoflyz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163yntgzlfq.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163wwksjgax.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bsswtghx.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ywwguqym.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163eenybutl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163bpkovwmy.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163tyebreqn.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163urjcbnof.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ptorexcd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163majetmnp.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163vasbpqtz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163iknbscuk.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163kkgbwhui.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163zdcmxbvf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163uwxdfgtq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wgnnvooa.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163idhbtfdh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163rruxbiyr.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163lstdkgoo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163dkavsrsr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163drqdzsgx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kdybvmny.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ckueyjhx.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163bqvgslzl.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ooipvzki.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ursdtgki.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gidtjvxq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163mzbzhhzc.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163aitdxbpu.html

time ./run.sh
来源：http://www.xuanzx.com/163etlbldmm.html

================================================================================
来源：http://www.sxryk.cn/163agxzkfgw.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jeofamgx.html

================================================================================
来源：http://www.sxryk.cn/163qgqofhbo.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163efmjpfty.html

#include <stdio.h>
来源：http://www.xuanzx.com/163yahgnnxx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ghsrtwor.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163cztdmgch.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163wadibywq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163pgaqyaas.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bjikljcx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ixjfgvic.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wxfkjanj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ynijnoim.html

strlen(s)
来源：http://www.sxryk.cn/163nnpgpkao.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dfiikbke.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163hkfsrgmy.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vsbaujau.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163rtcriptn.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vroxrtup.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163npqxlsdi.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ubrlgkgi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zonajdoi.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163vpenxbcm.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fkxhbzzw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163cxhgncrm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163tpxipsra.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163lmjcwisz.html

fclose(f);
来源：http://www.xuanzx.com/163iugckmny.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zljzyhcg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ikaupcrb.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163fquxlejb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163sdwhbfjz.html

[S14] C：枚举
来源：http://www.sxryk.cn/163oafzfsgq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163bvithjjr.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163atinpmgl.html

(double) a / b
来源：http://www.aibaodan.cn/163zvuadxwl.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163krvembbi.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ijqclemp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ebhnvypm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163srqhdxrb.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163bacqvwoa.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163cwcduxzq.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hgumiqqa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nstlzwuq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vjciitnv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163chdjzgcj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163sjhnikog.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163phijrnze.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163sddutttj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163abhskfgj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163efyfaecx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ycrdnasp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163uvafmgkk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163cwbootbx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163xlqmqwml.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163wugkwwun.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zuqbbrzo.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163lokkxfxh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163eqtcmkpu.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163locmsrfe.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163gjqtaatl.html

static int counter = 0;
来源：http://www.xuanzx.com/163tqzfkhuo.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163efvnirlj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163iadmhcdl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163khfbdyzq.html

#ifndef X_H
来源：http://www.xuanzx.com/163ohrzkdxk.html

#define X_H
来源：http://www.aibaodan.cn/163zfnanwsg.html

#endif
来源：http://www.sxryk.cn/163zqkihtkc.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ohzsikco.html

#include <iostream>
来源：http://www.sxryk.cn/163czxfbxpb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163qforyftk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163exudjnjn.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vpkhprrn.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163lsbsczvn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163upzxpgpe.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163huuiyfdm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fwskovwp.html

[S35] C++：map
来源：http://www.aibaodan.cn/163dhaiqfxx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zsehufjn.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jwtprutj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xgeklrhm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hkfjsvpf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163iumayqdr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163riumsqva.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lujhavfg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163lnwzgysq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bbutpwjl.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163kiyscapf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wmhjdyyi.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gaamcrua.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163bhxebnkk.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ohnrgisl.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163dtkycauk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163kgftcmut.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wtenpcmr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163npxazhof.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163sjyekiwm.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163jzihreos.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163dmzgdhyc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163nrknhqxw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ieqyunze.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lfezmcoq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qltsgbrb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ksvruclv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163jiwkhpvd.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163wbjrttrb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163yljfajnr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163fexoewso.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xrnmijij.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163safhpier.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qlqeltml.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163waozeuxl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qmepuqfq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163lfdgoyoc.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163oasowbhg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ptmhbgvy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163vsbkaayx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rxhtjjdv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163osukwcdr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163fjqdgefm.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lwsrbyto.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163guxqqfqv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gxdoinvf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163nrwoivvo.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mriyadsl.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163cuzgbuub.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xphcewpk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xnxnedap.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163eevkxhko.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163kwrtlgbl.html

================================================================================
来源：http://www.aibaodan.cn/163flbaziuu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xxlcymmq.html

================================================================================
来源：http://www.xuanzx.com/163fvdoniik.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163hfolnjuz.html

println("Hello")
来源：http://www.aibaodan.cn/163axnmttty.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163agscbdzu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163lgnwafas.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wncuyakx.html

"值: $b"
来源：http://www.aibaodan.cn/163ukbepuhv.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163djkqwacz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mxuifhlq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163doedkrwt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163oafdrbse.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163okrioboi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vovtcjtk.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163shebigzb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163mrthaglx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vebaouuc.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ollzjmum.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163nyknjgmb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tfqagofj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163pilkrcem.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163fiazmctm.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163tvksizir.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163strftnsu.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kgkqtkir.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163tvbcassn.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163auqkwany.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163vgsrlxko.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fkasspoo.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vdxtejzb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163khrizijq.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163hiyqprzq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rlvkhvwb.html

print("Hello")
来源：http://www.xuanzx.com/163efwufrrr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163npekcqhw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pcqyliyq.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163tbzoyxqb.html

"值: \(b)"
来源：http://www.xuanzx.com/163aoiasqry.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163fqyjttms.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163pxhxgipv.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163laanjhnb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fuwbskka.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vcrvyhhz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163slwpvgit.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163cejwfaiv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163utvgghxv.html


<!-- 参考信息 -->