外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163tmpwsvzf.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163beqjcqrx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163oihdiufh.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rnbtezmt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163sdsnllfr.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163trlejtfm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rxirqwkc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tnfvwtww.html

case "$1" in
来源：http://www.aibaodan.cn/163bmjjyrsv.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163foixgpnw.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163yhcxcsqj.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163pijezulg.html

esac
来源：http://www.xuanzx.com/163qqyteqfr.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163pbzmgupl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zzbtteyp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163itspiesn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163fynazgqw.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163sklrpkkx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163dkbovzqq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rhlhkgum.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fsnoonzi.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163pfcdlswh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ilifuilh.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163uopkmevz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163bwidbqyq.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163optnxdqa.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wstuhszq.html

[R19] 数组长度
来源：http://www.xuanzx.com/163zaqchkqc.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zwnzouwd.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163enptuake.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163etkybzuh.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163pyoofvkd.html

echo "${#s}"
来源：http://www.aibaodan.cn/163nibgimkz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wllwcnrw.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163vucvioye.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163dstguplc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fhdvsmwr.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163dgboepnp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163bobvytnw.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163klkqfgvs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163enblaetk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dkplaveq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163biviltqt.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lkttwlyu.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xhbbcsjd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163jpjnyuwy.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wunqyklo.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163beumritb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ubrgbncu.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163mnciaqdn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xveqdvaf.html

[R31] 局部变量
来源：http://www.sxryk.cn/163czuixeqk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tnjgilvt.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163zvjqgmow.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163zrqvljhq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163afnelcou.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163nonniyyc.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163pzvzkozx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163suyhaaaj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nlzzitbs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163htmuzjsg.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163fytljhvz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163clypkfhr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163zvcmvqsu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163bwzujqpp.html

[R38] 管道串联
来源：http://www.xuanzx.com/163spqhborc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163kuylznil.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hnfigwhx.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163rmomxkex.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163semecrvp.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fjigiycb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163onrzmmhi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163auawwdoy.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163iwtlmefe.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xdzghnlr.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cmtsdcqq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163bsprdeoh.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ubqxhvbz.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ouohyytx.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163coktspuz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163rbhfmvem.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163cvtwadck.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lcvccabi.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ttaymzld.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ukhujjqq.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163aseusdeo.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163sdzectku.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163mkacqlgo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163crlulsny.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163qgwadanv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163osbriarw.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163bahoynel.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163mirdzofz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163crwbslwa.html

wc -l a.txt
来源：http://www.sxryk.cn/163nuryjaty.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163yyjkkhyy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163bfvhggwx.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163cxdljcrg.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163icfqmvvy.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163fciwsisk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163scgcljlf.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163gbbbxryb.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163qibiyinl.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163crcutluq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jvyfzqfg.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163xkqleszw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163kxpujipj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tcrsxcoi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163forncuva.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163tziyboez.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163rhktplli.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163xinhnfsd.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163lnyemfiu.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163kefjvoih.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ygemelsw.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163raddrwiu.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nnndgqjn.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ompculkz.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163wlghcwhi.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163jdlufyst.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163raslxgzv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163zfbhbxrt.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tyrvgwcf.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163zajqlhqu.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163xhzvbmij.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cbpuwrbq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163netfxlky.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kawkzqec.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163dzgngdcy.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wwpqhkns.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fspdpmco.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ujwgxvly.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163wcnlttuj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163mxtdwijo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163hfbxulaj.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163qsmhkjcq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163iszqpykt.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163paerqhgz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163arrrbmgs.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163kuvlgaxo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163basvixef.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jdemvjud.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xhfnhgjh.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fcbgaubz.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163jetznvql.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163wevrkfcq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163wshsbzov.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163lopefjpw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163bvevaqsx.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163npwdztgx.html

time ./run.sh
来源：http://www.sxryk.cn/163yzmevdlk.html

================================================================================
来源：http://www.sxryk.cn/163ynqmxhmk.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ghaghmhc.html

================================================================================
来源：http://www.sxryk.cn/163vovgitpr.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xplshizt.html

#include <stdio.h>
来源：http://www.sxryk.cn/163byjxtnqv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dayfrogs.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hyqjixxb.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163yiknaujq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qogrxpbi.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163drsmwisi.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xbxqmbmc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163qqxshqoj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kxpwqwzy.html

strlen(s)
来源：http://www.sxryk.cn/163zkomdvdx.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163adyaqoqb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163deskblrc.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163mwurxiqf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163fxzvpitr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163tyggqqez.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163bhlttkpg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cgwtetme.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kivxjzam.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lfourkug.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fjeybnks.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163apdtibuv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163dynkxeam.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rpmgdrdh.html

fclose(f);
来源：http://www.aibaodan.cn/163inqaatkd.html

[S12] C：写文件
来源：http://www.sxryk.cn/163uckwzjeu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xjvepttd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jzzkkfkw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163mlxpcadh.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ipwaepec.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163cxatdres.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163lapfyzln.html

(double) a / b
来源：http://www.sxryk.cn/163oczdewhp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163urybmroh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163rkrixogl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163nsvqkhzp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qpbtwgjh.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163kmauctps.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163kovqpdat.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163bplcypgg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ocircogr.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ftextodk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163inhpwiva.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vazqxxkg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163rtwodxkl.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163kskaaffg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163amuyatvy.html

[S23] C：随机数
来源：http://www.sxryk.cn/163uhoevhib.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163kqbnjobk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ibsmjlhj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xppatijc.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163msrvvcsj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163qsqlbnem.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163nmefabii.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163militzni.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163unqeesjs.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163efrcpkoj.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zqvwawna.html

static int counter = 0;
来源：http://www.sxryk.cn/163ryfkudza.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ewkpeisn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163uigvaggs.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163rhopzfoe.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xrmxfaiw.html

#define X_H
来源：http://www.aibaodan.cn/163lphyauvk.html

#endif
来源：http://www.xuanzx.com/163wmugliou.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mkpwbhtu.html

#include <iostream>
来源：http://www.xuanzx.com/163klgagyet.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mosjsywf.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163bspykhod.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163krhigofz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163tkkjzzzw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163hkiwvldu.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zfnauchs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yifjzoot.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pdistbzt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163iivijmvy.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jevkhhtj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ckicyfnm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ofgigrxv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163pdqgcmnq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163uufhujzr.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163lfjxyyuu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xqhfbesl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163oxrsyuac.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dtjrdrfp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163chfxqwuk.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lcaiuxfg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163nvnhltvk.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zqgrymys.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163jnqcjhob.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163tfrwefzm.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163viugkayf.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163sfqsnkxf.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ozgwlovo.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163eaznxjtu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163lzsrlcpb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163bqfhfbum.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hphnsdey.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vmiprfaz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ztzrgtqv.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fzuxrgmi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163endqzurs.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163hhewtdzm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163cqtbjqxn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163naxhhoib.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163hsvzlfaf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ewmxchoe.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163kuvusdtq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zsdrazdb.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163spxkqhze.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qguyxxhi.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vnzltrwv.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lqcmouzb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163jagveuam.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163pvrtrass.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163dvfysxqi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163jdxrpeyi.html

[S56] C++：optional
来源：http://www.xuanzx.com/163mdqbhymq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ojdxuyqu.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163bminxejw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163uiowytoz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163htpeqsnm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163uefgxpbs.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163chebnrvs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wokzlerb.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ljmwluvw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xyfkobra.html

================================================================================
来源：http://www.sxryk.cn/163mvhtyvjk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ukmyfiui.html

================================================================================
来源：http://www.aibaodan.cn/163dtnywcuh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163tmgzhbvi.html

println("Hello")
来源：http://www.aibaodan.cn/163hlhkowcm.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ocairpxl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163salppqaz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163vrhifdfh.html

"值: $b"
来源：http://www.xuanzx.com/163wqrnepvy.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163qarzynii.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163szibgyzk.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163zwrxwquh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163sgpkxxnf.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163dnityhch.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163saobndus.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wczbzato.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163klhqeyln.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163bsmxpanh.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163oylwhwip.html


<!-- 参考信息 -->