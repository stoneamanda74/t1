外链999!wailian999！

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ycvgmtqm.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ewypkndz.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163qpzdqcef.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163pvctensh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163tfruqpmy.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163nagsizuk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163bxethltz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163igipihwd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163kegwslzd.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163vhetewkh.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163amwvihda.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163txqawmxa.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163cirgewvr.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163rikltfbs.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163bxolvssl.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163kycibpkv.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163aksjwtwz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163tbozqhhx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163wohijzdc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163dykfvmmb.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163ntbxfyug.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163wvwxfovf.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163grlmijdp.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ivntvdhw.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wkppelbo.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163oepfyrgw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163rxmtkwef.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163huqlaqth.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163yvbbhtej.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163zfatifdt.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163saigisdg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bvlucxuc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fyxznkgn.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nfnhlqty.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qdsjdqcn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163cjjsvwyo.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ijgedlps.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163duplbumk.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163qmtywcyt.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163pcvdgsem.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163xxiescjc.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ljshvfzx.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163bqkqneeg.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163khnxeuev.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163goijvjle.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163zxkxrcdc.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163msamgkvi.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163vpdtszid.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tapylbzv.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163vdxtdzwr.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rigvutaa.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xklwckve.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163zhgkkeil.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163epczhttq.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163fiumiuub.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ufetphfp.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163bytnjbpn.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163reuwrkat.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dencrbyw.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163aoyexrau.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163idvigngm.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163hrlqmpuq.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nchmuxej.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163oedqowot.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sltaglst.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163bfpfzthm.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163jyypuzgu.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163mgtcfqzm.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163gzlcyrnv.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zikruydk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163samdrxrm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163jnsqqpyb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163rfyntdbg.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163rtfyhcta.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163wrpzxdid.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ciqftnqi.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163gnvtmtlh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163coshtcpm.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163gadpppye.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163hvzsyanu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163fwtpenww.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ksyfsouj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163ddfrhnik.html

[A17] 位运算
来源：http://www.sxryk.cn/163smqthwgg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kvymnrwo.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163heeqrijx.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rlirypmj.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163hcqkqwhy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163njaxlarp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163accejzpl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163eyuueobj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xofvksqy.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163okschkye.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163aapcgwvm.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ibzdxqou.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163txobnfvw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ztolsjoc.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163yzyhzxas.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dfmaxukl.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163xaswncis.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163litddcsc.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163bwzumwno.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163oagvxxlw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163xrcipiui.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163tkkukybp.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ffplzpek.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163mcnedoqj.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163pixikdej.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163wphnujaq.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163icqcsopo.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ibohrekk.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163dlvabexf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163rppbxesg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163bcxwpybp.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163sbdoyrdc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ajwpikwk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163bmficqwn.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163afhrplsu.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163eksatqlg.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zueicmtr.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163peoyzzpx.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pscoffys.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163cmeryfmt.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ikpvcovb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qysrqgxe.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dlfepdwv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ylwdcogq.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ikyrhohu.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163psvumiqn.html

Py:   len(s)
来源：http://www.xuanzx.com/163mgwexyxo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163vkozsycl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163sswmrjyj.html

TS:   s.length
来源：http://www.sxryk.cn/163wmmyxrsc.html

Java: s.length()
来源：http://www.aibaodan.cn/163txkmsodd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163onjkitpm.html

Ruby: s.length
来源：http://www.sxryk.cn/163htuqwoyg.html

C#:   s.Length
来源：http://www.sxryk.cn/163dmdefjab.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163nbqgektl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163sjhbfywa.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163fopjfwsc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vlhdzkow.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163syiqkulz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dcdnxwqq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163pkhhuohx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163lvkbehgy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163abfgovfu.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163jkxtqogl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163cyfniwhb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163yzwfabnw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163fjfmydti.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tnyzcoye.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bnkjvsec.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163tcdznbjy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163hzvedqjl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163qokdzxus.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163mgyvdwlr.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163kvcunaif.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xacvwxay.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163pcobsksb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163qdgykxel.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163qgjgbhqq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163lxqkmpxf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163gfeapbhm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cmfqdoxi.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163pnbvhvxm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163lytlglus.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ijwvpeby.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xxcyzsfg.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163xziquxxz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163dxxlgudp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163gwahjeyj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163fxqfyjco.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qczuyhwf.html

================================================================================
来源：http://www.aibaodan.cn/163gehbbnph.html

B. 流程控制
来源：http://www.aibaodan.cn/163eeejhkiq.html

================================================================================
来源：http://www.sxryk.cn/163fpmqegkn.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163aeokcbkc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ctyilmov.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kqncltyl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mchyiezp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rtvfnirb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163avbcvkfl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ynqekegh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vjowsjsh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163komqsoyq.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ffmodelg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163bflyelsh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163krxzorux.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gdifkoqo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ryhbgqci.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163msbivatf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ysmvsfkz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163hajqazgn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ayihysdc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163rsgwatte.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163vbenkciw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163dhsopyih.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dzjgbeff.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ktbormya.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zqrieidv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163mfxxxzox.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163rvfczrjc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163wtwzurxs.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163hpyhqfuk.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163foeacugh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163spljudnh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gdhmmfum.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vzwdyxqx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163gvlwnffo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163edzkbyga.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163orovqioa.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163zsjcfxsk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163hkmtyttj.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163sktdcuwv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ehrsokid.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163fbgdblay.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bxdsqcjr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163aqdtiiss.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163jhffidlz.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163kmfuotuz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163swliuurt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163djljuduq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163itfseydk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163hfljqwom.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163agvcikgs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lrbdhqiw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163vmhpdjtw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163gfvntupb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163eymfgubg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163wzeubanw.html

[B07] while 循环
来源：http://www.sxryk.cn/163arhqcrlx.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163anwopdbz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163pheyxxml.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mlxfxxxr.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mbkriees.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163quhdxmop.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wlggurxm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fkzmqkum.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xiwyrnhc.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gbqozmly.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xnrzkvdi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wgkzyqqx.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fxjepxwa.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wnvedeer.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yftwbfov.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163sjkkxvja.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163dyyphdpc.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ezsqlnow.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dprphrgo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163uujfpvdz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163uloksmag.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zrpocuxq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fnerlzrx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rdhloebz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vebehrjh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lcmqvwyu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xkjsuytq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jqdeaakm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jjufnydd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163pogpewcw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163nuppszug.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163fupkgpan.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163amxgarld.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163xyynrybv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bbkaycti.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163khcvdkhj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hldsxrtr.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bungxovn.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163uapssxxj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dbnzzxkb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yhxjxndb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163avnphqod.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163lxdpswmj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zgryvcng.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163kksomhfw.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hkwtozcm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163mpfouhkq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163uwglrpjc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vasvdbwc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fmmfyotg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qwgvxdyd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jvazgnip.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163vcstdsjc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ukwykarz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163uiacsruq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163yotjzqef.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nwkvlahn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wvshcgkp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yfcjdcvh.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163zieoiswl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163krzamigt.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hbcevyrf.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163mtrmqmhl.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163tqhjlngp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gpcygibo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163iknrszuz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163aodbonlf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ntpmcwtw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ryvxupvb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163pinmiffu.html


<!-- 参考信息 -->