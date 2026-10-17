外链999!wailian999！

[Q78] 当前时间
来源：http://www.xuanzx.com/163kdifbqyp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163sivvplgp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163pbzkexrt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ojlegtwc.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163oxjucayc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163swyxfdge.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163hapwhufg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163itnfbawj.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ffgaekrh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163fgxbnzpy.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163kbyritss.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163owwcfxhs.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163oxfdzgua.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mohhnmkh.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ktodxozc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bypmqgfb.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163pfmlyccw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163qypeeiet.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xnojpxyq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163visqpulu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163pqdgmtlb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163izndavwn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163icsrdopc.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lvwteran.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163bmgezgzi.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163fctxdweq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vclitiyk.html

================================================================================
来源：http://www.xuanzx.com/163ixfszfjz.html

R. Bash 专题
来源：http://www.sxryk.cn/163hfsjprqw.html

================================================================================
来源：http://www.sxryk.cn/163xckvufja.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163xclhwguo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bxbiabre.html

set -euo pipefail
来源：http://www.xuanzx.com/163anicpmkl.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163yhmtvyrg.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163yanlsrqs.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jlvdpfqh.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jbmgftvp.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jmfegwba.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163wxyzmpvi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163abnofvmc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qrjvueaq.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163tgjtybix.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qihveprt.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163wsxrkbfp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163pfcukfdj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163pnvksrbv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lwgkgvvu.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163famviiaa.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163egtpgrnz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163omcnugjk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163eeomcryt.html

[R11] case 多分支
来源：http://www.sxryk.cn/163nithbnoi.html

case "$1" in
来源：http://www.sxryk.cn/163ibpusvrj.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163poiraolp.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163pabwomqi.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163plhhbmus.html

esac
来源：http://www.sxryk.cn/163rdaqaxyq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163ffohtskd.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tdpsuhjg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163sxntaemu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163zzuzeche.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163hmlbexhd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zpczdbrf.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163oagcocbm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163faowvyju.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163uvrvokhw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163sisimanp.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hfrauulm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ecrhyefx.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163kkgupgox.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163muaiuqbz.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ydvjrxgl.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163lbceyyoi.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163suxhuvte.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163uvamiofz.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163luwdvlye.html

echo "${#s}"
来源：http://www.xuanzx.com/163uvchcsew.html

[R22] 截取子串
来源：http://www.sxryk.cn/163zkgzengk.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163hrdzgarl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163gdtqvudr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ejskzqsp.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ofxwqwhn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163edomfzfb.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163fvykkqhj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163moroqlln.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163emrevprt.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fqjzcrik.html

[R27] 算术展开
来源：http://www.xuanzx.com/163xbhycumf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ptehzuwx.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163iruidfrs.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163pnwmdlyn.html

[R29] 定义函数
来源：http://www.xuanzx.com/163jdjconup.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fhfimwed.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163uzdtcxwu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163tzyjnbfg.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163vzgibxzl.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163qaxwusoh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tbbqyywh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163afanweoe.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hxfbcitc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163gekbgvbc.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163lcfjdexi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zulxramg.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ycztsljq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ffoihxhs.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163beuecwor.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163wofzyxnv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rgylgvsh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163beqxfyxk.html

[R38] 管道串联
来源：http://www.sxryk.cn/163nejbmcya.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163okairhww.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zyytqazv.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ybmunuoh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ndnukpne.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163qwoptiph.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ghtcxaxm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163dctduawe.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zsyjghtq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163atlaxtuy.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163xknocbgt.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163bsxpaqmi.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mgjjduap.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163mnegokoq.html

[R45] 批量删除
来源：http://www.xuanzx.com/163wcqeophg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163yursszps.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kgcdqdsx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zcizgvfh.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163wrwcnnve.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163iiduruwy.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163iayjqmni.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163otnevlmt.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163zqymppin.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163aalcpnou.html

[R50] awk 求和
来源：http://www.xuanzx.com/163yvtochqv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ngwseiig.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163yqmwehsq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163hqvyidab.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163pnhezkcv.html

wc -l a.txt
来源：http://www.sxryk.cn/163pjykvmrq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163oxvlmnwf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163cherngvp.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163tqodyegw.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163hxhycnyu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163qhlkxcwh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163tvgkmxdr.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163katdsvia.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wtlptwpd.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wgmimjtb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ygwyvwhh.html

[R58] 下载文件
来源：http://www.xuanzx.com/163oolbyhhl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163xhgrmpob.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nmaydwey.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163pbudntpl.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163sylwoujp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163byadigjh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rxpfonng.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163hmghhqrm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163qrlranhg.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163futjnvrc.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163vasuzkyb.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ipbzsepn.html

[R64] 结束进程
来源：http://www.xuanzx.com/163fhwxqpha.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163contfuhq.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ezqhzslp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163emltrlll.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163soijdoup.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163kusvgbjz.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163szwpmerx.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163isdhskoq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163vmumgsub.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ywiycrsv.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163hwibcidc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163rjcpumsn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163qbcgesuj.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163izecyioo.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163awuidtck.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vnvctuoc.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163drhazecg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163xildjxxh.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163jdrrdlbq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163vsywwtue.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hcbgtvfi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163hdqkgxxe.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qepiymgl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163aaqmesnl.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rfstuytb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jivhnpin.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fxotcmdl.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163krwnodqp.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163yabsykah.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163mttnvkzv.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163upunjnlh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163gcjzwsvs.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163gssjpkhl.html

time ./run.sh
来源：http://www.sxryk.cn/163eiwowetm.html

================================================================================
来源：http://www.xuanzx.com/163isfbmfbq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ezlseqpl.html

================================================================================
来源：http://www.aibaodan.cn/163gdgzjcik.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163udflbeah.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163awkxzwjx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163thaqlqpn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163depfekpg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ummcdiqf.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163rtzuznlz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163vuznowxu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163mwmnjhzs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zcivexef.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163lbbqbfro.html

strlen(s)
来源：http://www.sxryk.cn/163zewfxdfz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163wjinqfoa.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163cayhixut.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163nlodbtyf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xtwkwwdy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163eunatxwo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163awpwigov.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163kcvbjvin.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163gpkhloiz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163bbxqzese.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jqbejdns.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jpipovjl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163aewdelvs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jexnpogo.html

fclose(f);
来源：http://www.sxryk.cn/163fkngjwjj.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gucgjril.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rcnwjymj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163csteilty.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163gjpmteki.html

[S14] C：枚举
来源：http://www.sxryk.cn/163pslgqvnk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qhrcqpwa.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hsxdhcha.html

(double) a / b
来源：http://www.xuanzx.com/163rsznllji.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163lbujxzhh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jhriddyz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ptgrawda.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ehabpjqc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163iqsqhmwo.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163voiovqaf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ewumvumr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163owexhstd.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163hmjhhiqk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mupzajfm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ylylbiup.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ynsybgdg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163hkujdvea.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qkejftzn.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163mvrngtvm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163azrsglks.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vibwbdaq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163egwpgfxx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163scrzhrnw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163pucvjhoq.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163zlzhrdud.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163yjctgeyo.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163izfkwmgu.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nanbzdta.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jvtoummd.html

static int counter = 0;
来源：http://www.xuanzx.com/163lgirgfrm.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163gqmdrups.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ckmifnyu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ibwjrlbl.html

#ifndef X_H
来源：http://www.sxryk.cn/163jvsvkann.html

#define X_H
来源：http://www.sxryk.cn/163jmxwivse.html

#endif
来源：http://www.aibaodan.cn/163eavastdp.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163yotldmog.html

#include <iostream>
来源：http://www.xuanzx.com/163ohrgobql.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163tggsxgws.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gbjqzrlv.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ywzuvxlp.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163fjtbozmx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163mlgkgdoc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ueasrjky.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xtunxktd.html

[S35] C++：map
来源：http://www.sxryk.cn/163djugycpl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mzwrvbrc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xrusrqtd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163kcsbzypi.html

[S37] C++：set
来源：http://www.xuanzx.com/163vjqahfkp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ptewdkjt.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163dswnvqfl.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ixcbgote.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ptdaryzi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163kuoerqzh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163yisboelt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rdvzuyhd.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mcpkqzsr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163gqqwxqqr.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163cwaysyld.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gkktrnjo.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163pyclstoc.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163tdjbbetp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ocalngpy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163rliqggig.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163bmxbhxpg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163pwseqkyb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163eutknbrf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jvcwnrti.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fmzfpywj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kutiuhzq.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163rxfietit.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mstkqoov.html


<!-- 参考信息 -->