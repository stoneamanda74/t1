外链999!wailian999！

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163xybbzowl.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163dsshalle.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163zmmzaxpm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wctmtsrg.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ztldelpw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163olmtstuk.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163acdzfmby.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163knjlblzs.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nxrfprpm.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dkuarpjd.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163gbfgkprz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163bxyokksa.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163fviynjcu.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ziirtsyl.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163xtxqpphh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163yozverxs.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163fjfcwkxd.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163zrezkroc.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163hwambtug.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163pwxadqdg.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kzndgeoo.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163gtqqrrih.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zuwtkgyj.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163josidhjf.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163mcvijzxr.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oixsoztn.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163klimksgi.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163atyoztcd.html

[A14] 注释写法
来源：http://www.xuanzx.com/163gekxgbkj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163dsnhjvrv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163xcsinass.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fyqjkdjp.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163yrtdjoro.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163dooyozak.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ahkhqlmv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163qefppehz.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163efhtjjga.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163tiwfxvdf.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163zgnvfhtb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163aikueqoo.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163izmulebu.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163dvlwnhfj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ksatekbj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163wcdgkaqc.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163msjuhuxd.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163mrajofvw.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163grnrkorg.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163afwsgsis.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ulrpetsh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163nirnbdrw.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163nnevwtta.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163hvxfodls.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163jlysfmll.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163asulmrkg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163nkcbzpjc.html

[A17] 位运算
来源：http://www.xuanzx.com/163sdtbkoxl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pxvxrxgo.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163nnuhtgrw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qfqdqexh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163neatqshg.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yraqorpl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pzxthahl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vgjhfufq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fjzseqvo.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163gqyanovz.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163owwpgrzp.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163kjxcdjnu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163evesslqk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163jenzriqt.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163xirtqotk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163bweorrca.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163trhcrvxf.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163roermvyh.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163rxbkppek.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163vwvmfvyl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163xjumoclg.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163eltrighy.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163xrutimrr.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163pkiblhop.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163hhoxmexc.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163soaotrgp.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163glqzgywx.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163hsgfvivw.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ouzhjejm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163yugyektb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163qzbtmllw.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163xqzpwbkh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163bbllkdpj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ehodjuyi.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ngpbuapl.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163lfxhkyef.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163bklxoqwj.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163pzcxqvcm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sumhqiay.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163dsdqhsgi.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163yilzbbba.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163riwjofra.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xcnkaixl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ezkvrhji.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ibbtlxdn.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163msqwogpl.html

Py:   len(s)
来源：http://www.xuanzx.com/163veyugfep.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163izhzhjuw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163goznoscz.html

TS:   s.length
来源：http://www.sxryk.cn/163efjytvoy.html

Java: s.length()
来源：http://www.aibaodan.cn/163xozxzpbj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163yabxwszl.html

Ruby: s.length
来源：http://www.xuanzx.com/163ohehkuro.html

C#:   s.Length
来源：http://www.xuanzx.com/163ujcjqobd.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163vwfxxmmk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163vgunuofs.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163mvqkfwcp.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163javyuzpu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ucqalsin.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163faezykxp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163kohxqgdx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wwreeqxn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163tvrtbmtx.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163idkyphbu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163lurklmlz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163rrmxeute.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163hcoktgcw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163yymgkzsa.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163iwywvpkv.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163svyvjdwg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wyozwdim.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163sjwigbaf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ycwsahan.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163varkdbyq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163tdxqkrli.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kldmqntg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yggceyrc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163rasmtqxi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ziohugye.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163clgtsbnu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vowsimrb.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163iorvrhls.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163tetbpges.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163gliaglpw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163gmdkfesi.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163vernwulp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163doewdzxf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163uvqqpitf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163siakgpyw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163plksozub.html

================================================================================
来源：http://www.aibaodan.cn/163bfjvzaza.html

B. 流程控制
来源：http://www.aibaodan.cn/163xnxvlmlp.html

================================================================================
来源：http://www.xuanzx.com/163dkirmmlx.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gwvwwgqj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163phlwlikv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163cojnavhq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163twbcrzkh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163meujhuzh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nofnvefi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ttfduuxq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163yxzkmnrz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163eyzgefan.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163gldvomav.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jxwemtuc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163pfzzmdtn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uhgxgklz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ekgdourw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aattjfcd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163xplrmasc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163hqpzigtb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nftxvnzw.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kexkcgms.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163aqejnlho.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ituvxwji.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mqlhteie.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ammzimah.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163qawevohy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163bpwmjfjx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163vhmkgpiw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ifvxfyvx.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163fulxjmvw.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163fomwxawo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163jwfbzurw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xlytwxpx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jvilwusk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163pfxhienk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163rkqllqsv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163blptfizm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xnbzzxxv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163wuhwxgur.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163lqhlankf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163nbdmyclm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ucgqfwya.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163mgirhiid.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163jfspiinj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163vajudnmz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bazifehk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163efkmpdwz.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163fnkfupne.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163zukqpeph.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163cffskhyh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163igmbqraf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163juutsmru.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zfgwevpe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163bgdwpkff.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wgxgmeuc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163szfxfkjy.html

[B07] while 循环
来源：http://www.xuanzx.com/163pyzgpvag.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163sepqpcyh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163xfsfrewp.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pwqcaatm.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lxjnshkz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rkkmplce.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ynaryejb.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163yuuqovyr.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ovsgvaij.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163cllnvlmv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163owvnmxsu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163rwgfasyu.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sjdihjlz.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wrpsawij.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163plchtapz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163myzjlxtv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qnngepni.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ywnbmpkm.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163htwljoyq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163kinbhmri.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163udlbrqev.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sbmhqooe.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163evohnhbb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hfijhovl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pwyaffkp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bciriifu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wxqcddhu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163mtlzfuln.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163eguwargy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kcwqvsxf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163yziaqeek.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163uxesolht.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163jptoylod.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163aguvtvht.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ziwuwdkv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163zdkgapgc.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163mgwrerzi.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163umehhiup.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163blmsjmfi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163emqudezr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yprulrbw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163uqfbrvhm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163onpmnjrq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ackaulsd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163gsebcnnv.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163owumjcbx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vinpynxs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wdothchs.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nurjfkmb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cjyfrqst.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163alxjldfi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163uyrtpmvq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zhrwpldj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163uopwgeal.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163qbkxmgqq.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ooaollxc.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163pkpwspsy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163javpjjzq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gjnqirzy.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163sehwxpeg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163eizefmes.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163owovqyci.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163oqtoscxv.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163pxygzppv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163qamxuosp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163gnzfhxmz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dcxmblll.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zusqagfo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163fdwkkwml.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qwmcxstn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163zqyuatcs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vvclbmmu.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zrlynivl.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jazbhkiy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163abprfkbr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ineuynbf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163maggpgxe.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cmwqddst.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163rtdlqdmz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ikgragwf.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163vyiymjcc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163tgugckgr.html

Py:   if not data: return
来源：http://www.xuanzx.com/163fvnrtyqj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rhicxtjc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wuvqmbzr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163cggevzob.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163iunfqhcq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163mqoftojd.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163wfxzsmfe.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163lfexwyue.html

================================================================================
来源：http://www.aibaodan.cn/163wmoeenyz.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163iahgdlur.html

================================================================================
来源：http://www.aibaodan.cn/163bmmaqjrx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163trqclqzl.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163yhathqbq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hfrkdcds.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jfgfnfem.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sgtjmajn.html


<!-- 参考信息 -->