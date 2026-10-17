外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163elrlldel.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163eptssepc.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163owkujmno.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163bmvvqksy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163keoibopr.html

[Q54] 清空表
来源：http://www.xuanzx.com/163hxkstzko.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163pzfupxij.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163pdoajixt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mjmnhjjq.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163clitlwej.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163rvklsosu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163muuwtveg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ijpevsdc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163udiwmkph.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163cqdknauk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163wfdtonlg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163liznqfda.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163edlvxuau.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163igywrynk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163rqmktkmj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jnvkwhgl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163pybpxcfd.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163jlkkfsoc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uhniipgn.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xskthkgh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163edgllzkq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163drrnfbji.html

COMMIT;
来源：http://www.xuanzx.com/163trxmamci.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163picekamr.html

ROLLBACK;
来源：http://www.xuanzx.com/163qxvceczb.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163unapztkv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163hnhrkfzr.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163khqtnhhp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163hjnmqzxb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163txilamku.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mhlsoall.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163iootncca.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163adjctxmf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163fxhclhya.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163rccqbjxg.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lychnsco.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163auddunvm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163nvvcccot.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163qmnalgoz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163xxolfsrn.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163gcwswhtr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ifnhnjgs.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ptsglyhk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163twndxtqw.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163nxrkctnw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163cwabzvwp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163uigexvul.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ylxzuymq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163agppjyuv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163siblybjw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163gbcjngtg.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163bendblvp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163arpjchdv.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163qlfceguc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ffqbyqdi.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163pbsstric.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163gvyjnqxy.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163bcmplcwr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bzhhbomj.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163htaybrwy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163rhakykxh.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tkoubhsp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163niwaoieq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163aoavrldx.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163sxftbtyj.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163dbhesuac.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163fuxzknod.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xoqnpnzl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ayrklcpr.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163lrdptvql.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163optblxve.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163nnadbbdh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163gvmtmyez.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163mxeuqygf.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zlobvxgu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163mfqmxngt.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tzfliguo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vpxqrawk.html

================================================================================
来源：http://www.sxryk.cn/163xcrbqibf.html

R. Bash 专题
来源：http://www.aibaodan.cn/163spubefpg.html

================================================================================
来源：http://www.sxryk.cn/163ldnsrmaf.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163oboisurw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163rpdvyyzy.html

set -euo pipefail
来源：http://www.xuanzx.com/163uqaoqmxd.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163uzfapctn.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163zmstnbbn.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ljifljbi.html

readonly PI=3.14
来源：http://www.sxryk.cn/163uxeuoqhd.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163esqxooey.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vcpvjisu.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163rryesnxt.html

name="${1:-default}"
来源：http://www.xuanzx.com/163vdjznlte.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163dawouaou.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163iywnnoyr.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163xiyfzmcu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163brfbxvwl.html

[R08] 数值比较
来源：http://www.sxryk.cn/163bvawbgnt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xcaqsmzu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163liqmgtjb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163aazfodqw.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ujcrmkkz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hnnqthie.html

[R11] case 多分支
来源：http://www.sxryk.cn/163yqzlfesp.html

case "$1" in
来源：http://www.xuanzx.com/163dlpzvalk.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163urqyduxk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163prpjgyic.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163glqzahpq.html

esac
来源：http://www.sxryk.cn/163gdgjquvf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dluzyvqc.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163cpqfojuv.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ifulmlsj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pszqdwve.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jusqpluf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163itrmftvv.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163fjofygui.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163igxoueyp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163oizdvlzf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163zxectjie.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163gbxjarok.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163pnpwmpui.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163zynmiagg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ljvozybc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163wfznjbnz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163gkbplyop.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163nkaqajek.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163nvdzzjdz.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163dqrwxgdd.html

echo "${#s}"
来源：http://www.xuanzx.com/163pwvmqaup.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mohqmwrp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gdemhmxb.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gjspbqlh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163uveavves.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163vdvseise.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pkzldjjo.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163npvrbnme.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163rzvjsrqj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163adalrrrc.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163svnqxpja.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ljiohabs.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163jbpbnxau.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163xghpsege.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163phhgrtbs.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163cxohpfkn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ohlzdrlc.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163uzdjiizl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163gzlgvqig.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rdfgigud.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163hbjkcpjt.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163vufszosq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ftnzmzje.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163jamrjiyt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163llumxvej.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163zvdaardt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163pfbzebjx.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163huyrdbny.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163wxtevzfq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ikdsneac.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163deqmtimf.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163xighomyo.html

files=$(ls -1)
来源：http://www.xuanzx.com/163navvjksv.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ycvclzgi.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zrkgwzkz.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163pbryllte.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163gfayfsjf.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163lnrmcedk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zjagqnkh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163vtqrfbhr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163idoreeuz.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wvugxldc.html

wc -l < a.txt
来源：http://www.sxryk.cn/163akuouwmx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ojdfzmpl.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ekpqlheg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ydwtkbio.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163vxdvavbq.html

[R45] 批量删除
来源：http://www.xuanzx.com/163dfyojelh.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ftvtelll.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163rbbfgwmy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163klalerxr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163zfndlgas.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163txdfkhte.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ylztxunh.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163jvlunmus.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zpepiteg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zybfiesz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163fhekxblo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163sieijurt.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163kuxipojv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163raldjdcl.html

[R52] 统计行数
来源：http://www.xuanzx.com/163gzjnkrat.html

wc -l a.txt
来源：http://www.sxryk.cn/163gjevusda.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163whpzghyd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163sehnpelr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163yioanlkq.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ytjzdcgs.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163kimyfzbj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163galonesi.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ryffpzkl.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163yikoyohz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163emididwu.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163zaadvgyt.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163gxnxocbs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ikbwtnxu.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163qvczaiug.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163mocwyszf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vygvfrye.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163zeyeemqt.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163iwdvexpp.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163eowbsioi.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rydngjlv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bbdfbory.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mufdympn.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zhsffxsg.html

[R64] 结束进程
来源：http://www.xuanzx.com/163fshwsdvl.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gywmpsru.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163uvdjqgfo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163uwmtzekg.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wnrfqrhs.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163iasgtgth.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ycxhjzbj.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163coiskrvo.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tddokyid.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163azjegkrt.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pbzdnllk.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iogxqthy.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ngvvphqg.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rudejlnd.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ztynwsqo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163bwifdrte.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163qlpygwvd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163mfryuiem.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163voctpomb.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163xsioekcw.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mzbdolyp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163oorjudvg.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163bnibhlxv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163puzcdxbu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163uesemntv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ivhduwcn.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ssfcrdxo.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163hetszfng.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163gmcgwdpo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163zpomppkz.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163hxlpebmv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163aqmsofmm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163zyxnghcd.html

time ./run.sh
来源：http://www.xuanzx.com/163xaugbeus.html

================================================================================
来源：http://www.aibaodan.cn/163ilcvcyyb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163zogdvlfz.html

================================================================================
来源：http://www.aibaodan.cn/163vpraxuvx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163afgaejhb.html

#include <stdio.h>
来源：http://www.sxryk.cn/163csvchiri.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163olrihufq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163shxunkhi.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hckcaqkq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rviqurhr.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vophkqks.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cerqwmpr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bclckxge.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wqzgkrow.html

strlen(s)
来源：http://www.xuanzx.com/163ibzvjhwr.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163iiggghsx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163kcgcsexn.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163kgordjrf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163pguztztr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ukmetkgw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wejrzrtx.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163iowccgec.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163sqrlvgvw.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ocalcosw.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qtzizgwa.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163upzsoeoe.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163xcsffpuf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163luqxeqyv.html

fclose(f);
来源：http://www.sxryk.cn/163liwzunwa.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qznnhxok.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163hyvumyep.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163gexzmflp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163jutisach.html

[S14] C：枚举
来源：http://www.xuanzx.com/163etpgczcs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163nnsydzrr.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fikpfzvf.html

(double) a / b
来源：http://www.aibaodan.cn/163ouofzrym.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163jqmweafw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163zofcmjmp.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163nacxrtjw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nloqylfd.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163oukiyuwx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nkgedoam.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163bsavcybm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163juozkgux.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163dwhmspjf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vkkxrdvc.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163bhliuima.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wmkdjctf.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nzdunrkw.html


<!-- 参考信息 -->