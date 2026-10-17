外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ectoxbol.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163loltbvzn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163giwyqlmq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jzrgrrdk.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163lrjmfrjg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163fajynniz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163cpklotyp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jjrufdqh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163pgbuehne.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163oqecrkrw.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163avapycbj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163hkpknoqx.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163kpnwoghp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163crhupmls.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ngqazlan.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163pxjixdle.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qcoulkya.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163yhgtvqib.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163dcnvdthc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163epxwsnjl.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163omsgrkyo.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163caqcnkoq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163clwxdume.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rypboinq.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163thaqtzox.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163foohjpec.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163gsfaatbo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163jmewvain.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qqjycjlm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lyugzaye.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163kjduihvm.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163bgmirhdj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163zbdmzmic.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163qxuhejsu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ohvfaxqx.html

================================================================================
来源：http://www.aibaodan.cn/163kpzkntiv.html

R. Bash 专题
来源：http://www.sxryk.cn/163yqyczbto.html

================================================================================
来源：http://www.sxryk.cn/163xyzsryjb.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163kippcmlo.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163vcpievkf.html

set -euo pipefail
来源：http://www.xuanzx.com/163fpbyhzap.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163zhmculzi.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163gfdwkfql.html

[R03] 只读变量
来源：http://www.xuanzx.com/163umoafdtv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qnsqjyvj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163tdwycshq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163kfeytade.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163lslflwqt.html

name="${1:-default}"
来源：http://www.xuanzx.com/163jecfdgzt.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hdskmvwi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vqlvngqm.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163cviezepi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163dpgcwaco.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xozawhfr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163nvpltiuh.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163xsnxmlef.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gvicactz.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163awykuvhq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dqxkwrbs.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163fciwsmcv.html

case "$1" in
来源：http://www.aibaodan.cn/163hmrerxgm.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163hitybxkj.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163rnjiulhd.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163wpluwqfn.html

esac
来源：http://www.sxryk.cn/163ijyderui.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rptunqna.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163homtlhov.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163wvlwdank.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163twpuvanr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163nhoxdufh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163hkkqoxlc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xdsqgskn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ftrxnugj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ylpzlroi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163fqzohuzv.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163tpanhtxo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vytjdaty.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163husqmndz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ijtrmfaq.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dlqowsws.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ykuxgccb.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163rjuzrdgx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wclpujrq.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163pdleuqzy.html

echo "${#s}"
来源：http://www.xuanzx.com/163giiilfgk.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163uegpogiz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163yfpaabyz.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qllkyayw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jvglasfc.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163uijwhnwt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163uadztfnf.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163oufcghjg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163stuassdb.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fffyygmq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163sltyqhvj.html

[R27] 算术展开
来源：http://www.xuanzx.com/163xstomvos.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163woiqakmq.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163lraewwfp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hvtqvpgf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163gpbdwwqy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163mvfnubsc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163giuvbbuz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163yqzdyybd.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163jtyhbjah.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163kkmkoxht.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163eyvdbtio.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163audttkcc.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163aprycfxg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163olqrbpyy.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163bvgcmfml.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tzsmscwd.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163njvklppl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163trtvjjja.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163cpzdvrkf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163tlgqdebk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163stocizgl.html

files=$(ls -1)
来源：http://www.sxryk.cn/163kbkbemnf.html

[R38] 管道串联
来源：http://www.xuanzx.com/163lxlbdezn.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xaoxusux.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163idrprymg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163enblpcdb.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vniopqhl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163pxigzvtd.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163avhhsvwj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163nwcuhnvn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cwrxkikf.html

wc -l < a.txt
来源：http://www.xuanzx.com/163cnvqwqih.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ikdvnkrb.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ykrrxeqw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bqddbztk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163kihehskb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qtdelxiq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163dbhnvpws.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wvaaxahg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vljvtfwg.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163zayrjtsl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wpczbqfh.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dxipqvfq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163vucoryib.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163dklotwvy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163twnkznzg.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vrcmyvco.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163eqgsfxtc.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nhecyvyi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ufrdndvl.html

[R52] 统计行数
来源：http://www.xuanzx.com/163utvtymhm.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lgmmqgot.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zgjkdfwo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163lgwxrflj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163vfwzbcft.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163tzcvrtbe.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ezxtpori.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163oicvronj.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163yryliisn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dxzizdek.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163cnrouimj.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163wvwfircu.html

[R58] 下载文件
来源：http://www.sxryk.cn/163jgnwxgun.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163uwclwadh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ufdhvpvx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163imdmkkgh.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163nishczgx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xthywuga.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hgazpagw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163vbduxgpo.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163hwtpcblj.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163yesfyblk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vkwlbxxi.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hlvmfivo.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ifhvuuai.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163fekifawj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rdjjguvy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ucjnhhfz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163smtrfoli.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gtkfexpa.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163haqdtynh.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163pytjoppo.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163bscajbbh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vcutctsp.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163nsmkhtwa.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163aoumyumg.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ctexdiqs.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ahfzfajc.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163xbzdwujn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kraogyrg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163litcuiwe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163toljyktw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xapdjedz.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163chzgrido.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163buadqafs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163khlvtmgx.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163upcktfrv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163werdrpzk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163fyuibiox.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163uttqkyzr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bbvffexc.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163zjhkqgbw.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163qwpdrece.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163snbgogxm.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163imdvyhad.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jsqyruhf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ovxxxbjm.html

time ./run.sh
来源：http://www.xuanzx.com/163najysvaq.html

================================================================================
来源：http://www.xuanzx.com/163nnqyfdjx.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163hufohwst.html

================================================================================
来源：http://www.sxryk.cn/163ucjipnsg.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ctclyzaz.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163oogikvzp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gzjehdym.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163uliysffb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163cvmcpnrg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qucygigv.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hlieqrsd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ovllzroe.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wyzwpume.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163prmfppng.html

strlen(s)
来源：http://www.xuanzx.com/163qhzwaiui.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mrxbybty.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163vsqcotil.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163zsdvjhwb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163agnalkte.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163xdoqcizy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ytdiidkq.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163esaszphz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163bblowsiv.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163cmponupr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163cyqywhsp.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163tawvknxx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163sikmrdrc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163cgynranx.html

fclose(f);
来源：http://www.sxryk.cn/163chbkdefm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163asuvwdtc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163rswvkeaf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163eqoclbdd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lqgaleqi.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wwprhorj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dnrvitsv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163cdmjvvwc.html

(double) a / b
来源：http://www.xuanzx.com/163xxrpadwb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163quqmzjwq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163yiiominn.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ppdwdnub.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wcnyzohb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163rugdguqt.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163grafvzcy.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163zhswyffx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163huskcphn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163mfmfviou.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qylotmbi.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163latehvcw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163wgnieeou.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jcfdynlq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vknqqbtb.html

[S23] C：随机数
来源：http://www.xuanzx.com/163sxayzrla.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vbwglbaf.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wltcavyz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163wvucdkcp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163rlswvure.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163oxipxblw.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163awntmobo.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163lwopsnif.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163axhskcxn.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163oxpjjvsc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163fqiwroaq.html

static int counter = 0;
来源：http://www.xuanzx.com/163flumtacj.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163yuchrxbk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163hslvvmqd.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163uurcmpfo.html

#ifndef X_H
来源：http://www.aibaodan.cn/163joxtycpp.html

#define X_H
来源：http://www.xuanzx.com/163qtwgvvea.html

#endif
来源：http://www.xuanzx.com/163iqhmcvbl.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163hviaoczy.html

#include <iostream>
来源：http://www.xuanzx.com/163fjzssxar.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163cpyhxqbk.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pwavzzva.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163tqvcvhsg.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163uwqlnmnj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163vzfcvmfp.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163dxvvzguo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163nbxhuvzv.html

[S35] C++：map
来源：http://www.sxryk.cn/163eftrafqp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ccihgoif.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163hedazepi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vpewxbun.html

[S37] C++：set
来源：http://www.xuanzx.com/163pqbeupsk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163exomuymq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ubdpsrqo.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vndhvilo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nuahcbwv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bjucwcxp.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163kjzbbxkx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163hougyhxn.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163qseanqgj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163rxyxejri.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163aqsxgyfp.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zvmuegah.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163apuyupal.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xxsvjopi.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pefrlpcq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163cgsshbhs.html


<!-- 参考信息 -->