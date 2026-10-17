外链999!wailian999！

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vlqmrmkl.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163nlvwzjtc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163bfoyreka.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163fguapdko.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163hzigqpzi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163cxfdqupn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163iadutvtg.html

[Q57] 行号
来源：http://www.sxryk.cn/163tmxrklnw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163iglglrhj.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163thaotnvx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163msdcogaj.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163qrrbkfiy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163evapbsyy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163qhjncdhv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163suqxkxuv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163fbxkkvpw.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ybwbdyup.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163bamhdvpm.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163hvhebfiy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mqlsgkqq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163tioztcwk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163krtderwl.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163susvdfsn.html

COMMIT;
来源：http://www.sxryk.cn/163gaqmmssj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163weewaeqg.html

ROLLBACK;
来源：http://www.sxryk.cn/163wgnvukpn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163onxqhpgy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163higunofh.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163crrgcblu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fkkcemkk.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kqqcuwdt.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ffpbbdgt.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163qfgandlj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163uikfrhux.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wiyhuwdq.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163tcssskjv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163jwycxjaw.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163tvccpdvl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jiqkidvs.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mxgfbucv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163nimiecyn.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wdprbbyn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163fdkyulfr.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163opkotysj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163elrnpiye.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163fimcjndu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ddtuxwhj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163uqghkyxl.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ylmtrcmk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163fophvqib.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163mepqcajo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163bgfzzkty.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xeqaibyh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163zazhgvqn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163nfhrmsbc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zbajcggc.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gsfrelqd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163wshsezov.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163eqfjvmht.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fbxqyszy.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fwgezphc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163kiffozcf.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163kvduacic.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163epbrsjaz.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mrrprhsr.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ajewweey.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163uxsalezl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163kttusvyz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163zkvkwmps.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163hpihckbh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163drmoasge.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mfpdcvxg.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rvwdxggs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163whbyhwoi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163tngrwvwc.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fiayyrko.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163atasfywd.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163cojfmroc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163xymcarzt.html

================================================================================
来源：http://www.xuanzx.com/163zuotlqbs.html

R. Bash 专题
来源：http://www.xuanzx.com/163ededsdtl.html

================================================================================
来源：http://www.xuanzx.com/163evkolhbj.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163dkrxoaev.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ilkxkots.html

set -euo pipefail
来源：http://www.aibaodan.cn/163bwjtapzt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ltxuthuu.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vtcjrpsn.html

[R03] 只读变量
来源：http://www.xuanzx.com/163hgdjucfx.html

readonly PI=3.14
来源：http://www.sxryk.cn/163wuzxjjbg.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163oewqqnay.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mmvglmjv.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163xxtfugcm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lkxenejk.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rtnnbkmq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163dclepsxm.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ebienivj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hmydmmjv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163divgggga.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163almxpeof.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163zrfhhfdw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gzbyvfwj.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163iwucssxm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vhfwpamz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lkfkncva.html

case "$1" in
来源：http://www.sxryk.cn/163liqryxli.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163myoxfmhw.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163xtqnzebs.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163jxhdpukn.html

esac
来源：http://www.aibaodan.cn/163cdvatgpw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163kiwrvypp.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rvuzsnup.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163cuzohwze.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ktxwznac.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fhvbzqpx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163wmzjocyk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ahzvkffm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vpshcjjq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hdrqtzri.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163tvectoko.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163fvlccdkm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163sbktzcex.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163fwckwknr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163kegpqwic.html

[R19] 数组长度
来源：http://www.xuanzx.com/163soiobgpg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dauvhavt.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163uerjafxt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163mxmckklc.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163pcyjjnxi.html

echo "${#s}"
来源：http://www.xuanzx.com/163pvxtlbqk.html

[R22] 截取子串
来源：http://www.xuanzx.com/163avuoneqj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163vnrpeyfo.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163aqfnaivg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163keiebcjz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163pygjjcqv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ieatnoov.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zvvssfxk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ikxhlnvl.html

[R26] 命令替换
来源：http://www.xuanzx.com/163gtjdychg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163rmilybbp.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163bfdkhbqc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xyeecteo.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bhndxskd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163rfdmstqa.html

[R29] 定义函数
来源：http://www.sxryk.cn/163tgwwgrhb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163upbtmhgg.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163lbctawfb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wqhnbbym.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163fkiqmxfp.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163wcxpfwcu.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wtsvrvth.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163lajssukf.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bqaoroal.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xrvifvgu.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ngxycevg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mvxlzvsq.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163fnjjjhrv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163itdziunu.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163bhrqtdid.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163iwvimypl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163uismjbpi.html

files=$(ls -1)
来源：http://www.sxryk.cn/163mnivmzmi.html

[R38] 管道串联
来源：http://www.sxryk.cn/163sqriiazw.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163utmryfaa.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ownuowsk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163vqxvofml.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163inbjnqhg.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xomnwyvf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ozejcpbi.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163czhqoshd.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163iyjsklql.html

wc -l < a.txt
来源：http://www.xuanzx.com/163bdhnzsjv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163izisjvkg.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163zdhhvyvx.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163wzcwryvf.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163douyicvf.html

[R45] 批量删除
来源：http://www.sxryk.cn/163kzpmfthd.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163bvpqofay.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zxbgcisd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zfenvgcz.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163rzpftjoa.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163pxjddsmd.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163dgfommou.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163soiwuxra.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163igimcylt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ajhdxqhr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163nhmpughl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mcgjqheb.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163cjironyd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tzbbnrcs.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ummkosoc.html

wc -l a.txt
来源：http://www.aibaodan.cn/163uruipaau.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163pmhpkxqi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163zuaiuvfj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163pphczroq.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163uvajsxft.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vdepzsyw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nibjnvyg.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163gqxevfys.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pvverkho.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zqgjfehf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163znzigpki.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xzvgqwpn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mwxjqkuz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163sgmsfigm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163bmanpkdn.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zheilrza.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ezifzwyx.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163mbwwesof.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163lgftwctj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163aedqyhzo.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bmmzofwp.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163gxbtddjh.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hzbaotwe.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lzcuujtd.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ghlppnho.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163gdskblbh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lwadppkg.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hnuvqaqd.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163tlecuits.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fqwxxnac.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nijjvbfq.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163vwavrtwk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163wmfhpcyb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kewadchc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bticwwrs.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163vyheysye.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163egvcalwo.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163xmcorpte.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163tenhrfqe.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163egyvhqdn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163neagkemx.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163rtvnldog.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163pzkaqmtj.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dodtpjnu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163cidcyjja.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ighakxrz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163lffrjhzu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hwuebjvy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bvqzphyt.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163rvjevvds.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163spfttcgs.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ruugiijk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vyojbquu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163iazajbyu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163sppfymlx.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xfomcqie.html

time ./run.sh
来源：http://www.sxryk.cn/163lnmikiqd.html

================================================================================
来源：http://www.xuanzx.com/163zgngtruv.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qijkfztc.html

================================================================================
来源：http://www.sxryk.cn/163pzmghiye.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163errmaowb.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pkavgkdn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163nlfpwinb.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cfclqmpm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hzgmljrz.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163chnrrstx.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163mwavtyqy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ddwiuklr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xwismspd.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163tdkriixj.html

strlen(s)
来源：http://www.xuanzx.com/163ynojwivy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163qbczvjpq.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163nxthzvnv.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163lkoasygt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163mhsubdwc.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163cckhpiaf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163nnfpfdsz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163stsdvanb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163htxzambx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163uvpijqit.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qwfzndwf.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xozpqnql.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ikmhiiee.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163apcclmst.html

fclose(f);
来源：http://www.xuanzx.com/163fwjjctgg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163lpuyoxav.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163hulturtc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163eoeipyyj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ojufncbh.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163curynrqv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ijfvhyah.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163yonqbzem.html

(double) a / b
来源：http://www.aibaodan.cn/163jeroyfqf.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163xhocqxue.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ryvotnal.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163naszragt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163leusrdrr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xwvbwahw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163qshirpih.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qppyxhhq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yjpkxnqg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qmrdukpf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jhpsmqjy.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163hffmfwvx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ldrrgpre.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163lwyncwii.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163bnbdogjh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163bgcspmph.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cymmbapi.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163imtyewrk.html


<!-- 参考信息 -->