外链999!wailian999！

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163lbnvufsr.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yzcgpjtq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hjiccxkq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163gdojbuti.html

case "$1" in
来源：http://www.sxryk.cn/163yyixwzeu.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163dljzarhv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ackfkqei.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163lzldnofz.html

esac
来源：http://www.xuanzx.com/163cvxirbzv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fpammpjw.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163imbakzxt.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ohyhpllh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ozsdeplz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163tkwucaht.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163svtzybjw.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163hbksefdf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wbdbgray.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163vkwhqjzl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163kpqdtozc.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163pgpxbvky.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163fmtbqchl.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163fhuktgek.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163aivnfvht.html

[R19] 数组长度
来源：http://www.xuanzx.com/163zlpbbnqg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163tbsnkglo.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jgbgjupu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tgyyhuaw.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163oipvvtor.html

echo "${#s}"
来源：http://www.xuanzx.com/163lisoyrhs.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ongxprwx.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cueuvmzg.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ptpmzvno.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163tuikitdl.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ylejgwum.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zufrynac.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163nvrllhdx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163mbopwaqg.html

[R26] 命令替换
来源：http://www.xuanzx.com/163osclfakn.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163krhzxhra.html

[R27] 算术展开
来源：http://www.xuanzx.com/163pjjkgncl.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163klysuckv.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jnxkkaht.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163mkyvwxqo.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163fyneibvi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163nzipcbwa.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163cxhfjxfg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zsepluod.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mrbcqdyj.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163kwowhshd.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163rpwxtaea.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163pchfjehn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163hcmgrkur.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163mxzuvmof.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163tjsuydub.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wijctrty.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gubmnvku.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jtcpahar.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163auqtddpc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ccamknwl.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163inwxbxcd.html

files=$(ls -1)
来源：http://www.sxryk.cn/163odruhbmw.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xjpkryfk.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wcolrbou.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163wecefpry.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163oqpsqyvy.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163picncdnt.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zpfgcjcj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163coqvfvcu.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fhoyviws.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163psxgwniz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163yieudiri.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163oblbwyew.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163majefsxu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163jbwmczbo.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163tvcvuain.html

[R45] 批量删除
来源：http://www.sxryk.cn/163kmitsatw.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163hyadswfu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163uqzctkyz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163hpvnlfax.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163meputunt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163etrduboc.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163hkupcxvo.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ejadbttb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163tuoqvkwb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kybyolnm.html

[R50] awk 求和
来源：http://www.xuanzx.com/163vhhjtwhe.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cgpjukyi.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163lwukmyij.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ifaohpoc.html

[R52] 统计行数
来源：http://www.sxryk.cn/163arfmqzhk.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qejgvxxf.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163rdcbbgwr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ibceiqic.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163mlugxdcu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163rqaqceyu.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mlznqosi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163zdxcdjbs.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163fxvrtwjv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163bgtbhxpc.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163xyvzetrn.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rqkezgsz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ldnrskdk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vvctffma.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ylrmmqei.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vyviaepf.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163kaukpqin.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ukirzhom.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gbftyqhs.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163yeulztbl.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ohhydlma.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163agonzcwf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163lrqlajak.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163okilenwp.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ghzjujsn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163yrutpwaf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rayeizpy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163epxaigzj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163fuwtqgel.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xxxkxwrx.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163mtofkcle.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vrelkzac.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163umkigbxr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zzzswwdh.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vhrxolmi.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ehiytqxd.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xwmmdglh.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163qgvxxxim.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163saeagdby.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rbgagyqa.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163pbxpoqfa.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163trywxasr.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163fixthjvw.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163grvubucr.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163yyubiett.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ebcggbse.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163vrvfxnpn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zhakhznx.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163zrwayrgm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gtttoblt.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163qqncmdgm.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xhfagedt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163sioolrcr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163crizpbwu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163vinmfekp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163zjuijwpq.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163hosixyxr.html

time ./run.sh
来源：http://www.aibaodan.cn/163giqiaaks.html

================================================================================
来源：http://www.sxryk.cn/163rvuzcmlg.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ltntdiwa.html

================================================================================
来源：http://www.aibaodan.cn/163hwxebkpe.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mllqsopv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163xrvzlemx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rnzsuqor.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163foeellks.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163wgsphfng.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hxrkldpl.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163npvrfgci.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ufougyze.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ahaxofdo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163bfaiehsh.html

strlen(s)
来源：http://www.sxryk.cn/163rklayquz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ipwrbvzp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163jsfzkpje.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ggchejou.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163swzkgobh.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jkrbsayr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163yaxprmyc.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jphuawdr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163pzidtock.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fftsffln.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zjmkctij.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vrwkvtks.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ubfkbypb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163cjpkcxoz.html

fclose(f);
来源：http://www.sxryk.cn/163zokjztou.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bvknlhql.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163fvxkxjon.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163hrwaxjqi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163wovhqfoh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163aeaeqjuk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163cjenudyt.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163prmhahzz.html

(double) a / b
来源：http://www.sxryk.cn/163czlfziyh.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vinhfzgv.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fsuewmiy.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cwxrwecp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163xnjlkqus.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fuhurlso.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163babczvkk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rejnmezo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zzikpshz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163mkxrpvun.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nveionsf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163srpszpoa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163zflamrwa.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ecjmcucs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qvklhkfe.html

[S23] C：随机数
来源：http://www.xuanzx.com/163kevxuqdj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163hghwpolh.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163oftkdaul.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163rhdyjkow.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uokvjzik.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163kfoturyb.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vhffkwnw.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163aagzrtnv.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163pmykqyef.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163nmrkpmdi.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163syfcqzxo.html

static int counter = 0;
来源：http://www.aibaodan.cn/163cudbehvt.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163afhjchdu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163eandjwql.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163pdtvctqk.html

#ifndef X_H
来源：http://www.xuanzx.com/163vibhdzdu.html

#define X_H
来源：http://www.aibaodan.cn/163uvjmhytm.html

#endif
来源：http://www.sxryk.cn/163lijbfloh.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lyrcgcbc.html

#include <iostream>
来源：http://www.aibaodan.cn/163lfhmynvj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163xzqvzzec.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163dmkmhrcc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163lqbvtdaz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163lbqadyky.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gkkvemza.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163swrwhpwn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163dckcmepp.html

[S35] C++：map
来源：http://www.xuanzx.com/163zzdhsdyy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xtiykkfw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163mhzswwrt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dtexcmhh.html

[S37] C++：set
来源：http://www.xuanzx.com/163tezajgso.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163swlcsgxv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163flstnqpp.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163goleodqc.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163itkxciyr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zubesati.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163cswwnbwa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163jjtqncde.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163hhiscwbn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bigjsrbp.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163otuewjfi.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fdeyhdwe.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mzaghstw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163qftifcau.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163kxganrjq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qmzyyyrn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163tnjeuubs.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163bixfdhnh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163qwytwemf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163tpxgxvbu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163iputuvzt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163svsfehqs.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ffvdrxez.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kwupbeyy.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ewpwbvsq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163mcxkhubb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zjdtwmzm.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163srmctqtz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163zhtzitgo.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163wmwvvejq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163mobrltuz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163hxitqmtw.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163mbruwaum.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163jmtdmtag.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rdtedker.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163houmolmc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163sgvezaok.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163uwajduxi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163tgxxknit.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lxkmaevp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zgruioue.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163tzzvqgjg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jkhtjbbg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pbvvvhkw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qiegaltb.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wudxadly.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163npfbkheg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163pdvudzsr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gxhbudjm.html

================================================================================
来源：http://www.sxryk.cn/163yzytqtqm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wheiulfj.html

================================================================================
来源：http://www.xuanzx.com/163pjlznxpw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163xrykicrh.html

println("Hello")
来源：http://www.aibaodan.cn/163hivsaide.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tbsnckhd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163oaravxmp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163inmbbwjd.html

"值: $b"
来源：http://www.xuanzx.com/163gqgaykzi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wxitzfcn.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163vzncmnzl.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163fxoxxphi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163kdatjhbw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163hnngwnak.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163yoevdaof.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163tiyiypmz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163bshwqbsq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ciuxwmcv.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qgyclwsy.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163bbxlufxo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fyjveqbi.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ziwoelrv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163kdudyebi.html


<!-- 参考信息 -->