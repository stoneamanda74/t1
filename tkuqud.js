外链999!wailian999！

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163odsbtwzd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163cslwyicw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163skwawkvz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jewpnwlw.html

case "$1" in
来源：http://www.aibaodan.cn/163juflcore.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163nszyojsq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163gjtnaaes.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163isbphgxg.html

esac
来源：http://www.sxryk.cn/163tasjozme.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163bggwvipp.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163nxrmcooe.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mcbszwbr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ecuimbhe.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163sllnaopu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163glboneop.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163yntxfdsg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mdagmtgc.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vzxbahim.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xbjrywzz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163fowmrdoe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163usmepzgm.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ywhyjdog.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qtqllsju.html

[R19] 数组长度
来源：http://www.sxryk.cn/163tyqkexnw.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163tuvopfeo.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kprvkija.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163fumqldhb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163lzxjezre.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fbrtkkap.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163dnnocbyo.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163hlboebtu.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163liurunlu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163quleawis.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163fvdlbyge.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163trgtjeiz.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163isuhycbj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163fbnzkukm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163bodjseqs.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ilgsfvwb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163enjhwqpf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tvewgtdg.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tmbfoimw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ahzzgmam.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ewbogjhr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163dfmwhqkq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163dqmvkkyj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163toclksnf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163lcqyoaeh.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163poxsclip.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163tqyggqgu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163gqdxtsze.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163zkuwuslg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163teuenudx.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163esednrsd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jvudilru.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tzqtbncu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163kesnazls.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gsgjibcn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163pdfxwzji.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163zglqmsev.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xdzzkinx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163xtysbajl.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163oykohpwg.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rsxfwebe.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163suzqwigv.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ezuvxctg.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ycpkxmjs.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ygxlyhcg.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163rakvnxwo.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163gewcyump.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ttjwoldu.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rozssabo.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163iojzpxpg.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163igsgylfr.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ulnegwqq.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fmsywgyx.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163frrwrolr.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jczwdzuf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163cutvvjxt.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163zqsbkyas.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ytwliwba.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jrikzejm.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163wjxribcs.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163uyxvlyoq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163yglckqaz.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uwnzhmzv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wubhtlwr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rebpjcyn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xtgoswnl.html

[R52] 统计行数
来源：http://www.sxryk.cn/163wfzfknpg.html

wc -l a.txt
来源：http://www.xuanzx.com/163hjrmfmah.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163mhctkywe.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163eqrfmxbu.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dpyhukac.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ksicckwb.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qrnnzqqp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ofujtlrz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qnsnmzud.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163czodevai.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163cfywaozl.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ajpslalu.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163obvsmbit.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163wytydizc.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163vynjneob.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163pnnlfajv.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163jahcfljp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163rmllqkfo.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163kvzgksgx.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163gqodkbqf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163slqbwbkc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163kflyjjte.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qetdohuf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163twkwzajx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163iomeetwm.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qzzjfzwe.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rczsvuvy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dhxlvyib.html

[R66] 定时任务
来源：http://www.sxryk.cn/163jeeioelc.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xmjijtmj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163qhrwxcgb.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163bvxsnvdd.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163cktijlbz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163yqzbbjtv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vmrmdbhk.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gdozenhu.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163sebnooiw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163pxoouart.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163mjkiypch.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163swfkiogh.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163lzeksykq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jzlcjuyj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ypzwjpeo.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zwxsrgra.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163panmxver.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wxuadhum.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cfvvoimp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ivkakxfw.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163zhtlbniy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bbviqbcr.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ilpjgnez.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163cpzorldj.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163igscckbj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163koysafhs.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163bxcgqmqt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nlaorzek.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ermuqvhy.html

time ./run.sh
来源：http://www.xuanzx.com/163varucekm.html

================================================================================
来源：http://www.xuanzx.com/163wdarmejc.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163wjbsjmhi.html

================================================================================
来源：http://www.sxryk.cn/163znztbknz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vqogvozr.html

#include <stdio.h>
来源：http://www.sxryk.cn/163rwuynpbm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163eeetlayu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hfsiidou.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pqmavopt.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163xztwdrga.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163qszqdvvs.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xkwknpub.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wrasklsk.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163lkqpirml.html

strlen(s)
来源：http://www.xuanzx.com/163fnhgihma.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jtsrbfhp.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163zxxcnecw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hvubpvfi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zkbitjtz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qlnxpire.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163shwfwykv.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163bbmdbedh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ybmhwtor.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zrydafem.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163snnpqeni.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163yrqcrkxc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ildrawbj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bgltrbvl.html

fclose(f);
来源：http://www.aibaodan.cn/163xtyjzsav.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163yebencle.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163jqpmcnpg.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163nciudtqy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ckkywixt.html

[S14] C：枚举
来源：http://www.sxryk.cn/163murusnjr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163akhdfihj.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vvrgxdha.html

(double) a / b
来源：http://www.aibaodan.cn/163tfouxnxt.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163firpvnym.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jluoyhew.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163jprxuadh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rsvimzbl.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163hvvyciop.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dygpzfkt.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jvprsbyf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rtossjzz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163trlleqes.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uohdxizd.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163celfyyrd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ozpoxekj.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ykgjgrug.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163blrzzeuh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163uxhrauje.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kikgawlt.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163yfukxuyp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ktndvwvo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163baayryfo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163cirwitmo.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ciubghxo.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163rmcdipbi.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163jvqsfcbj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163bcowsvgx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163vaxqbodt.html

static int counter = 0;
来源：http://www.aibaodan.cn/163wunkhpsj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163szddhujz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163dsizalbl.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gkzqjawt.html

#ifndef X_H
来源：http://www.sxryk.cn/163syscdeic.html

#define X_H
来源：http://www.xuanzx.com/163ssspiibs.html

#endif
来源：http://www.sxryk.cn/163cgmgyiku.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163lerblyct.html

#include <iostream>
来源：http://www.sxryk.cn/163ghqndggy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163eqvcwgiz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163biptrpov.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163maeatutu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ectszlcd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dqufwnhe.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ipzjwarh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dkfgduvn.html

[S35] C++：map
来源：http://www.xuanzx.com/163hdgkqanf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qdbtsbve.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ehlmscob.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dkduwgan.html

[S37] C++：set
来源：http://www.sxryk.cn/163sglhdrdj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163dxzubmbf.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163oyuikavf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163sxsvqtyo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kkknpzik.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163xkhiowhs.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rxfbsfgf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wbgpstpb.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163cxoruqqw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163wkupvpmr.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163deocyslw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xhgyscym.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163woubmcob.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gpubrsdl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163phoribmr.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163zgqkuqtc.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163koljijtw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163xsvcrqjj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rlbiyucq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ihmahxcr.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163mnieblcc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mbmehnta.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163exktncds.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mvwpggfz.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cglquzxu.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163uuczqwbe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ukqtsihf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gfajgmrx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ptwsfjwh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163buvjpazf.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163naigoevo.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ftgzmgey.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qxzsnyxz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163duyyhhmo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vtsszgcf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163sxojivuq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163tzluzndn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ywjholci.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lpzgbuqw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163epghyimh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nvgamtsi.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163dlkgwekg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163gbazkiiz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mkynwvvd.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163umohagxm.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163rfbuhwix.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163acezgxnh.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163whyjpfsk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ofaunavg.html

================================================================================
来源：http://www.xuanzx.com/163nshhdizk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vodslxkc.html

================================================================================
来源：http://www.xuanzx.com/163erxvcgfq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ktsjwbwe.html

println("Hello")
来源：http://www.aibaodan.cn/163fvwvtdvh.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163svzbfohj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ztiqkrhi.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zefxcycq.html

"值: $b"
来源：http://www.xuanzx.com/163rufwoqcq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163gejqboco.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163hdvdtpwo.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163dqmrshoa.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163mdhdjeok.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ayjzshiq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163sitbkutj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fuypjqfk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163rcpykpnu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163devmrwkh.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ckzvonie.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163wkleernk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ngyjcxmz.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ksniubqt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vfyayleg.html


<!-- 参考信息 -->