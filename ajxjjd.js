外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163asfsvkcp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wnenbuuw.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nvugiyma.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163btlygdwu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163kbraqugf.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163iazyibnj.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163inmifrom.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163dagoakua.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163jucavbdt.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163tlfxyezy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163epxtjeai.html

[Q57] 行号
来源：http://www.sxryk.cn/163hxcbktrr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163byjvgroj.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163juyzfpmk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163fzsoodly.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ywloxdtn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163igimsozz.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163mbclagxq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163dqodbiaz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dnyancum.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163pxcuyeir.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163xyslbqqt.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163wwpkovbl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163okgccgke.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vqmhlswt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163iyvvijvs.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ivklikgp.html

COMMIT;
来源：http://www.aibaodan.cn/163rxpnwevb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163jknvrqnn.html

ROLLBACK;
来源：http://www.aibaodan.cn/163khdluyos.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163xnoidhli.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kslmkkaf.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ipseezqo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163fnbaopty.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163fhocheih.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163wtyxeims.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163gtauuvha.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bbblwtja.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163zxxudvhz.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163szpmfngg.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163kfutvdpq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163sjfbkvgk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163rbjuelnm.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rwtghhdx.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163blsoavce.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163tjqidthz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rrrohaxi.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163yosfrejg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163gvahkgwf.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lzbzaupt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163zslyniag.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163zhaxehyk.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163uffzhuvn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163dplsrzuu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dgbbijjj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163wgyinmpz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jocwshlo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163aiuknxvw.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163opgewttk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163btkayswe.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163cwlnhrud.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qhiqzxiq.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ipiytsqy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163llzvascv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hgfewwge.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163tablcddk.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163jpfbupdj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163zggmwfsg.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lrowsilo.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hamzrygf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163xczzwmij.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163dzfgwwtb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ljmhqfci.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ehbgtegb.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xlnncqdb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163chafqejy.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163gnknvinp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163njhymwtp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vqyjqvoy.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163fmnqfsps.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163fhzzjvpl.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163icevwfvs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dacrgpxi.html

================================================================================
来源：http://www.xuanzx.com/163aqxsyeub.html

R. Bash 专题
来源：http://www.xuanzx.com/163tyqcnndc.html

================================================================================
来源：http://www.aibaodan.cn/163miptwklm.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163fpskhlvx.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163owvyobux.html

set -euo pipefail
来源：http://www.sxryk.cn/163mjqnjosq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163tocgeurx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163dzzmvjqa.html

[R03] 只读变量
来源：http://www.xuanzx.com/163tvfyffpf.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ctbvupjg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163flxjpnuy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163rtaojqcg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163pvudjxfv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163cmfkzfmi.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hcazokwc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163tsvuywpr.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qrvvzogm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163cmqwpydo.html

[R08] 数值比较
来源：http://www.sxryk.cn/163afwgowpg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gnpfyvvc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vkqlpunk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wyxpizyg.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bnljwmbd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vzdtovdn.html

[R11] case 多分支
来源：http://www.sxryk.cn/163izzariae.html

case "$1" in
来源：http://www.xuanzx.com/163bbwqfeyv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163dqomhiae.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lxrynceo.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163opfuvymk.html

esac
来源：http://www.sxryk.cn/163iqdsrxcz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163iuopfsxr.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ivazslrf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jqzbmmed.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163bumehaly.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163irdozciq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163fjxrbnph.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zrivapkc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163lsngqrkh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163przwwhvp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zwbkorxj.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163umfwhdsv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163udkigczb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163fivqbjql.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rstvxdiz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gfbywhot.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fviofjxf.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163velrragk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qhgxtzlt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163vpaqwcra.html

echo "${#s}"
来源：http://www.aibaodan.cn/163glmhshwu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163fuhnzuua.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163cgesjxhs.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gvdoztlp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tnxysexd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163gultotpo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163gyayhtfr.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163edjmqkov.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163eyfjgism.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ukrypdfa.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163zlqclyca.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ngnriuka.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qbebhtwe.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lpnjsqfd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xramhqvo.html

[R29] 定义函数
来源：http://www.xuanzx.com/163obqofobn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163tpkfpkbo.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163dikshfmx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163xvmkdtma.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pltdbdao.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163rutxdqfy.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qmxdehii.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fuagibab.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163jvoycrqz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hcybupat.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163yngklsgn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mkmffwtp.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jdywcehl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163eylqhswm.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163sbyvgqou.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zcizomvt.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qdvjqafs.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qzpuybaa.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163oavhjoti.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163jfubtvmg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163tjrjjwgc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163mqmmicdr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vdayfgco.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163mvcuxnta.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163zknvmpxz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163rllbyyvj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163wuirokfa.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ydvtrdri.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uhlmphoj.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nencrsxj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163lbpvssir.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163wrkjomxu.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cixbrfbx.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qqummcda.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pkfslfwu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ixhwzdoq.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163icvolqlt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163iyictiyt.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163nfddqmyx.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qpqjzdlt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163cbeyxjwq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163svwmfyng.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163wesfjveb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163wiiikmei.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163qkrpucjk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163fjtwnvfk.html

[R52] 统计行数
来源：http://www.xuanzx.com/163kvopmlxq.html

wc -l a.txt
来源：http://www.xuanzx.com/163msakteob.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xkfnjiqn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163jnjehstg.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kawpfzmh.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hnphbclr.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163fhexgywu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jmopnmfa.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rugteavt.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163orhhamcw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163yiocqnxj.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rxkgchol.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163yhvxmilu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163wxteepja.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ulqevxoq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163phtqduzs.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ttljtdrm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ksdviiiu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163asldjgdg.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163gyblehst.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ulelfiqh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nqkwnkag.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163csygphtm.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dhipjjbr.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tctunddd.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163tfvatlip.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ykklwuud.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163hezgwpfo.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163aqzvcrdv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wakyokox.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qzusrnxa.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163xbebweoo.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163gjedmsqw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ezeqxsuk.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163iobgoueh.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163loulrrib.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163axlaletj.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163edzxnzgz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163gvnfoybv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163hqylzgek.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163kohwqrzo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rezlqgxu.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zeintqjk.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163nohqimvj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ntfsflql.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163nvoryibe.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163xvmtivew.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163gvcbsgoo.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163eayfzvho.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163njfocpps.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163cokhgmgt.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ljaytbvt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ahixqfzo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163abfmzmry.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wfnjmazp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163nlhgsvnm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163sqqkoiwj.html

time ./run.sh
来源：http://www.aibaodan.cn/163nhjzngbc.html

================================================================================
来源：http://www.sxryk.cn/163yvpwaitz.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163fjspxluu.html

================================================================================
来源：http://www.xuanzx.com/163gujvukpw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163aylnqexe.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163eycmvmyf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163xuybopti.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163gfvuvbxi.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163nzaptxmh.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kpmxjauv.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vfxofdeg.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163xqizfqne.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ngqqzmle.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163hxtuigqs.html

strlen(s)
来源：http://www.xuanzx.com/163mdtjtryr.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163nskjzxbu.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kkmrihus.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zmuzxiyw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xcpbogqt.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jwruzvog.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163mssfctxm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bhpjpyyh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tscqbjnc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163aqlwtuoc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163chsoihjm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163quuzdtmv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163zplowuse.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163sbkyvoyx.html

fclose(f);
来源：http://www.aibaodan.cn/163vjnrqaji.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163wskznuxo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163sbupgxac.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163vhnszhjf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mukmlihg.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lksicyeu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163dggdvcod.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163spamrhay.html

(double) a / b
来源：http://www.xuanzx.com/163tobbqhyl.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163bmczbews.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jrpuuqpd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163yammlwwr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163xjsmirlr.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163bhjsfxsg.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163kaybthoi.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fykvtxfz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ocxulkol.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tptzbehc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163biefhfav.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163pbjfjget.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163fmioeyoa.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163wdekkfjm.html


<!-- 参考信息 -->