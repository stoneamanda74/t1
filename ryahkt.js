外链999!wailian999！

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ijnbpfei.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163tlsrzbgs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kctmvvyu.html

[R11] case 多分支
来源：http://www.xuanzx.com/163lrbuvbvn.html

case "$1" in
来源：http://www.xuanzx.com/163sfmnxewx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zupzcqha.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163rezdayyy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163aqwnkuyc.html

esac
来源：http://www.xuanzx.com/163nfmuvgwr.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163napimbqq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163rteawoxz.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163zvfrwrpq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ibzagzkq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163oxxmonzl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163znjtfciv.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wjnqnrfu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163nyilcebz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ylrphgzw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fteyhaqa.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163fpvmohcj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qnujctap.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qipljkwd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163sccwegrb.html

[R19] 数组长度
来源：http://www.xuanzx.com/163iicocjxk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163yctqheah.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ylhjlhdt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wbniftbn.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163pxiqryfi.html

echo "${#s}"
来源：http://www.aibaodan.cn/163bkofwtay.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xlgtyxsf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163xatcxpvv.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qesstbhz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163dnrzcnwh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163xccffshu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163qnfqlreu.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163xmmxjnvd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ximrvraq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163pjkdfmmi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lrdnopdr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ujwghcdm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hciwsgeb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163eckaubbv.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vgsfqzds.html

[R29] 定义函数
来源：http://www.sxryk.cn/163mqsxfsle.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163pjrkoqlb.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163khjvawlq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xlucntul.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ssopevzs.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163amfhnbwf.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dbbublsn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ncrchfsc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rgacmmij.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dhmelmmx.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xjmkpeyu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ttnuhtam.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jnighjau.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163vrpombxo.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163hvimsuyr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163nqrbxqru.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hksollud.html

files=$(ls -1)
来源：http://www.xuanzx.com/163styxunss.html

[R38] 管道串联
来源：http://www.sxryk.cn/163fogxvzmi.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dnudykru.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gikkkfbu.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163awkwfylj.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qvyvohwj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vqnlgala.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163nwmjvttd.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163enujvcbj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163pevqyrvo.html

wc -l < a.txt
来源：http://www.sxryk.cn/163zslurvej.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163reqlahbu.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ulxyetrp.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163adyfktnp.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163kjznfgmp.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ccyernaw.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163phjcfcbb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163oishalif.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163kiyffouv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163crtuulud.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163gnyzgfsg.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ngdtgioz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ftbdvrzf.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163myngoogz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163avkdqbjg.html

[R50] awk 求和
来源：http://www.xuanzx.com/163duxeckdi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zfkdxuon.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163igyodvdx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zzalqzlg.html

[R52] 统计行数
来源：http://www.sxryk.cn/163oeenbhcj.html

wc -l a.txt
来源：http://www.sxryk.cn/163rwoekqpg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163rjdeymcg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163wkiurnwh.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163skvvkpeh.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163acjxgkpt.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163gwzwthph.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163cwpajyxv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lmeulqev.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ftvblynd.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163gjqukvqs.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163brevuybc.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qkgdooey.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ovjlujog.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tfavpjuy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163etmsdfle.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ojdmgfos.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163fwggbgua.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163okfuacea.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163kwptrdzp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163treygapg.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163euuqyhte.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163eiekffzr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163itedczld.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ixzpdmvy.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xaunostm.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163fnvhjchd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163znvpbtvf.html

[R66] 定时任务
来源：http://www.sxryk.cn/163joluymlh.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163dymfvauw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dqntczmd.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nrmpvleg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163mxulxcts.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163isopdynl.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163yvxtnnnn.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ypdgndht.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ewmmhtwl.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163wjfxugzg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163fyjthouj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163maaiupkw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163satgjabk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163fatbkunw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dqvjeyxo.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163msbxempz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163mxefjicu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mvnjqqws.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163peqbeljk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163krjozthq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ayygfmsl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163loxoqbmo.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ilbhwtdb.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163divijsgv.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163tszjejkv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xcozoaat.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wdlcmvdm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163duaqquio.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163eryafcsb.html

time ./run.sh
来源：http://www.sxryk.cn/163ioqeoqpb.html

================================================================================
来源：http://www.xuanzx.com/163kyujklxs.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163hwyczbgm.html

================================================================================
来源：http://www.aibaodan.cn/163zcpuvepa.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lgrsemsu.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jqjufytb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vnpixixl.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163szoxxdeq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163foravtto.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163espimbkx.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163duyufrlr.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163kxzszfop.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bidokcio.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163bglxisdt.html

strlen(s)
来源：http://www.xuanzx.com/163izldeklb.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163vgspmljh.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163sqrsuvlb.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163sfyflfam.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vhxpooip.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ofbefnnb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163uynkgixm.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163smnzmoha.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zjuyrplu.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qjecpkja.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163nxfkdkuv.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163taasmmgh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163nasmyhkd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dicypqul.html

fclose(f);
来源：http://www.xuanzx.com/163jxhfiaeb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163pssgqino.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163tusfezjf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163xneubacm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zgyxckyf.html

[S14] C：枚举
来源：http://www.xuanzx.com/163cequyxnt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163frylbucn.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163atfafvxk.html

(double) a / b
来源：http://www.sxryk.cn/163wsytdeyp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163uebfrazs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163eikqrawh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kedvwwpu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163eedhwmlm.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163wllmzpjv.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163fviedzxj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163nbsxexpg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163noqpujee.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163khzliyap.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oeprvide.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163dllqaxsl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lenkmzdl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163kgjkekqg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lnajuqhn.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163itxvmsgb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163avgbtphq.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163scjwtrpy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163zhxsvybo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163oeusawrs.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163uthlbqhu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wyseggps.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163evoljvsc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fkoctfkt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ndfwgake.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tuhhefaz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163nbqkszfa.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163tlklhmix.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ocowzyem.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fupippkt.html

#ifndef X_H
来源：http://www.aibaodan.cn/163eyomiryk.html

#define X_H
来源：http://www.aibaodan.cn/163cyyokcmk.html

#endif
来源：http://www.sxryk.cn/163ewbdzzdl.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163jihqprfw.html

#include <iostream>
来源：http://www.xuanzx.com/163lmhxfgzz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xyiryxme.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163pfkmzauc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wabprrlp.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163cjfxcszm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xzuentfb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163tjfqpndg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163pmuolcsq.html

[S35] C++：map
来源：http://www.xuanzx.com/163glwefxva.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cltucpsl.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163yjnpxpps.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163putvouoe.html

[S37] C++：set
来源：http://www.aibaodan.cn/163iduslymt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163zmcagibe.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fgbhbcvm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tiosztdv.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163cuvzgywe.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163nkivvsoa.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163urtpkbmk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ntirendl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xbrttrno.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dljjcxer.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163prucokjl.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163mnpbgpow.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ggbdxmdc.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wggzzhjn.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163dhlunldf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163tznvgslc.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ruiasawo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163fbmihcaq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163jcdgtgni.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ytnhzeua.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163izvwvffc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163eginenfp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ajzwqvof.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163zskwnezc.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163xbyuvwmk.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zmeavfds.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gjjjadhi.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163vixcgvya.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jgdwscee.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fgftlztk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163yqnrlxkc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xgmfqesf.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163mzhlbgmk.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ftasbxva.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163luoykrzt.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ehedwojx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163hxffmdrs.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163cwtxigic.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163arruvpqo.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cmntsedj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qmntqsrd.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163pvcfkuaj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ugjqtoiw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163rkcfoyzl.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kaydeipy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163vtxxnqvv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jnywiotu.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lfmjdnix.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163eqbgwwlx.html

================================================================================
来源：http://www.sxryk.cn/163jymiabrx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163igdyfbkh.html

================================================================================
来源：http://www.sxryk.cn/163mvskslew.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163mibwyiey.html

println("Hello")
来源：http://www.sxryk.cn/163kcqwszhi.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163azoadfps.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ppxpdtjz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jwtiwnrn.html

"值: $b"
来源：http://www.aibaodan.cn/163tnhjvzyh.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163zzcgqsxo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163auygjmdh.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ptuqcsfc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xeedlxon.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163sdvbshur.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163dqygvzvv.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163idlukawc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163smscqncu.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163tfzmkaql.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163vnuliiiq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163efqnkqlr.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ohcszgoc.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ikpdnwsa.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163hwkwdyfg.html


<!-- 参考信息 -->