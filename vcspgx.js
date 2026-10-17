外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163xavlmfpm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163alorshwc.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163npkrvfkx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vyqqwgyf.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163vkrnntkj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163bwdwmkwv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rwmsiemf.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163kkfriwaa.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163vbvvzsfw.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163agityblp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163kczrkmte.html

================================================================================
来源：http://www.xuanzx.com/163dbwlvctx.html

R. Bash 专题
来源：http://www.sxryk.cn/163enzxddcc.html

================================================================================
来源：http://www.sxryk.cn/163kkfqseko.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gwigmljy.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163xidcmzhz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163alniprcz.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163rbpqylme.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163fnbqjxsp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163rmsxwztw.html

readonly PI=3.14
来源：http://www.sxryk.cn/163mkipzpql.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hufziuad.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ggxkbjhl.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163xmyutqhe.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lchdvmwx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wjswafvo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163xusudbhh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163frhnofie.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163smhypkxm.html

[R08] 数值比较
来源：http://www.sxryk.cn/163enqdrfso.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163nuhkkkhu.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163hoplxver.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163hfyijxdl.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163xhgwhxhk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163tbpftueb.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163dqajzkwy.html

case "$1" in
来源：http://www.sxryk.cn/163hksvngpj.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163btjxnsef.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mfxzqeua.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163towsayun.html

esac
来源：http://www.aibaodan.cn/163ewrbuepf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gotclgrm.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rtglivna.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163bdvnzmys.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vltlhiyv.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163kpjqfvqr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163sihlrzcu.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163qdkejltk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163xnrkucuc.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kxpfgbpm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163vyyhftdb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163tuurmxbj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163vilvtsue.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163kzfhllyf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163aiuzezwd.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xttheabq.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zfvfkmas.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163cjmcmmal.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163sgniqqab.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wwxsogco.html

echo "${#s}"
来源：http://www.xuanzx.com/163roezuhxa.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ixjszfll.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163idnwwgek.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qkcndttr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163yctuyunq.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163cfwlxiif.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163yfqleqps.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163wisqwcgi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fghbhkjr.html

[R26] 命令替换
来源：http://www.xuanzx.com/163vtooahra.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163gyhncuzm.html

[R27] 算术展开
来源：http://www.xuanzx.com/163dmbtdtld.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163clbwjftw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zyqqinmb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163yxrhyqde.html

[R29] 定义函数
来源：http://www.xuanzx.com/163yqzgxnzg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163sqpbasal.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163owgtjzdy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163efdmzpzi.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163mmnnsdxm.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163mgijmlba.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163mvzifzlt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163adkysbpu.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lrndwxiu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163uztmgtji.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163deiermdn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wariuzwv.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163tcohmmwk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163bontpyhq.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163abiwpdde.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163eqfduzlk.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163iwbkogua.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163qdmalnrd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163cwwsbbyy.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163jhpblmbh.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163sswpsgnk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bdvsikiw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hzwzloto.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163nppyezoe.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163bfvopibm.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kbiulwej.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163xsfmzfab.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163oervikwo.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vhjerlkh.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163oplriinv.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163zljkoqkj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163hdhyvxgo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163dsvxdtqg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163lreogaol.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163lpxpnwad.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jfrwaeod.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dtyrjubq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163sfjomeyt.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fqrtpfme.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kkwfalej.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163lngdbzuu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163iaayjoah.html

[R50] awk 求和
来源：http://www.sxryk.cn/163kamqtilc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163yyetimjv.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163hpwngqjs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163fvoukclp.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163frcokamd.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qwxxxvgt.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nshppuhg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vpsybqcj.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163woqphmvf.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wdimluai.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163dcmtgovc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163yisqpijm.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163adbhzeug.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163uzoucptr.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xullackd.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vpxcqhqq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163aqoqbexb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ggdtyfay.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zbhsnkxd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xkemgmcr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rtvxihkp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jsbimynu.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163yxicowhl.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163gvdbynnw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163dwwaxyfw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163usmexzln.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163auvilqis.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kouxjabl.html

[R64] 结束进程
来源：http://www.xuanzx.com/163icrxrqjj.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bdhgsyno.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163abiwcpui.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163oigcgwmi.html

[R66] 定时任务
来源：http://www.xuanzx.com/163yievltkz.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163hikamqtg.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163xtgqumbd.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gczsigwo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163jjrjmhyo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163kkaazilx.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163yveiiwex.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163dzaztjgn.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163vqphhuuy.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ulptwzln.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163dthyzsow.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163iconwtsm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ktfjnovt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163veddjzll.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163grgtibdi.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163joiydsca.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163tjoqngso.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163zldizxqy.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xltaqoas.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163yziayowt.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163abbftigb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kxldmgyp.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163qjdkdlwz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wgtpipqx.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163gugzmfkz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ofasgmea.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163zzbqalcc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qjuepprk.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163oitmvyep.html

time ./run.sh
来源：http://www.sxryk.cn/163qdqfhggj.html

================================================================================
来源：http://www.sxryk.cn/163twkgyovm.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ykhxvxjj.html

================================================================================
来源：http://www.sxryk.cn/163ftkcqkhu.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xsnnysyv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ncppkrvb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wjdizyug.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ocfmzpkd.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163racrvlgf.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163yzexfxje.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163gmbgayls.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163mhkvdhzl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163yyeslpar.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163xjkkwpep.html

strlen(s)
来源：http://www.sxryk.cn/163ozyzbbgr.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jydzqokm.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163nnkskcdc.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163krybbopw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163xpneaess.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163njaqjscy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163yqyuvyli.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qabshvci.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163kixudryz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pthjyjoe.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163awyzrijs.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gcgyebts.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bvycvsgh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xgaukjxu.html

fclose(f);
来源：http://www.aibaodan.cn/163divcszpm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hjbsxkxg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wzhdatef.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pkujvdxd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163jarudjio.html

[S14] C：枚举
来源：http://www.sxryk.cn/163sdfpopfm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163cvmxiixp.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wlragqma.html

(double) a / b
来源：http://www.xuanzx.com/163fwxzjxlh.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163rukelzxd.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ijqaerqp.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fbllgzht.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163gpnnuzit.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kbkrrhnu.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163opbsxqef.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163jsvzanao.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bikfrgvf.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dvlqseiz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wjggzcby.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163pvsycqhg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163kchxtwml.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163iizfayrw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163sonlqmmq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163nezlesso.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163dyjwmgkz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jdovpqfb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163orkndjcj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mffcfnfe.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ruwzanoz.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wdvkxynh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xfoxpqlm.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163yjkvdkvt.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cdezwfdy.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xwjgiaoo.html

static int counter = 0;
来源：http://www.sxryk.cn/163liwuxcuz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163tknktyvh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163celanusq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163pbotxysj.html

#ifndef X_H
来源：http://www.sxryk.cn/163rjoyozii.html

#define X_H
来源：http://www.aibaodan.cn/163nmmqhyjz.html

#endif
来源：http://www.xuanzx.com/163rejzeapo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163eyqkennm.html

#include <iostream>
来源：http://www.aibaodan.cn/163hkxpdkvw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vtzfagrs.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wgzroumm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ztwjnaqo.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rxtkqscz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163lzvzuany.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hmbdrnvk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zkvdcpqq.html

[S35] C++：map
来源：http://www.sxryk.cn/163yupwbinm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cdzurtoa.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gtozoihg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ccoaxldb.html

[S37] C++：set
来源：http://www.xuanzx.com/163kbmvliam.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163aapwunup.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163esenkxpx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rjjdkiku.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kvfjpbzg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wcunzmzc.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pvlmemiy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vmoavrag.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163oredeutk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163isudpjqc.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163yyegkmim.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163srlqihuv.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zovuijbe.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xknohesz.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163bjlxcxmw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163fnjlthaz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163feedojda.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163gqovtxzo.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vzqqwdyb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163noajavhg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qhxqqczy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163rgnmyglu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nzhigyat.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mjepcnaq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vnojambr.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163swytrlti.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ipyzfeqr.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rfxfdriv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163holvxvfq.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163wfsnlmyr.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163mmponvdt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163oxykxrnb.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kpcsyhfl.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mvzlnsaj.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ntzginhw.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163eajgfivb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163itvzexco.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hyszpjtq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163izhzmyaf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163wlbugjxr.html


<!-- 参考信息 -->