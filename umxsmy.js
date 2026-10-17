外链999!wailian999！

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ihlshagb.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163crkpnltl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163dpybwchs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ihvlapyy.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163hztugzem.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163cikemycb.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163cqyzyxqp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163scflelnx.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163wrrfviaj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163wznqlcpy.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163kseooswk.html

COMMIT;
来源：http://www.sxryk.cn/163yailhaar.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ffvamxoo.html

ROLLBACK;
来源：http://www.sxryk.cn/163pqxsadwj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163sgymtnkb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ndvfyzap.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163wprfgnoq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163umgipgvc.html

[Q68] 保存点
来源：http://www.xuanzx.com/163xtrvnknb.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163jzpdvzsf.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163sqkadieb.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163fftvpalc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163zwcjgwxy.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163sfkoiuzd.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dgemsmtf.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163zevzglym.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163pzjbyhor.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163iqkaozyy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163dnjunghr.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ojuqwcov.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ikddembv.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163kwhneyuh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163trrzdbcx.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163doqxqhfu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rppumpui.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163sysrquyq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163shrnzgop.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ghtswcmy.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163islyoxal.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163akyqdugh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163egtreeyv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hykmnylj.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kgnhxonk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163mnfnnruz.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163anlzdvgd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163nduoasvi.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163wcwlmccs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163nbhipcsh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zgpbdgzd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zwfkelou.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163jnuabede.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163bkcaobmb.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163bbylajou.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163fdzdtker.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163azndkqlq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163qhpkspiv.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xvfsemfs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ktyesqyt.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ymdurdkf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163cqvixmgf.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163aqxdikwa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ykjepwua.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xpcyqcnh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163sjrpatzn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163qvqsilea.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fxpxnqxf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163wapzqhho.html

================================================================================
来源：http://www.xuanzx.com/163jayedsdj.html

R. Bash 专题
来源：http://www.sxryk.cn/163hjcobssj.html

================================================================================
来源：http://www.sxryk.cn/163ptoieajc.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163skywqfbg.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jbghqrbx.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fkdjivcm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163uwzscusx.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163imftwllo.html

[R03] 只读变量
来源：http://www.sxryk.cn/163sdryuuau.html

readonly PI=3.14
来源：http://www.sxryk.cn/163cjxqokpt.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163eepsrgwi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163nclqubzt.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163lbeidhwm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163thdsrxph.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163midvgweh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163eyfjhdyj.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163lbclwjas.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163eyiamjod.html

[R08] 数值比较
来源：http://www.xuanzx.com/163wfxbblkj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wwmuzuwn.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wpkuihwt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163txrwywob.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163qvjxmqxl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163kwdsogaa.html

[R11] case 多分支
来源：http://www.xuanzx.com/163dyhxbnyv.html

case "$1" in
来源：http://www.xuanzx.com/163rnikdlis.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163wxahwksx.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163rtvtzujz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wueuagsi.html

esac
来源：http://www.xuanzx.com/163vvceddop.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xhnnesle.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gxrackqi.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163mrveyubu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163irmlmksm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163tvphivgq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163nezrqlyc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163mpssiyci.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ctnlchko.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163wudmigjs.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163tbwimkxe.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163efvhebms.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xsvlonjg.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163uxabvhxy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163bwlkbdew.html

[R19] 数组长度
来源：http://www.sxryk.cn/163aosaasxu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163lxbhsfou.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163palejowd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163sjjvzevu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163iusipzav.html

echo "${#s}"
来源：http://www.xuanzx.com/163qizmrpnl.html

[R22] 截取子串
来源：http://www.sxryk.cn/163peqenvlu.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163vtcpqmxw.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163nwayjdnv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163nfvyjbhz.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163omjtxnjd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163pnttcysz.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163kqeflcil.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wdoejmhv.html

[R26] 命令替换
来源：http://www.xuanzx.com/163nfylgcmj.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163qemrlghs.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163eoxprpfh.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163cteloael.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163juswnvdh.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163yzurdvcb.html

[R29] 定义函数
来源：http://www.xuanzx.com/163asamfmug.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wijrmipg.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163goylyogu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jjbmprpj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163voratkxq.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163wmcbjjkt.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ualmlwes.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xjjfrmii.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ixuqhvyd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jlmqifys.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163pjmbjmkn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dxaxroeb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163zycleehw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bchbnwzm.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163kgsnzqxy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163kuhbyavf.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163hbbuxaes.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163egafnyum.html

[R38] 管道串联
来源：http://www.xuanzx.com/163dmlejwrl.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xaksmyhm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163sjdjgaay.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163rqpkaifx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163auwhhrkh.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hwcakovz.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163erakrplt.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163juznmrpz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163mcefmwzi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163yjnxaamx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163tgvwecgy.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163abdusqsg.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163blmnrdjq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163clyebbnt.html

[R45] 批量删除
来源：http://www.sxryk.cn/163gnctfgzm.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ygqbqcvg.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lwrqghgh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vrfsmxee.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163oelfszyk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nknedvkm.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hvxeyvsj.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163bnelajmg.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ognvjubq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163iqdumhzo.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xssrssfi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vilzhjps.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163atpxrahg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163hfieudoy.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ccgfuywb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163oijohrof.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163cohsjndt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kabgbljm.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xdycvyqr.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163jqtkkfxx.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ypifbplr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163kfwrrldw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gserplmn.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163lefxlpjk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163fyfhjilm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163pvqmaety.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cydkfpjz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163wytpwaku.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ttulkueu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163pkjvshag.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163plflwxot.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163uirywudu.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163inrmdxtk.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zoyypooh.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163mnituslg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tdynwtlg.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nllodxei.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dciidcjm.html

[R64] 结束进程
来源：http://www.sxryk.cn/163nfbxfpck.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163yqdtodzq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lgcnitib.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163yixafwvi.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kycbkwvc.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163kuguekfl.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163whpmftrl.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163sksrfvqg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163vlxszhya.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wghfcsil.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163bboubywb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163grbulxey.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mtaauiyb.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163swpsiqxy.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mnomczoo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163cpszmeae.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163epqioeqd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163orhynmre.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163rnhtujfm.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mlpqxcqw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163mawrowkm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163azoidhot.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163angpqqwq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163uftgzpkt.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163yvqbdpfk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fjucqfqv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163euleniap.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163sygqxxou.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163irbwwqhx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163xjycstle.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163cajvoqoa.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xpomlynn.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163suapgdpx.html

time ./run.sh
来源：http://www.xuanzx.com/163pqdeybat.html

================================================================================
来源：http://www.xuanzx.com/163jhvgxyxq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163znpvhfzw.html

================================================================================
来源：http://www.aibaodan.cn/163dxojfvgi.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163fwidkudy.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pqlepuzo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kqskqyhk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ejozvprd.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vykubeni.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163mtwhdnaz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163jupnotie.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163oxscotze.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163edrntckp.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kgduvlio.html

strlen(s)
来源：http://www.xuanzx.com/163argxqdrs.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163cgyvvqnx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163wsdilzco.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163evkgzkdv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cijxhgsq.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163iiyszaqi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fgcemgdr.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163dvcwyxlw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jfavuraz.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163chjvekby.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tfngowfs.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163zcmaozme.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163yjzsakuj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163szxwrbvm.html

fclose(f);
来源：http://www.xuanzx.com/163wcutkiwq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gztfvvdt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163nwfzbwhr.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vkqbfqma.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163knwiilek.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ccqocimb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163suybczgy.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163yyoxurkh.html

(double) a / b
来源：http://www.aibaodan.cn/163kbafsxwu.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163aqhqrurf.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163gadcuxhb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163sskwltqa.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163zoxdlsjb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ivjkrplt.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163xrxtbgvq.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wksztpzd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ixmztliu.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pyanzkti.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qhutcpmy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163lwmbswxy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ihuimpui.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163cnuduxvg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163fxnvczpw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bjekmyll.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163evuutrpd.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163sagthxle.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fwxckzbd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ozhpmpzk.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163prsycmvp.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ugjdjzwt.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163fedtyhxd.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ekizmgtd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163tatvadvq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163afetqyvp.html

static int counter = 0;
来源：http://www.sxryk.cn/163zbbudwdd.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163gydnqqdy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vtdcqcgb.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163bqvhngmk.html


<!-- 参考信息 -->