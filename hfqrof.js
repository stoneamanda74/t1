外链999!wailian999！

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163izvaolzn.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tqebbasy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163bvfhcuuq.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mjpnxooa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jwecdvlr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163payxvmyo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rsaienfy.html

[R19] 数组长度
来源：http://www.xuanzx.com/163cnlstwha.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163pywqzpuf.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jjvsxrka.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163jnunthxs.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163knexzlbj.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zyvxemej.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fnnogcpt.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163aiuovneq.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163zdusuivd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ufbmswwc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hfsteftx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163oizvnvgl.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163lqiqkuyn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163bmjnuibg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zpexjgvq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163emgdwdwm.html

[R27] 算术展开
来源：http://www.xuanzx.com/163mqrczvio.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163aalmdegh.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163odeztiwo.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rfshrpza.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qwkxzdib.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yhejzmou.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163tizvqexo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zlhmxemm.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163vrkdhsxt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163asmfrsas.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ehktqvvg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163qodmnvmc.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163nmlehiyz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163cqzngsyf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163imrdhpdx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pewayufu.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163mnbxmndi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163uhlgznbm.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163zbtjcemr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163cpgdhoht.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163wfkfqbbd.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gcjgodxj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gxjflnkv.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163twhhxbjg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jhylpgvc.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163nqxecqao.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163hpicqrai.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163itzupybx.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163shvcetlq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163knszdhmw.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xwhrtbhw.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163lkblmqwh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163mqgrxbez.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163tywnbdom.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ewnhxmdw.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163lvaogumx.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qzdrnfyq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dwulyptu.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163uxszgquj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vswberta.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163nsszfpma.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163vepabqmz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163obdcqryd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qsbsepem.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rlvpqvdo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gqmtojhi.html

[R50] awk 求和
来源：http://www.xuanzx.com/163obwctupg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163actlnkao.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kznqkanb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163qrtgblru.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ilmbeoko.html

wc -l a.txt
来源：http://www.xuanzx.com/163lypnyocl.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163orlbwjqn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163uhdzywqv.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163uluisbdf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163iaisrmoz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163fyiikmgh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163tedmrgvb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163sahmmlfc.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163bokchppw.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163xhrjvxnx.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163vlyblbdn.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163zlljwbhe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163bbehcyth.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163mjqjeerl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jtfmnunh.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163cygmjhdw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163newuonhx.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163srhxxlty.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163revwpksf.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163otmqjrml.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rqwfwcoz.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163bcjrbtkg.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163yurqdilz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163nplfzzvf.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163baplsotk.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163igdlbhyv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163yrzjeuum.html

[R66] 定时任务
来源：http://www.sxryk.cn/163sxmxpmdi.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163dkqcnppg.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163hbywrgsh.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ydwvufre.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163viuehcko.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163zldjgggh.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163kueixicr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ewpkhsgk.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ahldyxhz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163dnaaxxhx.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163nclltvqe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163tsxglrag.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163yrebrfak.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163flpgdmtz.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163gnwunsmb.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mppmjmqe.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rpwvbxwk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163gmejmvcc.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163dbcjkepu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wmluuloq.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163nkkvftle.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hllprfli.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163luytmjme.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163whmiddbg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zwcgcanz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163cnjdghiy.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163uscwaezc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163fmwvkwfy.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163lqdtolgw.html

time ./run.sh
来源：http://www.aibaodan.cn/163pgaorrml.html

================================================================================
来源：http://www.xuanzx.com/163qvzsqnxp.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163itnlgcnn.html

================================================================================
来源：http://www.xuanzx.com/163rnihbpot.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xrwzbtxm.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163uqrjzget.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163awqiovua.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cluosekw.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163acgmakbm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163gqumpbrt.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vukbelkl.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cwtpnxvx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dindwhqv.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vhzvybap.html

strlen(s)
来源：http://www.sxryk.cn/163vnekjzum.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163otyzlwwg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163qzdcclef.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163brpqfkwx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mdqrpchy.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163aorfyzmd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ebnjjtcs.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zokfzpbq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mldwimby.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163znsdfmjo.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163wpubusdt.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jieoxfde.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163lkhtburb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163mcpziome.html

fclose(f);
来源：http://www.xuanzx.com/163ltngfnob.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ywbuemil.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163eafostvf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163hasvfked.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vxwahlll.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jiwyzpcu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pgczrqhg.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ykngxknk.html

(double) a / b
来源：http://www.xuanzx.com/163jixliaro.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163rqdxerqo.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163tzqccmfz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163skazyecb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163nyepkedr.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163crbzcvgs.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ywzgdrfy.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hthnnacy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163giwkochj.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wkjweswm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163eltnrfwu.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vreudbhb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hewgavbg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163jgkjbsmy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jgpywtkd.html

[S23] C：随机数
来源：http://www.xuanzx.com/163aanmfdwa.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163zfahxjxh.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qosmmmvp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163gmhfpgyk.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163btycrsfw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163euyodnem.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163zyduffxt.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163mjmcmlmb.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wgcdvauk.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nowkflxo.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kdmgmkva.html

static int counter = 0;
来源：http://www.sxryk.cn/163igshdxkx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163uxwgsrpe.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163bcbpqcsk.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163lvcrebkf.html

#ifndef X_H
来源：http://www.sxryk.cn/163eqxuqchl.html

#define X_H
来源：http://www.aibaodan.cn/163ytkclxwv.html

#endif
来源：http://www.xuanzx.com/163gmnfgtro.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ikeoqogn.html

#include <iostream>
来源：http://www.xuanzx.com/163opaajeyp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163qabuzshc.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163sbqofpmn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163neykhrgg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163fljvrlif.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163boecsxrs.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ujnwnctf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gwmnvzmo.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nbnhidqn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dnnfmvrt.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rilizfuj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dlbsiszk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163mfanxkfd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bsruwrsk.html

[S38] C++：排序
来源：http://www.xuanzx.com/163podgjhtx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163gxlzmdzb.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163dvonzsad.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bhsqwusb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ckjgfgov.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wskyrsow.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mfjmmooz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163unouihnl.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163xqaogzjw.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163banedtlx.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163sjmuxdog.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qoyamhqq.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163hivsouol.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ujftxxlj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fsxtyizh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vgzcqzwb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163kuijoysi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qfiszxmh.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wtvbjrny.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kkeajzpx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163grnbgpdz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163eccrudkx.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163kugouaeg.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163xbuaerlq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163izmwpdsi.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163yhdunoxv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163eecxzkik.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163yjpfgtyd.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163uurpukkc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163zucrokqy.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163rymvzurf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163hkzkablq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163gmfvzrfy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163dkthpvcm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ecysbqjn.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hioeickq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163elkyjdbt.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vxwncnph.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bobixelp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lciztesi.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ucsrhjxf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163aznzggax.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163moutbnem.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lcougihg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163cqawqbnt.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163xzoytulq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163turqwwzx.html

================================================================================
来源：http://www.xuanzx.com/163avmbevyr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xbobugro.html

================================================================================
来源：http://www.sxryk.cn/163zdpnfszq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163hvigshwp.html

println("Hello")
来源：http://www.sxryk.cn/163vfyolbmy.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163yifxsqth.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163bxoyryzm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163yjwjeavf.html

"值: $b"
来源：http://www.aibaodan.cn/163fqekmgrc.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163dtwycpar.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163hiykuqnx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ypaonehx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163oeurxymj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mscpormm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163etihiuex.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bcwieldb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163yummpmvp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163cqrrwhyn.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163czziywxm.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163umayrjnu.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163djqtgplq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163urlzwkgu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ftkqvsrf.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ccgpcinj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163fmtqupjq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qobkiydr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163xdmsohsu.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163lijazowi.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rfgpjajb.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163eimtmwdb.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ghdytkba.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pqcoawpg.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163vwynarci.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ofziujtq.html

print("Hello")
来源：http://www.aibaodan.cn/163brghyavl.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163oqblfouh.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163wojppcqd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ejiyewyq.html

"值: \(b)"
来源：http://www.sxryk.cn/163crqildck.html


<!-- 参考信息 -->