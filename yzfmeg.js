外链999!wailian999！

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163wteacpqn.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163mdubfxxh.html

Py:   str(42)
来源：http://www.aibaodan.cn/163bzekjevr.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163jjruzyfm.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163xsdjdisk.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ckahzakp.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163snwojdhq.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163jmaepztb.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163wvulqtyo.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163tjrgabuc.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163nntxlhfw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163iovctrlk.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163xejbxnpw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163fjlybfob.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163vypvalxh.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163vjidhqqj.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163wwsqeybc.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163egqqpcrv.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163xlkeaqbn.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ghjlszrm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163tuuraabx.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163vrjamndo.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163bzsyqoht.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163edhksqcx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163dnexxaou.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163anqlkjwb.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163ejyckmap.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163kknzockt.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163uxclndoz.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163rtpivpge.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163vfpyxmla.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163cnkszbbn.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wkofvmol.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163wqvplosg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163ywymkthq.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163nsexipdh.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163vnvgvedk.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163mivgwkld.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ugxgdone.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pftxabwr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lafbzgaq.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163oacuozdq.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163aevobast.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163wwyxmvhn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sglykhoj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rnridnbm.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163wyengnwu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163akjrcgsp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163dxlizbgs.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163lfeheeeg.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163khxqlfpi.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ugmzdmos.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163avclqpqu.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163dzahgpkp.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163xbwdvpmf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163rubzwwyv.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hiazwytf.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163cqsnrlsi.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163swloisxj.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163kezuqmkn.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163fcovbzlp.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163pxknkyfe.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163ppxthpto.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qwsctwwd.html

[A14] 注释写法
来源：http://www.sxryk.cn/163ikadzjrp.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163qcuurxha.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163piqnqwrc.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hzxdeyhj.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dmkfvsan.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163eezatohl.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kxezswgy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163wekaxyvi.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vznxufwr.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163knijquxc.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163eqkappkk.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163haahyqal.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163mxaibydl.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ujgjderv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163qhxfryyn.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163bhstojam.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163tvroflti.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163nspkgxmc.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ftbuevei.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163adozhxpm.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163abzvevna.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163dzwmhdkn.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163rmutyyus.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163dyltsmpl.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163nodzebfe.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163fvvaxccj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163gffceyol.html

[A17] 位运算
来源：http://www.sxryk.cn/163ezbawlpa.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kfhepxms.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163admwqvke.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163horhmqyk.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163xiejpxmw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hwyettbh.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qfedcfvj.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bjceuuso.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gkvicsmr.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163okofqvft.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163bkxlfycb.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163zscugghp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163rodlqgvo.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163xgtjmptf.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163wznungnz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163acppotqf.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163mauydsuj.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163eppkyvap.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163scxmcroq.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163lwbczdre.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163qixkjpwm.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qvefqxwu.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163xsnuuhje.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163rwqpvomj.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163blaskqni.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163giocncnt.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163empnvmuy.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ojmtwbgo.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163vjlycadb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163uapzsmaw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163usvbrows.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163wddtrugw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ebhzexof.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163itjhmasn.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ervjlnzh.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163mfqcannt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163gqcaifma.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163jgktraug.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cizoofna.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fffhbyjk.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163eeseejeo.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dwjetaor.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163cixqwelm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qrapaufg.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163asgvysak.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163zbiobtps.html

Py:   len(s)
来源：http://www.aibaodan.cn/163cvpeqxgc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ijtzrpaz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163szxnwesw.html

TS:   s.length
来源：http://www.sxryk.cn/163igtzojrn.html

Java: s.length()
来源：http://www.aibaodan.cn/163hszqxfgi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163monaaizq.html

Ruby: s.length
来源：http://www.xuanzx.com/163wvrhjsdu.html

C#:   s.Length
来源：http://www.sxryk.cn/163eydbrapu.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163qyzqegfu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163gpfjdxpg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163fgsvvyjo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163aqaxecmm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rjoqhxen.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nojlekrz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163rqbhsubr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163nhrdsexm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163dpuytcjf.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163sxkccyil.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163asduamja.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163kiyxevvf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qgoxundz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163nvgmkzpb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163sgtzdnyv.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163gdesxvdz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163owatgvad.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ozexxkyh.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163evzpbmtb.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163zhsugvpa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163wxwqxmgt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163pruhgrbu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gtfmdqom.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163dzwqfsxu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163pobckpbe.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163prmgslue.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hbsgerno.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163maptherx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163knkajaqn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163wljhekdr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163dlbykqcs.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163jtjrrvyi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163hihgyqiy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wlfkoajk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163fcfjubau.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163iwrdybiu.html

================================================================================
来源：http://www.xuanzx.com/163fwzjjuxe.html

B. 流程控制
来源：http://www.aibaodan.cn/163fdjumsil.html

================================================================================
来源：http://www.sxryk.cn/163sopezkag.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163vtfghtzu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163bpoctnrx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163dqavdfhq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vfihtcyq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rlvnhfix.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pvsaaozf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163gambggri.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ibdsdbwh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ykepyyjl.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163aonghelf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163otebrynm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ztpygecp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zqkjjcdl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rfhagoww.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ayvyzirn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ionvgoyl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163mskeakur.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ztqdjkoj.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163udntivfw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163blapovfn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163addebpuf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163znoznlqr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ubmxvlur.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ildccrdi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163raqjhyzl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ghqkjzhv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163igggxkol.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163hhtnxywh.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163giiiuaez.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qazyiihk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ouxnncnj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zwkrtgzq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163iwrzrmwb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163dujefdkx.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163bmkttynv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ycxdstpo.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163yswbsafs.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163mytpfvhc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ivlsnkyp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ygqdbkjo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ssvijxjt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163gmmlyxto.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ttvqsbwx.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163wriczwgj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163mzdyqgti.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163bpbawfdn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163lngfwrbn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163xwehysnj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zhabzsdq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wtouvrxs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163mjeqpeje.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163hzplbprg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163stbwacwj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163lfyqpijb.html

[B07] while 循环
来源：http://www.aibaodan.cn/163gcaooxek.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163tvrosixs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cnkmjxtl.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dmbaggsu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jcqdsxbw.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163owftmmej.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163kwseoueq.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163vzbguvdp.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gukyrshp.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jwcillch.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163psauptcp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163owvpsagc.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zmhbsukx.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wkurjqai.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163enjibfns.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cbgbtqie.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163iryyhxmf.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lolvsbwy.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xblqyfmk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163msloofzc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163midobwjk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eumnczqt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wnievpdu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163opjfgwej.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163gzlduxyd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ohnzfqsn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sgdvyrjh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163krcehhae.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vlkazaao.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163fzvehrii.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wibouoxr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163gfgexqss.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163qwfyixrt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163thiphnss.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jkqptjpu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163iyifepte.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rwfiiyvu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wwnuvesq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163trzrogut.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bhlidybu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tsdggqsb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163rbdyaohq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163epvissmt.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163wxprgmbe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163otincqvq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163kiuenrii.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xrnwxhqp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nrtpcdsp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xnekmitp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lvwwxdna.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fyvfggne.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163egchxwnb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163fcvpsceq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ghhdaqwp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163rjcvhkdu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163wbceapet.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163hwzzydzg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163gsofdhcz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163huopbpeo.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ltwzlcbd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mmizzzya.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qobqzdwt.html


<!-- 参考信息 -->