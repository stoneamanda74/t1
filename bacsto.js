外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163iymsfskc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bqqtxvft.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qwrceajz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163agrquced.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163fgssntax.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fqvovsiw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163kuooxfeg.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163cpwryxhc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163oihwpvsw.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163depqmcaf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163uxjraxvh.html

================================================================================
来源：http://www.aibaodan.cn/163uspnmiww.html

R. Bash 专题
来源：http://www.aibaodan.cn/163sfvvhszt.html

================================================================================
来源：http://www.sxryk.cn/163lernkscf.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163dqvmoubk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163husaxqfq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163opmixtmo.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163btomihht.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163gzpmwfqc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163irujwvuy.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gcolxmcd.html

[R04] 位置参数
来源：http://www.sxryk.cn/163gjpagczq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jwnxhygu.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163aodnsyvj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163banbecfp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163xsecamav.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163khhhebcf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wifzcnze.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163zsybimju.html

[R08] 数值比较
来源：http://www.xuanzx.com/163wnsqajvp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wxipbxff.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163toxsjnpu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163cqqvdvti.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wixokpaw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ztgxdhbk.html

[R11] case 多分支
来源：http://www.xuanzx.com/163uibjxjey.html

case "$1" in
来源：http://www.xuanzx.com/163rkdonhfe.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163nlnxtamr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163xznaybkf.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mxpdsmkv.html

esac
来源：http://www.xuanzx.com/163ntdxqyzq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163zkvpjjzu.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163mkpbcogo.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yaqesxrg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163svbjdrcq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163fqnfmmlx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163afpskuwu.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163zencgnzx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ogcuqhel.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163dmokqyyp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163oiwzufun.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163zvukxyom.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163idbzzhcv.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163hdqcpgqz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163byvaxbio.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163mdpvjakl.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gpnmdhok.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163efpeaqpe.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163tmtzspmu.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163pzukqggw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ltnvwlzk.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163nlwugfbe.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163cnxnpvds.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163arfrxokg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163pijsicmr.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zhfvztmg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163bpskucyb.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163nqfmiunn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ognpnfah.html

[R26] 命令替换
来源：http://www.sxryk.cn/163rawiumcx.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163whaongom.html

[R27] 算术展开
来源：http://www.xuanzx.com/163dxpttjzc.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163tsnlvujo.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163tcidcmin.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rqadnpry.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ufkjlykf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dwejytrn.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163iavgnzbm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163vejffdml.html

[R31] 局部变量
来源：http://www.sxryk.cn/163fanvmlrl.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163juzqqecn.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163gqhewnxk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163azigmrwf.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ylmxpzkq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zfjpzefm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163dlykpdzs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qoaqejcq.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qzcpfiui.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163rxtlqbev.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ygagppgq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163slgjomyg.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163humvigbg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mqihyvpg.html

[R38] 管道串联
来源：http://www.xuanzx.com/163anrxyuyv.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xcjwtxqy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163rwzjdsbb.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ozawmerr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163kklrdiis.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163pbcbihcq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hnqznvoz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163tormcwng.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163dcggebvu.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xfpsfdtd.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lzlkwyoj.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163anwsmrhs.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lclukihp.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fyabzpww.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mkhsmmgh.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qhravjez.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163yfrnzjeb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kuqnreci.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tkjqknmt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163arjejfat.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163flfguxoz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163bqupbliz.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163gkyjkoms.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163qsleblyh.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lkqnrgvn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163opczpgws.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ocbiklmc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ilrrhbpg.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fnzcprfa.html

wc -l a.txt
来源：http://www.aibaodan.cn/163hngtmxkl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163cyievcdl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ffrqlwcw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163eiifqnnc.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xfuphyju.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163aqvoluda.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163oflyzfux.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163vpxboeop.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tletjgjb.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163lcrjrnbq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163bgprwhzz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163tkohwtzc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163upkhlzhu.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vlxexjhc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163yrwtrrjf.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163udbtzvnw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xmcabmbc.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163epxyprut.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163kahhoevp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163tpqizlsy.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163mrsglhea.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pwodhyzp.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163obdbrlvr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rafxtcai.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163bexjnkng.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163nwowwpty.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xejdoixq.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ollllilf.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163fuwxacdo.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163yxpchlyu.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nbphbdqb.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ancujwkj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163hfafphtb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163cxzxfoxx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163swxwuuvy.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163asxgrvjv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wsoeepjr.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163cfhozuom.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163tvnczlsw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163jaqsvlqg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163avrztfto.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163uegvhoqx.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163qkhhmhgj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163aubengfb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163tsonkzpm.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163cmyxagbs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163cainjmxx.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163abzrygec.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163svtchsfq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mzowwqeq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163dlomeiqy.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ysjrsszc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163tvrrcqid.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163rqbyarwb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vvvtuzbb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163volydagg.html

time ./run.sh
来源：http://www.xuanzx.com/163ytgsnkqk.html

================================================================================
来源：http://www.xuanzx.com/163lgvdxydn.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163nisvqtxh.html

================================================================================
来源：http://www.xuanzx.com/163wacymzma.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163opzxcest.html

#include <stdio.h>
来源：http://www.sxryk.cn/163juaatgzf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163cliypryv.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163abmhmoan.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dojhjssk.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rshhbhri.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kmvhtmzb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163arhnrvbh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hmcdpcda.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163druvvszx.html

strlen(s)
来源：http://www.xuanzx.com/163kgdrtfpa.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163fyxrzquv.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163umgefijz.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163kozmassc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mjornlpb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163lubhctat.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xrfcqnht.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tszltgyj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163qsfaxgdg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xzhmhbyl.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163kypsqocq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ysfdrmvy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163diwtbhbn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163pzncuero.html

fclose(f);
来源：http://www.sxryk.cn/163lnhmtkid.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bzrmovhu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ubpgthzc.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zxvxihbd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rjktmzyj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rrxhvrhx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vzdxtkom.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163qouukpuz.html

(double) a / b
来源：http://www.sxryk.cn/163qfyrvuub.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163sfisnvlm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163iqkfnbuo.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ivxyjdwu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163xrxwvjdf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ksammyfn.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rjjimwvk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163edggpoxa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dopqodpz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vbvzfkyq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jcmxejzj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163kltsgjge.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163usivvtao.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163symoyfec.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qxlmsnac.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qsinbady.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163cfqftyef.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163dvqnppez.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bxjuuier.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163btlqqfde.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ohmfbrwg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163uysadrso.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ztqoamhi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163iljgnwnr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163qtniouqp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jtqnstej.html

static int counter = 0;
来源：http://www.aibaodan.cn/163xwmryemr.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163rbivqmvi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pttsmjwp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gzbshyba.html

#ifndef X_H
来源：http://www.xuanzx.com/163blcsyobm.html

#define X_H
来源：http://www.xuanzx.com/163tairulpu.html

#endif
来源：http://www.aibaodan.cn/163atrducda.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mmvjbmup.html

#include <iostream>
来源：http://www.xuanzx.com/163ktddokfh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163hsinhwzn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163xsssoskj.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wpcpxmom.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163lfjqfajs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163iniztygb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163thodzjgv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mtidmcnd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163urnefuin.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163uuvikehm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qdrtqsqg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jnxiqvxc.html

[S37] C++：set
来源：http://www.xuanzx.com/163apidzadj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163lwzppllk.html

[S38] C++：排序
来源：http://www.xuanzx.com/163knyswftx.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jramufna.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rrooorrj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wiwxheao.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lvjwzuye.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163yzkjkerw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163kvqydcqc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bauwblku.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163rvackojb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163prdjhojc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hekweprb.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163qoogpxfp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163mwyzpxid.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lfeupetn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163edjsbopv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163kppudzvs.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163avyogrot.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rwnazxac.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163gjluzvtj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nzmtardu.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hhdweicf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163rynvctnt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ajcywwlg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163dxputsxp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163tzakiwqs.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163yilufjwy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163egkvxubu.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163nxaubkuv.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163jjpftvml.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vgpdcbld.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163hrhulito.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163tltthnei.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ijrovqud.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ktplrqrq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163pmrnktjz.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ghzhqzxr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fdqamunm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163smwitlto.html


<!-- 参考信息 -->