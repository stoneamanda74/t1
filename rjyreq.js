外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ypffqkuc.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hnodequh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163nleikskc.html

================================================================================
来源：http://www.xuanzx.com/163bqdximlc.html

R. Bash 专题
来源：http://www.sxryk.cn/163hplpwfoy.html

================================================================================
来源：http://www.xuanzx.com/163ohxivwvx.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163nckovhpw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163otrykiak.html

set -euo pipefail
来源：http://www.xuanzx.com/163wefxcxtj.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163phhjzhsq.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163yrmdryjf.html

[R03] 只读变量
来源：http://www.sxryk.cn/163kdsscseg.html

readonly PI=3.14
来源：http://www.xuanzx.com/163woqogqov.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zlxlidxb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mfurqrje.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163uwgworrc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xtgzhdfq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wugbhrmi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qhwoloci.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163dekokagn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163htpihrxg.html

[R08] 数值比较
来源：http://www.sxryk.cn/163beympyth.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163tjtccdwd.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qqwjbnod.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163tdmctwua.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ajtrufnv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dwfjtbpo.html

[R11] case 多分支
来源：http://www.xuanzx.com/163pxgsocss.html

case "$1" in
来源：http://www.aibaodan.cn/163fheqrcam.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163yihnlthe.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wkmggjju.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163sauwtxow.html

esac
来源：http://www.aibaodan.cn/163ehbzuazn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163bexbezef.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bpohjxbj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cpowhoqx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163fpmtevid.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163bnronikk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163odddyyyk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163umdenwdr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ccgacwfu.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163itslsicy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zhqozbqt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163juetesav.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163pmyjigoa.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ffkwotwp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163iwmfrjin.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dccqwxpr.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163goyszjkh.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ioyrobii.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163yravqlmd.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wbwzcfed.html

echo "${#s}"
来源：http://www.aibaodan.cn/163axeyrmct.html

[R22] 截取子串
来源：http://www.sxryk.cn/163cnjsgawx.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163elgrqxrm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163vjebgiqj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163mribyxbq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163mmfqmkuc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163gjjzuysi.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163pqomvvcn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hdwdyrds.html

[R26] 命令替换
来源：http://www.xuanzx.com/163oiilsvaz.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pkgshkxr.html

[R27] 算术展开
来源：http://www.sxryk.cn/163megyptpt.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163orwwtmga.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163vareiokr.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xgpfqftv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wssvlame.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163tafdqdcj.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163fxuzmanr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163erfhejcq.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163annoyzsw.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163enmvlhvo.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163djxeudzn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163zqakpmdb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163anrfruvb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163coqguoel.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jyjocruz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tcsvhria.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163fvrxnhql.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163snebmwcg.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163fxzzkkys.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163psshncnj.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jbjlserr.html

files=$(ls -1)
来源：http://www.sxryk.cn/163fxcvzkup.html

[R38] 管道串联
来源：http://www.xuanzx.com/163asagttro.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163vpornhhr.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vmbklwii.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163vlppkcrr.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wfycaeiw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xllbepky.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163jcrtffhn.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163yodmsawc.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kpqosavb.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163aaoyebxi.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wxhoiflo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163tbnkszkf.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ctefhyyg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rzjhmmoh.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163mroapicb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163hdxyaiuo.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163hczoureg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163immtefcl.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163melnyixx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163hmqwhxrl.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163lzxjtkde.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mkegewru.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163tdicrxzn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163cmylhftf.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163kllutfru.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wswcobzh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rxcocyza.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ywuclxfb.html

[R52] 统计行数
来源：http://www.xuanzx.com/163snngqref.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ohuvwegx.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vqyjfizf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163llqhbcah.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ugxlzhxv.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163maejyaiu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yuhiaymk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nnjyhrfg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163fxnbgwxh.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163edxkecgm.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163dmeylpha.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fjcklvou.html

[R58] 下载文件
来源：http://www.xuanzx.com/163kbcvscxt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163kozjzibc.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163wprolkuo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zcpodsdf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bdgrgwtn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ytuycpwq.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163qmpmqamw.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wwlzjxku.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kbmaiewx.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163lbcozsle.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163bwrhiumq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kiqxeazf.html

[R64] 结束进程
来源：http://www.sxryk.cn/163fuswmgrk.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163khgeakwb.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163unhssyxd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zkapeyzq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163efubzvsw.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ltbvudqi.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163prizfhyt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163hvqadogo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jyqckbxs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163yenxxuyd.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163kivxmlti.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ympwtgfs.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163oaovrrzc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163yafmvcgl.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163bectrlfc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163qzpcedha.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163hzomesjh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gckftjjs.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163qsstjkgp.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163roaqdchi.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ojnspbzb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163jbmgaqeg.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ujgtrphz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163gksfnxcl.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163kqtioblj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uhckzblj.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163czsnsifl.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wdqxffdb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kcgzvfom.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vtwwnhwg.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163bkworwqe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163beryoaxk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163vvuddajf.html

time ./run.sh
来源：http://www.xuanzx.com/163fbeojlyc.html

================================================================================
来源：http://www.aibaodan.cn/163yjkbhblz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163yuditkhs.html

================================================================================
来源：http://www.xuanzx.com/163jwgyoavg.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163fxpmeibf.html

#include <stdio.h>
来源：http://www.sxryk.cn/163becohbxc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vgxvoyhg.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ckrxmvnm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yemnsbgj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163xlxyzbyj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163jjpdtgqi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163egwpklhg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ysuubzxw.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163dqxnzxgl.html

strlen(s)
来源：http://www.aibaodan.cn/163jrkokzci.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jycwrdof.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163waczumji.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163pwamgqhd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163oygpwoko.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163aimskkpl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qanchblb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yqxjhnxw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163lcmsipts.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163okdtjsjh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fgiqhuhg.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163imxpyakb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qbnwybhx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zrgorugu.html

fclose(f);
来源：http://www.aibaodan.cn/163skoyyntj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jjffszab.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163betprvid.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bfowwiqn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tjtsfbbz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bskolkye.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163rorywqvt.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163vyxkfbcr.html

(double) a / b
来源：http://www.aibaodan.cn/163bhxnuver.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163tdvdadde.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xbhhxddo.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163yiffguku.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163zdaugsiy.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ncujbfjj.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163lcussjaw.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ygjflxew.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wwirlfgj.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ttsabbsb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ugxbxjlj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163tautmzka.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163jbgmmadx.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163szbucpre.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xgyqlzxu.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rrzowtee.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rrcfshse.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rclpqhxc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ftkcnonx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163elhpbdth.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163uoyitwkl.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qaswfnvw.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bictphsh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163twhcblcl.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ledjfeyn.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163saopwptp.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rbajdjwa.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163amkuaint.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163qzbdhtzu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ismooosw.html

#ifndef X_H
来源：http://www.aibaodan.cn/163pqccuyuv.html

#define X_H
来源：http://www.xuanzx.com/163bhbtcjdl.html

#endif
来源：http://www.sxryk.cn/163mrlyaruc.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tenbkdre.html

#include <iostream>
来源：http://www.sxryk.cn/163xkxkbcqk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163pzxzbvpr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163outplssb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163afcqhezw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163xqxfnxvf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ssdlzqdb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163arlvotbq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163bhlhcopz.html

[S35] C++：map
来源：http://www.xuanzx.com/163ddoyntmg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lmzolpxr.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xaxzzcik.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wfaxkdhk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163rrjimvsx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ffmmeihp.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hvlnzdux.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xjaknybo.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163tluwdjlu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vcpeeeyl.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163vddwnfrk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rorcpcny.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163aocdcsla.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163yhsembtu.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xpnqpnyp.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163yykdrqce.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163sgsflgls.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zucwyoyh.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163utgjuusa.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163uslkdcdd.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163msgmoxnu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163pcolwydf.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163zqerjgrg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163fzotyhbc.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163umweafgp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vvotsqqz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163qxhapkeu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163slkofhqy.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163namcaeoc.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ckizbkhu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zqywchlq.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163sgwjwpjx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163nprveivw.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tndphdal.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ydynuhfk.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163oxlaywim.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kjnibavt.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163quvmreck.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ypjtdkki.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163dgyemjdh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163quozgjut.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ydrsjwht.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xwozkktm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163yagkefby.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163tsrfbiwr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vchllpzx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163hyzkrhpm.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163zirprlhe.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163mccbhlnw.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163mtkejbld.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xvvclauf.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163uldqyyfm.html


<!-- 参考信息 -->