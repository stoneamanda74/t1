外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163qpmjkorb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163bfwdgmvk.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163roogqiys.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fktawypg.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163vpldqvhu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163wbxavoms.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zmdqkext.html

[R29] 定义函数
来源：http://www.xuanzx.com/163tyzdzbkv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163mcyrmlvq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163lfgxgxwm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xyrgqvrb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163tcnmtpjw.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jefrgxad.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163pgxpjhdb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163tahxffpw.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163juzvdfie.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ywpvyten.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163gammkybt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kjhtxmbb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163dpxuyfal.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163hwwwjznh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ttlhiidn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163qduzfzvp.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163furutthw.html

files=$(ls -1)
来源：http://www.sxryk.cn/163kertiucf.html

[R38] 管道串联
来源：http://www.xuanzx.com/163srphymzt.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163owohgylg.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163nbrhytnv.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lqnrhclh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ixzupqvt.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163axgngfat.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163prsynxcd.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163csgdikuv.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163gdoqkgay.html

wc -l < a.txt
来源：http://www.sxryk.cn/163syayzvkw.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163lgchlipn.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163wqhiiuou.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163njvyhakx.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163cyzguhwc.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163udcyxuct.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163avgxvfxm.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163edpazocj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ruuzcmhv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qfquxqbk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kckadlbx.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dkwjshum.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163yzifjekr.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163rwelanyb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vazrkohp.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vqhswbwd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163lupskfoa.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zwnbagjk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163xtqdmttc.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163webtvdww.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bfnrekyz.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163joqieeyj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163tqgnepcj.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163llkitphp.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163cencpvxi.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ihfxkoyy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vcyazudp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163hqwajibm.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163bmouixbb.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163sxasshzf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163kmftblfc.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163gbhocesd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163finvgven.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163kipiswfo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163iaemoxca.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163tathjslh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163grbjabwl.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163vttpsybe.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ktiksbqp.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163bhsuskjv.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ikxvisyj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kojjhkgs.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163vrkkczce.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163phbrfged.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163syudpysm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rmyjysxa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jpgmhuft.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hrruslwl.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qdjdshxx.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163pdichhkc.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wwvtkrrp.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163jnqtqyug.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zerlhlmb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vbcriiop.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163sfymjbsw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163pxecgwzf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163qavqsswr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163uxmimfuf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163uvznckvb.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163eojbinra.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163tcwycjiv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vfqvcoyv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163yvbtosdn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ezrbzzoc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tdrnsxcj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zxwqeezf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163fopeciqn.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ojhsqhpk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163artmpnmh.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tbgxtrzu.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163preqxtaq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ayywswiu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jlbesgzf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163efxwoccg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tkmqkhnu.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163zxhvrdic.html

time ./run.sh
来源：http://www.aibaodan.cn/163xhpnecrx.html

================================================================================
来源：http://www.aibaodan.cn/163xmfngwvq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ppurrnzf.html

================================================================================
来源：http://www.sxryk.cn/163ouykahei.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163aetjybcf.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xxsuhucm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163zcaktvoc.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163rzjoatkl.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163tzzefwyl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163uyxswpvf.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gmdyjbub.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ylcktjbw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ttasobmr.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163usnqalhm.html

strlen(s)
来源：http://www.sxryk.cn/163qqlycktu.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163cxnqhlqk.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163kdlyrula.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163buekwzxs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163aketljim.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163saowyjrv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163chyoczto.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qfynqeus.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163teuthcce.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zgkwrtyp.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163kqqlqori.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163rjmvuvzj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ugiazybc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wlmtappa.html

fclose(f);
来源：http://www.sxryk.cn/163vxgdmbqc.html

[S12] C：写文件
来源：http://www.xuanzx.com/163urtibipg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163srwfejfd.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163wmaidibm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163htsmdhsi.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wvsvwcjp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ulfthlfh.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163hbbnntpy.html

(double) a / b
来源：http://www.sxryk.cn/163szawhknr.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pgwnhorl.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ycbqfvxa.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163gpviejgz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163setnlvxc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163yixftjci.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163moaiqxeo.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qehazuhd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163swrtazeo.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163glbsdviw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163sjqaeyvk.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wueqrecz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163jkqozwxt.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163spkznlrn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qsfmvxvc.html

[S23] C：随机数
来源：http://www.sxryk.cn/163amecrrxy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163mbecazvh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163pfederlj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163yqcgagxn.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163diilnaec.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lzdxtvuv.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163dispmszc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163awwgchyh.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163sjkpspte.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163uiyrleay.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kucuraqk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163nozlwumr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163vhewtuoh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vbtuywzk.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jqwswvxd.html

#ifndef X_H
来源：http://www.sxryk.cn/163bhfcksre.html

#define X_H
来源：http://www.aibaodan.cn/163tnvnskap.html

#endif
来源：http://www.aibaodan.cn/163iotlhnjn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mofnhtng.html

#include <iostream>
来源：http://www.aibaodan.cn/163zjkoaedm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163elhiaobg.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vbgqlskd.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163srsyjheb.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ktgqkidk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163gdjmepcv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163zpsnzxui.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163bxhhggut.html

[S35] C++：map
来源：http://www.sxryk.cn/163nciwbkhc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163arjbeaqh.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ivioaxlk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qhhbijgp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163kmdlmwsm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163yljersuw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163uxxvkcxv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163eknftgay.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163gqoblhuq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163cmilmwgm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pinxfspd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163dudowzab.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vkxlbslf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163urgqjodl.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wejnwayd.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tkesdeqp.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163uskcvqnq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163bojpavrq.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ndgmezie.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163gxzyamli.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zfqethog.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163iziiacon.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163nukzwdsr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vjgqkhnb.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163zacleqxw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163llbxqagh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163htummypc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zdzxvrqg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163arwymrdi.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163bjmthitc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163qrwdmpii.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163oktihgjm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lxgskjkx.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163clbskujw.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163kxevkuvz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163kligmutk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163oxuapiku.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163syyojtak.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163amgezybl.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163btrndlgg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163cvzgxjre.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163raqcctgt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163rttvzrno.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163vlzpmlqz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163berimhjo.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163oswfydsx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ymthaeaw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163plkydkyh.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ubunvxeg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kdtnbmvn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163lpwbgupk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163pxtldxrl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163dheppboe.html

================================================================================
来源：http://www.aibaodan.cn/163zvarlblj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163oxijbogb.html

================================================================================
来源：http://www.xuanzx.com/163paifuhuc.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ydckmyxd.html

println("Hello")
来源：http://www.sxryk.cn/163imfrtaxp.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ivfpftwu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ghdkjdqn.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163icslcijy.html

"值: $b"
来源：http://www.sxryk.cn/163yexychuy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163blbcbqmf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163jndxqxbk.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bhfrealy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163jeftqcxm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163fvjmwhpn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163xshqwjbe.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jkkdftym.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163gcyybfjn.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163kvhiqtok.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163haknpcjc.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163rdobzagc.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qbiggygu.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163znuewuzj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163zlzmpbix.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163uqjmjnmo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163nvnwbjjl.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163hkagshqy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ltkcllrv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163domrqjkd.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ovxhkblg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163pwgokdrp.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ttncrzug.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163iagipjms.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163curpvrqs.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163rkujoish.html

print("Hello")
来源：http://www.sxryk.cn/163zeqnguvr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ofdkoert.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163mlyoctgu.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163koxvwlna.html

"值: \(b)"
来源：http://www.xuanzx.com/163yqkwrdof.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163xpghmjjt.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163nwencoby.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163axopprao.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fnrtvjmj.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ubhvsgjh.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163hopehams.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163bdpfrcso.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163uhzjagwv.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163nmicvlcc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163tecglxxe.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163alcnaqhe.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163fxhousir.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ygzxmusw.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163lswlvdgt.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163dvdbuoav.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xhiaylcf.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163bvqsxfbg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163tneotxwj.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163pvhczyij.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zhrmgban.html


<!-- 参考信息 -->