外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bcpnbbwp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163gasockas.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163jmashfzg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163mgvprjdu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163gbldzgkt.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163xwspaapt.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jqwanyne.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163uzhuewdx.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kmrbmahg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163relvkzfz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hlwqyyxd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163djpfadpg.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163mwjjxdab.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kdjbjatv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ezykofaq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163otsxogck.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ozayyhtr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xkxqytou.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dswtzbgg.html

================================================================================
来源：http://www.aibaodan.cn/163pzrzikkw.html

R. Bash 专题
来源：http://www.xuanzx.com/163bmmjimox.html

================================================================================
来源：http://www.aibaodan.cn/163gpgpxdqb.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wnxmguwh.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qadwixnb.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ndawmoup.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163iaujftdz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ikqgrouz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163lkjyejse.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163dngfilze.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ywruyumc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163dvymgbxg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fjjcmbtq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163awqpryvl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wkddpezq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xwonbruq.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vjdhyxhb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hnbiywtf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163uecxvyos.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163vutvdapb.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163arzrsyiv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vejlmyni.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ueolozbt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163awyycfnq.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163knbrqshi.html

case "$1" in
来源：http://www.sxryk.cn/163gbqsdwpb.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163evuoqcov.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ajgnysww.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163drhntceo.html

esac
来源：http://www.aibaodan.cn/163bnyqnnme.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163hsrfoefc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rpqfwwww.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163npiwjvjd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163cdiflgvo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163blcfgvqp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163udpkmuqb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wnkpcfqp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163nnkvxwto.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163noiundog.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163sjkdzzcb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163yqvxjudd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163mmfeetvg.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163nrsjnzlf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qvtxnovw.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163bjftpupl.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163cwacsmxd.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lbksznow.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163wsndagzu.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hgwlvplf.html

echo "${#s}"
来源：http://www.sxryk.cn/163lxqngakk.html

[R22] 截取子串
来源：http://www.sxryk.cn/163otpodock.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163grpdomrj.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163sdatsmhu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163mweykvpm.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163iusrvdgr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163clnswaln.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163hplqytml.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rbtgxagr.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dsyfjanf.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vnzzcrao.html

[R27] 算术展开
来源：http://www.sxryk.cn/163nyxmrjjy.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163yjbzegdt.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163tqgqcljj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163szetolmp.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vanzgynp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163oadpelry.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163mwbfyclp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163tordpqsk.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163zmddysrq.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163fogaxbxo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bcevjutt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163civixktd.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lcubmifn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ccjdzwxh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163obnshmhk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jpbkohnv.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163nxnijzar.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163vhtghlax.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wqsmgbxc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163seosoxnm.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163esxdtwcq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163awvgtxbf.html

[R38] 管道串联
来源：http://www.xuanzx.com/163kbfmkjlk.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163nrqplzrj.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xzypwamw.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bijrorop.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163qwoqweug.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163vprtdsje.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163pwpmvbkc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ijczipse.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163xlabgprp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163uufhgfsh.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163pwqhecha.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ykoedmus.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163tcwrjzej.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ovtzwwbs.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zzgvoboj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ncleuamw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vjzapyfe.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ffbphswx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ryexesmj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163pbbfjzxj.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163pdmhcdyx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163puvwyyra.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jpuwrhwu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163nrgvszwm.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163yxcmxzmt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wztmlqzf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163sulyattz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163zsgobrti.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ffhhiuuy.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fezkvwdx.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fqbxvavw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163dhxpalpi.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163imtyuifp.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163dixospjq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ldgzmgpe.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163fztedhsj.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rhitjmxv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ztbbropt.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tzidcjbc.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hmgejcjd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ngahbttp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163qyjapjzr.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163sepnjkkl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kybrzhch.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163esdibyyq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163urqecnvg.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163oywijwmc.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ubtponfx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163maueaagj.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163panjtfum.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163uajelbia.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rjftckty.html

[R64] 结束进程
来源：http://www.sxryk.cn/163barojmrh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fjwmbykz.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163musdbhtt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gsdbrjkx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ywnxbfxk.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xtwjekss.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zkcaxlse.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163obwyobjd.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163lifaswym.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163poqjvraq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vhlaziqp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163nkawyfdy.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mkzlpivb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fnbeaqmt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163adwdkzoj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163zrmbzgry.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bvrennpg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163cpeqctxw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qvirvdez.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163zwfwhljt.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163bcpxgenp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163zoxwdrhc.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163wcpgiunp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pmsleosd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ryjwutmm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mfcnmdjm.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bkutofxz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163mvsezqhc.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163fxigyfzr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163njgafcnl.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163tddrdfqv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163imhkjmza.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163fqjrrlnk.html

time ./run.sh
来源：http://www.sxryk.cn/163xvplcevr.html

================================================================================
来源：http://www.sxryk.cn/163wmrjmlxc.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ftnxpqyb.html

================================================================================
来源：http://www.xuanzx.com/163yjvqctrd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ghinjmhy.html

#include <stdio.h>
来源：http://www.sxryk.cn/163rkeriioo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163myslmecg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163oevloaqo.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163pknynvye.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163jtjwjhcn.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163yoybtkmz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gmckvqvw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163psdgnist.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163vsthxxun.html

strlen(s)
来源：http://www.sxryk.cn/163xduelwlb.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163aiflneug.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163rhdzzqtp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163irtksdtt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163cpeunijl.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163bwzfhput.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163dflsvxgd.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163kspatcth.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vaqcyleu.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ujmnebgm.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163jqcyotdo.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163tycqrzac.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ntgxcodn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jlolnvzz.html

fclose(f);
来源：http://www.sxryk.cn/163uongegrt.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163edjkkyab.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163yztnkbgz.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163zreariwq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163glgcmwow.html

[S14] C：枚举
来源：http://www.sxryk.cn/163afmxnhie.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163awwrgrtc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xpsrxmcu.html

(double) a / b
来源：http://www.aibaodan.cn/163gpoksokt.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nphmpjzo.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163uvztvesq.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163tawuyzgw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wgitlvur.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ojexrdbe.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nzmjouve.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163cqgopbrd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163abofjqiz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ggagtgja.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jqorwkjc.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ygtjaray.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163apbqbumh.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163alfpcezr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163oojsvbek.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vjwwjsws.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rsbfkznc.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xweqbemg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163yzllqhsu.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163yldxesuj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ewmfccsi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wyszlxoi.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163devgyvlf.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jdlkbsrv.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163wuyqycyt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163pbtbilfm.html

static int counter = 0;
来源：http://www.aibaodan.cn/163kiassgwa.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163bnvzkwjw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ruxubfng.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cqanmthv.html

#ifndef X_H
来源：http://www.xuanzx.com/163jwlkaakd.html

#define X_H
来源：http://www.aibaodan.cn/163whxpemsd.html

#endif
来源：http://www.aibaodan.cn/163kvjkyhwp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163flvbimca.html

#include <iostream>
来源：http://www.xuanzx.com/163jwxcsgmv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163tewocrfz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ccwghvor.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163aawnonxc.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163uchxyqtc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163zmwybjti.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hmoncohn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163wtlxhvre.html

[S35] C++：map
来源：http://www.xuanzx.com/163ldovaikg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qtbqdszq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163mxxupgzm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bmhgsalg.html

[S37] C++：set
来源：http://www.sxryk.cn/163bdbjkouu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tyrfcdkk.html

[S38] C++：排序
来源：http://www.xuanzx.com/163aphdyrxn.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ybxwbnuh.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163samprzqd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pypceubt.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jzjsxvcc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163cqrafsye.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cfwekous.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163tobneorf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163pfbhgyiw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163rjsxftth.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163agqslphr.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163wzoqafkf.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fdkclbjd.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163etddhqmw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xykcqwkh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163dottmsqy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163rusydvvt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163eorkgkac.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163uiqleqyq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163vqwxooso.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163geqppicc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163fqlkmwhh.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163jqompeln.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163vtlccskd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163njwxlete.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nwfryqod.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163xawuvbyk.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163nvvjnyzp.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ekymzenm.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xqdwkdnc.html


<!-- 参考信息 -->