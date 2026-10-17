外链999!wailian999！

[Q61] 移动平均
来源：http://www.xuanzx.com/163aasnqbgg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ewfzcgdj.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ddjscrky.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jjfnhspl.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163shkwyxta.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kxhxxghg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163wttxjmml.html

COMMIT;
来源：http://www.xuanzx.com/163pmjpltee.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163fzlskmtj.html

ROLLBACK;
来源：http://www.sxryk.cn/163rlubtrms.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163favxzesw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ruwfeuag.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ujbnjycy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163qvswkvuo.html

[Q68] 保存点
来源：http://www.sxryk.cn/163davxlkep.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163kyfevdaw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163sfmogulp.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163trqkkbpg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ypblzdoz.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ssuwvhud.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jcavjixk.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vvfqcqlx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163asatjaio.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163kezeyopk.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163krpbpewx.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163brfsipjl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163mwzremdq.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163zpirgnfk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163gxjfkind.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jatjktbe.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163xvmxatld.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zjhtkxhy.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163yrtlvphy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163zsylfytr.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vjrgfasa.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163kbrgvnir.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ehughfsa.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163tkehkwih.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163sjbvujax.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ddnauwij.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gckuefxu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vyrzqyhq.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163bxhtghim.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163bkropyms.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163kbdozsgb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ephkckdi.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zmpyfbic.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163mcaglwai.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163bfpaesmu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mjfcinlr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163urryhyir.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163xnlulyrz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163nmmwgyvq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163higklhxn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ykxlyzbn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163mivsbtvy.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rcyiwaug.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163uybxxjzc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163qehhbozi.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163tomnpazv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163rtbritye.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xzldjzae.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163gqymgakl.html

================================================================================
来源：http://www.aibaodan.cn/163regvrapk.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fhotfvcq.html

================================================================================
来源：http://www.aibaodan.cn/163kfqollcz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163senqwccd.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ukcbflep.html

set -euo pipefail
来源：http://www.sxryk.cn/163hhylamlo.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163penmdzpu.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163agbeguka.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ylbetvlz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ohxtavmg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ajbstcko.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163taqldrgb.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163kkjmisjv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163gwpspsjl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163znamidrn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163saijluhp.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163bhhgkpke.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kxjyorjt.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163kodioawk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mdcefjsw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163etccwrsx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163onzwpxdu.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163qbuzsasq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163fiwblhvo.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ollalwhh.html

case "$1" in
来源：http://www.xuanzx.com/163eqgbqbfy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163vrgfnfvb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163kjnweqri.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163gnvzftcw.html

esac
来源：http://www.aibaodan.cn/163baptbjuh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qirtfvwl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hjwxjmtl.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163xzyastmt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163tcacbsss.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163awkhenfh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163mkiveveo.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163vmgrxoiw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163kxuksnlp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zfpgaqek.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163dewhzumb.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vehyjsao.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vvsqfhaj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jqhenihr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163frjciizs.html

[R19] 数组长度
来源：http://www.sxryk.cn/163njkpnujg.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nsvnwyte.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ctvffqjd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vyvwvtzi.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163gcqqrfnw.html

echo "${#s}"
来源：http://www.sxryk.cn/163mishvvbw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163tsmzeajz.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ctqqkinq.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163enlztjrz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rgnwhdsl.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163fvwkgfeq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163zuywhpri.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163tcezcdqb.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163kqmyfdyg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163fsiqlvfh.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163eurokkzc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163awuaxoaf.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dpwszlkd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163arjdkftp.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rpmaueyq.html

[R29] 定义函数
来源：http://www.xuanzx.com/163gqblinso.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163hhypbuxa.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qxeocypc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163pssmxmks.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163elemyeju.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hejipqsw.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163texviaky.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163bssbgunx.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163qwhwmtte.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163wcuqwmrn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xardwfbk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xsztqwqt.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163biegbkgo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163voizktlf.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ybpztbxr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163uyzamarp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163aiafmsvy.html

files=$(ls -1)
来源：http://www.sxryk.cn/163mfkalxqf.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mektbaji.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ppdjzleh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ccwsljeh.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163lzaxhxzq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163lbzpxrex.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163sdorqdiq.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163xozfqppr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ejxdpxse.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mjqwswur.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163bwzoevtg.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163xeptyugh.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163lojfkcdn.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163mgsdunzn.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163yfeizdkv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163avicfsvt.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163okpdwijg.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kspxxrai.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rqcjldte.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163wkivifji.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163dxvovqbg.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wrqactwe.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163aullfbmz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bbtkkgcv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hagotmnk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163amtcfpce.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ksqopjxc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163mfrmkbnb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163oblsjpij.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163uxwehyrv.html

wc -l a.txt
来源：http://www.xuanzx.com/163vkjjfatb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163jdadgvkh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163deqgeosz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zvxcawdg.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ypolykfo.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163oqzldukn.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163voknntdh.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163hjsxmucb.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163wxnctswo.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163phsuaetd.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163cyqbfllb.html

[R58] 下载文件
来源：http://www.sxryk.cn/163uaziccbd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163keqrkikv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163eadrwvbx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163lsntdyde.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163dfiuakol.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163gcxefbow.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163kkyavavv.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163fmqunsvf.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163uwkqruxb.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163lajpamuo.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qqhrtilg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wksarmvk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163omrthdcn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163edejchks.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163jeapboog.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163tctffyys.html

[R66] 定时任务
来源：http://www.xuanzx.com/163nunjnubg.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bwkeztgm.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163movlwiug.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163llbuygjw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163gaawuksy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163crnodahb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163okhexubk.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ehscggra.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163siekvujq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163krohuqsv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163iiiqvjaz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163kmbxpsfw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163regzgszh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163uxawszam.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mpxdhaiz.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163idtobuda.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lkmabgvx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ekhuuhed.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ypvkyomh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zzidblif.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163syfxtdde.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rxgaeidg.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163hukavpjo.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hsdjtmrv.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163lxkqawhu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ihklahjg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163txgzwqkn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qkwvvwsr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163pjakansv.html

time ./run.sh
来源：http://www.xuanzx.com/163akdkrbyz.html

================================================================================
来源：http://www.aibaodan.cn/163idpxvdpo.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ifxogszg.html

================================================================================
来源：http://www.sxryk.cn/163gedmplgp.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163xdeiurtj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xuzmzagz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163jbzwaapy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163fkwlbokv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bgccxcgt.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163srlrvfgc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hgqaatns.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gkttrenj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mydnutkf.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163xzifrorh.html

strlen(s)
来源：http://www.xuanzx.com/163uqemlhxs.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163wozuvbxf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163mtmuukjl.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163pszebyla.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ymlxolbs.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163fgsmrrvk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163uepwyutp.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163dbcqqjpo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163eazkgjxg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163smwjhjgd.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163sbbbavau.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163cetujbye.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xobqctzt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163pwzbsmjl.html

fclose(f);
来源：http://www.xuanzx.com/163ffxymamh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163pgardyrc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qwbvuekj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ooshkgkb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ibcwfqka.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163fhzityin.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qyyvtaax.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163mrclxcqc.html

(double) a / b
来源：http://www.xuanzx.com/163ibezzwtm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163cjjchakv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163rldflbxr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163xmscklfk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163evareuzk.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zyrctysf.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hgehkdgg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hpuhhlzf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163uzatpret.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ncnjjkgw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dcspqbfa.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uwqtvbjc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163rjckkjyj.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nghswwlf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163pdezhhrr.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hrlqljba.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163hclrgnpt.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ivllsurl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163zzpcbdgb.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163maimslse.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163khejyhuy.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163zojrbwqq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163hwktssnn.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163cuojhmzw.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163qgevtuix.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163nbazkhio.html

static int counter = 0;
来源：http://www.xuanzx.com/163bmrvubjz.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163dmjjyemd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163gbrgurrr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163lwzpheml.html

#ifndef X_H
来源：http://www.aibaodan.cn/163rwcjchkg.html

#define X_H
来源：http://www.xuanzx.com/163gpvkhhmh.html

#endif
来源：http://www.sxryk.cn/163ssqtazre.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163cwqorcnq.html


<!-- 参考信息 -->