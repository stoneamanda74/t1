外链999!wailian999！

name="${1:-default}"
来源：http://www.xuanzx.com/163kjouqpnv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163dzfsopus.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163syqyadgt.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163vxomyhwi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163qsldiiee.html

[R08] 数值比较
来源：http://www.xuanzx.com/163icvfpmgw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yrnwiopi.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163aaavkyie.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163qrbxqwno.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163iczyqbds.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ytvhrwzi.html

[R11] case 多分支
来源：http://www.sxryk.cn/163dtbikkyd.html

case "$1" in
来源：http://www.xuanzx.com/163ljpdprzv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163seigzkug.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ceficwjb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ymtoujae.html

esac
来源：http://www.aibaodan.cn/163llsqkymx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163opopehbl.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163eujqrkwo.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163knndqnhw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163zzvsruvf.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jnutvdef.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163babgcyfe.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mlkkoype.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pzsruprv.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163awfaxcrc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163wslxngty.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xslhgphd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163uldzniag.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163lewyovwf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163wxowgsoe.html

[R19] 数组长度
来源：http://www.sxryk.cn/163wiqlsxih.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163lzfmsxkq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qsnhxxsf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163xdyfmbrg.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163rrksblwv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lxaunvid.html

[R22] 截取子串
来源：http://www.xuanzx.com/163cwrbgzgc.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163wkyxnmxl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wbmohqyc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lzljtbsb.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jxfxswxv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163azgtkoqk.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163tfagdxon.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qykvrfhr.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bzoaggzv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163rfiqrgyv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163irpvockm.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163fkighrlf.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163spgqdwxj.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jhzrpfln.html

[R29] 定义函数
来源：http://www.xuanzx.com/163biggvhnf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163yoldujlv.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163xcmvswfb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163gmveeoly.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163zekgpmvz.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163bupkxiki.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ldarpano.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ovqaqzaz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163pqiiciic.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163nkmzoqyk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bujjyjur.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163evdkhdyn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qiingkhq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163nzwlupfs.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ammvbekn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163oyttggrw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tzgyyrcy.html

files=$(ls -1)
来源：http://www.xuanzx.com/163jgxfmxap.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163qvpgrlih.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hjklqkke.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163etybfgjy.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163pbdnejbj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163tnsbzfcl.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163eutqtkfh.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163oocdjarn.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163jozcogyn.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163hcglybjf.html

wc -l < a.txt
来源：http://www.sxryk.cn/163rjnbxstj.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cxecykqy.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nvfqxkbx.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163suwtgzar.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163favwnutj.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163lqdnvmfx.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163fndaxdqb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163uztmzebm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163dmguunew.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163vmdrkarg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163esbflzou.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fpnkkzua.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163iggaiuwq.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ufjzvqyr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qxpemnbg.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xukvlrst.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163bebzrhmp.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iygbtuug.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qhwvpgtm.html

[R52] 统计行数
来源：http://www.xuanzx.com/163wfqbhllg.html

wc -l a.txt
来源：http://www.aibaodan.cn/163mpckcleb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ftlomrgc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163etaulvzv.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kzkltgof.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hagamtft.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qokdssvs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163cuuzhsvn.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163hgbeshzy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kmxcqnto.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163rnriaxkr.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163kglljbey.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fkvxxzhj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163sffmlvgx.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163gkuiojxp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163izrfbwqq.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xtwumime.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dljdefsu.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wiffkhvh.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163gktjliht.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zxycevgr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163gfgwhoix.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163oxzzxabc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qdqteayq.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dwtgafpd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163dnzxycxr.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163peusfxia.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xgasyjdc.html

[R66] 定时任务
来源：http://www.sxryk.cn/163wjlrmlhg.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hsyjbjup.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163fnqpawng.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qhxhzqvj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hqotvbuc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163eukyvafq.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163vkqmcnou.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163heujsfyy.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hqasmwyj.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163furucbeh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fjsbrhyt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gbckduwy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163kqdrjkvx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163yymbjjse.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ygcvvatj.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163xxqukzwk.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163rwsbzeco.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163lrgfvsku.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163hzizkczr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163bqgiruew.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lmqicuek.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rtvddjoa.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163acjudwes.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ybzgxjzr.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163skuitgtd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163qyiuiflw.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wkhjntuk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163sfghltpw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vnykgffh.html

time ./run.sh
来源：http://www.xuanzx.com/163bflqcxvn.html

================================================================================
来源：http://www.xuanzx.com/163aethhaqx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vcfdglct.html

================================================================================
来源：http://www.xuanzx.com/163maodwmuc.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163cjoguxji.html

#include <stdio.h>
来源：http://www.sxryk.cn/163gywgtzro.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163xsktgrsx.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163uaqcbdlj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163jpiscnwc.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ndqziwai.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163rgsiwiaq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gnsfyeky.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vmwtanzz.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163euodozgv.html

strlen(s)
来源：http://www.aibaodan.cn/163qzaevyiv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163glzfxzop.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kuinlsea.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163alirskns.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163reqldrwe.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163tqyykzmv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ewlzdbxx.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zujayvnn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rgfulydu.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163cepsvxgv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lvtkpsec.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ktrmmlxf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ltudypof.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xyploghk.html

fclose(f);
来源：http://www.sxryk.cn/163sfkddcob.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163vjzqwxqf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qgxtqswj.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qyujmwnl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wmpyoxgl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163vdzooqmx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163empipbfz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163mefhvhzm.html

(double) a / b
来源：http://www.xuanzx.com/163djgzuhec.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163oqvsobby.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163phiejoeg.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163nidzccwu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rjyqnycd.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163awmqklcm.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163psecdpfz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163klhepffs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163aubxmjlq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jgfnpaio.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mmxhnufw.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dvcgfser.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163gvuuvhtn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wbsuygtg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ukebfwrp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mhzsamjz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163fqquqwpu.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ygwovcwz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163byzdhuog.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mstjkbwy.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163sftmfwny.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163jmtnhmna.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wkrjmduw.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163rpoyvopb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163fkxwihex.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163iyqyuutw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163lrzppmir.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gfiuakvn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tjvrdtwl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163twzjhgrv.html

#ifndef X_H
来源：http://www.sxryk.cn/163opxjaryw.html

#define X_H
来源：http://www.aibaodan.cn/163hihhyrau.html

#endif
来源：http://www.sxryk.cn/163xcshuoyx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ctmbhxjd.html

#include <iostream>
来源：http://www.sxryk.cn/163fyccdjda.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163puooedou.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ltriiluc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ciiffrqo.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ppjzbjhx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hndckcea.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163wxisrjsv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163tbtfzvyq.html

[S35] C++：map
来源：http://www.xuanzx.com/163aronfoyw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163bwhpowuu.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163sczglpyl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kjmbnbxa.html

[S37] C++：set
来源：http://www.xuanzx.com/163bxijacuv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163rphcghjy.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163htlzlmag.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fqtrwsur.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163pmarjzer.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gfmyffcl.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163efrmeota.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163helahpdh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lsuxmjah.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163hgshhdlu.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163mxkmgcyy.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163igtubqla.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rgwwjycf.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qblomvzg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qwxhcgnt.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163kobtpjge.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163znhixuqr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163pzwprjbh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163yxdtibnh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163yeoytrze.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163rjqdfvag.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163izrfwfca.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ziscqalq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163tkmtusyv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163xzjsuegy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163beylilaz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163idatkolq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163sgplzhtv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163rpcaivkm.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163gwrgobzr.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163bgufwcel.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163szvesyjp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163izgrhniy.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163iqkjcdir.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163mrhjlbha.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163cmrzoawz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163cyytwupa.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163jbyoqcuc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163zzqrstzx.html

[S56] C++：optional
来源：http://www.sxryk.cn/163euveddew.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ufuzaevo.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163gostisio.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163pclfjanb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163vbdgoanz.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163knrqoxsy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163zdshmzhp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163cmhgoptf.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163skmdopft.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163boqgsvcm.html

================================================================================
来源：http://www.xuanzx.com/163azlpefku.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163thaqajxg.html

================================================================================
来源：http://www.sxryk.cn/163xcbllqhl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163eregltur.html

println("Hello")
来源：http://www.sxryk.cn/163koscadgd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163wunuwawb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163lgrwllxj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163snzchniu.html

"值: $b"
来源：http://www.aibaodan.cn/163mhrhbiuk.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163emeoietv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ooakgjtx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163vcpmcptc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ocvyadsh.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hahnjfum.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163bvvlgprz.html


<!-- 参考信息 -->