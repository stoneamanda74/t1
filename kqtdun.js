外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163jpmcsctt.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163diqgbbnz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163eprigjsq.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163rmdkvfqi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163cyrbpzbd.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163izqxankk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163wpysxjln.html

[R19] 数组长度
来源：http://www.sxryk.cn/163pnzvtnvq.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163rgudofhx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163wowbdorw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163iarrnyzw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xsyvnlsa.html

echo "${#s}"
来源：http://www.aibaodan.cn/163mcbbzvzw.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163rwpetzqv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163dvdqgsvt.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163evpjndht.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163czfpdqja.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163lrgygtwt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mdliwlbe.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gruyhmfd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163lkglmigz.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163nlcsupdr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163zgheozkn.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ustzbumi.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ecaqnsjj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163tipulpgl.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163kpjtusqv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vfpmkikf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163swfzindp.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163skdxazoq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rnehrlcn.html

[R31] 局部变量
来源：http://www.xuanzx.com/163eqxjsekb.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163cxpcgexv.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163yyyvgixr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163mubzfnuz.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wwmiasab.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ueccwrtw.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nbsvxzrz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vslvjwsq.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163hnduwnjb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ywsafcvt.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163lxrpbcbf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163hsqgiyhk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qzfjzuym.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xcghkmiv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163mqnmauvb.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163hbhirlqx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163dnuzqadw.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163cfusvzpa.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163eaaaglsz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fvfbgatf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163yzurzjtm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163tbsrgght.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163qrqxgseh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ctvquowo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163olrgndyv.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163bzyhaull.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163drneoing.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163dwuddjtz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163lwxocvsa.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mtigdigh.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163fmnxpwjs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163iosvlwhs.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163tvwzmdkt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wzqbsniq.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163uyttyafv.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zswosnhl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163uaiuqakj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ygtvqmfg.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163fktuptrd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163rvzsryjm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163gymnqmxv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163yrrkblyj.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163gnnwwbjt.html

wc -l a.txt
来源：http://www.sxryk.cn/163cvkkmxbq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xkqxoonh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163whfdmxpw.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163perxthhk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163dhureogz.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163maeddhev.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163oeorfwbc.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163lfovsavv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163edkdmqry.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163dileraor.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163eyxchllk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163batrbbcn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ypdaaglt.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163kwmbguch.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163natepatb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163abrdwpfu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163tvxrrrpa.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163yvghtyui.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163modpayul.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hypqpgrm.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163asrohdll.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ffbxuyaj.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163thqyuguh.html

[R64] 结束进程
来源：http://www.sxryk.cn/163sbcbkhhx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163frfdmfsm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163cwcofxad.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163hyqoogvd.html

[R66] 定时任务
来源：http://www.sxryk.cn/163efkhfmoq.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163wnlxinod.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qtwazkey.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163hfkljabe.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163jtzkqmfb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163htnyhchl.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163uznfjvmi.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163pyiezhwb.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xpczswqj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rmjhlgky.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163zkepabtu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163xiaelnif.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163qmbmqsmw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qvqobmuz.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nmuppuvo.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qczogodh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163smltlfcq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163koennfyl.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ezqvfxhp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ovcludud.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pzxoablc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163sdauwtxp.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163wghioidj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163zjobxyzm.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163yekojrkj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163nctbdnes.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163zqfvumpm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163wjiwzask.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163dbcgmbzd.html

time ./run.sh
来源：http://www.xuanzx.com/163dstjovhp.html

================================================================================
来源：http://www.aibaodan.cn/163jktsgehc.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nwvmusen.html

================================================================================
来源：http://www.sxryk.cn/163ifzmdpvy.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vkmahdvl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163nglfgkjq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163fvvjarty.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jcuzhxiv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163fakqdzjj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rrppcddv.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163eornhdsy.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vpxpiwuv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kuhtzhcb.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163pyutucba.html

strlen(s)
来源：http://www.xuanzx.com/163iuvrmasj.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rgosqgyk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rpoxdfdw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dgphslbe.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163uxvsgkau.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163tuddhhkm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fvrgpjsq.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163uhcduqih.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zavlezsm.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163lxsajoif.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163vgpnvoqa.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163helrdupy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qwmrmvdg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163lqwmhman.html

fclose(f);
来源：http://www.xuanzx.com/163nuvijoye.html

[S12] C：写文件
来源：http://www.sxryk.cn/163sxjvybai.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hmnxbtke.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ecjxyxnq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rfdgctri.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jtlkbqfm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163iiomuolw.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163gknhnbxs.html

(double) a / b
来源：http://www.aibaodan.cn/163nggbctuw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zcvazomu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163bluzbbrf.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ztluawwl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163tldjpbmx.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163igtzxgaw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163pyowmxjy.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163pdufsgeg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nngktjvx.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dyxleybg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gbosiqff.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163dtuzynwj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163amjtzeki.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163awdcxvrw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163jaaxcwmh.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vfpcqkik.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ynaymjoy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163lrbglsbp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163xeqadjjr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163nyevmoaj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xkhxikaf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163umqjokxj.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ousdzoeg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gaahficm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vgebfxtx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jjteyamp.html

static int counter = 0;
来源：http://www.aibaodan.cn/163iqsghdco.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163fiserzvv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163mxrjyanv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ycnpppov.html

#ifndef X_H
来源：http://www.xuanzx.com/163kthvuvzg.html

#define X_H
来源：http://www.sxryk.cn/163tstvxktm.html

#endif
来源：http://www.xuanzx.com/163lhptjomy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zhhaujjo.html

#include <iostream>
来源：http://www.xuanzx.com/163iuimmhsa.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jkxgdggj.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163kvmngzgm.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163nphcdfgj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163cdtlrono.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163forhevun.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163aumxqeja.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163qwrxzice.html

[S35] C++：map
来源：http://www.xuanzx.com/163jvgpyxqt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jglhzelp.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gjnnmxmi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163syqgamkl.html

[S37] C++：set
来源：http://www.sxryk.cn/163eimvorih.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163whjdkkcb.html

[S38] C++：排序
来源：http://www.xuanzx.com/163buredefb.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163lqnahxcg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qffadari.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163rvcbzmlp.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163uslxzcdr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fkanmiac.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mmkpszvs.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163kmxftoyg.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163bayumzam.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163nrukuims.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163frtczvvp.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163vyycgrio.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163dxrrdzra.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163blchdeoi.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163uxwyghym.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163puxufiut.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qgspmsha.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rpahxpwa.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ieizdksd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163xxaxpuxd.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163hmibzvfh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ljlhrtfl.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cryavytz.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tdnzdzoh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nzeyrsbv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163aoptnhsv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ypfdrhqc.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163kjcuouhw.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163frxdopyj.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163tisqnnog.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163zctonllj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wsqfudpk.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rjqdpnyp.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ucfkoqlv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163kmwwvvig.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163pszsjfzj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163blqcxedi.html

[S56] C++：optional
来源：http://www.sxryk.cn/163uolamvxe.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163oitdkwlg.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163jxprsbbc.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163adpfyajs.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163omcljykh.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163njfthevk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yygdpand.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163yecvgdke.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163lfnynsjt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163sqjkkoyo.html

================================================================================
来源：http://www.xuanzx.com/163figrlskx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ogvkdjpd.html

================================================================================
来源：http://www.aibaodan.cn/163xmnlkmpk.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163uouheyme.html

println("Hello")
来源：http://www.xuanzx.com/163fmgellod.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163lqwrrqdl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ebnrfkrw.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163bqqjfcrc.html

"值: $b"
来源：http://www.aibaodan.cn/163mzfiuria.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163aylqkpwk.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163crmslsye.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bmejecbp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bjieqdmw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163bwkysgsf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163lgvfoqlv.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163fwcvmjgn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163pawswinp.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163hqxrkmwd.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163danjkvva.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163qvumvlry.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ftifabio.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fsychzux.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ytbsrbnz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163xrsfsquj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163idosmjrs.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163nrmknhlb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163uiqmuxno.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163edidczxw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qzyuvjyi.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163nmtbytcb.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fdznbibw.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163oycmfjhz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wrnqfjdi.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qycmcukz.html

print("Hello")
来源：http://www.xuanzx.com/163zfimdgpy.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163wjzsqnat.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163agldzmed.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163sqkehmui.html

"值: \(b)"
来源：http://www.aibaodan.cn/163plpitgkf.html


<!-- 参考信息 -->