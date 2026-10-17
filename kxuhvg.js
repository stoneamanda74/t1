外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xifjqwmb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163rwlcuxab.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163czaopbii.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163aferwrdz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gyyzgrrh.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163gqurcaqj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163jqyzgwag.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nqipwkxp.html

echo "${#s}"
来源：http://www.sxryk.cn/163carchmad.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163eoasxqsp.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fugfkaxg.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163shqmhnrw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163lhossndd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qupreyuv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163efficgxi.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163jglrszmu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163vpjgfive.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xpolocmi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163goskrhlb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163cvihzhjg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163zqniyizb.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kjysfhpc.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163yhzvnhus.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vzmprpwr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163egwpyncz.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163aokdwdrz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163cdmokrlt.html

[R31] 局部变量
来源：http://www.xuanzx.com/163nkstxaqh.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163vvplzxap.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163staudidp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wthmcmzx.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tsdnwsht.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jlcixdwn.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163zsylbfwo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dpdthqwq.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163vlogmdbn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163prnnsyqt.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163fumriaip.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163fhinaxsu.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jqsextiq.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gjkhucqz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ysasnyim.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ppnvnpow.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163kyynvsxx.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dnzzfyfz.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ewywwoze.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qogjfxrx.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163plegxrml.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nayacwug.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163sppytffa.html

wc -l < a.txt
来源：http://www.xuanzx.com/163cwuakeyi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163snabwhbm.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163zxhfcapj.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163htzlcagr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163uiynolib.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vlsxpuib.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ojqmfkif.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fpookpru.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vovjlgcw.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163nsmpiceo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fsokfkam.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163djcatrhc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163dodkcaao.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163pabnlttr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163jboirwva.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163srvzxqxd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163uhfxokmx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kkmlhuuy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163fnxjirrg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163foyddijq.html

wc -l a.txt
来源：http://www.sxryk.cn/163czvgjtea.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163sykutprf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xkvbrnvk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163wskqlumn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163sqdrxnxc.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jgwrifwa.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bkgszwmy.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163uijbofzx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163lhujajwr.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163irsycwnh.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163tbpcsljd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cvxxcbdp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163keubezjr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yrxcpsre.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163kzqxrqbe.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zjbforzv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163bheffcxe.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163sdcfyctg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163cackkdfy.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gizmpurf.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163sfvlogvz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163jqtqwywq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ilfwztam.html

[R64] 结束进程
来源：http://www.sxryk.cn/163zntkhzuv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163galgedwy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163exptlbhf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163wwltamta.html

[R66] 定时任务
来源：http://www.xuanzx.com/163mbhpqxlc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163foycahxv.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163kfzhioet.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mplmmjuq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jsdlrsbk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ayxejuqc.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163fcjylayp.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163pzgzrxhp.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163inrwebxv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163pdxcomjy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163khdqaeyp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kulgeumb.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163dwmvapix.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163umsoxrgt.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163tgivzgya.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zrkysmux.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163xptlvntg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163sprciihl.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ozfsqjsz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163klujldpr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ajrwcjnj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tujlyopk.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163umikpgsd.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163tjuwjado.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163fjvnqjgx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163iqgzkmzq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gnfujuga.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163slvqwnpo.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ixqnajms.html

time ./run.sh
来源：http://www.sxryk.cn/163zylhqizh.html

================================================================================
来源：http://www.aibaodan.cn/163awarxvad.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163fxbafzlu.html

================================================================================
来源：http://www.xuanzx.com/163xyssukds.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jliouhok.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ggdjyaic.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163hvqxwcum.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xgzulzfd.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163gmurnmqx.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163holhmixu.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163huknubrf.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bylihnwr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163rcsxsozb.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kssqfkkg.html

strlen(s)
来源：http://www.xuanzx.com/163acnhafnb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163wpnapjtd.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163tcucndwb.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wrztuuzt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ulzscvfl.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163gbhxpome.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163lrzxgrwv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163skdwueuu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163yfrdaahl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fdvhaqlj.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163goepscfk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163srdajfwu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rdjosvug.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qfwjewsb.html

fclose(f);
来源：http://www.xuanzx.com/163hqkqpbxy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ghelezes.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163iiauxwhm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bnubpvih.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163nzwmynai.html

[S14] C：枚举
来源：http://www.xuanzx.com/163uwnztukf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zhnmecwx.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xxolbyge.html

(double) a / b
来源：http://www.aibaodan.cn/163kzulnslw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qsfkhicc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163fptjwrbu.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gzyftwin.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ucjdlpjl.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163jnrukhov.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vqapdrro.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163uvakdywq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tcdjwnzd.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163virzihuq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163slhjlehn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163jonzhjfv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hznktnws.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163jbuafqlk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wbtxxhdi.html

[S23] C：随机数
来源：http://www.xuanzx.com/163klsymewb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jkrgidcz.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163lgdzbygl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163arjgvmsa.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163yubojllo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ugszomvt.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wzadntbc.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163oeerqwni.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163gxqphuys.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163mzqsgofd.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163pdadintv.html

static int counter = 0;
来源：http://www.sxryk.cn/163yuxcxyid.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163uxwcfhjb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wpiubzhm.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vzaymycf.html

#ifndef X_H
来源：http://www.xuanzx.com/163ngizoefi.html

#define X_H
来源：http://www.aibaodan.cn/163lacwqdqo.html

#endif
来源：http://www.aibaodan.cn/163kxrqcbfv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163uqeccmyh.html

#include <iostream>
来源：http://www.sxryk.cn/163cbnvcmqu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jwzzqeab.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163bamesuaq.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hcwibvqw.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163daoygvvt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163esbpnlqn.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163qnhfnwzi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bpsyksoz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mksczepo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163biakrgnn.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163qdgrjmis.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qxydyhsm.html

[S37] C++：set
来源：http://www.sxryk.cn/163wietqykf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163axcnzgtp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cbbvuztv.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163kcwgdcqg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nlbxwrez.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wdkoaspr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jqlydkdt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wzbdxrff.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163lphwvlat.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163euhzbrgh.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163fbykleml.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hniivpjh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rzzkcadw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163kxhlxyjq.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163uuinjgwy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163skvnygmu.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163iucbqbub.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cnalyput.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163fcnhzxor.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uwgyymkx.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jeurkbey.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163uzmzpvif.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ncdmjfuj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kgginomm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163qwwxwzpy.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qlepissq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vehpbcwj.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ftukwyky.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pljpcfhn.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163usmkggdh.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vxnlkzrz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xlhuveou.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qkniadcq.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vcpsydnm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jnpiosuv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163watgbpsz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163idtjuwlt.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fnhggqgx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163wnhczyul.html

[S56] C++：optional
来源：http://www.xuanzx.com/163sjkegrdc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nreimrzp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qgawvmfw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163cynqtvyn.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163sedkibzq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163cuxkjtih.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163lcvgnlgc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163cglpzvgp.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163kjymdapx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163yjcwopwr.html

================================================================================
来源：http://www.aibaodan.cn/163zsclfngn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gaoejkvm.html

================================================================================
来源：http://www.sxryk.cn/163gzesnebo.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kbnpgqnz.html

println("Hello")
来源：http://www.sxryk.cn/163kvpdrsnc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hkugvxxw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xbwuvlrb.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ulfrszrc.html

"值: $b"
来源：http://www.xuanzx.com/163jsfdwgbi.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163sqvkemuo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163sfkmglcv.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163wnzkgdxc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163lyqxvkoj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163smczasmo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rgzqqamf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gzyeikfx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163qztwxilz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jiarusfl.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163hunlxtfq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ovoflzhd.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163xpucumsw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dpggesbu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wsejxskn.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163prkmetyg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163bekkmahw.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mfauewqz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163mddvqqpw.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163zafefcyl.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163aulamtng.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163xuovviul.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ksnhyljz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163blczqnoo.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mjqrftcv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163tlkkadlt.html

print("Hello")
来源：http://www.xuanzx.com/163pecrfiea.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rdfwfkqi.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zfrlnkst.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163alaikitd.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kqlccfdu.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163vfhoiwrg.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163blygdzmu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rlealqpp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163engymcia.html


<!-- 参考信息 -->