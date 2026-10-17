外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zkufxpms.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163uidmxluj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163kgdlcboq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163kgnytapq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lzonamxp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163njzkplkr.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163oxwxgill.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163bnyaabkx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163auafarpb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163lxomoyhy.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vyneveyc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163sqbcedhk.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163orutfyxw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ujeakgky.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163nznwydcu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gtsmopcj.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163lgxrosvk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163uyiabacr.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163gqhdhnus.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163smlhzxuy.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163darqicil.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163tclcnmqu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163devmkaec.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163nrdcsqlq.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163tnxnrqdz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163yxiwdpto.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163mkqtzxse.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163nwysbhjp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163bnofebzf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163sjilbxfo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163kfoyyfmt.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qgndgujq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ycixcsbx.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163nldryjtj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163bhuuexpy.html

================================================================================
来源：http://www.xuanzx.com/163xcyazvcd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163jvaiptej.html

================================================================================
来源：http://www.xuanzx.com/163gvtqkwag.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163odqozlpb.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hsgvpqrb.html

set -euo pipefail
来源：http://www.aibaodan.cn/163cgmzzpzv.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163pstdltce.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ldfkaftv.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ygpourtc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zhhhland.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kfvsqgcq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ggapqxhj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163culldfml.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163cjthwgmb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163houjjyrl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kaczlrfy.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163rxgcuuxq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tzvpptku.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wqafqgpw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163tmisihbn.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163mqhqojty.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163agjmkahx.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163aybptgiw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163gzpkvnhe.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ltmabfnf.html

case "$1" in
来源：http://www.sxryk.cn/163ejagxrwu.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fwuazhmd.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163jtxfyold.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163eumybakg.html

esac
来源：http://www.sxryk.cn/163vsnthxna.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163azcxpnoi.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ijbxzztc.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fbvrvupz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163oeopvqgd.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xropnxcj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qjjqubbi.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163fcalbwqi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163yrhpknjd.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163jxscujav.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163tpuoxrbh.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163bpdbjmiv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ewpdxexq.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163pvphpude.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163cqvbpkst.html

[R19] 数组长度
来源：http://www.sxryk.cn/163gurrsycm.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163obuinjhi.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hltewcnu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gzcmohmh.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163tbulylvr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163zlsrrpnt.html

[R22] 截取子串
来源：http://www.xuanzx.com/163yekjozah.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jubjaggs.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163umyajmdd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163bppslcml.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163pnvdyxrl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163azejbhis.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163inqdwifa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163pirzzxbp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163gmjxvvld.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163llvaqzwe.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163tcosrrmq.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163nzzzpgmb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163rswybucw.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163thwdvqwn.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xwixphyf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163avwynjok.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163tuzhxbvl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ohhbzmnv.html

[R31] 局部变量
来源：http://www.sxryk.cn/163fellhzvm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163cfqhkicz.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qvnwvxyo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ewvfxoot.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nslwknim.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163egoaghag.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163opoyhnka.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gmdguopv.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bseipyoq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163zlbsbkzl.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163urwppzhh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163mjdqyiqz.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rqnwzemb.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xhugyvmc.html

[R38] 管道串联
来源：http://www.sxryk.cn/163gflrefzb.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163puyskull.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vlflfayl.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163iiwhovew.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163hebijuwf.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163azdknoqf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163axrxuwyd.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163jevzybtc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163gqpnlagn.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163somsmhli.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163xdbaoseo.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ysjjoqov.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163tbkxvbzd.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163svcahrcs.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hfvskfdp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163yxendqsy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163sgpdfbsa.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vuatqygr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qwrnjikd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163rwawksnu.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163gucpvaix.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163qggbobdx.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163cnsljpxu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dtjzflfo.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ougadkvc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163akjtlvir.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163aoxwybec.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163iugcpmwa.html

[R52] 统计行数
来源：http://www.sxryk.cn/163bviggfxb.html

wc -l a.txt
来源：http://www.sxryk.cn/163zydaareq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ggugrzsm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163rzejbydo.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163bznhbnwb.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163mnxkqmvq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163otssqlnj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qdscmfgr.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163imvmlbeq.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kkoagypt.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163tiakfxyt.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dgztvowu.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bnqspbgk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ejvsbevm.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163sfwcgqms.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wrwiinvy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163uxnmzceh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fucnfzty.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163aaykgqfl.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ljrszbta.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163oxicvtvf.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163pjtqcesf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163vygtpezc.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163nhunirqm.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163bxemaqnc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163cetlmfsq.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163nxsbrhsn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163nucovxcc.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zfssezat.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xcxxeoqm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163degqgufn.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163lilveuom.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wezctcwd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163npkjgmcw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163bsfwxqml.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mawngoqi.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163emouwnpt.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tjcwthwc.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163axxmkeuo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163htqysmoo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163iuxhqgea.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163hpajycws.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163sdzmokqf.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163wceqxryw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163hiakgapv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vkppvofk.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163vkcizoaq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wgplnatw.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rvzpqsex.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qcbjmwsw.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163yotuqtcq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163qqxxwyns.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163fgdqyseb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nltvxuwu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163apfvnmcn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nqevmanh.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163lyoeeknw.html

time ./run.sh
来源：http://www.aibaodan.cn/163dedotude.html

================================================================================
来源：http://www.aibaodan.cn/163ndwhbgjs.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163zpqoiana.html

================================================================================
来源：http://www.sxryk.cn/163lewbthie.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163jjgpmgzv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163sbhrzleo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163aovtekua.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xeftynnk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163nuzdkefs.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163unydxnbc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xvbmpxhk.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163dmqqoccy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163qpjqairp.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163odlljqjs.html

strlen(s)
来源：http://www.xuanzx.com/163ywplbsww.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zkgztlpq.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163dqdwobcw.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jnbyusju.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dcptozsm.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wyxtaabl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ghftlqwv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mdenjdve.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163fcmtsblv.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ftlzyqtf.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qkxnalvr.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163vvzszztc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163asbiraht.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163exdyazfq.html

fclose(f);
来源：http://www.aibaodan.cn/163dohxlnze.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hoohagvj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163nolztexc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163hharshyk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163qvrysvjv.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163snettlal.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zuxnhtnb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xwbjqykm.html

(double) a / b
来源：http://www.xuanzx.com/163kstvwvba.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163iicoaxrq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jfyvvpel.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163vexowppq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rbhaopbs.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163jbzxywki.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yrvfvysg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163hvveprwv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163aunpmwly.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fbfdjatf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qtjxqnvg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163plvzuqvq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lhzbugxe.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163aifkjvjg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tfhbxldj.html

[S23] C：随机数
来源：http://www.sxryk.cn/163otfclfoi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kzollzqe.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163etherykf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163rhvlzmpt.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mtuscfna.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fjuhgqdn.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wenknwwa.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163yaeffisx.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xyeviats.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vlgzisle.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fzeeccwx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163jyxuzuxz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lcthxypy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163spmlqnmz.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163qwieikcf.html

#ifndef X_H
来源：http://www.sxryk.cn/163nzofwwfw.html

#define X_H
来源：http://www.xuanzx.com/163heufknwd.html

#endif
来源：http://www.aibaodan.cn/163craugrmu.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zronidhg.html

#include <iostream>
来源：http://www.aibaodan.cn/163ogfjuzqc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163riukkbob.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wlawctxg.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163loxhjxsb.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ctbmhgvt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163afjwxlav.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163zwmybqbd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163wcvtvhgb.html

[S35] C++：map
来源：http://www.xuanzx.com/163fpglhrob.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gqdtzxcc.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163zkmqclga.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ecvhzfnc.html

[S37] C++：set
来源：http://www.xuanzx.com/163fqpgfioe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163wcvlrprm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163gscawxce.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163smawqudo.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163nlilhnth.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163jyhgsryr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qddqdozm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163dtqyduby.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qzefyhdc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163oxlhztkz.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163gtdqhdux.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qrmbqnsu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163lbgedvgs.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pelnykel.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163gschwjym.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ogxtqlpf.html


<!-- 参考信息 -->