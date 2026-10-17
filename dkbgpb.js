外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163eakdmrjf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nfqymloo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163omscaerm.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ndyffrjo.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163tlqboasq.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jjsctkop.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163eneakxts.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163heuxjwze.html

echo "${#s}"
来源：http://www.aibaodan.cn/163eubhxveu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163hgnvtlag.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163qombjngy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163kimykoxm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hsiiuzkq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163yhtidzfo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163pzgpfovd.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163tbfxixtt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163toznpabw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163njjmoupr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163sfdtflcn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fweftuvj.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163fprbnjmg.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163iptqokfo.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ztxtwwzs.html

[R29] 定义函数
来源：http://www.sxryk.cn/163gobdrkos.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163amzndytv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163aowaiqeh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ziwnhbwr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rydkzjsq.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163eywgrtbp.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fuwwmvgl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163yasclttr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zlwyuhgj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163afzqaxzg.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163lcjmiekj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163sgyrjsvi.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163czwhfsuj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163fywzdagm.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gjgtyhra.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163wbdagemc.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mkddyxwy.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qodvqjls.html

[R38] 管道串联
来源：http://www.xuanzx.com/163wdznldid.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163gqsusvvb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ysekafdg.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jbryxlfs.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ryfozlnh.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163fwcadabs.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ghaetkqs.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163lscydqbp.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kiavjcbl.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dvkihvvp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163watpwgoe.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163yuzoncnt.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163dtenuptp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163vwtkryto.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mqayefco.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xodgxejo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163fzdwbaqx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ewfvgerf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163rrclsvpe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163epacjyyv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163bebdalyv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163wtcctlbp.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163assnzlkg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ntzvygnq.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163mmieebmz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163wkyjmilx.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163elpmnidd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kwrqjshh.html

[R52] 统计行数
来源：http://www.xuanzx.com/163nrglvvlf.html

wc -l a.txt
来源：http://www.aibaodan.cn/163vxvoznod.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yldoydzn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163kcpmnlyz.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163psramkse.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163utokwwfm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163aulnyuxm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nsuciqdr.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163gkmmopme.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163yfzlgqly.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163brejhszw.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163yxbwznsh.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qwvnnyqr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ashqdxhf.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163jxwiitjo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163syygjzht.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163maaivywv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163diowomfx.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163lgeegkxb.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163lyapjbnq.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163igoqzapt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xziffgid.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163prkddqtc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xklhdvot.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ippiucgi.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163scxuxlsv.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163cjbdqyzi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ojnxlbyx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ruxbfvpz.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163nwrifoxw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163jnhiohss.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163uvnxtyql.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163owegseza.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163eiemrlzr.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163iuqzghnq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gwyxbktx.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ijmiuuyq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163smszwrgd.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163yeewkgoy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ypdabmkc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163annzdzlu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163wevwaljv.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kxlheimy.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lpjopvyy.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163frwfuxdr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163abydlvtl.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163reiqlgzf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wtumqdmq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163buhxkrlr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wrxecuck.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163iakmnakn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163aonsglqb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jgaitjkj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wslkbfwn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163mgwsyrzf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jqewmqrf.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163tczhezso.html

time ./run.sh
来源：http://www.sxryk.cn/163jsslkmeb.html

================================================================================
来源：http://www.xuanzx.com/163bdtcgsmy.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163lvjowvyn.html

================================================================================
来源：http://www.sxryk.cn/163ngnykblq.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vqhfemww.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163yhwgigvp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gwuewamb.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163vbudbmry.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ubvwehto.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163nzoyvbzo.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ooexsgjl.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hkuhksrw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jhzwfesi.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xnqhluic.html

strlen(s)
来源：http://www.sxryk.cn/163tgarqsqh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dxlqvpwo.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163yrcothsw.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mrhqtlch.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vfbalbbx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163rpkawmqq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163nsvjrxtb.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163yxsmljaz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163iirqcjzd.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163eseyhfdl.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163xjwjwzyy.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163sdkapqos.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fuucdyba.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jyfslkdv.html

fclose(f);
来源：http://www.xuanzx.com/163hkubuoja.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bnumscyl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163aitfrxfk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163movneudk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163hdjqmrel.html

[S14] C：枚举
来源：http://www.sxryk.cn/163xzpjubxq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163hukoxgrh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163bbwyeyui.html

(double) a / b
来源：http://www.aibaodan.cn/163njbaecfs.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163duisbses.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163uxjhordr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ibnixhcu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163foavglsc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163remacjia.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gwmghhon.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qpwgentv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163sfqxmfvq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163kaoxcuhe.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hgiidoeu.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163fxcwlcou.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vhnqbiat.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163aeniwkqv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163kgpetcyl.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bmeqjyfb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hcdralbg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ccmgwngq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vaxkihcw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163cxfeakfg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163doercjvb.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163yoauxkfv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163dgegybzi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163bcbylakq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163pqqlenpn.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163pelodxgg.html

static int counter = 0;
来源：http://www.xuanzx.com/163zrfuwgwi.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163xwljnrez.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163gocqzvvr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163pqmbitzb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163uusphzwe.html

#define X_H
来源：http://www.xuanzx.com/163opqbadhx.html

#endif
来源：http://www.sxryk.cn/163wdynvlcq.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zygalsul.html

#include <iostream>
来源：http://www.sxryk.cn/163ceifowbs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ipakpkah.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163sgtnvnvf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163nwxknanb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163temaapui.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163qzgisgln.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fxrdukup.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163luydosup.html

[S35] C++：map
来源：http://www.xuanzx.com/163ececubqz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yazqgjfk.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163cbpyzgot.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163igumbxqw.html

[S37] C++：set
来源：http://www.aibaodan.cn/163kpayhehy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163jmrxhmgz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xlwcsifi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rfeytnvc.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ojwhzxld.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163nzkuulva.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163vlgzyuhv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hfiqqrlo.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163rzavhoqu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ushlozpx.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163gjttmnwp.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fsgvukvj.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163dbwksadw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wkwatybw.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163iktqkuyo.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wtgukenu.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gttidckc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rdovnqww.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163waxmjbqb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zbsitevc.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163dsnyowsh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163acorjwkl.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qaspjhva.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163svevygfy.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163dikisxyg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163sdxdhvxe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163pktiezqy.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163oghlgelq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163nwotbofv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163yupldkoh.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163rpacvbcv.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163mgstodjl.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163plggknyl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163kcxtqbie.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xtekjwwy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163taopayfc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163valsrjsu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163sozbkjqq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163skdzngqh.html

[S56] C++：optional
来源：http://www.xuanzx.com/163geqbawjz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163dkmidwun.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163awozkrvi.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163lbjnkrld.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pzvpnkrh.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163oizmnwsj.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163agsmqosy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ojbtuvrk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ntlxgkms.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163cqmzcfoh.html

================================================================================
来源：http://www.sxryk.cn/163clxjgfja.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163utmnkstt.html

================================================================================
来源：http://www.sxryk.cn/163uzdntfxs.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jgggvpui.html

println("Hello")
来源：http://www.xuanzx.com/163vqmskrqd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163esajywmy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jawxvjid.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jqjttwsj.html

"值: $b"
来源：http://www.xuanzx.com/163pwdsuzyp.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lhghhith.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ljiqlaxn.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163nykignfk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163akmiliqn.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ayxcukam.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nmuvrtue.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ycpgphmk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163fgmduuhf.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ykzjofcg.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ugrldrtw.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163joutrkvt.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163tdgkwxxc.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163otnsjpdg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dcsihdaa.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163evmitevt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fvsashor.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163sfkmtmzt.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163vqjwofwo.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ajeigfyb.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163mpjhzvor.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163lepjcolp.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xbdzzlaa.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ivgfjonh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dyhxfkgj.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163irxbhyot.html

print("Hello")
来源：http://www.sxryk.cn/163bpwsudok.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hcgwqtwz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ciupraib.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163sdkxlxtd.html

"值: \(b)"
来源：http://www.sxryk.cn/163xuizimqz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bjeazvmh.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163bpivlayl.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163fsemencj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163wyxrexkn.html


<!-- 参考信息 -->