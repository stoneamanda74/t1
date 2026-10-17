外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163dsdqfivc.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163gzsfdkvs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163kpafvwna.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163knfxjkuo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163rpwmuwbu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jiltmkza.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163biwwiboq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hcorelcx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163kzzijjiu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163oeubwmzo.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nrxzbccv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ufpjtpcp.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bnmlfgzp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163sfhfojng.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vvsnnzue.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zsubghje.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ucxpgwci.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ytnjwqra.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zeuamqsx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163rzegpokx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163wbxesamb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mhuysliy.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jjakhqmi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lhmxfetm.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163omsoiwma.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163dhpsuwvh.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163dqphpxit.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163sdhpgamg.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163dvfrvotq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hwzqcyeo.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163segexjof.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qbtdnjta.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hzjndlel.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ynogjqyk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163pumrbwpw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163pqyskwag.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kaahuwru.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163sftxropf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xbnighph.html

================================================================================
来源：http://www.sxryk.cn/163shnistdz.html

R. Bash 专题
来源：http://www.sxryk.cn/163kvwijopw.html

================================================================================
来源：http://www.aibaodan.cn/163hnungjay.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ayiavxug.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bwcutzkc.html

set -euo pipefail
来源：http://www.aibaodan.cn/163wtmgfcng.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163mgazsihc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163lpxbpopv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jaluyfke.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163lyvaoimm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163zwzzaaqg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163hghhcjlp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163mafnvndn.html

name="${1:-default}"
来源：http://www.xuanzx.com/163bumuodrn.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163jmbcawib.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163phbuewkh.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163tidwaixq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163lcsaeutf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163gwettpzz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163nyucmtvq.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163evextxzf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ceqzaoyb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163bsixlkuy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163uejropmq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163hqllhjmh.html

case "$1" in
来源：http://www.sxryk.cn/163bkgetvgy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ylimxaox.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ejjttjxa.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163bjupbrxg.html

esac
来源：http://www.sxryk.cn/163bnbbqeis.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mrpvgtll.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ewwuydvq.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gfporzuo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gubtmkaj.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cuaurgrf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163pbkbainh.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163xawxdeqi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163kqbbbpjh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163cdshdojm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163resqalub.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lwigtzls.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163erznzniv.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163wxgplclr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163nvtqdzrl.html

[R19] 数组长度
来源：http://www.sxryk.cn/163zdklunpd.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163hbecijkt.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163rfyntmzr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163xefcpcsd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163bhwyhqll.html

echo "${#s}"
来源：http://www.aibaodan.cn/163vlgydmht.html

[R22] 截取子串
来源：http://www.xuanzx.com/163lhjypbio.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163nefaegoj.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163vaajaodd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jdouunyh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163uvyjuaym.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vxlaxmrs.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163yyevokfg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rlnfeaim.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hwxkrlak.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lzsssvtq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163wikxbbda.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mssxctff.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163danwxbil.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163eahrqgil.html

[R29] 定义函数
来源：http://www.sxryk.cn/163yjmpnpbs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qtadopra.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163sicwmstg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xbxspqcx.html

[R31] 局部变量
来源：http://www.xuanzx.com/163dleglhiv.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ecbjknba.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rkfjoccj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163vutyztul.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163yrjnxhac.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163fsnmxfgc.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ibabmirs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163strwtbta.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ixrrddly.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bsicomtm.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163coxpokvt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xpylhdty.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jxmkqeak.html

files=$(ls -1)
来源：http://www.sxryk.cn/163hwrumkln.html

[R38] 管道串联
来源：http://www.xuanzx.com/163nfbbauot.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163kvphkyfs.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ijhfptmr.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163irvpbvho.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vwhtaygc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163txmhjmph.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163uoimfwkz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kuukyudd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hpyjrsyv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vfqnyksg.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163bxycxmnf.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163rfjypzug.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163srbrmoge.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vbmiywuy.html

[R45] 批量删除
来源：http://www.xuanzx.com/163gndlagpx.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163gzsxkhsd.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163nyryfqob.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qorezqso.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ktxvqszs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163bmfmejsm.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hpiqmxtz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163oavxlixg.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ysnbblzc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163mbsadljw.html

[R50] awk 求和
来源：http://www.sxryk.cn/163oxioyoha.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163iffladbp.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163gpletvik.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163quufdack.html

[R52] 统计行数
来源：http://www.xuanzx.com/163teevmhit.html

wc -l a.txt
来源：http://www.aibaodan.cn/163rzbthrrf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163piptgbep.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cumqoohj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163aixqmhmp.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163azetpkoj.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163mgqaevls.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163yzulrkoi.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hadrodly.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163wuialjxh.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ovarekuo.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ayaogizt.html

[R58] 下载文件
来源：http://www.sxryk.cn/163mleupvvq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hximelpg.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163fxhpltuk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163xvcfvrub.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163drxiakqx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163cuomxbia.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163jftgfinh.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163yyuzgryn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163weyojggz.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tsvmymot.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163infmsalj.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163exdnvgll.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rcojcbap.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vifxrusi.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163jmdvqzwa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163mzrexmjz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qusulpkg.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qddvapyh.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163uppesvij.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wpgumujr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163kstlbvhh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uomozchl.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163aezyazea.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163hreoojqr.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163npzkiejg.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163bqjvqxno.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163gsrwhzwm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163acixxgxl.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dvsmjsud.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163njctdswd.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163alrulhmn.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ocozupfh.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bxdpceev.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hqlzhxrd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163fsdgobql.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163uurrgoxp.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163wnnsfkzm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163sdiemciu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163yxxfjcbl.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163cktsyzcj.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ejneuaao.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nwyxrrwq.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163swtzchmp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163voepvzyp.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163mmthllnt.html

time ./run.sh
来源：http://www.sxryk.cn/163svjdsvbj.html

================================================================================
来源：http://www.aibaodan.cn/163fzaoorhy.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ijpcfqjw.html

================================================================================
来源：http://www.xuanzx.com/163pjrehhfd.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163fgeiypep.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tvltxhuq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163yauqmeng.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ohvwgole.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163gbcrjgbc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163sceywarf.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163shpjdtsd.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163afjhdvme.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163umdahpqz.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vzjnahdb.html

strlen(s)
来源：http://www.aibaodan.cn/163umugzqpk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xqxwfrqh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ljvwsxam.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163iolwersj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163tvvykkgd.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163vsovsxuo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qkqcufvz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jchqsmgl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rzqdelfk.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qfntzfzs.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ovkhxwjz.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ewisuync.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163lkcyvwio.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xujljqvs.html

fclose(f);
来源：http://www.aibaodan.cn/163wzranudg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ahrnmbmr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163oilngtvj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163rsmvkiiz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ubkkfgmj.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ntciqxzd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163sfglsnso.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163tygmethd.html

(double) a / b
来源：http://www.sxryk.cn/163gzddmyec.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163qbuuxnnx.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ffcvrvtv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kscjvhjg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ytdnjuum.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163nnauevfq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163szbfwles.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163pcfnpbrq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nlxxzzuy.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163jeticuzd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163lfuoxzvf.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ylnzjiym.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163udigbexy.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163nchlwpji.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163fzktrjjv.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yfuitjmk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ksrllajr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xooopcsg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163phmnkezo.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163nfcdtdiq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ufrcvncm.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kvvqshhr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163fdfuouau.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fepbuonj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jhfqegvx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zdtvkbna.html

static int counter = 0;
来源：http://www.xuanzx.com/163xjjtwcbs.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wzjpsnuk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vzhfglnh.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163sllkvgqn.html

#ifndef X_H
来源：http://www.sxryk.cn/163cxpcsshw.html

#define X_H
来源：http://www.aibaodan.cn/163etgmuxph.html

#endif
来源：http://www.sxryk.cn/163flmfjccv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163hlkyityp.html

#include <iostream>
来源：http://www.sxryk.cn/163adspsquu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163duxkurqm.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163tqvkozsa.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163snwovyfk.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vmjxkhnu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163pzvukiwj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163tuqmnpke.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163nxltnjpl.html

[S35] C++：map
来源：http://www.sxryk.cn/163pcwnjmql.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vjeoocdv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163jqflpkwa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jtkxawuj.html

[S37] C++：set
来源：http://www.sxryk.cn/163isweoapk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163axewguor.html

[S38] C++：排序
来源：http://www.sxryk.cn/163boppquoz.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163hkjoakbz.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163eerxqyee.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163jdlewawo.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163dmwcsmbj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163xtfmqbjn.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163yfwvvqby.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dhpfxbsv.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wtnqxejb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wyvwdaur.html


<!-- 参考信息 -->