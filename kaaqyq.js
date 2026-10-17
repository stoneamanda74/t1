外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163dnivjdtx.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163mejixhkz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163izlyjgwc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163wlqtmmpp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163mafmntpf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163awmonabi.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163lubinpza.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163avogdama.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163paziyolb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163grnbtwfm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163xauwtycv.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ngsnscsf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163pmeymors.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ytkyxpto.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163cbfwlput.html

================================================================================
来源：http://www.xuanzx.com/163joyytaef.html

R. Bash 专题
来源：http://www.sxryk.cn/163wjxwxyuo.html

================================================================================
来源：http://www.sxryk.cn/163jsbtwvff.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lokacjjw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163qgjfohgh.html

set -euo pipefail
来源：http://www.aibaodan.cn/163uemeorox.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163acnmifcz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ziqjdhmj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163hsatxjhf.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mbkyzfjn.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yniglhsl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163lhhrzccq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qexoiecr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163duvdftae.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163shbqqhax.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163irouootp.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163bwtbooif.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163uusnfxag.html

[R08] 数值比较
来源：http://www.xuanzx.com/163fosoohje.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nmldjgvz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ufmknrig.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nzfcwyms.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zulqvtfj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163bimjuusw.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hxppxmsm.html

case "$1" in
来源：http://www.sxryk.cn/163hkhkzbcg.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163peihzcao.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163bzunyyte.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qmrobvnu.html

esac
来源：http://www.sxryk.cn/163hwdpxbmw.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163inftytko.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zhyunqkm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163cecaidst.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163nqdwhhai.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163hrvcefpr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lvsqiewd.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163natnmueh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163jpeofyuc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163nfkidiit.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163pcmfayvg.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163gqsgufru.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hzqlewhl.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qxmtznsv.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163vxjfkycx.html

[R19] 数组长度
来源：http://www.xuanzx.com/163aylxeqmk.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163xdoprocn.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ljwcewxp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163twmijgvo.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163koizgitx.html

echo "${#s}"
来源：http://www.sxryk.cn/163zjovceut.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163kkfcaegh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lgeamzvm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163qeksoyez.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lmfzzyuy.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163nbjfwxrg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163koowbluf.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163giojilnp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163dbiwmvad.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ruaogpsh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163covazuii.html

[R27] 算术展开
来源：http://www.xuanzx.com/163hzxahhil.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zihzlror.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163pujokbdf.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163viankedz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163snlqrijg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ipcozcyc.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rvpeewza.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163awrwxykp.html

[R31] 局部变量
来源：http://www.xuanzx.com/163oyfibyww.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163hlgadudh.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vdzrktad.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163nmbkjjxa.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163pmvingtr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163njwsjrif.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qakuxszd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zxkblbzv.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qhqokooh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hmgiyygn.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xiyracjy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163lcdqigcp.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163bqakacyo.html

files=$(ls -1)
来源：http://www.sxryk.cn/163lmptoyca.html

[R38] 管道串联
来源：http://www.xuanzx.com/163wpgcimuc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163yqcxuqax.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vajhrozr.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ovdsjfuj.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163kcclgvdu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163jpboldhd.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kkbvthve.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yoygfkxg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163nbovdwqz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ahfpiklx.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163oysyhxeq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163wthtynrs.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ffhwnmtt.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ygmjdbld.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ukvzyzgm.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163pcalkcka.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nsygyycg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lgmovkuc.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jgvibrit.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lppdowdc.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163xiiueeop.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163iirkxzgm.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ussqlfht.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163wvqteyod.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163frorofua.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163sudvioac.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163tumzdruo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bkwevwhb.html

[R52] 统计行数
来源：http://www.xuanzx.com/163spzhgtzt.html

wc -l a.txt
来源：http://www.sxryk.cn/163jrvwtevp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jfauybjp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163tyfwhgmu.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163mnrirpbs.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vlungwtl.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yivsfzsw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wvkuhlrd.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hsbjrqma.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163aafnskoh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163tkhhfsoa.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ynvrmsqm.html

[R58] 下载文件
来源：http://www.sxryk.cn/163rvdeityj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qdjifupx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163cjytbgsl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163jthjojyz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163anyuaics.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163vrnwtghl.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163zoilmgvh.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163yzqeoetn.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163khvmhqum.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163noymxlko.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vuajmfqu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ydolciiy.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hxbcdecx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163hpboiizc.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163sqybtzxj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wgldwhlg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hugkbnyi.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163omeiabnf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163vkexarfc.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163xundrtve.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163epqcuqaz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163lromvjfd.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163jtxfnelq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yhsskihv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163drflkqoo.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ezplisvh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163epmiuozv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163lznhdvlx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163qpvjazhn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zyoshhut.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zpfcrpes.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163bjozpaqy.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163joncphrv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163sqcrylcc.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163wthoxpen.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163wvjgucbs.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163canniggr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rpnbaico.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163qgwwqbgq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163dtenrlpc.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lmhqvqzy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163evuieywi.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fzdiubxi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163eapqjksp.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kykqxmqf.html

time ./run.sh
来源：http://www.sxryk.cn/163wsumdjhz.html

================================================================================
来源：http://www.xuanzx.com/163mwrasbnq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163qhirnffp.html

================================================================================
来源：http://www.xuanzx.com/163fwxhjtcq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163oxbcizjk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163svppygru.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163srcbrnos.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163rntbhcvv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163siyykkmj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163rqaespjd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xzdeearb.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163qcnpsogy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sjoxvvbt.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163zwddwycx.html

strlen(s)
来源：http://www.sxryk.cn/163khzeierk.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163awmuflzu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163cxakbmed.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163injniyke.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163cwotastd.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kzallurw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163dxbufjfz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rrrlnrja.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zfvozvty.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zxxdpeci.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bwjcxvrq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163komgdkfs.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rxedxapl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163igqffstv.html

fclose(f);
来源：http://www.sxryk.cn/163mrpzoynm.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zckwdmvt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pcuzhxkq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ejrnandr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vuantkxh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163etxockiq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zexqpipi.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163rvptovud.html

(double) a / b
来源：http://www.aibaodan.cn/163skssaqat.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163phmwwrjy.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mtkicvxe.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163emcbddld.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mlzhicuk.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163jnlbjtwn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163rmgqhfpy.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rwmygwsl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rpxxhdoq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163dpfubcdg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jefzotxh.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163wfjguwur.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163aqopatro.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ngzfufhl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163jxdgnmcv.html

[S23] C：随机数
来源：http://www.sxryk.cn/163mlmbsgih.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163sxxpjgfp.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163zbwmdvhn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163yjsbofoc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qswmzfuo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163qkucuvqt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163llfumdxc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hmdxnqns.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163mkkxrmif.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163svvjbagh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163iexuetco.html

static int counter = 0;
来源：http://www.sxryk.cn/163dkcyrrcr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qowgimku.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zmizltiy.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jihpuszh.html

#ifndef X_H
来源：http://www.sxryk.cn/163cksrcpyd.html

#define X_H
来源：http://www.xuanzx.com/163oddjdyqk.html

#endif
来源：http://www.xuanzx.com/163aphcmzen.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ihudbxtn.html

#include <iostream>
来源：http://www.aibaodan.cn/163emjikhlc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163glbdobbq.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163zxxfndpb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163bixqeniv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163kkqkmmxz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163plhrtanb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163mfgxrsii.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163pzfvukmc.html

[S35] C++：map
来源：http://www.xuanzx.com/163cinvnpqj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ubnhavzw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dnevvcab.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hbbdromz.html

[S37] C++：set
来源：http://www.sxryk.cn/163edoczdlf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gkwvoczj.html

[S38] C++：排序
来源：http://www.xuanzx.com/163bievztwa.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xfbtfeow.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163czjltheg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163xfzblknt.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ycuynamk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fseceuvu.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163gpxovbzu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qodwgnvt.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163hvmhhusp.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gviyqyko.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163pqnlqvxj.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fjgwfgdh.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dxtzvxld.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163pclvoofv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163quloihtd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zilyzycg.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163mmltotls.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163eefcpztf.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xvijtycj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ylpuspac.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fcfeyqdj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163vchyuseo.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kbvdxctu.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163vvitzbyz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163znhaopvq.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163uitkprls.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163siuhsvde.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163yyakovau.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163amwtvyxu.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163qzuazwog.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ohmtxdzj.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163pphasjkv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163uihbdoot.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163afcviutn.html


<!-- 参考信息 -->