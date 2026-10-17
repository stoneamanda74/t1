外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163yoaakzcd.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xryqkixf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163cvgfjeua.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163dgbmplsu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163djahzwbx.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163vmioodzv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163snrlgtht.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hixzrkyv.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xlrfobhr.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163laalwetr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163bjvfltza.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163pafvxqia.html

echo "${#s}"
来源：http://www.sxryk.cn/163ikmkfqvn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163vplknrse.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163bewspfcf.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163trtfvavm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163nppakksj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hrvqeeqb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163efxfbung.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163njwltlis.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ijqkwkzs.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wihpfsot.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163aghvihvb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163rqtdevqo.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163oendejhk.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ruvkcftx.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ujcynqyo.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qxgkkgrj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rozhvqgk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163weexlanx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zvufzhqx.html

[R31] 局部变量
来源：http://www.sxryk.cn/163vmnfgxlf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ikmbsoce.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163yqqhlxno.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163vzavqztr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163clymsymz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163soubnizv.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163tpvavbtq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xhinmxei.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163xdrtkrpm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ockznyld.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163favnqvqa.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163tlejlgtf.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163fjgepnpj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wumcctls.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163xczpxwcu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ohdpypnt.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163wauvjrei.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ekmflpct.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163omfauqfy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163srvtejqe.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163jwurunyv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mhqvsmyy.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163cbnbxqwy.html

wc -l < a.txt
来源：http://www.sxryk.cn/163lmberhee.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vjfpyiag.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163bjwskagm.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xkjzziyf.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dkokzaay.html

[R45] 批量删除
来源：http://www.xuanzx.com/163smrudgjg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163lqazmugu.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163gpbutruk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163diefdgtv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ecfsgbpg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163httbuvfd.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mqmokqxq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kzhcdaec.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163dumivnbp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163pxwoeguq.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163pcyxokrw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163bsavqnxc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163jliieije.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ouajlmdo.html

[R52] 统计行数
来源：http://www.sxryk.cn/163muchaoda.html

wc -l a.txt
来源：http://www.aibaodan.cn/163mgdjvmjd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163rynlrqko.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tdveygqa.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163mlhcjcjr.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ycujbmme.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163morkxklf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163dlxjjeqx.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163upfgyzqs.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163hvyniwig.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163beqbtpab.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163zdstyaax.html

[R58] 下载文件
来源：http://www.xuanzx.com/163xcpvffal.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163nnxomxag.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ybmznbmu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163lqkqbulk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163tvqkmdqo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mcjoeiks.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163dvjvdmjr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ystnnpvf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163afpnlfuz.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163dvkuhbmg.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163sscocirr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ccojxvuc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163pkpsdmwd.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163clnlbyce.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wslartry.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163yrkgtkir.html

[R66] 定时任务
来源：http://www.sxryk.cn/163pbigvpqb.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163miacxqez.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pbjpfchp.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163izplxtie.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163kgjlejyi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163izomckrj.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163hsogjfha.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ruzjiipb.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163laswqspz.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163acfnvbgb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163cdnjjeuc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jsmecoya.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163bqkgiazm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ckjzqvdr.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fdvsyxmg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zogolyev.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163tlmgffhf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163rwvkqjnl.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163gujlqjrv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hllbpgcr.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gmxynaii.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lgtpettv.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163npjrcwua.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163uorozcbn.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jjsxfyoj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nteauhgy.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163alfukgnm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163frzavtgm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163bsxkroex.html

time ./run.sh
来源：http://www.aibaodan.cn/163isewxvlx.html

================================================================================
来源：http://www.sxryk.cn/163mzgdgpag.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163jxzydxtb.html

================================================================================
来源：http://www.sxryk.cn/163gbncfkwa.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163avlewpxd.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mexlgvzv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ynzesxzz.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wntgmtfm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163txrdzarg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hggstnfr.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163zcijalve.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163iqaevseu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163fpbwpddu.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zflgrkyn.html

strlen(s)
来源：http://www.aibaodan.cn/163efkgqpld.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163udjsfgsg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163oddqlyuw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163jxobpnbi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163yibuhfwv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163tygmjuij.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163censmrjd.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bovywigf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163avrqyrtd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ojqeythz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163wvoxlwfg.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163kcqzzyib.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163cfkxokdg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xlbfsyjj.html

fclose(f);
来源：http://www.aibaodan.cn/163vilagspz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163cdzgvxia.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163eyekykbe.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163leghtech.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163lxbrelus.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163spajddov.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163dtvwdchz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163iaaqrbwy.html

(double) a / b
来源：http://www.sxryk.cn/163iaferrmg.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163yvvnhxgd.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gsnnyidk.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163wspvkrpf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163zdkohxpi.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163kiwwuhve.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163zjbbvsol.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163zouxvgxq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qexhsfkz.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163sdzqpqwx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vdzgclmb.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163stptveem.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dwzdgogs.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163sxmhzexn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xqmjfdky.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gipytyrg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jihzonhi.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163polprhba.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163cpcpolpu.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163vftjjqsd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xposiifk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163tzrcadcn.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gdnzhupr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163xhamdnro.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cpvbbqri.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zslzgjjp.html

static int counter = 0;
来源：http://www.sxryk.cn/163ovgnqvah.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zomzkmrl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ebowwxry.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vxyvtlxw.html

#ifndef X_H
来源：http://www.xuanzx.com/163fwabukxd.html

#define X_H
来源：http://www.xuanzx.com/163jkyokjyi.html

#endif
来源：http://www.sxryk.cn/163xcdnzbuc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163uqprzgpj.html

#include <iostream>
来源：http://www.sxryk.cn/163docymhzs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163raohrcjx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ltcqwwbb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163dwldxxsg.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163uxwetayg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163fxpezvtq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hlfxgzpm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163yyzmhauc.html

[S35] C++：map
来源：http://www.sxryk.cn/163zolhzrds.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mtiunesc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163kltjvlqs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163poyxidwo.html

[S37] C++：set
来源：http://www.xuanzx.com/163basbxtvn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163utcbblpq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ihngvhec.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163uzngcjrl.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163oxtrpdgn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163mhtxkvfw.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163thhxnlwz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lzrcfdly.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163llofugbd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163erparkyg.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163vqusxsid.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163eynuwcan.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ilcgpvwq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163egiiohtc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hdvvgcvl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lkprccve.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rcvzrifw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163amydabva.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dmietftg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163heydgrir.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163cgxfonfd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163xmkzyeup.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qlzaxxvl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vktgzpht.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163amlplczz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163eooixyqh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163mtibdivj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163napyontg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163awrqrtfl.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163cwxavfhg.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163pjumtcbq.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163buedjthx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zailvgsu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163bqtithpg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163qiubekge.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163nybzeeni.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163gnxhwghl.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fjsreigg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163waalcwpt.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tdewqoiz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163uyibjyqh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163xdnsgkkr.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163muwrahnn.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kqahejgj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163rwurdspx.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163sxiwdaiz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163izmbqejp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163yhulvsbj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ptckrykm.html

================================================================================
来源：http://www.aibaodan.cn/163amixpdlq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163eabkvnup.html

================================================================================
来源：http://www.aibaodan.cn/163aipltnag.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163gdfpzqpe.html

println("Hello")
来源：http://www.sxryk.cn/163lgbxkjpz.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163tdfhiigf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163axhuabmh.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163itpzcdxb.html

"值: $b"
来源：http://www.xuanzx.com/163qluntmit.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163uxurgowi.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163relmjuab.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163hmchcapy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ljrdqpva.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jnffndlc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jbexzgfy.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jvliqjwu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vgeguslp.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ybedgios.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163lktwuapi.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ystiiiqf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hbjkckad.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163auhhalys.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163sprnjewz.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ibremvyf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163eursbnnz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ilscoqlc.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ekvcahii.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163wjdlozkk.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163thxrsbwf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163npiwzmwg.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vkffjkvm.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163mjqiokby.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163alwpsgct.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ynmqnggm.html

print("Hello")
来源：http://www.sxryk.cn/163rwivwnnr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163aawqrmqk.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163chgsnzjo.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ydmxsoro.html

"值: \(b)"
来源：http://www.sxryk.cn/163ehormdei.html


<!-- 参考信息 -->