外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163uqmujqlr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163aydlftet.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ivzmxzta.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zahefiij.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163bmozyxxs.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163gaoxtjfm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zbcmimun.html

================================================================================
来源：http://www.sxryk.cn/163bafidykj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wjcglxic.html

================================================================================
来源：http://www.sxryk.cn/163ybrbxmtg.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163hbvrivhw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163nrdwrmfc.html

set -euo pipefail
来源：http://www.aibaodan.cn/163vjrsrltc.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163turnvesm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pawavlqb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163wkygrpml.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jwhtxrbk.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ehxnzsnq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qgctgmpb.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163whnnitme.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vszlanug.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163kzttquhl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163eavceiod.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163wgnohpqr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163cwuwmmjv.html

[R08] 数值比较
来源：http://www.sxryk.cn/163imsejdgh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163heskmnxy.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wwyyafuk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163kcckgwrv.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163metyxwuk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163fykjqlae.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163jlkxgcqk.html

case "$1" in
来源：http://www.xuanzx.com/163pxxlqyoq.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ovuokoab.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163nwaadahm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gtctuylx.html

esac
来源：http://www.sxryk.cn/163zdibtpsh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qzfoqtub.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ohqwdrnh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ohjbwdln.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163zpiynpde.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163bacjoypy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163grwospkm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163iolcaqgq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163cssfdfar.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163theuuola.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qoscprih.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xhqxqppl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163uzzlbmvt.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nrbybqht.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163gytehdtc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vseymaft.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163fajsxqno.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tobycsen.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qgofzeno.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163bhgvqvkn.html

echo "${#s}"
来源：http://www.xuanzx.com/163zpjevsil.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vljmrutw.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qellcefc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163lacajycq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163qthliszf.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163mryllgkz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163tsqmeskm.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vbgllwxp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ozebopkv.html

[R26] 命令替换
来源：http://www.sxryk.cn/163dbsycpaw.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163owvfmiqx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lgezpwjg.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163uetjapcl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ibxshyrc.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163yidqsaix.html

[R29] 定义函数
来源：http://www.sxryk.cn/163hgxmzjqn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163kdrryqgz.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163clpwvaqn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163stcztkag.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ihazkxav.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163nfxnrlns.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163drcglsrw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ubeuqigg.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163glzvgbah.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ifgajyms.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163lnkxyzrc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gzqvxoti.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163eoolpuyo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ofleeftg.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ctamvxga.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163clhffrjp.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163kbpfpqme.html

files=$(ls -1)
来源：http://www.xuanzx.com/163bwnkvuks.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hznxxfpq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163cuehpfxc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kmnqucgq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zlfeuohj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163qyhsjiqv.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163bzbvezix.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163potpgunb.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163prruipti.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cjzblipj.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163osmaqqms.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ywgxkcvm.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hzflecgx.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163zuiiptuu.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fzssskba.html

[R45] 批量删除
来源：http://www.xuanzx.com/163qelpcmsh.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163shkwkfut.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zheenpne.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qexrzohc.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dqugpgql.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xvblreok.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163mlztjigp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163owcfqszx.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163cvfdvcxu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kupbsslv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ykeqpzvk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163tjktgwkr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163sxtlejpb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qgyihuwd.html

[R52] 统计行数
来源：http://www.xuanzx.com/163rdbxsfbh.html

wc -l a.txt
来源：http://www.xuanzx.com/163pogokqga.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163dfvdvweh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pbdvwjod.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163pzrdizwd.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pevppzzk.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ifhqdvua.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163logtgmpf.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163qtdciwcz.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163nuenfwvp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xsxfozzq.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163uzvmjuro.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xmsyjqad.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163uagmnqee.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163mkjjptvy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wmkxbmif.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163mxbhpcpt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163trgduhlh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163tjagunjp.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rkbfeqaw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163vdgytyjq.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163otpyfiru.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hqzqnkoq.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hozmqxfj.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163xqtajuty.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163gltivrzg.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ybismznh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kumzwzou.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zwoaywaq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163tnhybkaw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163osbjoyhn.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163mehgeisr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wztkqlds.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163casqagwn.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gufdagei.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rstjgidc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163gaftijmc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ezcoowsr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163kibvlbxw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163cobzgffk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163dcsglnmd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163eqpciqol.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163brssfhib.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163xousbome.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163wgouwnxs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163rdxjlqrl.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163kgnzbtiy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jsphsjjo.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qdvuodzf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163glzayebf.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163zbvrstjy.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ykpglsby.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vqigwadc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qckjmspy.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163cnqitkio.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163sirrxflq.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163dsqsrflb.html

time ./run.sh
来源：http://www.xuanzx.com/163xpstuasn.html

================================================================================
来源：http://www.sxryk.cn/163ukhlpbwl.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ovutlshv.html

================================================================================
来源：http://www.aibaodan.cn/163sumglfie.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gsevmryj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qtoxzhvv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163xjztzzmx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ayybelwd.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tggmflsk.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ejiptxyb.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163thawojdo.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163tvrmfkpd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163rhfkbhcc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163dhxonwly.html

strlen(s)
来源：http://www.sxryk.cn/163tidddrpp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163seovslda.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163gswgczlv.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vzngulhp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163qqepkpgj.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163desdxxjq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163adzmbrrq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163smtoegbr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ulmjukbf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pptqfjhj.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163lzklooeh.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163aorwyyto.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163syhzsegi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fmjgvwmb.html

fclose(f);
来源：http://www.sxryk.cn/163vdwlzhus.html

[S12] C：写文件
来源：http://www.sxryk.cn/163nqnhcosg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163zsctknuo.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163nlowpsev.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163cmfqpset.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zsbluhfl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fpvdxjnn.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163tltlpulc.html

(double) a / b
来源：http://www.xuanzx.com/163iuadsevd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nilcouxo.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163amdmxtck.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ehnmbnay.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163rcjawltq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hvitsgbw.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163jcrqokqx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jtifmgfa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jfujfqqa.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wxrmnikl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kkvnfwen.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163sokkmrcz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163rwsvxfac.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jqcmwafz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163uowfgvvj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ozvsackj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163lwcmjuaw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163yeytjbih.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163gvnoroum.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ixyfjtpx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mzhuqfnc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163antkuuan.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163qlivnnog.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qfltfhps.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vnjidfrf.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fptcsmed.html

static int counter = 0;
来源：http://www.sxryk.cn/163ymurzsho.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pddtnhcf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xfcgsvjw.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163okgbpakp.html

#ifndef X_H
来源：http://www.sxryk.cn/163wprbamxp.html

#define X_H
来源：http://www.sxryk.cn/163xbwscfup.html

#endif
来源：http://www.sxryk.cn/163qspauqml.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ufwwqhpd.html

#include <iostream>
来源：http://www.xuanzx.com/163bdwtbzea.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gapwcdrx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xlnndziy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ysnryuwn.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163crzzjazg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163jneukkib.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zwyfpsoz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zlmpwirh.html

[S35] C++：map
来源：http://www.sxryk.cn/163vmceegew.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mbicminy.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wyatzxap.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tibzifgd.html

[S37] C++：set
来源：http://www.xuanzx.com/163djcaajla.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163dtydjnwt.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xelwwfds.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163bzsthfch.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163cxmrbliq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pisntdmd.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ekdlnpfu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jywnaaid.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163opcdrtqq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163jhqprbhr.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qjeryalm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163iasxkyhp.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ydptjhnr.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163akgivhso.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nmsediit.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kjyjyvlu.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163sxrcxvlg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vtqrutqw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qdgnyagx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163yonmwmoj.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163onmsjqoz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163saaizqkb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ppsdikjz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qjxkxlwy.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lijhdxmo.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163epokouax.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163agqemgoi.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jxlpfilm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163vtdwrlck.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ursblokn.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163wtrovpnh.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163sthwlsos.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163hbhudukl.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wuaatrnf.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lnnpbjlm.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163vipeaikw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163isxwfbpx.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ptgvejyz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163aukgfsrb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dfmpxepg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pufdqmue.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163nlckruyg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tyqostqn.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ziqxmdyz.html


<!-- 参考信息 -->