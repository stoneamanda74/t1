外链999!wailian999！

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163tncrpxze.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163gvnmvffb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163mhpatrzb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163uoesymsg.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ndrhvqvb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163devkroas.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163zvanpsil.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163paxjdzpp.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163gbuybtle.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qmtjiimt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xfdfsjbj.html

COMMIT;
来源：http://www.aibaodan.cn/163oqwkpwvq.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163dyfjrjbd.html

ROLLBACK;
来源：http://www.aibaodan.cn/163eorcjjdn.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163bkzmruit.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ycjwxsnb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ohsdsssv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163nfhwopry.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163avdrhjps.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lkpizwpy.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163kshvrfjh.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163pctmhcmg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163viuylvjw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163btadsfks.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ydddkcci.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163nhxgigeh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163jzzzldpm.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163himxwltk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163aidpmaal.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163gwhfdudg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zvflepyr.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163mjozmhys.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163yghpdecn.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163nanvkueh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163krmdlail.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xmnnzcqd.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163favdbkkf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163dgnpapmy.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163wuvyacxi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vxiwijll.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163iyqpgijf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163zujvevrt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163icapneis.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163eadzyrqb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163guigqqos.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163tuaqkhzq.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163myfmsimz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163illhprno.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163tuejyonu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ykmydmfy.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163slbeagmh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163dmrorzff.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vwrpasai.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163houapjjk.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163zdknmial.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163rdxhdlda.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163abxsfbij.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163sstrodzc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163fepmmiwo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163acopjngk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163pddxlyqm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163hyhwvirf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zsmfcyml.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163djuurvta.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163imxhkpqx.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163pjgcnbpt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163lczzegvd.html

================================================================================
来源：http://www.xuanzx.com/163rrllymwk.html

R. Bash 专题
来源：http://www.xuanzx.com/163qeppdlnq.html

================================================================================
来源：http://www.xuanzx.com/163dttqsmzx.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ciilrnku.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zbpfvgiy.html

set -euo pipefail
来源：http://www.aibaodan.cn/163dllugswd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qmkdcysj.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xmzqpgmi.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163akbpaswq.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kmzbpihl.html

[R04] 位置参数
来源：http://www.xuanzx.com/163igrlnrms.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mpffzonb.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163jmjntheh.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tzdahlzd.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ygsaljxu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163lrtcvfhc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163hjbrdjil.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163emxwbjzg.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ddgoqowd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163kearqhjs.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jeifwpnn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ectnxdla.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163tiovpfvg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ogfdfurt.html

[R11] case 多分支
来源：http://www.sxryk.cn/163sglmprjk.html

case "$1" in
来源：http://www.aibaodan.cn/163ewobbqlw.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163dvwaedbl.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ucktoeza.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163wintdepq.html

esac
来源：http://www.aibaodan.cn/163entgisxr.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163bxgawzkm.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ijucmbwb.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163bwmaiwyi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ofgkwlzh.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163pkfqfuze.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163trlpkvcj.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xhfegmob.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163jjdyxqsi.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hoeuefwx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wufvcpwe.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163zpsdiejc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163gwbhvfuf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qtqvwiih.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163twfebszc.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163sjeiabcr.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163sklhjhmz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qxcgttuk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163vvaeawpn.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dodlsbov.html

echo "${#s}"
来源：http://www.aibaodan.cn/163irdhfzkh.html

[R22] 截取子串
来源：http://www.sxryk.cn/163tlqajjpd.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163vpnbniub.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163iadpothr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163udjdaykm.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qabrfsqs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mkwikaao.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163boyigdeo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hquofkfi.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163slocltqh.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ctcplywr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vyqovian.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hgifefmk.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lipneytc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163riinoomv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wviijrqp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163edvcuhxz.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163yoicsxde.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163shjussvv.html

[R31] 局部变量
来源：http://www.sxryk.cn/163hzduzqck.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ecpusjyo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163oecilonu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rrhoabwy.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163cjqpamnx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163gsrjnrgq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cvcatzyv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xdlwtrzx.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163kvhhypfl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163lwuwhfgt.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163lmplgfhi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ztveghkg.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ztcyjkkz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vzxrkwej.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zbqqoffk.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163csqahykg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ivahjurv.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163mzwhkrrk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ndnlkrvi.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ovixkaoj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ihofemgq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163zqhrliyj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163houpnmdc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163pkuoaqir.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ondtdyzu.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163alwznkbz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ypquiupb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163mwgrbaga.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ttuxfwyi.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xhhamdpy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ihgecpan.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163eavptfmb.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dmlfzxkr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ykpejhoe.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fysjdsug.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163iovkklkb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163pcbskcfb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wepommkl.html

[R50] awk 求和
来源：http://www.sxryk.cn/163vqjqealw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163alposgcl.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jobfkqjl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163tququtue.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qbnezxvn.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qowhtcbm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xbeimhxe.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163nkruqjcd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hzftgvdj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zguiiafx.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163jestxcrz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163whsweqtg.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ttzjkaht.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163sncnlihl.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163mjnppkgf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mgjpjgza.html

[R58] 下载文件
来源：http://www.sxryk.cn/163etdiogsp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ivavolto.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tbskldmm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fnwiojwg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163jblnapxa.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163jasazoeg.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163bzhgyslp.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163uobtftbx.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zxhugkwq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cwtpwzei.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163jsympmhj.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163seyifxnz.html

[R64] 结束进程
来源：http://www.sxryk.cn/163zqkmxhnu.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qsezrdip.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bzqkbvef.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163mmntdmhh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163aoqelwgo.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163omdeaidr.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163yirxtfzz.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ybbqpihv.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jkgfhrpt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163qtewfpst.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163klssvpmi.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ulmmigqm.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cfkedred.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163mapyyjco.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163eitrtiqn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vpupgpej.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bvqeukyi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ffkanwdd.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163byfdlgph.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163bfxtlobv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163pgatbsmo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qpsuiliq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163hzcxxotk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163voagbvmi.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ljlpxndy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gwivoipk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163mmgzopqu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163jlbgzbks.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kxjtyoyo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163kmjczibt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163njnyyokf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hafttwnd.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163jqmqzhmi.html

time ./run.sh
来源：http://www.aibaodan.cn/163jvfwvood.html

================================================================================
来源：http://www.aibaodan.cn/163zviutaji.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163phfufqsi.html

================================================================================
来源：http://www.xuanzx.com/163lbsizbwv.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163nrjsjvan.html

#include <stdio.h>
来源：http://www.xuanzx.com/163wvegegwp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163hdzduocj.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163itkaqvdw.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ltrcovey.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163rurygods.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dgjjhubd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hsckddcg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ktqmvqgg.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163uksjphcs.html

strlen(s)
来源：http://www.aibaodan.cn/163cnbgvvpn.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163fpwdbzjm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ylyzrbby.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163wokqdfou.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163irtzllyw.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163oilohdqp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163osygfqaa.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163oosbstyz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163goxupmbx.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163clcnjgme.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qkfbfjue.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wovayqep.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163dmmzwqcc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163uwckqnud.html

fclose(f);
来源：http://www.xuanzx.com/163uvdpokwd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163sggijsoa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ajpmnwdg.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ewpnorpv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ldabefqa.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mfbtbnsv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163pyptfgba.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163efegwxnq.html

(double) a / b
来源：http://www.sxryk.cn/163enekmpyh.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163aitxtijw.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ptjyjfef.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163rbromplp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163kqygceym.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163fskhnwdc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ydvlwums.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163bjxlcemn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wmaemlbn.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zgkgplwi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163axadacus.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163nalkczff.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ftgxndna.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163gufatlto.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163oidjkuzt.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xfzykbjn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163eemwuceq.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wljydgod.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163uaxefamh.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163bvlifxyx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ccrghcbk.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vsizltbd.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hwsebgyk.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zfyabqwc.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ctybfutu.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163rpsohhmb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pzaxxusi.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qvjhdlhk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cfugifte.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163oafcnpat.html


<!-- 参考信息 -->