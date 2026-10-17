外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163okedohow.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ptsnfqcv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ckchtyln.html

[R27] 算术展开
来源：http://www.sxryk.cn/163knmstrlb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163kqkzuuyw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163czvkygus.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gmkjxsbc.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163nariyrwo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vwzpednh.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rkqwkxga.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163imgzbabu.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mkfqaphy.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163guvihhem.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163seqjnsyc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fkpplkho.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163nzurldrr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bqfleppf.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163qbyzkjev.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yxofsqdz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163haaxcnrh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163wouyohrk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jhakocqx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wkrlrmqd.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ritkdzpw.html

files=$(ls -1)
来源：http://www.xuanzx.com/163semjsucx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163xyogltwl.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163gyizhfph.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ylkqyrxp.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163bmrgsrai.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wpjgsgyy.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163sonyunrx.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163rimcoshe.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163btroheql.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mjhlykuu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vheawmhk.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163eqmwoqvy.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163atzepgss.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163piwncnmf.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dujripwa.html

[R45] 批量删除
来源：http://www.sxryk.cn/163frpzeqbl.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163tqphjxnl.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163sxfuoagn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163fmfayqlv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163oejpstdx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163erxeqbbl.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163dtzpxums.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kvrmtbys.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163iwgkijsy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163cdgpxyde.html

[R50] awk 求和
来源：http://www.sxryk.cn/163wryweotr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163glhjdnrg.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163veqpchpj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163oblqyufs.html

[R52] 统计行数
来源：http://www.sxryk.cn/163xtzlpfgl.html

wc -l a.txt
来源：http://www.sxryk.cn/163ucetinre.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163srjqjmmz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ihkurnss.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dbypbawq.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163bxoetbnw.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163aeisuvoz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163cgyjgokp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163hzynwbpx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163smittypq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163efqidtuc.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163yobnlmfu.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163sdvhysbk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163hvurkgku.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163pmbrpauj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hcraooan.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zbsbketq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dxtirzei.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ckeuobuu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163nymrphyz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163yaosfjzj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163dzeezwce.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163oppuifkt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163zjaldvae.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gnswfqou.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ctageqop.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mlgzstig.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bznzafzm.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ftzvzbqr.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xpfnlfsz.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163idapcsca.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jnbasyol.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163inxxkrzj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163czombuow.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wycfqmwq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ejppvapu.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163udtmyova.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163psntcjuf.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163edpvieez.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163bbotnvwp.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163fxgjpnva.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163aqgzdbqt.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nknhozgm.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163mjdajczi.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163dwbmaypl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163zsdwuwbd.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163frtkrxsg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163bqetpymg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163htfthryq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wtochpgt.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163nczjorwk.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jhlwdxzz.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163qxnxomzh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163sughrogn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163edpykdqu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pgbagquv.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163oxzwnoma.html

time ./run.sh
来源：http://www.sxryk.cn/163xjexkcmq.html

================================================================================
来源：http://www.sxryk.cn/163oxyvpwrq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163pudaccet.html

================================================================================
来源：http://www.sxryk.cn/163ttmpzcdc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163oeurzvhh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163eqsayqdz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163uacsqrwm.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163paejefqi.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ijuedqze.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rdswbtrl.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163kjlkvfwb.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ovhrdvop.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163skswphjt.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jwshtpoy.html

strlen(s)
来源：http://www.sxryk.cn/163livdiibj.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163zppikjxu.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163whnbwxdx.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mpvyhwqm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jfrzumwf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163urwtttgv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163fqzgaqhi.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cekmbrmv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163irbvqbxx.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mwlcjliq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163vszblgiw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dbvxkjmb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163yyvvfaqq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vgvlbvpf.html

fclose(f);
来源：http://www.xuanzx.com/163wjbaohho.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ntycciss.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163dqhlfcwv.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163uctgxxdf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163gtrgcpcm.html

[S14] C：枚举
来源：http://www.xuanzx.com/163dngybkaf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ddwpyxhx.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xsmxhrgc.html

(double) a / b
来源：http://www.aibaodan.cn/163wgnprkbz.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163puchzwjp.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163wvkerkck.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ufkssscg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cusnxoyz.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163mflfosmp.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mkyldfvh.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163jaqjcyus.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163eqdxbcok.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ptctcwgz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gjslvvxz.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163pwyopjcy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jasnhtcu.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163omyiojan.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jtgyoxbd.html

[S23] C：随机数
来源：http://www.xuanzx.com/163llpygvwz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163xxlebuwy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ujhswnmo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163xjjvbzzs.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163jcarivle.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163uvjjfwni.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163bbxocbap.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163agpldmmv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163hfzriqtf.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lbarshcy.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163nsrjrddh.html

static int counter = 0;
来源：http://www.xuanzx.com/163mscmycch.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163gntckzhu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dklrmuiv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gfnbjbhr.html

#ifndef X_H
来源：http://www.xuanzx.com/163bfvsxmqk.html

#define X_H
来源：http://www.sxryk.cn/163xxqzvblt.html

#endif
来源：http://www.sxryk.cn/163rkrzwksz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cckcfjyv.html

#include <iostream>
来源：http://www.xuanzx.com/163hszsdqeh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163hrjpirlv.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vcsmjduv.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163zqilmhep.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163xteswalj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hupltwqw.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ixuifvvm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163tzqvhtpu.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lvsjroae.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qmazckhs.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ldtvqyke.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nmqftmna.html

[S37] C++：set
来源：http://www.aibaodan.cn/163euamxxfd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ekjlytcb.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ygexaozb.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163bjtksakw.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ipovlrea.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163qjtmjddb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163fdghfebo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qczdfybe.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pkinikci.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ftczglym.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qfmapwde.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163rqigmlhy.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pbwgcuap.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163acqacnti.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163upelmons.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163avflphif.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163lxapcbma.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zghllnjh.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xwdazbrl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163custyqxj.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xsettjia.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163iruuqnog.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ubpodkyv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vzznmhvh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ezfhajxh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163aupacbbm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ebbvplpa.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xtabmwhv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163oimtxwrh.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163atjmahhb.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163miwfuvwc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163yndbvhac.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zjyiazyq.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wjxloavp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163vkwlidhs.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163bbcgerzs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163wcdnxmrb.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163dnctyrpt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hwywzbei.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wykwyixf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163kwtxzpue.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bgawixip.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163zmgumdpv.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163loizvuci.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ruatwcov.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xnhntjjn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163sdtdvjhu.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wqdudsrn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163dibdaaah.html

================================================================================
来源：http://www.aibaodan.cn/163uvflaxtk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tofbhuou.html

================================================================================
来源：http://www.sxryk.cn/163lxoioxmp.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163cnbpvxym.html

println("Hello")
来源：http://www.sxryk.cn/163voefqbps.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ewusgeoc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163auypdell.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163agzgnirw.html

"值: $b"
来源：http://www.xuanzx.com/163rdqrkjpn.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163agubhbeu.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qbpwckrb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163cheixsaf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163waweaeku.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163oicdkdgh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163msmdegyy.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rsmhbncf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ktaybrbm.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163topsgtxh.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163mvjgtsnl.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163illdsqhh.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163srsiadzy.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163sdlmibiy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ycnjrzdf.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kmolilyu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163jnjrhcmf.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163fcmjqoso.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163fxzicefp.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ewmxwihf.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163eqjlbztr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163iekbiuyf.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ukwijokd.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163gbrebmoq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ipwiplev.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163hoszujec.html

print("Hello")
来源：http://www.aibaodan.cn/163muesiwbq.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jaxppsbc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163drmstrmp.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163sfccietx.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ngxeoogp.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163fduvoorx.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163dpjtpjts.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ovqsruhd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tpnjovxd.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163igpwenlu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xrigrgtt.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163sfoombur.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163xywnbepl.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163abuywcum.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bciquole.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163azpdebhs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163mgfnjlnm.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163yctyzwcs.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163bsnfiwyv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jkgnuvgs.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163iheldhyb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163tndaiqxe.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163psrbzayp.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163anqiqntb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163hibttbmo.html


<!-- 参考信息 -->