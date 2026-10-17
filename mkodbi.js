外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lfiyoyfc.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163bbrwwzud.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163majuxhju.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163josrivdk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nulfalki.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163rnbvuafk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ssiirvnq.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163gdqhmrug.html

echo "${#s}"
来源：http://www.sxryk.cn/163axnhkmdb.html

[R22] 截取子串
来源：http://www.sxryk.cn/163aavskkkr.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zoslwmgj.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ewtorkis.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zlegutyk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163lpxtropd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163frfzbsft.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163chfxcuaf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qiuuqlto.html

[R26] 命令替换
来源：http://www.sxryk.cn/163tmperdcq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rafoderf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163vcalcztn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163klbmtily.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bdkykbck.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ptxqvrek.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163nfrmjnpt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163pxfqtjim.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qhxnrkft.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163bwtxxonl.html

[R31] 局部变量
来源：http://www.sxryk.cn/163agjwgjqb.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hlnieicf.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163kvxqhuyb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163fkcpgyep.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ordfiikl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163lunchbef.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163isltxlzx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xyhucmyx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ivobebqf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163saxcsctl.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163bdsndazy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163kowbhkuq.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163wnnwpbtz.html

files=$(ls -1)
来源：http://www.xuanzx.com/163lrdeokaa.html

[R38] 管道串联
来源：http://www.xuanzx.com/163uutseggk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163jolavjsr.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163asvtwvko.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163fwssrwwh.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163lwymgmsv.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163whabxhpm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jcjdvkcn.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163abwmcigp.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hgvokubp.html

wc -l < a.txt
来源：http://www.sxryk.cn/163uulpmhbd.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163afkaqamq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163urwsprmo.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163qxbwhzdf.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163usapzycv.html

[R45] 批量删除
来源：http://www.xuanzx.com/163jxnjhdhl.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163liywjmei.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zpxipjex.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163xnlknhzm.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163nqvshllh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163uboxecje.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163laorcbfr.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163fkagmucj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163oppzogfj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163pxefrwdj.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lxmcfqhr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cilfkxea.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ekecvhjc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163swghjmls.html

[R52] 统计行数
来源：http://www.sxryk.cn/163xxdgvxbk.html

wc -l a.txt
来源：http://www.xuanzx.com/163trqklyrv.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jmqlfmfb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163xwxgrspt.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163jpfrqxiy.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163nvhqgqvu.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163vucjkzpk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bghctqic.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163fihapvrt.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163glbwcvbd.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163bwpnhisj.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163trmxufah.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rkiaiqxj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qxgtszxw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163kwvyosnq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163tyvidxim.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163tfvdpolt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ianogugk.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gmbmefch.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163agoaoalp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163crdblbqk.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163fdnfohtd.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163cenlhtlm.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nhnqlwfu.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163duxtztdw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163iticriqj.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163saegtxyk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ibsrdsbz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163bmtnwlpk.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nkgiwgnk.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163mkhrbwfe.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163iizastuo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163etcvoeuf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163mtkmltjt.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163utpspajh.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nvolclnl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163nelggfue.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rqshyrkp.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163cpzkkcha.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163svcbsmah.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163jyivscok.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163oumxebbi.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163fnrunejj.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163tsbkmcrm.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163cypwvwxp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ienalukd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gshcjixf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163wgwholfj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163iorxhora.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gcmgvsvb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163jzucdpsu.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163jgcnvemy.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jaacuhtj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163dtajmerv.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163cqgqkroe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qrwuatmu.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163medorohf.html

time ./run.sh
来源：http://www.sxryk.cn/163ejmmuhvt.html

================================================================================
来源：http://www.aibaodan.cn/163zygqaxkk.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kajxgzol.html

================================================================================
来源：http://www.xuanzx.com/163wyebxbhc.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163alonbjtn.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ltlygbrb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163iefpohot.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163uknbkrrf.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dxgqvypw.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163pafadqvh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163wwtkqrat.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gemqhlij.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ypchrply.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163xauidpql.html

strlen(s)
来源：http://www.aibaodan.cn/163bbhnknzu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163vfwsappc.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ljgqgohk.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163slprhods.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163audxydzu.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gjdodqms.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163lmhksflu.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jxripcei.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ushuegws.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hmdkgbrs.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163jkxfxzmi.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ttpkeesw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jclmiqih.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bcqfjslc.html

fclose(f);
来源：http://www.sxryk.cn/163breulcii.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rwhpeirp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163pmbddvux.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163awyozcmc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163icdtlqbq.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ztmvzuea.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163nstfpivc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nirqzync.html

(double) a / b
来源：http://www.sxryk.cn/163oxqmhzbi.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163loztsljq.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163boeaevtx.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ahsbeoks.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163qasrirwi.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ufofdojj.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163prjqasus.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163obyherkw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gktfcvnb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163bqvetpxi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bquxneim.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mzcvrdit.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pjtalxad.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163hiwwbyup.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wtaulqua.html

[S23] C：随机数
来源：http://www.xuanzx.com/163upuskxua.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ueodwnup.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163lirprkrl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vxsyobzz.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163epvpxugw.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rxfzvpvj.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163limzmmkz.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163neohztbs.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163zixajock.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163rwkgfxbl.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163bwwnuybz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163mxwwsmmn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163xkgewret.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zlxiehay.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163uhrkcxde.html

#ifndef X_H
来源：http://www.sxryk.cn/163hjmpuyxd.html

#define X_H
来源：http://www.xuanzx.com/163dmwpdlck.html

#endif
来源：http://www.aibaodan.cn/163ywscjivm.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163tkfqsiem.html

#include <iostream>
来源：http://www.xuanzx.com/163ulbeznmu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ukxxjicn.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fxxxqwre.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163oeqazncx.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163njotzpwb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163siqxzvgv.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163bpmugbek.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163feskrplr.html

[S35] C++：map
来源：http://www.sxryk.cn/163peijmsuy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ozqfvgaa.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ktnbflrt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rsoyqfjh.html

[S37] C++：set
来源：http://www.xuanzx.com/163stxbczih.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163fafgpyho.html

[S38] C++：排序
来源：http://www.sxryk.cn/163dsiftxop.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163pczzmfor.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163cqnkyhyy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163eciuzpyi.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ycvpvsio.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wejkqdcy.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cyevnqfn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163pnxuwpsj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qegeiueo.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163cdivmuuh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163dlivplqd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163npfycrvk.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163hbmecflq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163wzkvbmvt.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163zgoqhhda.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163wiitjmmm.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hajgckry.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163awxzcdlg.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163njzkddrq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ctmpbxvp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163bhuaspli.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163naeemkxn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163daaarvtd.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163qjlbqqlp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wkoummpb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163lwtupsdr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163wlabwixj.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163pkcnpaaq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zsvpnyqe.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163snyzzvot.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zyzkdpsv.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vlysusxe.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xlqofqse.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163yluhwgqy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163eeickrqu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hgdioqud.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ywepvazp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163argfjprl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vmjzvxmb.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dwxqprwr.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163sinxzfsw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163dbqxstcj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163sayvjdyq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163mmuiptsb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163yfdncmkk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163cwxczfhj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163dofhbaec.html

================================================================================
来源：http://www.sxryk.cn/163dxvnbdfe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163neztswys.html

================================================================================
来源：http://www.xuanzx.com/163yrveotjt.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163fbtqukvu.html

println("Hello")
来源：http://www.sxryk.cn/163jxfyzaeo.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163npvlrakv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bvjxctly.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ezmqrofs.html

"值: $b"
来源：http://www.sxryk.cn/163lujkdtua.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163hluodoio.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wiqutdwl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163etqrakri.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163bwyamhxc.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163fxgfeatw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163iajvoyvg.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qwyxakka.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vdpzphgl.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163quilmxxk.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ofpoppuu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qiccileq.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163yjiikcvy.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ebmgmeho.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ohuavpce.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163afebnihc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163tvtntske.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163bmifligo.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ypmsauik.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163eptwcklr.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163kvhggzvy.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163xatqsakj.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ikgpfucr.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163kqwwdnvf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163gvnpiymo.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163aiyywzik.html

print("Hello")
来源：http://www.aibaodan.cn/163qjhcmklg.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163lxykmjux.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163wjpvsjux.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ljeamhlp.html

"值: \(b)"
来源：http://www.aibaodan.cn/163awxxxxyi.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163dyuweqgw.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163sntygydk.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ykvqzoxw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163uvpatrjw.html


<!-- 参考信息 -->