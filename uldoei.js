外链999!wailian999！

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163rofnjezp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163fbkwlbgw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163mpzqxmbf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163fmazlsco.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163uarjhkdd.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163xiokcywk.html

Py:   str(42)
来源：http://www.xuanzx.com/163mhfyujkt.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163ulhilvlp.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163kfxlnchh.html

TS:   String(42)
来源：http://www.xuanzx.com/163wjxhjqmz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163eguhwbdg.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163gdxnwkyz.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163bvoyuqxo.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163avyeoytl.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163bpwmfimg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163yvtjsgum.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ueimmvzs.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163tesohhlo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163awypdegv.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163rtnjbqey.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163jbglxusp.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163steezpwg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163hrqxiilu.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ekyjvyks.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163chjcmpkw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ffvvdhpz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163oiotdlwk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163gztdvvgb.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163qrpbfxpb.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163dxugnuxy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163bzciqznc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163gmktalzf.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163yxqnnvnh.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163xcwycxyg.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163iqksqlxj.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163yxhffesl.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ycwybosh.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163nuppklql.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163uivptyen.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163dyvzyksa.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vcpzqphk.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163fjrigcpa.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163gnmmnfbm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lbvrafkx.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dvllwbys.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mjexlqbs.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xxyxfuyc.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163sqdylach.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qhgmzboo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cqmlypwr.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163htauvsln.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163fgziabwz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163bfkezhwb.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qziykede.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163lcbxtxvq.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163ehwaficr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163gzeqhnih.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163mnmsnzpr.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163tmrvddgs.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163fdfvoosx.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ykpsqjar.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163csmtjklj.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jpprncdh.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163asfclpkv.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163brzphwqe.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gpdogmdk.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163bwhtwetp.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163citufkga.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163esrktqms.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ixnfwiqp.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vlnhtjot.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uupkyvlm.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163yrwdayhj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163znnurtcd.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kjwqxufq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163iaqinbjd.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163krvpbbbi.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163mkjsdsdk.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163znovoogs.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163xviksflc.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163inwntdyx.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ggwvbuzb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163xgsiksot.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163tlwzzggw.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163dthopybo.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163lnwqipdm.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cpmnuqcq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163fevacpjk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163cfkzitkh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163lzeddljk.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163vvduzybe.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163mkbkghan.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163fpvuolum.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163disaqdkj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163xjfjojtq.html

[A17] 位运算
来源：http://www.sxryk.cn/163txyqpyar.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jaqlibvl.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163pfjukqpj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mqyszziz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tmzxidgx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tdjofwzp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jjtbxkhi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vveqthnx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dpjgixhe.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163pbfuejdu.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lhlaiocu.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163rwyxzbnv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163cehdjfwd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wwiynomd.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163hyopkkpe.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163iatnmbuh.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163jpgoxvxm.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163bpcsodox.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163azsosxpn.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163bbphqtuo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163pkdslsbx.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163pwtqhxmp.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163uztezfah.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163qesizsnu.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163efhkrolk.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163vjzobssy.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163opvggcie.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163letvbcoe.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163kbdsgydv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163euslnidr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163onxxfjiy.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ajiizgcb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163rnmpftjw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163wwpcgfwi.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163yjgpxauy.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163pypmefzp.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ahjzbhso.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163nyqbqukp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vmyiqwyj.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163nioicmnm.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ekiykwdd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hrvzotxh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163iytutidc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qdmlmqlo.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163zopaanry.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163pnnqdeja.html

Py:   len(s)
来源：http://www.sxryk.cn/163xbjvxjyl.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163wzuvauwg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163cwkgxwxi.html

TS:   s.length
来源：http://www.xuanzx.com/163uznoaobx.html

Java: s.length()
来源：http://www.sxryk.cn/163nmvxebuk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ycxcovkh.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bpugtupo.html

C#:   s.Length
来源：http://www.xuanzx.com/163yhdyvvct.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163kwdbafum.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163quqyxfej.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163bqgevxsf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qufepksb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gjnyclrk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163svaympus.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163bhzxdavp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zparcqhi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163sflrbkub.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163cywmbalw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163fitzqjya.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163bwhzekpk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ivukkbzf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qppoonbp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163yxjwghzs.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163xddpgxtq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163xrgvbamt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163mdllfssk.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163aeuxjzcm.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163xnrwwsik.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163aqzrpsep.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163konqzrgt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163adnmpcds.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163wafpehng.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163kvjwzkiw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163tpbtzzhr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163lmrzvfhe.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163mifuhmdt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ewkqomne.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163wllkyxkq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163jcgouzfk.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163xqkbmgxq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163wyhennal.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163gscnpbcl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163sfbxtxwm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163kbnglzlz.html

================================================================================
来源：http://www.xuanzx.com/163kmkzajwj.html

B. 流程控制
来源：http://www.xuanzx.com/163bhbbvrtw.html

================================================================================
来源：http://www.xuanzx.com/163ycoiakjb.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163zswuqzfq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163rrnlwsir.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163uqxavojo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lcgknbxr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wdafhzzq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mmgzjzvt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163yifyiiuj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163lukscjsg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sixjaket.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163hczvfngh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163mqkohqve.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163mulcmlry.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fbdpgskp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163frjzbzsl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pcyfckrv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163rolkahhk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163vcspusia.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pnmulpgr.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163cqbhrcce.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163zmafnsem.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163gtlyhuaa.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pgdmgnid.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163onbfracc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hvspspte.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163sduedchi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ulxmxebm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163fivlvetw.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163mfxhhgmx.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163koyqetih.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ifbjphle.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ywcxymdb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163itwlcdua.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163snbtdyxb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163fcozqjfr.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163gvoktyus.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ewdqmhvj.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163yqmxbqio.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163sttqvjwb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163rmadzexz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kkftijlk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ujcxzhrh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xeqfjdoy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ixxvkcfg.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163rturpaqz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163roayszzs.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163stlxvjqq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ldqcupjk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163fnubmqid.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uifioejy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163oepcnauz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ajkbfkes.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zddddcdk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163rtngkekn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163upxognlu.html

[B07] while 循环
来源：http://www.aibaodan.cn/163nywdrugk.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163otybecqn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163qsmyujeq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163inajhyhk.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ipycwqto.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tjobulvb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vjpqxygt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163rjsqqmqk.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zifusgdg.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163swzhbirh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ngteyzdm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163twxlfaat.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nlxqnuwg.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ltywevaf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ktjgwgvh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163vxjtfqov.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wyugnqke.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xzrcwycg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163htvixgzg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163antxolan.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163crxccpjs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dqqopxqz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qlauyigv.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163izcweqhk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163lpeuzizc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163mtqnynis.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hwjxzvdl.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163hdufmmvw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163hdhojuci.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163daujrcrm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163zxzenwjn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dvpfgjol.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rdoorixj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163dfecrvrm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ondvvgea.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163czviicwt.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163cqyqstff.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163pwmetoxg.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jqseiviy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zfayhccn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ctwspeok.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163imbuhalt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163wetopnsg.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163kfysccgx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163olkfgbol.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163oriczcqm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qebbhpoy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wlpmykvv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tsncqpjj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fjodkgff.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qvpuyttn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163pngnarcy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ykpvubgr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163dvtyfkkp.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163dlcmkhzw.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163frkhtinn.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xddnkznc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ifgqxbjf.html


<!-- 参考信息 -->