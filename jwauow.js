外链999!wailian999！

echo "${#s}"
来源：http://www.xuanzx.com/163rxjcdnzf.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ynxcpeny.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163tkcwggsy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163woaxqlze.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163eicllezd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163fqlrftyn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163mldjuvfu.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163hzrcwbtx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163muiayliz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163aldetuji.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163jewvynsj.html

[R27] 算术展开
来源：http://www.xuanzx.com/163zrlszbie.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163rjswagtd.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zmcxclpb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163tzhofzpu.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fpugdcbq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163oaqaamex.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ixiyktiq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ivouvddw.html

[R31] 局部变量
来源：http://www.xuanzx.com/163cpuapivf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ankxyxls.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163gncqlacy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163pefnsbsi.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ycrhiuwb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163oomznlrp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163bvsymwlw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163sdnkafms.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163frkqljgk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163oavbsvje.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163okgfapqz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hpxllgje.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163nwlkyutv.html

files=$(ls -1)
来源：http://www.xuanzx.com/163oingbwey.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gxmirdsk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163jeedredx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163jjpzlher.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163vwtujyif.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vspvkbkk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ohjuqcqx.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hefoydkd.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163bypazsti.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wqqbqdfy.html

wc -l < a.txt
来源：http://www.xuanzx.com/163bbsncnco.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163txagfydn.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163jtitdvia.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163dadawxep.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163yqulyugo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hjlgsoro.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163wzyhurou.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163iondymgm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mlriunwp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ujfnnyuc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kmucdrla.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163rdfaxsyq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163jjizhytt.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163shnzqoyc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gwwzfatq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163onqawvvh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163esuvfobo.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wzphyosq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ceuankxw.html

[R52] 统计行数
来源：http://www.sxryk.cn/163dslonjsc.html

wc -l a.txt
来源：http://www.aibaodan.cn/163tevlblmb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gopobhgw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rbbjvimq.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163flamslnp.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jqwcfftr.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163yfuqhwdo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163oknbvrql.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ccxgihxc.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163megbxsde.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163tgkwjpql.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hxisbnmw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163sjqvhphn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163tjchspgr.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163smdrlpxd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163twufifgn.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ojzydmnw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163cieeaajt.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163opbxhxit.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163kzoimghk.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lpnsswfv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nmoxvhcz.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163bzlqkluc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qbqpagpq.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wkraflnj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163knsbtluj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163dyhifmmy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163aknzamtf.html

[R66] 定时任务
来源：http://www.sxryk.cn/163uoncgryn.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163lmowcrnq.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163inyzbzwg.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163awenihsv.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163kzgcvpdw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dstjukuj.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xstmcnyy.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163dmijyila.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163dpvpdyai.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163oxofwdop.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163bgoeiabw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ahhpxvwn.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163anbwundj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rgpjyusx.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kcqvfgob.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163tdtfpeye.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163uhavpctb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ektuxrsj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163lkjxfbes.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163lezrpquk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163uisjpltm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cxyfsxuv.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163qrbovamh.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163uepbdicz.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ztrkcprj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ajuajvyn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163uhhtghjh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163lpqzkkic.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163nqstacqy.html

time ./run.sh
来源：http://www.sxryk.cn/163dgvlxwbm.html

================================================================================
来源：http://www.sxryk.cn/163xscezhyj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163abfvzpwh.html

================================================================================
来源：http://www.xuanzx.com/163jrlzjnku.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163vercqoaj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163izteirkb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163frexsyin.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163sdthyolm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163asagmqcv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163murmpcaf.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163vgljsahw.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163oroyaoje.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163faryjigp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163sozxfkew.html

strlen(s)
来源：http://www.xuanzx.com/163aoolnzqr.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ldwetrim.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ecuszmmi.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vfslbugj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ntplubik.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163fhoxixwb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163skqusmvx.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163xyladnbn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163gpswntxk.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qsebufyr.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163osfcruor.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163lqacgwmf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jplkzmeu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163hwpagdhn.html

fclose(f);
来源：http://www.xuanzx.com/163zfnxmayy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163uskgliif.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163yjgvnnmz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163sjrwguhv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163hvqrhhui.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dirwuezu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163oxdcwaum.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163znkduygd.html

(double) a / b
来源：http://www.sxryk.cn/163pefyixxr.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163effnknaf.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163cnyoovrt.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163stqnaznm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jtieoruq.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ityjwxao.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hgajqicz.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rnaemtpr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163snzdzaie.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vklpdptq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163orqihxot.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163xwtnmbxc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163irecxnbx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vgrycujd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163dfxahfov.html

[S23] C：随机数
来源：http://www.sxryk.cn/163kbbivaiv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163smrjorjx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163vfijmfug.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nwlbnioo.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pvucxark.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lzncgzqo.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163hhrexcxc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ipxmdrfx.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xabneqcs.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fxfxrbjb.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cbiscugv.html

static int counter = 0;
来源：http://www.sxryk.cn/163vivdtzud.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163xpkndsve.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163bvuxkiiv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163aihfpmzb.html

#ifndef X_H
来源：http://www.sxryk.cn/163wgvmjogd.html

#define X_H
来源：http://www.sxryk.cn/163exfkaznr.html

#endif
来源：http://www.xuanzx.com/163donsuiwe.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tujhehkd.html

#include <iostream>
来源：http://www.aibaodan.cn/163dyfmxhep.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163qxmhvtyh.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163jgcahosl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wnmpybaz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163uxkufmur.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ebsweiva.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zuzwpbwd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163opqscfys.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ijnegwyr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163njtbudsx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163bfyrhqri.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163asebwtly.html

[S37] C++：set
来源：http://www.xuanzx.com/163nzgzdxap.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ldspbgbw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qcntxtqd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vjrrndoy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163fswoaont.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ialjbqdz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163kcaeljwz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163refvkrku.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vhtrovzh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163zpaupqek.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163tfxczfgk.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163aarqofkc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163swkhrhtd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rozflben.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ilodkzwf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163kppdarpq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163bktqvduy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163nrtfqzgb.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163libudxsl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163cqevebhd.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163yfdcgqby.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wroggxpy.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163urbvdpzz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xuubdzxj.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163dktenlvu.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163jwdpbahe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gvzbwhxs.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163brskkqbx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163frlftusq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vsutvien.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163iygojgtv.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jfmysvdh.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163cwhzcrxd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163nuitgwqh.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163cxexwnrx.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163bglodgew.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ccvhzgkv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ayiaffcp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163rzdszurc.html

[S56] C++：optional
来源：http://www.sxryk.cn/163xbywdxuf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xwmyijka.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163mfxoplgj.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163dgsivdea.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163cyritzwb.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jsjegfsf.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qypplwht.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163qoppdkcj.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163unnwvxhm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163mhercaig.html

================================================================================
来源：http://www.aibaodan.cn/163ofhwziko.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163isqjsfsb.html

================================================================================
来源：http://www.sxryk.cn/163utaapbzm.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lkmtyiav.html

println("Hello")
来源：http://www.aibaodan.cn/163qudemlhj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163jpxpwttl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163mompgwrw.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ikychhxs.html

"值: $b"
来源：http://www.xuanzx.com/163ljfytcva.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jvmckzkb.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jssskkas.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163pyeqevvb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ddiiyfem.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163dxaujqxz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163tulpygnd.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163tuqlpjyu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163sfnkvhvn.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163apvjxnzj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163nxtllixu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163emzaamoz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163npidmxha.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163tlzzseal.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163dtbseaub.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163krxzffof.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jihtjtvy.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zwkpjkwn.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163hgzecugw.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ratlkkba.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163knezwzvy.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163bqbmnlyf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163dtfnbqrz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163qqdjuezc.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dmoiiblh.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163dufoddlt.html

print("Hello")
来源：http://www.aibaodan.cn/163cqgoyjhz.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vrairvnr.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zapjyvnq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rviaxbhu.html

"值: \(b)"
来源：http://www.xuanzx.com/163xfmjtvgc.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163zsbtqvcm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163zrrmjtos.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163qmkpcwup.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163roshczfk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163cexsyawy.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163dabiwtrp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163xvnpfyfw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163nakceoit.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163yiieribp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163aqwrdwuk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ktoblraq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163bgdgqbog.html


<!-- 参考信息 -->