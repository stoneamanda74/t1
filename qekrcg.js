外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163shdetyec.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163eovuuaym.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jhynyxae.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163uxqivwkh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163pthslnfw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163mvaqaruc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ixfanyjc.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gafghalf.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163kdowtrjx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vqbdulaq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163dcwnafvg.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hlwnfdsi.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zewzlhsd.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163vwswogde.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163cklcpung.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163sampykho.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jxzqzvsw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163rygjtcig.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163saovfbdm.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163aokctlrs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163lnuvcnck.html

[R26] 命令替换
来源：http://www.xuanzx.com/163aftlantm.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163kznttgnr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163pbiljcce.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163exckiqkm.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163rldbprqf.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163hgkmdifh.html

[R29] 定义函数
来源：http://www.sxryk.cn/163zatxabva.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wvjhejlv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163rzbyackw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163oeinbyzx.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qzfgzrob.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lgniqowc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163kvnemvst.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163bpfeffjv.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163blqgmzna.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vnstxzum.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jtfupnjt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kxoaqivm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163yusbbwwh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163mynzhcjp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163visncsrs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163cyvwoqbv.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163didywimi.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xydjiyzk.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163exmbkojx.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ejlnzdce.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vfetmccm.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163pudsvwgd.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163scqsdmuf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ufwwpday.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163sqkgpppk.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163heunpnbq.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163nsxtiuqa.html

wc -l < a.txt
来源：http://www.sxryk.cn/163cphrdadk.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ziygppgi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163yjkaxpql.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ylgmwode.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163bxexompe.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163yuggfyre.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163zauusvdh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163qulilirs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163rdagfsur.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163cxbzuhgl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vlhxgdkt.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163lgdbgqwj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ekkiomdo.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163kpthiahp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163gdgqyfra.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mhqvpmmp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163qkcvrxjn.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kxvhauvt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tsgdmofz.html

[R52] 统计行数
来源：http://www.xuanzx.com/163hrltzzrl.html

wc -l a.txt
来源：http://www.sxryk.cn/163ilithtdf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163sldpjlzh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163dbbdrqkm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lqodmxlc.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ourywxme.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163cwubbfah.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vlmfuvkn.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163cugmswyd.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rkfsmprn.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163zawckbjm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qozlvont.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nsiglnsa.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163dbzlousd.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163qvsjjmwe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163fhdkyyxx.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163fsjasxqr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163vkcxfpvc.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163glbxntmu.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163mkvgfxhk.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163fsbzwrcn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vwqxtlkg.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163cvxftkgo.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163adbxfqep.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163crtmkubv.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bsupmame.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163pqvgjxqk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163asyaztmr.html

[R66] 定时任务
来源：http://www.xuanzx.com/163atqwueem.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163fkjujarj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163qmrgosji.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163buhdxxio.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163rvdezqwj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163elnpheox.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163lonmwspx.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163kvwnqeet.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ifxwztgz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ngubclzs.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pmcbsjci.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163myqtpgtv.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163tkbrfeqp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163sbshqrkb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163nmzmxgzn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163aevypoto.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lsrmpboj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qnsqhcam.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pdhriemv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kazbxzla.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163eqbnktvy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163smqmakrp.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vphrkmrr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163scenwfjl.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163narhhkxr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163bbvfozun.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163mbazaqap.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163buodjonx.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163muektmco.html

time ./run.sh
来源：http://www.aibaodan.cn/163hfadpmmr.html

================================================================================
来源：http://www.sxryk.cn/163owkagoqx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ffrkkgoo.html

================================================================================
来源：http://www.xuanzx.com/163qqdyfxhd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163welirlnd.html

#include <stdio.h>
来源：http://www.xuanzx.com/163niphtsla.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163skzinlfg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wficzxlg.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163pohwblnj.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qbjtjvss.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163qfpmirid.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163brvecmjg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163tpaapcpp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vwhezphq.html

strlen(s)
来源：http://www.sxryk.cn/163khyaagvj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163dattjbvl.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163lshiokvu.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dxnxpxoj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163saosshug.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163zuxmcvcc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163gguiytoe.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lapixloo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163mdjhvujx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163duuqbjzf.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163uabnjxbd.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zfdgospp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163dwindehs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ltuilkve.html

fclose(f);
来源：http://www.sxryk.cn/163mfrgtsei.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wpjnuyxu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163iamigqhy.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163mpciwbdd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163osqvudpm.html

[S14] C：枚举
来源：http://www.xuanzx.com/163tuwpurob.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163phmkwago.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163shxceqyc.html

(double) a / b
来源：http://www.xuanzx.com/163canhatxf.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163kxqviifi.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ktxeqyoq.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lemfzvxm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163neujdcws.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vibqbgis.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dhvbfljp.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163smhkhfre.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ifvyrsap.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163iddicoyk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tfzrhhow.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163zysaxizm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163gdqklsti.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mkiwxmdb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163dsrsplwi.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ezhjclrx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163fahlzoaw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163nggeicci.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yxspoqsc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163vsdptchb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gjgydavj.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ffviqfgz.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xvexgevb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163yghqfqxh.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hlthbmyt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ykuchbln.html

static int counter = 0;
来源：http://www.sxryk.cn/163cmagkbor.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163alifmaut.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163nyhpozhb.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rpbtqjwc.html

#ifndef X_H
来源：http://www.sxryk.cn/163iurulfgs.html

#define X_H
来源：http://www.aibaodan.cn/163chpbjprc.html

#endif
来源：http://www.xuanzx.com/163fdsrextd.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mataaghw.html

#include <iostream>
来源：http://www.aibaodan.cn/163iaxrhphy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yhwptdhx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vymjifuj.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163yusipzql.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163zgnmxjjx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163jtyycqvi.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163bdlaovcs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zobimehc.html

[S35] C++：map
来源：http://www.xuanzx.com/163pabisbnk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163osxnoial.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rxhagfrp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ztktjzii.html

[S37] C++：set
来源：http://www.sxryk.cn/163bfnjkskf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163uyptzkqx.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163utgrkfkq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ihvikhtc.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qrszutfl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163faerfcty.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163cvtboucu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163sivokrcw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163wizitwvq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163yggnspip.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163oipwkysm.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163yubcrmdk.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163jiavkxrf.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nnojmbqb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163dcxwkfao.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163sijxdglx.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gjgokcuq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163phzshjba.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163leipveka.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rdwbdwyv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163gonqierf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163abkpundt.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163dedoignc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163dclbikea.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163qiwdwxlx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163mqhpmasy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163oklhlqme.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xwgrsrlf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163nrsleahd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fgaleqht.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nuhmfdxg.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163irjtjfpi.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163cagmedgy.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vcqipbkg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163mftvqhtj.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kucmpxyo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163gopvifoi.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163vtogjefv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vlhhjmzx.html

[S56] C++：optional
来源：http://www.xuanzx.com/163yywshhjg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ppksmwmt.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vbfnybyz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vpsnsoeb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163vxpykvzn.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163byibrpxg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gdjajdht.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163qyphpxzi.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163eyrczlwz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163utcyrata.html

================================================================================
来源：http://www.sxryk.cn/163sulzlbui.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xkpwdibl.html

================================================================================
来源：http://www.sxryk.cn/163xeiwndko.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163dfrzqnfp.html

println("Hello")
来源：http://www.sxryk.cn/163otcmxwct.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wfimgtkm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163loamctct.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ehdnmhkl.html

"值: $b"
来源：http://www.sxryk.cn/163krhspggg.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hadqdvme.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ddzmzkws.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jbymgpxh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163skgrasek.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163svbemzax.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163unlpcyai.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163cdmtchjb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163pwoqqkzp.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qkhmxaps.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163dsyyuwor.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zhswqxje.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163diuczgam.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163srqyeczb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rlyeslhd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mjagwlxx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163xmbmbmpj.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163soqqcqhr.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163gewxqjwq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163dfnsnppz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163lyobctuc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ciylvrdf.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163axuhholb.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xqkpvuol.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163kpkdvcif.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ykaeoyup.html

print("Hello")
来源：http://www.xuanzx.com/163trreekbj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163tuosdqav.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163txcnfrxh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163fctpumxs.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ydztzdup.html


<!-- 参考信息 -->