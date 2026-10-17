外链999!wailian999！

[Q78] 当前时间
来源：http://www.sxryk.cn/163gqmongmh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163kzfsfphd.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xglchffj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ourgissm.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163cpublsrw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163cgbwuhxf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163fzmqfnno.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163wqxlikyc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163evtqkfrn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ntaahcwr.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163sipvewfo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zhfeyemg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163veibkrax.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163zzjtbujr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bsndwmxm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ergkmswh.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163jexlywgm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mengariy.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ijbkgaxd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163pyivkfbu.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163mkcemhzl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163yoitggts.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163byikukrh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163frdnwckl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163gamgetne.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163jldahhsv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163mctecblk.html

================================================================================
来源：http://www.aibaodan.cn/163jeoftfev.html

R. Bash 专题
来源：http://www.aibaodan.cn/163xnbfpkfk.html

================================================================================
来源：http://www.aibaodan.cn/163yzbtxsot.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gckakski.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163sjgrbadn.html

set -euo pipefail
来源：http://www.xuanzx.com/163mgpgqtxd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ybhuucyb.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163whynmmyj.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ilwhmzsi.html

readonly PI=3.14
来源：http://www.xuanzx.com/163xdutakkc.html

[R04] 位置参数
来源：http://www.xuanzx.com/163mhlegvui.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163wzizrllk.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zzsewntp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163tssaayqk.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163yroqejmq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163slpwgqor.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ixbvuwno.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163djxmfddn.html

[R08] 数值比较
来源：http://www.sxryk.cn/163geplwqhr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qliydgaw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ojjuvpub.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ikhrauba.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163czbaffhm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163cwfavynh.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gkpqinun.html

case "$1" in
来源：http://www.sxryk.cn/163algcnoag.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163gyjgbrqr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163utsyhobs.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163mnwugttv.html

esac
来源：http://www.aibaodan.cn/163kdiftoep.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163kinrqwxf.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gprtvfhf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163otiialzb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jftfgxpo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cyrnpqzj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163zwmspbdm.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163uesiuspr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163icrmjeua.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163roccngrq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163dfgsitts.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163euwrbzuq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163upsizarw.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163wldpfyre.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163xqvcvmqs.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qgfekbpi.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163hsncyzlk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163fcswcwvu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163hrrdscys.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hamlzwqy.html

echo "${#s}"
来源：http://www.xuanzx.com/163cbparzmv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mpysmyje.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163zlnduzqp.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wwlmogjn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163bvkjbtyd.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163lztietak.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163eicgjcaa.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163yaqmaxvi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hkhaswok.html

[R26] 命令替换
来源：http://www.sxryk.cn/163imtzjerq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163pqaponmv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bwmmwhzg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163nsohvral.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ooamvihn.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163upfmdljr.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xjzzxbtj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wxuasrwr.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163psdqnbey.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163eckugeml.html

[R31] 局部变量
来源：http://www.xuanzx.com/163xdnwgmdg.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wdqvfdym.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ufkseywd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163yzmzhgyj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163plbywjsa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163tqnlouyv.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cprlbumk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wxjxdiuf.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163cihmyppf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qlycsmwd.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163pwxjwzpq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ejdafypz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ksomccnn.html

files=$(ls -1)
来源：http://www.sxryk.cn/163oiwljikw.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hygvnysx.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hibzyald.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jtewshts.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163lpcjdnkz.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163bpxbhsme.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163gxzpqxrj.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163glbforcd.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vbtmjzei.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qecssnrv.html

wc -l < a.txt
来源：http://www.xuanzx.com/163adjhfkso.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163xtzpqten.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nuorrxml.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gcdjivyi.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163djggdkfr.html

[R45] 批量删除
来源：http://www.sxryk.cn/163saxtmxjv.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163joqwtkzc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163hmrpxclm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vvnjkzrk.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dwjoqfiz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163rwpxekbd.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vwoxdiri.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163sjrqltek.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xsmjhlwv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xhjyuyda.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ztwlyrvf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163cxvczmvr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163eexycleh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gnfrxbks.html

[R52] 统计行数
来源：http://www.sxryk.cn/163qybjuewq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163vgfvdfdk.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163dzryqcwm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ddtfxdqx.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163rbxdqvzf.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163lkpqndxn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163dhkfdzgy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ojwzvmku.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163yjabajjy.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163fomurkbn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ppwzgsrv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163bpjfrbfw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163lwwrjlqs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163gpirljof.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163pdpgshen.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163cdyaatcg.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163maejjqwz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163nxsvncgk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163varzviwk.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163pdnorbxj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163vnhzkqos.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hdcrmyhh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163hmfxeser.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163soicjxab.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163hsxhkcci.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qrnklmyv.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xzkhpxzi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gogkcgxe.html

[R66] 定时任务
来源：http://www.xuanzx.com/163blqqgkbi.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163scmoimhy.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lngqxfeb.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ozmsxehr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163gqtxjdle.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163bdctruts.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163aglcdaed.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ufjrnxzr.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163abxxbfev.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163uftaibom.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163zbhvhukf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163znweofbb.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ymmxfcsc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ivtmcmny.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fcbautxi.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163qsjmvzto.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ubcwncxp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xfwamxdn.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nhfzwldj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163zjiyctpx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xivoraxf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163awgsxcxb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163lffeesht.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163qzqaipcd.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jutuzxkg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163klxnrwon.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163lvfynpbz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ravlvqyk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163oxzrilni.html

time ./run.sh
来源：http://www.aibaodan.cn/163mcgvupzg.html

================================================================================
来源：http://www.xuanzx.com/163uxwlvhqb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ecfcjjfp.html

================================================================================
来源：http://www.xuanzx.com/163cwkoimha.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tygwyogs.html

#include <stdio.h>
来源：http://www.xuanzx.com/163znymrnpb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163unbeomip.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jqwmchze.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163jcerupcc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163xwvxtmdh.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163txmrnnbz.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gncebgpm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163dygjknnm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qjmoohek.html

strlen(s)
来源：http://www.sxryk.cn/163kxgddxbz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163yifxsabf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163chcqmzmn.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zvmleyhj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mwgczbsy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163yvgysklf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rrmaqges.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163bqlfrron.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163wgzcwqbw.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ipytlmhg.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ddkwcxkn.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163mdicppez.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163lgqxqjqk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163evehoyxi.html

fclose(f);
来源：http://www.xuanzx.com/163dciifrzf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163jdgqhmct.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163parjuqlf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163usexfxqi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mtevvxfs.html

[S14] C：枚举
来源：http://www.xuanzx.com/163lbuahocn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163sxrncdrk.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163lwogduer.html

(double) a / b
来源：http://www.xuanzx.com/163jqsixmgu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163btdcatop.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163kxdcctiv.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163gflfrloc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kdofqyrs.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163cbzpjbcg.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163cuwspdau.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163advnvbez.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rexobpou.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163uukdgwbo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163pxepvioh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163cclrkskp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163pyqhuuvd.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rqjpqqds.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xsoqutpn.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163puapotvj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zbzjkbhf.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163kllrzhhi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163znquezqw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163lhtdcfhk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163hzxciikk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163plgiotiy.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163fibznhih.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ucjgbbgj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ijqbmpmx.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163mehkxwrl.html

static int counter = 0;
来源：http://www.aibaodan.cn/163eqmojeop.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163mdtodtrd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163anbnynaj.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163grrhfngn.html

#ifndef X_H
来源：http://www.sxryk.cn/163vkyaycgv.html

#define X_H
来源：http://www.xuanzx.com/163hxzfrqhx.html

#endif
来源：http://www.aibaodan.cn/163fhwptxxi.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163bkzahler.html

#include <iostream>
来源：http://www.aibaodan.cn/163wuzpggyi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163oqibryry.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163tzhuzqkn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163bvuzaapa.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ivquoflk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163lwkzehvp.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163rxcdyejc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zsbvpkka.html

[S35] C++：map
来源：http://www.xuanzx.com/163kvofarpk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kjvnxtcm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gdgfjktk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163woplgpnn.html

[S37] C++：set
来源：http://www.xuanzx.com/163ikyqicxs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rdxwamfi.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fvzicldw.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163sthxvkxd.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163sjpdakqq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zkmayjjx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163rgonookf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163dmlqfgbv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xuqoxutt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163nnbyenum.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163eksykzjn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163quywnsqt.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163fefzuiyq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hyxddtfb.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rxxwzghw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163zlzweoiz.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163bhopdbto.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fhbovvvx.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163nfdbznaq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163uuucrqhx.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163gxwiksno.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163rsmazcim.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163sbsljpce.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ttmrzxxl.html


<!-- 参考信息 -->