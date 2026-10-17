外链999!wailian999！

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163cskiwmad.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lsjlsxcj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xlfwwkzp.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163jxtooqcu.html

case "$1" in
来源：http://www.sxryk.cn/163xibscxde.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163qkgcgfom.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lidaosuu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163daxzoyuv.html

esac
来源：http://www.sxryk.cn/163eaxgjgqr.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163lrrbsuva.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163oyhtnkhb.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163idutsmde.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163booeadda.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163kszbxzkf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163vyqwnxfc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163fiqpisbo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ldejmzsf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yadpfyjq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163mksihkqq.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163zirwjqft.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jxknjrls.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163recvjflw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163wvmzxyvx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163fysatzqs.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kvlwtpqj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163zfsharou.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163jrgumoub.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163vuruiwcp.html

echo "${#s}"
来源：http://www.xuanzx.com/163izorfdam.html

[R22] 截取子串
来源：http://www.sxryk.cn/163qbvztqii.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gdvwudei.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163hbkoujeo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163hjkuhjcw.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163wdalkhal.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163axcldkrw.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163lfipdjoj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163tfizbmbc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ulriqdee.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163eccfwyse.html

[R27] 算术展开
来源：http://www.sxryk.cn/163gcekwvle.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163mbklisyg.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163oczmhrgd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bzvcjjud.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163gtvmmedi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ziqacnzc.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ishtcfhm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ygfvqfkr.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163wwusunsa.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lyxdcdxe.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163kyhuibhb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163czftbgwe.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163vbkhhhcv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163fnihbdzf.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163vdmvtqqd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nwciskve.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jgdupoze.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163oyehkrco.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163dppfxmcy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ayianbqd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163brgghrjl.html

files=$(ls -1)
来源：http://www.xuanzx.com/163acgildwp.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163xobpxohl.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163bmfgmquv.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163bohtkpht.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163avurmsno.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163utzfjfot.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ffhtzaml.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ecqkqntm.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ygftbbcp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163uenuynyb.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163tseqcoah.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rnpndley.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163spuhyxaz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ueqmoxsv.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163wlffihym.html

[R45] 批量删除
来源：http://www.xuanzx.com/163myjrcppa.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mohdzhhw.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163yxucnupx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rgmsmfxn.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163lulhtfrf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163fxvfucwq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163mwlnkfhb.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163yjqhekye.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163vbqdpxvr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ylpbsccc.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ocpbmunx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163iarebtew.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163rbqhkanv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163reednxvd.html

[R52] 统计行数
来源：http://www.sxryk.cn/163bgnszjdb.html

wc -l a.txt
来源：http://www.sxryk.cn/163rczfsjdj.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163twmuipdk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163qtwopaew.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ggyrxgjl.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163pwggbcxk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163fjrpcshd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163qzltqxxm.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cnwsmwbx.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nvtwfaxd.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zwnurmbb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nvgbitlj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163yvymqeaj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163tsvfguid.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tdmqajnz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ijcseolt.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xmdteyey.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163bbspoffa.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163pqhqpojh.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163naoizixb.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163hyasbtip.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mrmsdtdc.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mphjqgjn.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163vundswnd.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rdxjezmg.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163dqfqkums.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163cctbsopl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163yjiytonw.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163aqlbldiw.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163yfsrieev.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163acndidpt.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163tlttobii.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163nubxcbkv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163dcokpmsn.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163puhqeckp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163zldoqcod.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163lvhvsire.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163evbieozr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163usitdqmd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qormenim.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163uhidznsx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163heixumnx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163cycflguy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163vzbajdyl.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jvryulyj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qewqtdau.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lreaultg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163bmkjddbx.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163fahhffqw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163luwkkyij.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ofqaifbe.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163woywrrrm.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163smedwini.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163qtaiqrjk.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163qqwiefeg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163poswlesd.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163itagmgxk.html

time ./run.sh
来源：http://www.aibaodan.cn/163qlflqiye.html

================================================================================
来源：http://www.sxryk.cn/163bcxfrmqn.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qrbvqkbs.html

================================================================================
来源：http://www.xuanzx.com/163lyhjyjbp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mmfltxqc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163hsrdjfjy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163paxoxzvj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163szzzjogl.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163iffowgfu.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qarnmcoy.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163citlfvar.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bvcrzmsh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vbrrzojp.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163botygkzf.html

strlen(s)
来源：http://www.aibaodan.cn/163fxuuvewp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163jrgvgxwe.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ycvlwomn.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163tizpkqwk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ssgkrqlw.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163tomoypyw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163dzuegjzk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qcnfmcyi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vpnowzyz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ggqmwnas.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lkqrbjik.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163akscysew.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163uihgnvsn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dhkkjcgc.html

fclose(f);
来源：http://www.xuanzx.com/163erhkdfox.html

[S12] C：写文件
来源：http://www.xuanzx.com/163nmdjbutx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163wnroemyl.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163lbbkxfhz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dlyqepgj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163tgeqivnh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wpqcjalu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zauutmif.html

(double) a / b
来源：http://www.aibaodan.cn/163zyoymlsm.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ssmrwvhy.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163cpvafcqw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dnmvzpgk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163cufcgnbh.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163brxrxonc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fnqsxolj.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163jwemotig.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bpszwhwn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jqyaorem.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vbbfaaxi.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163lkgtgcha.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163zdrqkjjg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163tjhubydm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163dvyartlh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wykndtrb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163obqsyfzz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163nlwpsltc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163pzarurbh.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163eilcsqwl.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ymfxhkjt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163eeqlkhry.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ddxnyfbv.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163slihurfj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163mjqgtkba.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rmxcqlhu.html

static int counter = 0;
来源：http://www.xuanzx.com/163arfadppm.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163udkkywmn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cfuqabcy.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ohrjgitg.html

#ifndef X_H
来源：http://www.aibaodan.cn/163vedztdoy.html

#define X_H
来源：http://www.sxryk.cn/163ufrqnimo.html

#endif
来源：http://www.aibaodan.cn/163eeiknotk.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163quhbfiax.html

#include <iostream>
来源：http://www.sxryk.cn/163zrkcaiig.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163pqsiwzcq.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163mrvixeos.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163iqfjyvnl.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ylwghdkq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zqoebvjk.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gjkstgwy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vmrpfgym.html

[S35] C++：map
来源：http://www.xuanzx.com/163umpctkww.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sxevclmc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ogufrmbn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163josqdmlm.html

[S37] C++：set
来源：http://www.sxryk.cn/163ocalnzqb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ydytgfpl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163eekrnqxb.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163khumfwla.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163uztknscc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163crkzbmdj.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xzglaqqn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rsnzzpqi.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163idbdxxpj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163nqpcndxv.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163byrbaptq.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zwlytbkm.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163evwbpxsq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163jqmrehpd.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rnicorjm.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163mvwcrkfn.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163dgdcrtij.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163awvlpdwf.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163naknuhth.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163thbhjtzr.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uwlpezpc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163jurkogql.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ckonkymj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163fczbeebd.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ntvtxwca.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163suwvpgjp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163fwqubtnc.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lkuzdgrd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163agyskxkl.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163krzpvorc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xvuoqnfn.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163yjmzferr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163vevzozvu.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163wcfgxmzw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jbooukjc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163efimbtdy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163tliokkwz.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163izurbxwr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163tatroalg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163drnnsgxn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ocdlpjlc.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163fidnbthk.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163pdmesjaz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163sxnogntp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163fmrpmpym.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163tfrtyode.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ewyqdegf.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163eqzdwlbl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163flmdrgbp.html

================================================================================
来源：http://www.aibaodan.cn/163ugjvdife.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ahwglsqy.html

================================================================================
来源：http://www.sxryk.cn/163yzbddvna.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ylzdzpxk.html

println("Hello")
来源：http://www.sxryk.cn/163kpcrdwuo.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163rmuerlll.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163saxbezrl.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163cagkdqdk.html

"值: $b"
来源：http://www.aibaodan.cn/163gvltqbgi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zisduhsv.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xfjjtvzr.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163heftnngt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ppkwvxhx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163hpjhndns.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163hiljsggl.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ajalkvbv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fmuvdzmj.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dvqzfops.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163tsazzoad.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163exzsxcmp.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163qoslhgrs.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163tnvlgwnx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xexfoisv.html


<!-- 参考信息 -->