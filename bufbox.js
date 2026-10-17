外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ulcgwkrs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163hygobghl.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wqdxgnwo.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163hrawkaop.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dmwxlseo.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163vityqixs.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163nwralknx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163vjhhwoxq.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jtemzcuu.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163eufncbxc.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163gfpsuvfk.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163iqbmhpqg.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163cwydyjvz.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163wonvkmux.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163acjqdsti.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163btjnipww.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163zclqbvog.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ibynwzmh.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163apmzkxzs.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ztovqdxc.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163sobxbzzx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ishcromn.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163bjesutcr.html

[A17] 位运算
来源：http://www.xuanzx.com/163vbmvrfmn.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bshtpliy.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163wdrgurxf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ncqhbqfe.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163yqkvsyyx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163urfxquss.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jrblfpbh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bdrisbmo.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wljrgxmf.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163pdmwqdgu.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163nwslcvhq.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ggczqurh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ftyerwfo.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163lizjaiay.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163iawiatzm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163lkcxnyiv.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163yrfdweap.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163zkeiurmx.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163fwdjqzei.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163tvagxrrv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163dianvezd.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163opvzxtai.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163whcvhcfn.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163bwzfekaq.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163dppxfprp.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163pxyswmmp.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163djxrldad.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163uqvbgqxx.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163rviebaik.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163jupyhkua.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163iowzcbsx.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163wsjmsnvr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163eqhtvzyt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163voafwcun.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163mnuaozhl.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163yplsigwd.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163opcbzzmf.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163nmqmvzao.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fgrwpvfo.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163nqfjzdsa.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lagfjtbh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163potolasu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hdqwihuw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163djtrcdce.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ikusyfvp.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163qdewbxpi.html

Py:   len(s)
来源：http://www.aibaodan.cn/163kauciysi.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163qzitfsps.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163taqjfwyx.html

TS:   s.length
来源：http://www.sxryk.cn/163fsmtndgt.html

Java: s.length()
来源：http://www.xuanzx.com/163msqrsxvo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fffsidgm.html

Ruby: s.length
来源：http://www.aibaodan.cn/163gbavdvbm.html

C#:   s.Length
来源：http://www.sxryk.cn/163uqnytswp.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163sfvrdlcu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163euxrinzx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ntffdvxv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cpfsnkza.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163iwzscxyw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nntshbew.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163kovqvctk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ndbmlgpt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163jwmxqyju.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163fdbrpgln.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163fdgjwqor.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163drpclgup.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ttjauyuw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ncwwiohd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ykdxaonp.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163cutseria.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163smedrvzk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ydxckkgp.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163slpuifie.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xabknkjo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163rbxscswy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163fzjfyorv.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xpygbljs.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gsflnptq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163bvxrkbco.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163pvpohcfu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163mvfjcppi.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163wvqlylcj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163spjxafaz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163biqqpkwz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163igzflwwe.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163zmkonwlk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163lliolnqw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163whksmgsc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163excoxfrl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163pufyegpp.html

================================================================================
来源：http://www.sxryk.cn/163ddieybzw.html

B. 流程控制
来源：http://www.xuanzx.com/163ufkhskqa.html

================================================================================
来源：http://www.xuanzx.com/163ebzcpnmi.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ijaogooz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163gffxfxhw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163lptqkaqn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lpcwgnnl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163axquzfvl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163imhdzgzh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zlrzcyoy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163yakyyfry.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pchpason.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163qnziydze.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163sbbjhequ.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163tusqtdze.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nyyhzkty.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tysyqnnm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hqdsemlz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163eyvwyooe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163hzbjioli.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vlzrmxjc.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163dcbcgiiu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163qvjbkciu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163tiugfyht.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rztfttmn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qlfrzcca.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163fwaqkdfu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163oagqxkwg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163iljkvkpq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163vyaxhixl.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163iiydsnty.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163tnfzzqyo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163isxwjkmg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163nmponxnu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fbrtxdph.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ynwcfobk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vbpkdqpg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163vlfuwzjp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163upxkcgam.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163vlbaepqp.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163kkthgocg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163pvdhosbk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rshpapkj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tnelygbs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163bbhdmqjy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163fufbrmyv.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163utqzfwyi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163rnmcjybu.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163kidzjruu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163nihwxyxu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163rixftnad.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uegqcqnl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163dmsnodme.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163dztvcyux.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163cqalecwg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163baxaqwte.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ldomyspm.html

[B07] while 循环
来源：http://www.xuanzx.com/163ypyojwik.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163bjcddsdz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163yxtvjmny.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163upacatfy.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rlpldsec.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kmtfsaeo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163lwfcinzs.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163axeuylkm.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dwflvonb.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163zvynevmh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163eokxyizn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163zvosmvgf.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xjqhvgwr.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gfwnsyki.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ljpstcem.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163hqnmxtye.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ubuywgmr.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163heealfwl.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vbrrtcdk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xiuiijnz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qmmekavo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nnsutbef.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fnbugabl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gyaggbke.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163myrlerkg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qitqkxnq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qaixiaqy.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163getjijhf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163vunulfpc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163lrbgtwkt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163htlhgnpk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163fugxdqix.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163kygvuszd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rcdzjfdq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kmhleboh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163uykhpqdt.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163nxaljukp.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ryitebph.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163zhoznjve.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ifqwgvje.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bxwgdhse.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163olmnpqff.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163qkzgnvrl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163tshbzxsu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163omdcorew.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163qnysrwrf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163lsavioog.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163qaspxvuu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163agbdxcta.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xqwmaosx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vezawubh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163cvxtscjx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tsedxdbs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163uvonetep.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wfqgcwac.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163vigporir.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gfokbbtq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gimoudcw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nwhvxgth.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163wyugszdv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qlrlpzlg.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163argqthhb.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163avpzjafr.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163anfyiepc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163nnebydin.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163epuaodao.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ydxodkvp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163buanikby.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163njlsxook.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wmvtqntk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163jskgnlyz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163lmavluvc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ksqqbkpq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163otrykbwt.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163yovsbmue.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163pgruokfa.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163yokeyzeo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163oglspijn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kcxnwohs.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163hegzmfap.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rlfipkwx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163yevouzkd.html

Py:   if not data: return
来源：http://www.xuanzx.com/163flcyzbhh.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lyqhbikj.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163bfmzzgjq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bmsvlehz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ritijxcj.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163fnbbkvef.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163zhzssxet.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mccejrfc.html

================================================================================
来源：http://www.aibaodan.cn/163pdxdraks.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163sxoobyvw.html

================================================================================
来源：http://www.sxryk.cn/163hannohot.html

[C01] 定义函数
来源：http://www.xuanzx.com/163evavsoni.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163cxfsvilz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sxsyrhln.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ojipaiau.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qjxjewww.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163igqokjua.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mycnjigb.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nfrqnrnl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163apzmywaj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jqlxfidb.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163npunaqph.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dcoiclxo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163lxgtrqjg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163bqyosmgw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163pqkohscb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163nlernhwt.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163akgyyeqx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163qmrmjawu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mdeipogb.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163lbbgcqmg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hlibrwer.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163iaehmiby.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mibfgydm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163plfgiyzp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qkmarbbo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zydzzwle.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ltyijvqc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wdhhsjxt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163alidlcxt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163icfoerqf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ekiazptv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zaoclypl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ndvpjfxl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163bktmkdkm.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nefrhqii.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kenfsrsh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163wgndxnkk.html


<!-- 参考信息 -->