外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163voisuojj.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163afxbaoqe.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163jfayalvq.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cfeqoiby.html

[A14] 注释写法
来源：http://www.sxryk.cn/163lqerprmc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163yskyxece.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hjohufhi.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tkoesypq.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ukvyoxer.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ntwcskaa.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163taurbsjs.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163wsrdlmtq.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jaesorgr.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163rrnqebka.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163zuvpdyyy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163mhoscyam.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163nsqlkmfk.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163whbyvwrk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163fygzmdax.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163rmpqujuo.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163xewvfjzd.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163pqugcqbs.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163vmqlwaah.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163izrlekic.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163vpmygari.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163arbwztfl.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163evitgjyv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163erxniiex.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163dfaokxfs.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163bvbtvdgn.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163euuxhyie.html

[A17] 位运算
来源：http://www.xuanzx.com/163rcejtesy.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163isqkorpk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163bgouhttf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yxbexjpv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163pznajnxm.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vcnfarvz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nqjojfoz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xxzzxqvp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163shdsyqdx.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ddtajrls.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163daduufay.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163fbqojmyp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vieichos.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163vowpkevc.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163chbhnuzs.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163crcyfrsl.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163glbuynmz.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163xqwjukdx.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163elbhszdf.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163gjskovrm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163rovkeqhf.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163tpkjqvyu.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163fzbkzuoc.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163uesafttp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163qwpfhivo.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ejkuaxyr.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163epmewrrf.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163zhzxbhkf.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163xxiyrkqg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163filndvra.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163sgsyeeib.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163wugdrrns.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163vasvvxnl.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163mlesqupu.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163qxhlazes.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163hsjbdmhx.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163gqfildxl.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163uejdttaa.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fugnueaa.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fsmoqohg.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cngmimmt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163heszwzck.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163epkcmzof.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vkebgmpl.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163eqogngrp.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163lndpppon.html

Py:   len(s)
来源：http://www.aibaodan.cn/163bfekoxns.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163kccnajwv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163fyshsbvw.html

TS:   s.length
来源：http://www.xuanzx.com/163iimsiujz.html

Java: s.length()
来源：http://www.xuanzx.com/163pyzygcmp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163yojsuxje.html

Ruby: s.length
来源：http://www.xuanzx.com/163mqrclstg.html

C#:   s.Length
来源：http://www.aibaodan.cn/163byyrppsy.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wfdxndvx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163xjrfobwv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163jvzrilqs.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wlahlena.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ukkuojaz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qeuuhmsb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163plgjsvah.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163qwzngkwo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163kohrmifn.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163wfkdibbo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163ucqldbth.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163lotzrnym.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163htzkjbzf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qtbqdxkf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163swprrpuj.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163lxczurje.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ltedfchb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163wxuwzfpo.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163mymarlbt.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163xcrrhptl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pqchmyff.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jpokvrpa.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sbojhzqp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xftsfany.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163neupqvgl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163msnqtwrr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163szyfzzmm.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163apfqluux.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163oopypmwv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163zfqutgyp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ojwjlzsc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163itzjalou.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163qtalhinx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163lduljwyj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163lttctygi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163pkfkfjul.html

================================================================================
来源：http://www.aibaodan.cn/163dubtxgfg.html

B. 流程控制
来源：http://www.sxryk.cn/163uynaiwlv.html

================================================================================
来源：http://www.sxryk.cn/163geucqifs.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163czxlsgcm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163cntmhmhu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163bdelsqkh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xsctxmcq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rvxtqblb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163habzhslh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163iwwrnrxo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163bnfnrpdo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ipwgjnlx.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ytoezhox.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163lubrcvfo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163njsxowdh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163erprslyx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tfkwrwwi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wfupalwz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163kvuvluio.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163thbrkeel.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163meintvxc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wnfdmjvn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163npzmfxcu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163tiofjjtq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ivmcyrps.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163iskfamtg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zaqrzvut.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163nauwbfah.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163nukvlnuu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163qsdduuts.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163lzbavvjg.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jvuiwqpk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163vwttnqps.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163pxvduiua.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tagduvvf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163whopcpwq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ajngdjgp.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jiodezub.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163zkvqlkun.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163mtqkebvw.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163gjbvhewt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163zauyyact.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163yovqgyzf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lloxjsok.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163hkbwpmtp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163xfxbltzb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hirpazqj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163zemnnnfc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ihkzdpkj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163vzsehpau.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163fvnnwgms.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gyaqqdvn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vgsnligd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163utgtbebp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163zqobwxic.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163dmpuxgjq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nqhigeiw.html

[B07] while 循环
来源：http://www.xuanzx.com/163tkweebvu.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163mpowvzet.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163tcupftag.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tepiziil.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bjsotkda.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bevjczmc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xcyrejjc.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163kuspuujf.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pgemwenm.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163xklhbrmv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163aaczrsgh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163klybllvb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163doyfxqef.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uwhutieu.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xniykwww.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xpytyvod.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163yofetstq.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bpfrhjsj.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ynvgsvdy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163dzjypjhq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nxnyhspd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pgleagzs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rhqlpldc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zmpfyiwq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ufjfucxq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163nptkapqh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163iajqeysk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163gaqorynk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163xfehpndw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163fxfghvut.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163tbknswbh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163phhppowz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163oaymdmnn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163bnpjcaln.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163cexbqzao.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hscfbkij.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163mmcgniqn.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ycnlwchq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163qvrticun.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ylxpcpcg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163akhuiqkl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163givckdax.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163dqwnqehv.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163cyylmsei.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163gbyjszbb.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163psnucthb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ywyumvxt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163encrzswc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lktzenyu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sekmwmwm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uffxurbv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163fdfzllrz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163vemvawye.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163hctbdemh.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163lruvmcmh.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163mbidfpzi.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163uzxovlkc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wtvmjzzu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163utxhukjv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163rwoddgpa.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163matlrnxk.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163dkowtaus.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163svaldygv.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ljkhqsqq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163dfdsrswu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tigwtbyu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fszmalaf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hmixzfya.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163eepznskq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163yjkgiyji.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163auceooru.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163nnuaurbf.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163wufdhhml.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163zcuaquil.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163oqyzlyke.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mdtvjvsc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163nxxoqcpy.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zmtbuids.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163upxggzqj.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cxpbfnrn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163xonpoada.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163jafsoqtj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163cqowayic.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mhqralex.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163zpnabopc.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163aeqywmdf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gpfgqttj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zvnwytah.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163phyvqddt.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163fjelrrho.html

================================================================================
来源：http://www.aibaodan.cn/163imgvjvvs.html

C. 函数与作用域
来源：http://www.sxryk.cn/163lacpwbzr.html

================================================================================
来源：http://www.sxryk.cn/163yhhdiveb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ylfvgwok.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163allmsxyd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sthxpick.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nzfkamfb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wgpzhouw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xeuhkivr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163lpjoixax.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163sezecivk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rslijffp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xpuauiil.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163tqxzjnrp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163igkcyhtw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163vdgfjyvf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163sichicvj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163lfrmjziy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163xxikeula.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hgzxxpnf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ejsxtcti.html

[C03] 可变参数
来源：http://www.xuanzx.com/163myomgehs.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zqmwkrep.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163slujzdht.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kxxcddpz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163crwfkrdy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cvpmxtkc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163iwkhhhhl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163nrnrxthf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163muaprnfc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wsztooxu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163uhpusucg.html


<!-- 参考信息 -->