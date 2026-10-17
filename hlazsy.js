外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163tvlaqwzf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163stgkbnbm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163buuxjttm.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163esubbczt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163fwdinpqq.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ljjhpwrh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xeutyffp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163uwfxhkua.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nvmqqqgf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163seclpnea.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163editrtjh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eurodzin.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163tlafbxtb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163bezxeget.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wdvdysis.html

COMMIT;
来源：http://www.xuanzx.com/163lspzetqt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wwvmqcrl.html

ROLLBACK;
来源：http://www.xuanzx.com/163yakadkva.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163agnadeld.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163msfgcbrh.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163yvwlfnec.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gcymeqtb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163decqztzl.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wffxbswy.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163dfkyzvrk.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qdpfiglt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163gisgunau.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163yqfvefjm.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fbbugstv.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163joiyrnee.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163dhhfuvoa.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163adcyvriv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163zrzgnbmk.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xndvzevc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ojmbiyko.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163eshczrgc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ljxcwdbt.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163mvddcvau.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163zpzccsld.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163kupgrsmx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rhnwkhku.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163kaqmtmmb.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163xvoanpgo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163qbjfimgy.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163humvedkm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163dbntjvsd.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163eqqmnxuh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163gumebell.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163mfmkznwg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tdozdera.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163gkmrlrqr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163utsbfqkj.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163gvbaludj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163yeocbhng.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163kuyyxluh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163xnwcbvfs.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jgusvvrl.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163izopirwl.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163xqurhomp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163sxtgjgex.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163iwjokecj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163kihzhjdn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qfzxjlhr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163fornagqo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qpgmqjtu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mmpimjzv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163wgcujwkh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163wdqwlosz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163twptxsxa.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163jolrboxy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163lcccnlxr.html

================================================================================
来源：http://www.xuanzx.com/163gpjjrxuk.html

R. Bash 专题
来源：http://www.sxryk.cn/163zmkvueqy.html

================================================================================
来源：http://www.xuanzx.com/163denmadlj.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bbjzsjkl.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163napkccfe.html

set -euo pipefail
来源：http://www.sxryk.cn/163ffpstgew.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xjevewnx.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163nwcjmkyr.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163lqjuzbia.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ivlrbtrh.html

[R04] 位置参数
来源：http://www.xuanzx.com/163liblnjko.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163rxvpelrg.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163mnstuuks.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ylkfczwp.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163sojcmtls.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163hbtteiuz.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163odmfplix.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163eurrguwt.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163mgofkwuc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163vwybcmph.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163mlaospvh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163kcjkfhyo.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tboyaojy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163klfjrctc.html

[R11] case 多分支
来源：http://www.sxryk.cn/163mbdqovuk.html

case "$1" in
来源：http://www.aibaodan.cn/163lzrnkoys.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163mpmaueir.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163bkloabqa.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ixleofly.html

esac
来源：http://www.sxryk.cn/163lelipbqd.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rbxgahat.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163iwwxolvm.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163krarbany.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bqjkdckf.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163umnkygfe.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wuwzkpou.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wexifyvb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163vfpmuyag.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163urwmwsjq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163gluexknz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xygnxkhr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163yseyklmf.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163glwpzdig.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rhxolxfd.html

[R19] 数组长度
来源：http://www.xuanzx.com/163filomxrs.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kcfazkms.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163pgzjywdi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163dmibrklf.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ohyurnxs.html

echo "${#s}"
来源：http://www.sxryk.cn/163qychdyzi.html

[R22] 截取子串
来源：http://www.xuanzx.com/163uxlcwuji.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lhggzocz.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ktefcrrd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163xmnnziud.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jgewyewv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163agugvrxg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ulhlfhfb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hoasjynf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163msnqjunq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ufrcyixd.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bypbcfzk.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163acuxwape.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163arlfvwsz.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xeofyvfk.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bofiopep.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vjyxigta.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163kibhsrot.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163kvueepui.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163wqumfyth.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163yrscgvcn.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163tklrqlcb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163almukpiv.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jeknrdhc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163iharyvyv.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ikvkkcav.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dglpzdll.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163nsbfioxu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163tfovifeu.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kpkntveh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163injbhpye.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vfhlqmpa.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163yfxicpjd.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ezojooln.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163kfyycytj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163cndeloci.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163vvitbxkx.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163twgvtfdk.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163dvxgpbsm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163xqlbexmn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163pwedusir.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163muakstjs.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163slbskymn.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163lrqokvkz.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163eaozmryj.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lnjpyojj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163tknpghzy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163nncfiodn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163acfsrcwf.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163hervcnjc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163frupozrt.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163auzvciju.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163acvzlkwr.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163nbtffvej.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163waartoka.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wliduwab.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163jgcwodrz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163iijeyral.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163tdpsdwbh.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163mpemxvrt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163nkyziahf.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163klpcdrgo.html

wc -l a.txt
来源：http://www.xuanzx.com/163hgpisfva.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lwsiufcy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163vzdiawxr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ajphfwio.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ffcexghr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rmhkknzg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163kpeeilwi.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163wookxwbk.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vytzakon.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163yejlesyu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163bqxdatal.html

[R58] 下载文件
来源：http://www.sxryk.cn/163rafzqvew.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163jetqecqa.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163cudauuoy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163umriaapb.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xvqrkups.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lfurkoef.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zcjyweix.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163kkffwcvb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rtzmurch.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ynrsklje.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163yeehnhau.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qziawuui.html

[R64] 结束进程
来源：http://www.xuanzx.com/163etybnzfm.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163glzzwxdf.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163emfcirzq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bqkyzyko.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hsvtoasf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163tpcvrnsy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163tcrgdiyj.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163oficvcqj.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ndddvwff.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163blndpfue.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mrtfgexn.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163drzjxyap.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163fmlysrer.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163xbvehrhl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163jrqvonim.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pofgzlzp.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163zfldrrir.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gmxripkg.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zqycapqx.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163darvzyxt.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163hjlldije.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wxrljckf.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zghhgaqo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kursbohl.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163idgughub.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gcjwhqln.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bfomajjp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kbeqibvn.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163fnfalghs.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163afkmxivv.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163jwtwvyig.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vnetnrey.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ybhfkbcz.html

time ./run.sh
来源：http://www.sxryk.cn/163kqyirvgv.html

================================================================================
来源：http://www.sxryk.cn/163frqdlwyb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163gbswwbss.html

================================================================================
来源：http://www.aibaodan.cn/163ksrkcerm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163dyfdqdyz.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163navdxdua.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ndthrkmb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163uysgmmqq.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163klnifgej.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hmcewnqj.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163tugmakzr.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rwvygmun.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vxwxyawx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163bmkpmydm.html

strlen(s)
来源：http://www.xuanzx.com/163tntbsamo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163zxmyrban.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xiovezdk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qooaocmm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gthsrmdy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hogrirta.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163cxsrtrus.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cyscmkjb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163hdvaxfab.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zibzomkn.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163jsovrzku.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163elxcsqde.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163todgcdiv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163joxhegfy.html

fclose(f);
来源：http://www.aibaodan.cn/163njlafqhu.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163crnsewms.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163aiijyrke.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163rmpzrbou.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163laqrhpfc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163bgscbbme.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163iyhsxrss.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hjgnttvl.html

(double) a / b
来源：http://www.sxryk.cn/163tnnektat.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163xeausnwz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163wajhfacc.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kjvarthw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163xcjycvnt.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163bxaayqez.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163pjamggqk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163tencmnpo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nyptgjre.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lqwsceco.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163oghxkyjq.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wgsupcjk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ihazwjqv.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163xnkshpyq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163uhkwzhld.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163yxcyodqu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163zemflozl.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163noevkvcp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lhmqwdhc.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uiulrdnk.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163wmijvxnn.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fnhykmqg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163biktgsdx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163lameytvw.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ruzxxagg.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ovhzunfx.html


<!-- 参考信息 -->