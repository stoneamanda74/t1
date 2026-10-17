外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163guspxaiu.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163rvopbezi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163xrfpksod.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jhmdmqei.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jqbncgpg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qwpfhjnk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163xznnrleq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163onqzcvri.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163uapnsmbu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jszylsxg.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163pudwopev.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163gqpeukqg.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163aafrpfvl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kdnqadtg.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163bljkssmf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163oansrwxd.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163lmgzvoer.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163bqieggqf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163dieahjdi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163rlknvgwu.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163exzxhoxo.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163xmtmwthy.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163crzeehnx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163sxfztngr.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163lghlsfof.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163uwwggefp.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wkyjdxcw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163yawjrahc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163tzdjqxso.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mstrbghn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163wvjdjxra.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xtraziko.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ftterhgq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163iextgkvb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163dakwkkqw.html

================================================================================
来源：http://www.xuanzx.com/163xkigfxii.html

R. Bash 专题
来源：http://www.xuanzx.com/163qvvlnhbl.html

================================================================================
来源：http://www.sxryk.cn/163aweccmle.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163pladhsnw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163tzennzhi.html

set -euo pipefail
来源：http://www.sxryk.cn/163wphyzcad.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qxxrvxtz.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163kebszylz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vucwexio.html

readonly PI=3.14
来源：http://www.sxryk.cn/163stwblmom.html

[R04] 位置参数
来源：http://www.sxryk.cn/163aejhcjmt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163biaiuafp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163zwqgdbjk.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mcujtfko.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dtiquibz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163yeihzlec.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163nitulcxw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163exbhxrcf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tvejjcuu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163fxgbdaic.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163rnhyfzhd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ujpidrsd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163vuptqjvu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xcsmytep.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ukpeqexn.html

case "$1" in
来源：http://www.aibaodan.cn/163jjtlwjml.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163hdzljcqk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163wbnbqcaa.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163hnidrpyy.html

esac
来源：http://www.xuanzx.com/163spzrklui.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dohuhprv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163exgbissx.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163hudwakqu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jsmoibet.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163zotxrqxa.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zvfwmfqt.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163vemvbqty.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163doootfqj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163uisbymlx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163sfaftack.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xywjmreg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163cdntrmnv.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163czkjfseo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ypjokcpq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ehqzikts.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163oezpqnhw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163oabgealy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163agnfgkzo.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jpansegn.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gyozhiid.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xktqrmfk.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163hkmfwbqc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163lnaosgqf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163iuryxnuz.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163guxyrtye.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163mokygryr.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163aqegpmas.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163gcpampzz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163cxmzlzjy.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163zbpwwsmv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163alvpehyw.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163wunjlrkn.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163xhltdrrq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163aporqona.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163grjjatrw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163exvunjqp.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163nlapndwi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163oxwavyvr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163bxjxhqrv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163foezhnte.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163hpireryu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rinetlvs.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163sjqbexgf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ojjtoesu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vzbzjqto.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yaexzlte.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163swtdurzb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163icjwnltv.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163cmlnzdkm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ruksduub.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vkkheysi.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fcgfbrus.html

[R38] 管道串联
来源：http://www.xuanzx.com/163pggcmwbk.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mljianqq.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lkuwsktb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163udzlmdfa.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163rhlyksbt.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163wogtptsr.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163acdcptqo.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163gznuznei.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163eyhihkxy.html

wc -l < a.txt
来源：http://www.sxryk.cn/163bchemgle.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163muwsqrud.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ribvzaol.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ehsjrmws.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dgpzfvad.html

[R45] 批量删除
来源：http://www.sxryk.cn/163abffdzpg.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kxgrpaww.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163qhgekyys.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163pxvmnrql.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163adutgfoz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lfxvmmym.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tltfbxxy.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163coumbavy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163usfziuui.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163yztvabru.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163iqlgqrmt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163sctkdkgk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hdxoiibo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163yqwelmeh.html

[R52] 统计行数
来源：http://www.sxryk.cn/163hslisdme.html

wc -l a.txt
来源：http://www.xuanzx.com/163uqonqcjz.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vzmrptqk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163yelorkya.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163fdaiexvz.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163uvvnicgp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163wiwxerfw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163yvdyvcku.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kifrddud.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163zboexyuv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xzncruwx.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163yxzampyj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163wgsolrww.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163wqdqyosb.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ntxfoyti.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ozzbbkpg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dmkdlhbz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ncffwvml.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163sloszxvn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nsltuzic.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zfkfyzqs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163kojchobe.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163pbowghao.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163szstvcoy.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qjwqkndi.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163eswxnyld.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dxxeiqvv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dunermkv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163uufhmzcj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tjryjbaf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bohxlcbw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163qocuounv.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ettvjxnq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163nqdkfmun.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qtkphydu.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163cypfiffs.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hlwhkdyn.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163wycjlxpt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163iuimuuid.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ooxjayfo.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fkmptxei.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lbkcorew.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163yotrzvju.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163wjzanvix.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zmlzzwjc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163dotycbiv.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163kmbytiji.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163egheiqqv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163uihfqiut.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yrozwpin.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163dhgylvxc.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163wjtbilzj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vygkuioi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163xljbvjbx.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163hmfhhtcw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163adfzghqn.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nsenogcc.html

time ./run.sh
来源：http://www.sxryk.cn/163hgolklvr.html

================================================================================
来源：http://www.xuanzx.com/163yqtekpww.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163bsznzrtc.html

================================================================================
来源：http://www.xuanzx.com/163ycyalwtp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wkkunsmr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163dnryfack.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163isogcdhj.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163idhfbbwp.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163lqvushpv.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ubqrrafi.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qfeyttyf.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xfjxunzp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163efyzyvfz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kvuprynp.html

strlen(s)
来源：http://www.xuanzx.com/163isznwaev.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qdqdrzhs.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163blkhdmbi.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ihfifsgu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163snixnccs.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163tuyychqm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bhunorja.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163avsnlseu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163awbhqvas.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163yrvrtkew.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163weebwidp.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zualdfrt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163owbobpob.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dvwtlokg.html

fclose(f);
来源：http://www.sxryk.cn/163cbxdfitk.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163anyaetpg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163bdfdbwyg.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163njvcenbr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163avatshin.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rpfrlvhl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ylzmdjka.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ghurkmxv.html

(double) a / b
来源：http://www.xuanzx.com/163vwlybepw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163fognnfcu.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163lsnxwmrf.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163idxjgede.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jzqquzjb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163dimubtua.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163sgfryvgg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ilitgbpw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gajgtxrq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163mbmisyha.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bteywiws.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163umfabkcf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ectcnnxs.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163mzdjxmyk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163yfsqwkxf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163nfryjttc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163caanoddv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ipppxtsx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vsacksvo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163yesfwflg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zppnfjxj.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163bdaaozsx.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163vsouovcy.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xzvoslrd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ncsdeebu.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ivehatmb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163qiaxalhn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wkglpbjk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163naosljnp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mxttamet.html

#ifndef X_H
来源：http://www.xuanzx.com/163zmadxktb.html

#define X_H
来源：http://www.sxryk.cn/163qnwlhoyy.html

#endif
来源：http://www.sxryk.cn/163iuewlisj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163eixauton.html

#include <iostream>
来源：http://www.aibaodan.cn/163sxmixgnv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163qpusmlyj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jvogvcxl.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163vrbuiyrm.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mbvtyado.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163nmkwgdom.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163oaipeqfe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vlaghccg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163yrxcqwwh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dckhowku.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xtcdvzkd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zsqzgans.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vgyesziz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163juefncmw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gqlgpypw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163niumwxex.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163jswbiznz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vtdftlfm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zcotmadi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163okrbblvb.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163nznehfsn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163gxakmgif.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163uyhkzepc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163yrudjxei.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mqluoskf.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163xlltjsaz.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ufsiukul.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163cshgtzha.html


<!-- 参考信息 -->