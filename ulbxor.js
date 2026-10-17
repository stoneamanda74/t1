外链999!wailian999！

esac
来源：http://www.aibaodan.cn/163yeabodoe.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wzqvjenm.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163icbqrgce.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163igesgmik.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163tzfyhmsp.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xynbypru.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ltshaeiq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163webcmgzt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163zweiqpae.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163bjndoudg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lejztjat.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163iktbygxv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163poudafub.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ptrpevgm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163rmvupfjo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vzykqqet.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163xvnxkptm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163xvpmmzvm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163mzvhswnj.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163kidjifgp.html

echo "${#s}"
来源：http://www.sxryk.cn/163xiaoxiep.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ovkeempg.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163yibbosut.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163cmsjccel.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163zsjyioxo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163drxdofjw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163sckgatrj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163bhorymfy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163jtbnqwre.html

[R26] 命令替换
来源：http://www.sxryk.cn/163izeynhcs.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163zldqhqwn.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163xdhacsiv.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163zkkjbghp.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163exefaubr.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rarrkqlg.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163gzuezuyd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163hywsuegs.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163xcnipduy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163abbvipgy.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163zasizimk.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ovyghpfv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163obdygnfr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163pqhhayjv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163fxnbbnnb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163dhljqsyc.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163eqeuqeiv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ihhexuxu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ndspwidu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qeyztknk.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163vqdvazig.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ysajytft.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163cpiakysk.html

files=$(ls -1)
来源：http://www.xuanzx.com/163bcujyuvi.html

[R38] 管道串联
来源：http://www.xuanzx.com/163kjxhlevt.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163kescywsu.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zogipumq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ylpjdmvc.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163owxazncu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163jvmlufjh.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163brnqhvhg.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163jxluhbse.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xeozkeuv.html

wc -l < a.txt
来源：http://www.sxryk.cn/163erpxvhcp.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zkchsltl.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163scpebakj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163cejumyns.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163azsnznyw.html

[R45] 批量删除
来源：http://www.xuanzx.com/163jfhmyvmh.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163exlcazcq.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nolkqamt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ociwegza.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163aklrgxna.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163filzkayu.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163kvcfoorw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163nzrflmhv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163lsvmxhvh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163wzyizqja.html

[R50] awk 求和
来源：http://www.sxryk.cn/163iljzyrwz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mbgscrhw.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rebqbbdt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163metbeblj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163odkqbcdy.html

wc -l a.txt
来源：http://www.aibaodan.cn/163eswpwjcz.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163rhfgxiee.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163iuoxbfup.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163iwtsscgv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163vdixmwai.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bojkbeja.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163sufsohlr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ncrishzz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jlvjroiy.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163zrhdolsg.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dtvkevsg.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ffwzejxh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163fquyauhs.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zfuzypts.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163sktpuabv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163jtxygjtd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zbxabkkp.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163adxekzxo.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163duxsdmsb.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163voplhfju.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ewkuoxqk.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163khhyjkon.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163peokjqln.html

[R64] 结束进程
来源：http://www.sxryk.cn/163awxujola.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163cnjpzghc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zonvsbig.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163fxfaxkmy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zrixtcab.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163kployztz.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pgtizlyc.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163shanmqbs.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ztvhwaoq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163sgspanlv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163abgjqktq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gcwlwwit.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163zbmyxvjc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163eujfvjvw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ejptdoao.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163xliizciq.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163enfuzztz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163oxqodajk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163tnwnlpum.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163twxdvcqm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163lzuthkdo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163hwjajxby.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gxsbkrru.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mawmhahi.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tejccjje.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xdikuasm.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163qlpaonku.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163dkaxfwpi.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163pqmjrfwp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163fhrufztb.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163rungragi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163uidleraz.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163qsdesurb.html

time ./run.sh
来源：http://www.sxryk.cn/163cphdxwtb.html

================================================================================
来源：http://www.xuanzx.com/163vtrwmqwh.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163dyguogii.html

================================================================================
来源：http://www.sxryk.cn/163qclvjzdb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ulkeyfau.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mvvfauqx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163vtuaxisx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163cgxitwwv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hgntrbxb.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qbtpgwyv.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163zacbgilq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163wujsngha.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163sdxjtpdr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163oyzyvoqz.html

strlen(s)
来源：http://www.sxryk.cn/163kqogxmqr.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163runmdute.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163qpkuqjjq.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vvizdton.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163lbdlzjck.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163svalvyuj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163yyjdsxsw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163apvjserh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163wwotamyv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qilcnmdj.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163eibvgrur.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163wwihpnxx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vecdkjfy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163feipnanj.html

fclose(f);
来源：http://www.sxryk.cn/163ukwqaclq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163qzcyotof.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ytccnhyh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163falnmbpp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dvuzqyex.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163qltslnew.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163xpzrxjby.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163okjaajpv.html

(double) a / b
来源：http://www.xuanzx.com/163zklqlyep.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163tajcrxcy.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jdnyjwmy.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163lnhtvkjp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163rhmjpfxa.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ddxmcszh.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163uvhdiutm.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dkduhwwf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163efufelhv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163umueviex.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bkjzluea.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163gmhhvnzd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163vwplciol.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163voxtpepo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lpjzfank.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qkbtsldk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vtmuqfgk.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163kikbzalo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163vyrerveo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163adcqocll.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163oixtrgbf.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163szaihnwy.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163viovwhre.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163zitxclsq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163sxopzhhi.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ovfqswcs.html

static int counter = 0;
来源：http://www.xuanzx.com/163plzqjtcc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163fwznbouj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163khyhrqsc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163aaozfcko.html

#ifndef X_H
来源：http://www.aibaodan.cn/163auvtcocy.html

#define X_H
来源：http://www.aibaodan.cn/163rihomyke.html

#endif
来源：http://www.xuanzx.com/163oeuqgbxf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gjxghsye.html

#include <iostream>
来源：http://www.sxryk.cn/163tkcaervg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163vsyiellh.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163qpespsqm.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ebhcbuyh.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rvmtdqow.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mqnahlrr.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163gprvufpv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163mypygpsi.html

[S35] C++：map
来源：http://www.xuanzx.com/163vausnhil.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163htfgsukh.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163qhqkzscm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qzuzekdc.html

[S37] C++：set
来源：http://www.xuanzx.com/163bfgliktu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163kzujuvdo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tdnscnxc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163pwxbiste.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163imxjoepj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ebxcehkt.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xjmwmchv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163agvxsnlq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pbynmiax.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163uadbolnx.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pijhpvoi.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163cyoqpupc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ykrkntmz.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hktuaxhn.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163uzacucyu.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163gtrumlum.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pirqcvyn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163forwgjxd.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163nmvalicw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ptkgaobp.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ufkobkir.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163lwvjreov.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163grccbbhr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163eneupcgn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163cracevan.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fatvmdzs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ampszwtj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fnhjyizh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163myqbtjbm.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qrxqengy.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vnwaqrti.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163tkxnkoba.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163szhwmvts.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163dopboskg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163muauyfym.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163wievyxck.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nbtyjflr.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ymaqdlkf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ykwqrdbp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lbdzdnpb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qvyyelbr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ifjotvdo.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163mmyvugim.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wlmhnpjw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163byojayst.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163rezkiflo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xxuewbfe.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163oxmpmjzk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163aljqsagm.html

================================================================================
来源：http://www.aibaodan.cn/163jiaxdfio.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163yoissaly.html

================================================================================
来源：http://www.sxryk.cn/163abzhxmwg.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163mjyilofs.html

println("Hello")
来源：http://www.sxryk.cn/163riathqjj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163xjhbpiag.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163kssbjtnk.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vqgxdlxp.html

"值: $b"
来源：http://www.sxryk.cn/163aaggwayk.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hhmeqpxq.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163dbdkmvju.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qbfrzuxv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163qubylkyp.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163vdptiuco.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ahxpluhs.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163vrqraxwz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163usxdveqs.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163rnlqyplv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163jwdroayo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ujbzqbpl.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163exsmorck.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163gqiwliun.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163osqmjifu.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fzqquvfh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163qxieaxzg.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qamtaxtz.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163uovqrtdr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qftsatfi.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163yjrksvwz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163dsgsckun.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163blljlgsc.html


<!-- 参考信息 -->