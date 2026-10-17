外链999!wailian999！

[A14] 注释写法
来源：http://www.sxryk.cn/163tzcfyfau.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163vzbshjzz.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163takpezwe.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ydvbiejb.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wpufdzdc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ybvdabge.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163hnxcvrsp.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163bnaeknzn.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ugkdbcha.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163srowkwhn.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163sfkzfnnn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163ywygmrto.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163pmqjxvtg.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163nxvauwhc.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163rhrsummb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163phtfkbwf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163thsbbple.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rjrmogah.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163bspouveq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163dbuzrojt.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163vdzmcmbe.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163gahazakr.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163rktpgbqd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163uqiifhqd.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163wlecfcqa.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163luxongfq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163ouceksfo.html

[A17] 位运算
来源：http://www.sxryk.cn/163acpouemg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163raorwjok.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163wemkwqpu.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163aeyfekhg.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mxeogkjl.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jqukvfue.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qvprqasj.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163flqbhmql.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tiearyrh.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163swbabtba.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163tnlgjljc.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dnasawdv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163yxcsofzx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163hhonjbyg.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163msoxgtsl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163viyjmrrn.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163fqemmcqd.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ocsaijyd.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163xtecftgq.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163xlczuubz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163nrsrnlhn.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zawsflqe.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ptexgijl.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163kzncnucy.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163zgkbufaz.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ylaqqijj.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163qsiripik.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163hopwbilk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163vibzbymi.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163bvgktrps.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163lyqyqbsq.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163dsdmegpo.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163xuqdqedb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ahrklqvu.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163hqavfihh.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163esbrdmfo.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163prmeamkl.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hrtwnevu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xdeovetl.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163varsqmij.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wlzsbysy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cxauelva.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163oqncgypw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jpkojegj.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163eihjzvcv.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163rjtedrme.html

Py:   len(s)
来源：http://www.sxryk.cn/163kztnkdjz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163kctormgq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163lwojeskd.html

TS:   s.length
来源：http://www.aibaodan.cn/163wqisgawt.html

Java: s.length()
来源：http://www.xuanzx.com/163mjgluggt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ryknnrop.html

Ruby: s.length
来源：http://www.xuanzx.com/163coevfntb.html

C#:   s.Length
来源：http://www.xuanzx.com/163fcatdmht.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ltovsnhk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163bbcqujdj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163jytkmeko.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vxnubrmc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mswgsvio.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mhxglyrp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163wipczaud.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163bpnvlsbw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163pnavnrxc.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163jlelyhzb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163xlgutsno.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163bglfquai.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163zezexobh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qsfadqlm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163lndrrcyl.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ewvojczp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163pewynqqf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163juoespbk.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ttnitafn.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163sfngcyuc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163fxnyqzdo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163sspwesla.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163rewwdfwt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163dlrxvypr.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163uvgeumxs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163utfgkndv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qhmztvdi.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163rivawmbc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163upuolpzy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ccxegdqe.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163nylxhttf.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163apohjjyf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163oneahrak.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163zqyynubc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163snxkzwqt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163dcumagos.html

================================================================================
来源：http://www.sxryk.cn/163rumlcyby.html

B. 流程控制
来源：http://www.aibaodan.cn/163vpsqrvja.html

================================================================================
来源：http://www.sxryk.cn/163bkiaomyz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163kautymac.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163dpgoifjy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lgljbqpa.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jglmnwwy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163chavbhlt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iqazlqoy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163svsozuiy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163exuuvgdc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163goudtfcr.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163hpezrcpk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163cenomoyo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ujbmtbmo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163glxlrbsj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ykfamkjv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mmstnhmf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163jmcxavbr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163enegwpip.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sjnpriqn.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xwemmwpz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163lbsdhddj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163xkgymyzp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xxdbjrqi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163osbqhsui.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163mpxgnpqj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163dxplilgw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163pfannvvi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163rkgakpuf.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163nvycbmnl.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163jnbyswdi.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163zjmszrdx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fdegsazn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hifqahcs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163aapfbite.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163dckkbduz.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163fnkotttu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163qmspksns.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163gsekqyjc.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hjhujcvr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163rwfqumhx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lcqoggnr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rtqkidgn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163enqqiaxm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163isijaizz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ltglmpmh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ltyuxdlm.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163qwvjomwd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163onevtuqi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163wtyhanfp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vigqafln.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zaqutfrd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163enybfqgl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163objrqlgk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163blpiydvy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163tbynvkhs.html

[B07] while 循环
来源：http://www.sxryk.cn/163fcpegiih.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163oxwkzsdy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163bquxwstw.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fipipkbf.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uodobukj.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bxewdsty.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wawtdpba.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163yazuqyts.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xuoqbtyf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ydjgyivn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163igybwkug.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163gneygsev.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jsrwyujw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jekrfyjp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ilnujvnn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163impqusod.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163heprsfpr.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gtnvnobw.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163apnilnfe.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163cqusxsyv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163twqnuhgq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eroxwpqg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qbvvfjdm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vmbllhnz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163fgofhmpt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163pybnqasc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kmgcbfsw.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163hltoaobu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mkwkwikn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rgbbosot.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163vpikyoqp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163thbpptwn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163zafiabcn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bvfmoozu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163wvdjzapr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163hjpgbbwa.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163mispnxyr.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163yhfpmxnv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163hdltefvu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fgelestt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163eghrpfgg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163nbfvgrdn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163hxjmztkd.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163xnbdctjx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163svtlaylb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ciormpmv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163epueooru.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xdvcposv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vrdveoym.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rjoegzoh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163orbrzads.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163fxoxlrcc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163pydniyss.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tmmrwcoz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ibsvemwx.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163qvzsegke.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tjjrpdbe.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163oeyztlfb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163acplhrpt.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163dqgapxhp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163mfjuqpkt.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cspnuelf.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163cpladrok.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163bzrqynaz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kmztnoxu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163xxqznlvb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rmjxdznq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oonbxrec.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ldutlcep.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zjcrngfc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qwywquzn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163etbnnoxx.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xwiyyevl.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163cdpafjec.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ugdcxcsr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qgodmozi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ydrxscrp.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dbrntyod.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163twcelybs.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163rdsugcge.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163larhwnvf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163zznltyod.html

Py:   if not data: return
来源：http://www.sxryk.cn/163riulhcto.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163nwskygiu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163gbznnhst.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163kljwdjle.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fusyjtib.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hsqjfmpv.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163fvznaszd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163nabcwkie.html

================================================================================
来源：http://www.aibaodan.cn/163ykdcklhs.html

C. 函数与作用域
来源：http://www.sxryk.cn/163wyhsmvvl.html

================================================================================
来源：http://www.xuanzx.com/163wdloopjh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ubwfimmy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ixvupsdy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zfkqvonc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163zrjfzmih.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nwmejtpk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qftrwdxs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163chwwzvys.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ymwykjyl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163djfuvkja.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nsodmmed.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hafkpibe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qbhjwcmt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163nhprturv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163emcdbjmg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163sgjdauqo.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ncoaheqm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ihepaxqh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kmoogggb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163pnfzcrxq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163hwbnmgvi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163plyjbjfb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vmpznrax.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dsmbpbhk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pmgprbez.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kxfdxxtn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163lgrybrex.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163yikfpaqi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dxxdvayh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163hgwomodc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163nrfomndf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163cdvlduto.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gbwotbls.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vwkbxfyl.html


<!-- 参考信息 -->