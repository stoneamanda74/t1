外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163rimqxuzo.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163hmtbflkr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163agayvdgr.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163yjkuzinq.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ovilcpte.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163zxktsohn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163uoxkxbwv.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dwgppgqp.html

echo "${#s}"
来源：http://www.xuanzx.com/163rynyyqov.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ouicmfpf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hzfpttfs.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163jhdmjmfo.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163upytsqwv.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pruwpttz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163oodwwizn.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163odzekqjh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163aqptdvug.html

[R26] 命令替换
来源：http://www.xuanzx.com/163jlmhqdyi.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163dghorpfz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163nmaggqjh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ovamdjpb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mmilxqce.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163yapaispa.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lcdyblwe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dkwmpdem.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163wmruuusq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163cqpcddgd.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163kvdusstd.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xmgztqay.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ihpvroai.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wfmvsked.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163allevopr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163vgoaplgp.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163yikdcdjp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gugrqzya.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163efyuelre.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ddexivej.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163icfpykao.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163oeoujzao.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vmhppuca.html

files=$(ls -1)
来源：http://www.sxryk.cn/163rgpzyqak.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bocoistl.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163awvehgok.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163fizcoenp.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163forttobq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163oesareex.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163mfpnifol.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163jndksbgr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163gghhklkw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163rhvvovia.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fvqetblq.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163yrjuwmhy.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163tmnumevf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163kaudzugj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163wdwepard.html

[R45] 批量删除
来源：http://www.xuanzx.com/163eaznqnjp.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xyyoapzu.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qpltlezg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163hnzxxrfe.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163zjqqstvn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163zgzoijvo.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fdlloewa.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vvllyswe.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bnpajakf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163wllwhxvk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163kdpnlhdw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xgumqfag.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163tdzaylsg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ihscccgv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163llfkufpe.html

wc -l a.txt
来源：http://www.sxryk.cn/163djsybwtx.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163kraeqrzb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163wrjvtysg.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163uepkyajl.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zppvrxzr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163qogowpdk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ezjuklvu.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163zyiuhfqx.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163stqsodzy.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jrytmocd.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vialoobi.html

[R58] 下载文件
来源：http://www.xuanzx.com/163goshacrd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wcfdrlph.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163dwqbxzqy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163jtayedxf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163rkdakcmi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163bcgliwmp.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vuaqdhlf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163uwvnglfd.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163huwnydtg.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163pdukpmqt.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163msrqzzji.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163khwvonfk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163rwegzhtu.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qejxuvbh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163roseiqny.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163yqhxvcmt.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163btaqpqix.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hreiqhhw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jeshqlge.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163fwajdtqq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163xhcokorg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163annlscco.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wupkhtcp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ebjyckvh.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163mbyhukxy.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163itbkhdaf.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pziqgscx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163tughmvzh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163repkhpbb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wfoguoky.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rlzsdsfk.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gvgpvkgx.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163yandzlfm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163pnuglfcy.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ngtmmknn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163hlsajong.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163pdkzqrwk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163uabzhivl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163wcyswhsz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163znuhugfi.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163iezarcbu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163hggaifqa.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163giykqiib.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pwabezno.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163jvtnfdgo.html

time ./run.sh
来源：http://www.aibaodan.cn/163zcqcntfn.html

================================================================================
来源：http://www.aibaodan.cn/163agsiifsy.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163lsadqcmt.html

================================================================================
来源：http://www.aibaodan.cn/163lfofnukw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163elzgiqew.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hnhoafuj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163aiippndq.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qkubdoqy.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163qmucbiok.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163imjxxmsm.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ybsjqsoo.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163milcqens.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163gaxcrdni.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163chfplgkv.html

strlen(s)
来源：http://www.xuanzx.com/163umuqwcqt.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163hvcvlbuz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163rsixhtpg.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zsuvpuiz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dcjuaaxa.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163zishpems.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163wyzexkja.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163fknglxau.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ieynceep.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vbinjyrp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tikklkgc.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163llqaaxwl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163iujiixho.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wcmeilmb.html

fclose(f);
来源：http://www.sxryk.cn/163kikwtivg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163lgmfdduu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163bfhiiuno.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ffyslcgm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kzmgzspf.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ipargkfx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vojrglma.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163smapindu.html

(double) a / b
来源：http://www.xuanzx.com/163knqhrvtf.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ysmqyglb.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163nmzvvinm.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fncbtoin.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rxuakthf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xpowzyxe.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ltaybcob.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163sxtljfds.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hnxxiwpu.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163azoldihz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163akrtknfe.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163adyavums.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163pravkkoe.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qyfdbziw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163lmbtloer.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vvrzjmpr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zuefuygt.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ankzbwgn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163dwoookqe.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ghvurcwk.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163lhpnbmxk.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ljkeniyr.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xdtxxcvj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163bvolptub.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kvlnwnro.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163uceyvgmb.html

static int counter = 0;
来源：http://www.xuanzx.com/163zdslrxsz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163nfyzmvaw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163eopunome.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163mjddqacb.html

#ifndef X_H
来源：http://www.xuanzx.com/163ltgecfry.html

#define X_H
来源：http://www.xuanzx.com/163ivydgbfh.html

#endif
来源：http://www.xuanzx.com/163kdrdfeih.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mcacjhdf.html

#include <iostream>
来源：http://www.aibaodan.cn/163xgtsfgfn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163pmkshmzu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ascupfja.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ctrowssk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mfkxxvjo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163vxkzfmhh.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163kvqxsjtt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163lahtwpkk.html

[S35] C++：map
来源：http://www.sxryk.cn/163luxlabfr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qzpisinz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ahueolwn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163btaxnysv.html

[S37] C++：set
来源：http://www.sxryk.cn/163txgimxeo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kvgpseqo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163aiihpwdi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163cyzxsifq.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hmvhaglh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vfyteldc.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pbamxnml.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163dsdpqsvw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163xnjsmiof.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rtbnnqhq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zkumdleo.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wdkntnqh.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jtitqmqq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ilwtploi.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163lprzawgz.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fdkbvbue.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ppkgpzba.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yzvcusqa.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ickmyquj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ufvmkddf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ngmoljye.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163xowdgwzh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163phszvvew.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163xzjapfzf.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163fgxwjfmw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163hwllgjli.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wigouoal.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ycqiuqxj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ysruoudb.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rrqzhzsw.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163jttjruiy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163oxccqvgw.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cabkiqhg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163gawwizjk.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163agbrmhqm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rakyzwog.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xrbbuazn.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163amsfjscz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ytankjgz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163qdgzsysq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163koysdwpv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ropzhyeu.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ivwpofod.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163gkktfmiw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163qenmeooj.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163mrrsbuid.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ozdkbvzx.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ynbffwtq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163vvegdcvx.html

================================================================================
来源：http://www.sxryk.cn/163efdxmeiu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163udjsnspa.html

================================================================================
来源：http://www.xuanzx.com/163itixbzuo.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163eooynlxg.html

println("Hello")
来源：http://www.sxryk.cn/163wzifsgai.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163curwtphs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163gcdcknrs.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163psxxxgho.html

"值: $b"
来源：http://www.xuanzx.com/163mshjsdtv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163nejvyvcz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mzklsfqd.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163sagoafmj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bshmwtaq.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163afbsnqol.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kjrueaar.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163grdifmtd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163abkeeyxk.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vhzsacrq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163lwvodgps.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wvgnfctl.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ermodcou.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163dvoubnyy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ikviejhz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163jmbwmaxh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tsiytxxf.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163rekeixlo.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163egofelfo.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lodxqjpe.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163mouudwpe.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163iytypqmu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163kskpszgw.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163lxaogvau.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163lfnhsqdv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163yzzftbre.html

print("Hello")
来源：http://www.xuanzx.com/163irgsywtk.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ffzvrueg.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vfaxrcpz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163lxslendm.html

"值: \(b)"
来源：http://www.xuanzx.com/163zyhvygcw.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163rmiqfjnq.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ynlvczsc.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163pvvxaxda.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163duwkcann.html


<!-- 参考信息 -->